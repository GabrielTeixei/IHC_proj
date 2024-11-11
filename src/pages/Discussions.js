import React from 'react'
import { PlusIcon } from "@heroicons/react/24/outline"
import { BookOpenIcon } from "@heroicons/react/24/outline"
import { Link } from 'react-router-dom';
import assets from '../constants/assets';

const Discussions = () => {
  return (
    <div className="container mx-auto px-4 mt-20 flex" >
      <div className="w-1/3">

        <div class="flex items-center hover:brightness-150 cursor-pointer">
          <button type="button" class="text-[#F6F1F1] bg-[#146C94]  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <PlusIcon class="h-6 w-6 text-white-500" />
          </button>
          <h2 className="flex-1 text-4xl text-left font-bold text-[#146C94]">New Discussion</h2>
        </div>

        <div className="h-1/3 mt-12">
          <h2 className="text-3xl font-bold mt-4 mb-12 text-[#146C94]">Discussions Started by You:</h2>
          <ul class=" mt-8 space-y-6 text-left text-gray-900 dark:text-gray-400">
            <li class="flex items-around text-xl hover:underline">
              <BookOpenIcon class="h-10 w-10  mr-4" />
              <p>What do you think about Leigh Bardugo's new book "Ninth House"?</p>
            </li>
            <p class="text-base text-gray-600 font-medium flex justify-center"> 21/05/2023</p>

            <li class="flex item-center text-3xl">
              <p class="mt-4"></p>
            </li>

            <li class="flex items-around text-xl hover:underline">
              <BookOpenIcon class="h-7 w-7 mr-4" />
              <p>What are your favourite genres and tropes?</p>
            </li>
            <p class="text-base text-gray-600 font-medium flex justify-center"> 12/01/2023</p>


            <li class="flex item-center text-3xl">
              <p class="mt-4"></p>
            </li>

            <li class="flex items-around text-xl hover:underline mt-4">
              <BookOpenIcon class="h-9 w-9 mr-4" />
              <p>
                My mother gifted me a book that I hate. What should I do?</p>
            </li>
            <p class="text-base text-gray-600 font-medium flex justify-center"> 14/11/2022</p>

          </ul>


          <div className="flex justify-center mt-20">
            <img className="w-12" src={assets.logononame} alt="logo"></img>
          </div>

        </div>


      </div>

      {/* Linha vertical */}
      <div className="border-l-2 h-auto my-8 mx-8"></div>

      {/* Coluna direita */}
      <div className="w-2/3 ml-4">
        <div class="flex flex-col">
          <div className="flex items-center mb-4">
            <form>
              <div class="flex">
                <label for="search-dropdown" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"></label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" class="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                  <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                    </li>
                    <li>
                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                    </li>
                    <li>
                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                    </li>
                    <li>
                      <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                    </li>
                  </ul>
                </div>
                <div class="relative w-full">
                  <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search " required></input>
                  <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-[#F6F1F1] bg-[#146C94] rounded-r-lg border border-black-700 hover:bg-[#19A7CE] focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>



          </div>
          <div className='flex flex-col items-left'>
            <div className="h-1/3 mt-2">
              <h2 className="mt-10 text-3xl font-bold mb-6 text-[#146C94]">Recommended:</h2>
              <ul class="mb-8 space-y-4 text-left text-gray-800 text-xl dark:text-gray-400">
                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src={assets.fotoUser} alt="user" /><p class="font-medium relative left-1 text-xl">Jessica Lopez</p>
                  <h3 className="text 2x1 font-bold hover:underline"><Link to="/user">@ihatemyl1f3</Link></h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />Best books published in 2023 (my personal ranking)</p>
                </div>


                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/736x/d7/9e/f5/d79ef5dd27feebf964daf67c6e186516.jpg" alt="Sarah" />
                  <p class="font-medium relative left-1 text-xl">Sarah Lee-Roy</p>
                  <h3 className="text 2x1 font-bold">@KaazBrekkerDaddy</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />Atlas Six movie adaptation?! What are your thougths?</p>
                </div>


                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/736x/40/7c/1d/407c1d15cf6c22de8e69519f909dd055.jpg" alt="Rose" />
                  <p class="font-medium relative left-1 text-xl">Rose</p>
                  <h3 className="text 2x1 font-bold hover:underline">@svx_rosxs</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />My friends don't like to read. :( Do you have some tips to change their minds?</p>
                </div>
              </ul>
              <div class="flex justify-center">
                <button type="button" class="text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-2 mb-20">View More</button>
              </div>
            </div>
            <div className="h=1/3 mt-2">
              <h2 className="text-3xl font-bold mb-6 text-[#146C94]">From Your People you Follow:</h2>
              <ul class="mb-8 space-y-4 text-left text-gray-800 text-xl dark:text-gray-400">
                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-114 h-14" src="https://i.pinimg.com/564x/11/03/aa/1103aae55af95094ea46dc127c9b5340.jpg" alt="user" />
                  <p class="font-medium relative left-1 text-xl">emma! </p>
                  <h3 className="text 2x1 font-bold">@sillysayi</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />Let's review "Pride and Prejudice" by Jane Austen together</p>
                </div>


                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/564x/01/f4/df/01f4dfd8451ca2a241562995db762ce2.jpg" alt="army" />
                  <p class="font-medium relative left-1 text-xl">Jenny </p>
                  <h3 className="text 2x1 font-bold ">@CandyPlantsSun</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />What are the best books to gift someone who is into dark academia?</p>
                </div>
                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/564x/71/1e/f1/711ef11c86091241fa2d307d2a7b3563.jpg" alt="gatinhocomoculos" />
                  <p class="font-medium relative left-1 text-xl">inez is reading</p>
                  <h3 className="text 2x1 font-bold ">@rosalix</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />How are your 2023 Reading Challenges going?</p>
                </div>
              </ul>
              <div class="flex justify-center">
                <button type="button" class="text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-2 mb-20 ">View More</button>
              </div>
            </div>
            <div className="h=1/3 mt-2">
              <h2 className="text-3xl font-bold mb-6 text-[#146C94]">Popular Right Now:</h2>
              <ul class="mb-8 space-y-4 text-left text-gray-800 text-xl dark:text-gray-400">

                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/736x/1f/77/51/1f77518d41b8a5c462d931075df1daa7.jpg" alt="luiz" />
                  <p class="font-medium relative left-1 text-xl">Luiz </p>
                  <h3 className="text 2x1 font-bold">@another_sl4y</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />What are your expectations for the next book of the "Broken" saga?</p>
                </div>

                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/564x/84/3b/23/843b23f23401481f3c6ea52d8218e171.jpg" alt="user" />
                  <p class="font-medium relative left-1 text-xl">Yvonne Choi</p>
                  <h3 className="text 2x1 font-bold ">@atlasD9</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />J.K. Rowling canceled! Let's talk about it!</p>
                </div>


                <li class="flex items-center space-x-2 hover:underline">
                  <img class="rounded-full w-14 h-14" src="https://i.pinimg.com/564x/ff/4f/67/ff4f670678a0284004882c385859f373.jpg" alt="user" />
                  <p class="font-medium relative left-1 text-xl">Mel ★</p>
                  <h3 className="text 2x1 font-bold hover:underline">@melanie_smith</h3>
                </li>
                <div>
                  <p className="flex justify-normal ml-12 mb-10 ml-4 hover:underline"><BookOpenIcon class="h-6 w-6 text-900 relative right-2 " />Books being realesed in 2024 that I'm very excited about</p>
                </div>
              </ul>
              <div class="flex justify-center">
                <button type="button" class="text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] font-bold focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-base px-5 py-2.5 text-center mr-2 mb-20">View More</button>
              </div>
            </div>
            <div className="flex justify-center mt-20 mb-10">
              <img className="w-12 " src={assets.logononame} alt='logo'></img>
            </div>

            <div class="mb-24">

            </div>
          </div>
        </div>
      </div>
      <div class="mb-12">

      </div>
    </div>
  )
}

export default Discussions