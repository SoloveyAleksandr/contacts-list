import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons'

import style from './ConfirmationForm.module.css';
import DefaultButton from '../DefaultButton/DefaultButton';

function ConfirmationForm({
  title,
  accept,
  cancel,
}) {
  return (
    <div>
      <h4 className={style['confirm-form__title']} >{title}</h4>
      <div className={style['confirm-form-buttons']}>
        <DefaultButton
          type='button'
          onClick={accept}
          content={<FontAwesomeIcon icon={faCheckCircle} />} />
        <DefaultButton
          type='button'
          onClick={cancel}
          content={<FontAwesomeIcon icon={faTimesCircle} />} />
      </div>
    </div>
  );
}

export default ConfirmationForm;
