import './Popup.css';

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
      className="popup-wrapper">
      <div
        className="popup-bg"
        onClick={closeFunc}></div>
      <div className="popup">
        {children}
      </div>
    </div>
  )
}

export default Popup;