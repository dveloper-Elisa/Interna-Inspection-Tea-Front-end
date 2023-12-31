import Button from "./button";
import Famer from "./famer";
import FarmOperator from "../assets/farmoperator";
import FarmInfo from "../assets/farminfor";
import GpsCoordinates from "../assets/dpsCoadinates";
import HavestIn4years from "../assets/havestingp4y";
import FarmingLure from "../assets/famingLures";
import FarmOrigin from "../assets/farmOrigin";
import Farming from "../assets/farmingInGeneral";
import HealthSafety from "../assets/healthandsafety";
import Environment from "../assets/enviroment";
import Comfirm from "../assets/confirmation";

import { useState } from "react";
const InspectorForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-center items-center image-login ">
      <div className="flex m-[2rem] ">
        {/* side bar */}
        <div className="bg-white p-5">
          {/* TITLE DIV */}
          <div className="flex flex-col font-serif text-black ">
            <div className="flex flex-col">
              <strong className=" text-center">
                IFISHI Y’UBUGENZUZI BW’IMBERE KU MUHINZI W’ICYAYI MU RWANDA
                KOPERATIVE KOTEMUKI
              </strong>
              <strong className="text-center">
                URUGANDA RW’ICYAYI RWA MUGANZA KIVU TEA FACTORY
              </strong>
            </div>

            {/* INSTRUCTIONS */}
            <div className="flex flex-col text-6 mt-6">
              <strong>
                <u>Amabwiriza rusange ayobora Umugenzuzi (Ubaza):</u>
              </strong>

              <ol className="list-disc">
                <li>
                  Gukora ibishoboka byose ukabona ibisubizo by’ibibazo byose
                  wabajije umuhinzi.
                </li>
                <li>
                  Ku gisubizo “Yego”, “Oya” cyangwa “Ntabwobikorwa/Ntibishoboka;
                  Urasabwa gushyira guhitamo igisubizo uhawe.
                </li>
                <li>
                  Kwirinda kuyobora ubazwa kugera ku gisubizo cyangwa
                  kumuzubiriza.
                </li>
                <li>
                  Igenzura rigomba kubera k’umurima w’ umuhinzi kugirango
                  ushobore kureba neza imiterere yawo.
                </li>
                <li>
                  Kumenya neza ko umuhinzi aguhaye ibisubizo agendeye
                  k’umusaruro w’umwaka ushize (amezi 12 ashize) ko Atari umwaka
                  turimo.
                </li>
              </ol>
            </div>
          </div>
          {/* FORM DIVISION */}

          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <strong className="text-[25px]">
                <span className="font-serif text-center border-b-[2px] my-4 shadow-lg hover:cursor-pointer text-[#166534]">
                  <b
                    id="drop"
                    onClick={toglerBtn}
                    className="hover:cursor-pointer max-w-fit"
                  >
                    1) AMAKURU RUSANGE K’UBUGENZUZI BW’IMBERE.
                  </b>
                </span>
              </strong>
              {/*1) AMAKURU RUSANGE K’UBUGENZUZI BW’IMBERE. */}
              {isOpen && (
                <div className="amakuru flex flex-col gap-4 items-center justify-between sm:flex sm:flex-col md:flex md:flex-row  lg:flex ">
                  <div className="flex flex-col w-full gap-2">
                    {/* IZINA RY'UMUGENZUZI */}
                    <div className="flex flex-col">
                      <label htmlFor="">
                        <strong>
                          Izina ry’Umugenzuzi w’imbere (Internal Auditor):
                        </strong>
                      </label>
                      <input
                        type="text"
                        id=""
                        name="inspectorName"
                        className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                      />
                    </div>
                    {/* AMAZINA Y'UMUHINZI */}
                    <div className="flex flex-col">
                      <label htmlFor="">
                        <strong>Amazina y’Umuhinzi wasuwe:</strong>
                      </label>
                      <input
                        type="text"
                        id=""
                        name="vistedFarmerName"
                        className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                      />
                    </div>

                    {/* ITARIKI UBUGENZUZI BWABEREYEHO */}
                    <div className="flex flex-col">
                      <label htmlFor="ubu">
                        <strong>Itariki ubugenzuzi bwabereye ho:</strong>
                      </label>
                      <input
                        type="date"
                        name="dateOfInspection"
                        className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                      />
                    </div>
                  </div>
                  {/* NINDE WARUHARI */}
                  <div className="flex flex-col w-full gap-2">
                    <label>
                      <strong>Ninde wari uhari igenzura ry’imbere riba?</strong>
                    </label>
                    <span>
                      <input
                        type="radio"
                        id="nyi"
                        name="existWhenInspection"
                        className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                      />
                      <label htmlFor="nyi" className="pl-2">
                        Nyirumurima
                      </label>
                    </span>
                    <span>
                      <input
                        type="radio"
                        id="si"
                        name="existWhenInspection"
                        className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                      />
                      <label htmlFor="si" className="pl-2">
                        Si Nyirumurima
                      </label>
                    </span>

                    {/* IGIHE UBUGENZUZI BWABEREYE */}

                    <div className="flex flex-col">
                      <label htmlFor="">
                        <strong>
                          Igihe ubugenzuzi bwatangiriye/bwarangiriye:
                        </strong>
                      </label>
                      <div className="flex gap-3">
                        <span className="uppercase text-[20px]">
                          start:
                          <input
                            type="time"
                            name="startingTime"
                            className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                          />
                        </span>
                        <span className="uppercase text-[20px]">
                          {" "}
                          END:
                          <input
                            type="time"
                            name="endingTime"
                            className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                          />
                        </span>
                      </div>
                    </div>

                    {/* IGENZURA RYABEREYE MUMURIMA? */}
                    <div className="flex flex-col">
                      <label htmlFor="E">
                        <strong>Igenzura ryabereye mu murima?</strong>
                      </label>
                      <span>
                        <input
                          type="radio"
                          id="Y"
                          name="inspectionPlace"
                          className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                        />
                        <label htmlFor="Y" className="pl-2">
                          Yego
                        </label>
                      </span>
                      <span>
                        <input
                          type="radio"
                          id="O"
                          name="inspectionPlace"
                          className="border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                        />
                        <label htmlFor="O" className="pl-2">
                          Oya
                        </label>
                      </span>
                    </div>
                  </div>

                  {/* being used */}
                </div>
              )}
            </div>
            {/* 2.1.1	AMAKURU K’UMUHINZI NYIRIMURIMA (FARM OWNER ) */}
            <div className="flex">
              <Famer />
            </div>
            <div className="flex">
              <FarmOperator />
            </div>
            <div className="flex">
              <FarmInfo />
            </div>
            <div className="flex">
              <GpsCoordinates />
            </div>
            <div className="flex">
              <HavestIn4years />
            </div>
            <div className="flex">
              <FarmingLure />
            </div>
            <div className="flex">
              <FarmOrigin />
            </div>
            <div className="flex">
              <Farming />
            </div>
            <div className="flex">
              <HealthSafety />
            </div>
            <div className="flex">
              <Environment />
            </div>
            <div className="flex">
              <Comfirm />
            </div>
          </div>
          <Button
            href="/login/dashboard"
            text="Dashboard"
            customCss="bg-[#166534] border-[#166534] text-white  font-bold tracking-[2px] hover:bg-[#fff] hover:text-black float-end mt-[1rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default InspectorForm;
