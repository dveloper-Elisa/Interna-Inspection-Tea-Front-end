import { useState } from "react";

const FarmOperator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>
          2.1.2 AMAKURU Y’UKURICYIRANA UMURIMA (FARM OPERATER) Niba ahari
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
        <div className="amakuru flex flex-col gap-4 items-center justify-between sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
          <div className="flex flex-col w-full">
            {/* Izina ry’ ukurikirana umurima:*/}

            <div className="flex flex-col">
              <label htmlFor="iptor">
                <strong>Izina ry’ ukurikirana umurima:</strong>
              </label>
              <input
                type="text"
                id="iptor"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            {/* igitsina */}
            <div className="flex flex-col">
              <label htmlFor="iptor">
                <strong>Igitsina(hitamo):</strong>
              </label>

              <span>
                <input
                  type="radio"
                  id="sex"
                  name="sex"
                  className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                />
                <label htmlFor="sex" className="pl-2">
                  Gabo
                </label>
              </span>
              <span>
                <input
                  type="radio"
                  id="s"
                  name="sex"
                  className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                />
                <label htmlFor="s" className="pl-2">
                  Gore
                </label>
              </span>
            </div>

            {/* TELPHONE */}
            <div className="flex flex-col">
              <label>
                <strong>Nomero ya Terefone</strong>
              </label>
              <input
                type="number"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="zone">
                <strong>ZONE/hangari:</strong>
              </label>
              <input
                type="text"
                id="zone"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* UMUBARE WABANYAMURYANGO */}

            <div className="flex flex-col">
              <label htmlFor="MB">
                <strong>Umubare wabanyamuryango </strong>
              </label>

              <input
                type="number"
                id="MB"
                name="owner"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* IZINA RYA COPERATIVE */}
            <div className="flex flex-col">
              <label htmlFor="COP">
                <strong>Izina rya Koperative/Itsinda:</strong>
              </label>

              <input
                type="text"
                id="COP"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            {/* IGIHE AYIMAZEMO */}
            <div className="flex flex-col">
              <label htmlFor="PRD">
                <strong>Igihe ayimazemo:</strong>
              </label>

              <input
                type="text"
                id="PRD"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
          </div>
          {/* NOMERO YA ID*/}
          <div className="flex flex-col w-full gap-2">
            <div className="flex flex-col">
              <label htmlFor="id">
                <strong>Nomero y’Indangamuntu:</strong>
              </label>

              <input
                type="number"
                id="id"
                name="owner"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>

            {/* AHO ATUYE */}
            <div className="flex flex-col">
              <label htmlFor="RS">
                <strong>Aho atuye:</strong>
              </label>

              <input
                type="text"
                id="RS"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="DC">
                <strong>Akarere:</strong>
              </label>

              <input
                type="text"
                id="DC"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="ST">
                <strong>Umurenge:</strong>
              </label>

              <input
                type="text"
                id="ST"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="cell">
                <strong>Akagari:</strong>
              </label>

              <input
                type="text"
                id="cell"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="vil">
                <strong>Umudugudu:</strong>
              </label>

              <input
                type="text"
                id="vil"
                className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FarmOperator;
