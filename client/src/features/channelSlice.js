import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
  channelinfo: null,
}


const channelSlice = createSlice({
  name: 'mychannel',
  initialState,
  reducers: {
    selectChannelName: (state, action) => {
      return{
        ...state,
        channelinfo:action.payload
      }
    },
    
  },
});

export const  {selectChannelName}   = channelSlice.actions;



// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.channel.value)`
export const selectChannel = state => state.mychannel.channelinfo;

export default channelSlice.reducer;
