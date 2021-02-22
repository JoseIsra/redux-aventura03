import React ,{useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import  { process } from '../../httprequests/httprequest';
import { selectChannel } from '../../features/channelSlice';
import { Message } from '../../components';
import './Chat.css';
export const Chat = () => {
    const mychannel = useSelector(selectChannel);
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);


    useEffect(() => {
        process.loadMessages(mychannel?.id)
        .then(response => {
            console.log(response?.data);
            setMessageList(response.data)
        }).catch(error => console.log(error))
        
        
    }, [mychannel?.id])



    const sendMessage =(e)=>{
        e.preventDefault();
            let messageObject={
                message:message,
                canal_id:mychannel.id    
            }
        process.submitMessage(messageObject)
        .then(res=> {
            
            setMessage('');
        }).catch(error => console.log(error));
    }
    return (
        <div className="chat">
            <div className="chat__header">
                {mychannel && <p> {mychannel.name}</p>}
            </div>

            <div className="chat__messages">
                {messageList.map(message => (
                    <Message  key={message._id} {...message}  />
                ))}
            </div>

            <div className="chat__messageInput">
                <form >
                    <input type="text" 
                    value={message}
                    onChange={(e)=> setMessage(e.target.value)}
                    placeholder="nuevo mensaje..." />
                    <button onClick={sendMessage}
                    type="submit">asdadasd</button>
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
