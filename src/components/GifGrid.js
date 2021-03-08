import React from 'react';
import PropTypes from 'prop-types';
import { usefetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

  const { data: images, loading } = usefetchGifs(category);

  return (
    <>
      <h3 className={'animate__animated animate__bounce'}>{category}</h3>
      {loading && <p>Loading</p>}
      <div className={'card-grid'}>
        {
          images.map(img =>
            <GifGridItem
              key={img.id}
              {...img}
            />
          )
        }
      </div>
    </>

  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
}
