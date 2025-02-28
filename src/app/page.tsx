//import Image from "next/image";
import Header from "@/components/Layout/Header";
//import Footer from "@/components/Layout/Footer";
import MainHome from "@/components/Pages/MainHome";
//import Registr from "@/components/Pages/Registr";
import "@/app/global.scss";

export default function Home() {
    return (
        <>
            <Header/>
            <MainHome/>
        </>
    );
}
