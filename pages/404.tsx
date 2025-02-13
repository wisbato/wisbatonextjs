"use client"

import Image from "next/image"
import "./globals.css"

const Page404 = () => {
  return (
    <div className="page-404">
      <div><Image src="/404.png" alt="" width={500} height={500} /></div>
      {/* <div><img src="/404.png" alt="" /></div> */}
    </div>
  )
}

export default Page404
