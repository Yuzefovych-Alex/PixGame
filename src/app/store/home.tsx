import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import Slider from "@/components/Slider/Slider";
import MuiBox from "@/components/BlockProduct/MuiBox";
import CartsSell from "@/components/Carts/Store/CartsSell"
import Carts from "@/components/Carts/Store/Carts";
import Footer from "@/components/Footer/Footer";

const StoreHome = () => {
    return (
        <>
            <Search/>
            <MultiBox/>
            <Slider/>
            <MuiBox>
                <CartsSell/>
                <CartsSell/>
                <CartsSell/>
            </MuiBox>
            <MuiBox>
                <Carts/>
                <Carts/>
                <Carts/>
            </MuiBox>
            <Footer/>
        </>
    );
};

export default StoreHome;