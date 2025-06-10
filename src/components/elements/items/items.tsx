import {Item} from '../../../types';

function Items ({users ,addToCart }: Item) {

    return (
        <div className='div_item'> 
            {users.map((user) => (
                <div key={user.id} className='item'>
                    <div><img src={user.image} alt=""/></div>
                    <div className='info'>
                        <p>Category: {user.category}</p>
                        <p>{user.title}</p>
                        <h3>
                            {user.price +"$"}
                            <button onClick={() => addToCart(user, 'add')} style={{cursor:"pointer"}}>
                            Buy
                            </button>
                        </h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Items