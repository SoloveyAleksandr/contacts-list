import './DefaultButton.css';

function DefaultButton({
  onClick,
  type,
  content,
}) {
  return (
    <button
      onClick={onClick}
      type={type}
      className='default-btn'>
      {content}
    </button>
  );
}

export default DefaultButton;
