import React from 'react'
import { Button, Card, Col, Form, Image } from 'react-bootstrap'
import {PiDotsThreeOutlineThin, PiPlayFill, PiSpinnerGap} from 'react-icons/pi'
import { FaRupeeSign } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { RiCheckboxBlankLine } from 'react-icons/ri'
import { MdOutlinePlayCircleOutline } from 'react-icons/md'
import { BsFillPlayCircleFill} from 'react-icons/bs'
import logo1 from "./Images/logo-art.png"
import border from "./Images/border.png"
import spinner from './Images/spinner.png'
import { Carousel } from 'antd'

const Home = () => {
    const contentStyle = {
        // height: 'auto',
        // width:'auto',
        // color: '#fff',
        lineHeight: '0px',
        textAlign: 'center',
        // background: '#364d79',
      };
    
  return (
    <div className='home-div'>
        <div className='page-1 text-center'>
            <Button className='btn-1 mt-5'>
            Complete your claim in<br/>
            09:15
            </Button>
        </div>
        <div className='logo-div'>
            <div>
                <img src={spinner} style={{width:"150px",marginLeft:'50px'}}/>
            </div>
            <div>
                <img src={logo1} alt="logo" style={{width:"150px",marginRight:'50px'}}/>
            </div>
        </div>
        {/* <div className='img-div m-auto'>
          <Image className='image1' src="https://i.pinimg.com/736x/95/11/89/951189e929dba6699a8d39e5d485c6ff.jpg" rounded/>
          <Image className='image2' src={border} />
            <div className='text-center'>
                <img src='https://media.istockphoto.com/id/1095468748/vector/qr-code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Jnh2TAkAFm7QpaBgCyCuGbCA6nomDfk4-XiTsBhbHFk='className='img-QR'/>
            </div>
            <h2 className='mt-5 text-light text-center'>Lady With A Lamb</h2>
            <div className='content-div text-light'>
                <div>
                    <h3>Creator</h3>
                    <h2>Raja Ravi</h2>
                    <h2>Varma</h2>
                </div>
                <div>
                    <h3>Product Value</h3>
                    <h2><FaRupeeSign/>10 Cr</h2>
                </div>
            </div>
        </div> */}
        <div className=''>
        <Card style={{ width: '35rem' }} className=' m-auto card-1'>
            <Card.Img  className='image1' src="https://i.pinimg.com/736x/95/11/89/951189e929dba6699a8d39e5d485c6ff.jpg" />
            <Card.Img  src={border} className='image2'  />
            <div className='text-center bg-div'>
            
            <img  src='https://media.istockphoto.com/id/1095468748/vector/qr-code-abstract-vector-modern-bar-code-sample-for-smartphone-scanning-isolated-on-white.jpg?s=612x612&w=0&k=20&c=Jnh2TAkAFm7QpaBgCyCuGbCA6nomDfk4-XiTsBhbHFk='className='img-QR'/>
            </div>
            <Card.Body style={{backgroundColor:'black',border:'none'}}>
                <Card.Title className='text-light fs-1 text-center' >Lady With A Lamb</Card.Title>
                <Card.Text>
                <div className='content-div text-light'>
                <div>
                    <h3>Creator</h3>
                    <h2>Raja Ravi</h2>
                    <h2>Varma</h2>
                </div>
                <div>
                    <h3>Product Value</h3>
                    <h2><FaRupeeSign/>10 Cr</h2>
                </div>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
        <div className='mt-4'>
        <div className='border-div m-auto'>
            <div className='d-flex raja-div'>
                <div className=' img-raja'>
                    <img src="https://i0.wp.com/indiathedestiny.com/wp-content/uploads/2017/06/Ravi-varma.jpg?fit=900%2C750&ssl=1" alt="" width={'300px'}/>
                </div>
                <div className='text-light raja-div2'>
                    <h1>Raja</h1>
                    <h1>Ravi</h1>
                    <h1>Varma</h1>
                </div>
            </div>
            <div>
                <p>
                Raja Ravi Varma was an Indian  painter and artist. He is considered  among the greatest painters in the  history of Indian art. His works are  one of the best examples of the  fusion of European academic art with  a purely Indian sensibility and  iconography. He was known as the  first modern Indian artist.
                </p>
            </div>
            </div>
        </div>
        <div className='page-3 mt-5 text-center'>
            <div>
            <img src="http://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2018/03/21/Photos/Processed/raja-kaCC--621x414@LiveMint.jpg" className='img2' alt="" width={'520px'}/>
            <BsFillPlayCircleFill style={{fontSize:'50px'}} className='ply-btn'/>
            </div>
        </div>
        <div className='mt-5 text-center'>
            <Button className='btn-2'>Product Info <IoIosArrowDown/></Button>
        </div>
       
         <div className='mt-5'><Carousel autoplay>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHWJeMUUtaGt7Ni7MCrisSTXa6YC3u2eD11LcvPt_wCh1eZMP' className='m-auto carosel-div' style={contentStyle} alt="" />
            </div>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHWJeMUUtaGt7Ni7MCrisSTXa6YC3u2eD11LcvPt_wCh1eZMP' className='m-auto  carosel-div' style={contentStyle} alt="" />
            </div>
            <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHWJeMUUtaGt7Ni7MCrisSTXa6YC3u2eD11LcvPt_wCh1eZMP' className='m-auto  carosel-div' style={contentStyle} alt="" />
            </div>
            
        </Carousel>
        </div>
        <div className='page-5 mt-5 text-light text-center'>
            <h1>Our Partners</h1>
            <div className='d-flex page5-logo ps-2 pe-2' style={{height:'98px',backgroundColor:'white'}}>
                <div>
                    <img src="https://binarygeckos.com/images/logo/bg6.png" alt="" width={'100px'} />
                </div>
                <div>
                    <img src="https://media.licdn.com/dms/image/C4D0BAQG8RR60ZkJI0w/company-logo_200_200/0/1637219132745?e=2147483647&v=beta&t=UtkcjYLkmrBhUCvaq-YXpPElrNyHTsGlFUrOHuN1Rn8" alt="" width={'70px'} />
                </div>
                <div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1200px-Tata_logo.svg.png" alt="" width={'70px'} />
                </div>
                <div>
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Coca-Cola-logo.png" alt="" width={'100px'} />
                </div>
               
            </div>

        </div>
        <div className='page-6 mt-5 text-light'>
            <h2 className='mb-3'>Steps to Claim</h2>
            <ol>
                <li>Accept the Terms & Conditions</li>
                <li>Complete the Survey</li>
                <li>Accept the NFB</li>
            </ol>
            <RiCheckboxBlankLine style={{fontSize:'30px',color:'white'}}/> <span className='fs-2'> Accept the Terms & Conditions.</span> 
             <div className='mt-5 text-center'>
                <Button className='btn-3'>Continue</Button>
            </div>
            
        </div>
    </div>
  )
}

export default Home