const Button = ({ className, handleClick, text }) => {
  return (
    <button type="button" className={className} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
