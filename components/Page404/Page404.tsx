import Image from "next/image"
import "./Page404.css"

const Page404 = () => {
  return (
    <div className="page-404">
      <div><Image src="/404.png" alt="" width={60} height={60} /></div>
      {/* <div><img src="/404.png" alt="" /></div> */}
    </div>
  )
}

export default Page404
