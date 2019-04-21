import React from "react";

const Notification = ({ type, text }) => {
    let className = `alert alert-${type}`;

    return (<div className={className} role="alert">
        {text}
    </div>);
};

export default Notification;
