//import Image from "next/image";
import Header from "@/components/Header/Header";
//import Footer from "@/components/Layout/Footer";
//import Registr from "@/components/Pages/Registr";
import "@/app/global.scss";
import StoreHome from "@/app/store/home";
//import StoreProduct from "./store/product";
//import MarketHome from "./market/home";
//import MarketProduct from "./market/product";
import Footer from "@/components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <StoreHome/>
            <Footer/>
        </>
    );
}
