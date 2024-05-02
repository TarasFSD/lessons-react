import React,{useEffect,useState} from 'react';
import {IProductProps, Product} from "../product";





export const Products = () => {
    const [data, setData] = useState<IProductProps[]>([])


    const getApi=()=>{
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setData(data.products));
    }


    useEffect(() => {
        getApi()
    }, []);
    return (
        <div>
            {data && data.map((item: IProductProps) => (<Product key={item.id} id={item.id}
                                                                 title={item.title}
                                                                 description={item.description}
                                                                 price={item.price}
                                                                 discountPercentage={item.discountPercentage}
                                                                 rating={item.rating}
                                                                 stock={item.stock}
                                                                 brand={item.brand}
                                                                 category={item.category}
                                                                 thumbnail={item.thumbnail}
                                                                 images={item.images}
            />))}
        </div>
    );
};

