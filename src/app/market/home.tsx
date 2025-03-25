import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Market/Carts";
import ProgramBlock from "@/components/ProgramBlock/ProgramBlock";
import Event from "@/components/Event/Event";
import SectionProduct from "@/components/SectionProduct/SectionProduct";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const MarketHome = () => {
    return (
        <>
            <Header/>
            <Search/>
            <MultiBox/>
            <ProgramBlock/>
            <Event/>
            <SectionProduct/>
            <MuiBox numberBlocks={5}>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
            </MuiBox>
            <Footer/>
        </>
    );
};

export default MarketHome;