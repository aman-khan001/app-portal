'use client'
import Image from 'next/image'
import { CategoryListContext } from '@/store/category-store'
import React, { useContext } from 'react'

export const Categories = () => {
  const { categoryList } = useContext(CategoryListContext)
  return (
    <li className="nav-item dropdown ms-md-1">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdown_categories"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul
                className="dropdown-menu shadow"
                aria-labelledby="dropdown_categories"
              >
                { categoryList.map(category => <li key={category.id} className="px-md-1">
                  <a
                    className="dropdown-item px-md-2"
                    href="https://app-portal.foxart.co/categories/games"
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      className="rounded-circle me-2"
                      width={25}
                      height={25}
                    ></Image> 
                    {category.name}
                  </a>
                </li>) }
              </ul>
            </li>
  )
}
