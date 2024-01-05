import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Navigation() {
  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate("/login");
  };
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#638541] text-white sticky top-0 z-50">
        <div className="container flex items-center justify-between mx-[1rem]">
          <div className="log flex items-center">
            <img src="./logo.png" alt="Logo here" className="max-w-24 " />
            <span className="text-[1.5rem] font-extrabold">
              INTERNAL INSPECTION platform
            </span>
          </div>

          <nav>
            <div className="flex items-center gap-[20px]">
              <Button
                onClick={navigateFunction}
                customCss={
                  "hover:text-[#166534] hover:bg-white px-[20px] py-[5px] rounded-lg"
                }
                text="Login"
              />
              <span
                onClick={navigateHome}
                className={
                  "hover:text-[#166534] hover:bg-white hover:cursor-pointer px-[20px] py-[5px] rounded-lg"
                }
              >
                Home
              </span>
              <Link>
                <strong>Use Name</strong>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
