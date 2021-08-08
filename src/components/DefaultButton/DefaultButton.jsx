import style from './DefaultButton.module.css';

function DefaultButton({
  onClick,
  type,
  content,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={style['default-btn']}>
      {content}
    </button>
  );
}

export default DefaultButton;
