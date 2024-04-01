export const Buysort = (props) => {
  const { HandleSort } = props;
  const sortName = [
    {
      name: "ALL CHOCOLATE",
      sort: "all",
    },
    {
      name: "COLOURFUL VARIETY",
      sort: "variefy",
    },
    {
      name: "NUTS SELECTION",
      sort: "nuts",
    },
    {
      name: "COCOA SELECTION",
      sort: "cocoa",
    },
    {
      name: "MINI RANGE",
      sort: "mini",
    },
    {
      name: "CHOCO CUBES",
      sort: "cubes",
    },
    {
      name: "250G BARS",
      sort: "250g",
    },
  ];
  return (
    <div className="w-screen flex h-12">
      {sortName.map((e, index) => (
        <button
          onClick={() => HandleSort(e.sort)}
          className="w-1/6 flex justify-center h-full bg-[#BE9131] items-center chocolateSortBuy text-white text-[20px] font-medium"
        >
          <p className="">{e.name}</p>
        </button>
      ))}
    </div>
  );
};
