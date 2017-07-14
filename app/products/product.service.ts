import { Injectable } from '@angular/core';

import { IProduct } from './product'
@Injectable()
export class ProductService{
	getProducts(): IProduct[]{
		return[
		{
	        "productID": 5,
	        "productName": "Hammer",
	        "productCode": "TBX-0048",
	        "releaseDate": "May 21, 2016",
	        "description": "Curved claw steel hammer",
	        "price": 8.9,
	        "starRating": 4.8,
	        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
	    },
	    {
	        "productID": 8,
	        "productName": "Saw",
	        "productCode": "TBX-0022",
	        "releaseDate": "May 15, 2016",
	        "description": "15-inch steel blade hand saw",
	        "price": 11.55,
	        "starRating": 3.7,
	        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
	    },
	    {
	        "productID": 10,
	        "productName": "Video Game Controller",
	        "productCode": "GMG-0042",
	        "releaseDate": "October 15, 2015",
	        "description": "Standard two-button video game controller",
	        "price": 35.95,
	        "starRating": 4.6,
	        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
	    }
	 	];
	}
}