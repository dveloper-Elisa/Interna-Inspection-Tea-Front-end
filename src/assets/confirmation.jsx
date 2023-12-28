import { useState } from "react";

const Comfirm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toglerBtn = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col flex-center justify-center mt-5 px-5">
      <div>
        <strong onClick={toglerBtn} className="uppercase hover:cursor-pointer">
          Kwemeza ibyavuye mubugenzuzi bw’imbere
        </strong>
      </div>
      {isOpen && (
        <div className="flex flex-col gap-4 bg-[#166534] bg-opacity-35 p-5 w-fit rounded-lg">
          <ul className="list-disc">
            <li>
              Umuhinzi wasuwe aremeza ko amakuru yatanzwe mu gihe cy’ igenzura
              ari ukuri.
            </li>
            <li>Umuhinzi aremera ibyavuye mu igenzura ry’imbere.</li>
          </ul>
          <div className="font-bold flex flex-col">
            <strong>Byakozwe neza muri uyumwaka</strong>
            <span>
              <input type="radio" id="byemewe" name="check" />{" "}
              <label htmlFor="byemewe">Byemewe</label>
            </span>
            <span>
              <input type="radio" id="ntibyemewe" name="check" />{" "}
              <label htmlFor="ntibyemewe">Ntibyemewe</label>
            </span>
          </div>
        </div>
      )}
      <div className=" flex-col">
        <strong onClick={toglerBtn} className="uppercase hover:cursor-pointer">
          1.2.12 Igishushanyo cyumurima cyerekana ubuso buhinzeho icyayi,
          amashyamba, imigezi, inyubako.
        </strong>
        {isOpen && (
          <div className="flex border-[2px] border-[#166534] w-[20rem] h-[5rem]">
            <img src="" alt="garden Picture" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Comfirm;