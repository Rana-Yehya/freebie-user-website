interface TextSpaceSeparationProps {
  title: string;
  className?: string;
}
export default function TextSpaceSeparation({
  title,
  className = "",
}: TextSpaceSeparationProps) {
  const words = title.split(" ");
  return words.map((word, index) => (
    <span
      key={index}
      className={`motion-word ${className}`}
      style={{
        display: "inline-block",
        opacity: 1,
        transform: "translateY(0px)",
        filter: "blur(0px)",
      }}
    >
      {word}
      {index < words.length - 1 && "\u00A0"}
    </span>
  ));
}
