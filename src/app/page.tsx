//import Image from "next/image";
import Header from "@/components/Header/Header";
//import Footer from "@/components/Layout/Footer";
//import StoreHome from "@/app/store/home";
//import Registr from "@/components/Pages/Registr";
import "@/app/global.scss";
import Product from "./store/product";

export default function Home() {
    return (
        <>
            <Header/>
            <Product/>
        </>
    );
}
