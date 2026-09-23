import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header className="masthead text-white text-center">
            <div className="container position-relative">
                <div className="row justify-content-center">
                    <div className="col-xl-6">
                        <div className="text-center text-light">
                            <h1>Ethan Benzaquen</h1> 
                            <h2 className="mb-3"><em>Creator, Developer, Learner</em></h2>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}