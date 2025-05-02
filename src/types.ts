export interface User {
  id:number ,
  title:string,
  price:number,
  description:string,
  category:string,
  image:string,
  rating:{
    rate: number;
    count: number;
  }
}

export interface CartItem extends User {
  quantity: number;
}

export interface Item {
  users:User[];
  addToCart: (item: User, action: 'add') => void;
}

export interface MShopCart {
  cart: CartItem[];
  setCart: (cart: CartItem[]) => void
  addToCart: (item: CartItem, action: 'add' | 'remove' | 'delete') => void;
  shopCart: boolean;
  setShopCart :(shopCart: boolean) => void;
}

export interface HeaderProps {
  cart: CartItem[];
  shopCart: boolean;
  setShopCart :(shopCart: boolean) => void;
}

export interface Filter {
  select: string;
  setSelect: (select: string) => void;
  sort: 'asc' | 'desc';
  setSort: (sort: 'asc' | 'desc') => void;
  search: string;
  setSearch : (search:string) => void;
}
