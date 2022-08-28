import { createContext, useState, useEffect } from 'react';

import { addCollectionAndDocument, getCategoriesAndDocuments } from '../utils/firebase/firebase';

//import SHOP_DATA from '../shop-data';

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocument('categories', SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>;
};
