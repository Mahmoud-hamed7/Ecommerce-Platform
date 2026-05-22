
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { IProduct, IProductsResponse } from '../Types/types';
import ProductsSection from './ProductsSectionProps';

export default function CategoryDetails() {
      const [ApiProductCategories, setApiProductCategories] = useState<IProduct[]>([]);
      const [categoryName, setCategoryName] = useState('');

    
    const {id}=useParams()
    // console.log(id);

    function handleApi(categoryId: string) {
        axios.get<IProductsResponse>('https://ecommerce.routemisr.com/api/v1/products').then(({data})=>{
            // console.log(data);
            let allData = data.data
            const filterData=allData.filter((product)=>{
                return   product.category._id==categoryId
            })
           
        if (filterData.length > 0) {
          setCategoryName(filterData[0].category.name);
        }
            setApiProductCategories(filterData)

            console.log(filterData);
            
        }).catch(

        )
    }

    useEffect(()=>{
        if (id) {
            console.log(ApiProductCategories);
            
            handleApi(id)
        }
    },[id])




  return (
    <>   
          <ProductsSection title={categoryName} products={ApiProductCategories} />
    </>

  );
}