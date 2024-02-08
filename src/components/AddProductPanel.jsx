import React, { useState } from 'react'
import appwriteService from '../appwrite/config';
import { v4 as uuidv4 } from 'uuid';

const AddProductPanel = () => {

    const [url, seturl] = useState('');
    // console.log(url, typeof url);

    // Unique id
    const uniqueId = uuidv4();

    const [ProductObj, setProductObj] = useState({
        title: '',
        desc: '',
        price: '',
        mrp: '',
        imageUrl: '',
        category: '',
        specification: [],
        seller: '',
    })

    const handleOnChange = (e)=>{
        const { name, value } = e.target;
        e.preventDefault()
        setProductObj(prevState =>({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ProductObj);

        appwriteService.createProduct({...ProductObj})
        .then((response)=>{
        //   console.log(response.status);
        })
        .catch((error)=>{
        //   console.log(error)
        })

         // Emptying input field
        //  setProductObj({
        //     title: '',
        //     desc: '',
        //     price: '',
        //     mrp: '',
        //     imageUrl: '',
        //     category: '',
        //     specification: [],
        //     seller: '',
        // });

      };


  return (
    <div className='w-full my-5'>
        <form className='max-w-[800px] flex flex-col gap-4 p-5 mx-auto bg-white  rounded-md'>
            <label htmlFor="title" className='font-medium text-xl mandatory'>Title</label>
            <input onChange={handleOnChange} name='title' id='title' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter Product Title'/>

            <label htmlFor="desc" className='font-medium text-xl mandatory'>Description</label>
            <textarea onChange={handleOnChange} id="desc" name="desc" className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2'   cols="30" rows="10" placeholder='Enter Product Description'/>

            <label htmlFor="price" className='font-medium text-xl mandatory'>Price</label>
            <input onChange={handleOnChange} id='price' name='price' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter price'/>

            <label htmlFor="mrp" className='font-medium text-xl mandatory'>MRP</label>
            <input onChange={handleOnChange} id='mrp' name='mrp' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter MRP'/>

            <label htmlFor="imageUrl" className='font-medium text-xl mandatory'>Image URL</label>
            <input onChange={handleOnChange} id='imageUrl' name='imageUrl' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter image Url'/>
            {/* <input onChange={(e)=>{seturl(e.target.value)}} id='imageutl' name='imageutl' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter image Url'/> */}

            <label htmlFor="category" className='font-medium text-xl mandatory'>Category</label>
            <input onChange={handleOnChange} id='category' name='category' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter Category'/>

            <label htmlFor="specifications" className='font-medium text-xl mandatory'>Specifications</label>
            <input onChange={handleOnChange} id='specifications' name='specification' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" />

            <label htmlFor="seller" className='font-medium text-xl mandatory'>Seller Name</label>
            <input onChange={handleOnChange} id='seller' name='seller' className='outline-none w-full border-[1px] rounded-md border-gray-200 focus:shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2' type="text" placeholder='Enter Seller Name'/>

            <button onClick={handleSubmit} className='bg-flipkart-btn-blue font-medium w-fit text-white px-3 py-2 rounded-full'>Add Product</button>
        </form>
    </div>
  )
}

export default AddProductPanel
