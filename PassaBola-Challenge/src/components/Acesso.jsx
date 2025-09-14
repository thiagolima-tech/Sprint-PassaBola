export default function ({ btn1, btn2 }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-10 md:flex-row">
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full md:w-60 md:h-20 md:text-3xl">
        {btn1}
      </button>
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full md:w-60 md:h-20 md:text-3xl">
        {btn2}
      </button>
    </div>
  );
}
