import React, { Component } from 'react'

//builds a message list from Message
//can be class component instead of functional-- personal preference

//will import message component later..  ...it was later imported
import Message from './Message'
//which has '{ Component }' in it, which has 'state'(therefore, you don't need state)

class MessageList extends Component {

    render() {
        console.log(this.props.messages)     
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