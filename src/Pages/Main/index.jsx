import {useState, useRef} from 'react'
import Background from '../../assets/Background.jpg'
import SunApples from '../../assets/SunApples.jpg'
import SunApples2 from '../../assets/SunApples2.jpg'
import SunApples3 from '../../assets/SunApples3.jpg'
import AppleCleanser from '../../assets/AppleCleanser.jpg'
import AppleMoisturizer from '../../assets/AppleMoisturizer.jpeg'
import AppleSerum from '../../assets/AppleSerum.jpg'
import Lipgloss from '../../assets/Lipgloss.jpg'
import check from '../../assets/check.mp4'
import { useDispatch } from 'react-redux';
import PostData from '../../Redux/Action/index'
import SliderComponent from '../../Components/Sliders/index'
import ModalComponent from '../../Components/Modal/index'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { motion, useScroll, useSpring } from "framer-motion";
import './styles.scss'

function MainPage() {
  const targetRef = useRef(null);
  const [dataa, setDatas] = useState({
    name: '',
    email: '',
    message:''
  })
  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [forms, showForms] = useState(true)
  const dispatch = useDispatch();

  const HandleClick = async () => {
    try {
        await dispatch(PostData(dataa));
        setShow(true); 
        showForms(false);
    } catch (error) {
        console.error("Error posting data:", error);
        setShow(false);
    }
};

const handleAskClick = () => {
  if (targetRef.current) {
    targetRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};

const HandleBuyClick = () =>
{
   setShowModal(true);
}
const HandleCancel = ()=>
{
  setShowModal(false)
}
  const HandleChange = (e)=>
  {
    setDatas({
      ...dataa,
      [e.target.name] : [e.target.value],
    })
    console.log(e.target.value)
  }

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    <div className='Hero'>
      <h2>HAPPS</h2>
      <motion.button whileHover={{scale: 1.1}} onClick={handleAskClick}>CONTACT US</motion.button>
    </div>

    <div className='Container'>
      <div className='Herosection'>
        <h1>Himalayan Apples</h1>
        <p>Our product, Himalayan apples, are handpicked from the lush orchards of the Himalayan foothills,
           offering unmatched freshness and flavor. Each apple boasts a crisp texture and a perfect balance of 
           sweetness and tanginess, making them an ideal choice for a healthy snack. Rich in essential nutrients 
           and antioxidants, our Himalayan apples promote well-being while delighting your taste buds. Experience 
           the natural goodness and exceptional quality of our Himalayan apples with every bite.</p>
           <div className='Buttons'>
             <motion.button whileHover={{scale: 1.1}} className='ask' onClick={handleAskClick}>ASK US</motion.button>
             <motion.button whileHover={{scale: 1.1}} className='buy' onClick={HandleBuyClick}>BUY</motion.button>
           </div>
      </div>
    </div>

    <div className='Container2'>
      <h1 className='title'>What Makes our Apples Unique?</h1>
      <div className='contents'>
        <div className='descriptions'>
        <p>Himalayan apples are grown in the pristine, high-altitude orchards of the Himalayas, 
          where the air is exceptionally clean and the soil is rich with natural minerals. 
          This unique environment enhances the apples' flavor, making them more vibrant and aromatic. 
          The untouched surroundings contribute to their superior quality, ensuring a truly fresh and authentic 
          taste in every bite. The pure, natural setting of their origin sets 
          Himalayan apples apart, offering a premium fruit experience.</p>
        </div>
        <motion.div className='Image'
          whileHover={{
          scale: 1.1,
        }}
        >
          <img src={SunApples} />
        </motion.div>
      </div>

      <div className='contents'>
      <motion.div className='Image'
          whileHover={{
          scale: 1.1,
        }}>
          <img src={Background} />
        </motion.div>
        <div className='descriptions'>
        <p>Our Himalayan apples are cultivated using natural farming practices, free from
           synthetic pesticides and fertilizers. This commitment to organic methods ensures 
           that each apple is grown in harmony with nature, preserving its pure taste and nutritional value.
            By embracing traditional farming techniques, we enhance the apples' natural sweetness and crispness
             while protecting the environment. This dedication to natural farming makes our Himalayan apples not 
             only a healthier choice but also a more sustainable one..</p>
        </div>
      </div>

      <div className='contents'>
        <div className='descriptions'>
        <p>Each Himalayan apple is meticulously handpicked to ensure the highest quality and freshness. 
          Our skilled farmers carefully select only the ripest and most perfect apples, preserving their 
          delicate flavor and crisp texture. This hands-on approach guarantees that every apple meets our 
          rigorous standards before reaching you. Handpicked freshness is at the core of our commitment to 
          delivering a superior product with every bite.</p>
        </div>
        <motion.div className='Image'
          whileHover={{
          scale: 1.1,
        }}>
          <img src={SunApples3} />
        </motion.div>
      </div>
    </div>

    <div className='Container3'>
       <div><h1 className='More text-black text-center'>More Products</h1></div>
       <div className='Images'>
        
        <div className='wrap'>
          <div className='img1'><img src={AppleCleanser} /></div>
          <div className='cont'><h3>Apple Hair Serum</h3></div>
        </div>
        
        <div className='wrap'>
          <div className='img1'><img src={AppleMoisturizer} /></div>
          <div className='cont'><h3>Apple Skincare Products</h3></div>
        </div>
        
        <div className='wrap'>
        <div className='img1'><img src={AppleSerum} /></div>
        <div className='cont'><h3>Apple Vitamins</h3></div>
        </div>
        <div className='wrap'>
           <div className='img1'><img src={Lipgloss} /></div>
           <div className='cont'><h3>Apple Body Serum</h3></div>
        </div>
       </div>
    </div>
    
    {/* <div className='Slider-Container'>
      <div className='Slide'>
        <SliderComponent/>
      </div>
    </div> */}


     <div className='Container5' ref={targetRef}>
      {forms && (
        <div className='form'>
        <h2>Drop us your Queries!</h2>
        <h4>Enter Your Name</h4>
        <input 
        placeholder='Name'
        name='name'
        value={dataa.name}
        onChange={HandleChange}
        />
        <h4>Enter Your Email id</h4>
        <input 
        placeholder='Emai id'
        name='email'
        value={dataa.email}
        onChange={HandleChange}
        />
        <h4>Enter Your Message</h4>
        <input
        placeholder='Message'
        type='text'
        name='message'
        value={dataa.message}
        onChange={HandleChange}
        />
        <br/><button className='Submit' onClick={(data) => HandleClick(data)}>Submit</button>
        </div>
      )}
        {show && (
        <div className='Sucess-message'>
          <video width="150px" height="200px" contents autoPlay muted>
            <source src={check} type="video/mp4"/>
          </video>
          <div>
          <p className='context'>Message received Sucessfully we will get back to you shortly! </p>
          </div>
        </div>
        )}
    </div>
    {showModal && (
       <ModalComponent
       onClick={HandleCancel}
       />
    )}
<footer>
    <div>
      <p>© 2024 Himalayan Apples. All Rights Reserved.</p>
  </div>
</footer>
    </>
  )
}

export default MainPage