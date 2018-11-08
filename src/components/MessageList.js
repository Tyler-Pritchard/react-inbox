import React, { Component } from 'react'

//builds a message list from Message
//can be class component instead of functional-- personal preference

//will import message component later
import Message from './Message'

class MessageList extends Component {

    render() {

    //use "Message: With Labels" from Inbox Style Guide because it has the most on it

        return (
            <div>
                {/* Message === only one message so far */}
                <Message />
            </div>
        )
    }
}
export default MessageList