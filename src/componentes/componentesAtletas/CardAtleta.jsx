// src/componentes/CardAtleta.jsx
import { FaFutbol, FaShieldAlt, FaUser } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";

export default function CardAtleta({
  image,
  nome,
  idade,
  posicao,
  gols,
  clube,
  className = "",
}) {
  return (
    <article
      className={`grid grid-cols-[110px_1fr] md:grid-cols-[140px_1fr] items-center gap-4 md:gap-6
                  rounded-2xl bg-white shadow-lg ring-1 ring-black/5 p-4 mb-4 md:p-6 ${className}`}
    
    >
      
      <figure className="shrink-0">
        <img
          src={image}
          alt={`Foto de ${nome}`}
          className="w-[110px] h-[110px] md:w-[140px] md:h-[140px] object-cover rounded-xl"
        />
      </figure>

      
      <div className="min-w-0">
        <div className="flex items-center gap-3">
          <h3 className="font-Jockey text-2xl md:text-3xl text-[#300B74] truncate">
            {nome}
          </h3>
          {posicao && (
            <span className="px-2 py-0.5 text-xs md:text-sm rounded-full bg-[#540FD4]/10 text-[#540FD4] font-semibold">
              {posicao}
            </span>
          )}
        </div>

        <ul className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm text-gray-700">
          {idade !== undefined && (
            <li className="flex items-center gap-2">
              <IoCalendarOutline className="text-[#540FD4]" />
              <span>{idade} anos</span>
            </li>
          )}
          {gols !== undefined && (
            <li className="flex items-center gap-2">
              <FaFutbol className="text-[#540FD4]" />
              <span>{gols} gols</span>
            </li>
          )}
          {clube && (
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-[#540FD4]" />
              <span>{clube}</span>
            </li>
          )}
        </ul>
      </div>
    </article>
  );
}
