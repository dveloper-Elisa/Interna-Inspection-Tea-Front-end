import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/button";

const FarmOperator = () => {
  const form2 = useLocation();
  const [farmOperator, setFarmOperator] = useState({
    OPname: "",
    OPNID: "",
    OPsex: "",
    OPphone: "",
    OPdistrict: "",
    OPsector: "",
    OPcell: "",
    OPvillage: "",
    OPzone: "",
    OPcooperative: "",
    OPcoop_member: "",
    OPlifelong: "",
  });

  const handleFarmOperator = (operator, value) => {
    setFarmOperator({ ...farmOperator, [operator]: value });
  };

  const navigate = useNavigate();
  // form1, farmerInformation
  const forms2 = form2.state;

  const navigateFunction = () => {
    navigate("/farminfor", { state: { forms2, farmOperator } });
  };
  const navigateBack = () => {
    navigate("/farmer");
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>
          2.1.2 AMAKURU Y’UKURICYIRANA UMURIMA (FARM OPERATER) Niba ahari
        </span>
      </strong>
      {/*1) AMAKURU RUSANGE Y"UKURIKIRANA UMURIMA. */}
      {/* {isOpen && ( */}
      <div className="amakuru flex flex-col gap-4 items-center justify-between sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
        <div className="flex flex-col w-full">
          {/* Izina ry’ ukurikirana umurima:*/}

          <div className="flex flex-col">
            <label htmlFor="op">
              <strong>Izina ry’ ukurikirana umurima:</strong>
            </label>
            <input
              type="text"
              id="op"
              onChange={(e) => handleFarmOperator("OPname", e.target.value)}
              name="OPname"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          {/* igitsina */}
          <div className="flex flex-col">
            <label htmlFor="">
              <strong>Igitsina(hitamo):</strong>
            </label>

            <span>
              <input
                type="radio"
                id="sex"
                onChange={() => handleFarmOperator("OPsex", "Gabo")}
                name="OPsex"
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
                onChange={() => handleFarmOperator("OPsex", "Gore")}
                name="OPsex"
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
              onChange={(e) => handleFarmOperator("OPphone", e.target.value)}
              name="OPphone"
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
              onChange={(e) => handleFarmOperator("OPzone", e.target.value)}
              name="OPzone"
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
              onChange={(e) =>
                handleFarmOperator("OPcooperative", e.target.value)
              }
              name="OPcooperative"
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
              onChange={(e) =>
                handleFarmOperator("OPcoop_member", e.target.value)
              }
              name="OPcoop_member"
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
              onChange={(e) => handleFarmOperator("OPlifelong", e.target.value)}
              name="OPlifelong"
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
              onChange={(e) => handleFarmOperator("OPNID", e.target.value)}
              name="OPNID"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>

          {/* AHO ATUYE */}
          <div className="flex flex-col">
            <label htmlFor="RS">
              <strong>Aho atuye</strong>
            </label>
          </div>
          <div className="flex flex-col">
            <label htmlFor="DC">
              <strong>Akarere:</strong>
            </label>

            <input
              type="text"
              id="DC"
              onChange={(e) => handleFarmOperator("OPdistrict", e.target.value)}
              name="OPdistrict"
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
              onChange={(e) => handleFarmOperator("OPsector", e.target.value)}
              name="OPsector"
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
              onChange={(e) => handleFarmOperator("OPcell", e.target.value)}
              name="OPcell"
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
              onChange={(e) => handleFarmOperator("OPvillage", e.target.value)}
              name="OPvillage"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={
            // console.log(farmOperator);
            navigateBack
          }
          text={"Previous"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default FarmOperator;
