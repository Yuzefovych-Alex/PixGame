import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Market/Carts";
import ProgramBlock from "@/components/ProgramBlock/ProgramBlock";
import Event from "@/components/Event/Event";
import SectionProduct from "@/components/SectionProduct/SectionProduct";

const MarketHome = () => {
    return (
        <>
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
            
        </>
    );
};

export default MarketHome;