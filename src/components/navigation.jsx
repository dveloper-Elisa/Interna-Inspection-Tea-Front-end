import { Link } from "react-router-dom";
import Button from "./button";

function Navigation() {
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
              <Button href="/login" text="Login" />
              <Link
                to="/"
                className="hover:text-[#166534] hover:bg-white px-[20px] py-[5px] rounded-lg"
              >
                Home
              </Link>
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
