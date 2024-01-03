import { Link } from "react-router-dom";

const Button = ({ href, text, customCss, onClick }) => {
  const eventListen = () => {
    if (onClick) onClick();
  };

  return (
    // <Link   id="login">
    <button
      onClick={eventListen}
      type="submit"
      className={`border-[2px] px-[20px] py-[5px] w-[100%] rounded-lg hover:bg-[#166534] ${customCss}`}
    >
      {text}
    </button>
    // </Link>
  );
};

export default Button;
