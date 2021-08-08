import style from './ContactCreationForm.module.css';

function ContactCreationForm({
  onSubmit,
  contactName,
  changeName,
  acceptBtn,
  cancelBtn,
}) {
  return (
    <form
      className={style['form']}
      onSubmit={onSubmit}>
      <input
        className={style['form__inp']}
        placeholder='Contact name: *'
        type="text"
        id="contactName"
        required
        value={contactName}
        onChange={changeName} />
      <div className={style['form__buttons']}>
        {acceptBtn}
        {cancelBtn}
      </div>
    </form>
  );
}

export default ContactCreationForm;