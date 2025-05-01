import {MShopCart} from '../../../types'

function MShopCarts ({cart ,addToCart} : MShopCart) {

      const addProd = (itemId: number) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
      addToCart(item, 'add');
    }
  };

  const removeCart = (itemId: number) => {
    const item = cart.find((c) => c.id === itemId);
    if (item) {
      if (item.quantity > 1) {
        addToCart(item, 'remove');
      }
    }
  };

  const deleteItem = (itemId: number) => {
    const item = cart.find((i) => i.id === itemId);
    if (item) {
      addToCart(item, 'delete');
    }
  };

  return (
    <div className="menu_shop_cart">
      <h2>Your Cart</h2>
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
                  <button onClick={() => deleteItem(item.id)}>Delete</button>
                  <p>{`Price: ${(item.quantity * item.price).toFixed(2)}$`}</p>
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