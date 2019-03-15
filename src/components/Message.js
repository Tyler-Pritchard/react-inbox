import React from "react";
const Message = props => {
  console.log(props);
  const { message, userStarredMessage, toggleSelect } = props;
  let labelList = message.labels.map((label, index) => (
    <span key={index} className="label label-warning">
      {label}
    </span>
  ));
  return (
    <div
      className={`row message ${message.read ? "read" : "unread"} ${
        message.selected ? "selected" : ""
      } `}
    >
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              onChange={toggleSelect}
              checked={props.selected}
            />
          </div>
          <div className="col-xs-2">
            <i
              className={`star fa fa-star${message.starred ? "" : "-o"}`}
              onClick={() => userStarredMessage(message)}
            />
          </div>
        </div>
      </div>
      <div>
        className="col-xs-11"
        {labelList}
        <a href="#">{message.subject}</a>
      </div>
    </div>
  );
};

export default Message;
