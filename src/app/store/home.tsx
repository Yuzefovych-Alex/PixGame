import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import Slider from "@/components/Slider/Slider";
import MuiBox from "@/components/BlockProduct/MuiBox";
import CartsSell from "@/components/Carts/Store/CartsSell"
import Carts from "@/components/Carts/Store/Carts";

const StoreHome = () => {
    return (
        <>
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
        </>
    );
};

export default StoreHome;