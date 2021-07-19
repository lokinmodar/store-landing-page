import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState } from 'react';
import games from '../../images/games.png';
import consoles from '../../images/consoles.png';
import rpg from '../../images/rpg.png';
import cardgames from '../../images/cardgames.png';
import salada from '../../images/salada.png';

const OffersCarousel = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const onChange = (svalue: React.SetStateAction<number>): void => {
    setValue(svalue);
  };

  return (
    <div id='carousel'>
      <Carousel
        value={value}
        onChange={onChange}
        plugins={[
          'infinite',
          {
            resolve: autoplayPlugin,
            options: {
              interval: 4000
            }
          }
        ]}
        animationSpeed={1000}
      >
        <img className='img-example' src={games} alt='games' />
        <img className='img-example' src={consoles} alt='consoles' />
        <img className='img-example' src={rpg} alt='rpg' />
        <img className='img-example' src={cardgames} alt='cardgames' />
        <img className='img-example' src={salada} alt='salada' />
      </Carousel>
    </div>
  );
};

export default OffersCarousel;
