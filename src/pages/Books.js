import React from 'react'; 
import { Link } from 'react-router-dom';
import assets from "../constants/assets";


const Books = () => {
 
  return (

    <div>
      <div><p class="flex justify-stretch">
        <h1 class="text-4xl text-left font-bold  pl-28  ml-32 mt-16   text-[#146C94]">You are Currently Reading: </h1>
        <h1 class="text-4xl text-right font-bold  pl-52  ml-56 mt-16 mr-8 text-[#146C94]">So we Recommend:</h1>
      </p>
        <div className="border-b-2 mx-40 my-4 "></div>
      </div>
      <div class="p-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-6 mx-72 ">
        <div class="rounded overflow-hidden shadow-lg ">
          <Link to="/bookpagelittlewomen"><img class="hover:opacity-80 w-full  transition duration-500 ease-in-out " src="https://m.media-amazon.com/images/I/91l1EHFs8dL.jpg" alt="Little Women" /></Link>
          <div class="px-6 py-4">
            <Link to="/bookpagelittlewomen" class="font-bold text-xl mb-2 hover:underline"> Little Women </Link>
            <p class=" text-lg">
              by Louisa May Alcott
              <p class="text-gray-700 text-base">
                Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
          </div>
        </div>
        <div class="rounded overflow-hidden ">
          <div class="flex justify-center px-2 py-4 mt-72">
            <div class="font-bold text-2xl mb-2 hover:underline"> </div>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781442490000/anne-of-green-gables-9781442490000_hr.jpg" alt="Anne of Green Gables" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">Anne of Green Gables</div>
            <p class=" text-lg">
              by L.M. Montgomery
              <p class="text-gray-700 text-base">
                Set in the late 19th century, the novel recounts the adventures of 11 year old orphan girl Anne Shirley sent by mistake to two middle-aged siblings, Matthew and Marilla Cuthbert, in the fictional town of Avonlea in Prince Edward Island, Canada.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YoungAdult</span>
          </div>
        </div>
        <div class="rounded overflow-hidden shadow-lg">
        <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src="https://m.media-amazon.com/images/I/51PdIP8SwGS._AC_UF894,1000_QL80_.jpg" alt="Jane Eyre" />  <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">Jane Eyre</div>
            <p class=" text-lg">
              by Charlotte Brontë
              <p class="text-gray-700 text-base">
                Jane has felt an outcast her whole young life. Her courage is tested once again when she arrives at Thornfield Hall, where she has been hired by the brooding Edward Rochester to care for his ward Adèle. Jane finds herself drawn to his troubled yet kind spirit.</p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Romance</span>
          </div>
        </div>
        <div class="rounded-lg w-64 h-32 mt-72 hover:opacity-70 ">
          <p class="ml-28 text-6xl font-bold text-[#146C94]">+</p>
          <div class="flex justify-center text-center mt-2 mb-12 ml-2">
            <p class="text-2xl font-bold text-[#146C94]"> View More Recommendations</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <img className="w-24 " src={assets.logononame} alt="" ></img>
      </div>


      <div class="flex justify-around mt-20">
        <h1 class="text-4xl font-bold mr-72  mt-16 text-[#146C94]">Your To-Be-Read List: </h1>
        <p class="text-3xl font-bold mt-16 mr-20 text-gray-600 text-opacity-60">7 books</p>
      </div>
      <div className="border-b-2 mx-36 my-4 "></div>
      <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-72">

        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto1} alt="The Boy in the Stripped Pyjamas" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">The Boy in the Stripped Pyjamas</div>
            <p class=" text-lg">
              by John Boyne
              <p class="text-gray-700 text-base">
                The plot concerns a German boy named Bruno whose father is the commandant of Auschwitz and Bruno's friendship with a Jewish detainee named Shmuel.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Holocaust</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#War</span>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div class="rounded overflow-hidden shadow-lg">

          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110 " src={assets.foto6} alt="Six of Crows" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">Six of Crows</div>
            <p class="text-lg">
              by Leigh Bardugo
              <p class="text-gray-700 text-base">
                Ketterdam: a bustling hub of international trade where anything can be had for the right price—and no one knows that better than criminal prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that could make him rich beyond his wildest dreams. But he can’t pull it off alone. . .
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fantasy</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YoungAdult</span>
          </div>

        </div>

        {/* <!--Card 3--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto3} alt="Crime and Punishment" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">Crime and Punishment</div>
            <p class="text-lg">
              by Fyodor Dostoevsky
              <p class="text-gray-700 text-base">
                Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Russia</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Crime</span>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto8} alt="Frankenstein" />
          <div class="px-6 py-4">
            <Link to="/bookpagefrank" class="font-bold text-xl mb-2 hover:underline cursor-pointer">Frankenstein</Link>
            <p class="text-gray-700 text-base">
              by Mary Shelley
              <p class="text-gray-700 text-base">
                Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ScienceFiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Horror</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Gothic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1563761980i/46041465.jpg" alt="Everything I Know About Love" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">Everything I Know About Love</div>
            <p class="text-lg">
              by Dolly Alderton
              <p class="text-gray-700 text-base">
                The wildly funny, occasionally heartbreaking internationally bestselling memoir about growing up, growing older, and learning to navigate friendships, jobs, loss, and love along the ride
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Memoir </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NonFiction </span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Romance </span>
          </div>
        </div>
        {/* <!--Card 3--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto5} alt="Persuasion" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">Persuasion</div>
            <p class="text-lg">
              by Jane Austen
              <p class="text-gray-700 text-base">The story concerns Anne Elliot whose family moves to lower their expenses and reduce their debt by renting their home to an admiral and his wife. The wife's brother, Captain Frederick Wentworth, was engaged to Anne in 1806, but the engagement was broken because Anne was persuaded by her friends and family. </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Romance</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
          </div>
        </div>
        {/* <!--Card 1--> */}
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto9} alt="The Bell Jar" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline cursor-pointer">The Bell Jar</div>
            <p class="text-lg">
              by Sylvia Plath
              <p class="text-gray-700 text-base">The Bell Jar chronicles the crack-up of Esther Greenwood: brilliant, beautiful, enormously talented, and successful, but slowly going under—maybe for the last time. Sylvia Plath masterfully draws the reader into Esther's breakdown with such intensity that Esther's insanity becomes completely real and even rational. </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Feminism</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Psychology</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MentalIllness</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <img className="w-24 " src={assets.logononame} alt="" ></img>
      </div>
      <div class="flex justify-around mt-20">
        <h1 class="text-4xl font-bold mr-72  mt-16 text-[#146C94]">Your Finished-Reading List: </h1>
        <p class="text-3xl font-bold mt-16 mr-20 text-gray-600 text-opacity-60">47 books</p>
      </div>
      <div className="border-b-2 mx-36 my-4 "></div>

      <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-5 mx-72">
        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto13} alt="To Kill a Mockingbird" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">To Kill a Mockingbird</div>
            <p class="text-lg">
              by Harper Lee
              <p class="text-gray-700 text-base">
                A lawyer's advice to his children as he defends a black man charged with rape of a white girl. Scout and Jem explore with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#School</span>
          </div>
        </div>

        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto14} alt="The Hunger Games" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">The Hunger Games</div>
            <p class="text-lg">
              by Suzanne Collins
              <p class="text-gray-700 text-base">
                In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl to participate in the annual Hunger Games.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YoungAdult</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Dystopia</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fiction</span>
          </div>
        </div>



        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto15} alt="Twilight" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">Twilight</div>
            <p class="text-lg">
              by Stephenie Meyer
              <p class="text-gray-700 text-base">
                About three things I was absolutely positive. First, Edward was a vampire. Second, there was a part of him—and I didn't know how dominant that part might be—that thirsted for my blood. And third, I was unconditionally and irrevocably in love with him.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#YoungAdult</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Romance</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Fantasy</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Vampires</span>
          </div>
        </div>


        <div class="rounded overflow-hidden shadow-lg">
          <img class="w-full  transition duration-500 ease-in-out transform hover:brightness-110" src={assets.foto16} alt="Pride and Prejudice" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2 hover:underline">Pride and Prejudice</div>
            <p class="text-lg">
              by Jane Austen
              <p class="text-gray-700 text-base">
                The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.
              </p>
            </p>
          </div>
          <div class="px-6 pt-4 pb-15">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Classic</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Romance</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#HistoricalFiction</span>
          </div>
        </div>

        <div class="rounded-lg w-64 h-32 mt-72  ">
          <div class="flex justify-center mt-12 mb-12">
            <p class="text-3xl font-bold text-[#146C94] hover:opacity-70"> View more</p>

          </div>

        </div>

      </div>
    </div>

  );
};

export default Books;


