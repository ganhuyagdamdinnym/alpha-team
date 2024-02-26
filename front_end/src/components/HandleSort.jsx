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
    <div className="w-screen flex bg-">
      {sortName.map((e) => (
        <div onclick={() => HandleSort()} className="w-1/6 flex justify-center">
          <p className={`bg-[${bgcolor}]`}>{e}</p>
        </div>
      ))}
    </div>
  );
};
