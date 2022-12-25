import React from 'react'
import './main.css'
function Nav(){
    return(
        <section className='cover-nav'>
        <section className='nav-container'>
            <div className='header'>
                <h1>Food<span>cump</span></h1>
</div>
<div className='href'>
    <ul>
        <li><a href='#'>home</a></li>
        <li><a href='#about'>service</a></li>
        <li><a href='#'>contact</a></li>
    </ul>
</div>
<button>contact us</button>
        </section>
        <section className='remain'>
        <div>
    <h1> food<span>cumps</span></h1>
               <p>we offer best of the best food with<br/> delicious and fantastic delicacies and<br/> we deliver both the outside and inside of the country<br/>,and we offer our customers with fantastic meal<br/> which makes our country different and special</p>
            </div>
            <div className='image-container'>
                <img src='handburger.jpeg'/>
            </div>
        </section>
        </section>
    )
}
export default Nav;