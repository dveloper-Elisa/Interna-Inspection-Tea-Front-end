import { useState } from "react";

const HealthSafety = () => {
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
            Igice cya 5: IMIBEREHO BYIZA, UMUTEKANO KU KAZI N’UBUZIMA BUZIRUMUZE
            ^
          </b>
        </span>
      </strong>
      {/* //////////////// */}
      {isOpen && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center max-w-lg w-full">
            <div className="flex flex-col">
              {/* //////////////// */}

              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    {`Ingenzi 5.2.2 (>5w)
`}
                  </b>
                  <strong>
                    Waba wita kukumenya ibiganirwa munama za sendeka zabakozi,
                    ese waba ubika inyakindo zabakozi basegera mukazi?
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    {`Ingenzi 5.3.1 (>5w)`}
                  </b>
                  <strong>
                    Ese hari abakozi nyakabyizi cyangwa bahoraho ukoresha
                    mw’isambu yawe cyangwa mu rugo iwawe? Niba bahari ni
                    bangahe? Bamaze amezi angahe bakora?
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
                    {`Ingenzi 5.3.2 (>5w)`}
                  </b>
                  <strong>
                    Ese waba wita kubikorwa bigamije gukata cyangwa kugabanya
                    ibihembo byabakozi?
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
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    Ingenzi 5.3.8
                  </b>
                  <strong>
                    Ese waba uhemba abakozi bawe kuburyo bungana kandi
                    bigendanye nakazi bakora?
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
                    Ingenzi 5.3.10
                  </b>
                  <strong>
                    Waba ukoresha umuntu ugushakira abakozi baza kugukorera?
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
                    Ingenzi 5.5.1
                  </b>
                  <strong>
                    Waba ukoresha abakozi amasaha arenga 8 kumunsi cyangwa 48
                    kucyumweru?
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
                    {`Ingenzi 5.5.2 (>5w)`}
                  </b>
                  <strong>
                    Waba wita kukumenya amasaha yikirenga abakozi ukoresha
                    abakora. Waba ubahemba X1.5?
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
                    {`Ingenzi 5.5.3 (>5w)`}
                  </b>
                  <strong>
                    Ese waba uha umutegarugori wibarutse ikiruhuko gitegenwa
                    namategeko?
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
                  placeholder=""
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    {`Ingenzi 5.6.2 (>5w)`}
                  </b>
                  <strong>
                    Ese watugaragariza agasanduku kubutabazi karimo ibikenerwa
                    byose ?
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
                    Ingenzi 5.6.3
                  </b>
                  <strong>
                    Mu gihe haba impanuka mw’isambu yawe, waba uzi aho
                    wakwihutira kujyana umuntu wakomeretse?
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
                  placeholder="Ikigo nderabuzima kiri hafi:............"
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
                  <strong>
                    Abakora mw’isambu yawe bose bafite MITUWERI (ubwishingizi
                    m’ukwivuza)?
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
                  placeholder="Abatabufite ni bangahe?………….."
                  className="resize-none border-[#166534] border-[2px] rounded-md focus:border-none px-2 py-1"
                ></textarea>
              </div>

              {/* //////////////// */}
              <div className="flex flex-col">
                <label htmlFor="iptor" className="flex gap-2 items-center">
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
                    Ingenzi 5.6.7
                  </b>
                  <strong>
                    Ese ufite ubwihero buhagije kandi busukuye bukoreshwa
                    n’umuryango wawe n’abakozi ?
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
                    Ingenzi 5.6.9
                  </b>
                  <strong>
                    Ese abakozi bawe ubuhugura kuburyo bwo kwrinda impanuka
                    mukazi
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
                    Ingenzi 5.6.10
                  </b>
                  <strong>
                    Ibikoresho ukoresha mumurima byaba bikoreshwa muburyo byiza
                    butateza impanuka?
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
                    Ingenzi 5.6.11
                  </b>
                  <strong>
                    Waba wita kukumenya imirimo itabangamira abagore batwite
                    nabotso mumurima wawe?
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
                    Ingenzi 5.6.12
                  </b>
                  <strong>
                    Abakozi bawe bashobora kuva ahabereye imbyago utabibahereye
                    uruhushya?
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
                    Ingenzi 5.7.3
                  </b>
                  <strong>
                    Ese abakozi baba kumurima wawe babona imbyangombwa nkenerwa
                    bihagije?
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
                    Ingenzi 5.8.2
                  </b>
                  <strong>
                    Ese ufite uburenganzira busesuye ku butaka bw’isambu yawe
                    (aho utuye n’ahari imirima yawe)? Gihamya ni iyihe?
                  </strong>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthSafety;
