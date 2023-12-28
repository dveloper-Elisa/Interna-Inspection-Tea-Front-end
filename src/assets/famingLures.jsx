import { useState } from "react";
const FarmingLure = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b className="font-serif text-center border-b-[2px] my-4 shadow-lg">
            2) KUBAHIRIZA AMAHAME AGENGA UBUHINZI BURAMBYE
          </b>
          <br></br>
          <b
            id="drop"
            onClick={toglerBtn}
            className="hover:cursor-pointer max-w-fit text-black"
          >
            Igice cya 1: GAHUNDA Y’IMIKORERE N’IMICUNGIRE Y’ISAMBU ^
          </b>
        </span>
      </strong>
      {/* IMIKORERE NIMIVUNGIRE Y'ISAMBU */}
      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center max-w-lg w-full">
            <div className="flex flex-col">
              {/* Izina ry’ ukurikirana umurima:*/}

              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="y" id="Y" />
                    <label htmlFor="Y">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="y" id="O" />
                    <label htmlFor="O">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="y" id="N" />
                    <label htmlFor="N">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Impamvu / gihamya..."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* s/////////////// */}

              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 1.2.5-6
                  </b>
                  <strong>
                    Watugaragariza lisiti y’abakozi (bahoraho na ba nyakabyizi)
                    ukoresha kw’isambu yawe. Iyi lisiti igomba kuba iriho
                    amazina, igitsina, amatariki y’amavuko n’amushahara/umubyizi
                    bahembwa
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="e" id="E" />
                    <label htmlFor="E">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="e" id="NE" />
                    <label htmlFor="NE">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="e" id="W" />
                    <label htmlFor="W">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="3"
                  rows="3"
                  placeholder="Impamvu / gihamya..."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>

                {/* ////////////////// */}
              </div>

              {/* //////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="f" id="oi" />
                    <label htmlFor="oi">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="f" id="rk" />
                    <label htmlFor="rk">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="f" id="re" />
                    <label htmlFor="re">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="3"
                  rows="3"
                  placeholder="Impamvu / gihamya..."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>

                {/* ////////////////// */}
              </div>

              {/* ////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 1.2.9
                  </b>
                  <strong>
                    Waba ubika inyandiko zijyanye n’ibisabwa muri seritikasiyo
                    mu ghe kingana imyaka ine ?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="g" id="ol" />
                    <label htmlFor="ol">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="g" id="rl" />
                    <label htmlFor="rl">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="g" id="rf" />
                    <label htmlFor="rf">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="3"
                  rows="3"
                  placeholder="Impamvu / gihamya..."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 1.3.3
                  </b>
                  <strong>
                    Ese ubuyobozi bw’itsinda/koperative bwaba bubafasha mu
                    bikorwa mukora mu buhinzi? Ni baraguhuguye, baguhuguye ku
                    biki?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="h" id="om" />
                    <label htmlFor="om">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="h" id="rm" />
                    <label htmlFor="rm">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="h" id="rg" />
                    <label htmlFor="rg">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id=""
                  cols="3"
                  rows="3"
                  placeholder="Impamvu / gihamya..."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>
              {/* //////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="r" id="ka" />
                    <label htmlFor="ka">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="r" id="oa" />
                    <label htmlFor="oa">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="r" id="na" />
                    <label htmlFor="na">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
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
              <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  <input type="radio" name="s" id="kb" />
                  <label htmlFor="kb">Yego</label>
                </span>
                <span>
                  <input type="radio" name="s" id="ob" />
                  <label htmlFor="ob">Oya</label>
                </span>
                <span>
                  <input type="radio" name="s" id="nb" />
                  <label htmlFor="nb">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name=""
                id="iptor"
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
            {/* ////////////// */}

            <div className="flex flex-col">
              <label htmlFor="iptor" className="flex gap-2 items-center">
                <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                  Amahitamo 1.3.7
                </b>
                <strong>
                  Ese ubuyobozi bw’itsinda bwaba bubakangurira kandi bukabafasha
                  mu gushaka ibindi bikorwa cyangwa imirimo ibyara inyungu?
                  Tanga ingero Ese hari ubufasha mubona ku bijyanye n’inyongera
                  musaruro, kongera agaciro ku musaruro no kugeza umusaruro
                  wanyu kw’isoko?
                </strong>
              </label>
              <p className="flex gap-4 font-bold my-2">
                <span>
                  <input type="radio" name="t" id="kc" />
                  <label htmlFor="kc">Yego</label>
                </span>
                <span>
                  <input type="radio" name="t" id="oc" />
                  <label htmlFor="oc">Oya</label>
                </span>
                <span>
                  <input type="radio" name="t" id="nc" />
                  <label htmlFor="nc">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name=""
                id="iptor"
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* /////////////// */}

            <div className="flex flex-col">
              <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  <input type="radio" name="u" id="kd" />
                  <label htmlFor="kd">Yego</label>
                </span>
                <span>
                  <input type="radio" name="u" id="od" />
                  <label htmlFor="od">Oya</label>
                </span>
                <span>
                  <input type="radio" name="u" id="nd" />
                  <label htmlFor="nd">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name=""
                id="iptor"
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>

            {/* ///////////// */}

            <div className="flex flex-col">
              <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  <input type="radio" name="v" id="kj" />
                  <label htmlFor="kj">Yego</label>
                </span>
                <span>
                  <input type="radio" name="v" id="oj" />
                  <label htmlFor="oj">Oya</label>
                </span>
                <span>
                  <input type="radio" name="v" id="nj" />
                  <label htmlFor="nj">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name=""
                id="iptor"
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
            {/* ///////////////// */}

            <div className="flex flex-col">
              <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  <input type="radio" name="w" id="kp" />
                  <label htmlFor="kp">Yego</label>
                </span>
                <span>
                  <input type="radio" name="w" id="op" />
                  <label htmlFor="op">Oya</label>
                </span>
                <span>
                  <input type="radio" name="w" id="np" />
                  <label htmlFor="np">Ntibikorwa</label>
                </span>
              </p>
              <textarea
                name=""
                id="iptor"
                cols="3"
                rows="3"
                placeholder="Impamvu / gihamya..."
                className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
              ></textarea>
            </div>
          </div>
        </div>
        // </div>
      )}
    </div>
  );
};

export default FarmingLure;
