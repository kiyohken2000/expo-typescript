import React, { createContext } from 'react'

interface Props {
  title: any;
  setTitle: any;
}

export const HomeTitleContext = createContext<Partial<Props>>({
  title: 'default title',
  setTitle: () => {},
});