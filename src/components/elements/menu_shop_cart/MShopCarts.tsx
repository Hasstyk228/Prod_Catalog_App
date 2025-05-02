import {MShopCart} from '../../../types'

function MShopCarts ({cart ,addToCart , shopCart, setShopCart} : MShopCart) {


  /*--------Add--------*/
  const addProd = (itemId: number) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
        addToCart(item, 'add');
    }
  };

  /*------Remove------*/
  const removeCart = (itemId: number) => {
    const item = cart.find((c) => c.id === itemId);
    if (item) {
      if (item.quantity > 1) {
        addToCart(item, 'remove');
      }
    }
  };

  /*------Delete------*/
  const deleteItem = (itemId: number) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
      addToCart(item, 'delete');
    }
  };


  return (
    <div className="menu_shop_cart" style={{right: shopCart? '-400px' : '0px' , transition:'.3s'}}>
      <h2>Your Cart <p onClick={() => setShopCart(true)} style={{cursor:"pointer"}}>x</p></h2> 
      <section className="section_cart">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div key={item.id} className="cart">
              <p><img src={item.image} alt="" /></p>
              <div>
                <p>{item.title}</p>
                <div>
                  <button onClick={() => removeCart(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => addProd(item.id)}>+</button>
                  <p>{`${(item.quantity * item.price).toFixed(2)}$`}</p>
                  <button onClick={() => deleteItem(item.id)}></button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p style={{padding:'10px'}}>Cart is empty</p>
        )}
        <div>        
            {cart.length > 0 && (
                <p className='summ' style={{fontWeight:'bold', textAlign:'center'}}>
                    Total: {cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(1)} $
                </p>
            )}        
        </div>
      </section>
    </div>
  );
}

export default MShopCarts