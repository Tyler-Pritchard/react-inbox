import React from 'react';

//Message: returns this message

//functional component: pass props to it
    //****DO ALL FUNCTIONAL COMPONENTS HAVE PROPS PASSED TO THEM?**** */

//all of this will be passed to MessageList as Message (in the <Message />)
const Message = (props) => {
    return (
        <div class="row message read">
            <div class="col-xs-1">
                <div class="row">
                    <div class="col-xs-2">
                        <input type="checkbox" />
                    </div>
                    <div class="col-xs-2">
                        <i class="star fa fa-star"></i>
                    </div>
                </div>
            </div>
            <div class="col-xs-11">
                <span class="label label-warning">dev</span>
                <span class="label label-warning">gschool</span>
                <a href="#">
                    Here is some message text that has a bunch of stuff
                </a>
            </div>
        </div>
    )
}

export default Message