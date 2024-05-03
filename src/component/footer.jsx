import React from 'react';


function Footer(){
    const date=new Date().getFullYear();
    return(
        <footer className='foo'>
            <p style={{color:"gray"}}>
                copywright @{date}

            </p>
        </footer>
    )
}

export default Footer;
