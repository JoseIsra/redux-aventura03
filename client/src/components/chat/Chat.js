import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { process } from '../../httprequests/httprequest';
import { selectChannel } from '../../features/channelSlice';
import { Message } from '../../components';
import { Select } from "@chakra-ui/react";

import './Chat.css';
export const Chat = () => {
    const mychannel = useSelector(selectChannel);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);


    useEffect(() => {
        if (mychannel?.id) {
            process.loadMessages(mychannel?.id)
                .then(response => {
                    setMessageList(response.data)

                }).catch(error => console.log(error))
        }
    }, [mychannel?.id])

    const fetchThing = () => {
        process.loadMessages(mychannel?.id)
            .then(response => {
                setMessageList(response.data)
            }).catch(error => console.log(error))
    }
    useEffect(() => {
        fetchThing();
    }, [])

    const joinMessage = (e) => {
        let newMessage = message.concat(' ', e.target.value);
        console.log(newMessage);
        setMessage(newMessage)
    }

    const sendMessage = (e) => {
        e.preventDefault();
        let messageObject = {
            message: message,
            canal_id: mychannel.id
        }
        process.submitMessage(messageObject)
            .then(res => {
                fetchThing();
                setMessage('');
            }).catch(error => console.log(error));
    }
    return (
        <div className="chat">
            {mychannel ? (
                <>
                    <div className="chat__header">
                        <h3> Está en el canal: {mychannel.name}</h3>
                    </div>

                    <div className="chat__messages">
                        {messageList.map(message => (
                            <Message key={message._id} {...message} />
                        ))}
                    </div>

                    <div className="chat__messageInput">
                        <form >
                            <input type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="nuevo mensaje..." />
                            <button onClick={sendMessage}
                                type="submit">asdadasd</button>
                        </form>
                        <div className="emoticons">
                            <Select  onChange={joinMessage}
                            color="gray"
                            placeholder="Escoge..">
                                <option value="DAMMMN">DAMMMN</option>
                                <option value="NICE NICE">NICE NICE </option>
                                <option value="ME RÍO">ME RÍO</option>
                            </Select>

                        </div>
                    </div>
                </>

            ) : (<p> SELECCIONE UN CANAL</p>)}

        </div>
    )
}
