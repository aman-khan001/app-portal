'use client'
import { useReducer, createContext } from "react";
export const CategoryListContext = createContext({
    categoryList: [],
    addCategory: () =>{},
    deleteCategory: () =>{},
});


const categoryReduser = (currValue, action) =>{
    const newCategories = currValue;
    if (''){}
    return currValue;
}


const CategoryListContextProvider = ({children}) =>{
    const [categoryList, dispatchCategoryList] = useReducer(categoryReduser, DEFAULT_CATEGORY_LIST)
    const addCategory =()=>{

    }
    const deleteCategory = () =>{

    }
    return <CategoryListContext.Provider value={{
        categoryList,
        addCategory, 
        deleteCategory
    }}>
    {children}
    </CategoryListContext.Provider>
}


const DEFAULT_CATEGORY_LIST = [
    {
        id: 1,
        name: 'Games',
        image: '/images/categories/1698324057.webp',
        address: 'https://app-portal.foxart.co/categories/games'
    },
    {
        id: 2,
        name: 'Entertainment',
        image: "/images/categories/1698324037.webp",
        address: 'https://app-portal.foxart.co/categories/entertainment'
    },
    {
        id: 3,
        name: 'Communication',
        image: "/images/categories/1698324138.webp",
        address: 'https://app-portal.foxart.co/categories/communication'
    },
    {
        id: 4,
        name: 'Security',
        image: "/images/categories/1698324212.webp",
        address: 'https://app-portal.foxart.co/categories/security'
    },
    {
        id: 5,
        name: 'Tools',
        image: "/images/categories/1698324238.webp",
        address: 'https://app-portal.foxart.co/categories/tools'
    },
    {
        id: 6,
        name: 'Media',
        image: "/images/categories/1698324340.webp",
        address: 'https://app-portal.foxart.co/categories/media'
    },
    {
        id: 7,
        name: 'Internet',
        image: "/images/categories/1698324374.webp",
        address: 'https://app-portal.foxart.co/categories/internet'
    },
    {
        id: 8,
        name: 'Education',
        image: "/images/categories/1698324468.webp",
        address: 'https://app-portal.foxart.co/categories/education'
    },
]

export default CategoryListContextProvider;
