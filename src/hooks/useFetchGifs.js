import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGif';


export const usefetchGifs = (category) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [state, setstate] = useState({ data: [], loading: true });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getGifs(category)
      .then(imgs => {
        setstate({ data: imgs, loading: false })
      })
  }, [category]);

  return state;
}