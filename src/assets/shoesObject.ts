import productF01 from './images/image-product-1.jpg';
import productM01 from './images/image-product-1-thumbnail.jpg';
import productF02 from './images/image-product-2.jpg';
import productM02 from './images/image-product-2-thumbnail.jpg';
import productF03 from './images/image-product-3.jpg';
import productM03 from './images/image-product-3-thumbnail.jpg';
import productF04 from './images/image-product-4.jpg';
import productM04 from './images/image-product-4-thumbnail.jpg';

export interface ProductInterface {
    id: number,
    company: string,
    name: string,
    description: string,
    price: number,
    discount: number,
    counter: number,
    images: { full: string, mini: string }[]
}

export const product: ProductInterface = {
    id: 1,
    company: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 250,
    discount: 50,
    counter: 0,
    images: [
        { full: productF01, mini: productM01 },
        { full: productF02, mini: productM02 },
        { full: productF03, mini: productM03 },
        { full: productF04, mini: productM04 },
    ]
}