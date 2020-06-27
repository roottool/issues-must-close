import React, { FC } from 'react'

import Picture, { Props } from './picture'

export default {
  component: Picture,
  title: 'Picture Component',
}

export const Default: FC<Props> = () => (
  <Picture webpPath="" imagePath="/images/big_logo.png" imageAlt="Sample" />
)
