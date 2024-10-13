import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const { order = [], 
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity,
    decQuantity,
} = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">
        Корзина
      </li>
        {
            order.length ? order.map(item => (
                <BasketItem
                 key={item.mainId} 
                 removeFromBasket = {removeFromBasket} 
                 incQuantity = {incQuantity}
                 decQuantity = {decQuantity}
                 {...item} />
            )) : <li className="collection-item">Корзина пуста</li>
        }
      <li className="collection-item active">
        Общая стоимость: {totalPrice} RUB
      </li>
      <li className="collection-item active">
        <button className="btn-small center">Оформить заказ</button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  );
}

export { BasketList };
