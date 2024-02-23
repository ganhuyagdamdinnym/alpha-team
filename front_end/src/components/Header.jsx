export const Header = (props) => {
  const { LoginButtonPress } = props;
  const header = ["About", "Our Chocolate", "Login"];
  return (
    <div className="w-full flex flex-row-reverse items-center">
      <button
        onClick={() => LoginButtonPress()}
        className="p-[10px] backdrop-blur-[20px] text-white rounded-[10px] text-2xl"
      >
        <p>log in</p>
      </button>
    </div>
  );
};
