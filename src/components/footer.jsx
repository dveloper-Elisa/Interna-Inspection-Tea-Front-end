import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-[#638541]">
      <div className="flex mx-[2rem] justify-between ">
        <div className="map flex justify-center">
          <div>
            <strong>Map here</strong>
          </div>
        </div>

        {/* FLOW US DEVISION */}
        <div className="flex flex-col">
          <strong>Follow us</strong>
          <div className="flex flex-col gap-4px text-white">
            <Link to="#" target="_black">
              Twitter
            </Link>
            <Link to="#" target="_black">
              Instergram
            </Link>
          </div>
        </div>

        {/* CONTACT US */}

        <div className="flex flex-col">
          <strong>Contact Us</strong>
          <div className="flex flex-col gap-4px text-white">
            Email:{" "}
            <Link to={`mailto:katabagemu@gmail.com`} target="_black"></Link>
            Call
            <Link to={`tel:+250787647168`} target="_black">
              0787647168
            </Link>
          </div>
        </div>
      </div>

      {/* Horizontal rular */}
      <hr className="text-2px text-white mx-[2rem]" />
      <div className="flex py-5 justify-center text-yellow-300 text">
        2023-2024 All &copy; right reserved to Muganza-Tea factory
      </div>

      {/* background Image */}
      <div className="flex bg-img"></div>
    </div>
  );
}

export default Footer;
