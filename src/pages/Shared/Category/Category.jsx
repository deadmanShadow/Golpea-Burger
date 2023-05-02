import React from 'react';
import { Outlet, useLoaderData, useParams } from 'react-router-dom';
import FoodCard from '../FoodCart/FoodCard';

const Category = () => {
    const {id} = useParams();
    const categoryFood = useLoaderData();
    return (
        <div>
            <h3> Foods are available: {categoryFood.length}</h3>
            
        
            <Outlet></Outlet>
            
        </div>
    );
};

export default Category;