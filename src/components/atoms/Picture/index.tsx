import { FC } from 'react';

export interface Props {
  webpPath: string;
  imagePath: string;
  imageAlt: string;
}

const Picture: FC<Props> = (props) => {
  const { webpPath, imagePath, imageAlt } = props;

  return (
    <picture>
      <source srcSet={webpPath} type="image/webp" />
      <img src={imagePath} alt={`${imageAlt}`} />
    </picture>
  );
};

export default Picture;
