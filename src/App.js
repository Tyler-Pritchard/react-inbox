//**** IS IT BEST PRACTICE TO USE { Component } ?*** */
  //MUST have { Component } because it's used in the App classification
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
//make sure to note sub-folders when importing Components
import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'

//it gets "Component" from App ---->**** NOT EXACTLY SURE WHAT HE MEANS BY THAT ****

//"We are building App, from nothing.  Like we magically formed it from something from nothing.  But we gave it 'Component' from React-- and we're giving it 'state', which has 'messages', which is an array of objects of messages... Then we pass the DATA in "state" DOWN to the components (with 'props'[which IS an array of messges], ie. 'messages' will be a prop which contains 'this.state.messages')"
class App extends Component {

  // this is the state data.  It was taken from the Inbox StyleGuide: Seeds 
  //state MUST be maintained INSIDE the CLASS ^^^
  
  // "this.state.messages"(i.e. "App.state.messages") IS the array of messages
    //it gets "Component" from "App"   <-- *** I'M NOT QUITE SURE WHAT HE MEANS ***
  
  state = {
    //named "messages" b/c that's our seed
    messages: [
      {
        "id": 1,
        "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
        "read": false,
        "starred": true,
        "labels": ["dev", "personal"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 3,
        "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
        "read": false,
        "starred": true,
        "labels": ["dev"]
      },
      {
        "id": 4,
        "subject": "We need to program the primary TCP hard drive!",
        "read": true,
        "starred": false,
        "selected": true,
        "labels": []
      },
      {
        "id": 5,
        "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
        "read": false,
        "starred": false,
        "labels": ["personal"]
      },
      {
        "id": 6,
        "subject": "We need to back up the wireless GB driver!",
        "read": true,
        "starred": true,
        "labels": []
      },
      {
        "id": 7,
        "subject": "We need to index the mobile PCI bus!",
        "read": true,
        "starred": false,
        "labels": ["dev", "personal"]
      },
      {
        "id": 8,
        "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
        "read": true,
        "starred": true,
        "labels": []
      }
    ]
  }

  //as a USER, I need to STAR/UN-STAR with a FUNCTION --> create in App.js
  //this function is a class property --> passed DOWN to "MessageList"
  //we called the prop "userStarredMessage" and gave it the function "this.userStarredMessage" which === "userStarredMessage = () ..."
  //it is sent to the message list as "user"
  // userStarredMessage = () => {
  //   // console.log('here')
  //   //toggles the star
  //   message.starred = !message.starred

  //   //next we have to SET STATE
  //   //start with the original, and concat onto it message
  //   //***INSTRUCTOR DOES NOT KNOW WHY USING CONCAT DOES NOT ADD ANYTHING TO THE MESSAGE**** */
  //   this.setState( this.state.messages.concat(message) )
  // }


  // ++++++++++SELECTING INDIVIDUAL MESSAGES+++++++++++++

  userSelectedMessage = (message) => {
    //toggle method
    message.selected = !message.selected
    //inexplicable state-toggle from video
    this.setState( this.state.messages.concat(message) )
  }
  //function must then be passed DOWN
  userStarredMessage = (selectorMessage) => {
    let {messages} =  this.state;
    messages.forEach(message => {
      if (message.id === selectorMessage.id) {
      //toggle method
      message.starred = !message.starred
        
      }
    })
    //by calling "this.setState" from an onClick(see Message.js for click) we tell React to re-render whenever it's clicked
      //automatically updates child components
    this.setState({messages})
  }

  // +++++++++    USER READ MESSAGE ++++++++++
  userReadMessage = (selectorMessage) => {
    let {messages} =  this.state;
    messages.forEach(message => {
      if (message.id === selectorMessage.id) {
      //toggle method
        message.read = !message.read 
      }
    })
    this.setState({messages})
  }

  // ++++++++++++++selectedIndicator (for Toolbar) +++++++++++++++

  selectedIndicator = () => {
    let amountSelected =  this.state.messages.filter( message => {
      return message.selected
    } ).length

    let action = ''

    if (amountSelected === this.state.messages.length) {
      action = '-check'
    } else if (amountSelected === 0) {
      action = ''
    } else {
      action = '-minus'
    }

    return action
  }


  //render method returns a DESCRIPTION of what is seen on screen
  //render RETURNS A REACT ELEMENT(lightweight description of what to render)
  render() {
    return (
      <div className="App">
        {/* put Toolbar first, b/c it's the first one */}
        <Toolbar 
          selectedIndicator={ this.selectedIndicator } />
        {/* we pass information DOWN from 'messages' */}
        <MessageList 
          messages={ this.state.messages }
          //add STAR FUNCTION 
          //*** IS "userStarredMessage" ANOTHER PROPS? IT'S CONTAINED IN CLASS, BUT NOT PART OF STATE *** */
          userStarredMessage={ this.userStarredMessage } //  <-- this referres to "userStarredMessage" under the state data
          // userSelectedMessage={this.props.userStarredMessage}

          //pass this to message list
          userSelectedMessage={ this.userSelectedMessage }
          //pass this info to "MessageList", where it will be passed down again, ===> "messageList"

          //pass "userReadMessage" function
          userReadMessage={ this.userReadMessage }

        />
      </div>
    );
  }
}

export default App;
