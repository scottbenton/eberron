export interface TooltipProps {
  text: string;
  className: string;
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { text, children, className } = props;

  return (
    <div className={"tooltip"}>
      {children}
      <span className={"tooltipText"}>{text}</span>
    </div>
  );
};
