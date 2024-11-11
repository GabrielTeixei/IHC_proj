import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import  assets  from "../constants/assets";


const User = () => {
  const [seguidores, setSeguidores] = useState(100);
  const [seguindo, setSeguindo] = useState(50);
  const [seguindoUsuario, setSeguindoUsuario] = useState(false);

  const handleSeguir = () => {
    if (!seguindoUsuario) {
      setSeguidores(seguidores + 1);
      setSeguindoUsuario(true);
    } else {
      setSeguidores(seguidores - 1);
      setSeguindoUsuario(false);
    }
  };

  return (
    <div className="container mx-auto  px-4 mt-20 flex ">
      <div className="w-1/3 p-16 ">
        <div className="relative w-56 h-56 mb-5 overflow-hidden rounded-full border-4 border-[#146C94] ">
          <img className="absolute top-0 left-0 w-full h-full " src={assets.fotoUser} alt="User" />
        </div>
        <div className="flex justify-between mb-0">
        <p className="text-2xl mt-2">Jessica Lopez</p>
        <button
                type="button"
                className="relative top-4 left-4 text-[#F6F1F1] bg-[#146C94] hover:bg-[#19A7CE] focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold rounded-full text-base px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSeguir}
              >
                {seguindoUsuario ? "Unfollow" : "Follow"}
        </button>

        </div>

        <p className="mt-0 mb-4 text-gray-800 font-bold text-xl">@ihatemyl1f3</p>
        
        <div class="flex justify-between">
          <p className="text-gray-800 text-lg hover:underline"><span style={{fontWeight : 'bold'}}>Followers:</span> {seguidores}</p>
          <p className="text-gray-800 text-lg hover:underline"><span style={{fontWeight : 'bold'}}>Following:</span> {seguindo}</p>
        </div>
        <p className="text-gray-800 text-lg mt-2">I am 20 years old and I love feminist novels.</p>

        <div className="flex justify-center items-center mt-8 ">
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
      <div className="border-l-2 h-auto my-8 mx-8"></div>
      < div className="flex flex-col w-full md:h-1/2">
        {/* Coluna direita    */}
        {/* flex justify-center w-2/3 */}
        <div className="mt-10"></div>
          <div class="flex justify-around space-x-20 mb-12">
            <div>
              <p class="text-2xl text-[#146C94] font-bold">Currently-Reading:<p class="text-center font-medium text-gray-500 hover:underline cursor-pointer"> 3 books</p></p>
            </div>

            <div>
              <p class="text-2xl text-[#146C94] font-bold">To-Be-Read: <p class="text-center font-medium text-gray-500 hover:underline cursor-pointer">44 books</p></p>
            </div>

            <div>
              <p class="text-2xl text-[#146C94] font-bold">Finished-Reading: <p class="text-center font-medium text-gray-500 hover:underline cursor-pointer">189 books</p></p>
            </div>
          </div>

        <div className="border-b-2 h-auto my-8 mx-8"></div>
        <div className="mt-4"></div>
        <div className="text-center ">
          <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-4  pl-16 p-8">Jessica's Favorite Books:</h2>
        </div>
        <div>
        <div class="mt-8 mr-0 ms-16 ">
            <div class="flex mx-2 ">
            
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class=" scale-100" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1319032910i/10956.jpg" alt="The Virgin Suicides" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-2">
                    
                    <h5 className="mb-1 text-xl font-medium text-center mx-auto">
                      <p class="hover:underline">The Virgin Suicides</p>
                      <p className="text-base text-[#808080]">by Jeffrey Eugenides</p>
                    </h5>
                    
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">♡</span>
                    
                  </div>
                   </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="scale-100  " src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1544742360i/42815544.jpg" alt="Bunny" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div className="p-2">
                 
                  <div className="flex justify-between items-center px-2">
                    
                    <h5 className="mb-5 mt-4 text-xl font-medium leading-center text-center mx-auto">
                      <p class="hover:underline">Bunny</p>
                      <p className="text-base text-[#808080]">by Mona Awad</p>
                      </h5>
                    <button 
                    >
                      <span  className="inline-block text-2xl"role="img"  aria-label="heart">♡</span>
                    </button>
                  </div>
                   </div>

    
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-12"></div>

        {/* Coluna user Bookshelf */}
          <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-2  pl-16 p-6">Jessica's Bookshelves:</h2>
       
        <div class="mt-16 mr-0 ms-8 bg-transparent">
            <div class="flex flex-wrap -mx-2 ">
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://i.pinimg.com/736x/03/45/b1/0345b1103d8e8b50d96f2f500661da46--open-book-sunny-days.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 mt-2 text-xl font-medium text-center mx-auto hover:underline">
                      my favorite books
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://i.pinimg.com/originals/e0/a6/6f/e0a66ff0d619f36ae7f9af24e5ec9eb4.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-4 mt-3 text-xl font-medium text-center mx-auto hover:underline">
                    cozy short stories
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg " src="https://i.pinimg.com/564x/57/7a/cf/577acf355850b7101f23ded80a4b15ef.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 mt-1 text-xl font-medium text-center mx-auto hover:underline">
                      sad books i cried to
                    </h5>
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/4 px-2 mb-8">
                <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                  <div class="relative overflow-hidden bg-cover">
                    <img class="rounded-t-lg" src="https://i.pinimg.com/564x/8a/c1/d9/8ac1d9e74b908df79601f424a5f0d5c1.jpg" alt="" />
                    <a href="#!">
                      <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </a>
                  </div>
                  <div class="p-2">
                    <h5 class="mb-2 mt-2 text-xl font-medium text-center mx-auto hover:underline">
                      books you should read
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-12"></div>

            <div className="text-center ">
              <h2 className="text-4xl font-bold text-[#146C94] text-left font-bold mb-4  pl-16 p-8">Jessica is Following:</h2>
            </div>
            <div className='flex flex-row justify-evenly mb-10'>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://i.pinimg.com/736x/46/58/ea/4658ea9d0a2238f89a561b8040f144e7.jpg' alt="jojobiz"></img>
                <h3 className='text-center font-medium'>@JoJoBiz</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAOrLP2U3eSHhpVpfPVX85NoPnkR9eiyniXg&usqp=CAU' alt="lmaoomm"></img>
                <h3 className='text-center font-medium'>@lmaoomm</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeik6d5EHLTi89m_CKLXyShylk4L92YflpJQ&usqp=CAU' alt="Googuuma"></img>
                <h3 className='text-center font-medium'>@Googuuma</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://i.pinimg.com/originals/3d/fd/d3/3dfdd3cce72f6d62c17d4fa2c595d6c9.jpg' alt="Atlasu"></img>
                <h3 className='text-center font-medium'>@Atlasu</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://i.pinimg.com/564x/0e/1c/f0/0e1cf00605082d11da6385459a3a1687.jpg' alt="Redditergoat"></img>
                <h3 className='text-center font-medium'>@RedditGoat</h3>
              </div>
              <div className='flex flex-col justify-center ml-10'>
                <img className='hover:opacity-80 rounded-full w-20 h-20 mt-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLgjHc6jBe3B9CA2wkJTd2VMqMz1QFQOxM3g&usqp=CAU' alt="MarioLopez"></img>
                <h3 className='text-center text-base font-medium'>@MarioLopez</h3>
              </div>
                <p class="text-3xl font-bold text-[#146C94] hover:underline mt-9">+ View more</p>
            </div>
          </div>
      </div>
  );
}

export default User;
