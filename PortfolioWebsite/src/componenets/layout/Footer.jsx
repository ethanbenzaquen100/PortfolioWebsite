import { Link } from 'react-router-dom';
import ScrollToTop from '../effects/ScrollToTop.jsx';

export default function Footer(){
    return(
        <footer className="footer bg-dark-secondary">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul className="list-inline mb-2">
                            <li className="list-inline-item"><Link to="/">Home</Link></li>
                            <li className="list-inline-item text-light">⋅</li>
                            <li className="list-inline-item"><Link to="/contact-us">Contact</Link></li>
                        </ul>
                        <p className="text-muted small mb-4 mb-lg-0">&copy; Ethan Benzaquen 2026. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}