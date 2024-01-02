import { Link } from "react-router-dom";

const Button = ({ href, text, customCss, onClick }) => {
  const eventListen = () => {
    onClick();
  };

  return (
    <Link onClick={eventListen} to={href} id="login">
      <button
        type="submit"
        className={`border-[2px] px-[20px] py-[5px] w-[100%] rounded-lg hover:bg-[#166534] ${customCss}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
