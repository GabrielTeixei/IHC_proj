import React, { useState } from 'react';
import assets from '../constants/assets';

const BookPageFrank = () => {
    const [typeOfReading, setTypeOfReading] = useState("Currently Reading");
    const handleTypeOfReading = (event) => {

        setTypeOfReading(event.target.value);
      }
    return (
        <div className="container mx-  px-4 mt-20 flex">
            <div className="w-1/3 m-16" >
                <div className="flex items-start">
                    <div className="mt-4 flex flex-col">
                        <img className="w-96 h-1/4 mx-auto" src={assets.foto8}></img>
                        <h1 className="text-2xl font-bold text-center mt-2">Frankenstein</h1>
                        <h2 className="text-xs text-slate-500 text-center">by Mary Shelley</h2>
                        <div class="flex items-center mx-auto mt-2">
                            <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            <svg aria-hidden="true" class="w-7 h-7 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            
                        </div>
                        <button class="h-12 px-6 m-2 text-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Add to Bookshelf</button>
                    </div>
                </div>
            </div>
            {/*coluna vertical*/}

            <div className="border-l-2 h-auto my-8 mx-1"></div>

            {/*outro lado*/}
            <div className="w-2/3 m-16">
                <div className="flex flex-col items-start">
                   
                    <h1 className='text-4xl font-bold text-[#146C94] mt-8 text-left'>Synopsis</h1>
                    <p className='text-lg text-gray-500 mt-4 text-left'>Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment. Shelley started writing the story when she was 18, and the first edition was published anonymously in London on 1 January 1818, when she was 20. Her name first appeared in the second edition, which was published in Paris in 1821.
                        Shelley travelled through Europe in 1815, moving along the river Rhine in Germany, and stopping in Gernsheim, 17 kilometres away from Frankenstein Castle, where, two centuries before, an alchemist had engaged in experiments. She then journeyed to the region of Geneva, Switzerland, where much of the story takes place. Galvanism and occult ideas were topics of conversation for her companions, particularly for her lover and future husband Percy Bysshe Shelley. In 1816, Mary, Percy, and Lord Byron had a competition to see who could write the best horror story. After thinking for days, Shelley was inspired to write Frankenstein after imagining a scientist who created life and was horrified by what he had made.
                        Though Frankenstein is infused with elements of the Gothic novel and the Romantic movement, Brian Aldiss has argued for regarding it as the first true science-fiction story. In contrast to previous stories with fantastical elements resembling those of later science fiction, Aldiss states, the central character "makes a deliberate decision" and "turns to modern experiments in the laboratory" to achieve fantastic results. The novel has had a considerable influence on literature and on popular culture; it has spawned a complete genre of horror stories, films, and plays.
                        Since the publication of the novel, the name "Frankenstein" has often been used, erroneously, to refer to the monster, rather than to his creator/father.
                    </p>
                    <h3 className='mt-5'><span className=''>Genres:</span>	Gothic novel, literary fiction, horror fiction, science fiction</h3>
                    <h3>144 pages | English Version</h3>
                    <h1 className='text-4xl font-bold text-[#146C94] mt-8 text-left'>About the Author</h1>
                    <div className="mb-8 row flex flex-row "><img
                      className="rounded-full w-10 h-10 mt-5"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/65/RothwellMaryShelley.jpg"
                      alt="user"
                      />
                      <h2 className='mt-6 ml-3'>Mary Shelley</h2> {/*alinhar esta cena com a imagem*/}
                    </div>
                    <p>Mary Wollstonecraft Shelley,( 30 August 1797 – 1 February 1851) was an English novelist who wrote the Gothic novel Frankenstein; or, The Modern Prometheus (1818), which is considered an early example of science fiction and one of her best-known works. She also edited and promoted the works of her husband, the Romantic poet and philosopher Percy Bysshe Shelley. Her father was the political philosopher William Godwin and her mother was the philosopher and women's rights advocate Mary Wollstonecraft.
                        Mary's mother died less than a fortnight after giving birth to her. She was raised by her father, who provided her with a rich if informal education, encouraging her to adhere to his own anarchist political theories. When she was four, her father married a neighbour, Mary Jane Clairmont, with whom Mary came to have a troubled relationship.</p>
                </div>  
            </div>
        </div>
    )
}

export default BookPageFrank;