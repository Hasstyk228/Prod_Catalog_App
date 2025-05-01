import {Item} from '../../../types';


function Items ({users ,addToCart }: Item) {

    return (
        <div className='div_item'> 
            {users.map((user) => (
                <div key={user.id} className='item'>
                    <img src={user.image} alt=""/>
                    <hr />
                    <p>{user.title}</p>
                    <p>Category: {user.category}</p>
                    <h3>Price: {user.price +"$"}<button onClick={() => addToCart(user, 'add')}>Add</button></h3>
                </div>
            ))}
        </div>
    )
}

export default Items