import Hero from "../components/share/Hero";
import ProductList from "../components/share/ProductList";
import Team from "../components/share/Team/indext";
import Contact from "../components/share/Contact";
import Footer from "../components/share/footer";
import Header from "../components/share/header";


export default function Home(){
    return(
        <>
        <Header/> 
        <Hero/>
        <ProductList/>
        <Team/>
        <Contact/>
        <Footer/>
        </>
    )
} 