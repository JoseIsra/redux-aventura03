import React, { useState ,useEffect } from 'react';
import './Sidebar.css';
import { process } from '../../httprequests/httprequest';
import { Channel } from '../../components';

export const Sidebar = () => {

    const [input, setInput] = useState({
        name:''
    });
    const [channels, setChannels] = useState([]);


    const fetchChannels= async()=>{
            const response = await process.getChannels();
            setChannels(response.data);
    }

    useEffect(()=> {
        fetchChannels();
    },[])


    const addNewChannel =  (e)=>{
        e.preventDefault();
        process.sendChannel(input)
        .then(res =>{
            fetchChannels();
            setInput({
                name:''
            })
        })
        .catch(error => console.log(error))
}

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <h3>Crea tus canales aquí </h3>
            </div>
        <div className="sidebar__form">
            <form onSubmit={addNewChannel}>
                <input 
                value={input.name}
                onChange={(e)=> setInput({...input, name:e.target.value})}
                type="text" placeholder="nombre..." />
                <button type="submit">Crear</button>
            </form>
        </div>

            <div className="sidebar__channels">
                {/* aqui se renderizaran los canales */}
            {channels.map((channel)=> (
                <Channel key={channel._id} id={channel._id} name={channel.name} />
            ))}
            </div>
            <div className="gif_image">
            <img src="https://media1.giphy.com/media/xSM46ernAUN3y/giphy.webp?cid=ecf05e4779zhltnd13svi7orehj3ge5qqyyzl35bqegcota2&rid=giphy.webp" alt="imagen" />

            </div>
                
        </div>
    )
}
