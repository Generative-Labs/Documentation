# MessageList

The `MessageList` component renders a scrollable list of messages. The UI for each individual message is rendered conditionally based on its `message.type` value. The list renders date separators, new message notifications, system messages, deleted messages, and standard messages containing text and/or attachments.

By default, the `MessageList` loads the most recent 20 messages held in the `channel.state`. More messages are fetched from the Stream Chat API and loaded into the DOM on scrolling up the list. The currently loaded messages are held in the `ChannelStateContext` and can be referenced with our custom hook.

```tsx
const { messages } = useChannelStateContext();
```

The `MessageList` has no required props and by default pulls overridable data from the various contexts established in the `Channel` component. Customization of the messages rendered within the list is handled by the `Message UI` component.

## Basic Usage

As a context consumer, the `MessageList` component must be rendered as a child of the `Channel` component. It can be rendered with or without a provided `messages` prop. Providing your own `messages` value will override the default value drawn from the `ChannelStateContext`.

```tsx
const customMessages = [
  // array of messages
];

<Chat client={client}>
  <ChannelList />
  <Channel>
    <MessageList messages={customMessages} />
    <MessageInput />
  </Channel>
</Chat>;
```
