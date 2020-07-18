import React, { FC } from 'react';

import Picture, { Props } from './picture';

export default {
  component: Picture,
  title: 'Picture Component',
};

export const Webp: FC<Props> = () => (
  <Picture
    webpPath="/images/big_logo.webp"
    imagePath="/images/big_logo.png"
    imageAlt="Webp sample"
  />
);

export const PNG: FC<Props> = () => (
  <Picture webpPath="" imagePath="/images/big_logo.png" imageAlt="PNG sample" />
);
