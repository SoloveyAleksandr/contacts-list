import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import {
  addContactName,
  addContact,
  clearContactForm,
  deleteContact,
  setCurrentContact,
} from '../../store/storeSlice';

import {
  setActiveCreationPopup,
  setActiveDelitionPopup,
  setCurrentContactID,
} from '../../store/stateSlice/stateSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faUserMinus,
  faUserEdit,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons';

import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Popup from '../../components/Popup/Popup';
import ContactCreationForm from '../../components/UserCreationForm/ContactCreationForm';
import ConfirmationForm from '../../components/ConfirmationForm/ConfirmationForm';

import style from './ContactsList.module.css';

function ContactsList() {
  const store = useSelector((state) => state.store);
  const state = useSelector((state) => state.state);
  const reduxDispatch = useDispatch();

  const contactsList = store.contactsList;

  const openCreationPopup = () => {
    reduxDispatch(setActiveCreationPopup());
    reduxDispatch(clearContactForm());
  };

  const createContact = (e) => {
    e.preventDefault();
    reduxDispatch(addContact(store.contactForm));
    openCreationPopup();
  };

  const openDeletionPopup = () => {
    reduxDispatch(setActiveDelitionPopup());
  };

  const delitionRequest = (id) => {
    reduxDispatch(setCurrentContactID(id));
    openDeletionPopup();
  };

  const removeContact = () => {
    reduxDispatch(deleteContact(state.currentContactID));
    openDeletionPopup();
  };

  return (
    <div className="contacts">
      <Popup
        isActive={state.delitionPopupIsActive}
        closeFunc={openDeletionPopup}>
        <ConfirmationForm
          title={'delete a contact?'}
          accept={removeContact}
          cancel={openDeletionPopup} />
      </Popup>

      <Popup
        isActive={state.creationPopupIsActive}
        closeFunc={openCreationPopup}>
        <ContactCreationForm
          onSubmit={createContact}
          contactName={store.contactName}
          changeName={(e) => reduxDispatch(addContactName(e.target.value))}
          cancelBtn={
            <DefaultButton
              onClick={openCreationPopup}
              type='button'
              content={<FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>} />}
          acceptBtn={
            <DefaultButton
              type='submit'
              content={<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>} />} />
      </Popup>

      <div className={style['contacts-header']}>
        <DefaultButton
          onClick={openCreationPopup}
          type='button'
          content={<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>} />
      </div>
      <ul className='contacts-list'>
        {
          contactsList.map((el, indx) =>
            <li
              key={el.ID}
              className={style['contacts-list__item']}>
              <div>
                <span className={style['contacts-list__user-number']}>{indx + 1}.</span>
                <span className={style['contacts-list__username']}>{el.contactName}</span>
              </div>
              <div className={style['contacts-list__buttons']}>
                <span className={style['contacts-list__btn-wrapper']}>
                  <NavLink to={`/user:${el.ID}`}>
                    <DefaultButton
                      className={style['contacts-list__btn']}
                      onClick={() => reduxDispatch(setCurrentContact(el.ID))}
                      type='button'
                      content={<FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon>} />
                  </NavLink>
                </span>
                <span className={style['contacts-list__btn-wrapper']}>
                  <DefaultButton
                    className={style['contacts-list__btn']}
                    onClick={() => delitionRequest(el.ID)}
                    type='button'
                    content={<FontAwesomeIcon icon={faUserMinus}></FontAwesomeIcon>} />
                </span>
              </div>
            </li>)
        }
      </ul>
    </div>
  );
}

export default ContactsList;
