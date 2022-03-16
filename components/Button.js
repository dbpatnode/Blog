const Button = ({ className, handleClick, children }) => {
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
