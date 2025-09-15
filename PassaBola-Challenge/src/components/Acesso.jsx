export default function ({ btn1, btn2 }) {
  return (
    <div className="font-Raleway flex flex-col items-center justify-center gap-6 mt-10 md:flex-row">
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full cursor-pointer hover:bg-[#220856] hover:shadow-xl transform hover:scale-105 transition duration-100">
        {btn1}
      </button>
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full cursor-pointer hover:bg-[#220856] hover:shadow-xl transform hover:scale-105 transition duration-100">
        {btn2}
      </button>
    </div>
  );
}
