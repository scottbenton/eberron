export interface BaseIconProps {
  className?: string;
}

export const BaseIcon: React.FC<BaseIconProps> = (props) => {
  const { className, children } = props;
  return <span className={className}>{children}</span>;
};
