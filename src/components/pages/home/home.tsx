import Items from "../../elements/items/items"
import {User ,CartItem} from '../../../types'
import { useEffect, useState } from "react";
import Filters from "../../elements/filters/filters";
import MShopCarts from "../../elements/menu_shop_cart/MShopCarts";
import Header from "../../elements/header/header";

function Home () {
    const [users,setUsers] = useState<User[]>([]);
    const [load,setLoad] = useState<boolean> (true)
    const [error,setError] = useState<string | null> (null)
    const [select, setSelect] = useState<string>("all");
    const [sort, setSort] = useState<'asc' | 'desc'> ('desc');
    const [search, setSearch] = useState<string>("");
    const [cart, setCart] = useState<CartItem[]>([]);    
    const [shopCart,setShopCart] = useState<boolean>(true)

    useEffect(() => {
  
      fetch('https://fakestoreapi.com/products')
      .then(response => {
        if(!response.ok){
          throw new Error('Error Network:'+ response.status + ' - Refresh Page');
        } return response.json()
      })
      .then((data:User[]) => {
        setUsers(data);
        setLoad(false);
      })
      .catch(err => {
        setError(err.message);
        setLoad(false);
      })
    
    } ,[])
  
    if (load) { return <h1 style={{textAlign:'center', marginTop:'20%'}}>Loading page…</h1>; }
    if (error) { return <h1 style={{textAlign:'center', marginTop:'20%', color: 'red' }}>Error: {error}</h1>; }
    
    const filteredUsers = (select === "all") ? users : users.filter((user) => user.category === select);
    const sortedUsers = [...filteredUsers].sort((a, b) => { return (sort === 'asc') ? a.price - b.price : b.price - a.price; });
    const searchUsers = sortedUsers.filter(user => user.title.toLowerCase().includes(search.toLowerCase())) ;

    const addToCart = (item: User | CartItem, action: 'add' | 'remove' | 'delete') => {

      setCart((prevCart) => {
    
        const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
    
        if (itemInCart) {

          /*--------Add--------*/
          if (action === 'add') {
            return prevCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem );
          }

          /*------Remove------*/
          if (action === 'remove') {
            return prevCart.map((cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) } : cartItem );
          }

          /*------Delete------*/
          if (action === 'delete') {
            return prevCart.filter(cartItem => cartItem.id !== item.id);
          }
          
        } else {
          return [...prevCart, { ...item, quantity: 1 }];
        }

        return prevCart;
      });
    };

    return (
      <>
      <Header shopCart={shopCart} setShopCart={setShopCart} cart={cart}/>
      <Filters select={select} setSelect={setSelect} sort={sort} setSort={setSort} search={search} setSearch={setSearch} />
      <Items users={searchUsers} addToCart={addToCart}/>
      <MShopCarts cart={cart} setCart={setCart} addToCart={addToCart} shopCart={shopCart} setShopCart={setShopCart} />
      </>
    )
}

export default Home