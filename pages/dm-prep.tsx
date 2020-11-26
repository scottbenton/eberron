import PrepMD from "@/content/dm-prep.md";

const DmPrep: React.FC = (props) => {
  return (
    <div className="max-w-xl block md:prose prose-sm mx-auto my-8 w-full flex-grow">
      <PrepMD />
    </div>
  );
};

export default DmPrep;
