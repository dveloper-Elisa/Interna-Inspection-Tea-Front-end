import { Link } from "react-router-dom";

function Navigation() {
  return (
    <>
      <div className="bg-[#638541] text-white sticky top-0 z-50">
        <div className="container flex items-center justify-between mx-[1rem]">
          <div className="log flex items-center">
            <img src="./logo.png" alt="Logo here" className="max-w-24 " />
            <span className="text-[1.5rem] font-extrabold">
              Muganza-Kivu Tea factory
            </span>
          </div>

          <nav>
            <div className="flex items-center gap-[20px]">
              <Link
                to="login"
                id="login"
                className="border-[2px] px-[20px] py-[5px] rounded-lg hover:bg-[#166534]"
              >
                Login
              </Link>
              <Link
                to="/"
                className="hover:text-[#166534] hover:bg-white px-[20px] py-[5px] rounded-lg"
              >
                Home
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navigation;
