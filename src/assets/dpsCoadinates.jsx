import { useNavigate } from "react-router-dom";

import Button from "../components/button";

const GpsCoordinates = () => {
  const navigate = useNavigate();
  const navigateFunction = () => {
    navigate("/harvest4");
  };

  const navigateBack = () => {
    navigate("/farminfor");
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>
          3.1.2 IMIBARE Y’IKORANABUHANGA Y’AHO UMURIMA UHEREREYE (GPS
          Coordinates)
        </span>
      </strong>
      {/* 3.1.2 IMIBARE Y’IKORANABUHANGA Y’AHO UMURIMA UHEREREYE (GPS Coordinates) */}

      <div className="amakuru flex flex-col gap-4 items-center justify-center sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
        <div className="flex flex-col w-full">
          {/* Latitude*/}

          <div className="flex flex-col">
            <label htmlFor="gpl">
              <strong>Latitude</strong>
            </label>
            <input
              type="text"
              id="gpl"
              name="Glatitude"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          {/* Longitude */}
          <div className="flex flex-col">
            <label htmlFor="log">
              <strong>Longitude</strong>
            </label>
            <input
              type="text"
              id="log"
              name="Glogitude"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          {/* Altitude */}
          <div className="flex flex-col">
            <label htmlFor="alt">
              <strong>Altitude</strong>
            </label>

            <input
              type="text"
              id="alt"
              name="Galtitude"
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

export default GpsCoordinates;
