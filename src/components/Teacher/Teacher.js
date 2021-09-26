import React from 'react';
import './Teacher.css'
const Teacher = (props) => {
    // console.log(props)
    const {name,image,salary,email,Department}=props.teacher
    return (
        <div className="card">
  <img className='img' src={image} alt="" />
  <div className="container">
                <h4><b>{ name}</b></h4>
                <p>Department: <i class="fas fa-book-open"></i>     {Department}</p>
                <p>Email:{email}</p>
                <p>{salary}</p>
                
                    <button  className = 'total-btn' onClick={()=>props.handelAddToCart(props.teacher)} > Total Withdrow</button>
                
  </div>
</div>
    );
};

export default Teacher;