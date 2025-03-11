import Search from "@/components/Search/Search";
import BlockDataGame from "@/components/BlockDataGame/BlockGame";
import Comments from "@/components/Comments/Comments";
import Section from "@/components/Section/Section";
import MuiBox from "@/components/BlockProduct/MuiBox";
import CartsSell from "@/components/Carts/Store/CartsSell"

const Product = () =>{
    return (
        <>
            <Search/>
            <BlockDataGame/>
            <Comments/>
            <Section/>
            <MuiBox>
                <CartsSell/>
                <CartsSell/>
                <CartsSell/>
            </MuiBox>
        </>
    );
};

export default Product;