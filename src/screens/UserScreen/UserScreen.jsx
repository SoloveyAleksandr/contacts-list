import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPlus,
  faCheckCircle,
  faTimesCircle,
  faBackward,
  faArrowCircleLeft,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import {
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
  setEditContactName,
  saveContactName,
} from '../../store/storeSlice';
import {
  setActiveAddInfoPopup,
  setUserInfoTitle,
  setUserInfoText,
  clearNewUserInfo,
  setActiveDelitionPopup,
  setCurrentContactInfoID,
  setActiveEditPopup,
  setActiveCancelPopup,
  setActiveEditNamePopup,
} from '../../store/stateSlice/stateSlice';

import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Popup from '../../components/Popup/Popup';
import AddInfoForm from '../../components/AddInfoForm/AddInfoForm';
import ConfirmationForm from '../../components/ConfirmationForm/ConfirmationForm';
import ContactCreationForm from '../../components/UserCreationForm/ContactCreationForm';

import style from './UserScreen.module.css';

function UserScreen() {
  const store = useSelector((state) => state.store);
  const state = useSelector((state) => state.state);
  const reduxDispatch = useDispatch();

  const contact = store.currentContact;

  const saveContact = () => {
    reduxDispatch(saveContactInfo());
  };

  const openAddInfoPopup = () => {
    reduxDispatch(clearNewUserInfo());
    reduxDispatch(setActiveAddInfoPopup());
  };

  const addInfoItem = (e) => {
    e.preventDefault();
    reduxDispatch(addContactInfo(state.newUserInfo));
    openAddInfoPopup();
    saveContact();
  };

  const openDeletionPopup = () => {
    reduxDispatch(setActiveDelitionPopup());
  };

  const closeDeletionPopup = () => {
    reduxDispatch(clearPrevContactState());
    reduxDispatch(setActiveDelitionPopup());
  };

  const delitionRequest = (id) => {
    reduxDispatch(setPrevContactState());
    reduxDispatch(setCurrentContactInfoID(id));
    openDeletionPopup();
  };

  const removeContact = () => {
    reduxDispatch(deleteContactInfo(state.currentContactInfoID));
    saveContact();
    openDeletionPopup();
  };

  const openEditInfoPopup = () => {
    reduxDispatch(setActiveEditPopup());
  };

  const resetPrevState = () => {
    openEditInfoPopup();
    reduxDispatch(clearPrevContactState());
  };

  const setEditItemInfo = (id) => {
    reduxDispatch(setCurrentContactInfoID(id));
    reduxDispatch(setEditContactValue(id));
    reduxDispatch(setPrevContactState());
    openEditInfoPopup();
  };

  const editInfoItem = (e) => {
    e.preventDefault();
    reduxDispatch(editContactInfo(state.currentContactInfoID));
    saveContact();
    openEditInfoPopup();
  };

  const openUndoChangesPopup = () => {
    reduxDispatch(setActiveCancelPopup());
  };

  const undoChanges = () => {
    reduxDispatch(cancelChange());
    reduxDispatch(clearPrevContactState());
    openUndoChangesPopup();
  };

  const openEditNamePopup = () => {
    reduxDispatch(setActiveEditNamePopup());
  };

  const editContactName = (e) => {
    e.preventDefault();
    reduxDispatch(saveContactName());
    openEditNamePopup();
  };

  return (
    <div className='user'>
      <Popup
        isActive={state.editNamePopupIsActive}
        closeFunc={openEditNamePopup}>
        <ContactCreationForm
          onSubmit={(e) => editContactName(e)}
          contactName={contact.contactName}
          changeName={(e) => reduxDispatch(setEditContactName(e.target.value))}
          acceptBtn={
            <DefaultButton
              type='submit'
              content={<FontAwesomeIcon icon={faCheckCircle} />} />}
          cancelBtn={
            <DefaultButton
              onClick={openEditNamePopup}
              type='button'
              content={<FontAwesomeIcon icon={faTimesCircle} />} />} />
      </Popup>

      <Popup
        isActive={state.cancelPopupIsActive}
        closeFunc={openUndoChangesPopup}>
        <ConfirmationForm
          title={'undo the changes?'}
          accept={undoChanges}
          cancel={openUndoChangesPopup} />
      </Popup>

      <Popup
        isActive={state.delitionPopupIsActive}
        closeFunc={closeDeletionPopup}>
        <ConfirmationForm
          title={'delete this info?'}
          accept={removeContact}
          cancel={closeDeletionPopup} />
      </Popup>

      <Popup
        isActive={state.addInfoPopupIsActive}
        closeFunc={openAddInfoPopup}>
        <AddInfoForm
          onSubmit={(e) => addInfoItem(e)}
          title={state.newUserInfo.title}
          info={state.newUserInfo.text}
          setTitle={(e) => reduxDispatch(setUserInfoTitle(e.target.value))}
          setInfo={(e) => reduxDispatch(setUserInfoText(e.target.value))}
          acceptBtn={
            <DefaultButton
              type='submit'
              content={<FontAwesomeIcon icon={faCheckCircle} />} />}
          cancelBtn={
            <DefaultButton
              onClick={openAddInfoPopup}
              type='button'
              content={<FontAwesomeIcon icon={faTimesCircle} />} />} />
      </Popup>

      <Popup
        isActive={state.editInfoPopupIsActive}
        closeFunc={resetPrevState}>
        <AddInfoForm
          onSubmit={(e) => editInfoItem(e)}
          title={store.editContactValue.title}
          info={store.editContactValue.text}
          setTitle={(e) => reduxDispatch(setEditContactTitle(e.target.value))}
          setInfo={(e) => reduxDispatch(setEditContactText(e.target.value))}
          acceptBtn={
            <DefaultButton
              type='submit'
              content={<FontAwesomeIcon icon={faCheckCircle} />} />}
          cancelBtn={
            <DefaultButton
              onClick={resetPrevState}
              type='button'
              content={<FontAwesomeIcon icon={faTimesCircle} />} />} />
      </Popup>

      <NavLink
        to={'/'}
        onClick={() => reduxDispatch(clearPrevContactState())}>
        <span className={style['back-link']}>
          <FontAwesomeIcon icon={faArrowCircleLeft} /> Save and back to contacts list</span>
      </NavLink>
      <div className={style['user-info']}>
        <div>
          <h4 className={style['user-info__name']}>{contact.contactName}
            <button
              className={style['user-info__name-btn']}
              onClick={openEditNamePopup} ><FontAwesomeIcon icon={faPen} /></button></h4>
          <span className={style['user-info__id']}>id: {contact.ID}</span>
        </div>
        {
          store.prevContactState.ID ?
            <DefaultButton
              onClick={openUndoChangesPopup}
              type='button'
              content={<FontAwesomeIcon icon={faBackward} />} /> : null
        }
      </div>
      <div className={style['contact-info-wrapper']}>
        <span className={style['contact-info__title']}>Contact information:</span>
        <DefaultButton
          onClick={openAddInfoPopup}
          type='button'
          content={<FontAwesomeIcon icon={faPlus} />} />
      </div>
      <ul className={style['user-info-list']}>
        {
          contact.contactInfo.map((el) =>
            <li
              key={uuid()}
              className={style['user-info-list__item']}>
              <div className={style['user-info-list-title-wrapper']}>
                <h6 className={style['user-info-list__title']}>{el.title}:</h6>
                <div className={style['user-info-list__buttons']}>
                  <button
                    className={style['user-info-list__edit-btn']}
                    onClick={() => setEditItemInfo(el.ID)}>edit</button>
                  <DefaultButton
                    onClick={() => delitionRequest(el.ID)}
                    type='button'
                    content={<FontAwesomeIcon icon={faTimes} />} />
                </div>
              </div>
              <div>
                <span className={style['user-info-list__text']}>
                  {el.text}
                </span>
              </div>
            </li>)
        }
      </ul>
    </div >
  );
}

export default UserScreen;
