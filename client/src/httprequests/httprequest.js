
import http from '../axiosconfig';

const sendChannel = (data)=>{
    return http.post('/channel', data);
}

const getChannels = ()=>{
    return http.get('/channels');
}


export const process={
    sendChannel,
    getChannels
}