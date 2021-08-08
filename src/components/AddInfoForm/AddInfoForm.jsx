import style from './AddInfoForm.module.css';

function AddInfoForm({
  onSubmit,
  title,
  info,
  acceptBtn,
  cancelBtn,
  setTitle,
  setInfo,
}) {
  return (
    <form
      className={style['add-info-form']}
      onSubmit={onSubmit}>
      <label
        className={style['add-info-form__label']}
        htmlFor="add-info-title">Title:</label>
      <input
        required
        className={style['add-info-form__input']}
        type="text"
        id="add-info-title"
        value={title}
        onChange={setTitle} />
      <label
        className={style['add-info-form__label']}
        htmlFor="add-info-info">Information:</label>
      <textarea
        required
        className={`${style['add-info-form__input']} ${style['add-info-form__textarea']}`}
        type="text"
        id="add-info-info"
        value={info}
        onChange={setInfo} />
      <div className={style['add-info-form__buttons']}>
        {acceptBtn}
        {cancelBtn}
      </div>
    </form>
  );
}

export default AddInfoForm;
