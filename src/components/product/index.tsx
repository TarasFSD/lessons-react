import React, {FC,} from 'react';
import "./style.css"
export interface IProductProps {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

export const Product: FC<IProductProps> = ({
                                               id,
                                               title,
                                               description,
                                               price,
                                               discountPercentage,
                                               rating,
                                               stock,
                                               brand,
                                               category,
                                               thumbnail,
                                               images
                                           }) => {
    return (
        <div className="border">
            <ul>
                <img src={thumbnail} alt="img"/>
                <li>{title}</li>
                <li>{description}</li>
                <li>{price}</li>
                <li>{discountPercentage}</li>
                <li>{rating}</li>
                <li>{stock}</li>
                <li>{brand}</li>
                <li>{category}</li>
                {images && images.map((item:string)=>(
                    <img key={item} className="small-icon" src={item} alt="img"/>
                ))}
            </ul>
        </div>
    );

};

