import { ImCoinDollar } from 'react-icons/im'
import Logo from '../../assets/logo.png'

export function Nav() {
  
  return (
  <nav className='flex justify-between items-center mt-10 mb-5'>
    <img src={Logo} alt="" />
   
     <div className='flex gap-6 items-center'>
      <ul className='flex gap-4 justify-end-safe'>
      <li>Home</li>
      <li>Fixture</li>
      <li>Teams</li>
      <li>Schedules</li>
    </ul>
    <button className="btn btn-soft btn-sm bg-white shadow border-none rounded-md text-[16px]">Coin <span className='text-yellow-200 bg-yellow-500 rounded-full text-lg'><ImCoinDollar/></span></button>
   
     </div>
  </nav>
  )
}
{/* <button className="btn btn-sm">Small</button> */}
{/* <button className="btn btn-xs">Xsmall</button> */}