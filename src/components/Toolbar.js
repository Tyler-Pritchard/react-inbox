import React, { Component } from "react";

class Toolbar extends Component {
  render() {
    return (
      <div>
        <div className="row toolbar">
          <div className="col-md-12">
            <p className="pull-right">
              <span className="badge badge">{this.props.unReadMessage}</span>
              unread messages
            </p>

            <button className="btn btn-default">
              <i
                onClick={() => this.props.selectedIndicatorFunc()}
                className={`fa fa${this.props.selectedIndicator()}-squar-o`}
              />
            </button>

            <button
              onClick={() => this.props.markAsReadFunc()}
              className="btn btn-default"
              disabled={`${this.props.toggleSelectStatus}`}
            >
              Mark As Read
            </button>

            <button
              onClick={() => this.props.markAsUnReadFunc()}
              className="btn btn-default"
              disabled={`${this.props.toggleSelectStatus}`}
            >
              Mark As Unread
            </button>

            <select className="form-control label-select" disabled="disabled">
              <option>Apply label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <select className="form-control label-select" disabled="disabled">
              <option>Remove label</option>
              <option value="dev">dev</option>
              <option value="personal">personal</option>
              <option value="gschool">gschool</option>
            </select>

            <button className="btn btn-default" disabled="disabled">
              <i className="fa fa-trash-o" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Toolbar;
