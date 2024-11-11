import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import BookShelfs from './pages/BookShelfs';
import Discussions from './pages/Discussions';
import FirstPage from './pages/FirstPage';
import Profile from './pages/Profile';
import NavBar from './components/NavBar2';
import { MDBFooter } from 'mdb-react-ui-kit';
import User from './pages/User';
import BookPageFrank from './pages/BookPageFrank';
import BookPageLittleWomen from './pages/BookPageLittleWomen';
import ReadersPage from './pages/ReadersPage';
import BookshlefExemplo from './pages/BookshlefExemplo';
import Footer from './components/Footer';

function App() {
  return (
    <div class="bg-gray-100 min-h-screen">
      <BrowserRouter >

        <NavBar className="bg-[#19A7CE]" />
        <Routes>

          <Route path="/" element={<FirstPage />} />
          <Route path="/discussions" element={<Discussions />} />
          <Route path="/bookshelfs" element={<BookShelfs />} />
          <Route path="/readerspage" element={<ReadersPage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/user" element={<User />} />
          <Route path="/bookpagefrank" element={<BookPageFrank />} />
          <Route path="/bookpagelittlewomen" element={<BookPageLittleWomen />} />
          <Route path="/BookshlefExemplo" element={<BookshlefExemplo />} /> 
        </Routes>          
      </BrowserRouter>
      <Footer></Footer>

    </div>
  );
}

export default App;

