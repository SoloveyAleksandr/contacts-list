import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faUserPlus,
  faUserEdit,
  faUserTimes,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Popup from '../../components/Popup/Popup';
import ContactCreationForm from '../../components/UserCreationForm/ContactCreationForm';

import './ContactsList.css';

function ContactsList() {
  const [contactsList, setContactsList] = useState([{ name: 'Alex' }]);
  const [creationPopupIsActive, setCreationPopupIsActive] = useState(false);
  const [contactName, setContactName] = useState('');

  const openCreatePopup = () => {
    setCreationPopupIsActive(!creationPopupIsActive);
    clearContactName();
  }
  const clearContactName = () => setContactName('');

  const createContact = (e) => {
    e.preventDefault();
    contactsList.push({
      id: Date.now(),
      name: contactName,
    });
    openCreatePopup();
    clearContactName();
  };

  return (
    <div className="contacts">
      <Popup
        isActive={creationPopupIsActive}
        closeFunc={openCreatePopup}>
        <ContactCreationForm
          onSubmit={(e) => createContact(e)}
          contactName={contactName}
          changeName={(e) => setContactName(e.target.value)}
          cancelBtn={
            <DefaultButton
              onClick={openCreatePopup}
              type='button'
              content={<FontAwesomeIcon icon={faUserTimes}></FontAwesomeIcon>} />}
          acceptBtn={
            <DefaultButton
              type='submit'
              content={<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>} />} />
      </Popup>
      <div className="contacts-header">
        <DefaultButton
          onClick={openCreatePopup}
          type='button'
          content={<FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>} />
      </div>
      <ul className="contacts-list">
        {
          contactsList.map((el, indx) =>
            <li key={indx} className="contacts-list__item">
              <div>
                <span className='contacts-list__user-number'>{indx + 1}.</span>
                <span className='contacts-list__username'>{el.name}</span>
              </div>
              <DefaultButton
                onClick={() => console.log('clicked')}
                type='button'
                content={<FontAwesomeIcon icon={faUserEdit}></FontAwesomeIcon>} />
            </li>)
        }
      </ul>
    </div>
  );
}

export default ContactsList;