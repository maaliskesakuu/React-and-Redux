import React from "react";
import moment from "moment";

const Notifications = props => {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-5">
        <div className="card-content">
          <span className="card-title">What's New</span>
          <ul>
            {notifications &&
              notifications.map(item => {
                return (
                  <li key={item.id}>
                    <span className="green-text text-darken-4">
                      {item.user}{" "}
                    </span>
                    <span>{item.content}</span>
                    <div className="grey-text text-darken-3">
                      {moment(item.time.toDate()).fromNow()}
                    </div>
                    <div className="divider"></div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
