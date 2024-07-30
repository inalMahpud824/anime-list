export default function SilderImage({ image, title }) {
  return (
    <>
      <figure className="relative overflow-hidden item">
        <img src={image} className="w-48 h-72" loading="lazy"/>
        <figcaption className="text-center absolute bg-[#292626] text-slate-300 w-full -bottom-20 py-2 transition-all duration-200 font-semibold">
          {title}
        </figcaption>
      </figure>
    </>
  );
}
