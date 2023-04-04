import "./Button.css";

function Button({ children, onClick, color = "blue", className = "" }) {
  const clsaaNames = `Button ${color} ${className}`;
  return (
    <button className={clsaaNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
