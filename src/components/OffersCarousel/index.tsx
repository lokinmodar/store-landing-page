import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React, { useState } from 'react';

const OffersCarousel = (): JSX.Element => {
  const [value, setValue] = useState(0);

  const onChange = (svalue: React.SetStateAction<number>): void => {
    setValue(svalue);
  };

  return (
    <div>
      <Carousel value={value} onChange={onChange}>
        <img className='img-example' src='/' alt='ia' />
        ...
        <img className='img-example' src='/' alt='ib' />
      </Carousel>
      <Dots value={value} onChange={onChange} />
    </div>
  );
};

export default OffersCarousel;
