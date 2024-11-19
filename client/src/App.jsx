import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import { Home, CreatePost } from './page';
import AboutUs from './page/Aboutus';

const App = () => (
  <BrowserRouter>
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex justify-between items-center bg-black sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] fixed top-0 left-0 z-10">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://chhari07.github.io/image/WhatsApp%20Image%202024-11-15%20at%2023.16.57_b9ee6151.jpg"
            alt="Logo"
            className="w-8 h-8"
          />
          <h1 className="font-bold text-4xl text-white">ArtSprak</h1>
        </Link>

        <Link
          to="/create-post"
          className="font-inter font-medium bg-[white] text-black px-4 py-2 rounded-md"
        >
          Create
        </Link>
        
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[black] min-h-[calc(100vh-73px)] mt-[73px] flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        
        </Routes>
      </main>

    
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;
