import React from 'react';
import './Home.css';
import BannerContainer from '../../containers/BannerContainer';
import MovieSectionContainer from '../../containers/MovieSectionContainer';
import { movieCategories } from '../../App';

export default function Home() {
  return (
    <div className='home'>
      <BannerContainer />
      <div id='movies_container'>
        {movieCategories.map((m, i) => (
          <MovieSectionContainer key={i} {...m} />
        ))}
      </div>
    </div>
  );
}
