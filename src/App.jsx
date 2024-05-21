import "./App.css";

export default function App() {
  return (
    <>
      <div className="navbar-background min-h-screen flex flex-col relative">
        <div className="overlay absolute inset-0 bg-black opacity-50"></div>
        <nav className="bg-gray-800 bg-opacity-50 p-4 relative z-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">
            Event<span className="text-[#FF004D]">Sphere</span>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-gray-300 hover:text-white font-bold ani">Home</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">About</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Speakers</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Venue</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Hotels</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Gallery</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Sponsors</a>
              <a href="#" className="text-gray-300 hover:text-white font-bold">Contact</a>
              <button class="bg-[#FF004D] border border-[#FF004D] text-white py-1 px-5 rounded-[50px] transition-all duration-300 delay-75 hover:bg-transparent  hover:border-[#FF004D]">
                Buy Tickets
              </button>
            </div>
          </div>
        </nav>
        <div className="flex-grow flex flex-col justify-center items-center text-center text-white px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-[#FF004D]">Event</span> Booking Destination
          </h1>
          <p className="text-lg md:text-2xl mb-6">
           <span className="text-[#C7B7A3]"> Discover & Book Upcoming Events Easily</span>
          </p>
          <div className="text-md md:text-lg">
            <p className="text-[#C7B7A3]">June 24-26, 2024</p>
            <p className="text-[#C7B7A3]">New York, NY</p>
          </div>
          <button class="border border-[#FF004D] text-white py-1 px-5 rounded-[50px] transition-all duration-300 delay-75 hover:bg-transparent  hover:bg-[#FF004D]">
            About The Event
          </button>
          </div>
    </div>
    <p className="text-center font-semibold mt-10 text-[50px] text-[#006a6ade]">Event Speakers</p>
    <p className="text-[#8a8888c5] text-center">Here are some of our speakers</p>
    <div className="w-[75px] h-[5px] bg-[#006A6ADE] ml-[630px] mt-[15px]"></div>
    <div className="container flex flex-wrap justify-center items-center h-auto w-full   p-10">
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0  bg-[#57c1ebad] text-center w-full  text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435]">Quas alias incidunt</div></div>
      </div>
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://i.pinimg.com/564x/05/2f/ad/052fadb14a0a48ba5f147cb41a374ccb.jpg')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0  bg-[#57C1EBAD] text-center w-full  text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435] ">Quas alias incidunt</div></div>
      </div>
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://i.pinimg.com/564x/e9/56/02/e956023d9c714ce17e7bdad280745e88.jpg')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0  bg-[#57C1EBAD] text-center w-full  text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435]">Quas alias incidunt</div></div>
      </div>
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://i.pinimg.com/564x/c6/f9/4e/c6f94e62d66462970bf0ce17fe78b5b1.jpg')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0  bg-[#57C1EBAD] text-center w-full text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435]">Quas alias incidunt</div></div>
      </div>
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://i.pinimg.com/564x/05/c7/1b/05c71be28294b22dc5e85da3101ff91f.jpg')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0  bg-[#57C1EBAD] text-center w-full  text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435]">Quas alias incidunt</div></div>
      </div>
      <div className="hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-4 p-4 bg-[url('https://i.pinimg.com/564x/21/c5/3d/21c53d6a58e6ba16bf46f732f1ffc6ce.jpg')] bg-cover bg-center bg-scroll">
        <div className="rounded-md absolute bottom-0 p-1 left-0 bg-[#57C1EBAD] text-center w-full  text-[25px]">Brenden Legros <div className="font-regular text-[15px] text-[#333435]">Quas alias incidunt</div></div>
      </div>
     </div>
     <p className="text-center font-semibold mt-10 text-[50px] text-[#006a6ade]">Event Venue</p>
    <p className="text-[#8a8888c5] text-center">Event venue location info and gallery</p>
    <div className="w-[75px] h-[5px] bg-[#006A6ADE] ml-[630px] mt-[15px] mb-[30px]"></div>
     <div className="container flex flex-wrap justify-center items-center h-auto w-full p-1">
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/ed/49/a3/ed49a36e188a26dddc546535857cd505.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/1f/ab/52/1fab520472749dc79740eca387663d32.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/ca/2c/a6/ca2ca68fb2c31dda1da57913da0d8dbc.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/a4/4e/ef/a44eef0cf384b6bca35766502791938b.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/4c/cf/7e/4ccf7ea97eb4b0a07ec1e4fdff26b266.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/c6/76/52/c67652a68899d3c2c8d9837c2fe418ea.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/a8/75/04/a8750450d804b074d7bf7020b1e0867a.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      <div className="overflow-hidden inline-block rounded-md  ">
      <div className="hover:scale-125 transition-all duration-500 hover:drop-shadow-xl rounded-md relative w-[300px] h-[300px] m-1 p-1 bg-[url('https://i.pinimg.com/564x/d8/7c/82/d87c822b9e18016a2b6bcb50e8e3f1ab.jpg')] bg-cover bg-center bg-scroll">
      </div>
      </div>
      </div>
      <p className="text-center font-semibold mt-10 text-[50px] text-[#006a6ade]">Hotels</p>
    <p className="text-[#8a8888c5] text-center">Here are some nearby hotels</p>
    <div className="w-[75px] h-[5px] bg-[#006A6ADE] ml-[630px] mt-[15px] mb-[30px]"></div>
      <div class="flex justify-around space-x-4">
  <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition w-[300px] h-[300px]" href="#">
    <div class="relative pt-[60%] rounded-t-xl overflow-hidden">
      <img class="size-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl w-full h-full" src="https://i.pinimg.com/564x/bd/89/7a/bd897a03cd3104fbb7cb82794758b002.jpg" alt="Hotel 1"/>
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800">
        Hotel 1
      </h3>
      <div class="mt-1 text-yellow-500">
        ⭐⭐⭐⭐⭐
      </div>
      <p class="mt-2 text-gray-500">
      0.4 Mile from the Venue
      </p>
    </div>
  </a>
  
  <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition w-[300px] h-[300px]" href="#">
    <div class="relative pt-[60%] rounded-t-xl overflow-hidden">
      <img class="size-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl w-full h-full" src="https://i.pinimg.com/564x/dc/07/1e/dc071ed232a183b53dd796e717eab3ef.jpg" alt="Hotel 2"/>
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800">
        Hotel 2
      </h3>
      <div class="mt-1 text-yellow-500">
        ⭐⭐⭐⭐
      </div>
      <p class="mt-2 text-gray-500">
      0.5 Mile from the Venue
      </p>
    </div>
  </a>
  
  <a class="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition w-[300px] h-[300px]" href="#">
    <div class="relative pt-[60%] rounded-t-xl overflow-hidden">
      <img class="size-full absolute top-0 left-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl w-full h-full" src="https://i.pinimg.com/564x/ab/6c/68/ab6c68cd04ea909620938f90293b50f9.jpg" alt="Hotel 3"/>
    </div>
    <div class="p-4 md:p-5">
      <h3 class="text-lg font-bold text-gray-800">
        Hotel 3
      </h3>
      <div class="mt-1 text-yellow-500">
        ⭐⭐⭐⭐
      </div>
      <p class="mt-2 text-gray-500">
      0.6 Mile from the Venue
      </p>
    </div>
  </a>
</div>

<p className="text-center font-semibold mt-10 text-[50px] text-[#006a6ade]">Gallery</p>
    <p className="text-[#8a8888c5] text-center">Check our gallery from the recent events</p>
    <div className="w-[75px] h-[5px] bg-[#006A6ADE] ml-[630px] mt-[15px] mb-[30px]"></div>
      <div class="grid gap-4">
        <div>
            <img class="h-auto w-[80%] rounded-lg ml-[10%]" src="https://i.pinimg.com/736x/ad/32/b1/ad32b1e0d5d26a8ea9eda7bf9ba8375d.jpg" alt=""/>
        </div>
        <div class="grid grid-cols-5 gap-2">
            <div>
                <img class="h-auto w-full rounded-lg ml-[10px]" src="https://i.pinimg.com/236x/e8/9b/13/e89b137f41ef45fa7411cc98a251e908.jpg" alt=""/>
            </div>
            <div>
                <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/564x/e5/5b/d0/e55bd0f09f409f15fe638e507e349c1f.jpg" alt=""/>
            </div>
            <div>
                <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/564x/5b/0a/37/5b0a37cc3243dec0dd41238ddab29d9e.jpg" alt=""/>
            </div>
            <div>
                <img class="h-auto w-full rounded-lg" src="https://i.pinimg.com/564x/a2/86/19/a286191b33716b715853c2c4d7ab3e89.jpg" alt=""/>
            </div>
            <div>
                <img class="h-auto w-full rounded-lg mr-[10px]" src="https://i.pinimg.com/564x/f3/9f/a5/f39fa50d9f8c04be4c8b12cad69b8ce7.jpg" alt=""/>
            </div>
        </div>
      </div>
      <p className="text-center font-semibold mt-10 text-[50px] text-[#006a6ade]">Buy Tickets</p>
    <div className="w-[75px] h-[5px] bg-[#006A6ADE] ml-[630px] mt-[15px] mb-[30px]"></div>
        <div class="flex flex-wrap justify-around">
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-0">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">STANDARD ACCESS</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">150</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Regular Seating</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Coffee Break</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Custom Badge</span>
            </li>
            <li class="flex line-through decoration-gray-500">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Community Access</span>
            </li>
            <li class="flex line-through decoration-gray-500">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Workshop Access</span>
            </li>
            <li class="flex line-through decoration-gray-500">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">After Party</span>
            </li>
           
        </ul>
        <button type="button" class="text-white bg-[#FF004D]  focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Buy Now</button>
    </div>

    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-10">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">PRO ACCESS</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">250</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Regular Seating</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Coffee Break</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Custom Badge</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Community Access</span>
            </li>
            
            <li class="flex line-through decoration-gray-500">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">Workshop Access</span>
            </li>
            <li class="flex line-through decoration-gray-500">
                <svg class="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 ms-3">After Party</span>
            </li>
           
        </ul>
        <button type="button" class="text-white bg-[#FF004D]  focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Buy Now</button>
    </div>
    <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 ml-10">
        <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">PREMIUM ACCESS</h5>
        <div class="flex items-baseline text-gray-900 dark:text-white">
            <span class="text-3xl font-semibold">$</span>
            <span class="text-5xl font-extrabold tracking-tight">350</span>
        </div>
        <ul role="list" class="space-y-5 my-7">
            <li class="flex items-center">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Regular Seating</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Coffee Break</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Custom Badge</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Community Access
</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">Workshop Access</span>
            </li>
            <li class="flex">
                <svg class="flex-shrink-0 w-4 h-4 text-[#006A6ADE] dark:text-[#006A6ADE]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                </svg>
                <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">After Party</span>
            </li>
            
           
        </ul>
        <button type="button" class="text-white bg-[#FF004D]  focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Buy Now</button>
    </div>
</div>
<div className="bg-[#000000cc] h-[100px] w-full text-white text-center pt-[10px]">
   <p className="mt-[20px]">© Copyright Event<span className="text-[#FF004D]">Sphere</span>. All Rights Reserved</p>
   <p>Designed by <span className="text-[#189797de] font-semibold">VaishnaviMankala</span></p>
</div>

    </>
  );
}
