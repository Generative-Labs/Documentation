# WalletConnectV2 Connector

## Interface

Each project may have a different way to connect to a wallet. We provide a unified interface as the entry point for connecting and signing wallets. When the SDK needs wallet information or signatures, it will call the corresponding methods in `WalletConnector`. Because wallet communication supports the unified CAIP standard, whether through WalletConnectV2 or other wallet communication SDKs, it can be easily adapted to the `WalletConnector`interface.

- `connectWallet` is used to get wallet accounts’ ids
- `personalSign` is used to get a wallet signature

```dart
abstract class WalletConnector {
  /// Gets the signature of `personal_sign`.
  Future<String> personalSign(String message, String address,
      {String? password});

  /// Connects wallet, and gets the user wallet info.
  Future<Wallet> connectWallet();
}

class Wallet {
  /// account_id should supports CAIP-10
  List<String> accounts = [];

  /// Gets the list of DIDs.
  List<DID> get dids =>
      accounts.map((e) => getDidFromAccount(Account.from(e))).toList();

  Wallet(this.accounts);

  /// Gets the DID of the given account.
  static DID getDidFromAccount(Account account) {
    // convert account.address to lower case
    return DID(_walletType(account), account.address.toLowerCase());
  }

  /// Gets the wallet type of the given account.
  static String _walletType(Account account) {
    switch (account.namespace) {
      case 'eip155':
        return 'eth';
      default:
        return account.namespace;
    }
  }
}
```

## The WalletConnectV2Connector Sample Code

1. Add this to your package’s `pubspec.yaml` file

```dart
dependencies:
  walletconnect_flutter_v2: ^2.1.4
 url_launcher: ^6.1.11
```

then run `flutter packages get`

2. Create a class with above code:

```dart
// ignore_for_file: avoid_print

import 'package:url_launcher/url_launcher.dart';
import 'package:walletconnect_flutter_v2/walletconnect_flutter_v2.dart';
import 'package:web3mq/web3mq.dart';

/// You need to modify the code to match your Dapp metadata information and
/// the namespace required for the session request, as well as the parameters
/// required for the personal_sign function.
/// For more details on WalletConnectV2
/// plz see: https://github.com/WalletConnect/WalletConnectFlutterV2#commands-run-in-ci
class WalletConnectV2Connector implements WalletConnector {
  late Web3App wcClient;

  SessionData? session;

  @override
  Future<Wallet> connectWallet() async {
    // the projectId
    wcClient = await Web3App.createInstance(
      relayUrl: 'wss://relay.walletconnect.com',
      // The relay websocket URL, leave blank to use the default
      projectId: 'a0c738558362613d6a95c7b4bd9e8d6c',
      metadata: const PairingMetadata(
        name: 'web3mq-test dApp',
        description: 'A dapp that can request that transactions be signed',
        url: 'https://web3mq.com',
        icons: ['https://avatars.githubusercontent.com/u/40848675?s=200&v=4'],
      ),
    );

    ConnectResponse resp = await wcClient.connect(requiredNamespaces: {
      'eip155': const RequiredNamespace(
        chains: ["eip155:1"], // Ethereum chain
        methods: ['personal_sign'], events: [], // Requestable Methods
      )
    });

    final uri = resp.uri;
    if (null != uri) {
      await launchUrl(uri);
      session = await resp.session.future;
      final accounts = session!.namespaces['eip155']?.accounts;
      return Wallet(accounts ?? []);
    } else {
      return Wallet([]);
    }
  }

  @override
  Future<String> personalSign(String message, String address,
      {String? password}) async {
    final currentSession = session;
    if (currentSession == null) {
      throw Exception('Session is null');
    }

    // just send request won't lanuch wallet automatically,
    // so we need to launch it manually
    await launchUrl(Uri.parse('wc:'));

    final dynamic signResponse = await wcClient.request(
      topic: currentSession.topic,
      chainId: 'eip155:1',
      request: SessionRequestParams(
        method: 'personal_sign',
        params: [message, address],
      ),
    );

    return signResponse as String;
  }
}
```

:::note

You need to modify the code to match your Dapp metadata information and the namespace required for the session request, as well as the parameters required for the `personal_sign` function. For more details on WalletConnectV2 plz see: [https://github.com/WalletConnect/WalletConnectFlutterV2#commands-run-in-ci](https://github.com/WalletConnect/WalletConnectFlutterV2#commands-run-in-ci)

:::
