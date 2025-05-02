import {HeaderProps} from "../../../types"

function Header ({setShopCart}:HeaderProps) {

    

    return(
        <>
            <header>
                <h2><a href="/">Home</a></h2>
                <h1>Shop</h1>
                <h2>Cart<p className="menu" onClick={() => setShopCart(false)}></p></h2>
            </header>
            
        </>
    )
}

export default Header