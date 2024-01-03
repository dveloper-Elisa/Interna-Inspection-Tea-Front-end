import { useNavigate } from "react-router-dom";
import Button from "../components/button";

const FarmOrigin = () => {
  const navigate = useNavigate();
  const navigateFunction = () => {
    navigate("/farmingtu");
  };

  const navigateBack = () => {
    navigate("/farmingrule");
  };
  return (
    <div className="flex flex-col gap-4">
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
                  <input type="radio" name="INharvestareachoose" id="ab" />
                  <label htmlFor="ab">Yego</label>
                </span>
                <span>
                  <input type="radio" name="INharvestareachoose" id="bb" />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input type="radio" name="INharvestareachoose" id="cb" />
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
                    name="INharvestmanagementchoose"
                    id="ac"
                  />
                  <label htmlFor="ac">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="INharvestmanagementchoose"
                    id="bc"
                  />
                  <label htmlFor="bb">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="INharvestmanagementchoose"
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
                    name="INharvestsaledocumentchoose"
                    id="ad"
                  />
                  <label htmlFor="ad">Yego</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="INharvestsaledocumentchoose"
                    id="bd"
                  />
                  <label htmlFor="bd">Oya</label>
                </span>
                <span>
                  <input
                    type="radio"
                    name="INharvestsaledocumentchoose"
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
                  <input type="radio" name="INdocumentkeepchoose" id="ae" />
                  <label htmlFor="ae">Yego</label>
                </span>
                <span>
                  <input type="radio" name="INdocumentkeepchoose" id="be" />
                  <label htmlFor="be">Oya</label>
                </span>
                <span>
                  <input type="radio" name="INdocumentkeepchoose" id="ce" />
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
                  <input type="radio" name="INharvestscalechoose" id="af" />
                  <label htmlFor="af">Yego</label>
                </span>
                <span>
                  <input type="radio" name="INharvestscalechoose" id="bf" />
                  <label htmlFor="bf">Oya</label>
                </span>
                <span>
                  <input type="radio" name="INharvestscalechoose" id="cf" />
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
                <input type="radio" name="Ppatternerchoose" id="ai" />
                <label htmlFor="ai">Yego</label>
              </span>
              <span>
                <input type="radio" name="Ppatternerchoose" id="bi" />
                <label htmlFor="bi">Oya</label>
              </span>
              <span>
                <input type="radio" name="Ppatternerchoose" id="ci" />
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
      <div className="flex gap-2">
        <Button onClick={navigateBack} text={"Previouse"} />
        <Button onClick={navigateFunction} text={"Next"} />
      </div>
    </div>
  );
};

export default FarmOrigin;
