export const Buysort = (props) => {
  const { HandleSort } = props;
  const sortName = [
    "COLOURFUL VARIETY",
    "NUTS SELECTION",
    "COCOA SELECTION",
    "MINI RANGE",
    "CHOCO CUBES",
    "250G BARS",
  ];
  return (
    <div className="w-screen flex h-8 ">
      {sortName.map((e, index) => (
        <button
          onClick={() => HandleSort()}
          className="w-1/6 flex justify-center h-full bg-[red] items-center"
        >
          <p className="">{e}</p>
        </button>
      ))}
    </div>
  );
};
