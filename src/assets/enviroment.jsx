import { useNavigate, useLocation } from "react-router-dom";
import Button from "../components/button";
import { useState } from "react";

const Environment = () => {
  const form10 = useLocation();

  const [environmentData, setEnvironmentData] = useState({
    Eforestchoose: "",
    Eforestproof: "",
    ETstopedchoose: "",
    ETstopproof: "",
    EtreeProtectchoose: "",
    EtreeProtectproof: "",
    EGnaturalchoose: "",
    EGnaturalproof: "",
    EtreePlantchoose: "",
    EtreePlantproof: "",
    EtreeShadowchoose: "",
    EtreeShadowproof: "",
    Elandexpandchoose: "",
    Elandexpandproof: "",
    Elimitchoose: "",
    Elimitproof: "",
    Eriparianchoose: "",
    Eriparianproof: "",
    Epoachingchoose: "",
    Epoachingproof: "",
    EWanimalchoose: "",
    EWanimalproof: "",
    ETbigschoose: "",
    ETbigsproof: "",
    ETtypechoose: "",
    ETtypeproof: "",
    EWanimalWorkchoose: "",
    EWanimalWorkproof: "",
    EErosionchoose: "",
    EErosionproof: "",
    Eburningchoose: "",
    Eburningproof: "",
    EburningReasonchoose: "",
    EburningReasonproof: "",
    Ewaterchoose: "",
    Ewaterproof: "",
    EwaterPermitchoose: "",
    EwaterPermitproof: "",
    Erainwaterchoose: "",
    Erainwaterproof: "",
    EriverProtectchoose: "",
    EriverProtectproof: "",
    Etoiletmanurechoose: "",
    Etoiletmanureproof: "",
    EwaterWasteschoose: "",
    EwaterWastesproof: "",
    EwastesBinchoose: "",
    EwastesBinproof: "",
    Ewastesburnchoose: "",
    Ewastesburnproof: "",
    ECookchoose: "",
    ECookproof: "",
    EcookGaschoose: "",
    EcookGasproof: "",
    EcookBiogaschoose: "",
    EcookBiogasproof: "",
    Esunrayschoose: "",
    Esunraysproof: "",
    EgreenHousechoose: "",
    EgreenHouseproof: "",
    EgreenHouseRchoose: "",
    EgreenHouseRproof: "",
    EgreenHouseFormchoose: "",
    EgreenHouseFormproof: "",
  });

  const handleEnvironmentInputs = (environment, value) => {
    setEnvironmentData({ ...environmentData, [environment]: value });
  };

  const navigate = useNavigate();
  const forms10 = form10.state;
  const navigateFunction = () => {
    navigate("/confirm", { state: { forms10, environmentData } });
  };

  const navigateBack = () => {
    navigate("/health");
  };
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b id="drop" className="hover:cursor-pointer max-w-fit text-black">
            Igice cya 6: IBIDUKIKIJE ^
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
                  Ingenzi 6.1.1
                </b>
                <strong>
                  Ese waba warahinze ahahoze ishyamba cyimeza nyuma 2014
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Eforestchoose", "yego")
                    }
                    name="Eforestchoose"
                    id="ab"
                  />
                  <label htmlFor="ab">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Eforestchoose", "oya")
                    }
                    name="Eforestchoose"
                    id="bb"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Eforestchoose", "ntibikorwa")
                    }
                    name="Eforestchoose"
                    id="cb"
                  />
                  <label htmlFor="cb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Eforestproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Eforestproof", e.target.value)
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
                  Ingenzi 6.1.2
                </b>
                <strong>Ese waba uhinga mucyanya gikomye</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("ETstopedchoose", "yego")
                    }
                    name="ETstopedchoose"
                    id="ac"
                  />
                  <label htmlFor="ac">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("ETstopedchoose", "oya")
                    }
                    name="ETstopedchoose"
                    id="bc"
                  />
                  <label htmlFor="bc">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("ETstopedchoose", "ntibikorwa")
                    }
                    name="ETstopedchoose"
                    id="cc"
                  />
                  <label htmlFor="cc">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="ETstopproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("ETstopproof", e.target.value)
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
                  Ingenzi 6.2.2
                </b>
                <strong>
                  Ese waba ubungabunga ibiti cyimeza cyangwa gakondo mumurima
                  wawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreeProtectchoose", "yego")
                    }
                    name="EtreeProtectchoose"
                    id="ad"
                  />
                  <label htmlFor="ad">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreeProtectchoose", "oya")
                    }
                    name="EtreeProtectchoose"
                    id="bd"
                  />
                  <label htmlFor="bd">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EtreeProtectchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EtreeProtectchoose"
                    id="cd"
                  />
                  <label htmlFor="cd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EtreeProtectproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EtreeProtectproof", e.target.value)
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
                  Ingenzi 6.2.3
                </b>
                <strong>
                  Ese waba waba ufite ahantu hateye ibyatsi cyimeza mw’isambu
                  yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EGnaturalchoose", "yego")
                    }
                    name="EGnaturalchoose"
                    id="ae"
                  />
                  <label htmlFor="ae">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EGnaturalchoose", "oya")
                    }
                    name="EGnaturalchoose"
                    id="be"
                  />
                  <label htmlFor="be">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EGnaturalchoose", "ntibikorwa")
                    }
                    name="EGnaturalchoose"
                    id="ce"
                  />
                  <label htmlFor="ce">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EGnaturalproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EGnaturalproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Aho bigaragara:………………………"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                {/* <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.3.1
                  </b> */}
                <strong>
                  Ese waba utera ibiti (harimwo ubwoko gakongo) mw’isambu yawe
                  buri mwaka?{" "}
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreePlantchoose", "yego")
                    }
                    name="EtreePlantchoose"
                    id="af"
                  />
                  <label htmlFor="af">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreePlantchoose", "oya")
                    }
                    name="EtreePlantchoose"
                    id="bf"
                  />
                  <label htmlFor="bf">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreePlantchoose", "ntibikorwa")
                    }
                    name="EtreePlantchoose"
                    id="cf"
                  />
                  <label htmlFor="cf">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EtreePlantproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EtreePlantproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Umubare w’ibiti biri mw’isambu ye:…………………"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 6.2.5
                </b>
                <strong>
                  Waba ufite ibiti bitanga igicucu mumurima wawe ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreeShadowchoose", "yego")
                    }
                    name="EtreeShadowchoose"
                    id="ag"
                  />
                  <label htmlFor="ag">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreeShadowchoose", "oya")
                    }
                    name="EtreeShadowchoose"
                    id="bg"
                  />
                  <label htmlFor="bg">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EtreeShadowchoose", "ntibikorwa")
                    }
                    name="EtreeShadowchoose"
                    id="cg"
                  />
                  <label htmlFor="cg">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EtreeShadowproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EtreeShadowproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="...……..%"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 6.2.6
                </b>
                <strong>
                  Waba utenya kongera ubuso buriho ibimera kamere?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Elandexpandchoose", "yego")
                    }
                    name="Elandexpandchoose"
                    id="ah"
                  />
                  <label htmlFor="ah">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Elandexpandchoose", "oya")
                    }
                    name="Elandexpandchoose"
                    id="bh"
                  />
                  <label htmlFor="bh">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Elandexpandchoose", "ntibikorwa")
                    }
                    name="Elandexpandchoose"
                    id="ch"
                  />
                  <label htmlFor="ch">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Elandexpandproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Elandexpandproof", e.target.value)
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
                  Ingenzi 6.3.1
                </b>
                <strong>
                  Waba wita mumbibi zimigezi n’ibiyaga byegereye umurima wawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Elimitchoose", "yego")
                    }
                    name="Elimitchoose"
                    id="ai"
                  />
                  <label htmlFor="ai">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Elimitchoose", "oya")
                    }
                    name="Elimitchoose"
                    id="bi"
                  />
                  <label htmlFor="bi">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Elimitchoose", "ntibikorwa")
                    }
                    name="Elimitchoose"
                    id="ci"
                  />
                  <label htmlFor="ci">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Elimitproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Elimitproof", e.target.value)
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
                  Ingenzi 6.3.2
                </b>
                <strong>
                  Ese waba usiga icanya gikomye « riparian zone » hagati y’aho
                  ukorera imirimo y’ubuhinzi n’isoko y’amazi cyangwa imigezi ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Eriparianchoose", "yego")
                    }
                    name="Eriparianchoose"
                    id="aj"
                  />
                  <label htmlFor="aj">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Eriparianchoose", "oya")
                    }
                    name="Eriparianchoose"
                    id="bj"
                  />
                  <label htmlFor="bj">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Eriparianchoose", "ntibikorwa")
                    }
                    name="Eriparianchoose"
                    id="cj"
                  />
                  <label htmlFor="cj">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Eriparianproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Eriparianproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Metero zimwo: …………m"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 6.4.1
                </b>
                <strong>
                  Ese waba ukora imirimo yo guhiga inyamaswa z’ishamba? Kuzihe
                  mpamvu?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Epoachingchoose", "yego")
                    }
                    name="Epoachingchoose"
                    id="ar"
                  />
                  <label htmlFor="ar">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Epoachingchoose", "oya")
                    }
                    name="Epoachingchoose"
                    id="br"
                  />
                  <label htmlFor="br">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Epoachingchoose", "ntibikorwa")
                    }
                    name="Epoachingchoose"
                    id="cr"
                  />
                  <label htmlFor="cr">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Epoachingproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Epoachingproof", e.target.value)
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
                  Ingenzi 6.4.2
                </b>
                <strong>
                  Hari inyamaswa y’ishamba (urugero nk’inkende) waba utunze mu
                  rugo iwawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EWanimalchoose", "yego")
                    }
                    name="EWanimalchoose"
                    id="am"
                  />
                  <label htmlFor="am">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EWanimalchoose", "oya")
                    }
                    name="EWanimalchoose"
                    id="bm"
                  />
                  <label htmlFor="bm">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EWanimalchoose", "ntibikorwa")
                    }
                    name="EWanimalchoose"
                    id="cm"
                  />
                  <label htmlFor="cm">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EWanimalproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EWanimalproof", e.target.value)
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
                  Ingenzi 6.4.3
                </b>
                <strong>
                  Hari ibiterwa byiganza nk’amarebe waba ufite mw’isambu yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("ETbigschoose", "yego")
                    }
                    name="ETbigschoose"
                    id="an"
                  />
                  <label htmlFor="an">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("ETbigschoose", "oya")
                    }
                    name="ETbigschoose"
                    id="bn"
                  />
                  <label htmlFor="bn">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("ETbigschoose", "ntibikorwa")
                    }
                    name="ETbigschoose"
                    id="cn"
                  />
                  <label htmlFor="cn">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="ETbigsproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("ETbigsproof", e.target.value)
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
                  Ingenzi 6.4.3
                </b>
                <strong>Nimba Bihari, ni ubuhe bwoko? Ubirwanya ute?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("ETtypechoose", "yego")
                    }
                    name="ETtypechoose"
                    id="ao"
                  />
                  <label htmlFor="ao">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("ETtypechoose", "oya")
                    }
                    name="ETtypechoose"
                    id="bo"
                  />
                  <label htmlFor="bo">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("ETtypechoose", "ntibikorwa")
                    }
                    name="ETtypechoose"
                    id="co"
                  />
                  <label htmlFor="co">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="ETtypeproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("ETtypeproof", e.target.value)
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
                  Ingenzi 6.4.4
                </b>
                <strong>
                  Hari inyamaswa y’ishamba (urugero: inkende) ukeresha mu mirimo
                  y’isambu yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EWanimalWorkchoose", "yego")
                    }
                    name="EWanimalWorkchoose"
                    id="ap"
                  />
                  <label htmlFor="ap">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EWanimalWorkchoose", "oya")
                    }
                    name="EWanimalWorkchoose"
                    id="bp"
                  />
                  <label htmlFor="bp">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EWanimalWorkchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EWanimalWorkchoose"
                    id="cp"
                  />
                  <label htmlFor="cp">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EWanimalWorkproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EWanimalWorkproof", e.target.value)
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
                  Ingenzi 6.4.5
                </b>
                <strong>
                  Ni ubuhe buryo ukoresha mu kurwanya isuri mw’isambu yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EErosionchoose", "yego")
                    }
                    name="EErosionchoose"
                    id="al"
                  />
                  <label htmlFor="al">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EErosionchoose", "oya")
                    }
                    name="EErosionchoose"
                    id="bl"
                  />
                  <label htmlFor="bl">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EErosionchoose", "ntibikorwa")
                    }
                    name="EErosionchoose"
                    id="cl"
                  />
                  <label htmlFor="cl">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EErosionproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EErosionproof", e.target.value)
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
                  Ingenzi 6.4.6
                </b>
                <strong>
                  Waba ukoresha umuriro utwika ibishingwe cyangwa imyanda
                  mw’isambu yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Eburningchoose", "yego")
                    }
                    name="Eburningchoose"
                    id="as"
                  />
                  <label htmlFor="as">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Eburningchoose", "oya")
                    }
                    name="Eburningchoose"
                    id="bs"
                  />
                  <label htmlFor="bs">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Eburningchoose", "ntibikorwa")
                    }
                    name="Eburningchoose"
                    id="cs"
                  />
                  <label htmlFor="cs">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Eburningproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Eburningproof", e.target.value)
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
                  Ingenzi 6.4.6
                </b>
                <strong>Niba utwika, ni kuzihe mpamvu?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EburningReasonchoose", "yego")
                    }
                    name="EburningReasonchoose"
                    id="at"
                  />
                  <label htmlFor="at">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EburningReasonchoose", "oya")
                    }
                    name="EburningReasonchoose"
                    id="bt"
                  />
                  <label htmlFor="bt">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EburningReasonchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EburningReasonchoose"
                    id="ct"
                  />
                  <label htmlFor="ct">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EburningReasonproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EburningReasonproof", e.target.value)
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
                  Ingenzi 6.5.1
                </b>
                <strong>
                  Hari isoko cyangwa umugezi w’amazi ukoresha mw’isambu yawe ku
                  buryo bwihariye?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewaterchoose", "yego")
                    }
                    name="Ewaterchoose"
                    id="au"
                  />
                  <label htmlFor="au">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewaterchoose", "oya")
                    }
                    name="Ewaterchoose"
                    id="bu"
                  />
                  <label htmlFor="bu">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewaterchoose", "ntibikorwa")
                    }
                    name="Ewaterchoose"
                    id="cu"
                  />
                  <label htmlFor="cu">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Ewaterproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Ewaterproof", e.target.value)
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
                  Ingenzi 6.5.2
                </b>
                <strong>
                  Niba ayo mazi (umugezi/isoko) uyakoresha, ubifiteye
                  uburenganzira (icyangombwa) ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EwaterPermitchoose", "yego")
                    }
                    name="EwaterPermitchoose"
                    id="av"
                  />
                  <label htmlFor="av">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EwaterPermitchoose", "oya")
                    }
                    name="EwaterPermitchoose"
                    id="bv"
                  />
                  <label htmlFor="bv">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EwaterPermitchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EwaterPermitchoose"
                    id="cv"
                  />
                  <label htmlFor="cv">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EwaterPermitproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EwaterPermitproof", e.target.value)
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
                  Amahitamo 6.5.6
                </b>
                <strong>
                  Waba ufata amazi y’imvura noneho ukayakoresha mu bikorwa
                  by’ubuhinzi ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Erainwaterchoose", "yego")
                    }
                    name="Erainwaterchoose"
                    id="aw"
                  />
                  <label htmlFor="aw">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Erainwaterchoose", "oya")
                    }
                    name="Erainwaterchoose"
                    id="bw"
                  />
                  <label htmlFor="bw">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Erainwaterchoose", "ntibikorwa")
                    }
                    name="Erainwaterchoose"
                    id="cw"
                  />
                  <label htmlFor="cw">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Erainwaterproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Erainwaterproof", e.target.value)
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
                  Amahitamo 6.5.7
                </b>
                <strong>
                  Waba witabira ibikorwa bigamije kubungabunga imigezi
                  n’ukurinda isuri ubutaka bikorerwa hamwe n’abaturage
                  batuye/bahingira mu gace kamwe “watershed management”
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EriverProtectchoose", "yego")
                    }
                    name="EriverProtectchoose"
                    id="ax"
                  />
                  <label htmlFor="ax">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EriverProtectchoose", "oya")
                    }
                    name="EriverProtectchoose"
                    id="bx"
                  />
                  <label htmlFor="bx">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EriverProtectchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EriverProtectchoose"
                    id="cx"
                  />
                  <label htmlFor="cx">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EriverProtectproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EriverProtectproof", e.target.value)
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
                  Ingenzi 6.6.2
                </b>
                <strong>
                  Waba ukoresha ibyanda yo muri toilet nk’ifumbire mu murima?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Etoiletmanurechoose", "yego")
                    }
                    name="Etoiletmanurechoose"
                    id="ay"
                  />
                  <label htmlFor="ay">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Etoiletmanurechoose", "oya")
                    }
                    name="Etoiletmanurechoose"
                    id="by"
                  />
                  <label htmlFor="by">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "Etoiletmanurechoose",
                        "ntibikorwa"
                      )
                    }
                    name="Etoiletmanurechoose"
                    id="cy"
                  />
                  <label htmlFor="cy">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Etoiletmanureproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Etoiletmanureproof", e.target.value)
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
                  Ingenzi 6.6.3
                </b>
                <strong>
                  Ese waba ufite uburyo wita kunyanda y’ amazi iboneka uri
                  gutunganya umusaruro?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EwaterWasteschoose", "yego")
                    }
                    name="EwaterWasteschoose"
                    id="very"
                  />
                  <label htmlFor="very">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EwaterWasteschoose", "oya")
                    }
                    name="EwaterWasteschoose"
                    id="vroy"
                  />
                  <label htmlFor="vroy">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EwaterWasteschoose",
                        "ntibikorwa"
                      )
                    }
                    name="EwaterWasteschoose"
                    id="vory"
                  />
                  <label htmlFor="vory">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EwaterWastesproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EwaterWastesproof", e.target.value)
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
                  Ingenzi 6.7.1
                </b>
                <strong>
                  Imyannda y’isambu yawe uyikusanyiriza he? Hanyuma ukafatira
                  uwuhe mwanzuro?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHouseFormchoose", "yego")
                    }
                    name="EgreenHouseFormchoose"
                    id="crat"
                  />
                  <label htmlFor="crat">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHouseFormchoose", "oya")
                    }
                    name="EgreenHouseFormchoose"
                    id="kik"
                  />
                  <label htmlFor="kik">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EgreenHouseFormchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EgreenHouseFormchoose"
                    id="kii"
                  />
                  <label htmlFor="kii">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EgreenHouseFormproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs(
                    "EgreenHouseFormproof",
                    e.target.value
                  )
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
                  Ingenzi 6.7.2
                </b>
                <strong>Waba utwika imyanda kw’isambu yawe?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EwastesBinchoose", "yego")
                    }
                    name="EwastesBinchoose"
                    id="vcc"
                  />
                  <label htmlFor="vcc">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EwastesBinchoose", "oya")
                    }
                    name="EwastesBinchoose"
                    id="vbb"
                  />
                  <label htmlFor="vbb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EwastesBinchoose", "ntibikorwa")
                    }
                    name="EwastesBinchoose"
                    id="vkk"
                  />
                  <label htmlFor="vkk">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EwastesBinproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EwastesBinproof", e.target.value)
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
                  Ingenzi 6.8.2
                </b>
                <strong>Waba ukoresha Rondereza mu guteka?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewastesburnchoose", "yego")
                    }
                    name="Ewastesburnchoose"
                    id="cbb"
                  />
                  <label htmlFor="cbb">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewastesburnchoose", "yego")
                    }
                    name="Ewastesburnchoose"
                    id="ccc"
                  />
                  <label htmlFor="ccc">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Ewastesburnchoose", "ntibikorwa")
                    }
                    name="Ewastesburnchoose"
                    id="cdd"
                  />
                  <label htmlFor="cdd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Ewastesburnproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Ewastesburnproof", e.target.value)
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
                  Ingenzi 6.8.2
                </b>
                <strong>Waba ukoresha gaz mu guteka?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("ECookchoose", "yego")
                    }
                    name="ECookchoose"
                    id="dvv"
                  />
                  <label htmlFor="dvv">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("ECookchoose", "oya")
                    }
                    name="ECookchoose"
                    id="dcc"
                  />
                  <label htmlFor="dcc">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("ECookchoose", "ntibikorwa")
                    }
                    name="ECookchoose"
                    id="dbb"
                  />
                  <label htmlFor="dbb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="ECookproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("ECookproof", e.target.value)
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
                  Ingenzi 6.8.2
                </b>
                <strong>Waba ukoresha Biogazi?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookGaschoose", "yego")
                    }
                    name="EcookGaschoose"
                    id="fff"
                  />
                  <label htmlFor="fff">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookGaschoose", "oya")
                    }
                    name="EcookGaschoose"
                    id="fgg"
                  />
                  <label htmlFor="fgg">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookGaschoose", "ntibikorwa")
                    }
                    name="EcookGaschoose"
                    id="fdd"
                  />
                  <label htmlFor="fdd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EcookGasproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EcookGasproof", e.target.value)
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
                  Ingenzi 6.8.2
                </b>
                <strong>Waba ukoresha imirasire y’izuba?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookBiogaschoose", "yego")
                    }
                    name="EcookBiogaschoose"
                    id="ggg"
                  />
                  <label htmlFor="ggg">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookBiogaschoose", "oya")
                    }
                    name="EcookBiogaschoose"
                    id="gkk"
                  />
                  <label htmlFor="gkk">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EcookBiogaschoose", "ntibikorwa")
                    }
                    name="EcookBiogaschoose"
                    id="gjj"
                  />
                  <label htmlFor="gjj">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EcookBiogasproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EcookBiogasproof", e.target.value)
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
                  Ingenzi 6.9.1
                </b>
                <strong>
                  Ese hari ico waba uzi kubijyanye n’imyuka ihumanya ikirere
                  (Green House Gazes)?{" "}
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("Esunrayschoose", "yego")
                    }
                    name="Esunrayschoose"
                    id="qaa"
                  />
                  <label htmlFor="qaa">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("Esunrayschoose", "oya")
                    }
                    name="Esunrayschoose"
                    id="qss"
                  />
                  <label htmlFor="qss">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("Esunrayschoose", "ntibikorwa")
                    }
                    name="Esunrayschoose"
                    id="qvh"
                  />
                  <label htmlFor="qvh">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Esunraysproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("Esunraysproof", e.target.value)
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
                  Ingenzi 6.9.1
                </b>
                <strong>Ese wamenya iyo wohereza mu kirere ingana ite?</strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHousechoose", "yego")
                    }
                    name="EgreenHousechoose"
                    id="ett"
                  />
                  <label htmlFor="ett">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHousechoose", "oya")
                    }
                    name="EgreenHousechoose"
                    id="ahh"
                  />
                  <label htmlFor="ahh">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHousechoose", "ntibikorwa")
                    }
                    name="EgreenHousechoose"
                    id="add"
                  />
                  <label htmlFor="add">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EgreenHouseproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EgreenHouseproof", e.target.value)
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
                  Ingenzi 6.9.1
                </b>
                <strong>
                  Ubuyobozi bw’itsinda bwaba bwaraguhaye ifishi igufasha kubara
                  ingano y’imyuka ihumanya ikirere ituruka ku mirimo ukorera
                  mw’isambu yawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHouseRchoose", "yego")
                    }
                    name="EgreenHouseRchoose"
                    id="rhh"
                  />
                  <label htmlFor="rhh">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleEnvironmentInputs("EgreenHouseRchoose", "oya")
                    }
                    name="EgreenHouseRchoose"
                    id="rgg"
                  />
                  <label htmlFor="rgg">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleEnvironmentInputs(
                        "EgreenHouseRchoose",
                        "ntibikorwa"
                      )
                    }
                    name="EgreenHouseRchoose"
                    id="rrr"
                  />
                  <label htmlFor="rrr">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="EgreenHouseRproof"
                id=""
                onChange={(e) =>
                  handleEnvironmentInputs("EgreenHouseRproof", e.target.value)
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
        <Button
          onClick={() => {
            console.log(environmentData);
            navigateBack;
          }}
          text={"Previouse"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default Environment;
