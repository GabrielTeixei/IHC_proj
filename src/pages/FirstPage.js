import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import assets from '../constants/assets';


const FirstPage = () => {
  const [showText, setShowText] = useState(false);
  const [pageNumber, setPageNumber] = useState(23);
  const [pageNumberTotal, setPageNumberTotal] = useState(570);
  const [typeOfReading, setTypeOfReading] = useState("Currently Reading");

  const handleButtonClick = () => {
    setShowText(true);
  }

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const newPageNumber = event.target.elements.pageNumber.value;
    setPageNumber(newPageNumber);
    setShowText(false);
  }

  const handleTypeOfReading = (event) => {

    setTypeOfReading(event.target.value);

  }

  return (
    <div className="container mx-auto px-4 mt-20 flex">
      {/* Image on the left */}
      <div className="w-1/3">
        <Link to="/bookpagelittlewomen">
          <img
            src="https://m.media-amazon.com/images/I/91l1EHFs8dL.jpg"
            className="max-w-full h-1/2 mx-auto hover:opacity-90 "
            alt=""
          /></Link>
        <div className="mt-4 flex flex-col">
          <h1 className="text-2xl font- text-center mb-6"> {typeOfReading}:
            <Link to="/bookpagelittlewomen"><p className=" text-3xl font-bold mb-2 hover:underline">Little Women</p></Link>
          </h1>
          <p className="text-xl text-center font-medium text-gray-800">
            Page <span class=" border border-[#AFD3E2] border-opacity-20 bg-opacity-30 border-x-8 bg-[#AFD3E2] font-bold text-center ml-1 mr-1">  {pageNumber}</span> of {pageNumberTotal}
          </p>
          <p className="text-xl font-medium text-center text-gray-800">Last updated: <span class="italic text-gray-600">25/5/2023</span></p>
          <button
            className="bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] text-xl font-bold py-2 px-4 rounded-lg mt-4 w-48 self-center"
            onClick={handleButtonClick}
          >
            Update Page
          </button>
        </div>
      </div>
      {/* Linha vertical */}
      <div className="border-l-2 h-auto my-8 mx-8"></div>

      {/* Separator line */}
      <div className="w-2/3">
        <div className="flex justify-start">
          <div className="text-center space-y-16 px-8 ml-8 w-screen">
            <h2 className="text-4xl text-left font-bold mb-4 text-[#146C94]">For You:</h2>
            <li className="flex items-center space-x-2 ">

              <div>
                <div className="row flex">
                  <img
                    className="rounded-full w-14 h-14 hover:opacity-80"
                    src={assets.fotoUser}
                    alt="user"
                  />
                  <h3 className="relative left-6 text-2xl space-y-16 mt-3">
                    <Link to="/user" className="hover:underline"> Jessica
                      <span style={{ fontWeight: 'bold' }}>  @ihatemyl1f3</span></Link> started a new Discussion:
                  </h3>
                </div>

                <p className="relative left-10 text-xl italic hover:underline cursor-pointer">
                  <img src="https://cdn-icons-png.flaticon.com/512/266/266146.png" className="relative left-4 top-7 w-8 h-8" alt="" ></img>
                  Best books published in 2023 (my personal ranking)</p>
              </div>

            </li>
            <div className="w-full bg-gray-200 h-[0.1rem]"></div>
            <div className="text-start">
              <div className="mb-8 row flex"><img
                className="rounded-full w-14 h-14 hover:opacity-80"
                src="https://i.pinimg.com/564x/08/95/70/0895704aff0f12d507fdf2252eddcd59.jpg"
                alt="user"
              />
                <h3 className="relative left-4 text-2xl space-y-16 mt-3">
                  <Link to="/user" className="hover:underline">Marcus
                    <span className="font-bold"> @marcReads</span></Link> started
                  reading:{" "}
                </h3></div>
              <Link to="/">
                <img
                  src="https://kbimages1-a.akamaihd.net/f272c5b3-5afb-407d-8093-6edb55276380/1200/1200/False/a-little-life-2.jpg"
                  className="relative left-12 w-64 hover:opacity-90"
                  alt=""
                /></Link>
              <div className="relative left-12 mt-4 text-left">
                <h1 className="text-2xl "><p className="hover:underline cursor-pointer"><i><span style={{ fontWeight: 'bold' }} >
                  A Little Life</span></i></p>
                </h1>
                <p className="text-lg">Pages: 342</p>
                <p className="text-lg">started reading: 22/05/2023</p>
              </div>
            </div>

            <div className="w-full bg-gray-200 h-[0.1rem]"></div>
            <div className="text-start">
              <div className=" row flex"><img
                className="rounded-full w-14 h-14 hover:opacity-80"
                src="https://i.pinimg.com/564x/f0/f7/f4/f0f7f4e3a28296493f816a0125edf88c.jpg"
                alt="user"
              />
                <h3 className="relative left-4 text-2xl space-y-16 mt-3">
                  <Link to="/user" className="hover:underline cursor-pointer">Rita
                    <span className="font-bold"> @DarkAcademic</span></Link> created a new Bookshelf:{" "}
                </h3></div>
              <div className="flex justify-right ml-12">
                <img src="https://www.iconpacks.net/icons/2/free-opened-book-icon-3163-thumb.png" className="relative top-8 w-10 h-10" alt=""></img></div>
              <p className="relative left-24 text-xl italic hover:underline cursor-pointer">
                Gothic Literature: Best Gothic Books</p>
            </div>

            <div className="w-full bg-gray-200 h-[0.1rem]"></div>
          </div>
        </div>
      </div>

      {/* Popup/modal window */}
      {showText && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="absolute z-10 bg-gray-100 rounded-md p-4 flex flex-col items-start">
            <h4 className="text-2xl font-bold mb-4">
              Little Women{" "}
              <span className="text-base text-slate-500 ">by Louisa May Alcott</span>
            </h4>
            <div className="flex items-center">
              <img
                src="https://m.media-amazon.com/images/I/91l1EHFs8dL.jpg"
                className="mx-auto max-w-[500px]"
              />
              <div className="ml-4">
                <h4 className="text-xl font-semibold mb-2">
                  State of the book:
                </h4>
                <select
                  className="border border-gray-400 p-2 mb-4"
                  value={typeOfReading}
                  onChange={handleTypeOfReading}
                >
                  <option value="Currently Reading">Currently Reading </option>
                  <option value="Finished Reading">Finished Reading</option>
                </select>
                <form onSubmit={handleModalSubmit} >
                  <h4 className="mt-6 text-xl font-semibold ">Current page:</h4>
                  <input
                    type="number"
                    name="pageNumber"
                    className="border border-gray-400 p-2 mr-2" placeholder={pageNumber}
                  />
                  <button
                    class="absolute top-2 right-2 text-gray-500 hover:text-gray-800 bg-[#AFD3E2] hover:bg-[#19A7CE]  rounded mt-4  py-1 px-2 border-0 text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowText(false)}
                  >
                    <span class="text-gray-600" >×</span>
                  </button>
                  <button
                    type="submit"
                    className="relative top-60 
                    bg-[#146C94] hover:bg-[#19A7CE] text-base text-white py-4 px-6 rounded mt-4 "
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="absolute z-0 bg-black opacity-50 w-full h-full"></div>
        </div>
      )}
    </div>
  );
}

export default FirstPage;

