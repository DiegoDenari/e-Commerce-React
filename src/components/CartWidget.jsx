import cart from '../assets/carritocompras.png';

const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <img src={cart} width={50} height={50} alt="" />
      <h2>3</h2>
    </div>
  )
} 

export default CartWidget;