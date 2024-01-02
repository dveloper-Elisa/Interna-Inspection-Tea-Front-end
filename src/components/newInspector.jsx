import Button from "./button";
import Message from "./message";
import { useEffect, useState } from "react";

const NewInspector = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    NID: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleClick = () => {
    // e.preventDefault();
    if (formData.NID === "") {
      setMessage("Enter ID");
    } else {
      setMessage(""); // Clear the message if validation passes
    }
    if (formData.password === "") {
      return console.log("Password must not be empty");
    }
    if (formData.password !== formData.confirmPassword) {
      return console.log("Password should match");
    }
    if (formData.name === "") {
      return console.log("User Name must not be empty");
    }
    if (formData.phone === "") {
      return console.log("Phone number can't be empty");
    }
    if (formData.email === "") {
      return console.log("email can't be empty");
    }

    useEffect(() => {
      // Use useEffect to clear the message after 2 seconds
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timer); // Clear the timer when component unmounts or changes
    }, [message]);
    return console.log(formData);
  };

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
              <div className="flex" id="mesg">
                {message && <Message message={message} />}
              </div>
            </div>
            <form className="flex flex-col gap-10 ">
              <div className="flex gap-3">
                <div className="flex flex-col gap-10">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="number"
                    name="NID"
                    value={formData.NID}
                    onChange={handleInputChange}
                    placeholder="Enter id"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Enter password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="Confirm password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>
              </div>

              <Button
                onClick={handleClick}
                // href="/login/dashboard"
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
