import { Link } from "react-router-dom";

export default function Acesso({ btn1, route1, btn2, handle }) {

  return (
    <div className="font-Raleway flex flex-col items-center justify-center gap-6 mt-10 md:flex-row">
      <button
        onClick={handle}
        className="flex items-center justify-center bg-[#300B74] text-white w-[177px] h-[52px] text-[22px] rounded-full cursor-pointer hover:bg-[#220856] hover:shadow-xl transform hover:scale-105 transition duration-100"
      >
        {btn2}
      </button>
      <Link
        to={route1}
        className="flex items-center justify-center bg-[#300B74] text-white w-[177px] h-[52px] text-[22px] rounded-full cursor-pointer hover:bg-[#220856] hover:shadow-xl transform hover:scale-105 transition duration-100"
      >
        {btn1}
      </Link>
    </div>
  );
}
