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
    <swiper-container ref={swiperRef} init="false" class=" px-4">
      {thumbnails.map((url) => {
        return (
          <swiper-slide class="flex items-center justify-center">
            <img src={url} width={800} height={600} class="rounded-xl" alt="" />
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
};

export default Swiper;
