import WinterList from "../components/WinterList";

const WinterCollection = () => {
  return (
    <div className="container bg-[#f9f9f9]">
      <div>
        <h1 className=" flex text-4xl font-bold justify-center items-center py-10">Winter Collection</h1>
        <WinterList />
      </div>
    </div>
  );
};

export default WinterCollection;
