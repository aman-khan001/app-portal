import React from 'react'
import Navbar from './Navbar'
import CategoryListContextProvider from '@/store/category-store'

const Header = () => {
  return (
    <CategoryListContextProvider>
    <Navbar />
    </CategoryListContextProvider>
  )
}

export default Header