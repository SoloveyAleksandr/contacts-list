import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const storeSlice = createSlice({
  name: 'storeSlice',

  initialState: {
    contactsList: [{
      ID: "ws9fe99g",
      contactName: 'default',
      contactInfo: [],
    }],
    contactForm: {
      ID: uuid().slice(0, 8),
      contactName: '',
      contactInfo: [],
    },
    currentContact: {
      ID: "ws9fe99g",
      contactName: 'default',
      contactInfo: [],
    },
    editContactValue: {
      title: '',
      text: '',
    },
    prevContactState: {},
  },

  reducers: {
    addContactName(state, action) {
      state.contactForm.contactName = action.payload;
    },
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    clearContactForm(state) {
      state.contactForm = {
        ID: uuid().slice(0, 8),
        contactName: '',
        contactInfo: [],
      }
    },
    deleteContact(state, action) {
      state.contactsList.filter((contact) => contact.ID !== action.payload);
    },
    setCurrentContact(state, action) {
      state.contactsList.forEach(el => {
        if (el.ID === action.payload) {
          state.currentContact = el;
        }
      })
    },
    addContactInfo(state, action) {
      state.currentContact.contactInfo.push(action.payload);
    },
    saveContactInfo(state) {
      state.contactsList.forEach(el => {
        if (el.ID === state.currentContact.ID) {
          el.contactInfo = state.currentContact.contactInfo;
        }
      })
    },
    deleteContactInfo(state, action) {
      state.currentContact.contactInfo = state.currentContact.contactInfo.filter((info) => info.ID !== action.payload);
    },
    setEditContactValue(state, action) {
      state.currentContact.contactInfo.forEach(item => {
        if (item.ID === action.payload) {
          state.editContactValue.title = item.title;
          state.editContactValue.text = item.text;
        }
      })
    },
    setEditContactTitle(state, action) {
      state.editContactValue.title = action.payload;
    },
    setEditContactText(state, action) {
      state.editContactValue.text = action.payload;
    },
    editContactInfo(state, action) {
      state.currentContact.contactInfo.forEach(item => {
        if (item.ID === action.payload) {
          item.title = state.editContactValue.title;
          item.text = state.editContactValue.text;
          console.log('edit item');
        }
      });
    },
    setPrevContactState(state) {
      state.prevContactState = state.currentContact;
    },
    cancelChange(state) {
      state.currentContact = state.prevContactState;
    },
    clearPrevContactState(state) {
      state.prevContactState = {};
    },
  },
});

export const {
  addContactName,
  addContact,
  clearContactForm,
  deleteContact,
  setCurrentContact,
  addContactInfo,
  saveContactInfo,
  deleteContactInfo,
  setEditContactValue,
  setEditContactTitle,
  setEditContactText,
  editContactInfo,
  setPrevContactState,
  cancelChange,
  clearPrevContactState,
} = storeSlice.actions;

export default storeSlice.reducer;
