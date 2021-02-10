import clsx from "clsx";

export interface BadgeProps {
  className?: string;
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { className, children } = props;

  return (
    <span
      className={clsx(
        className,
        "rounded-full bg-blue-700 text-white text-sm uppercase tracking-wide"
      )}
    >
      {children}
    </span>
  );
};
