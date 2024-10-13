function Cart(props) {
    const {quantity = 0, handleBasketShow = Function.prototype} = props

    return (
        <div className="cart #00796b teal darken-2 white-text" onClick={handleBasketShow}>
            <i className="material-icons">local_grocery_store</i>
            {quantity ? <span className="cart-quantity">{quantity}</span> : null}
        </div>
    )
}


export {Cart}