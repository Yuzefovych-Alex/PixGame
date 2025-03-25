import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import BlockProductUser from "@/components/BlockProductUser/BlockProductUser";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Market/Carts";
import Comments from "@/components/Comments/Comments";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const MarketProduct = () => {
    return (
        <>
            <Header/>
            <Search/>
            <MultiBox/>
            <BlockProductUser/>
            <Comments/>
            <MuiBox numberBlocks={4}>
                <Carts/>
                <Carts/>
                <Carts/>
                <Carts/>
            </MuiBox>
            <Footer/>
        </>
    );
};

export default MarketProduct;