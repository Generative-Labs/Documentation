# Thread

The `Thread` component renders a list of replies tied to a single parent message in a channel's main message list. A `Thread` maintains its own state and renders its own `MessageList` and `MessageInput` components. Each piece of rendered UI can be overridden with custom components either drawn from the ComponentContext or supplied via props.

The `Thread` component consumes the contexts established in `Channel` and does not have any required props.

## Basic Usage

As a context consumer, the Thread component must be rendered as a child of the Channel component. To enable smooth Thread mount and unmount behavior, wrap the main channel components in the Window component. Window handles width changes in the main channel to ensure a seamless user experience when opening and closing a Thread.

```tsx
<Chat client={client}>
  <ChannelList />
  <Channel>
    <Window>
      <MessageList />
      <MessageInput />
    </Window>
    <Thread />
  </Channel>
</Chat>
```
