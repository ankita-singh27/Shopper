import React from 'react'
import styled from 'styled-components'

const Category = () => {
  return (
    <Wrapper>
        <div className='container'>
        <div className="common-heading">Shop By Category</div>
        <div className="top-category-image">
        <img src='./images/Laptops.png' alt="laptop"/>
        <img src='./images/shoes.png' alt="shoes"/>
        <img src='./images/Furniture.png' alt="furniture"/>
        <img src='./images/Books.png' alt="books"/>
        <img src='./images/Bags.png' alt="bags"/>
        </div>
        </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  img{
    padding:0 2rem;

    &:hover{
      scale:1.03;
      transition: all 0.5s linear;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;

    .top-category-image{
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
    }

    img{
      width:70%;
      margin:3rem;
 
    }
    .common-heading{
      margin-top:3rem;
    }
  }


`
export default Category