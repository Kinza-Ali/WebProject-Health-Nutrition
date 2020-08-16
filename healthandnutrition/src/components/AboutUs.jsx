import React from 'react';
import NavBarBlack from './NavBarBlack';


const AboutUs = () => {
    return (
    <header className = 'about-header'>  
        <div>
        <NavBarBlack/>
        <div className = 'about'> 
        <h3 className="text-center h3">About Us</h3>
        <div className="container about-space">
            <div className="row">
                <div className="col-md-4">
                    <img  className='about-img'src={require("../assets/image/about.jpeg" )} alt=""/>
                </div>
                <div className="col-md-8">
                    <p className="text-center about-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reprehenderit delectus quas suscipit aspernatur deleniti nulla. Sapiente, consequuntur voluptatibus. Fuga voluptas magnam nostrum nobis non labore odit dolorum perferendis ipsam.Similique, beatae dicta! Officiis fugit molestiae soluta quis perspiciatis corporis obcaecati at ea cum, maxime fuga deleniti incidunt possimus consequatur sapiente iste ad quibusdam dolorum quia vel, corrupti est laboriosam.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </header> );
}
export default AboutUs;