import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const HealthSafety = () => {
  const form9 = useLocation();

  const [healthInformation, setHealthInformation] = useState({
    workCoopchoose: "",
    workCoopproof: "",
    conviseCMchoose: "",
    conviseCMproof: "",
    workConvisechoose: "",
    workConviseproof: "",
    workPTchoose: "",
    workPTproof: "",
    workPayeProcedchoose: "",
    workPayeProcedproof: "",
    workPaymentchoose: "",
    workpayementproof: "",
    WpaymentReducechoose: "",
    WpaymentReduceproof: "",
    WorkListchoose: "",
    WorkListproof: "",
    PaymentEquallychoose: "",
    PaymentEquallyproof: "",
    WorkerSeacherchoose: "",
    WorkerSeacherproof: "",
    W8hrsabovechoose: "",
    Work8hrsaboveproof: "",
    WadditionHrschoose: "",
    WadditionHrsProof: "",
    WPFchoose: "",
    WPFproof: "",
    Wbelow18yschoose: "",
    Wbelow18ysproof: "",
    Wsafeboxchoose: "",
    Wsafeboxproof: "",
    WfirstAidechoose: "",
    WfirstAideproof: "",
    Winsurancechoose: "",
    Winsuranceproof: "",
    Wdwaterchoose: "",
    Wdwaterproof: "",
    Wtoiletchoose: "",
    Wtoiletproof: "",
    WTAavoidchoose: "",
    WTAavoidproof: "",
    WweqCaringchoose: "",
    WweqCaringproof: "",
    WWcarechoose: "",
    WWcareproof: "",
    WAlivechoose: "",
    WAliveproof: "",
    WDocsWantchoose: "",
    WDocsWantproof: "",
    WLandPermitchoose: "",
    WLandPermitproof: "",
  });

  const handleHealthIsue = (health, value) => {
    setHealthInformation({ ...healthInformation, [health]: value });
  };

  const navigate = useNavigate();
  const forms9 = form9.state;
  const navigateFunction = () => {
    navigate("/enviroment", { state: { forms9, healthInformation } });
  };

  const navigateBack = () => {
    navigate("/farmingtu");
  };
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b id="drop" className="hover:cursor-pointer max-w-fit text-black">
            Igice cya 5: IMIBEREHO BYIZA, UMUTEKANO KU KAZI N’UBUZIMA BUZIRUMUZE
            ^
          </b>
        </span>
      </strong>
      {/* //////////////// */}

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center max-w-lg w-full">
          <div className="flex flex-col">
            {/* //////////////// */}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  {`Ingenzi 5.2.1 (>5w)
`}
                </b>
                <strong>
                  Ese abakozi bawe bafite uburenganzira bwo kwibumbira hamwe
                  muri sendeka zabakozi?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("workCoopchoose", "yego")}
                    name="workCoopchoose"
                    id="ab"
                  />
                  <label htmlFor="ab">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("workCoopchoose", "oya")}
                    name="workCoopchoose"
                    id="bb"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("workCoopchoose", "ntibikorwa")
                    }
                    name="workCoopchoose"
                    id="cb"
                  />
                  <label htmlFor="cb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="workCoopproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("workCoopproof", e.target.value)
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
                  {`Ingenzi 5.2.2 (>5w)
`}
                </b>
                <strong>
                  Waba wita kukumenya ibiganirwa munama za sendeka zabakozi, ese
                  waba ubika inyakindo zabakozi basegera mukazi?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("conviseCMchoose", "yego")}
                    name="conviseCMchoose"
                    id="ac"
                  />
                  <label htmlFor="ac">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("conviseCMchoose", "oya")}
                    name="conviseCMchoose"
                    id="bc"
                  />
                  <label htmlFor="bc">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("conviseCMchoose", "ntibikorwa")
                    }
                    name="conviseCMchoose"
                    id="cc"
                  />
                  <label htmlFor="cc">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="conviseCMproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("conviseCMproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder=""
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  {`Ingenzi 5.2.3 (>5w)
`}
                </b>
                <strong>
                  Ese waba uha umwanya abakozi bawe ngo bakore Imana za
                  sesitarare?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("workConvisechoose", "yego")
                    }
                    name="workConvisechoose"
                    id="ad"
                  />
                  <label htmlFor="ad">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("workConvisechoose", "oya")
                    }
                    name="workConvisechoose"
                    id="bd"
                  />
                  <label htmlFor="bd">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("workConvisechoose", "ntibikorwa")
                    }
                    name="workConvisechoose"
                    id="cd"
                  />
                  <label htmlFor="cd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="workConviseproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("workConviseproof", e.target.value)
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
                  {`Ingenzi 5.3.1 (>5w)`}
                </b>
                <strong>
                  Ese hari abakozi nyakabyizi cyangwa bahoraho ukoresha
                  mw’isambu yawe cyangwa mu rugo iwawe? Niba bahari ni bangahe?
                  Bamaze amezi angahe bakora?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("workPTchoose", "yego")}
                    name="workPTchoose"
                    id="ae"
                  />
                  <label htmlFor="ae">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("workPTchoose", "oya")}
                    name="workPTchoose"
                    id="be"
                  />
                  <label htmlFor="be">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("workPTchoose", "ntibikorwa")
                    }
                    name="workPTchoose"
                    id="ce"
                  />
                  <label htmlFor="ce">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="workPTproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("workPTproof", e.target.value)
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
                  {`Ingenzi 5.3.2 (>5w)`}
                </b>
                <strong>
                  Ese waba wita kubikorwa bigamije gukata cyangwa kugabanya
                  ibihembo byabakozi?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("workPayeProcedchoose", "yego")
                    }
                    name="workPayeProcedchoose"
                    id="af"
                  />
                  <label htmlFor="af">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("workPayeProcedchoose", "oya")
                    }
                    name="workPayeProcedchoose"
                    id="bf"
                  />
                  <label htmlFor="bf">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("workPayeProcedchoose", "ntibikorwa")
                    }
                    name="workPayeProcedchoose"
                    id="cf"
                  />
                  <label htmlFor="cf">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="workPayeProcedproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("workPayeProcedproof", e.target.value)
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
                  {`Ingenzi 5.3.4`}
                </b>
                <strong>
                  Abakozi bawe ubahemba umushahara fatizouteganywa namabwiriza
                  cyangwa umushara mwumvikanye?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("workPaymentchoose", "yego")
                    }
                    name="workPaymentchoose"
                    id="ag"
                  />
                  <label htmlFor="ag">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("workPaymentchoose", "oya")
                    }
                    name="workPaymentchoose"
                    id="bg"
                  />
                  <label htmlFor="bg">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("workPaymentchoose", "ntibikorwa")
                    }
                    name="workPaymentchoose"
                    id="cg"
                  />
                  <label htmlFor="cg">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="workpayementproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("workpayementproof", e.target.value)
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
                  Ingenzi 5.3.5
                </b>
                <strong>
                  Waba ukata/ ugabanya umushahara wabakozi bawe kubwimampanvu
                  zikinyabupfura cyangwa ibyokurya nibindi bintu ibyaribyo
                  byose?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WpaymentReducechoose", "yego")
                    }
                    name="WpaymentReducechoose"
                    id="ah"
                  />
                  <label htmlFor="ah">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("WpaymentReducechoose", "oya")
                    }
                    name="WpaymentReducechoose"
                    id="bh"
                  />
                  <label htmlFor="bh">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WpaymentReducechoose", "ntibikorwa")
                    }
                    name="WpaymentReducechoose"
                    id="ch"
                  />
                  <label htmlFor="ch">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WpaymentReduceproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WpaymentReduceproof", e.target.value)
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
                  {`Ingenzi 5.3.7 (>5w)`}
                </b>
                <strong>
                  Ufite lisiti y’abakozi ukoresha (nyakabyizi n’abahoraho) :
                  amazina yabo, umurimo bakora, amasaha bakora, na gihamya ko
                  bishuwe amafaranga bakoreye.
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WorkListchoose", "yego")}
                    name="WorkListchoose"
                    id="ai"
                  />
                  <label htmlFor="ai">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WorkListchoose", "oya")}
                    name="WorkListchoose"
                    id="bi"
                  />
                  <label htmlFor="bi">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WorkListchoose", "ntibikorwa")
                    }
                    name="WorkListchoose"
                    id="ci"
                  />
                  <label htmlFor="ci">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WorkListproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WorkListproof", e.target.value)
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
                  Ingenzi 5.3.8
                </b>
                <strong>
                  Ese waba uhemba abakozi bawe kuburyo bungana kandi bigendanye
                  nakazi bakora?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("PaymentEquallychoose", "yego")
                    }
                    name="PaymentEquallychoose"
                    id="aj"
                  />
                  <label htmlFor="aj">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("PaymentEquallychoose", "oya")
                    }
                    name="PaymentEquallychoose"
                    id="bj"
                  />
                  <label htmlFor="bj">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("PaymentEquallychoose", "ntibikorwa")
                    }
                    name="PaymentEquallychoose"
                    id="cj"
                  />
                  <label htmlFor="cj">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="PaymentEquallyproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("PaymentEquallyproof", e.target.value)
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
                  Ingenzi 5.3.10
                </b>
                <strong>
                  Waba ukoresha umuntu ugushakira abakozi baza kugukorera?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WorkerSeacherchoose", "yego")
                    }
                    name="WorkerSeacherchoose"
                    id="ar"
                  />
                  <label htmlFor="ar">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("WorkerSeacherchoose", "oya")
                    }
                    name="WorkerSeacherchoose"
                    id="br"
                  />
                  <label htmlFor="br">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WorkerSeacherchoose", "ntibikorwa")
                    }
                    name="WorkerSeacherchoose"
                    id="cr"
                  />
                  <label htmlFor="cr">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WorkerSeacherproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WorkerSeacherproof", e.target.value)
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
                  Ingenzi 5.5.1
                </b>
                <strong>
                  Waba ukoresha abakozi amasaha arenga 8 kumunsi cyangwa 48
                  kucyumweru?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("W8hrsabovechoose", "yego")
                    }
                    name="W8hrsabovechoose"
                    id="am"
                  />
                  <label htmlFor="am">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("W8hrsabovechoose", "oya")}
                    name="W8hrsabovechoose"
                    id="bm"
                  />
                  <label htmlFor="bm">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("W8hrsabovechoose", "ntibikorwa")
                    }
                    name="W8hrsabovechoose"
                    id="cm"
                  />
                  <label htmlFor="cm">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Work8hrsaboveproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Work8hrsaboveproof", e.target.value)
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
                  {`Ingenzi 5.5.2 (>5w)`}
                </b>
                <strong>
                  Waba wita kukumenya amasaha yikirenga abakozi ukoresha
                  abakora. Waba ubahemba X1.5?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WadditionHrschoose", "yego")
                    }
                    name="WadditionHrschoose"
                    id="an"
                  />
                  <label htmlFor="an">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("WadditionHrschoose", "oya")
                    }
                    name="WadditionHrschoose"
                    id="bn"
                  />
                  <label htmlFor="bn">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WadditionHrschoose", "ntibikorwa")
                    }
                    name="WadditionHrschoose"
                    id="cn"
                  />
                  <label htmlFor="cn">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WadditionHrsProof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WadditionHrsProof", e.target.value)
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
                  {`Ingenzi 5.5.3 (>5w)`}
                </b>
                <strong>
                  Ese waba uha umutegarugori wibarutse ikiruhuko gitegenwa
                  namategeko?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WPFchoose", "yego")}
                    name="WPFchoose"
                    id="ao"
                  />
                  <label htmlFor="ao">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WPFchoose", "oya")}
                    name="WPFchoose"
                    id="bo"
                  />
                  <label htmlFor="bo">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() => handleHealthIsue("WPFchoose", "ntibikorwa")}
                    name="WPFchoose"
                    id="co"
                  />
                  <label htmlFor="co">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WPFproof"
                id=""
                onChange={(e) => handleHealthIsue("WPFproof", e.target.value)}
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
                  Ingenzi 5.5.4
                </b>
                <strong>
                  Ese waba wita kubana bari musti yimyaka 18 bazana nababyeyi
                  gukora mumurima wawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("Wbelow18yschoose", "yego")
                    }
                    name="Wbelow18yschoose"
                    id="ap"
                  />
                  <label htmlFor="ap">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("Wbelow18yschoose", "oya")}
                    name="Wbelow18yschoose"
                    id="bp"
                  />
                  <label htmlFor="bp">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("Wbelow18yschoose", "ntibikorwa")
                    }
                    name="Wbelow18yschoose"
                    id="cp"
                  />
                  <label htmlFor="cp">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Wbelow18ysproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Wbelow18ysproof", e.target.value)
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
                  {`Ingenzi 5.6.2 (>5w)`}
                </b>
                <strong>
                  Ese watugaragariza agasanduku kubutabazi karimo ibikenerwa
                  byose ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("Wsafeboxchoose", "yego")}
                    name="Wsafeboxchoose"
                    id="al"
                  />
                  <label htmlFor="al">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("Wsafeboxchoose", "oya")}
                    name="Wsafeboxchoose"
                    id="bl"
                  />
                  <label htmlFor="bl">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("Wsafeboxchoose", "ntibikorwa")
                    }
                    name="Wsafeboxchoose"
                    id="cl"
                  />
                  <label htmlFor="cl">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Wsafeboxproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Wsafeboxproof", e.target.value)
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
                  Ingenzi 5.6.3
                </b>
                <strong>
                  Mu gihe haba impanuka mw’isambu yawe, waba uzi aho wakwihutira
                  kujyana umuntu wakomeretse?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WfirstAidechoose", "yego")
                    }
                    name="WfirstAidechoose"
                    id="as"
                  />
                  <label htmlFor="as">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WfirstAidechoose", "oya")}
                    name="WfirstAidechoose"
                    id="bs"
                  />
                  <label htmlFor="bs">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WfirstAidechoose", "ntibikorwa")
                    }
                    name="WfirstAidechoose"
                    id="cs"
                  />
                  <label htmlFor="cs">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WfirstAideproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WfirstAideproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Ikigo nderabuzima kiri hafi:............"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <strong>
                  Abakora mw’isambu yawe bose bafite MITUWERI (ubwishingizi
                  m’ukwivuza)?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("Winsurancechoose", "yego")
                    }
                    name="Winsurancechoose"
                    id="at"
                  />
                  <label htmlFor="at">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("Winsurancechoose", "oya")}
                    name="Winsurancechoose"
                    id="bt"
                  />
                  <label htmlFor="bt">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("Winsurancechoose", "ntibikorwa")
                    }
                    name="Winsurancechoose"
                    id="ct"
                  />
                  <label htmlFor="ct">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Winsuranceproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Winsuranceproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Abatabufite ni bangahe?………….."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 5.6.6
                </b>
                <strong>
                  Ese abakozi bawe ukoresha mw’isambu yawe, ubaha amazi meza
                  asukuye yo kunywa?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("Wdwaterchoose", "yego")}
                    name="Wdwaterchoose"
                    id="au"
                  />
                  <label htmlFor="au">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("Wdwaterchoose", "oya")}
                    name="Wdwaterchoose"
                    id="bu"
                  />
                  <label htmlFor="bu">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("Wdwaterchoose", "ntibikorwa")
                    }
                    name="Wdwaterchoose"
                    id="cu"
                  />
                  <label htmlFor="cu">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Wdwaterproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Wdwaterproof", e.target.value)
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
                  Ingenzi 5.6.7
                </b>
                <strong>
                  Ese ufite ubwihero buhagije kandi busukuye bukoreshwa
                  n’umuryango wawe n’abakozi ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("Wtoiletchoose", "yego")}
                    name="Wtoiletchoose"
                    id="av"
                  />
                  <label htmlFor="av">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("Wtoiletchoose", "oya")}
                    name="Wtoiletchoose"
                    id="bv"
                  />
                  <label htmlFor="bv">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("Wtoiletchoose", "ntibikorwa")
                    }
                    name="Wtoiletchoose"
                    id="cv"
                  />
                  <label htmlFor="cv">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Wtoiletproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("Wtoiletproof", e.target.value)
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
                  Ingenzi 5.6.9
                </b>
                <strong>
                  Ese abakozi bawe ubuhugura kuburyo bwo kwrinda impanuka mukazi
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WTAavoidchoose", "yego")}
                    name="WTAavoidchoose"
                    id="aw"
                  />
                  <label htmlFor="aw">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WTAavoidchoose", "oya")}
                    name="WTAavoidchoose"
                    id="bw"
                  />
                  <label htmlFor="bw">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WTAavoidchoose", "ntibikorwa")
                    }
                    name="WTAavoidchoose"
                    id="cw"
                  />
                  <label htmlFor="cw">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WTAavoidproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WTAavoidproof", e.target.value)
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
                  Ingenzi 5.6.10
                </b>
                <strong>
                  Ibikoresho ukoresha mumurima byaba bikoreshwa muburyo byiza
                  butateza impanuka?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WweqCaringchoose", "yego")
                    }
                    name="WweqCaringchoose"
                    id="ax"
                  />
                  <label htmlFor="ax">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WweqCaringchoose", "oya")}
                    name="WweqCaringchoose"
                    id="bx"
                  />
                  <label htmlFor="bx">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WweqCaringchoose", "ntibikorwa")
                    }
                    name="WweqCaringchoose"
                    id="cx"
                  />
                  <label htmlFor="cx">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WweqCaringproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WweqCaringproof", e.target.value)
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
                  Ingenzi 5.6.11
                </b>
                <strong>
                  Waba wita kukumenya imirimo itabangamira abagore batwite
                  nabotso mumurima wawe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WWcarechoose", "yego")}
                    name="WWcarechoose"
                    id="ay"
                  />
                  <label htmlFor="ay">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WWcarechoose", "oya")}
                    name="WWcarechoose"
                    id="by"
                  />
                  <label htmlFor="by">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WWcarechoose", "ntibikorwa")
                    }
                    name="WWcarechoose"
                    id="cy"
                  />
                  <label htmlFor="cy">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WWcareproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WWcareproof", e.target.value)
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
                  Ingenzi 5.6.12
                </b>
                <strong>
                  Abakozi bawe bashobora kuva ahabereye imbyago utabibahereye
                  uruhushya?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WAlivechoose", "yego")}
                    name="WAlivechoose"
                    id="ti"
                  />
                  <label htmlFor="ti">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WAlivechoose", "oya")}
                    name="WAlivechoose"
                    id="ro"
                  />
                  <label htmlFor="ro">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WAlivechoose", "ntibikorwa")
                    }
                    name="WAlivechoose"
                    id="or"
                  />
                  <label htmlFor="or">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WAliveproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WAliveproof", e.target.value)
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
                  Ingenzi 5.7.3
                </b>
                <strong>
                  Ese abakozi baba kumurima wawe babona imbyangombwa nkenerwa
                  bihagije?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => handleHealthIsue("WDocsWantchoose", "yego")}
                    name="WDocsWantchoose"
                    id="tito"
                  />
                  <label htmlFor="tito">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => handleHealthIsue("WDocsWantchoose", "oya")}
                    name="WDocsWantchoose"
                    id="tik"
                  />
                  <label htmlFor="tik">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WDocsWantchoose", "ntibikorwa")
                    }
                    name="WDocsWantchoose"
                    id="tivk"
                  />
                  <label htmlFor="tivk">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WDocsWantproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WDocsWantproof", e.target.value)
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
                  Ingenzi 5.8.2
                </b>
                <strong>
                  Ese ufite uburenganzira busesuye ku butaka bw’isambu yawe (aho
                  utuye n’ahari imirima yawe)? Gihamya ni iyihe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleHealthIsue("WLandPermitchoose", "yego")
                    }
                    name="WLandPermitchoose"
                    id="Caffe"
                  />
                  <label htmlFor="Caffe">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleHealthIsue("WLandPermitchoose", "oya")
                    }
                    name="WLandPermitchoose"
                    id="cake"
                  />
                  <label htmlFor="cake">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleHealthIsue("WLandPermitchoose", "ntibikorwa")
                    }
                    name="WLandPermitchoose"
                    id="roud"
                  />
                  <label htmlFor="roud">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="WLandPermitproof"
                id=""
                onChange={(e) =>
                  handleHealthIsue("WLandPermitproof", e.target.value)
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
        <Button onClick={() => console.log(forms9)} text={"Previouse"} />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default HealthSafety;
