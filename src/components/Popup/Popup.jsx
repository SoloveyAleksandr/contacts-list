import style from './Popup.module.css';

function Popup({
  isActive,
  children,
  closeFunc,
}) {
  if (!isActive) {
    return null;
  }
  return (
    <div
      className={style["popup-wrapper"]}>
      <div
        className={style["popup-bg"]}
        onClick={closeFunc}></div>
      <div className={style["popup"]}>
        {children}
      </div>
    </div>
  )
}

export default Popup;