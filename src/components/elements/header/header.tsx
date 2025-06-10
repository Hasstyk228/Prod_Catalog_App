import {HeaderProps} from "../../../types"


function Header ({setShopCart, cart, search , setSearch }:HeaderProps) {

    return(
        <>
            <header>
                <div className="logo">Logo</div>
            <input className="input_search" type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder='Search' />
                <h2 className="cart_name">
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