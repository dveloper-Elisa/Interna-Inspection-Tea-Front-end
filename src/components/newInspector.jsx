import Button from "./button";
import Message from "./message";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewInspector = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || !token) {
      navigate("/login");
    }
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    NID: "",
    phone: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState();

  const handleInputChange = (inspector, value) => {
    // const value = e.target.value;
    setFormData({ ...formData, [inspector]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
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

    // fetching data
    try {
      const registerInternalInspector = async () => {
        const token = localStorage.getItem("token");
        if (token === "" || !token) return navigate("/login");

        if (formData.role === "Inspector") {
          const url = "http://localhost:3000/create/inspector";
          await fetch(url, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          })
            .then((data) => data.json())
            .then((response) => {
              console.log(response);
              navigate("/login/dashboard");
            })
            .catch((error) => console.log(error));
        }
        if (formData.role === "IMS") {
          const url = "http://localhost:3000/admin/register";
          await fetch(url, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          })
            .then((data) => data.json())
            .then((response) => {
              console.log(response);
              navigate("/login/dashboard");
            })
            .catch((error) => console.log(error));
        }
      };
      registerInternalInspector();
    } catch (error) {
      console.log(error);
    }
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
            <form
              className="flex flex-col gap-10 "
              onSubmit={(e) => {
                e.preventDefault();
                handleClick(e);
              }}
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter full name"
                className="px-10 py-2 text-[20px] rounded-md"
              />
              <div className="flex gap-3">
                <div className="flex flex-col gap-10">
                  <select
                    name="role"
                    id=""
                    value={formData.role}
                    onChange={(e) => handleInputChange("role", e.target.value)}
                    className="px-10 py-2 text-[20px] rounded-md"
                  >
                    <option value="">Select role</option>
                    <option value="IMS">IMS</option>
                    <option value="Inspector">INTERNAL INSPECTOR</option>
                  </select>

                  <input
                    type="number"
                    name="NID"
                    value={formData.NID}
                    onChange={(e) => handleInputChange("NID", e.target.value)}
                    placeholder="Enter id"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="Phone number"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-10">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="Enter email"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) =>
                      handleInputChange("password", e.target.value)
                    }
                    placeholder="Enter password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    placeholder="Confirm password"
                    className="px-10 py-2 text-[20px] rounded-md"
                  />
                </div>
              </div>

              <Button
                // onClick={(e) => {
                //   e.preventDefault();
                //   handleClick(e);
                //   console.log(formData);
                // }}
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
