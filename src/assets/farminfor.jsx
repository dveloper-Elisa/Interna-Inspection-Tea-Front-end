import { useState } from "react";

const FarmInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>
          3.1 AMAKURU KUMURIMA (farm)
          <b
            id="drop"
            onClick={toglerBtn}
            className="hover:cursor-pointer max-w-fit"
          >
            ^
          </b>
        </span>
      </strong>
      {/*1) AMAKURU RUSANGE Y"UKURIKIRANA UMURIMA. */}
      {isOpen && (
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
                name="FtemporaryWork"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmInfo;
