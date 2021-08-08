import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faPlus,
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { setActiveAddInfoPopup } from '../../store/stateSlice/stateSlice';

import DefaultButton from '../../components/DefaultButton/DefaultButton';
import Popup from '../../components/Popup/Popup';
import AddInfoForm from '../../components/AddInfoForm/AddInfoForm';

import style from './UserScreen.module.css';

function UserScreen() {
  const store = useSelector((state) => state.store);
  const state = useSelector((state) => state.state);
  const reduxDispatch = useDispatch();

  const contact = store.currentContact;

  const openAddInfoPopup = () => {
    reduxDispatch(setActiveAddInfoPopup());
  };

  return (
    <div className='user'>
      <Popup
        isActive={state.addInfoPopupIsActive}
        closeFunc={openAddInfoPopup}>
        <AddInfoForm
          onSubmit={0}
          title={''}
          info={''}
          acceptBtn={<DefaultButton
            onClick={0}
            type='submit'
            content={<FontAwesomeIcon icon={faCheckCircle} />} />}
          cancelBtn={<DefaultButton
            onClick={0}
            type='button'
            content={<FontAwesomeIcon icon={faTimesCircle} />} />} />
      </Popup>

      <div className={style['user-info']}>
        <h4 className={style['user-info__name']}>{contact.contactName}</h4>
        <span className={style['user-info__id']}>id: {contact.ID}</span>
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
            <li key={uuid()}
              className={style['user-info-list__item']}>
              <div className={style['user-info-list-title-wrapper']}>
                <h6 className={style['user-info-list__title']}>{el.title}:</h6>
                <div className={style['user-info-list__buttons']}>
                  <button
                    className={style['user-info-list__edit-btn']}
                    onClick={0}>edit</button>
                  <DefaultButton
                    onClick={0}
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
    </div>
  );
}

export default UserScreen;