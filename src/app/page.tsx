//import Image from "next/image";
import Header from "@/components/Layout/Header";
//import Footer from "@/components/Layout/Footer";
import Search from "@/components/Layout/Search";
import MultiBox from "@/components/Layout/MultiBox";
import Slider from "@/components/Layout/Slider";
import MuiBox from "@/components/Layout/MuiBox";

export default function Home() {
  return (
    <>
      <Header/>
        <Search/>
        <MultiBox/>
      <Slider/>
        <MuiBox/>
    </>
  );
}
