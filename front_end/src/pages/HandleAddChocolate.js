import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
export default function AddChocolate() {
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
  const color = [];
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
  const Jump = () => {
    router.push("/sale");
  };
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
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full h-[100px] bg-[#BE9131] flex justify-between px-4">
        <button className="text-white text-2xl w-60 font-medium flex justify-center items-center">
          <p className="">Бүтээгдэхүүн нэмэх</p>
        </button>
        <button>
          <img
            priority={true}
            alt="icon"
            src="logo.svg"
            height={96}
            width={96}
          />
        </button>
        <button
          onClick={() => Jump()}
          className="text-white text-2xl w-60 font-medium flex justify-center items-center"
        >
          <p>Хөнгөлөлт</p>
        </button>
      </div>
      <div className="h-screen w-full flex items-center justify-center gap-5">
        <div className="felx flex-col justify-center ">
          <label
            htmlFor="file-upload"
            className="custom-file-upload w-[600px] h-[500px] border-2 border-solid rounded-xl flex items-center justify-center border-[#be9131]"
          >
            {imageUrl ? (
              <img src={imageUrl} alt="uploaded chocolate" />
            ) : (
              <img src="camera.svg" alt="photo" height={50} width={50} />
            )}
          </label>
          <input
            onChange={handleImageUpload}
            id="file-upload"
            type="file"
            accept=".png, .jpg, .jpeg, .webp"
          />
          <h1 className="text-[grey]">Upload or paste your image</h1>
        </div>
        <div className="flex flex-col gap-16">
          {thereAintSingleShiThtsValid ? (
            <h1 className="text-[red] text-[35px] absolute top-[35vh]">
              butneern orulc
            </h1>
          ) : null}

          <input
            onChange={handleName}
            className="p-[20px] w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний нэрээ оруулна уу."
          />
          <input
            onChange={handlePricePerUnit}
            className="p-[20px] w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний ширхэгийн үнийг оруулна уу."
          />
          <input
            onChange={handlePriceBox}
            className="p-[20px] w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний хайрцгийн үнийг оруулна уу."
          />
          <input
            onChange={countInBox}
            className="p-[20px] w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний хайрцган дахь тоог оруулна уу."
          />
        </div>
      </div>
      <button
        onClick={handleSend}
        className="absolute left-[50vw] bottom-10 border-2 border-black p-[20px] py-[10px] rounded-[10px]"
      >
        send
      </button>
    </div>
  );
}
