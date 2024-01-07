import Button from "./button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const InsDashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || token === "") {
      navigate("/");
      location.href = "/";
    }
  });
  return (
    <div className="m-[2em] flex justify-center items-center">
      <div className="flex flex-col gap-20">
        <form action="" className="">
          <div className="flex gap-10">
            {" "}
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search farmer"
                className="px-[1rem] py-[0.5rem] font-sans border-[2px] border-[#166534] rounded-md"
              />
              <input
                type="submit"
                value={"Search"}
                className="bg-[#166534] text-white font-bold rounded-md px-5 border-[2px] border-white hover:border-[#166534] hover:text-black hover:bg-white hover:border-[2px] transition-all duration-500 "
              />{" "}
            </div>
            <Button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              text="Logout"
              customCss={"hover:text-[#fff] font-bold"}
            />
          </div>
        </form>
        <div className="flex flex-col items-center">
          <p className="text-[#166534] border-b-4 border-[#166534] font-serif tracking-wider font-bold">
            LIST OF INSPECTED FARMERS
          </p>

          <table className="border-[2px] my-5">
            <th className="border-[2px]">#</th>
            <th className="border-[2px]">Name</th>
            <th className="border-[2px]">location</th>
            <th className="border-[2px]">Inspection date</th>
            <tbody className="border-[2px]">
              <tr className="border-[2px]">
                <td className="border-[2px] p-3">1</td>
                <td className="border-[2px] p-3">kwizera Elisa</td>
                <td className="border-[2px] p-3">Nyagatare</td>
                <td className="border-[2px] p-3">12 / 1/ 2024</td>
              </tr>
              <tr className="border-[2px]">
                <td className="border-[2px] p-3">2</td>
                <td className="border-[2px] p-3">kwizera Elisa</td>
                <td className="border-[2px] p-3">Nyagatare</td>
                <td className="border-[2px] p-3">12 / 1/ 2024</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InsDashboard;
