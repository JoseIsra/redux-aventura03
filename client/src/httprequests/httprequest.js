
import http from '../axiosconfig';

const sendChannel = (data)=>{
    return http.post('/channel', data);
}

const getChannels = ()=>{
    return http.get('/channels');
}

const submitMessage =(data)=>{
    return http.post('/message',data);
}

const loadMessages =(id)=> {
    return http.get(`/messages/${id}`);
}


export const process={
    sendChannel,
    getChannels,
    submitMessage,
    loadMessages
}