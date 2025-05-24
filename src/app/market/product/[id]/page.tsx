'use client';

import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import BlockProductUser from "@/components/BlockProductUser/BlockProductUser";
//import MuiBox from "@/components/BlockProduct/MuiBox";
//import Carts from "@/components/Carts/Market/Carts";
//import Comments from "@/components/Comments/Comments";
import Header from "@/components/Header/Market/Header";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const MarketProduct = () => {
    const params = useParams();
    const id = params.id;

    const [product, setProduct] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`http://localhost:5000/api/market/product/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch game data");
                }
                
                const productData = await response.json();
                setProduct(productData);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };
    
        fetchData();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <>
            <Header/>
            <Search/>
            <MultiBox/>
            <BlockProductUser/>
            <Footer/>
        </>
    );
};

export default MarketProduct;