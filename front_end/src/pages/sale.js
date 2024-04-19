import { useEffect, useState } from "react";
import { Back_End_url } from "@/utils/back-url";
import { ChocolateSale } from "@/components/ChocolateSale";
// import { ChocolateImfo } from "@/components/ChocolateI ;
import { useRouter } from "next/navigation";
import axios from "axios";
export default function Sell() {
  const [data, setData] = useState();
  const router = useRouter();
  const fetchChocolateData = async () => {
    try {
      const url = `${Back_End_url}/getChocolatedata`;
      const res = await axios.get(url);
      setData(res.data);
      //setSorts(res.data);
    } catch (err) {
      console.log("err", err);
    }
  };
  useEffect(() => {
    fetchChocolateData();
  }, []);
  console.log(data);
  // ariuka's part :)
  const [imageUrl, setImageUrl] = useState(null); // Initial state for image URL
  const [name, setName] = useState();
  const [base64, setBase64] = useState();
  const [fullData, setFullData] = useState();
  const [thereAintSingleShiThtsValid, setThereAintSingleShiThtsValid] =
    useState(false);
  function handleName(e) {
    setName(e.target.value);
  }
  async function handleImageUpload(e) {
    const file = e.target.files[0];
    setBase64(file);
    const reader = new FileReader();
    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };
    try {
      reader.readAsDataURL(file);
    } catch {
      console.log("empty");
    }
  }

  // magic happens here ;)

  async function handleSend() {
    const imageBaseProccessoro = await resizeAndConvertToBase64(base64);
    if (
      imageBaseProccessoro === undefined ||
      name === undefined ||
      fullData.pricePerBox === undefined ||
      fullData.pricePerUnit === undefined ||
      fullData.countInBox === undefined
    ) {
      setThereAintSingleShiThtsValid(true);
    } else {
      axios
        .post("http://localhost:8002/getchocolate", {
          image: imageBaseProccessoro,
          name: name,
          unit_price: fullData.pricePerUnit,
          box_price: fullData.pricePerBox,
          count_in_box: fullData.countInBox,
        })
        .catch((e) => console.log(e));
    }
    window.location.reload();
    fetchChocolateData();
  }

  const resizeAndConvertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          const maxWidth = 550;
          const maxHeight = 600;

          let newWidth = img.width;
          let newHeight = img.height;

          if (img.width > maxWidth || img.height > maxHeight) {
            const aspectRatio = img.width / img.height;

            if (img.width > maxWidth) {
              newWidth = maxWidth;
              newHeight = maxWidth / aspectRatio;
            }

            if (newHeight > maxHeight) {
              newHeight = maxHeight;
              newWidth = maxHeight * aspectRatio;
            }
          }

          canvas.width = newWidth;
          canvas.height = newHeight;

          ctx.drawImage(img, 0, 0, newWidth, newHeight);

          const newDataUrl = canvas.toDataURL("image/jpeg", 0.7);
          resolve(newDataUrl);
        };
      };

      reader.onerror = (error) => {
        reject(error);
      };
      try {
        reader.readAsDataURL(file);
      } catch (e) {
        setThereAintSingleShiThtsValid(true);
      }
    });
  };
  const jump = () => {
    router.push("/admin");
  };
  function handlePriceBox(e) {
    setFullData({ ...fullData, pricePerBox: e.target.value });
  }
  function handlePricePerUnit(e) {
    setFullData({ ...fullData, pricePerUnit: e.target.value });
  }
  function countInBox(e) {
    setFullData({ ...fullData, countInBox: e.target.value });
  }
  return (
    <div className={`w-[100wv] h-[100hv] flex flex-col gap-2 tester bg-white`}>
      <div className="w-full h-[100px] bg-[#BE9131] flex justify-between px-4 fixed top-0 z-20 items-center">
        <button className="text-[#000391] text-2xl w-60 font-medium flex justify-center items-center bg-white h-[35px] rounded-xl">
          <p onClick={() => jump()} className="saleText">
            Бүтээгдэхүүн нэмэх
          </p>
        </button>
        <button>
          <img src="logo.svg" height={96} width={96} />
        </button>
        <button className="text-[#000391] rounded-xl text-2xl w-60 font-medium flex justify-center items-center bg-white h-[35px]">
          <p className="saleText">Хөнгөлөлт</p>
        </button>
      </div>
      <div className="grid-container mt-32 mb-16 min-w-88 bg-white ">
        {data?.map((e) => (
          <ChocolateSale
            name={e.name}
            unit_price={e.unit_price}
            box_price={e.box_price}
            count_in_box={e.count_in_box}
            image={e.image}
            id={e._id}
            status={e.saleStatus}
            percent={e.salePercent}
            fetchChocolateData={fetchChocolateData}
            //currentRef={currentRef}
          />
        ))}
        {data ? (
          <div className="border-[3.5px] border-[#de8526] rounded-[12px]  bg-white z-0">
            <label
              htmlFor="file-upload"
              className="custom-file-upload h-[350px] rounded-xl flex items-center justify-center "
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="uploaded chocolate"
                  className=" rounded-[8px] h-[auto]"
                />
              ) : (
                <div className="w-full rounded-t-[8px] flex items-center justify-center h-[67%] ">
                  <img src="camera.svg" alt="photo" height={50} width={50} />
                </div>
              )}
            </label>
            <input
              onChange={handleImageUpload}
              id="file-upload"
              type="file"
              accept=".png, .jpg, .jpeg, .webp"
            />
            <div className="w-full border-[#AD70E] gap-[10px] px-4 flex flex-col justify-between py-4">
              <input
                className="border-2 border-[#de8526] rounded-[10px] p-[5px] outline-2 text-[#2C261F] font-semibold "
                placeholder="Шоколадны нэр"
                onChange={handleName}
              ></input>
              <input
                placeholder="Ширхэгийн үнэ:  ₮"
                className="border-2 border-[#de8526] rounded-[10px] p-[5px] outline-2 text-[#2C261F]"
                onChange={handlePricePerUnit}
              ></input>
              <input
                placeholder="Хайрцгийн үнэ: ₮"
                className="border-2 border-[#de8526] rounded-[10px] p-[5px] outline-2 text-[#2C261F]"
                onChange={handlePriceBox}
              ></input>
              <input
                placeholder="Хайрцаг дахь ширхэг:"
                onChange={countInBox}
                className="border-2 border-[#de8526] rounded-[10px] p-[5px] outline-2 text-[#2C261F]"
              ></input>
              <div className="flex justify-center">
                <button
                  onClick={handleSend}
                  className="bg-[#de8526] p-[5px] w-[100px] rounded-[10px]"
                >
                  send
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* </div> */}
      </div>
    </div>
  );
}
