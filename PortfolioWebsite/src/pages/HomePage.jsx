//The inital landing page for the website that your first come to after loading in.


//importing all of the components that are needed to generate the page
import Nav from '../componenets/layout/Nav.jsx';
import Header from '../componenets/layout/Header.jsx';
import WhatWeDo from '../componenets/content/WhatWeDo.jsx';
import Footer from '../componenets/layout/Footer.jsx';
import Background from '../componenets/effects/Background.jsx';

//Creating the homepage and combining the components.
export default function HomePage(){
    return(
        <>
            <Background />
            <Nav />
            <Header />
            <WhatWeDo />
            <Footer />
        </>
    )
}