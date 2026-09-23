/*
Page for if the user ends up on a non existint webpage. Displays 404 error.
*/


//Importing the required components.
import Nav from '../componenets/layout/Nav.jsx'
import Footer from '../componenets/layout/Footer.jsx'
import Background from '../componenets/effects/Background.jsx'

//Returning the components as well as the rest of the error screen.
export default function NoPage(){
    return(
        <>
            <Background />
            <Nav />
            <header className="no-page">
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-light">
                                <h1>404 - Page Not Found</h1> 
                                <h3>We couldn't find anything at this url. If you believe this is an error, please contact support.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Footer />
        </>
    )
}