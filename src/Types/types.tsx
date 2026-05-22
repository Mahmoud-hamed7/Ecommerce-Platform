export interface ProductType {
  id: number;
  name: string;
  image: string;
}


 export interface SlideType {
  title: string;
  description: string;
  image: string;
  price: string;
}



 export interface ProductcardType {
  id: number;
  category: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}



// interfaces/product.interface.ts

export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface IBrand {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface ISubcategory {
  _id: string;
  name: string;
  slug: string;
  category: string;  // بيجي string مش object
}

export interface IProduct {
  _id: string;
  id: string;        // ⚠️ الـ API بيرجع الاتنين
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  imageCover: string;
  images: string[];
  sold: number;
  ratingsAverage: number;
  ratingsQuantity: number;
  category: ICategory;
  brand: IBrand;
  subcategory: ISubcategory[];
  createdAt: string;
  updatedAt: string;
}

export interface IProductsResponse {
  results: number;
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
  };
  data: IProduct[];
}



export interface ICartItem {
  _id: string;
  count: number;
  price: number;
  product: IProduct;
}

export interface ICartData {
  products: ICartItem[];
  totalCartPrice: number;
}

export interface ICartResponse {
  status: string;
  numOfCartItems: number;
  data: ICartData;
}
