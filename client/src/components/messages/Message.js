import React from 'react';
import './Message.css';
export const Message = ({message}) => {
    return (
        <div className="message">
            <p>{message}</p>
        </div>
    )
}
