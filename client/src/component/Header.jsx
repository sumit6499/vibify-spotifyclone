import { logo } from '@/assets'

function Header() {
  return (
    <header  className="flex w-full bg-[#000000] items-center py-2 pl-2 ">
        <img src={logo} alt="" className="w-10 object-contain cursor-pointer  "/>
        <span className="text-lg font-medium tracking-wide ml-1 ">Vibify</span>
    </header>   
  )
}

export default Header
