interface picture {
    id: number;
    src: string
}

interface color {
    id: number;
    value: string;
    stockValue: number;
}

interface categoryRef {
    id: number;
    name: string;
}

export interface category extends categoryRef {
    products: product[]
}

export interface productCard {
    id: number;
    name: string;
    price: number;
    coverImage: string;
    addToCart: Function;
}

export interface product {
    id: number;
    name: string;
    category: number;
    description: string;
    price: number;
    stock: number;
    warranty: number;
    ram: number;
    storage: number;
    processor: string;
    display: string;
    width: number;
    height: number;
    pictures: picture[];
    colors: color[];
    categoryRef: categoryRef
}

export interface cart {
    id: number;
    user: number;
    product: number;
    stock: number;
    color: string;
    userRef: any;
    productRef: product
}