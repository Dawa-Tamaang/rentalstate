import react from 'react'
// import {BsSuitHeart} from 'react-icons/bs'
// import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
// import {AiOutlineDoubleRight} from 'react-icons/ai'
// import house1 from './assets/house1.jpg'
// import house2 from './assets/house2.jpg'
// import house3 from './assets/house3.jpg'
// import house4 from './assets/house4.jpg'
// import house5 from './assets/house5.jpg'
// import house6 from './assets/house6.jpg'
// import house7 from './assets/house12.jpg'
// import house8 from './assets/house13.jpg'
// import house9 from './assets/house14.jpg'
// import house1 from './assets/house7.jpg'
// import house2 from './assets/house8.jpg'
// import house3 from './assets/house9.jpg'
// import house4 from './assets/house10.jpg'
// import house5 from './assets/house11.jpg'
// import house6 from './assets/house12.jpg'
// import { IoLocationOutline, IoBedOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <Home>
        <div className="App  w-11/12 md:w-4/5 m-auto">
          <div className='py-10'>
          <p className='px-4 py-1 text-xs bg-yellow-100 w-16 rounded-lg'>NEW</p>
          <h1 className='text-4xl font-bold'>NEWEST DEALS</h1>
          <div className="deals grid 2xl:grid-cols-3 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$110,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Kissimmee.Florida US</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$70,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Petra,Spain</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                    
                  </div>
                  <h1 className='text-2xl font-semibold'>$42,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Ia Molas,Italy</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$80,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>San Francisco,Colombia</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house5} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>59,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>VN, Vietnam</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house6} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$42,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Wiesentheid, Germany</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house7} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$132,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Tambon Bang Sa-re, Thailand</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house8} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>5 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>3 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$58,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Vuren, Netherlands</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>3 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>2 bat</p>
                      </div>
                  
                  </div>
                  <h1 className='text-2xl font-semibold'>$120,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>New York, United States</p>
                  </div>
                  </div>

              </div>
              <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                  <div className='relative h-[60%]'>
                  <img src={house9} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                  <div className='absolute top-0 right-0 p-4'>
                      <BsSuitHeart size={"1.5rem"} className="text-white"/>
                  </div>
                  </div>
                  <div className='p-4 space-y-4'>
                  <div className='flex space-x-5 items-center'>
                      <div className='flex items-center space-x-1'>
                          <IoBedOutline/>
                          <p className='text-sm text-gray-400'>4 bed</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                        <GiBathtub/>
                        <p className='text-sm text-gray-400'>2 bat</p>
                      </div>
                      <div className='flex items-center space-x-1'>
                      <GiHomeGarage/>
                          <p className='text-sm text-gray-400'>1 gar</p>
                      </div>
                  </div>
                  <h1 className='text-2xl font-semibold'>$98,000</h1>
                  <div className='flex items-center space-x-2'>
                  <IoLocationOutline/>
                  <p className='text-sm text-gray-600'>Port-au-Prince,, Haiti</p>
                  </div>
                  </div>

              </div>
          </div>
          <div className='w-full flex justify-center py-5'>
          <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
          </div>
      </div>
        </div>
        <div className="w-11/12 m-auto flex flex-col md:flex-row justify-between items-center md:space-x-10 space-y-10 md:space-y-0 py-10">
      <div className="flex md:space-x-10 space-x-4">
        <div className="mt-10 space-y-4 ">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Buy Dream Your House</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Sell Your House Easily</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
          <div className="w-48 flex flex-col items-center bg-white text-center  drop-shadow-2xl p-5 rounded-md">
            <MdHomeRepairService size={"1.8rem"} />
            <h1 className="text-xl font-bold">Good Services</h1>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              harum eius quaerat?
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-1/2 space-y-5">
        <h1 className="text-6xl font-bold">
          Know <span className="text-yellow-400">About us</span>{" "}
        </h1>
        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          consequuntur iusto voluptas dolorem possimus, atque eum omnis dolores
          cumque autem saepe molestias sapiente ipsa facere suscipit adipisci,
          ab quasi repudiandae doloremque doloribus? Delectus, dolorem quaerat.
        </p>
        <button className="px-5 py-2 rounded-md bg-yellow-400">
          Read more
        </button>
      </div>
    </div> 
    <div className=''>
        <div className='w-11/12 md:w-1/2 xl:w-1/3 m-auto text-center py-10'>
            <h1 className='text-4xl font-bold'>Best Deals Not To Be Missed</h1>
            <p className='text-xs p-4 text-gray-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque hic, nisi reiciendis itaque optio repellat commodi nihil rem explicabo, qui non debitis officiis consectetur sapiente repellendus.</p>
            </div>
        <div className="deals w-full  grid lg:grid-flow-col grid-row-2  gap-8">
            <div className="deal relative col-span-2 row-span-2">
                <img src={house1} alt="" className='rounded-xl w-full h-full object-cover'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
            <div className="deal relative col-span-1 row-span-2">
                <img src={house2} alt="" className='rounded-xl w-full h-full object-cover'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
            <div className="deal relative  col-span-1 row-span-1">
                <img src={house3} alt="" className='rounded-xl w-full h-full object-cover'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
            <div className="deal relative col-span-1 row-span-1">
                <img src={house4} alt="" className='rounded-xl w-full h-full object-cover'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
            <div className="deal relative col-span-1 row-span-1">
                <img src={house5} alt="" className='rounded-xl w-full h-full object-cover'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
            <div className="deal relative col-span-1 row-span-1">
                <img src={house6} alt="" className='rounded-xl'/>
                <div className='w-full absolute bottom-0 p-4 text-white bg-gradient-to-t from-black rounded-b-xl space-y-2'>
                    <h1 className='text-3xl font-bold'>PLACE</h1>
                    <p className='flex items-center space-x-2 text-sm'><IoLocationOutline/>Kissimmee.Florida US</p>
                </div>
            </div>
        </div>
    </div>
    </Home>
  )
}
export default Home;