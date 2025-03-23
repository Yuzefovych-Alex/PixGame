import Search from "@/components/Search/Search";
import BlockDataGame from "@/components/BlockDataGame/BlockGame";
import Section from "@/components/Section/Section";
import MuiBox from "@/components/BlockProduct/MuiBox";
import CartsSell from "@/components/Carts/Store/CartsSell"

const StoreProduct = () =>{
    return (
        <>
            <Search/>
            <BlockDataGame/>
            <Section/>
            <MuiBox numberBlocks={4}>
                <CartsSell/>
                <CartsSell/>
                <CartsSell/>
                <CartsSell/>
            </MuiBox>
        </>
    );
};

export default StoreProduct;