import Image from "next/image"
export const HomeAboutCompany = () => {

  return(
  <div className="">
    <div>
      <Image src="logo.svg" height={60} width={60}/>
    </div>
    <div>
      <p>Information</p>
      <p>CEO: Jargalmaa Zorigoo</p>
      <p>Premium Sweets LLC</p>
      <p>Tel: +976 7777-3555</p>
    </div>
  </div>
  )
}

