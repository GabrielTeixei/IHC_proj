import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import assets from "../constants/assets";

const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Matilde",
    age: 18,
    username: "@MatildeMachado2",
    bio: "Write your bio.",
    followers: 17,
    following: 25
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  }

  const handleSaveClick = () => {
    setIsEditing(false);
  }

  const handleNameChange = (e) => {
    setUserData({ ...userData, name: e.target.value });
  }


  const handleUsernameChange = (e) => {
    setUserData({ ...userData, username: e.target.value });
  }

  const handleBioChange = (e) => {
    setUserData({ ...userData, bio: e.target.value });
  }

  let isClicked = false;
  function MyComponent() {
    const [texto, setTexto] = useState("");

    const handleClick = () => {

      isClicked = true;
      setTexto("Clicked");
    };
  }

  return (
    <div className="container mx-auto  px-4 mt-20 flex ">
      {/* Coluna esquerda */}
      <div className="w-1/3 p-16" >
        <div className="relative w-56 h-56 mb-5 overflow-hidden rounded-full border-4 border-[#146C94] ">
          <img src={assets.pessoa} className="absolute top-0 left-0 w-full h-full " alt="MatildeProfile" />

        </div>
        <div className="mt-4"></div>
        <div>
          {isEditing ? (
            <>
              <input className="text-2xl font-bold w-full mb-2" type="text" value={userData.name} onChange={handleNameChange} />
              <input className="text-lg text-gray-600 w-full mb-2" type="text" value={userData.username} onChange={handleUsernameChange} />
              <textarea className="text-lg w-full mb-8" value={userData.bio} onChange={handleBioChange}></textarea>
              <div className="flex space-x-2 mb-12">
                <button className="bg-[#19A7CE] text-[#F6F1F1] font-bold py-2 px-4 rounded hover:bg-[#AFD3E2]" onClick={handleSaveClick}>Save</button>
                <button className="bg-[#146C94] text-[#F6F1F1] font-bold py-2 px-4 rounded hover:bg-[#AFD3E2]" onClick={() => setIsEditing(false)}>Cancel</button>
              </div>

            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              <h2 className="text-lg text-gray-600">{userData.username}</h2>
              <div className="mt-4 mb-6">
                <p className="text-lg">{userData.bio}</p>
              </div>
            </>
          )}
        </div>
        <div class="flex justify-between">
          <p className="text-gray-800 text-lg hover:underline cursor-pointer"><span className="font-bold">Followers:</span> {userData.followers}</p>
          <p className="text-gray-800 text-lg hover:underline cursor-pointer"><span className='font-bold'>Following:</span> {userData.following}</p>
        </div>

        <div class="flex justify-center">
          <button type="button" class=" text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-base px-8 py-2.5 text-center mr-2 mb-4 mt-6" onClick={handleEditClick}>Edit Profile</button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <div className="flex space-x-4">
            <Link to="https://www.instagram.com/SEU_INSTAGRAM" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram text-2xl"></i>
            </Link>
            <Link to="https://www.facebook.com/SEU_FACEBOOK" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook text-2xl"></i>
            </Link>
            <Link to="https://twitter.com/SEU_TWITTER" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
      {/* Linha vertical */}
      <div className="border-l-2 h-auto my-8 mx-10 "></div>

      <div class="flexh-1/2">
        {/* <div class="flex-row w-full md:w-1/2"> */}
        <div class="flex flex-col w-full md:h-1/2">

          {/* Coluna direita    */}
          <div className="mt-10"></div>
          <div class="flex justify-around space-x-20 mb-12">
            <div>
              <p class="text-2xl text-[#146C94] font-bold">Currently-Reading: <p class="text-center font-medium text-gray-500 hover:underline cursor-pointer"><Link to="/books">1 book</Link></p></p>
            </div>

            <div>
              <p class="text-2xl text-[#146C94] font-bold">To-Be-Read: <p class="text-center font-medium text-gray-500 hover:underline cursor-pointer">7 books</p></p>
            </div>

            <div>
              <p class="text-2xl text-[#146C94] font-bold">Finished-Reading: <p class="text-center font-medium text-gray-500 hover:underline cursor-pointer">47 books</p></p>
            </div>
          </div>

          <div className="border-b-2 h-auto my-8 mx-8"></div>
          <div className="mt-4"></div>


          <div class="text-center">
            <h2 class="text-3xl text-left font-bold mb-4  pl-16 text-[#146C94]">Your Favorite Books:</h2>
          </div>


          <div class="mt-16 mr-0 ms-16 ">
            <div class="flex justify-between mx-2 ">
              <div class="w-full md:w-1/4 px-2 mb-8 ">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="h-full w-full scale-100 cursor-pointer" src="https://www.blackincbooks.com.au/sites/default/files/1984%20%28online%29_0.jpg" alt="1984" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">

                    <div className="flex justify-between items-center px-2">
                      <h5 className="mb-4 mt-2 text-xl font-medium leading-center text-center mx-auto ">
                        <p class="hover:underline cursor-pointer">Nineteen Eighty-Four </p>
                        <p className="text-base text-[#808080]">by George Orwell</p>
                      </h5>
                      <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="h-full w-full scale-100" src="https://kbimages1-a.akamaihd.net/5be59803-5a40-48ee-95e5-894928005122/1200/1200/False/the-secret-history-3.jpg" alt="The Secret History by Donna Tart" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">

                    <div className="flex justify-between items-center px-2">

                      <h5 className="mb-6 mt-6 text-xl font-medium leading-center text-center mx-auto">
                        <p class="hover:underline cursor-pointer">The Secret History</p>
                        <p className="text-base text-[#808080]">
                          by Donna Tart
                        </p>
                      </h5>

                      <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span>

                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="w-full h-full scale-100" src="https://janeausteninvermont.files.wordpress.com/2013/02/pp-penquin-cover.jpg" alt="Pride and Prejudice" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                    <div className="flex justify-between items-center px-2">
                      <h5 className="mb-4 mt-3 text-xl font-medium leading-center text-center mx-auto ">
                        <p class="hover:underline cursor-pointer">Pride and Prejudice</p>
                        <p className="text-base text-[#808080]">
                          by Jane Austen
                        </p>
                      </h5>
                      <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="w-full h-full scale-100  " src="https://kbimages1-a.akamaihd.net/a4213acf-d294-475f-9955-34a9a89b7cb2/1200/1200/False/the-little-prince-60.jpg" alt="The little prince" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">

                    <div className="flex justify-between items-center px-2">

                      <h5 className="mb-4 mt-4 text-xl font-medium leading-center text-center text-100 dark:text-neutral-10 mx-auto">
                        <p class="hover:underline cursor-pointer">The Little Prince</p>
                        <p className="text-base text-[#808080]">
                          by Antoine de Saint-Exupéry
                        </p>
                      </h5>
                      <button
                        className={`heart-button${MyComponent ? " liked" : ""} `}
                        onClick={isClicked}
                      >
                        <span className="inline-block text-2xl" role="img" aria-label="heart">❤️</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32"></div>
        {/* <div class="flex-row w-full md:w-1/2"> */}
        <div class="flex flex-col w-full md:h-1/2">

          <div className="border-b-2 h-auto my-8 mx-8"></div>
          <div className="mt-4"></div>
          {/* Coluna esquerda */}
          <div class="grid grid-cols-2 gap-4" >
            <h2 class="text-3xl font-bold mb-4  pl-16 text-[#146C94]">Your Bookshelves:</h2>
          </div>

          <div class="mt-16 mr-0 ms-16">
            <div class="flex flex-wrap -mx-2">
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <Link to="/BookshlefExemplo">
                    <div class="relative overflow-hidden bg-cover">

                      <img class="rounded-t-lg cursor-pointer" src="https://i.pinimg.com/564x/ba/bb/e5/babbe5991005203257f3ff7968473119.jpg" alt="" />
                      <a href="#!">
                        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                      </a>
                    </div>
                    <div class="p-2">

                      <h5 class="mb-2 text-xl font-medium leading-center text-center hover:underline cursor-pointer">
                        Matilde in Books
                      </h5>

                    </div>
                  </Link>
                </div>

              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://i.pinimg.com/564x/98/3e/9f/983e9f418d5517a6fd5a6ed1576c6827.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center hover:underline cursor-pointer">
                      Top Recs
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg " src="https://i.pinimg.com/564x/db/cd/0a/dbcd0ae7143b068dab012601969ec880.jpg" alt="translated lit i love" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>

                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center hover:underline cursor-pointer">
                      Translated lit I love
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://i.pinimg.com/564x/50/34/c2/5034c2593ff2e046dafd4d869f694c1f.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 text-xl font-medium leading-center text-center hover:underline cursor-pointer">
                      Dark Academia Books
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Profile;

