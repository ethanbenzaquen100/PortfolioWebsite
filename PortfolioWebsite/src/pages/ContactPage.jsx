import Nav from '../componenets/layout/Nav.jsx';
import Footer from '../componenets/layout/Footer.jsx';
import ContactForm from '../componenets/content/ContactForm.jsx';
import Background from '../componenets/effects/Background.jsx';

export default function ContactPage(){
    return(
        <>
            <Background />
            <Nav />
            <ContactForm />
            <Footer />
        </>
    )
}