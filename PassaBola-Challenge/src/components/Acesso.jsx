export default function ({ btn1, btn2 }) {
  return (
    <div className="flex flex-col items-center gap-6">
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full">
        {btn1}
      </button>
      <button className="bg-[#300B74] text-[#FFFFFF] w-[177px] h-[52px] text-[22px] rounded-full">
        {btn2}
      </button>
    </div>
  );
}
