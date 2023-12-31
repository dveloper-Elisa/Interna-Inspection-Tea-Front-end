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
                    <input type="radio" name="Eforestchoose" id="ab" />
                    <label htmlFor="ab">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Eforestchoose" id="bb" />
                    <label htmlFor="bb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Eforestchoose" id="cb" />
                    <label htmlFor="cb">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Eforestproof"
                  id=""
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
                    <input type="radio" name="ETstopedchoose" id="ac" />
                    <label htmlFor="ac">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ETstopedchoose" id="bc" />
                    <label htmlFor="bb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ETstopedchoose" id="cc" />
                    <label htmlFor="cc">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="ETstopproof"
                  id=""
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
                    <input type="radio" name="EtreeProtectchoose" id="ad" />
                    <label htmlFor="ad">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreeProtectchoose" id="bd" />
                    <label htmlFor="bd">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreeProtectchoose" id="cd" />
                    <label htmlFor="cd">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EtreeProtectproof"
                  id=""
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
                    <input type="radio" name="EGnaturalchoose" id="ae" />
                    <label htmlFor="ae">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EGnaturalchoose" id="be" />
                    <label htmlFor="be">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EGnaturalchoose" id="ce" />
                    <label htmlFor="ce">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EGnaturalproof"
                  id=""
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
                    <input type="radio" name="EtreePlantchoose" id="af" />
                    <label htmlFor="af">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreePlantchoose" id="bf" />
                    <label htmlFor="bf">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreePlantchoose" id="cf" />
                    <label htmlFor="cf">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EtreePlantproof"
                  id=""
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
                    <input type="radio" name="EtreeShadowchoose" id="ag" />
                    <label htmlFor="ag">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreeShadowchoose" id="bg" />
                    <label htmlFor="bg">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EtreeShadowchoose" id="cg" />
                    <label htmlFor="cg">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EtreeShadowproof"
                  id=""
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
                    <input type="radio" name="Elandexpandchoose" id="ah" />
                    <label htmlFor="ah">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Elandexpandchoose" id="bh" />
                    <label htmlFor="bh">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Elandexpandchoose" id="ch" />
                    <label htmlFor="ch">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Elandexpandproof"
                  id=""
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
                    <input type="radio" name="Elimitchoose" id="ai" />
                    <label htmlFor="ai">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Elimitchoose" id="bi" />
                    <label htmlFor="bi">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Elimitchoose" id="ci" />
                    <label htmlFor="ci">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Elimitproof"
                  id=""
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
                    <input type="radio" name="Eriparianchoose" id="aj" />
                    <label htmlFor="aj">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Eriparianchoose" id="bj" />
                    <label htmlFor="bj">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Eriparianchoose" id="cj" />
                    <label htmlFor="cj">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Eriparianproof"
                  id=""
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
                    <input type="radio" name="Epoachingchoose" id="ar" />
                    <label htmlFor="ar">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Epoachingchoose" id="br" />
                    <label htmlFor="br">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Epoachingchoose" id="cr" />
                    <label htmlFor="cr">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Epoachingproof"
                  id=""
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
                    <input type="radio" name="EWanimalchoose" id="am" />
                    <label htmlFor="am">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EWanimalchoose" id="bm" />
                    <label htmlFor="bm">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EWanimalchoose" id="cm" />
                    <label htmlFor="cm">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EWanimalproof"
                  id=""
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
                    <input type="radio" name="ETbigschoose" id="an" />
                    <label htmlFor="an">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ETbigschoose" id="bn" />
                    <label htmlFor="bn">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ETbigschoose" id="cn" />
                    <label htmlFor="cn">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="ETbigsproof"
                  id=""
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
                    <input type="radio" name="ETtypechoose" id="ao" />
                    <label htmlFor="ao">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ETtypechoose" id="bo" />
                    <label htmlFor="bo">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ETtypechoose" id="co" />
                    <label htmlFor="co">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="ETtypeproof"
                  id=""
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
                    Hari inyamaswa y’ishamba (urugero: inkende) ukeresha mu
                    mirimo y’isambu yawe?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="EWanimalWorkchoose" id="ap" />
                    <label htmlFor="ap">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EWanimalWorkchoose" id="bp" />
                    <label htmlFor="bp">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EWanimalWorkchoose" id="cp" />
                    <label htmlFor="cp">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EWanimalWorkproof"
                  id=""
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
                    <input type="radio" name="EErosionchoose" id="al" />
                    <label htmlFor="al">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EErosionchoose" id="bl" />
                    <label htmlFor="bl">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EErosionchoose" id="cl" />
                    <label htmlFor="cl">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EErosionproof"
                  id=""
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
                    <input type="radio" name="Eburningchoose" id="as" />
                    <label htmlFor="as">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Eburningchoose" id="bs" />
                    <label htmlFor="bs">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Eburningchoose" id="cs" />
                    <label htmlFor="cs">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Eburningproof"
                  id=""
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
                    <input type="radio" name="EburningReasonchoose" id="at" />
                    <label htmlFor="at">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EburningReasonchoose" id="bt" />
                    <label htmlFor="bt">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EburningReasonchoose" id="ct" />
                    <label htmlFor="ct">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EburningReasonproof"
                  id=""
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
                    Hari isoko cyangwa umugezi w’amazi ukoresha mw’isambu yawe
                    ku buryo bwihariye?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="Ewaterchoose" id="au" />
                    <label htmlFor="au">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Ewaterchoose" id="bu" />
                    <label htmlFor="bu">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Ewaterchoose" id="cu" />
                    <label htmlFor="cu">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Ewaterproof"
                  id=""
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
                    <input type="radio" name="EwaterPermitchoose" id="av" />
                    <label htmlFor="av">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EwaterPermitchoose" id="bv" />
                    <label htmlFor="bv">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EwaterPermitchoose" id="cv" />
                    <label htmlFor="cv">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EwaterPermitproof"
                  id=""
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
                    <input type="radio" name="Erainwaterchoose" id="aw" />
                    <label htmlFor="aw">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Erainwaterchoose" id="bw" />
                    <label htmlFor="bw">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Erainwaterchoose" id="cw" />
                    <label htmlFor="cw">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Erainwaterproof"
                  id=""
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
                    <input type="radio" name="EriverProtectchoose" id="ax" />
                    <label htmlFor="ax">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EriverProtectchoose" id="bx" />
                    <label htmlFor="bx">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EriverProtectchoose" id="cx" />
                    <label htmlFor="cx">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EriverProtectproof"
                  id=""
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
                    <input type="radio" name="Etoiletmanurechoose" id="ay" />
                    <label htmlFor="ay">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Etoiletmanurechoose" id="by" />
                    <label htmlFor="by">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Etoiletmanurechoose" id="cy" />
                    <label htmlFor="cy">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Etoiletmanureproof"
                  id=""
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
                    <input type="radio" name="EwaterWasteschoose" id="very" />
                    <label htmlFor="very">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EwaterWasteschoose" id="vroy" />
                    <label htmlFor="vroy">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EwaterWasteschoose" id="vory" />
                    <label htmlFor="vory">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EwaterWastesproof"
                  id=""
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
                      name="EgreenHouseFormchoose"
                      id="crat"
                    />
                    <label htmlFor="crat">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHouseFormchoose" id="kik" />
                    <label htmlFor="kik">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHouseFormchoose" id="kii" />
                    <label htmlFor="kii">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EgreenHouseFormproof"
                  id=""
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
                    <input type="radio" name="EwastesBinchoose" id="vcc" />
                    <label htmlFor="vcc">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EwastesBinchoose" id="vbb" />
                    <label htmlFor="vbb">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EwastesBinchoose" id="vkk" />
                    <label htmlFor="vkk">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EwastesBinproof"
                  id=""
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
                    <input type="radio" name="Ewastesburnchoose" id="cbb" />
                    <label htmlFor="cbb">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Ewastesburnchoose" id="ccc" />
                    <label htmlFor="ccc">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Ewastesburnchoose" id="cdd" />
                    <label htmlFor="cdd">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Ewastesburnproof"
                  id=""
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
                    <input type="radio" name="ECookchoose" id="dvv" />
                    <label htmlFor="dvv">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="ECookchoose" id="dcc" />
                    <label htmlFor="dcc">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="ECookchoose" id="dbb" />
                    <label htmlFor="dbb">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="ECookproof"
                  id=""
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
                    <input type="radio" name="EcookGaschoose" id="fff" />
                    <label htmlFor="fff">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EcookGaschoose" id="fgg" />
                    <label htmlFor="fgg">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EcookGaschoose" id="fdd" />
                    <label htmlFor="fdd">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EcookGasproof"
                  id=""
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
                    <input type="radio" name="EcookBiogaschoose" id="ggg" />
                    <label htmlFor="ggg">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EcookBiogaschoose" id="gkk" />
                    <label htmlFor="gkk">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EcookBiogaschoose" id="gjj" />
                    <label htmlFor="gjj">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EcookBiogasproof"
                  id=""
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
                    <input type="radio" name="Esunrayschoose" id="qaa" />
                    <label htmlFor="qaa">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="Esunrayschoose" id="qss" />
                    <label htmlFor="qss">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="Esunrayschoose" id="qvh" />
                    <label htmlFor="qvh">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="Esunraysproof"
                  id=""
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
                    Ese wamenya iyo wohereza mu kirere ingana ite?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="EgreenHousechoose" id="ett" />
                    <label htmlFor="ett">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHousechoose" id="ahh" />
                    <label htmlFor="ahh">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHousechoose" id="add" />
                    <label htmlFor="add">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EgreenHouseproof"
                  id=""
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
                    Ubuyobozi bw’itsinda bwaba bwaraguhaye ifishi igufasha
                    kubara ingano y’imyuka ihumanya ikirere ituruka ku mirimo
                    ukorera mw’isambu yawe?
                  </strong>
                </label>
                <p className="flex gap-4 font-bold my-2">
                  <span>
                    <input type="radio" name="EgreenHouseRchoose" id="rhh" />
                    <label htmlFor="rhh">Yego</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHouseRchoose" id="rgg" />
                    <label htmlFor="rgg">Oya</label>
                  </span>
                  <span>
                    <input type="radio" name="EgreenHouseRchoose" id="rrr" />
                    <label htmlFor="rrr">Ntibikorwa</label>
                  </span>
                </p>
                <textarea
                  name="EgreenHouseRproof"
                  id=""
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
