import React from 'react';
import { useDispatch } from 'react-redux';
import { selectChannelName } from '../../features/channelSlice';
import './Channel.css';
export const Channel = ({id , name}) => {
    
    const dispatch = useDispatch();

    return (
        <div className="channel" onClick={()=> dispatch(selectChannelName({
            id,
            name
        }))}>
            <p>{name}</p> 
        </div>
    )
}
