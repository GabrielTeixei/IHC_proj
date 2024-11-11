import { useState } from "react";
import pessoa from "../constants/pessoa.jpeg";
import logo from "../constants/logo.png";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const Titles = tw.li`
    text-black 
    text-xl
    hover:text-indigo-700
  `;
    return (
        <nav className="w-full bg-[#AFD3E2] shadow">
            <div className="justify-start w-full  md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">


                        <Link to="/"><img src={logo} type="button" alt="logo" className="w-16 md:w-32 lg:w-48 hover:opacity-70" />
                        </Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <Link to="/books" >
                                <Titles ><p class="bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] text-xl font-bold py-3 px-6 rounded-full">
                                    Books</p>
                                </Titles>
                            </Link>

                            <Link to="/bookshelfs">
                                <Titles><button class="bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] text-xl font-bold py-3 px-6 rounded-full">
                                    Bookshelves</button>
                                </Titles>
                            </Link>

                            <Link to="/discussions">
                                <Titles><button class="bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] text-xl font-bold py-3 px-6 rounded-full">
                                    Discussions</button>
                                </Titles>
                            </Link>

                            <Link to="/readerspage">
                                <Titles><button class="bg-[#146C94] hover:bg-[#19A7CE] text-[#F6F1F1] text-xl font-bold py-3 px-6 rounded-full">
                                    Readers</button>
                                </Titles>
                            </Link>

                            <div className="flex items-center justify-end absolute right-10 px-42 mr-4">
                                <SearchBar />
                                <div className="flex items-center ml-2">
                                    <div className="px-4  ml-auto ">
                                        <Titles>
                                            <div className="relative">
                                                <img src="https://svgsilh.com/svg_v2/1096279.svg" alt="Sino com notificação" className="w-8 h-8" id="notification-icon" />
                                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-[#146C94] rounded-full">2</span>
                                            </div>
                                        </Titles>
                                    </div>
                                    <div className="ml-4">
                                        <Titles>
                                            <Link to="/Profile" className="flex rounded-full">
                                                <img src={pessoa} className="w-16 rounded-full border border-black" alt="Avatar" />
                                            </Link>
                                        </Titles>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}


