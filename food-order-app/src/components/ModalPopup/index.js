import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Modal.css";
import "../../pages/HomePage/HomePage.css";

const ModalPopup = (props) => {
    const { cart, onClickShow, onIncreaseQuantity, onDecreaseQuantity } = props;
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();
    const handleClose = () => props.onShowCart(false);
    
    const onMoveToCheckout = () => {
        navigate("./checkout");
        props.onShowCart(false);
    }

    /* onChange */
    const onHandleChange = (e, item) => {
        // console.log({ name, value });
        props.onUpdateQuantityOnCart(item, Number(e.target.value));
    }

    const cartItem = cart.map((item) => {
        const { id, name, price, quantity } = item;
        return (<>
            <li>
                <p>{name}</p>
                <div className='cart-info-container'>
                    <label htmlFor="amount" id={id}>{price}
                        <input type="text" className="amount" name={id} onChange={(e) => onHandleChange(e, item)} value={`x ${quantity}`} min="0"></input>
                    </label>
                    <div className='cart-btn'>
                        <button onClick={() => { onDecreaseQuantity(id) }} disabled={quantity > 0 ? false : true}>-</button>
                        <button onClick={() => { onIncreaseQuantity(id) }}>+</button>
                    </div>
                </div>
            </li>
            {/* <div className='total-price'>
                <p>Total amount<span>{(price * quantity).toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    currencyDisplay: 'symbol'
                })}</span></p>
            </div> */}
        </>);
    });
    
    return (
        <>
            <Modal
                show={onClickShow}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body>{cart.length === 0 ?
                    (<p className='noti'>Cart is emtpy now! Please choose some meals to enjoy your lunch/dinner.</p>) :
                    (<ul className='cart-popup'>{cartItem}</ul>)}
                </Modal.Body>
                <Modal.Footer>    
                    {/* <div className='total-price'>
                        <p>Total amount<span>{(price * quantity).toLocaleString('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            currencyDisplay: 'symbol'
                        })}</span></p>
                    </div>  */}               
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={onMoveToCheckout}>Checkout</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopup;