import portrait640 from "../../assets/images/portrait-640.webp";
import portrait320 from "../../assets/images/portrait-320.webp";
import outdoor640 from "../../assets/images/outdoor-640.webp";
import outdoor1280 from "../../assets/images/outdoor-1280.webp";
export function Picture({
  outdoor = false,
  className = "",
}: {
  outdoor?: boolean;
  className?: string;
}) {
  return (
    <img
      className={className}
      src={outdoor ? outdoor1280 : portrait640}
      srcSet={
        outdoor
          ? `${outdoor640} 640w, ${outdoor1280} 1280w`
          : `${portrait320} 320w, ${portrait640} 578w`
      }
      sizes={
        outdoor
          ? "(max-width: 720px) 90vw, 45vw"
          : "(max-width: 720px) 80vw, 28vw"
      }
      width={outdoor ? 1280 : 578}
      height={outdoor ? 1707 : 585}
      loading="lazy"
      decoding="async"
      alt={
        outdoor
          ? "Ronny draußen in einer weiten Berglandschaft"
          : "Ronny Brunner, entspannt und lächelnd"
      }
    />
  );
}
