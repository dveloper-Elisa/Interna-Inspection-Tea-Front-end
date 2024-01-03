import "../../src/index.css";
import Button from "./button.jsx";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    history.push("/login/dashboard", { formData });
  };

  // Handle form submission on button click
  const handleLogin = () => {
    if (formData.email === "") {
      return console.log("email is required");
    }
    console.log(formData);
  };

  return (
    <div className="flex py-4 justify-between gap-10 m-[2rem]">
      <div className="image-login h-[80vh] w-[100%] flex justify-center items-center">
        <div className="flex flex-col items-center gap-7 bg-green-800 bg-opacity-75 p-3 rounded-md max-w-fit  mb-20 transform hover:scale-110 transition-transform duration-500 mt-20">
          <div className="flex flex-col  font-serif">
            <img src="logo.png" alt="logo here" className="max-w-[10rem]" />
            <span className="text-white font-bold tracking-[2px] w- uppercase">
              Login here
            </span>
          </div>
          <div className="flex flex-col gap-10 ">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputs}
              placeholder="Enter email"
              className="px-10 py-2 text-[20px] rounded-md"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputs}
              placeholder="Enter password"
              className="px-10 py-2 text-[20px] rounded-md"
            />

            <Button
              onClick={handleLogin} // Handle form submission on button click
              text="Login"
              customCss="text-center bg-[#166534] text-white tracking-[2px] font-bold text-[20px] hover:bg-[#fff] hover:border-[#166534] hover:text-black "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
