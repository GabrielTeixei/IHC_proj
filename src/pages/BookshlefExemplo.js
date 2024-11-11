import React from "react";
import assets from "../constants/assets";
import { Link } from "react-router-dom";


const BookshelfExemplo = () => {
 return (
    <div>
      <div class="mt-6">
        <div class="flex justify-center ">
          <img class="w-52 rounded-lg" src="https://i.pinimg.com/564x/98/3e/9f/983e9f418d5517a6fd5a6ed1576c6827.jpg" alt="Top Recs" />
        </div>
    
        <div class="px-6 py-4   rounded-b-lg flex justify-center">
          <div class="mb-2 text-4xl text-[#146C94] font-bold leading-center text-center ">Top Recs</div>
          </div>
        <div class="flex justify-center">
          <p class="mt-2 text-lg text-[#146C94] underline hover:no-underline font-light text-center"> Edit bookshelf</p>
        </div>
      </div>
      <div class="w-full">
      <div className="border-b-2 mx-36 my-4 "></div>
      <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-72">
      {/* <!--Card 1--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full  transition duration-500 ease-in-out transform hover:opacity-70" src="https://kbimages1-a.akamaihd.net/5be59803-5a40-48ee-95e5-894928005122/1200/1200/False/the-secret-history-3.jpg" alt="The Secret History by Donna Tart" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline">The Secret History</div>
          <p class=" text-lg">
            by Donna Tart
          </p>
        </div>
      </div>
      {/* <!--Card 2--> */}
      <div class="rounded overflow-hidden shadow-lg">
      
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src="https://kbimages1-a.akamaihd.net/a4213acf-d294-475f-9955-34a9a89b7cb2/1200/1200/False/the-little-prince-60.jpg" alt="The little prince" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline">The Little Prince</div>
          <p class="text-lg">
            by Antoine de Saint-Exupéry
          </p>
        </div>
      </div>

      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1584633432i/50623864.jpg" alt="The Invisible Life of Addie LaRue" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">The Invisible Life of Addie LaRue</div>
          <p class="text-lg">
            by V.E. Schwab
          </p>
        </div>
      </div>
      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1357177533i/13623848.jpg" alt="The Song of Achilles" />
        <div class="px-6 py-4">
          <Link to="/bookpagefrank" class="font-bold text-xl mb-2 hover:underline cursor-pointer">The Song of Achilles</Link>
          <p class="text-gray-700 text-base">
            by Madeline Miller</p>
        </div>
      </div>
      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src={assets.foto10} alt="Forest" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">1984</div>
          <p class="text-lg">
             by George Orwell</p>
        </div>
      </div>
      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src="https://janeausteninvermont.files.wordpress.com/2013/02/pp-penquin-cover.jpg" alt="Pride and Prejudice"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">Pride and Prejudice</div>
          <p class="text-lg">
            by Jane Austen</p>
        </div>
      </div>
      {/* <!--Card 3--> */}
      <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:opacity-70" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1571423190i/41057294.jpg" alt="Normal People"/>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">Normal People</div>
          <p class="text-lg">
            by Sally Rooney</p>
        </div>
      </div>
        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg hover:opacity-60">
          <img class="w-32 mt-32 mb-20 ml-20 transition duration-500 ease-in-out transform hover:" src="https://cdn4.iconfinder.com/data/icons/content-2/24/Add-Book-512.png" alt="add" />
          <div class="px-6 py-4">
            <div class="font-bold text-3xl text-center mb-2 cursor-pointer">Add Book</div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
};

export default BookshelfExemplo;
