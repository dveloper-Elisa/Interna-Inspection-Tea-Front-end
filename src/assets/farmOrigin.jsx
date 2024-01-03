import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const FarmOrigin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    INharvestareachoose: "",
    INharvestmanagementchoose: "",
    INharvestsaledocumentchoose: "",
    INdocumentkeepchoose: "",
    INharvestscalechoose: "",
    Ppatternerchoose: "",
  });

  const handleRadioChange = (question, value) => {
    setFormData({ ...formData, [question]: value });
  };

  const navigateFunction = () => {
    const allInputs = Object.values(formData).every((value) => value !== "");
    if (allInputs) {
      navigate("/farmingtu");
    } else {
      alert("Please answer all questions before continuing!");
    }
  };

  const navigateBack = () => {
    navigate("/farmingrule");
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b id="drop" className="hover:cursor-pointer max-w-fit text-black">
            Igice cya 2: IKURIKIRANA NKOMOKO
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
                  Ingenzi 2.1.1
                </b>
                <strong>
                  Ese umusaruro ubona ku mwaka ubona ujyanye n’ubuso uhingaho?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value="yego"
                    name="INharvestareachoose"
                    onChange={() =>
                      handleRadioChange("INharvestareachoose", "yego")
                    }
                    id="ab"
                  />
                  <label htmlFor="ab">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value="oya"
                    name="INharvestareachoose"
                    onChange={() =>
                      handleRadioChange("INharvestareachoose", "oya")
                    }
                    id="bb"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value="ntibikorwa"
                    name="INharvestareachoose"
                    onChange={() =>
                      handleRadioChange("INharvestareachoose", "ntibikorwa")
                    }
                    id="cb"
                  />
                  <label htmlFor="cb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="INharvestareaproof"
                id=""
                cols="3"
                rows="3"
                placeholder="Ubuso= …..ha Umusaruro = ………..kgs
                  "
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* s/////////////// */}

            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 2.1.3
                </b>
                <strong>
                  Waba ufite uburyo bugaragara bw’ukuntu witaho umusaruro wawe
                  kuburyo utavangwa n’undi uturutse muyindi mirima mugihe
                  c’ubwikorezi no kuwugemura?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    name="INharvestmanagementchoose"
                    onChange={() =>
                      handleRadioChange("INharvestmanagementchoose", "yego")
                    }
                    id="ac"
                  />
                  <label htmlFor="ac">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    name="INharvestmanagementchoose"
                    onChange={() =>
                      handleRadioChange("INharvestmanagementchoose", "oya")
                    }
                    id="bc"
                  />
                  <label htmlFor="bc">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    name="INharvestmanagementchoose"
                    onChange={() =>
                      handleRadioChange(
                        "INharvestmanagementchoose",
                        "ntibikorwa"
                      )
                    }
                    id="cc"
                  />
                  <label htmlFor="cc">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="INharvestmanagementproof"
                id=""
                cols="3"
                rows="3"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 2.1.5
                </b>
                <strong>
                  Iyo ugemuye umusaruro wawe, hari aho wandikwa cyangwe hari
                  inyandiko gihamya usigarana ?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    name="INharvestsaledocumentchoose"
                    onChange={() =>
                      handleRadioChange("INharvestsaledocumentchoose", "yego")
                    }
                    id="ad"
                  />
                  <label htmlFor="ad">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    name="INharvestsaledocumentchoose"
                    onChange={() =>
                      handleRadioChange("INharvestsaledocumentchoose", "oya")
                    }
                    id="bd"
                  />
                  <label htmlFor="bd">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    name="INharvestsaledocumentchoose"
                    onChange={() =>
                      handleRadioChange(
                        "INharvestsaledocumentchoose",
                        "ntibikorwa"
                      )
                    }
                    id="cd"
                  />
                  <label htmlFor="cd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="INharvestsaledocumentproof"
                id=""
                cols="3"
                rows="3"
                placeholder="Resi /Receipt? ……Ifishi / Form? …..
                  "
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* ////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 2.1.8
                </b>
                <strong>
                  Ese waba ubika inyakindiko zigaragaza umusaruro wasaruye?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    name="INdocumentkeepchoose"
                    onChange={() =>
                      handleRadioChange("INdocumentkeepchoose", "yego")
                    }
                    id="ae"
                  />
                  <label htmlFor="ae">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    name="INdocumentkeepchoose"
                    onChange={() =>
                      handleRadioChange("INdocumentkeepchoose", "oya")
                    }
                    id="be"
                  />
                  <label htmlFor="be">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    name="INdocumentkeepchoose"
                    onChange={() =>
                      handleRadioChange("INdocumentkeepchoose", "ntibikorwa")
                    }
                    id="ce"
                  />
                  <label htmlFor="ce">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="INdocumentkeepproof"
                id=""
                cols="3"
                rows="3"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* //////////////// */}
            <div className="flex flex-col">
              <label htmlFor="" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Ingenzi 2.1.10
                </b>
                <strong>
                  Ese waba wizeye ko umunzani ukoreshwa mu kugupimira umusaruro
                  wujuje ubuziranenge kuburyo uguha umubare nyawo w’ibiro
                  wagemuye?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input
                    type="radio"
                    value={"yego"}
                    onChange={() =>
                      handleRadioChange("INharvestscalechoose", "yego")
                    }
                    name="INharvestscalechoose"
                    id="af"
                  />
                  <label htmlFor="af">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"oya"}
                    onChange={() =>
                      handleRadioChange("INharvestscalechoose", "oya")
                    }
                    name="INharvestscalechoose"
                    id="bf"
                  />
                  <label htmlFor="bf">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    value={"ntibikorwa"}
                    onChange={() =>
                      handleRadioChange("INharvestscalechoose", "ntibikorwa")
                    }
                    name="INharvestscalechoose"
                    id="cf"
                  />
                  <label htmlFor="cf">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name="INharvestscaleproof"
                id=""
                cols="3"
                rows="3"
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <strong className="text-[25px]">
          <span className="text-center text-[#166534] ">
            <b id="drop" className="hover:cursor-pointer max-w-fit text-black">
              Igice cya 3: INYUNGU N’UBUFATANYE
            </b>
          </span>
        </strong>

        <div className="flex flex-col items-center justify-center max-w-lg w-full">
          <div className="flex flex-col">
            <label htmlFor="" className="flex gap-2 items-center">
              <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                Amahitamo 3.1.1
              </b>
              <strong>
                Ese waba wandika imirimo n’inyongera musaruro ukoresha ku buryo
                uzi neza igiciro c’igishoro bigusaba kugira ngo usarure nk’ikilo
                kimwe (1kg)? Ubuse wunguka angahe ku kilo kimwe (1kg)
                c’umusaruro?
              </strong>
            </label>
            <p className="flex gap-4 font-bold my-2">
              <span>
                <input
                  type="radio"
                  name="Ppatternerchoose"
                  value={"yego"}
                  onChange={() => handleRadioChange("Ppatternerchoose", "yego")}
                  id="ai"
                />
                <label htmlFor="ai">Yego</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="Ppatternerchoose"
                  value={"oya"}
                  onChange={() => handleRadioChange("Ppatternerchoose", "oya")}
                  id="bi"
                />
                <label htmlFor="bi">Oya</label>
              </span>
              <span>
                <input
                  type="radio"
                  name="Ppatternerchoose"
                  value={"ntibikorwa"}
                  onChange={() =>
                    handleRadioChange("Ppatternerchoose", "ntibikorwa")
                  }
                  id="ci"
                />
                <label htmlFor="ci">Ntibikorwa</label>
              </span>
            </p>
            <textarea
              name="Ppatternerproof"
              id=""
              cols="3"
              rows="3"
              placeholder="Igishoro kuri 1kg = ……….. Rwf Inyungu kuri 1kg = …………………"
              className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="flex gap-2 w-[37%] my-5 sm:flex sm:flex-col md:flex md:flex-row lg:flex">
        <Button
          onClick={() => {
            navigateBack();
          }}
          text={"Previouse"}
        />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default FarmOrigin;
