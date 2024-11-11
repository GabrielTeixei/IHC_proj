import React, { useState } from 'react';
import assets from '../constants/assets';
import pessoa from "../constants/pessoa.jpeg";


const BookPageLittleWomen = () => {
  const [showStars, setShowStars] = useState([false, false, false, false, false]);

  const handleStarClick = (starIndex) => {
    const updatedStars = showStars.map((value, index) => index <= starIndex);
    setShowStars(updatedStars);
  };

  const [showText, setShowText] = useState(false);
  const [pageNumber, setPageNumber] = useState(23);
  const [pageNumberTotal] = useState(570);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };


  const handleButtonClickUpdate = () => {
    setShowText(true);
  }
  const handleModalSubmitTotal = (event) => {
    event.preventDefault();
    const newPageNumber = event.target.elements.pageNumber.value;
    setPageNumber(newPageNumber);
    setShowText(false);
  }

  const addComment = () => {
    if (newComment.trim() !== '') {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment('');
    }
  };
  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      addComment();
    }
  };

  const handleButtonClick = () => {
    addComment();
  };

  return (
    <div className="container mx-auto  px-4 mt-20 flex">
      <div className="w-1/3 m-16" >
        <div className="flex items-start">
          <div className="mt-4 flex flex-col">
            <img className="w-96 h-1/4 mx-auto" src="https://m.media-amazon.com/images/I/91l1EHFs8dL.jpg"></img>
            <h1 className="text-3xl font-bold text-center mt-2">Little Women</h1>
            <h2 className="text-xl text-slate-500 text-center">by Louisa May Alcott</h2>
            <div class="flex justify-center mt-0">
              <button class="h-12 m-2 text-lg bg-[#F6F1F1] hover:underline text-[#146C94] font-medium py-2 px-4 rounded-full">Change Edition</button>
            </div>
            <p class="text-2xl mt-4 mb-0 font-bold text-[#146C94] text-center">Your rating:</p>

            <div class="flex items-center mx-auto mt-2">
              {showStars.map((showStar, index) => (
                <svg
                  key={index}
                  aria-hidden="true"
                  className={`w-8 h-8 ${showStar ? 'text-yellow-400' : 'text-gray-400'
                    }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleStarClick(index)}
                >
                  <title>Rating star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              ))}
            </div>
            <div className="flex justify-center items-center mt-12">
              <p className="text-2xl font-bold text-[#146C94] text-center">Average Rating:</p>
            </div>
            <div class="flex justify-center items-center">
              <svg aria-hidden="true" class="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p class="ml-2 text-xl font-bold text-gray-900">4.95</p>
              <span class="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <a href="#" class="text-xl font-medium text-gray-900 underline hover:no-underline dark:text">1 273 reviews</a>
            </div>

            <div class="flex justify-center mt-6">
              <button class="h-12  m-2 text-lg bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] font-bold py-2 px-4 rounded-full">Add to Bookshelf</button>
            </div>

          </div>
        </div>
      </div>
      {/*coluna vertical*/}

      <div className="border-l-2 h-auto my-8 mx-1"></div>
      {/*outro lado*/}
      <div className="w-2/3 m-16">

        <div class="flex justify-around">
          <div class="flex justify-around items-center">
            <select className="border border-[#146C94] bg-transparent rounded-lg p-3 mb-4 text-xl font-bold text-[#146C94] px-6" value="Currently Reading">
              <option value="Want to Read">Want to Read</option>
              <option value="Currently Reading">Currently Reading </option>
              <option value="Finished Reading">Finished Reading</option>
            </select>

          </div>
          <div className='py-2'>
            <p className="p-3 text-xl text-center font-bold text-[#146C94]">
              Page <span class=" border border-[#AFD3E2] border-opacity-20 bg-opacity-30 border-x-8 bg-[#AFD3E2] font-medium text-center text-gray-500 ml-1 mr-1">  {pageNumber}</span> of {pageNumberTotal}
            </p>
            <button className="border border-[#146C94] bg-transparent rounded-lg p-2 mb-4 ml-6 text-xl font-bold text-[#146C94] px-5" onClick={handleButtonClickUpdate}>
              Update Page
            </button>

          </div>
        </div>
        <div className="relative left-96 mt-20 mb-10">
        </div>
        {showText && (
          <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className="absolute z-10 bg-gray-100 rounded-md p-4 flex flex-col items-start">
              <h4 className="text-3xl font-bold mb-4">
                Little Women{" "}
                <span className="text-xl text-slate-500 ">by Louisa May Alcott</span>
              </h4>
              <div className="flex items-center">
                <img
                  src="https://m.media-amazon.com/images/I/91l1EHFs8dL.jpg"
                  className="mx-auto max-w-[500px]"
                />
                <div className="ml-4">
                  <form onSubmit={handleModalSubmitTotal} >
                    <h4 className="mt-6 text-3xl font-semibold ">Current page:</h4>
                    <input
                      type="number"
                      name="pageNumber"
                      className="border border-gray-400 p-2 py-3 text-xl mr-2" placeholder={pageNumber}
                    />
                    <button
                      class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 bg-[#AFD3E2] hover:bg-[#19A7CE]  rounded mt-4  py-1 px-2 border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowText(false)}>
                      <span class="text-gray-600" >×</span>
                    </button>
                    <button
                      type="submit"
                      className="relative top-60 
                    bg-[#146C94] hover:bg-[#19A7CE] text-lg font-bold text-white py-4 px-6 rounded-lg mt-4 ">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
          </div>
        )}
        <div className="flex flex-col items-start">

          <h1 className='text-4xl font-bold text-[#146C94] mt-8 text-left mb-2'>Synopsis:</h1>
          <p className='text-xl mt-6 text-left'>Little Women is a coming-of-age novel written by American novelist Louisa May Alcott, originally published in two volumes in 1868 and 1869 at the request of her publisher. The story follows the lives of the four March sisters—Meg, Jo, Beth, and Amy—and details their passage from childhood to womanhood. Loosely based on the lives of the author and her three sisters,it is classified as an autobiographical or semi-autobiographical novel.
            Little Women was an immediate com... <i className="ml-2 hover:underline font-normal text-gray-600">Read More</i>
          </p>
          <h3 className='mt-5 text-lg text-gray-700 font-medium'><span className="">Genres:</span>
            <span class="ml-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-base font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
          </h3>
          <h3 className='text-lg text-gray-700 font-medium'>Editor: Puffin in Bloom | 816 pages | English Version | Hardcover</h3>
          <div className="relative left-96 mt-20 mb-10">
            <img className="w-20 " src={assets.logononame}></img>
          </div>
          <h1 className='text-4xl font-bold text-[#146C94] mt-10 text-left mb-2'>About the Author:</h1>
          <div className="mb-8 row flex flex-row "><img
            className="rounded-full w-16 h-16 mt-5"
            src="https://images.bertrand.pt/getresourcesservlet/GetResource?s8L4Uk1usvtpHUIsAUbwI4V2G531k4MrKNSIY3ixJiM="
            alt="Louisa May Alcott"
          />
            <h2 className='ml-4 mt-10 font-bold text-xl'>Louisa May Alcott</h2> 
          </div>
          <p className="mt-0 mb-6 text-xl text-left">
            Louisa May Alcott was born in Germantown, Pennsylvania on November 29, 1832. She and her three sisters, Anna, Elizabeth and May were educated by their father,
            philosopher/ teacher, Bronson Alcott and raised on the practical Christianity of their mother, Abiga...<i className="ml-2 hover:underline font-normal text-gray-600">Read More</i>
          </p>
          <div className="relative left-96 mt-20 mb-10">
            <img className="w-20" src={assets.logononame}></img>
          </div>
          <h1 className='text-4xl font-bold text-[#146C94] mt-8 text-left mb-2'>Comments:</h1>
          <div class="flex justify-right mt-6">
            <img class="rounded-full w-12 h-12" src={pessoa} alt="pessoa" />
            <p class="font-medium relative left-2 mt-2 text-xl">Matilde</p>
            <h3 className="text-xl font-bold relative left-3 mt-2 hover:underline">@MatildeMachado2</h3>
          </div>
          <div className="mt-4">
            <div className="w-full">
              <textarea
                className="bg-gray-50 border-4 rounded-lg mt-2 p-4 "
                rows={2}
                cols={100}
                placeholder="Leave a comment..."
                value={newComment}
                onChange={handleInputChange}
                onKeyUp={handleKeyUp}
              ></textarea>
            </div>
            <div className='flex justify-end'>
              <button
                onClick={handleButtonClick}
                className=" mt-4 py-3 bg-[#19A7CE] hover:bg-[#AFD3E2] text-white  px-4 rounded-lg ml-4">
                Comment
              </button>
            </div>

          </div>
          {/* Lista de comentários */}
          <div className="mt-4">
            {comments.map((comment, index) => (
              <div key={index} className=" ">
                <div class="flex justify-right mt-6">
                  <img class="rounded-full w-12 h-12" src={pessoa} alt="pessoa" />
                  <p class="font-medium relative left-2 mt-2 text-xl">Matilde</p>
                  <h3 className="text-xl font-bold relative left-3 mt-2 hover:underline">@MatildeMachado2</h3>
                </div>
                <div className='border border-gray-300 rounded-lg mt-2'>
                  <p className='text-lg mt-4 mb-4 mr-8 ml-8'>{comment}</p>
                </div>
                <div class="flex justify-normal ml-4 h-12">
                  <img src="https://i.pinimg.com/originals/52/55/d0/5255d09ed4f8622b912661775f26bd58.png"></img><p className="text-base text-gray-700 mt-3">0</p>
                  <img className="rotate-180" src="https://i.pinimg.com/originals/52/55/d0/5255d09ed4f8622b912661775f26bd58.png"></img><p className="text-base text-gray-700 mt-3">0</p>
                  <p className="ml-6 hover:underline text-lg text-[#146C94] font-medium mt-2"> Reply</p>
                </div>
              </div>
            ))}
          </div>
          <div class="flex justify-right mt-6">
            <img class="rounded-full w-12 h-12" src="https://i.pinimg.com/564x/71/1e/f1/711ef11c86091241fa2d307d2a7b3563.jpg" alt="gatinhocomoculos" />
            <p class="font-medium relative left-2 mt-2 text-xl">inez is reading</p>
            <h3 className="text-xl font-bold relative left-3 mt-2 hover:underline">@rosalix</h3>
            <p class="font-normal relative left-5 mt-2 text-xl">left a comment:</p>
          </div>
          <div className='border border-gray-300 rounded-lg mt-2'>
            <p className="text-lg mt-4 mb-4 mr-8 ml-8">
              I love this book so much! I've read it so many times and I never get tired of it. I love the characters and the story. I love how the sisters are all so different and how they all have their own personalities.
              I love how they all have their own dreams and how they all have their own struggles. I love how they... <i className="ml-2 hover:underline font-normal text-gray-600">Read More</i>
            </p>
          </div>
          <div class="flex justify-normal ml-4 h-12">
            <img src="https://i.pinimg.com/originals/52/55/d0/5255d09ed4f8622b912661775f26bd58.png"></img><p className="text-base text-gray-700 mt-3">120</p>
            <img className="rotate-180" src="https://i.pinimg.com/originals/52/55/d0/5255d09ed4f8622b912661775f26bd58.png"></img><p className="text-base text-gray-700 mt-3">3</p>
            <p className="ml-6 hover:underline text-lg text-[#146C94] font-medium mt-2"> Reply</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookPageLittleWomen;




