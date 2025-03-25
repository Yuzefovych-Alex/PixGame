import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import Slider from "@/components/Slider/Slider";
import MuiBox from "@/components/BlockProduct/MuiBox";
import CartsSell from "@/components/Carts/Store/CartsSell"
import Carts from "@/components/Carts/Store/Carts";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const StoreHome = () => {
    return (
        <>
            <Header/>
            <Search/>
            <MultiBox/>
            <Slider/>
            <MuiBox numberBlocks={3}>
                <CartsSell/>
                <CartsSell/>
                <CartsSell/>
            </MuiBox>
            <MuiBox numberBlocks={3}>
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

export default StoreHome;