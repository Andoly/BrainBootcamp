const Button = ({ kind = "primary", children }) => {
  const color = kind;
  return <button className={color}>{children}</button>;
};

export default Button;
