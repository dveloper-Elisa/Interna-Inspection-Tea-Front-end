import "../../src/index.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 p-[2rem] ">
      <div className="flex justify-between gap-20 items-center h-[90vh]  ">
        <div className="flex flex-col text-center max-w-[45rem]">
          <strong className="text-[#638541] text-[50px]">
            Welcome to INTERNAL INSPECTION Platform
          </strong>
          <p className="text-[20px]">
            The overall advantages that organic Ceylon Tea offers to health,
            farmers, and environment can be innumerable;Produces a moderately
            full-bodied cup, only lightly bitter, with a somewhat subdued
            flavor. The aroma is a little weak, and easy to ignore. I find if I
            pay attention to it though, {`it's`} quite interesting, I do notice
            the hints of mace that Upton mentions in the description. Finish is
            moderately astringent, never too much so.
          </p>
        </div>
        <div className="flex">
          <img src="12.webp" alt="Image here" className="" />
        </div>
      </div>
      <div className="bg-slate-100">
        <h2 className="font-bold text-center p-10 text-[1.5rem] uppercase">
          Advantages of tea
        </h2>
      </div>
      <div className="flex justify-between gap-20 items-center h-[90vh]  ">
        <div className="flex">
          <img src="muganzatea.webp" alt="Image here" />
        </div>
        <div className="flex flex-col  max-w-[45rem]">
          <strong className="text-[#638541] text-[50px]">
            What happen when you use Tea every day
          </strong>
          <p className="text-[20px]">
            No matter whether you enjoy your tea in a fancy cup along with a
            scone, in a to-go cup over ice while running errands, or in your
            favorite cozy mug sitting by a roaring fire, drinking tea every day
            can have a profound positive impact on your overall health.
          </p>
        </div>
      </div>
      {/* back ground Image */}
      <div className="bg-slate-100">
        <h2 className="font-bold text-center p-10 text-[1.5rem] uppercase">
          {`MUGANZA's`} PLANTATION
        </h2>
      </div>
      <div className="bg-image h-[80vh] text-right text-white text-[30px] font-extrabold">
        <p className="mr-4">Muganza-Tea plantation</p>
      </div>
      {/* IMS */}
      {/* IIP */}

      {/* last Division */}
      <div className="flex justify-between gap-20 items-center h-[90vh]  ">
        <div className="flex">
          <img src="image.webp" alt="Image here" />
        </div>
        <div className="flex flex-col  max-w-[45rem]">
          <strong className="text-[#638541] text-[50px] pb-10">
            Delicious Tea is produced
          </strong>
          <p className="text-[20px]">
            No matter whether you enjoy your tea in a fancy cup along with a
            scone, in a to-go cup over ice while running errands, or in your
            favorite cozy mug sitting by a roaring fire, drinking tea every day
            can have a profound positive impact on your overall health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
