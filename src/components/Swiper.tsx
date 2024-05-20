import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';
register();

const Swiper = ({ thumbnails }: { thumbnails: string[] }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer: any = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container
      centeredSlides={true}
      ref={swiperRef}
      init={false}
      style={{ padding: '16px' }}
    >
      {thumbnails.map((url, index) => {
        return (
          <swiper-slide
            className="swiper-slide"
            style={{ display: 'flex', justifyContent: 'center' }}
            key={index}
          >
            <img
              src={url}
              width={800}
              height={600}
              className="rounded-xl"
              alt=""
            />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default Swiper;
