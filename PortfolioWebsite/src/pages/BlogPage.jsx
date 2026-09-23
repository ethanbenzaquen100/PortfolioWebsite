import Nav from "../componenets/layout/Nav.jsx";
import Footer from "../componenets/layout/Footer.jsx";
import Background from "../componenets/effects/Background.jsx";

export default function BlogPage(){
    return(
        <>
            <Background></Background>
            <Nav />
            <section className="news">
                <div className="mt-5 pt-5 px-5 text-center text-light container bg-dark rounded">
                    <h1 className="m-0">Placeholder</h1>
                    <Headliner />
                </div>
                <div className="my-5 pt-5 px-5 text-center bg-dark text-light container rounded">
                    <h1 className="m-0">Placeholder</h1>
                    <ArticleList />
                </div>
            </section>
            <Footer />
        </>
    )
}