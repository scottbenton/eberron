export interface HomeSectionProps {
  title: string;
  icon?: React.ReactNode;
}

export const HomeSection: React.FC<HomeSectionProps> = (props) => {
  const { title, children, icon } = props;

  return (
    <section className={"mt-10"}>
      <h2 className={"text-2xl font-semibold text-gray-900 flex items-center"}>
        {title}
        {icon ? <span className={"ml-2 text-gray-700"}>{icon}</span> : ""}
      </h2>
      {children}
    </section>
  );
};
