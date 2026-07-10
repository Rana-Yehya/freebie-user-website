interface IconButtonProps {
  icon: string;
  className?: string;
  filter?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export default function CustomIcon({
  icon,
  className,
  width = 24,
  height = 24,
  filter,
  alt,
}: IconButtonProps) {
  return (
    <img
      alt={alt}
      src={icon}
      width={width}
      height={height}
      className={`group transition-opacity duration-300 ${className}`}
      // style={{
      //   filter:
      //     filter ??
      //     "invert(64%) sepia(66%) saturate(1840%) hue-rotate(2deg) brightness(105%) contrast(92%)",
      // }}
    />
  );
}
