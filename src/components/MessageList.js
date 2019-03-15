import React, { Component } from "react";
import Message from "./Message";

class MessageList extends Component {
  render() {
    const { toggleSelect } = this.props;
    let MessageList = this.props.messages.map((message, index) => {
      console.warn(this.props);
      return (
        <Message
          toggleSelect={toggleSelect.bind(null, message.id)}
          key={index}
          message={message}
          userStarredMessage={this.props.userStarredMessage}
          selected={message.selected}
        />
      );
    });

    return <div>{MessageList}</div>;
  }
}
export default MessageList;
