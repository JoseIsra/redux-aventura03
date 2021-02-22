import React ,{ useState } from 'react';
import './Message.css';
export const Message = ({message, date}) => {
    
    return (
        <div className="message">
            <p>{message}</p>
            <p>{new Date(date).toUTCString()} </p>
        </div>
    )
}
