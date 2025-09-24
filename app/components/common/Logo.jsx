import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoImg from "@/public/images/logo.png"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">       
        <Image
          src={LogoImg} // Replace with your logo path
          alt="SafeFastEx Logo"
          width={153}
          height={58}
          className="h-auto max-h-[58px]"
          priority
        />
       
      </div>
    </Link>
  )
}

export default Logo