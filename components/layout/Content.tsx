export const Content: React.FC = (props) => {
  const { children } = props;
  return <div className={"flex-grow flex flex-col"}>{children}</div>;
};
