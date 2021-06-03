export const TextPage: React.FC = (props) => {
  const { children } = props;
  return (
    <div className="max-w-xl block md:prose prose-sm mx-auto my-8 w-full flex-grow px-8">
      {children}
    </div>
  );
};
