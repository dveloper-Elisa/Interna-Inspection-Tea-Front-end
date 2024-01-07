import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const FarmingLure = () => {
  const form6 = useLocation();

  const [formDataRule, setFormDataRule] = useState({
    Mchoose: "",
    Mproof: "",
    Lchoose: "",
    Lproof: "",
    fSchoose: "",
    Sproof: "",
    Docchoose: "",
    Docproof: "",
    Coopchoose: "",
    Coopproof: "",
    ClimateChoose: "",
    Climateproof: "",
    MmarketChoose: "",
    Mmarketproof: "",
    Mworkchoose: "",
    Mworkproof: "",
    Mcooprulechoose: "",
    Mcoopruleproof: "",
    Mcoopguidechoose: "",
    Mcoopguideproof: "",
    Mcoopyouthchoose: "",
    Mcoopyouthproof: "",
  });

  // handling input change

  const hundleInputsChange = (names, values) => {
    setFormDataRule({ ...formDataRule, [names]: values });
  };

  const navigate = useNavigate();
  const forms6 = form6.state;
  const navigateFunction = () => {
    // const allFirmRules = Object.values(formDataRule).every(
    //   (data) => data !== null || data !== ""
    // );
    // if (allFirmRules) {
    navigate("/inheritfarm", { state: { forms6, formDataRule } });
    // } else {
    //   alert("Please fill oll the fields");
    // }
  };

  const navigateBack = () => {
    navigate("/harvest4");
  };
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b className="font-serif text-center border-b-[2px] my-4 shadow-lg">
            2) KUBAHIRIZA AMAHAME AGENGA UBUHINZI BURAMBYE
          </b>
          <br></br>
          <b className="text-black">
            Igice cya 1: GAHUNDA Y’IMIKORERE N’IMICUNGIRE Y’ISAMBU{" "}
          </b>
        </span>
      </strong>
      {/* IMIKORERE NIMIVUNGIRE Y'ISAMBU */}

      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center max-w-lg w-full">
          <div className="flex flex-col">
            {/* IMICUGIRE Y'ISAMBU*/}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  1.2.1
                </b>
                <strong>
                  Ese waba ukurikiza amabwiraza {`n'amategeko`} (yaba aya leta
                  cyangwa ayubuhinzi burambye) muburyo ubwaribwo bwose?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("Mchoose", "yego")}
                    name="Mchoose"
                    id="Y"
                  />
                  <label htmlFor="Y">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("Mchoose", "oya")}
                    name="Mchoose"
                    id="O"
                  />
                  <label htmlFor="O">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() => hundleInputsChange("Mchoose", "ntibikorwa")}
                    name="Mchoose"
                    id="N"
                  />
                  <label htmlFor="N">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Mproof"
                id=""
                onChange={(e) => hundleInputsChange("Mproof", e.target.value)}
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* s/////////////// */}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 1.2.5-6
                </b>
                <strong>
                  Watugaragariza lisiti y’abakozi (bahoraho na ba nyakabyizi)
                  ukoresha kw’isambu yawe. Iyi lisiti igomba kuba iriho amazina,
                  igitsina, amatariki y’amavuko n’amushahara/umubyizi bahembwa
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("Lchoose", "yego")}
                    name="Lchoose"
                    id="E"
                  />
                  <label htmlFor="E">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("Lchoose", "oya")}
                    name="Lchoose"
                    id="NE"
                  />
                  <label htmlFor="NE">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() => hundleInputsChange("Lchoose", "ntibikorwa")}
                    name="Lchoose"
                    id="W"
                  />
                  <label htmlFor="W">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Lproof"
                id=""
                onChange={(e) => hundleInputsChange("Lproof", e.target.value)}
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>

              {/* ////////////////// */}
            </div>

            {/* //////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 1.2.7
                </b>
                <strong>
                  Hari amakuru ubona kubijyanye n’icemezo c’ubuziranenge ca
                  Rainforest Alliance? Niba ari yego, uyabona mu rurimi uruhe?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("fSchoose", "yego")}
                    name="fSchoose"
                    id="oi"
                  />
                  <label htmlFor="oi">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("fSchoose", "oya")}
                    name="fSchoose"
                    id="rk"
                  />
                  <label htmlFor="rk">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      hundleInputsChange("fSchoose", "ntibikorwa")
                    }
                    name="fSchoose"
                    id="re"
                  />
                  <label htmlFor="re">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Sproof"
                id=""
                onChange={(e) => hundleInputsChange("Sproof", e.target.value)}
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>

              {/* ////////////////// */}
            </div>

            {/* ////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 1.2.9
                </b>
                <strong>
                  Waba ubika inyandiko zijyanye n’ibisabwa muri seritikasiyo mu
                  ghe kingana imyaka ine ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("Docchoose", "yego")}
                    name="Docchoose"
                    id="ol"
                  />
                  <label htmlFor="ol">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("Docchoose", "oya")}
                    name="Docchoose"
                    id="rl"
                  />
                  <label htmlFor="rl">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      hundleInputsChange("Docchoose", "ntibikorwa")
                    }
                    name="Docchoose"
                    id="rf"
                  />
                  <label htmlFor="rf">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Docproof"
                id=""
                onChange={(e) => hundleInputsChange("Docproof", e.target.value)}
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 1.3.3
                </b>
                <strong>
                  Ese ubuyobozi bw’itsinda/koperative bwaba bubafasha mu bikorwa
                  mukora mu buhinzi? Ni baraguhuguye, baguhuguye ku biki?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("Coopchoose", "yego")}
                    name="Coopchoose"
                    id="om"
                  />
                  <label htmlFor="om">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("Coopchoose", "oya")}
                    name="Coopchoose"
                    id="rm"
                  />
                  <label htmlFor="rm">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      hundleInputsChange("Coopchoose", "ntibikorwa")
                    }
                    name="Coopchoose"
                    id="rg"
                  />
                  <label htmlFor="rg">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Coopproof"
                id=""
                onChange={(e) =>
                  hundleInputsChange("Coopproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Amahitamo 1.3.5
                </b>
                <strong>
                  Ese hari ingaruka ry’ihindagurika ry’ikirere zikugeraho? Ni
                  nk’izihe ngero watanga?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() => hundleInputsChange("ClimateChoose", "yego")}
                    name="ClimateChoose"
                    id="ka"
                  />
                  <label htmlFor="ka">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() => hundleInputsChange("ClimateChoose", "oya")}
                    name="ClimateChoose"
                    id="oa"
                  />
                  <label htmlFor="oa">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      hundleInputsChange("ClimateChoose", "ntibikorwa")
                    }
                    name="ClimateChoose"
                    id="na"
                  />
                  <label htmlFor="na">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="Climateproof"
                id=""
                onChange={(e) =>
                  hundleInputsChange("Climateproof", e.target.value)
                }
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
          </div>
          {/* INGENZI*/}
          {/* <div className="flex flex-col w-full gap-2"> */}
          {/* /////////////////////// */}
          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Amahitamo 1.3.6
              </b>
              <strong>
                Amahitamo 1.3.6 Ese ubuyobozi bw’itsinda buraguhugura ku
                bijyanye n’ubuhinzi bugamije isoko (kubara igishoro, kumenya
                igiciro wagurishijeho no kubara inyungu)? Ese ubuyobozi
                burabafasha kubona inguzanyo z’ibigo by’ishoramari?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  value={"yego"}
                  onChange={() => hundleInputsChange("MmarketChoose", "yego")}
                  name="MmarketChoose"
                  id="kb"
                />
                <label htmlFor="kb">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"oya"}
                  onChange={() => hundleInputsChange("MmarketChoose", "oya")}
                  name="MmarketChoose"
                  id="ob"
                />
                <label htmlFor="ob">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"ntibikorwa"}
                  onChange={() =>
                    hundleInputsChange("MmarketChoose", "ntibikorwa")
                  }
                  name="MmarketChoose"
                  id="nb"
                />
                <label htmlFor="nb">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Mmarketproof"
              id=""
              onChange={(e) =>
                hundleInputsChange("Mmarketproof", e.target.value)
              }
              cols="3"
              rows="3"
              placeholder="Impamvu / gihamya..."
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>
          {/* ////////////// */}

          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Amahitamo 1.3.7
              </b>
              <strong>
                Ese ubuyobozi bw’itsinda bwaba bubakangurira kandi bukabafasha
                mu gushaka ibindi bikorwa cyangwa imirimo ibyara inyungu? Tanga
                ingero Ese hari ubufasha mubona ku bijyanye n’inyongera
                musaruro, kongera agaciro ku musaruro no kugeza umusaruro wanyu
                kw’isoko?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  value={"yego"}
                  onChange={() => hundleInputsChange("Mworkchoose", "yego")}
                  name="Mworkchoose"
                  id="kc"
                />
                <label htmlFor="kc">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"oya"}
                  onChange={() => hundleInputsChange("Mworkchoose", "oya")}
                  name="Mworkchoose"
                  id="oc"
                />
                <label htmlFor="oc">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"ntibikorwa"}
                  onChange={() =>
                    hundleInputsChange("Mworkchoose", "ntibikorwa")
                  }
                  name="Mworkchoose"
                  id="nc"
                />
                <label htmlFor="nc">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Mworkproof"
              id=""
              onChange={(e) => hundleInputsChange("Mworkproof", e.target.value)}
              cols="3"
              rows="3"
              placeholder="Impamvu / gihamya..."
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>

          {/* /////////////// */}

          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Ingenzi 1.4.3
              </b>
              <strong>
                Ese mw’itsinda / koperatiev yanyu mwaba mufite amabwiriza
                mwumvikanyeho mushobora kungederaho muhana uwaba atubahirije
                amabwiriza y’ubuziranenge? Niba ayo mabwiriza ahari, watubwira
                muri make ibikubiyemwo?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  value={"yego"}
                  onChange={() => hundleInputsChange("Mcooprulechoose", "yego")}
                  name="Mcooprulechoose"
                  id="kd"
                />
                <label htmlFor="kd">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"oya"}
                  onChange={() => hundleInputsChange("Mcooprulechoose", "oya")}
                  name="Mcooprulechoose"
                  id="od"
                />
                <label htmlFor="od">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"ntibikorwa"}
                  onChange={() =>
                    hundleInputsChange("Mcooprulechoose", "ntibikorwa")
                  }
                  name="Mcooprulechoose"
                  id="nd"
                />
                <label htmlFor="nd">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Mcoopruleproof"
              id=""
              onChange={(e) =>
                hundleInputsChange("Mcoopruleproof", e.target.value)
              }
              cols="3"
              rows="3"
              placeholder="Impamvu / gihamya..."
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>

          {/* ///////////// */}

          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Ingenzi 1.6.1
              </b>
              <strong>
                Hari amabwiriza yo kubahiriza ubwuzuzanye hagati y’umugabo
                n’umugore mwagejejweho n’ubuyobozi? Ese haba hari komite
                ishinzwe iki gikorwa abanyamuryango bashizeho?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  value={"yego"}
                  onChange={() =>
                    hundleInputsChange("Mcoopguidechoose", "yego")
                  }
                  name="Mcoopguidechoose"
                  id="kj"
                />
                <label htmlFor="kj">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"oya"}
                  onChange={() => hundleInputsChange("Mcoopguidechoose", "oya")}
                  name="Mcoopguidechoose"
                  id="oj"
                />
                <label htmlFor="oj">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"ntibikorwa"}
                  onChange={() =>
                    hundleInputsChange("Mcoopguidechoose", "ntibikorwa")
                  }
                  name="Mcoopguidechoose"
                  id="nj"
                />
                <label htmlFor="nj">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Mcoopguideproof"
              id=""
              onChange={(e) =>
                hundleInputsChange("Mcoopguideproof", e.target.value)
              }
              cols="3"
              rows="3"
              placeholder="Impamvu / gihamya..."
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>
          {/* ///////////////// */}

          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Amahitamo 1.7.1
              </b>
              <strong>
                Ese mu muryango wawe waba ufite gahunda z’ibikorwa bitenza
                imbere urubyiruko? Ni nk’izihe ngero watanga?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  value={"yego"}
                  onChange={() =>
                    hundleInputsChange("Mcoopyouthchoose", "yego")
                  }
                  name="Mcoopyouthchoose"
                  id="kp"
                />
                <label htmlFor="kp">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"oya"}
                  onChange={() => hundleInputsChange("Mcoopyouthchoose", "oya")}
                  name="Mcoopyouthchoose"
                  id="op"
                />
                <label htmlFor="op">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  value={"ntibikorwa"}
                  onChange={() =>
                    hundleInputsChange("Mcoopyouthchoose", "ntibikorwa")
                  }
                  name="Mcoopyouthchoose"
                  id="np"
                />
                <label htmlFor="np">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Mcoopyouthproof"
              id=""
              onChange={(e) =>
                hundleInputsChange("Mcoopyouthproof", e.target.value)
              }
              cols="3"
              rows="3"
              placeholder="Impamvu / gihamya..."
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => {
            console.log(formDataRule);
            navigateBack;
          }}
          text={"Previouse"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default FarmingLure;
