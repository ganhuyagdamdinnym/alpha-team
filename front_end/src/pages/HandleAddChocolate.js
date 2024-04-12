import Image from "next/image";
export default function AddChocolate() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <div className="w-full h-[100px] bg-[#BE9131] flex justify-between px-4">
        <button className="text-white text-2xl w-60 font-medium flex justify-center items-center">
          <p className="">Бүтээгдэхүүн нэмэх</p>
        </button>
        <button>
          <Image src="logo.svg" height={96} width={96} />
        </button>
        <button className="text-white text-2xl w-60 font-medium flex justify-center items-center">
          <p>Хөнгөлөлт</p>
        </button>
      </div>
      <div className="h-screen w-full flex items-center justify-center gap-5">
        <div className="felx flex-col justify-center ">
          <div className="w-[600px] h-[500px] border-2 border-solid rounded-xl flex items-center justify-center border-[#be9131]">
            <Image alt="photo" src="camera.svg" height={50} width={50} />
          </div>
          <h1 className="text-[grey]">Upload or paste your image</h1>
        </div>
        <div className="flex flex-col gap-16">
          <input
            className=" w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний нэрээ оруулна уу."
          />
          <input
            className=" w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний ширхэгийн үнийг оруулна уу."
          />
          <input
            className=" w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний хайрцгийн үнийг оруулна уу."
          />
          <input
            className=" w-[400px] h-[30px] border-solid border-2 rounded border-[#be9131]"
            placeholder="Та шоколадний хайрцган дахь тоог оруулна уу."
          />
        </div>
      </div>
    </div>
  );
}
