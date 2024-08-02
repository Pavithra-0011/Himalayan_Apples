import {useState} from 'react'
import { useDispatch } from 'react-redux';
import ConfirmOrder from '../../Redux/Action/Order'
import tick from '../../assets/tick.gif'
import './styles.scss'

function ModalComponent({onClick}) {
  const [input, setInput] = useState(0);
  const [Calculate, setCalculate] = useState('');
  const [message, setmessage] = useState(false)
  const [order, setPlaceOrder] = useState(true)
  const [details, setDetails] = useState({
    name: '',
    contact: '',
    address: '',
    kgs: '',
  })
  const dispatch = useDispatch();
  const HandleChange = (e) => {
    const { name, value } = e.target;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));

    if (name === 'kgs') {
      const result = value * 200;
      const gst = result * 0.12;
      setInput(result + gst);
    }
  };

  const handleSubmit = async () => 
  {
    try {
      await dispatch(ConfirmOrder(details))
      setPlaceOrder(false);
      setmessage(true)
  }
  catch (error) {
    console.error("Error posting data:", error);
    }
  }
  return (
    <> 
      <div className='Modal-Container'>
        <div className='Model'>
          {order && (
            <>
            <div className='Head'>
                <h1>Place Your Order</h1>
            </div>
            <div className='Content'>
                <div>
                <p>Enter Your Name:</p>
                <input 
                type='text'
                placeholder='Name'
                name='name'
                value={details.name}
                onChange={HandleChange}
                />
                <p>Contact Number:</p>
                <input 
                placeholder='Contact'
                name='contact'
                value={details.contact}
                onChange={HandleChange}
                />
                <p>Delivery Address:</p>
                <input 
                type='text'
                placeholder='Address'
                name='address'
                value={details.address}
                onChange={HandleChange}
                />
                </div>
                <div>
                <p>Enter quantity of Apples<br/>(min 10kgs)</p>
                <input 
                type='number'
                placeholder='Kg'
                name='kgs'
                value={details.kgs}
                onChange={HandleChange}
                />
                <h3 style={{marginBottom:'0'}}>Total</h3>
                <p style={{margin:'0px'}}>Gst Included(12%)</p>
                <div style={{height:"50px", width:"150px", backgroundColor:"white", 
                  borderRadius:"12px", display:'flex', justifyContent:'center', alignItems:'center', margin:'5px'}}>
                  {input}
                </div>    
            </div>
            </div>
            <div className='Modal-buttons'>
                <button onClick={onClick}>CANCEL</button>
                <button onClick={(data) => handleSubmit(data)}>CONFIRM</button>
            </div>
            </>
          )}
            {message && (
            <div className='Sucess'>
              <img src={tick} alt="GIF" width="150" height="200"/>
              <p>Order Placed Sucessfully!</p>
              <button onClick={onClick}>GO BACK</button>
            </div>
            )}
        </div>
        </div>
    </>
  )
}

export default ModalComponent