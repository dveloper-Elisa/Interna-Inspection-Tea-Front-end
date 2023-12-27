import Button from "./button";

const NewInspector = () => {
  return (
    <div>
      <div className="flex py-4 justify-between gap-10 m-[2rem]">
        {/* side bar */}

        <div className="image-login h-[80vh] w-[100%] flex justify-center items-center">
          <div className="flex flex-col items-center gap-7 bg-green-800 bg-opacity-75 p-3 rounded-md max-w-fit  mb-20 transform hover:scale-110 transition-transform duration-500 mt-20">
            <div className="flex flex-col  font-serif">
              <img
                src="logo.png"
                alt="logo here"
                className="max-w-[7rem] justify-center"
              />
              <span className="text-white font-bold tracking-[2px] w- uppercase">
                Register New Ispector
              </span>
            </div>
            <form action="" className="flex flex-col gap-10 ">
              <div className="flex gap-3">
                <div className="flex flex-col gap-10">
                  <input
                    type="text"
                    placeholder="Enter full name"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="number"
                    placeholder="Enter id"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="number"
                    placeholder="Phone number"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  <input
                    type="email"
                    placeholder="Enter email"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Enter password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>
              </div>

              <Button
                href="/login/dashboard"
                text="Register"
                customCss="text-center bg-[#166534] text-white tracking-[2px] font-bold text-[20px] hover:bg-[#fff] hover:border-[#166534] hover:text-black "
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewInspector;
