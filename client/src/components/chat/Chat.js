import React from 'react';
import { useSelector } from 'react-redux';
import { selectChannel } from '../../features/channelSlice';
import './Chat.css';
export const Chat = () => {
    const mychannel = useSelector(selectChannel);

    
    return (
        <div className="chat">
            <div className="chat__header">
                {mychannel && <p> {mychannel.name}</p>}
            </div>

            <div className="chat__messages">
            <p>MENSAJE UNO </p>
            <p>MENSAJE UNO </p>
            <p>MENSAJE UNO </p>
            <p>MENSAJE UNO </p>
            </div>

            <div className="chat__messageInput">
                <form>
                    <input type="text" placeholder="nuevo mensaje..." />
                    <button>asdadasd</button>
                </form>
                <div className="emoticons">
                <select>
                    <option>CACAHUATE</option>
                    <option>QUÉ LOCO CAUSA</option>
                    <option>A VER</option>
                </select>

                </div>
            </div>
        </div>
    )
}
