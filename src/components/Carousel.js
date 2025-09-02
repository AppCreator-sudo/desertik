import React, { useState, useEffect } from 'react';
import { TiChevronLeftOutline, TiChevronRightOutline } from 'react-icons/ti';
import '../Carousel.css';

const MAX_VISIBILITY = 3;

const Carousel = ({ items }) => {
  const [active, setActive] = useState(0);
  const count = items.length;
  
  // Обработчик свайпов для мобильных устройств
  const handleSwipe = (direction) => {
    if (direction === 'left' && active < count - 1) {
      setActive(prev => prev + 1);
    } else if (direction === 'right' && active > 0) {
      setActive(prev => prev - 1);
    }
  };

  // Добавляем обработчик свайпов
  useEffect(() => {
    let touchStartX = 0;
    let touchEndX = 0;
    
    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
    };
    
    const handleTouchEnd = (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe(touchStartX - touchEndX > 0 ? 'left' : 'right');
    };
    
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      carousel.addEventListener('touchstart', handleTouchStart);
      carousel.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        carousel.removeEventListener('touchstart', handleTouchStart);
        carousel.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [active, count]);

  return (
    <div className='carousel'>
      {active > 0 && (
        <button className='nav left' onClick={() => setActive(i => i - 1)}>
          <TiChevronLeftOutline />
        </button>
      )}
      
      {items.map((item, i) => (
        <div 
          key={item.id}
          className='card-container'
          style={{
            '--active': i === active ? 1 : 0,
            '--offset': (active - i) / 3,
            '--direction': Math.sign(active - i),
            '--abs-offset': Math.abs(active - i) / 3,
            pointerEvents: active === i ? 'auto' : 'none',
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
            display: Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
          }}
        >
          <div className='card'>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="price">{item.price}</p>
          </div>
        </div>
      ))}
      
      {active < count - 1 && (
        <button className='nav right' onClick={() => setActive(i => i + 1)}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};

export default Carousel;
