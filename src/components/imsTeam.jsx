import { Link } from "react-router-dom";
import Button from "./button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [allInspector, setAllInspector] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token === "" || !token) {
      navigate("/login");
    }

    const displayInspectors = async () => {
      try {
        const url = "http://localhost:3000/display/inspectors";
        await fetch(url, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((inspect) => inspect.json())
          .then((inspectors) => {
            const allInspectors = inspectors.inspector;
            // console.log(inspectors)
            // console.log(allInspectors);
            setAllInspector(allInspectors);
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    };
    displayInspectors();
  });

  return (
    <div className="flex py-5">
      <div className="flex mx-[2rem] justify-between">
        <div className="flex flex-col sticky left-0 border-r-[4px]">
          <strong className="border-b-2 pb-[5px] uppercase text-[#638541]">
            Internal Inspectors.
          </strong>
          <ul className="flex flex-col gap-1 h-[60vh] overflow-y-scroll">
            {allInspector.map((inspect) => {
              return (
                <li
                  key={inspect._id}
                  className="capitalize hover:bg-[#638541] hover:text-white p-2 rounded-md"
                >
                  <Link to="/user">{inspect.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* next div */}
        <div className="flex flex-row gap-20 items-center mx-20 justify-between">
          <div className="flex justify-between mr-6 ml-6">
            <div className="flex flex-col  max-w-[15rem] gap-[10px]">
              <div className="flex flex-col text-center bg-slate-100 px-5 uppercase font-bold py-10 w-[13rem] h-[11rem]">
                Total Inspected
                <p className="text-[#00a601] text-[3rem]">78</p>
              </div>
              {/* not inspected */}
              <div className="flex flex-col text-center bg-slate-100 px-5 uppercase font-bold py-10 w-[13rem] h-[11rem]">
                Total not Inspected
                <p className="text-[#bd16a9] text-[3rem]">1,078</p>
              </div>
              {/* tota famers */}
            </div>
            <div className="flex flex-col px-5 max-w-[15rem] gap-[10px] ">
              <div className="flex flex-col text-center bg-slate-100 px-5 uppercase font-bold py-10 w-[13rem] h-[11rem]">
                Total Famer
                <p className="text-[#00a601] text-[3rem]">1,156</p>
              </div>
              {/* total havest */}
              <div className="flex flex-col text-center bg-slate-100 px-5 uppercase font-bold py-10 w-[13rem] h-[11rem]">
                Total Havest
                <p className="text-[#00a601] text-[3rem]">1,000 T</p>
              </div>
            </div>
          </div>

          {/* Log out */}
          <div className="flex flex-col gap-10 justify-center float-right">
            <Button
              // href="/login"
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
              text="LogOut"
              customCss="bg-[#00a601] text-white border-0 hover:bg-[#638541] py-[1rem]"
            />

            {/* Creating new inspector */}
            <Button
              onClick={() => navigate("/createaccount")}
              text="Add inspector"
              customCss="bg-[#00a601] text-white border-0 hover:bg-[#638541] py-[1rem]"
            />
            {/* inspection form */}
            <Button
              onClick={() => navigate("/form")}
              // href="/form"
              text="New form"
              customCss="bg-[#00a601] text-white border-0 hover:bg-[#638541] py-[1rem]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
