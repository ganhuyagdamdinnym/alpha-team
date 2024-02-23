export const Header = (props) => {
  const { LoginButtonPress } = props;
  const header = ["About", "Our Chocolate", "Login"];
  return (
    <div className="w-full flex flex-row-reverse items-center">
      <button
        onClick={() => LoginButtonPress()}
        className="px-2 py-1 rounded-3xl bg-red-500 text-2xl"
      >
        Log in
      </button>
    </div>
  );
};
