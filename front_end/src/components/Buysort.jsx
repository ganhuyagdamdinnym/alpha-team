export const Buysort = (propss) => {
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
    <div className="w-screen flex bg-">
      {sortName.map((e) => (
        <div
          onclick={() => HandleSort()}
          className="w-1/6 flex justify-center bg-[red]"
        >
          <p className="">{e}</p>
        </div>
      ))}
    </div>
  );
};
