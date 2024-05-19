import Image from "next/image"
import Logo from "../assets/logo1.png"
import Link from "next/link"

const Nav = () => {

  const linkClassName= "text-white font-bold text-base hover:opacity-30 transition-all duration-300 ease-in-out hover:border-b-2"

  return (
    <div className="flex items-center justify-between">
        <Image alt="logo" src={Logo} width={100} height={100} />
        <div className="flex gap-3 sm:gap-6 md:gap-10 font-bold text-base">
            <Link href="#" className={linkClassName}>Home</Link>
            <Link href="#" className={linkClassName}>About</Link>
            <Link href="#" className={linkClassName}>Projects</Link>
            <Link href="#" className={linkClassName}>Contact</Link>
        </div>
    </div>
  )
}

export default Nav