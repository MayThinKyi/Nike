import React,{useState} from 'react'
import logo from '../assets/logo.png'
import { AiFillCloseSquare, AiOutlineSearch ,AiOutlineClose} from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingBagFill } from 'react-icons/ri'
import { IoIosArrowBack } from 'react-icons/io'
import emptyBag from '../assets/emptybag.png'
import {BsArrowLeft,BsFillTrashFill} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import {addToCart,addQuantity,removeQuantity, clearCart, removeItem} from '../app/cartSlice';
import { useSelector } from 'react-redux';
const Navbar = () => {
  const [nav,setNav]=useState(false);
  const dispatch=useDispatch();
  const cart = useSelector((state) => state.cart)
  let totalQty = 0;
   cart.map((c) => {
    return totalQty+=c.quantity
   })
  let total = 0;
  cart?.map((c) => {
    total += Number(c.price) * c.quantity;
  })
   const addQuantityFun=(id)=>{
    
    dispatch(addQuantity({id}))
   }
   const removeQuantityFun=(id)=>{
    dispatch(removeQuantity({id}))
  }
  const removeItemFun = (id) => {
   dispatch(removeItem({id}))
 }
  return (<div className='h-[60px] z-[30] w-full px-5 sm:px-[100px] bg-white/80 shadow-md text-slate-900 fixed top-0 left-0 right-0 flex justify-between'>
          <img src={logo} className='z-20 w-[80px] object-contain brightness-0 ' />
          <div class='flex items-center text-2xl font-medium gap-4'>
              <AiOutlineSearch />
              <MdOutlineFavoriteBorder/>
          <div onClick={()=>setNav(!nav)} className='relative'>
            <RiShoppingBagFill  />
            <span className='absolute bottom-[-13px] right-[-6px] p-2 filter drop-shadow-lg w-[20px] h-[20px] flex justify-center items-center bg-black text-[13px] rounded-[100%] text-white'>{cart?.length}</span>
          </div>
    </div>
    {/*Cart Section*/}
    {nav && <div className='z-[200] bg-black/40 w-[100vw] h-[100vh] absolute top-0 left-0 right-0 bottom-0'>
      <div className='absolute h-full z-[999] bg-white/90 border filter drop-shadow-lg top-0 right-0 overflow-y-scroll scroll-smooth scroll-hidden w-[300px] md:w-[450px] h-[100vh]'>
        <div className='flex justify-around items-center my-3'>
          <div className='flex items-center'>
             <div onClick={()=>setNav(!nav)} className='flex items-center'>
            <IoIosArrowBack  className='m-0 p-0 inline'/><IoIosArrowBack className='m-0 ml-[-10px] p-0 inline' />
          </div>
          <p className='font-semibold text-[15px] mr-2'>Your Cart</p>
          <button className='bg-black filter drop-shadow-lg text-[14px] text-slate-100 rounded-md p-1'>({totalQty} Items)</button>
          </div>
          <div onClick={()=>dispatch(clearCart())} className='filter flex py-1 px-2 items-center bg-black text-slate-100  drop-shadow-2xl rounded-md'>
            <AiOutlineClose  size={20} />
            <span className='text-[13px]'>Clear Cart</span>
          </div>
        </div>
      <div className='flex h-full flex-col overflow-y-scroll scroll-smooth scroll-hidden'>
         {cart?.length<1 ?  <div>
        <img src={emptyBag} className='hover:scale-105 w-auto h-[280px] mt-[100px] mx-auto text-center object-contain' />
        <button onClick={()=>setNav(!nav)} className='rounded-md mx-auto mt-10 text-center button-theme bg-gradient-to-b from-amber-500 to-orange-500 shadow-lg shadow-orange-500 flex items-center justify-center text-slate-900 py-2 gap-3 text-sm px-5 font-semibold active:scale-110'><BsArrowLeft/>Back To Nike Store</button> 
       </div>
      : cart?.map((c,i)=>{
        return <div className='flex cursor-pointer my-2 justify-around items-center' key={i}>
           <div className='relative w-[130px]'>
             <img  src={c.img} className= {` relative w-auto p-3 rounded-md h-auto bg-gradient-to-b ${c.color} ${c.shadow} ` }/>
            <span className='absolute bg-slate-200 text-state-200 text-[13px] px-2 py-[.5] rounded-sm top-[5px] right-[5px]'>${c.price}</span>
           </div>
           <div className='flex flex-col justify-center'>
            <h1 className='text-[15px] font-semibold'>{c.title}</h1>
            <span className='text-[13px]'>{c.text}</span>
            <div className='flex items-center my-3 gap-[8px] '>
                <span onClick={()=>removeQuantityFun(c.id)} className='text-white filter drop-shadow-lg bg-black flex justify-center items-center shadow-slate-900 text-[17px]   w-[30px] h-[30px] rounded-md p-[4px]'>-</span>
                <span className='text-white filter drop-shadow-lg bg-black flex justify-center items-center shadow-slate-900 text-[15px] w-[30px]  h-[30px] rounded-md p-[4px]'>{c.quantity}</span>
              <span onClick={()=>addQuantityFun(c.id)} className='text-white filter drop-shadow-lg bg-black flex justify-center items-center shadow-slate-900 text-[17px]   w-[30px] h-[30px] rounded-md p-[4px]'>+</span>
            </div>
           </div>
            <div className='flex flex-col items-center justify-center'>
            <h1 className='text-[17px] font-semibold'>${Number(c.price)*c.quantity}</h1>
           <BsFillTrashFill onClick={()=>removeItemFun(c.id)} size={24} className='bg-slate-900 text-white filter drop-shadow-lg shadow-slate-900 w-[30px] h-[30px] p-[6px] flex justify-center items-center rounded-md '/>
           </div>

        </div>
      })
      }
       
      
        </div>
       {cart?.length>0 ?  <div className='sticky  w-full bottom-0 right-0 left-0 bg-white text-black ' >
          <div className='flex justify-between mx-8 mt-2 mb-1 items-center'>
            <h1 className='mt-2 uppercase font-semibold text-slate-900 text-[18px]'>Subtotal</h1>
            <button className='bg-black filter drop-shadow-lg text-[14px] text-slate-100 rounded-md p-1'>$ {total}</button>
          </div>
          <p className='my-0 text-slate-900 font-medium text-[15px] text-center'>Taxes and Shipping Will Calculate At Shipping</p>
          <button className='my-3 w-[80%] mx-10 text-center text-slate-100 bg-slate-900 rounded-lg py-1 px-5 text-center'>Check Out</button>
        </div> :''}
     
      </div>
      
    </div>}
    </div>
  )
}

export default Navbar