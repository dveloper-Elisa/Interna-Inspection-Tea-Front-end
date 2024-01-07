import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const Farming = () => {
  const form8 = useLocation();
  const [farmInformation, setFarmInformation] = useState({
    Plantingseedschoose: "",
    Plantingseedsproof: "",
    Ppspacingchoose: "",
    Ppspacingproof: "",
    PTeacutingchoose: "",
    PTeacutingproof: "",
    PTReplantchoose: "",
    PTReplantproof: "",
    PTeamodifychoose: "",
    PTeamodifyproof: "",
    PTeaManurechoose: "",
    PTeaManureproof: "",
    PTeaFaterizerdocschoose: "",
    PTeaFaterizerdocsproof: "",
    PTeaPrisitechoose: "",
    PTeaPrisiteproof: "",
    PTeaTreatmentchoose: "",
    PTeaTreatmentproof: "",
    PTraingTreatementchoose: "",
    PTraingTreatementproof: "",
    PTreatementPreventionchoose: "",
    PTreatementPreventionproof: "",
    PIligalTreatementchoose: "",
    PIligalTreatementproof: "",
    Ptreatementprotectionchoose: "",
    Ptreatementprotectionproof: "",
    PTTProtectionchoose: "",
    PTTProtectionproof: "",
    PTBchoose: "",
    PTBproof: "",
    PttreatmentObeychoose: "",
    PttreatmentObeyproof: "",
    PRTprotectionchoose: "",
    PRTprotectionproof: "",
    Ptreatmentchoose: "",
    PtreatmentDocsproof: "",
    PtreatCchoose: "",
    PtreatCproof: "",
    PtreatKchoose: "",
    PtreatKproof: "",
    PtreatCDocschoose: "",
    PtreatCDocsproof: "",
    PharvestPchoose: "",
    PharvestPproof: "",
  });

  const handleFarmInputs = (farm, value) => {
    setFarmInformation({ ...farmInformation, [farm]: value });
  };

  const navigate = useNavigate();
  const forms8 = form8.state;
  const navigateFunction = () => {
    navigate("/health", { state: { forms8, farmInformation } });
  };

  const navigateBack = () => {
    navigate("/inheritfarm");
  };
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b id="drop" className="hover:cursor-pointer max-w-fit text-black">
            Igice cya 4: UBUHINZI
          </b>
        </span>
      </strong>
      {/* IMIKORERE NIMIVUNGIRE Y'ISAMBU */}

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center max-w-lg w-full">
          <div className="flex flex-col">
            {/* Izina ry’ ukurikirana umurima:*/}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.1.1
                </b>
                <strong>
                  Waba witaho kumenya ko ubwoko bw’ingemwe utera butanga
                  umusaruro mu bwiza n’uburyohe kandi bushobora kwihanganira
                  indwara n’ibyonyi? Ubimenya ute?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("Plantingseedschoose", "yego")
                    }
                    name="Plantingseedschoose"
                    id="ab"
                  />
                  <label htmlFor="ab">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("Plantingseedschoose", "oya")
                    }
                    name="Plantingseedschoose"
                    id="bb"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("Plantingseedschoose", "ntibikorwa")
                    }
                    name="Plantingseedschoose"
                    id="cb"
                  />
                  <label htmlFor="cb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Plantingseedsproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("Plantingseedsproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* s/////////////// */}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.1.2
                </b>
                <strong>
                  Ese urubahiriza intera zisabwa hagati y’urugenwe n’urundi?
                  Ingemwe uzitera kuri metero zingahe kuri zingahe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("Ppspacingchoose", "yego")}
                    name="Ppspacingchoose"
                    id="ac"
                  />
                  <label htmlFor="ac">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("Ppspacingchoose", "oya")}
                    name="Ppspacingchoose"
                    id="bc"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("Ppspacingchoose", "ntibikorwa")
                    }
                    name="Ppspacingchoose"
                    id="cc"
                  />
                  <label htmlFor="cc">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Ppspacingproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("Ppspacingproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Intera hagati y’ingemwe: …………………….."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.2.2
                </b>
                <strong>
                  Waba ufite gahunda yo gukata icyayi ugamije kongera umusaruro
                  mu bwinshi no mu bwiza? Ese urayubahiriza?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeacutingchoose", "yego")
                    }
                    name="PTeacutingchoose"
                    id="ad"
                  />
                  <label htmlFor="ad">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PTeacutingchoose", "oya")}
                    name="PTeacutingchoose"
                    id="bd"
                  />
                  <label htmlFor="bd">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeacutingchoose", "ntibikorwa")
                    }
                    name="PTeacutingchoose"
                    id="cd"
                  />
                  <label htmlFor="cd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeacutingproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTeacutingproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* ////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Amahitamo 4.2.3
                </b>
                <strong>
                  Waba ufite gahunda yo gusazura icyayi ugamije kongera
                  umusaruro cyangwa yo gutera izindi ngemwe z’icyayi ahari
                  umwanya (gap) mu murima? Ubikora ute?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("PTReplantchoose", "yego")}
                    name="PTReplantchoose"
                    id="ae"
                  />
                  <label htmlFor="ae">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PTReplantchoose", "oya")}
                    name="PTReplantchoose"
                    id="be"
                  />
                  <label htmlFor="be">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTReplantchoose", "ntibikorwa")
                    }
                    name="PTReplantchoose"
                    id="ce"
                  />
                  <label htmlFor="ce">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTReplantproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTReplantproof", e.target.value)
                }
                cols="3"
                rows="3"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.3.1
                </b>
                <strong>Mukoresha imbuto zihinduwe (GMOs)</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeamodifychoose", "yego")
                    }
                    name="PTeamodifychoose"
                    id="af"
                  />
                  <label htmlFor="af">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PTeamodifychoose", "oya")}
                    name="PTeamodifychoose"
                    id="bf"
                  />
                  <label htmlFor="bf">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeamodifychoose", "ntibikorwa")
                    }
                    name="PTeamodifychoose"
                    id="cf"
                  />
                  <label htmlFor="cf">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeamodifyproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTeamodifyproof", e.target.value)
                }
                cols="3"
                rows="3"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.4.4
                </b>
                <strong>
                  Ujya uboresha ibishingwe ukavanamo ifumbire y’imoborera utera
                  mu murima? Ubiboresha ute? Ubundi bwoko bw’inyongera musaruro
                  ukoresha n’ubuhe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeaManurechoose", "yego")
                    }
                    name="PTeaManurechoose"
                    id="ag"
                  />
                  <label htmlFor="ag">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PTeaManurechoose", "oya")}
                    name="PTeaManurechoose"
                    id="bg"
                  />
                  <label htmlFor="bg">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeaManurechoose", "ntibikorwa")
                    }
                    name="PTeaManurechoose"
                    id="cg"
                  />
                  <label htmlFor="cg">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeaManureproof"
                onChange={(e) =>
                  handleFarmInputs("PTeaManureproof", e.target.value)
                }
                id=""
                cols="3"
                rows="3"
                placeholder="Ubwoko bw’inyongeramusaruro akoresha: ………………………………………."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.4.7
                </b>
                <strong>
                  Waba wandika ingano y’ifumbire mvaruganda (NPK) ukoresha buri
                  mwaka? Ukoresha ibiro bingahe ku mwaka?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeaFaterizerdocschoose", "yego")
                    }
                    name="PTeaFaterizerdocschoose"
                    id="ah"
                  />
                  <label htmlFor="ah">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTeaFaterizerdocschoose", "oya")
                    }
                    name="PTeaFaterizerdocschoose"
                    id="bh"
                  />
                  <label htmlFor="bh">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeaFaterizerdocschoose", "ntibikorwa")
                    }
                    name="PTeaFaterizerdocschoose"
                    id="ch"
                  />
                  <label htmlFor="ch">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeaFaterizerdocsproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTeaFaterizerdocsproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Ibiro bya NPK ku mwaka: …………….."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.5.2
                </b>
                <strong>
                  Waba ugerageza kureba niba hari ibyomyi cyangwa
                  udukoko/udusimba turya ibyomyi twaba turi mu murima wawe? Niba
                  waratubonye, watubonye mu murima uwuhe? Italiki? Ni tusimba
                  ki?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeaPrisitechoose", "yego")
                    }
                    name="PTeaPrisitechoose"
                    id="ai"
                  />
                  <label htmlFor="ai">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTeaPrisitechoose", "oya")
                    }
                    name="PTeaPrisitechoose"
                    id="bi"
                  />
                  <label htmlFor="bi">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeaPrisitechoose", "ntibikorwa")
                    }
                    name="PTeaPrisitechoose"
                    id="ci"
                  />
                  <label htmlFor="ci">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeaPrisiteproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTeaPrisiteproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.5.3
                </b>
                <strong>
                  NI gute ushira mu bikorwa gahunda yo kurwanya indwara
                  n’ibyonyi udakoresheje imiti mva ruganda?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTeaTreatmentchoose", "yego")
                    }
                    name="PTeaTreatmentchoose"
                    id="aj"
                  />
                  <label htmlFor="aj">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTeaTreatmentchoose", "oya")
                    }
                    name="PTeaTreatmentchoose"
                    id="bj"
                  />
                  <label htmlFor="bj">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTeaTreatmentchoose", "ntibikorwa")
                    }
                    name="PTeaTreatmentchoose"
                    id="cj"
                  />
                  <label htmlFor="cj">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTeaTreatmentproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTeaTreatmentproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.5.4
                </b>
                <strong>
                  Waba warahuguwe kuri gahunda yo gukoresha uburyo bukomatanyije
                  bwo kurwanya indwara n’ibyonyi mu buhinzi ukora?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTraingTreatementchoose", "yego")
                    }
                    name="PTraingTreatementchoose"
                    id="ar"
                  />
                  <label htmlFor="ar">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTraingTreatementchoose", "oya")
                    }
                    name="PTraingTreatementchoose"
                    id="br"
                  />
                  <label htmlFor="br">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTraingTreatementchoose", "ntibikorwa")
                    }
                    name="PTraingTreatementchoose"
                    id="cr"
                  />
                  <label htmlFor="cr">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTraingTreatementproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTraingTreatementproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Wahuguwe ryari? ............."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.5.7
                </b>
                <strong>
                  Ese waba ushira mu bikorwa gahunda yo kubanya imiti mvaruganda
                  ukoresha mw’isambu yawe buri mwaka? Inyandiko zabyo urazifite
                  ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTreatementPreventionchoose", "yego")
                    }
                    name="PTreatementPreventionchoose"
                    id="am"
                  />
                  <label htmlFor="am">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTraingTreatementchoose", "oya")
                    }
                    name="PTreatementPreventionchoose"
                    id="bm"
                  />
                  <label htmlFor="bm">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTraingTreatementchoose", "ntibikorwa")
                    }
                    name="PTreatementPreventionchoose"
                    id="cm"
                  />
                  <label htmlFor="cm">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTreatementPreventionproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTreatementPrevention", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.1
                </b>
                <strong>
                  Ese waba utera imiti iri kurutonde rwimiti itemewe na
                  mabwiraza y’ubuhinzi burambye cyangwa aya leta
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PIligalTreatementchoose", "yego")
                    }
                    name="PIligalTreatementchoose"
                    id="an"
                  />
                  <label htmlFor="an">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PIligalTreatementchoose", "oya")
                    }
                    name="PIligalTreatementchoose"
                    id="bn"
                  />
                  <label htmlFor="bn">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PIligalTreatementchoose", "ntibikorwa")
                    }
                    name="PIligalTreatementchoose"
                    id="cn"
                  />
                  <label htmlFor="cn">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PIligalTreatementproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PIligalTreatementproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.2
                </b>
                <strong>
                  Waba ufata ingamba kandi ugakurikiza amabwiriza y’ubwirinze
                  yagenewe abatera imiti
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("Ptreatementprotectionchoose", "yego")
                    }
                    name="Ptreatementprotectionchoose"
                    id="ao"
                  />
                  <label htmlFor="ao">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("Ptreatementprotectionchoose", "oya")
                    }
                    name="Ptreatementprotectionchoose"
                    id="bo"
                  />
                  <label htmlFor="bo">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs(
                        "Ptreatementprotectionchoose",
                        "ntibikorwa"
                      )
                    }
                    name="Ptreatementprotectionchoose"
                    id="co"
                  />
                  <label htmlFor="co">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Ptreatementprotectionproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("Ptreatementprotectionproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Imiti akoresha:........."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.3
                </b>
                <strong>
                  Waba warahugurwe kuburyo bwo gutera imiti no gukoresha
                  ibikoresho by’ubwirinzi.
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PTTProtectionchoose", "yego")
                    }
                    name="PTTProtectionchoose"
                    id="ap"
                  />
                  <label htmlFor="ap">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PTTProtectionchoose", "oya")
                    }
                    name="PTTProtectionchoose"
                    id="bp"
                  />
                  <label htmlFor="bp">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PTTProtectionchoose", "ntibikorwa")
                    }
                    name="PTTProtectionchoose"
                    id="cp"
                  />
                  <label htmlFor="cp">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTTProtectionproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PTTProtectionproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.4
                </b>
                <strong>
                  Waba ufite ubwiherero n’ubukarabiro bwabantu batere imiti.
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("PTBchoose", "yego")}
                    name="PTBchoose"
                    id="al"
                  />
                  <label htmlFor="al">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PTBchoose", "oya")}
                    name="PTBchoose"
                    id="bl"
                  />
                  <label htmlFor="bl">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() => handleFarmInputs("PTBchoose", "ntibikorwa")}
                    name="PTBchoose"
                    id="cl"
                  />
                  <label htmlFor="cl">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PTBproof"
                id=""
                onChange={(e) => handleFarmInputs("PTBproof", e.target.value)}
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.5
                </b>
                <strong>
                  Waba utera imiti ukubigenkwe namabwiriza. (MSDS)
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PttreatmentObeychoose", "yego")
                    }
                    name="PttreatmentObeychoose"
                    id="as"
                  />
                  <label htmlFor="as">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PttreatmentObeychoose", "oya")
                    }
                    name="PttreatmentObeychoose"
                    id="bs"
                  />
                  <label htmlFor="bs">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PttreatmentObeychoose", "ntibikorwa")
                    }
                    name="PttreatmentObeychoose"
                    id="cs"
                  />
                  <label htmlFor="cs">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PttreatmentObeyproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PttreatmentObeyproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.6
                </b>
                <strong>
                  Hari ingamba wafashe kuburyo imiti utera itahumanya imigezi
                  cyangwa undi mutungo kamere n’ibinyabuzima?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PRTprotectionchoose", "yego")
                    }
                    name="PRTprotectionchoose"
                    id="at"
                  />
                  <label htmlFor="at">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PRTprotectionchoose", "oya")
                    }
                    name="PRTprotectionchoose"
                    id="bt"
                  />
                  <label htmlFor="bt">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PRTprotectionchoose", "ntibikorwa")
                    }
                    name="PRTprotectionchoose"
                    id="ct"
                  />
                  <label htmlFor="ct">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PRTprotectionproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PRTprotectionproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.8
                </b>
                <strong>
                  Waba ubika inyandiko zigendanye nkoreshwa ryimiti
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("Ptreatmentchoose", "yego")
                    }
                    name="Ptreatmentchoose"
                    id="au"
                  />
                  <label htmlFor="au">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("Ptreatmentchoose", "oya")}
                    name="Ptreatmentchoose"
                    id="bu"
                  />
                  <label htmlFor="bu">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("Ptreatmentchoose", "ntibikorwa")
                    }
                    name="Ptreatmentchoose"
                    id="cu"
                  />
                  <label htmlFor="cu">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PtreatmentDocsproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PtreatmentDocsproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.9
                </b>
                <strong>
                  Ese uducupa/utubidons/utujerikani tuba twavuyemwo imiti
                  udushira he? Udukoresha iki?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("PtreatCchoose", "yego")}
                    name="PtreatCchoose"
                    id="av"
                  />
                  <label htmlFor="av">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PtreatCchoose", "oya")}
                    name="PtreatCchoose"
                    id="bv"
                  />
                  <label htmlFor="bv">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PtreatCchoose", "ntibikorwa")
                    }
                    name="PtreatCchoose"
                    id="cv"
                  />
                  <label htmlFor="cv">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PtreatCproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PtreatCproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.10
                </b>
                <strong>
                  Waba ufite uburyo bwiza bwo kubika imiti namafumbire,
                  bikoreshwa mubuhinzi
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("PtreatKchoose", "yego")}
                    name="PtreatKchoose"
                    id="aw"
                  />
                  <label htmlFor="aw">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PtreatKchoose", "oya")}
                    name="PtreatKchoose"
                    id="bw"
                  />
                  <label htmlFor="bw">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PtreatKchoose", "ntibikorwa")
                    }
                    name="PtreatKchoose"
                    id="cw"
                  />
                  <label htmlFor="cw">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PtreatKproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PtreatKproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.6.11-12
                </b>
                <strong>
                  Ese waba ubika ibikoresho byifashishwa mugutera imiti?
                  Utugaragariza inyandiko zigendana nububiko bwimiti (amatariki,
                  ingano,.)
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleFarmInputs("PtreatCDocschoose", "yego")
                    }
                    name="PtreatCDocschoose"
                    id="ax"
                  />
                  <label htmlFor="ax">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleFarmInputs("PtreatCDocschoose", "oya")
                    }
                    name="PtreatCDocschoose"
                    id="bx"
                  />
                  <label htmlFor="bx">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PtreatCDocschoose", "ntibikorwa")
                    }
                    name="PtreatCDocschoose"
                    id="cx"
                  />
                  <label htmlFor="cx">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PtreatCDocsproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PtreatCDocsproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 4.7.1
                </b>
                <strong>
                  Ukora iki kugira ngo uramire umusaruro wawe mu bwiza, mu
                  bwinshi n’ubwiza n’ubudahangarwa?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleFarmInputs("PharvestPchoose", "yego")}
                    name="PharvestPchoose"
                    id="ay"
                  />
                  <label htmlFor="ay">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleFarmInputs("PharvestPchoose", "oya")}
                    name="PharvestPchoose"
                    id="by"
                  />
                  <label htmlFor="by">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleFarmInputs("PharvestPchoose", "ntibikorwa")
                    }
                    name="PharvestPchoose"
                    id="cy"
                  />
                  <label htmlFor="cy">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PharvestPproof"
                id=""
                onChange={(e) =>
                  handleFarmInputs("PharvestPproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
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

export default Farming;
