import React from 'react'
import assets from '../constants/assets';


const ReadersPage = () => {
  return (
    <div className="container mx-auto px-4 mt-20 flex" >
      <div className="w-1/3">

        <div className="h-1/3 mt-12">a
          <h2 className="text-5xl text-center font-bold mt-4 mb-12 text-[#146C94]">May Challenge:</h2>
          <h2 className="text-2xl text-center font-bold mt-4 mb-12 text-[#19A7CE]">BookVault's <span className='border-b-2 border-[#19A7CE]'>Top Readers</span> this month:</h2>
          <ul class=" mt-8 space-y-6 text-left text-gray-900 dark:text-gray-400">
            <li class="flex flex-row items-center text-xl">
              <h1 className="text-4xl text-center font-bold mr-6 text-[#146C94] ">1. </h1>
              <div class="flex justify-normal ml-12 hover:underline cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full hover:opacity-80"
                  src="https://i.pinimg.com/236x/07/a4/32/07a432d61671dc1acf075fb60ff358f7.jpg"
                  alt="Alex"
                />
                <p className='flex justify-normal p-2'><span className='ml-2 mr-1 font-bold'>Alex!!</span> @alecsandrabook</p>
              </div>
            </li>
            <p className='text-center text-xl font-semibold text-[#146C94]'>read 37 books this month</p>
            <li class="flex item-center text-3xl">
              <p class="mt-5"></p>
            </li>

            <li class="flex flex-row items-center text-xl">
              <h1 className="text-4xl text-center font-bold mr-6 text-[#146C94] ">2. </h1>
              <div class="flex justify-normal ml-12 hover:underline cursor-pointer">

                <img
                  className="w-12 h-12 rounded-full hover:opacity-80"
                  src="https://i.pinimg.com/236x/7d/f7/17/7df71771a2a909b34a4d0c41f0742d43.jpg"
                  alt="Samantha"
                />

                <p className='flex justify-normal p-2'><pspan className='ml-2 mr-1 font-bold'>samantha</pspan> @sammyausten</p>
              </div>
            </li>
            <p className='text-center text-xl font-semibold text-[#146C94]'>read 31 books this month</p>
            <li class="flex item-center text-3xl">
              <p class="mt-5"></p>
            </li>


            <li class="flex flex-row items-center text-xl">
              <h1 className=" text-4xl font-bold mr-6 text-[#146C94] ">3. </h1>
              <div class="flex justify-normal ml-12 hover:underline cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full hover:opacity-80"
                  src="https://i.pinimg.com/236x/07/a4/32/07a432d61671dc1acf075fb60ff358f7.jpg"
                  alt="Artie"
                />

                <p className='flex justify-normal p-2'><span className='ml-2 mr-1 font-bold'>ARTIE</span> @ArthurLewis21</p>
              </div>
            </li>
            <p className='text-center text-xl font-semibold text-[#146C94]'>read 29 books this month</p>
            <li class="flex item-center text-3xl">
              <p class="mt-5"></p>
            </li>


            <li class="flex flex-row items-center text-xl">
              <h1 className="text-4xl text-center font-bold mr-6 text-[#146C94] ">4. </h1>
              <div class="flex justify-normal ml-12 hover:underline cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full hover:opacity-80"
                  src="https://i.pinimg.com/236x/a8/ed/00/a8ed00b775891db56140f80d9fef3fdb.jpg"
                  alt="Esther"
                />

                <p className='flex justify-normal p-2'><span className='ml-2 mr-1 font-bold'>esther</span> @frankengoth</p>
              </div>
            </li>
            <p className='text-center text-xl font-semibold text-[#146C94]'>read 22 books this month</p>
            <li class="flex item-center text-3xl">
              <p class="mt-5"></p>
            </li>


            <li class="flex flex-row items-center text-xl">
              <h1 className="text-4xl text-center font-bold mr-6 text-[#146C94] ">5. </h1>
              <div class="flex justify-normal ml-12 hover:underline cursor-pointer">
                <img
                  className="w-12 h-12 rounded-full hover:opacity-80"
                  src="https://i.pinimg.com/236x/9d/61/78/9d61788824e25df8b8b88e05f09d5a71.jpg"
                  alt="Lucille"
                />
                <p className='flex justify-normal p-2'><span className='ml-2 mr-1 font-bold'>Lucille</span> @LuciLire</p>
              </div>
            </li>
            <p className='text-center text-xl font-semibold text-[#146C94]'>read 19 books this month</p>
            <li class="flex item-center text-3xl">
              <p class="mt-5"></p>
            </li>
          </ul>
          <div className="flex justify-center mt-6">
          </div>
          <div>
            <button type="button" class="flex ml-44 text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-2 mb-20">View More</button>
          </div>


          <div className="flex justify-center mt-20">

            <img className="w-12" src={assets.logononame} alt="BookVault Logo" />
          </div>
        </div>

      </div>


      {/* Linha vertical */}
      <div className="border-l-2 h-auto my-8 mx-8"></div>

      {/* Coluna direita */}
      <div className="w-2/3 ml-4">
        <h1 className="text-4xl text-center font-bold mt-4 mb-12 text-[#146C94]">From People you Follow:</h1>


        <div className="text-start">
          <div className="flex justify-normal"><img
            className="rounded-full w-14 h-14 hover:opacity-80"
            src="https://i.pinimg.com/564x/f0/f7/f4/f0f7f4e3a28296493f816a0125edf88c.jpg"
            alt="user" />
            <p className="ml-4 text-2xl space-y-16 mt-3 "> <span className="hover:underline cursor-pointer "><span class="font-bold">Rita</span> @DarkAcademic</span> <span class="ml-1 font-light text-gray-600">created a new Bookshelf:{" "}</span></p>
          </div>
          <div className="flex justify-right ml-12">
            <img src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png" className="relative top-8 w-10 h-10" alt=""></img></div>
          <p className="relative left-24 text-xl italic hover:underline cursor-pointer">
            Gothic Literature: Best Gothic Books</p>
        </div>

        <div className="mt-10 w-full bg-gray-200 h-[0.1rem]"></div>


        <div className="text-start mt-10">
          <div className="flex justify-normal"><img
            className="rounded-full w-14 h-14 hover:opacity-80"
            src="https://i.pinimg.com/564x/32/16/63/3216639f549eaa6fdcb174830d574f15.jpg"
            alt="user" />
            <p className="ml-4 text-2xl space-y-16 mt-3 "> <span className="hover:underline cursor-pointer "><span class="font-bold">martha</span> @megumireads</span> <span class="ml-1 font-light text-gray-600">created a new Bookshelf:{" "}</span></p>
          </div>
          <div className="flex justify-right ml-12">
            <img src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png" className="relative top-8 w-10 h-10" alt=""></img></div>
          <p className="relative left-24 text-xl italic hover:underline cursor-pointer">
            feel-good books</p>
        </div>

        <div className="mt-10 w-full bg-gray-200 h-[0.1rem]"></div>



        <div className="text-start mt-10">
          <div className="flex justify-normal"><img
            className="rounded-full w-14 h-14 hover:opacity-80"
            src="https://i.pinimg.com/236x/c7/0b/eb/c70bebe07598c43a1dd6ac44a8a9f6e5.jpg"
            alt="user" />
            <p className="ml-4 text-2xl space-y-16 mt-3 "> <span className="hover:underline cursor-pointer "><span class="font-bold">teddy</span> @theoreadin</span> <span class="ml-1 font-light text-gray-600">started reading:</span></p>
          </div>
          <div className=" ml-12">
            <img
              src="https://img.wook.pt/images/aristotle-and-dante-discover-the-secrets-of-the-universe-benjamin-alire-saenz/MXwyNTExNzE0OHwyMTMxMTgzNHwxNjI1MDYxOTE4MDAw/500x"
              className="relative left-12 w-64 hover:opacity-70"
              alt="" />
            <div className="relative left-12 mt-4 text-left">
              <h1 className="text-2xl "><p className="hover:underline cursor-pointer"><i><span style={{ fontWeight: 'bold' }} >Aristotle and Dante Discover the Secrets of the Universe</span></i></p>
              </h1>
              <p className="text-lg">Pages: 390</p>
              <p className="text-lg">started reading: 21/05/2023</p>
            </div>
          </div>

          <div className="mt-10 w-full bg-gray-200 h-[0.1rem]"></div>



          <div className="text-start mt-10">
            <div className="flex justify-normal"><img
              className="rounded-full w-14 h-14 hover:opacity-80"
              src="https://i.pinimg.com/564x/41/8c/57/418c57d0aeac9e12270abc8d074b0983.jpg"
              alt="user" />
              <p className="ml-4 text-2xl space-y-16 mt-3 "> <span className="hover:underline cursor-pointer "><span class="font-bold">SI</span> @simonearth</span> <span class="ml-1 font-light text-gray-600">started a new Discussion:{" "}</span></p>
            </div>
            <div className="flex justify-right ml-12"><img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" className="relative left-4 top-7 w-8 h-8" alt="" ></img></div>
            <p className="relative left-24 text-xl ml-2 hover:underline cursor-pointer">
              Actually good BookTook books?</p>
          </div>

          <div className="mt-10 w-full bg-gray-200 h-[0.1rem]"></div>


          <div className="text-start mt-10">
            <div className="flex justify-normal"><img
              className="rounded-full w-14 h-14 hover:opacity-80"
              src="https://i.pinimg.com/564x/11/03/aa/1103aae55af95094ea46dc127c9b5340.jpg"
              alt="user" />
              <p className="ml-4 text-2xl space-y-16 mt-3 "> <span className="hover:underline cursor-pointer "><span class="font-bold">emma</span> @sillysayi</span> <span class="ml-1 font-light text-gray-600">started a new Discussion:{" "}</span></p>
            </div>
            <div className="flex justify-right ml-12"><img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" className="relative left-4 top-7 w-8 h-8" alt="" ></img></div>
            <p className="relative left-24 text-xl ml-2 hover:underline cursor-pointer">
              Let's review "Pride and Prejudice" by Jane Austen together</p>
          </div>

          <div className="mt-10 w-full bg-gray-200 h-[0.1rem]"></div>

        </div>
        <div class="mb-12">
        </div>
      </div>
    </div>
  )
}

export default ReadersPage