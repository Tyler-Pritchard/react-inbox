import React, { Component } from 'react'

//builds a message list from Message
//can be class component instead of functional-- personal preference

//will import message component later..  ...it was later imported
import Message from './Message'
//which has '{ Component }' in it, which has 'state'(therefore, you don't need state)

//A class component requires you to extend from "React.Component" and create a render function which returns a React element.
class MessageList extends Component {

    render() {
        // console.log(this.props.messages)
            //set MessageList to do something with this.props.messages
                // --> build an array of messages w/ ^^^

        let MessageList =  this.props.messages.map( ( message, index ) => {
            //data is taken from the array in App, then passed DOWN to <Messages /> in App, then the data is received in MessageList through PROPS because it extends App
            //build an array of MESSAGE COMPONENTS using the data from App
            return (
                <Message 
                    key={index} 
                    message={message}
                    //add the star function as props from Message
                    //cannot use "message" b/c "message" refers to the state data
                    //the information is taken from props
                    userStarredMessage={ this.props.userStarredMessage }

                    //this was passed DOWN from "messageList", so it's been passed down twice
                    userSelectedMessage={ this.props.userSelectedMessage }

                    //bring in information/function(props?) from App
                    userReadMessage={ this.props.userReadMessage }
                    //add "userReadMessage" to "messageList" arg; passed to arguments object in "Message.js"'s "const Message = ({..."

                />
            )
        } )
    //use "Message: With Labels" from Inbox Style Guide because it has the most on it

        return (
            <div>
                {/* Message === only one message so far; --> later moved up to render function */}
                {MessageList}
            </div>
        )
    }
}
export default MessageList