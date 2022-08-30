import { CartItem } from './cartItem';

export function CartList(props) {
  const {
    order = [],
    handleCartShow = Function.prototype,
    removeFromBasket = Function.prototype,
    decQuantity = Function.prototype,
    incQuantity = Function.prototype,
  } = props;
  const totalPrice = order.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина</li>

      {order.length ? (
        order.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            decQuantity={decQuantity}
            incQuantity={incQuantity}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}

      <li className="collection-item active order-container">
        Общая стоимость: {totalPrice} руб.
        <button className="secondary-content btn btn-small order-btn">
          Оформить
        </button>
      </li>

      <i className="material-icons cart-close" onClick={handleCartShow}>
        close
      </i>
    </ul>
  );
}
