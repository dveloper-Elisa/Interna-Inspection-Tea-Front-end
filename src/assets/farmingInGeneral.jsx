import { useState } from "react";

const Farming = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBtn = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col gap-4">
      <strong className="text-[25px]">
        <span className="text-center text-[#166534] ">
          <b
            id="drop"
            onClick={toggleBtn}
            className="hover:cursor-pointer max-w-fit text-black"
          >
            Igice cya 4: UBUHINZI ^
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
                    <input type="radio" name="a" id="ab" />
                    <label htmlFor="ab">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="a" id="bb" />
                    <label htmlFor="bb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="a" id="cb" />
                    <label htmlFor="cb">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* s/////////////// */}

              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="b" id="ac" />
                    <label htmlFor="ac">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="b" id="bc" />
                    <label htmlFor="bb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="b" id="cc" />
                    <label htmlFor="cc">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Intera hagati y’ingemwe: …………………….."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.2.2
                  </b>
                  <strong>
                    Waba ufite gahunda yo gukata icyayi ugamije kongera
                    umusaruro mu bwinshi no mu bwiza? Ese urayubahiriza?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="c" id="ad" />
                    <label htmlFor="ad">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="c" id="bd" />
                    <label htmlFor="bd">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="c" id="cd" />
                    <label htmlFor="cd">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* ////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="d" id="ae" />
                    <label htmlFor="ae">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="d" id="be" />
                    <label htmlFor="be">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="d" id="ce" />
                    <label htmlFor="ce">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.3.1
                  </b>
                  <strong>Mukoresha imbuto zihinduwe (GMOs)</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="e" id="af" />
                    <label htmlFor="af">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="e" id="bf" />
                    <label htmlFor="bf">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="e" id="cf" />
                    <label htmlFor="cf">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.4.4
                  </b>
                  <strong>
                    Ujya uboresha ibishingwe ukavanamo ifumbire y’imoborera
                    utera mu murima? Ubiboresha ute? Ubundi bwoko bw’inyongera
                    musaruro ukoresha n’ubuhe?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="f" id="ag" />
                    <label htmlFor="ag">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="f" id="bg" />
                    <label htmlFor="bg">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="f" id="cg" />
                    <label htmlFor="cg">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Ubwoko bw’inyongeramusaruro akoresha: ………………………………………."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.4.7
                  </b>
                  <strong>
                    Waba wandika ingano y’ifumbire mvaruganda (NPK) ukoresha
                    buri mwaka? Ukoresha ibiro bingahe ku mwaka?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="g" id="ah" />
                    <label htmlFor="ah">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="g" id="bh" />
                    <label htmlFor="bh">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="g" id="ch" />
                    <label htmlFor="ch">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Ibiro bya NPK ku mwaka: …………….."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.5.2
                  </b>
                  <strong>
                    Waba ugerageza kureba niba hari ibyomyi cyangwa
                    udukoko/udusimba turya ibyomyi twaba turi mu murima wawe?
                    Niba waratubonye, watubonye mu murima uwuhe? Italiki? Ni
                    tusimba ki?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="h" id="ai" />
                    <label htmlFor="ai">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="h" id="bi" />
                    <label htmlFor="bi">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="h" id="ci" />
                    <label htmlFor="ci">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="i" id="aj" />
                    <label htmlFor="aj">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="i" id="bj" />
                    <label htmlFor="bj">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="i" id="cj" />
                    <label htmlFor="cj">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.5.4
                  </b>
                  <strong>
                    Waba warahuguwe kuri gahunda yo gukoresha uburyo
                    bukomatanyije bwo kurwanya indwara n’ibyonyi mu buhinzi
                    ukora?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="k" id="ar" />
                    <label htmlFor="ar">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="k" id="br" />
                    <label htmlFor="br">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="k" id="cr" />
                    <label htmlFor="cr">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Wahuguwe ryari? ............."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.5.7
                  </b>
                  <strong>
                    Ese waba ushira mu bikorwa gahunda yo kubanya imiti
                    mvaruganda ukoresha mw’isambu yawe buri mwaka? Inyandiko
                    zabyo urazifite ?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="l" id="am" />
                    <label htmlFor="am">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="l" id="bm" />
                    <label htmlFor="bm">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="l" id="cm" />
                    <label htmlFor="cm">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="m" id="an" />
                    <label htmlFor="an">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="m" id="bn" />
                    <label htmlFor="bn">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="m" id="cn" />
                    <label htmlFor="cn">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="n" id="ao" />
                    <label htmlFor="ao">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="n" id="bo" />
                    <label htmlFor="bo">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="n" id="co" />
                    <label htmlFor="co">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder="Imiti akoresha:........."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="o" id="ap" />
                    <label htmlFor="ap">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="o" id="bp" />
                    <label htmlFor="bp">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="o" id="cp" />
                    <label htmlFor="cp">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.6.4
                  </b>
                  <strong>
                    Waba ufite ubwiherero n’ubukarabiro bwabantu batere imiti.
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="p" id="al" />
                    <label htmlFor="al">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="p" id="bl" />
                    <label htmlFor="bl">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="p" id="cl" />
                    <label htmlFor="cl">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.6.5
                  </b>
                  <strong>
                    Waba utera imiti ukubigenkwe namabwiriza. (MSDS)
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="r" id="as" />
                    <label htmlFor="as">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="r" id="bs" />
                    <label htmlFor="bs">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="r" id="cs" />
                    <label htmlFor="cs">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="s" id="at" />
                    <label htmlFor="at">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="s" id="bt" />
                    <label htmlFor="bt">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="s" id="ct" />
                    <label htmlFor="ct">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.6.8
                  </b>
                  <strong>
                    Waba ubika inyandiko zigendanye nkoreshwa ryimiti
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="t" id="au" />
                    <label htmlFor="au">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="t" id="bu" />
                    <label htmlFor="bu">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="t" id="cu" />
                    <label htmlFor="cu">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="u" id="av" />
                    <label htmlFor="av">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="u" id="bv" />
                    <label htmlFor="bv">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="u" id="cv" />
                    <label htmlFor="cv">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="v" id="aw" />
                    <label htmlFor="aw">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="v" id="bw" />
                    <label htmlFor="bw">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="v" id="cw" />
                    <label htmlFor="cw">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 4.6.11-12
                  </b>
                  <strong>
                    Ese waba ubika ibikoresho byifashishwa mugutera imiti?
                    Utugaragariza inyandiko zigendana nububiko bwimiti
                    (amatariki, ingano,.)
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="w" id="ax" />
                    <label htmlFor="ax">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="w" id="bx" />
                    <label htmlFor="bx">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="w" id="cx" />
                    <label htmlFor="cx">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="x" id="ay" />
                    <label htmlFor="ay">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="x" id="by" />
                    <label htmlFor="by">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="x" id="cy" />
                    <label htmlFor="cy">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name=""
                  id="iptor"
                  cols="3"
                  rows="3"
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Farming;