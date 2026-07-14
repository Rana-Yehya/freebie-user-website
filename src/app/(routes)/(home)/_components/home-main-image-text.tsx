interface HomeMainImageTextProps {
  title: string;
  className?: string;
}
{
  /* <!-- Content Overlay --> */
}

export default function HomeMainImageText({
  title,
  className = "",
}: HomeMainImageTextProps) {
  return (
    <span data-animate="heading" style={{ opacity: 1 }}>
      <span
        className={`motion-word ${className}`}
        style={{
          opacity: 1,
          transform: "translateY(0px)",
          filter: "blur(0px)",
        }}
      >
        {title}
      </span>{" "}
    </span>
  );
}
