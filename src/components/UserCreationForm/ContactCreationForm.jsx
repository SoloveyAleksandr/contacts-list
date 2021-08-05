import './ContactCreationForm.css';

function ContactCreationForm({
  onSubmit,
  contactName,
  changeName,
  acceptBtn,
  cancelBtn,
}) {
  return (
    <form
      className='form'
      onSubmit={onSubmit}>
      <input
        className='form__inp'
        placeholder='Contact name: *'
        type="text"
        id="contactName"
        required
        value={contactName}
        onChange={changeName} />
      <div className='form__buttons'>
        {acceptBtn}
        {cancelBtn}
      </div>
    </form>
  );
}

export default ContactCreationForm;