import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const stateSlice = createSlice({
  name: 'stateSlice',

  initialState: {
    creationPopupIsActive: false,
    delitionPopupIsActive: false,
    addInfoPopupIsActive: false,
    currentContactID: null,
    newUserInfo: {
      ID: uuid().slice(-10),
      title: '',
      text: '',
    },
    currentContactInfoID: null,
    editInfoPopupIsActive: false,
    cancelPopupIsActive: false,
    editNamePopupIsActive: false,
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
    setUserInfoTitle(state, action) {
      state.newUserInfo.title = action.payload;
    },
    setUserInfoText(state, action) {
      state.newUserInfo.text = action.payload;
    },
    clearNewUserInfo(state) {
      state.newUserInfo = {
        ID: uuid().slice(-10),
        title: '',
        text: '',
      };
    },
    setCurrentContactInfoID(state, action) {
      state.currentContactInfoID = action.payload;
    },
    setActiveEditPopup(state) {
      state.editInfoPopupIsActive = !state.editInfoPopupIsActive;
    },
    setActiveCancelPopup(state) {
      state.cancelPopupIsActive = !state.cancelPopupIsActive;
    },
    setActiveEditNamePopup(state) {
      state.editNamePopupIsActive = !state.editNamePopupIsActive;
    },
  },
});

export const {
  setActiveCreationPopup,
  setActiveDelitionPopup,
  setCurrentContactID,
  setActiveAddInfoPopup,
  setUserInfoTitle,
  setUserInfoText,
  clearNewUserInfo,
  setCurrentContactInfoID,
  setActiveEditPopup,
  setActiveCancelPopup,
  setActiveEditNamePopup,
} = stateSlice.actions;

export default stateSlice.reducer;
