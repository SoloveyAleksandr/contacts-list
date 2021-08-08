import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const storeSlice = createSlice({
  name: 'storeSlice',

  initialState: {
    contactsList: [{
      ID: "ws9fe99g",
      contactName: 'default',
      contactInfo: [{
        title: 'phone',
        text: '+375 29 106 86 68',
      }],
    }],
    contactForm: {
      ID: uuid().slice(0, 8),
      contactName: '',
      contactInfo: [],
    },
    currentContact: {
      ID: "ws9fe99g",
      contactName: 'default',
      contactInfo: [{
        title: 'phone',
        text: '+375 29 106 86 68',
      }],
    },
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
  },
});

export const {
  addContactName,
  addContact,
  clearContactForm,
  deleteContact,
  setCurrentContact,
} = storeSlice.actions;

export default storeSlice.reducer;
