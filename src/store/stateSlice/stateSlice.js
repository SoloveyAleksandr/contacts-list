import { createSlice } from '@reduxjs/toolkit';

const stateSlice = createSlice({
  name: 'stateSlice',

  initialState: {
    creationPopupIsActive: false,
    delitionPopupIsActive: false,
    addInfoPopupIsActive: false,
    currentContactID: null,
  },

  reducers: {
    setActiveCreationPopup(state) {
      state.creationPopupIsActive = !state.creationPopupIsActive;
    },
    setActiveDelitionPopup(state) {
      state.delitionPopupIsActive = !state.delitionPopupIsActive;
    },
    setCurrentContactID(state, action) {
      state.currentContactID = action.payload;
    },
    setActiveAddInfoPopup(state) {
      state.addInfoPopupIsActive = !state.addInfoPopupIsActive;
    },
  }
});

export const {
  setActiveCreationPopup,
  setActiveDelitionPopup,
  setCurrentContactID,
  setActiveAddInfoPopup,
} = stateSlice.actions;

export default stateSlice.reducer;
