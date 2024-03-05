export const HandleSort = (props) => {
  const { bgcolor } = props;
  const sortName = [
    "COLOURFUL VARIETY",
    "NUTS SELECTION",
    "COCOA SELECTION",
    "MINI RANGE",
    "CHOCO CUBES",
    "250G BARS",
  ];
  return (
    <div className="w-screen flex">
      {sortName.map((e, index) => (
        <div
          key={index}
          onClick={() => HandleSort()}
          className="w-1/6 bg-[white] flex justify-center"
        >
          <p className={`bg-[white] `}>{e}</p>
        </div>
      ))}
    </div>
  );
};
