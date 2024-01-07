import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

import Button from "../components/button";

const GpsCoordinates = () => {
  const form4 = useLocation();

  const [gpsCoordinates, setGpsCoordinates] = useState({
    Glatitude: "",
    Glogitude: "",
    Galtitude: "",
  });

  const handleGpsCOordinates = (cordinate, value) => {
    setGpsCoordinates({ ...gpsCoordinates, [cordinate]: value });
  };

  const navigate = useNavigate();
  const forms4 = form4.state;
  const navigateFunction = () => {
    navigate("/harvest4", { state: { forms4, gpsCoordinates } });
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
              onChange={(e) =>
                handleGpsCOordinates("Glatitude", e.target.value)
              }
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
              onChange={(e) =>
                handleGpsCOordinates("Glogitude", e.target.value)
              }
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
              onChange={(e) =>
                handleGpsCOordinates("Galtitude", e.target.value)
              }
              name="Galtitude"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={
            // console.log(gpsCoordinates);
            navigateBack
          }
          text={"Previouse"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default GpsCoordinates;
