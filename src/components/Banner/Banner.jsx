import React, { useEffect } from 'react';
import { imgBaseUrl } from '../../utils/baseurls';
import './Banner.css';

export default function Banner({ fetchBannerMovieStart, bannerMovie }) {
  useEffect(() => {
    fetchBannerMovieStart();
  }, [fetchBannerMovieStart]);

  const truncate = (str, n) =>
    str?.length > n ? `${str.substr(0, n - 1)}...` : str;

  return (
    <header
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${imgBaseUrl}/${bannerMovie?.backdrop_path})`,
        backgroundPosition: 'center center'
      }}
    >
      <div className='banner_contents'>
        <h1 className='banner_title'>
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className='banner_buttons'>
          <button className='banner_button'>Play</button>
          <a href='#movies_container' className='banner_button'>
            View Library
          </a>
        </div>
        <div className='banner_description'>
          {truncate(bannerMovie?.overview, 150)}
        </div>
      </div>
      <div className='banner--fadeBottom' />
    </header>
  );
}
