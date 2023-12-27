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
              <label htmlFor="iptor">
                <strong>Internal Group Member ID(PDI)</strong>
              </label>
              <input
                type="text"
                id="iptor"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            {/* TELPHONE */}
            <div className="flex flex-col">
              <label>
                <strong>Internal farm ID (KODE)</strong>
              </label>
              <input
                type="text"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="zone">
                <strong>National farm ID (UPI) icyangombwa cyubutaka</strong>
              </label>
              <input
                type="text"
                id="zone"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* AKAGARI*/}

            <div className="flex flex-col">
              <label htmlFor="MB">
                <strong>Akagari </strong>
              </label>

              <input
                type="text"
                id="MB"
                name="owner"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* UMUDUGUDU */}
            <div className="flex flex-col">
              <label htmlFor="COP">
                <strong>Umudugudu</strong>
              </label>

              <input
                type="text"
                id="COP"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
          </div>

          {/* IMBUTO */}
          <div className="flex flex-col w-full gap-2">
            {/* UBUSO MBUMBE */}
            <div className="flex flex-col">
              <label htmlFor="vil">
                <strong>Ubuso mbumbe</strong>
              </label>

              <input
                type="text"
                id="vil"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* IMBUTO */}
            <div className="flex flex-col">
              <label htmlFor="id">
                <strong>IMBUTO (varieties)</strong>
              </label>

              <input
                type="text"
                id="id"
                name=""
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            {/* UBUSO BUHIZEHO Icyayi */}
            <div className="flex flex-col">
              <label htmlFor="RS">
                <strong>Ubuso buhinzeho icyayi</strong>
              </label>

              <input
                type="text"
                id="RS"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="ST">
                <strong>Abakozi bahoraho</strong>
              </label>

              <input
                type="text"
                id="ST"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* NYAKABYIZI */}
            <div className="flex flex-col">
              <label htmlFor="cell">
                <strong>Nyakabyizi</strong>
              </label>

              <input
                type="text"
                id="cell"
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
