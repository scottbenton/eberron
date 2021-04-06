import clsx from "clsx";

export interface AvatarProps {
  url: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = (props) => {
  const { url, alt, className } = props;

  return (
    <div
      className={
        "w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2"
      }
    >
      <img
        src={url}
        alt={alt}
        className={clsx("w-16 md:w-24 object-cover", className)}
        style={{ margin: 0 }}
      />
    </div>
  );
};
