import { Link } from "react-router-dom";

const Button = ({ href, text, customCss }) => {
  return (
    <Link
      to={href}
      id="login"
      className={`border-[2px] px-[20px] py-[5px] rounded-lg hover:bg-[#166534] ${customCss}`}
    >
      {text}
    </Link>
  );
};

export default Button;
