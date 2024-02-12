import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumbs = ({ pathnames }) => {
    let breadCrumbPath = ""


  return (
    <div className='flex space-x-2 text-xs text-gray-400'>
    <span className='hover:text-flipkart-blue cursor-pointer'><Link to="/">Home</Link></span>

    {pathnames?.map((name, index)=>{
        breadCrumbPath += `/${name}`

        // check whether index is last or not to make last last link not clickable
        const isLast = index === pathnames.length-1;

        return isLast? <span key={breadCrumbPath}>/ {name}</span>: (
          <span key={breadCrumbPath} className='hover:text-flipkart-blue cursor-pointer'><Link to={breadCrumbPath}>/{name}</Link></span>
        )
      })}
  </div>
  )
}

export default BreadCrumbs
