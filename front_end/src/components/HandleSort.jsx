export const HandleSort = (props) => {
  const { bgcolor } = props;
  const sortName = [
    {
      name: "COLOURFUL VARIETY",
      color: "red",
    },
    {
      name: "NUT SELECTION",
      color: "green",
    },
    {
      name: "VEGAN RANGE",
      color: "yellow",
    },
    {
      name: "MINI RANGE",
      color: "brown",
    },
  ];

  return (
    <div className="w-screen flex">
      {sortName.map((e, index) => (
        <div key={index} className="w-1/4 bg-[white] flex justify-center">
          {bgcolor === e.color ? (
            <p style={{ backgroundColor: e.color }}>{e.name}</p>
          ) : (
            <p className={`bg-[white] `}>{e.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};
