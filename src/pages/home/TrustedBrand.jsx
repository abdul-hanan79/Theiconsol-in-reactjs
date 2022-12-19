import React from 'react'
import {Container} from 'react-bootstrap';
import airbnb from "../../assests/brands/airbnb.svg"
import amazon from "../../assests/brands/amazon.svg"
import cred from "../../assests/brands/cred.svg"
import disnep from "../../assests/brands/disney.svg"
import duolings from "../../assests/brands/duolingo.svg"
import google from "../../assests/brands/google.c0129cb.svg"
import instacart from "../../assests/brands/instacart.svg"
import microsoft from "../../assests/brands/microsoft.svg"
import tiktok from "../../assests/brands/tiktok.svg"
import spotify from "../../assests/brands/spotify.svg"
import uber from "../../assests/brands/uber.svg"
import netflix from "../../assests/brands/netflix.svg"


export default function TrustedBrand() {
  return (
    <>
    <Container >
      <h5 className=' trusted-brand-heading text-center mt-5'>Trusted by more than 1 million users globally</h5>
      <div className='trusted-brand-logos d-flex align-items-center justify-content-center flex-wrap '>
             <img src={airbnb} alt=""  className='trusted-brand-img'/>
             <img src={netflix} alt="" className='trusted-brand-img' />
             <img src={microsoft} alt="" className='trusted-brand-img' />
             <img src={instacart} alt="" className='trusted-brand-img' />
             <img src={google} alt="" className='trusted-brand-img' />
             <img src={duolings} alt="" className='trusted-brand-img' />
             <img src={disnep } alt="" className='trusted-brand-img' />
             <img src={cred} alt="" className='trusted-brand-img' />
             <img src={amazon} alt=""  className='trusted-brand-img'/>
             <img src={spotify} alt="" className='trusted-brand-img' />
             <img src={tiktok} alt="" className='trusted-brand-img' />
             <img src={uber} alt=""  className='trusted-brand-img'/>
      </div>
    </Container>
    </>
  )
}

