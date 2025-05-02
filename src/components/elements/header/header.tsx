import {HeaderProps} from "../../../types"

function Header ({setShopCart, cart}:HeaderProps) {

    return(
        <>
            <header>
                <h2><a href="/">Home</a></h2>
                <h1>Shop</h1>
                <h2>
                    Cart
                    <div className="menu" onClick={() => setShopCart(false)}>
                    {cart.length>0 ? <div className="nr_prod_cart">{cart.length}</div> : ""}
                    </div>
                </h2>
            </header>
        </>
    )
}

export default Header