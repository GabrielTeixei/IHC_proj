import React, { useState } from "react";
import assets from "../constants/assets";
import { Link } from "react-router-dom";

const Bookshelves = () => {
  
  const [showPopup, setShowPopup] = useState(false);
  const handleImageClick = () => {
    setShowPopup(true);
  };
  const [showPopup2, setShowPopup2] = useState(false);
  const handleImageClick2 = () => {
    setShowPopup2(true);
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl ml-4 text-left font-bold mb-0 pl-16 ml-6 mt-16 px-3 text-[#146C94]">Your Bookshelves:</h1>
        <div className="border-b-2 h-auto my-4 mx-8"></div>
      </div>
      <div class="w-full">
        <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-6 ">
          {/* <!--Card 1--> */}
          <div class="cursor-pointer hover:opacity-70 px-5 py-36 items-center h-4/5  border  bg-[#F6F1F1] border-[#146C94] " onClick={handleImageClick}>
            <p className="text-9xl text-[#146C94] text-center">+</p>
            <div className="text-center">
            <button class="w-full text-[#146C94] font-bold text-2xl mb-2 text-center">
              Create New Bookshelf
            </button>
            </div>
          </div>
          {/* <!--Card 3--> */}
          <Link to="/">
            <div>
            <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/ba/bb/e5/babbe5991005203257f3ff7968473119.jpg" alt="" />
              <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline cursor-pointer">Matilde in Books</div>
                <div class="flex items-center">
                </div>
              </div>
            </div>
          </Link>
          {/* <!--Card 4--> */}
          <div><Link to="/BookshlefExemplo">
            <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/98/3e/9f/983e9f418d5517a6fd5a6ed1576c6827.jpg" alt="Top Recs" />
            <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg ">
              <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline cursor-pointer">Top Recs</div>
              <div class="flex items-center">

              </div>
            </div></Link>
          </div>
          {/* <!--Card 5--> */}
          <div>
            <div>
              <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/db/cd/0a/dbcd0ae7143b068dab012601969ec880.jpg" alt="Translated lit I love" />
              <div class="px-6 py-4 bg-[#AFD3E2] rounded-b-lg ">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline cursor-pointer">Translated lit I love</div>
                <div class="flex items-center">
                </div>
              </div>
            </div>

            <div class="px-2 py-2">
            </div>

            {showPopup && (
              <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10">
                <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
                <div className="bg-white z-10 rounded-lg overflow-y-auto">
                  <div className="p-4  text-center">
                    <div class="flex ">

                      <div class="flex justify-between items-center mx-auto text-center p-3">
                        <p class="text-2xl font-bold">Create a new Bookshelf</p>

                      </div>
                    </div>
                    <div className="flex justify-between items-center pb-3 ">
                      <div class="w-80 px-5 py-36 items-center h-4/5  border  bg-[#F6F1F1] border-gray-400 hover:opacity-70 cursor-pointer" >
                        <p className="text-9xl text-center">+</p>
                        <div className="text-center ">
                        <button className="w-full cursor-pointer hover:brightness-150 font-bold text-2xl mb-2 text-center">
                          Add Cover
                        </button>
                        </div>
                      </div>
                    </div>

                    <p class="text-2xl font-bold text-center" >Bookshelf Name</p>
                    <input class="border border-gray-400 p-2 mb-4 w-full block" placeholder="Choose a name..." />
                    <p class="text-2xl font-bold text-center">Description <i>(optional)</i></p>
                    <input class="border border-gray-400 p-2 mb-4 w-full block" placeholder="Write a description..." />
                    <div className="flex justify-end pt-2">
                      <Link to="/Addbook">
                        <button className="bg-[#19A7CE] hover:bg-[#AFD3E2] text-white py-2 px-4 rounded-lg " onClick={handleImageClick2}>
                          Add
                        </button>
                      </Link>
                      <button
                        onClick={() => setShowPopup(false)}
                        class="bg-[#146C94] hover:bg-[#AFD3E2] text-white py-2 px-4 rounded-lg mx-3">
                        Close
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/50/34/c2/5034c2593ff2e046dafd4d869f694c1f.jpg" alt="Dark Academia Books" />
            <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg ">
              <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline">Dark Academia Books</div>
              <div class="flex items-center">

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-32 mb-32">
        <img class="w-full hover:opacity-80" src="" alt="" />

      </div>
      <div>
        <h1 className="text-4xl ml-4 text-left font-bold mb-0 pl-16 ml-6 mt-8 px-3 text-[#146C94]">Bookshelves from People you Follow:</h1>
        <div className="border-b-2 h-auto my-4 mx-8"></div>
        <div class="w-full">
          <div className="flex justify-between">
            <div className="flex justify-right ml-32 mt-12"><img
              className="rounded-full w-16 h-16"
              src="https://i.pinimg.com/564x/f0/f7/f4/f0f7f4e3a28296493f816a0125edf88c.jpg"
              alt="user"
            />
              <h3 className="relative left-4 text-2xl space-y-16 mt-3">
                <p className="hover:underline">Rita
                  <span className="font-bold"> @DarkAcademic</span>'s public bookshelves:</p>
              </h3>
            </div>
            <div className="flex mr-52 mt-12"><img
              className="rounded-full w-16 h-16"
              src="https://i.pinimg.com/564x/32/16/63/3216639f549eaa6fdcb174830d574f15.jpg"
              alt="user"
            />
              <h3 className="relative left-4 text-2xl space-y-16 mt-3">
                <p className="hover:underline">martha
                  <span className="font-bold"> @megumireads</span>'s public bookshelves:</p>
              </h3>
            </div>
          </div>
          <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-6 ">
            <div class="relative left-24">

              <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/cf/cd/38/cfcd38837e00add82fb6606b960c1b15.jpg" alt="Goth Books" />
              <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline">Gothic Literature: Best Gothic Books</div>
                <div class="flex items-center">
                </div>
              </div>
            </div>

            <div class="relative left-24">
              <img class="w-full hover:opacity-80" src="https://i.pinimg.com/564x/a6/34/3a/a6343aba1d25da0fe357ea825fc4bd6c.jpg" alt="Religious Trauma Books" />
              <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline">Books that involve Religious Trauma</div>
                <div class="flex items-center">
                </div>
              </div>
            </div>

            <div class="relative left-24">
              <img class="w-full hover:opacity-80" src="" alt="" />
              <div class="px-6 py-4  bg-transparent rounded-b-lg">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline"></div>
                <div class="flex items-center">
                </div>
              </div>
            </div>

            <div class="relative left-24">
              <img class="w-full hover:opacity-80" src="https://i.pinimg.com/736x/71/7d/3c/717d3cd73769c266a4bb1d6a53103324.jpg" alt="Feel-Good Books" />
              <div class="px-6 py-4  bg-[#AFD3E2] rounded-b-lg">
                <div class="mb-2 text-2xl font-bold leading-center text-center hover:underline">feel-good books</div>
                <div class="flex items-center">
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-32 mb-32">
            <img className="w-24 " src={assets.logononame} alt=""></img>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Bookshelves;
