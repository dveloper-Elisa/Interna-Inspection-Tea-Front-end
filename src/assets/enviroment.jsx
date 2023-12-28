import { useState } from "react";

const Environment = () => {
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
            Igice cya 6: IBIDUKIKIJE ^
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
                    Ingenzi 6.1.1
                  </b>
                  <strong>
                    Ese waba warahinze ahahoze ishyamba cyimeza nyuma 2014
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
                    Ingenzi 6.1.2
                  </b>
                  <strong>Ese waba uhinga mucyanya gikomye</strong>
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
                    Ingenzi 6.2.2
                  </b>
                  <strong>
                    Ese waba ubungabunga ibiti cyimeza cyangwa gakondo mumurima
                    wawe?
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
                    Ingenzi 6.2.3
                  </b>
                  <strong>
                    Ese waba waba ufite ahantu hateye ibyatsi cyimeza mw’isambu
                    yawe?
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
                  placeholder="Aho bigaragara:………………………"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  placeholder="Umubare w’ibiti biri mw’isambu ye:…………………"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 6.2.5
                  </b>
                  <strong>
                    Waba ufite ibiti bitanga igicucu mumurima wawe ?
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
                  placeholder="...……..%"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 6.2.6
                  </b>
                  <strong>
                    Waba utenya kongera ubuso buriho ibimera kamere?
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 6.3.1
                  </b>
                  <strong>
                    Waba wita mumbibi zimigezi n’ibiyaga byegereye umurima wawe?
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
                    Ingenzi 6.3.2
                  </b>
                  <strong>
                    Ese waba usiga icanya gikomye « riparian zone » hagati y’aho
                    ukorera imirimo y’ubuhinzi n’isoko y’amazi cyangwa imigezi ?
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
                  placeholder="Metero zimwo: …………m"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    Ingenzi 6.4.3
                  </b>
                  <strong>
                    Hari ibiterwa byiganza nk’amarebe waba ufite mw’isambu yawe?
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
                    Ingenzi 6.4.3
                  </b>
                  <strong>Nimba Bihari, ni ubuhe bwoko? Ubirwanya ute?</strong>
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <b className="border-[2px] border-[#166534] p-2 shadow-lg">
                    Ingenzi 6.4.4
                  </b>
                  <strong>
                    Hari inyamaswa y’ishamba (urugero: inkende) ukeresha mu
                    mirimo y’isambu yawe?
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
                    Ingenzi 6.4.5
                  </b>
                  <strong>
                    Ni ubuhe buryo ukoresha mu kurwanya isuri mw’isambu yawe?
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
                    Ingenzi 6.4.6
                  </b>
                  <strong>
                    Waba ukoresha umuriro utwika ibishingwe cyangwa imyanda
                    mw’isambu yawe?
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
                    Ingenzi 6.4.6
                  </b>
                  <strong>Niba utwika, ni kuzihe mpamvu?</strong>
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
                    Ingenzi 6.5.1
                  </b>
                  <strong>
                    Hari isoko cyangwa umugezi w’amazi ukoresha mw’isambu yawe
                    ku buryo bwihariye?
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
                    Ingenzi 6.5.2
                  </b>
                  <strong>
                    Niba ayo mazi (umugezi/isoko) uyakoresha, ubifiteye
                    uburenganzira (icyangombwa) ?
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
                    Amahitamo 6.5.6
                  </b>
                  <strong>
                    Waba ufata amazi y’imvura noneho ukayakoresha mu bikorwa
                    by’ubuhinzi ?
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
                    Ingenzi 6.6.2
                  </b>
                  <strong>
                    Waba ukoresha ibyanda yo muri toilet nk’ifumbire mu murima?
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

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    <input type="radio" name="ab" id="vry" />
                    <label htmlFor="vry">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ab" id="vry" />
                    <label htmlFor="vry">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ab" id="vry" />
                    <label htmlFor="vry">Ntibikorwa</label>
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
                    Ingenzi 6.7.1
                  </b>
                  <strong>
                    Imyannda y’isambu yawe uyikusanyiriza he? Hanyuma ukafatira
                    uwuhe mwanzuro?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ac" id="vrb" />
                    <label htmlFor="vrb">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ac" id="vrb" />
                    <label htmlFor="vrb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ac" id="vrb" />
                    <label htmlFor="vrb">Ntibikorwa</label>
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
                    Ingenzi 6.7.2
                  </b>
                  <strong>Waba utwika imyanda kw’isambu yawe?</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ad" id="vrc" />
                    <label htmlFor="vrc">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ad" id="vrc" />
                    <label htmlFor="vrc">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ad" id="vrc" />
                    <label htmlFor="vrc">Ntibikorwa</label>
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
                    Ingenzi 6.8.2
                  </b>
                  <strong>Waba ukoresha Rondereza mu guteka?</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ae" id="vrd" />
                    <label htmlFor="vrd">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ae" id="vrd" />
                    <label htmlFor="vrd">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ae" id="vrd" />
                    <label htmlFor="vrd">Ntibikorwa</label>
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
                    Ingenzi 6.8.2
                  </b>
                  <strong>Waba ukoresha gaz mu guteka?</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="af" id="vre" />
                    <label htmlFor="vre">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="af" id="vre" />
                    <label htmlFor="vre">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="af" id="vre" />
                    <label htmlFor="vre">Ntibikorwa</label>
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
                    Ingenzi 6.8.2
                  </b>
                  <strong>Waba ukoresha Biogazi?</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ag" id="vrf" />
                    <label htmlFor="vrf">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ag" id="vrf" />
                    <label htmlFor="vrf">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ag" id="vrf" />
                    <label htmlFor="vrf">Ntibikorwa</label>
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
                    Ingenzi 6.8.2
                  </b>
                  <strong>Waba ukoresha imirasire y’izuba?</strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ah" id="vrg" />
                    <label htmlFor="vrg">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ah" id="vrg" />
                    <label htmlFor="vrg">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ah" id="vrg" />
                    <label htmlFor="vrg">Ntibikorwa</label>
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
                    Ingenzi 6.9.1
                  </b>
                  <strong>
                    Ese hari ico waba uzi kubijyanye n’imyuka ihumanya ikirere
                    (Green House Gazes)?{" "}
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ai" id="vrh" />
                    <label htmlFor="vrh">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ai" id="vrh" />
                    <label htmlFor="vrh">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ai" id="vrh" />
                    <label htmlFor="vrh">Ntibikorwa</label>
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
                    Ingenzi 6.9.1
                  </b>
                  <strong>
                    Ese wamenya iyo wohereza mu kirere ingana ite?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="aj" id="vri" />
                    <label htmlFor="vri">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="aj" id="vri" />
                    <label htmlFor="vri">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="aj" id="vri" />
                    <label htmlFor="vri">Ntibikorwa</label>
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
                    Ingenzi 6.9.1
                  </b>
                  <strong>
                    Ubuyobozi bw’itsinda bwaba bwaraguhaye ifishi igufasha
                    kubara ingano y’imyuka ihumanya ikirere ituruka ku mirimo
                    ukorera mw’isambu yawe?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="ak" id="vrj" />
                    <label htmlFor="vrj">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ak" id="vrj" />
                    <label htmlFor="vrj">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ak" id="vrj" />
                    <label htmlFor="vrj">Ntibikorwa</label>
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

export default Environment;
