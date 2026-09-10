import Shadow from '../../assets/bg-shadow.png'
import Banner from '../../assets/banner-main.png'
export function Hero() {
  
  return (
    <div style={{backgroundImage: `url(${Shadow})`}} className="bg-cover bg-center bg-no-repeat bg-[#131313] rounded-2xl flex flex-col items-center justify-center gap-6 py-15">
    <img className='w-50' src={Banner} alt="" />
    <h1 className='text-[40px] text-[#FFFFFF]'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p className='text-[24px] text-[#FFFFFF70]'>Beyond Boundaries Beyond Limits</p>
    <button className="btn bg-[#E7FE29] border-none rounded-md outline-1 outline-[#E7FE29] outline-offset-4">Claim Free Credit</button>
    </div>
  )
}