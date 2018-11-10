import React from 'react';

//Message: returns this message

//functional component: pass props to it
    // ****DO ALL FUNCTIONAL COMPONENTS HAVE PROPS PASSED TO THEM?****
        //not REQUIRED, but pointless to not have them b/c you could just make ONE item (instead of a template for many items) and producing one. 
    

//all of this will be passed to MessageList as Message (in the <Message />)

//  **** WHY DO WE USE "const Message = (props) => {" instead of "class ____ extends Component {"  
//     -IS IT BECAUSE IT IS A FUNCTIONAL COMPONENT?? ----- YES.


//deconstruct props to point directly to message; 
//refactor "<div className={`row message ${message.readrefactor..."   --->   "${message.read ?..."  use ES6
// const Message = (props) => {
    //*** ES6 QUESTION: WHY COMMAS ON "const Message" */
    //"userStarredMessage is our function"
const Message = ({ message, userStarredMessage, userSelectedMessage, userReadMessage }) => { 
    //set labels to label list for access
    let labelList = messages.labels.map( ( label, index ) => {
        return (
            //having issues with "key"
            <span key={index} className="label label-warning">{label}</span>

            // copied from down-code label line. replace "dev" with "(label)"
            <span className="label label-warning">(label)</span>
            //then use "labelList" in label className
        )
    }   )

    return (
        //this line cannot default the message to "read"... refactor to take variable(ie, props.message) using ES6; Use a boolean value(which corresponds to the props.message.read in App array) to set the default value of read status --->
        // <div className="row message read"> ----->
        //add message highlight using "message.selected" ternary
        <div 
            className={`row message ${message.read  ? 'read' : 'unread' } ${ message.selected ? 'selected' : ''} `}
        >
            <div 
                className="col-xs-1"
            >
                <div 
                    className="row"
                >
                    <div 
                        className="col-xs-2"
                    >
                        {/* set checked status of messages; array in App has some values == true, others non-existent */}
                        <input 
                            type="checkbox"
                            checked={ message.selected }
                            //since you can select with spacebar, use "onChange"
                            onChange={ () => userSelectedMessage( message ) }
                            // ^^^ function will be run up in the "const Message = ..."
                            // *****     IS THIS ^^^ RUN AS PROPS??? ******
                            />
                    </div>
                    <div 
                        className="col-xs-2"
                        >
                        {/* set starred status to correspond to array in App(ie. "message.starred").  If "true" --> do nothing/'', else, add star/'-o' */}
                        <i 
                            className={`star fa fa-star${ message.starred ? '' : '-o' }`}
                            //onClick, we use userStarredMessage, but we have to run it.  Give it the arguement "message"
                            //runs "userStarredMessage" from the App file.
                            onClick={ () => userStarredMessage( message ) }
                        ></i>
                    </div>
                </div>
            </div>
            <div 
                className="col-xs-11"
            >
                {/* labels comes down as an array value in message. assigned to variable labelList up-code.  Move "dev" label up-code into labelList, replace "dev" with "(label)". */}
                {/* <span className="label label-warning">dev</span> */}
                
                {/* delete gschool label */}
                {/* <span className="label label-warning">gschool</span> */}

                {/* use labelList created below the Message assignment up-code */}
                {labelList}
                <a href="#">
                    {/* Here is some message text that has a bunch of stuff */}
                {message.subject}
                </a>
                console.log(labelList);
            </div>

        </div>
    )
}

export default Message