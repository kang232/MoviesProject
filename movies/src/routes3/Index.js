import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieCurrent from '../components/Pages/MovieCurrent';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import Helmet from '../components/Layout/Helmet';
import MovieDetail from '../components/Pages/MovieDetail';
import SearchPage from '../components/Pages/SearchPage';
import NowPlaying from '../components/Pages/NowPlaying';
import TopRate from '../components/Pages/TopRate';
import SearchContextProvider from '../components/ContextProvider/SearchContextProvider';

export default function Index() {

  return (
    <>
    <SearchContextProvider>
    <Helmet title = {'Trang chủ'}>
      <Header />
      <Routes>
        <Route path="/" element={<MovieCurrent />}/>
        <Route path="/movie/:id" element={<MovieDetail/>} />
        <Route path="/movie/search" element={<SearchPage/>} />
        <Route path="/nowplaying" element={<NowPlaying/>} />
        <Route path="/toprate" element={<TopRate/>} />
      </Routes>
      <Footer />
    </Helmet>
    </SearchContextProvider>
    </>
  );
}