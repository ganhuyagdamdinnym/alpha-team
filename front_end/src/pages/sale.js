import { useEffect, useState } from "react";
import { Back_End_url } from "@/utils/back-url";
import { ChocolateSale } from "@/components/ChocolateSale";

import { useRouter } from "next/navigation";
// import { ChocolateImfo } from "@/components/ChocolateI ;
import Image from "next/image";
import axios from "axios";
export default function Sell() {
  const [data, setData] = useState();
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
  const router = useRouter();
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
    reader.readAsDataURL(file);
  }

  // magic happens here ;)

  async function handleSend() {
    const imageBaseProccessoro = await resizeAndConvertToBase64(base64);
    console.log(name, imageBaseProccessoro);
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
          <p className="saleText">Бүтээгдэхүүн нэмэх</p>
        </button>
        <button>
          <Image src="logo.svg" height={96} width={96} />
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
        <div className="grid-container mt-32 mb-16 min-w-88 bg-white ">
          <div className="border-[3.5px] border-[#DCDAD7]  w-[311px] h-[498px]">
            {imageUrl ? (
              <img src={imageUrl} alt="uploaded chocolate" />
            ) : (
              <img src="camera.svg" alt="photo" />
            )}
            <div className="w-full h-[130px] border-[#AD70E] px-4 ">
              <input
                className="text-[#2C261F] font-semibold"
                placeholder="ner"
                onChange={handleName}
              ></input>
              <input
                placeholder="Ширхэгийн үнэ:  ₮"
                className="text-[#2C261F]"
                onChange={handlePricePerUnit}
              ></input>
              <input
                placeholder="Хайрцгийн үнэ: ₮"
                className="text-[#2C261F]"
                onChange={handlePriceBox}
              ></input>
              <input
                placeholder="Хайрцаг дахь ширхэг:"
                onChange={countInBox}
                className="text-[#2C261F]"
              ></input>
            </div>
            <div className="w-full flex h-[50px] items-center px-4">
              <button
                onClick={() => HandleChocolateDelete()}
                className="px-1 fixed top-1 right-0"
              >
                <Image
                  className="cursor-pointer"
                  src="xmark.svg"
                  height={24}
                  width={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
