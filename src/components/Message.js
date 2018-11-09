import React from 'react';

//Message: returns this message

//functional component: pass props to it
    // ****DO ALL FUNCTIONAL COMPONENTS HAVE PROPS PASSED TO THEM?****
        //not REQUIRED, but pointless to not have them b/c you could just make ONE item instead of a template for many items and producing one. 
    

//all of this will be passed to MessageList as Message (in the <Message />)

//  **** WHY DO WE USE "const Message = (props) => {" instead of "class ____ extends Component {"  
//     -IS IT BECAUSE IT IS A FUNCTIONAL COMPONENT??

const Message = (props) => {
    return (
        <div className="row message read">
            <div className="col-xs-1">
                <div className="row">
                    <div className="col-xs-2">
                        <input type="checkbox" />
                    </div>
                    <div className="col-xs-2">
                        <i className="star fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div className="col-xs-11">
                <span className="label label-warning">dev</span>
                <span className="label label-warning">gschool</span>
                <a href="http://www.tylerrobertpritchard.com">
                    Here is some message text that has a bunch of stuff
                </a>
            </div>
        </div>
    )
}

export default Message