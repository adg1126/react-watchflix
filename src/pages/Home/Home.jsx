import React from 'react';
import './Home.css';
import Nav from '../../components/Nav/Nav';
import BannerContainer from '../../containers/BannerContainer';
import MovieRowContainer from '../../containers/MovieRowContainer';
import { movieCategories } from '../../App';

export default function Home() {
  return (
    <div className='home'>
      <Nav />
      <BannerContainer />
      <div id='movies_container'>
        {movieCategories.map((m, i) => (
          <MovieRowContainer key={i} {...m} />
        ))}
      </div>
    </div>
  );
}
