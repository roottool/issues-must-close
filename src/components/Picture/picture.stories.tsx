import React, { FC } from 'react';

import Picture from './picture';

export default {
  component: Picture,
  title: 'Picture Component',
};

export const Webp: FC = () => (
  <Picture imageName="big_logo.png" imageAlt="Webp sample" />
);
