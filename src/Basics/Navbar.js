import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
          <nav className='navbar'>
      <h3>Our Restaurent</h3>

      <div className='btn-group'>
        {menuList.map((curElem)=>{
       return <button className='btn-group__item' onClick={()=> filterItem(curElem)} key={curElem}>{curElem}</button>
        })}
      </div>
    </nav>
    </>
  )
}

export default Navbar
