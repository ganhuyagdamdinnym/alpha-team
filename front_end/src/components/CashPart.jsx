import { all } from "axios";

export const CashPart = (props) => {
  const { allPrice } = props;
  return (
    <div>
      <div className="w-full flex justify-center py-2 text-2xl">
        Нийт үнэ: {allPrice}₮
      </div>
    </div>
  );
};
