import { Link } from "react-router-dom";

export default function SilderImage({ image, title, to }) {
  return (
    <>
    <Link to={to}>
      <figure className="relative overflow-hidden item">
        <img
          src={image}
          className="md:w-44 md:h-64 xl:w-48 xl:h-72 rounded-md w-36 h-56"
          loading="lazy"
        />
        <figcaption className="text-center absolute bg-[#292626] text-slate-300 w-full -bottom-20 py-2 transition-all duration-200 font-semibold">
          {title}
        </figcaption>
      </figure>
    </Link>
    </>
  );
}
