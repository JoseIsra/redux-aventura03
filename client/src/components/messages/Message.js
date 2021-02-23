import React ,{ useState } from 'react';
import './Message.css';
export const Message = ({message, date}) => {
    
    return (
        <div className="message">
            <div className="message__content">
            <p>{message}</p>
            <p><em>{new Date(date).toUTCString()}</em> </p>
            </div>
        </div>
    )
}
