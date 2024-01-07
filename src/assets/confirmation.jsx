import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Button from "../components/button";

const Comfirm = () => {
  const form11 = useLocation();

  const [comfirm, setComfirm] = useState({
    check: "",
  });

  const cofirmFuncton = (name, value) => {
    setComfirm({ ...comfirm, [name]: value });
  };

  const navigate = useNavigate();
  const navigateBack = () => {
    navigate("/enviroment");
  };
  return (
    <div className="flex flex-col flex-center justify-center mt-5 px-5">
      <div>
        <strong className="uppercase hover:cursor-pointer">
          Kwemeza ibyavuye mubugenzuzi bw’imbere
        </strong>
      </div>

      <div className="flex flex-col gap-4 bg-[#166534] bg-opacity-35 p-5 w-fit rounded-lg">
        <ul className="list-disc">
          <li>
            Umuhinzi wasuwe aremeza ko amakuru yatanzwe mu gihe cy’ igenzura ari
            ukuri.
          </li>
          <li>Umuhinzi aremera ibyavuye mu igenzura ry’imbere.</li>
        </ul>
        <div className="font-bold flex flex-col">
          <strong>Byakozwe neza muri uyumwaka</strong>
          <span>
            <input
              type="radio"
              onChange={() => cofirmFuncton("ckeck", "Byemewe")}
              id="byemewe"
              name="check"
            />
            <label htmlFor="byemewe">Byemewe</label>
          </span>
          <span>
            <input
              type="radio"
              onChange={() => cofirmFuncton("ckeck", "Ntibemewe")}
              id="ntibyemewe"
              name="check"
            />
            <label htmlFor="ntibyemewe">Ntibyemewe</label>
          </span>
        </div>
      </div>

      <div className=" flex-col">
        <strong className="uppercase hover:cursor-pointer">
          1.2.12 Igishushanyo cyumurima cyerekana ubuso buhinzeho icyayi,
          amashyamba, imigezi, inyubako.
        </strong>

        <div className="flex border-[2px] border-[#166534] w-[20rem] h-[5rem]">
          <img src="" alt="garden Picture" />
        </div>
      </div>
      <div className="flex gap-2">
        <Button onClick={navigateBack} text={"Previouse"} />
        <Button
          onClick={() => {
            const data = form11.state;
            const inspectionData = { data, comfirm };
            console.log(inspectionData);

            // //////////////////////////////////////////

            const infoInternal =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6.forms5
                .forms4.forms3.forms2.forms1.initialForm;
            const farmerInfo =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6.forms5
                .forms4.forms3.forms2.farmerInfo;
            const farmeOperator =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6.forms5
                .forms4.forms3.farmOperator;
            const farmInfomation =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6.forms5
                .forms4.farmInformation;
            const farmGPSLocation =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6.forms5
                .gpsCoordinates;
            const harvesting4Years =
              inspectionData.data.forms10.forms9.forms8.forms7.forms6
                .yearsHarvest;
            const farmManagement =
              inspectionData.data.forms10.forms9.forms8.forms7.formDataRule;
            const originInformation =
              inspectionData.data.forms10.forms9.forms8.formData2;
            const farmingOnly =
              inspectionData.data.forms10.forms9.farmInformation;
            const workHealth = inspectionData.data.forms10.healthInformation;
            const environment = inspectionData.data.environmentData;

            const form_data = {
              infoInternal,
              farmerInfo,
              farmeOperator,
              farmInfomation,
              farmGPSLocation,
              harvesting4Years,
              farmManagement,
              originInformation,
              farmingOnly,
              workHealth,
              environment,
            };

            // // ////////////////////////////////////////////

            try {
              const fetchInspection = async () => {
                const token = localStorage.getItem("token");

                if (
                  token === "" ||
                  token === undefined ||
                  token === null ||
                  !token
                ) {
                  location.href = "/";
                  return;
                }

                const url = "http://localhost:3000/inspect/inspection";
                const result = await fetch(url, {
                  method: "post",
                  headers: {
                    "Content-Type": "apllication/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(form_data),
                });

                const inspection = result.json();
                console.log(inspection);
              };
              fetchInspection();
            } catch (error) {
              console.log(error);
            }

            console.log(form_data);
          }}
          text={"Submit"}
        />
      </div>
    </div>
  );
};

export default Comfirm;
