import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const FarmInfo = () => {
  const [farmInformation, setFarmInformation] = useState({
    FPDI: "",
    FKODE: "",
    FUPI: "",
    Fcell: "",
    Fvillage: "",
    Farea: "",
    Fvarieties: "",
    FareaGrowedTea: "",
    FpermanentWork: "",
    FtemporaryWork: "",
  });

  const handleFarmInformation = (information, value) => {
    setFarmInformation({ ...farmInformation, [information]: value });
  };

  const navigate = useNavigate();

  const navigateFunction = () => {
    navigate("/gps");
  };

  const navigateBack = () => {
    navigate("/operator");
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>3.1 AMAKURU KUMURIMA (farm)</span>
      </strong>
      {/*1) AMAKURU RUSANGE Y"UKURIKIRANA UMURIMA. */}

      <div className="amakuru flex flex-col gap-4 items-center justify-center sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
        <div className="flex flex-col w-full">
          {/* Internal group member ID*/}

          <div className="flex flex-col">
            <label htmlFor="dpi">
              <strong>Internal Group Member ID(PDI)</strong>
            </label>
            <input
              type="text"
              id="dpi"
              onChange={(e) => handleFarmInformation("FPDI", e.target.value)}
              name="FPDI"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          {/* FARM ID CODE */}
          <div className="flex flex-col">
            <label>
              <strong>Internal farm ID (KODE)</strong>
            </label>
            <input
              type="text"
              onChange={(e) => handleFarmInformation("FKODE", e.target.value)}
              name="FKODE"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="upi">
              <strong>National farm ID (UPI) icyangombwa cyubutaka</strong>
            </label>
            <input
              type="text"
              id="upi"
              onChange={(e) => handleFarmInformation("FUPI", e.target.value)}
              name="FUPI"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* AKAGARI*/}

          <div className="flex flex-col">
            <label htmlFor="cel">
              <strong>Akagari </strong>
            </label>

            <input
              type="text"
              id="cel"
              onChange={(e) => handleFarmInformation("Fcell", e.target.value)}
              name="Fcell"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* UMUDUGUDU */}
          <div className="flex flex-col">
            <label htmlFor="vil">
              <strong>Umudugudu</strong>
            </label>

            <input
              type="text"
              id="vil"
              onChange={(e) =>
                handleFarmInformation("Fvillage", e.target.value)
              }
              name="Fvillage"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>

        {/* IMBUTO */}
        <div className="flex flex-col w-full gap-2">
          {/* UBUSO MBUMBE */}
          <div className="flex flex-col">
            <label htmlFor="area">
              <strong>Ubuso mbumbe</strong>
            </label>

            <input
              type="text"
              id="area"
              onChange={(e) => handleFarmInformation("Farea", e.target.value)}
              name="Farea"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* IMBUTO */}
          <div className="flex flex-col">
            <label htmlFor="variety">
              <strong>IMBUTO (varieties)</strong>
            </label>

            <input
              type="text"
              id="variety"
              onChange={(e) =>
                handleFarmInformation("Fvarieties", e.target.value)
              }
              name="Fvarieties"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          {/* UBUSO BUHIZEHO Icyayi */}
          <div className="flex flex-col">
            <label htmlFor="areg">
              <strong>Ubuso buhinzeho icyayi</strong>
            </label>

            <input
              type="text"
              id="areg"
              onChange={(e) =>
                handleFarmInformation("FareaGrowedTea", e.target.value)
              }
              name="FareaGrowedTea"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pmw">
              <strong>Abakozi bahoraho</strong>
            </label>

            <input
              type="text"
              id="pmw"
              onChange={(e) =>
                handleFarmInformation("FpermanentWork", e.target.value)
              }
              name="FpermanentWork"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* NYAKABYIZI */}
          <div className="flex flex-col">
            <label htmlFor="temp">
              <strong>Nyakabyizi</strong>
            </label>

            <input
              type="text"
              id="temp"
              onChange={(e) =>
                handleFarmInformation("FtemporaryWork", e.target.value)
              }
              name="FtemporaryWork"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={
            // console.log(farmInformation);
            navigateBack
          }
          text={"Previouse"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default FarmInfo;
