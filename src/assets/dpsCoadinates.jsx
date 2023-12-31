import { useState } from "react";

const GpsCoordinates = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>
          3.1.2 IMIBARE Y’IKORANABUHANGA Y’AHO UMURIMA UHEREREYE (GPS
          Coordinates)
          <b
            id="drop"
            onClick={toglerBtn}
            className="hover:cursor-pointer max-w-fit"
          >
            ^
          </b>
        </span>
      </strong>
      {/* 3.1.2 IMIBARE Y’IKORANABUHANGA Y’AHO UMURIMA UHEREREYE (GPS Coordinates) */}

      {isOpen && (
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
      )}
    </div>
  );
};

export default GpsCoordinates;
