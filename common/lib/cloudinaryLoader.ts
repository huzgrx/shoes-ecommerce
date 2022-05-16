import { ImageLoader } from 'next/image';

export const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  const tempWidth = width > 800 ? 800 : width;
  return `https://res.cloudinary.com/kriziuu/image/upload/w_${tempWidth}/q_${
    quality || 100
  },f_webp/${src}`;
};
