import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Button from "./button";

const Famer = () => {
  const dataFromFirstForm = useLocation();
  const [farmerInformation, setFarmerInformation] = useState({
    name: "",
    NID: "",
    farmerCode: "",
    sex: "",
    phone: "",
    district: "",
    sector: "",
    cell: "",
    village: "",
    zone: "",
    cooperative: "",
    coop_member: "",
    lifelong: "",
  });

  const handleFarmerInformation = (farmer, value) => {
    setFarmerInformation({ ...farmerInformation, [farmer]: value });
  };

  const navigation = useNavigate();
  // geting data from form 1
  const form1 = dataFromFirstForm.state;

  const navigateBack = () => {
    navigation("/form");
  };
  const navigateFunction = () => {
    navigation("/operator", {
      state: { form1, farmerInformation },
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span>2.1.1 AMAKURU K’UMUHINZI NYIRIMURIMA (FARM OWNER ) </span>
      </strong>
      {/*1) AMAKURU RUSANGE K’Umuhinzi. */}
      <div className="amakuru flex flex-col gap-4 items-center justify-between sm:flex sm:flex-col md:flex md:flex-row  lg:flex">
        <div className="flex flex-col w-full">
          {/* IZINA RY'UMUGENZUZI */}

          <div className="flex flex-col">
            <label htmlFor="">
              <strong>Izina rya nyirumurima:</strong>
            </label>
            <input
              type="text"
              id=""
              onChange={(e) => handleFarmerInformation("name", e.target.value)}
              name="name"
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
                onChange={() => handleFarmerInformation("sex", "gabo")}
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
                onChange={() => handleFarmerInformation("sex", "gore")}
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
              onChange={(e) => handleFarmerInformation("phone", e.target.value)}
              name="phone"
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
              onChange={(e) => handleFarmerInformation("zone", e.target.value)}
              name="zone"
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
                handleFarmerInformation("cooperative", e.target.value)
              }
              name="cooperative"
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
                handleFarmerInformation("coop_member", e.target.value)
              }
              name="coop_member"
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
              onChange={(e) =>
                handleFarmerInformation("lifelong", e.target.value)
              }
              name="lifelong"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-2">
          <div className="flex flex-col">
            <label htmlFor="code">
              <strong>Code {`y'umuhinzi`}:</strong>
            </label>
            <input
              type="text"
              id="code"
              onChange={(e) =>
                handleFarmerInformation("farmerCode", e.target.value)
              }
              name="farmerCode"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
          {/* NOMERO YA ID*/}
          <div className="flex flex-col">
            <label htmlFor="id">
              <strong>Nomero y’Indangamuntu:</strong>
            </label>

            <input
              type="number"
              id="id"
              onChange={(e) => handleFarmerInformation("NID", e.target.value)}
              name="NID"
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
              onChange={(e) =>
                handleFarmerInformation("district", e.target.value)
              }
              name="district"
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
              onChange={(e) =>
                handleFarmerInformation("sector", e.target.value)
              }
              name="sector"
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
              onChange={(e) => handleFarmerInformation("cell", e.target.value)}
              name="cell"
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
              onChange={(e) =>
                handleFarmerInformation("village", e.target.value)
              }
              name="village"
              className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={
            navigateBack
            // (farmerInformation)
          }
          text="Preveous"
        />
        <Button onClick={navigateFunction} text="Next" />
      </div>
    </div>
  );
};

export default Famer;
