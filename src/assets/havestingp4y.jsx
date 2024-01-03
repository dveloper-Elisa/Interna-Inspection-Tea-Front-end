import { useNavigate } from "react-router-dom";
import Button from "../components/button";
const HavestIn4years = () => {
  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate("/farmingrule");
  };

  const navigateBack = () => {
    navigate("/gps");
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>3.1.3 INGANO Y’UMUSARURO KU MYAKA INE</span>
      </strong>
      {/* 3.1.2 IMIBARE Y’IKORANABUHANGA Y’AHO UMURIMA UHEREREYE (GPS Coordinates) */}

      <div className="amakuru flex flex-col gap-4 items-center justify-center sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
        <div className="flex flex-col w-full gap-3">
          {/* 2020*/}
          <div className="flex flex-col">
            <label htmlFor="2020">
              <strong>2020</strong>
            </label>
            <input
              type="text"
              id="2020"
              name="H2020"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* Longitude */}
          <div className="flex flex-col">
            <label htmlFor="2021">
              <strong>2021</strong>
            </label>
            <input
              type="text"
              id="2021"
              name="H2021"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>

        {/* 2023 */}
        <div className="flex flex-col w-full gap-2">
          {/* Havest */}
          <div className="flex flex-col">
            <label htmlFor="2023">
              <strong>2023</strong>
            </label>

            <input
              type="text"
              id="2023"
              name="H2023"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* havest for Last year */}
          <div className="flex flex-col">
            <label htmlFor="2024">
              <strong>2024</strong>
            </label>

            <input
              type="text"
              id="2024"
              name="H2024"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={navigateBack} text={"Previouse"} />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default HavestIn4years;
