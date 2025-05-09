'use client'

import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Market/Carts";
import ProgramBlock from "@/components/ProgramBlock/ProgramBlock";
import Event from "@/components/Event/Event";
import SectionProduct from "@/components/SectionProduct/SectionProduct";
import Header from "@/components/Header/Market/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

const MarketHome = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/market/products')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Помилка при отриманні даних');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error}</div>
    }

    return (
        <>
            <Header />
            <Search />
            <MultiBox />
            <ProgramBlock />
            <Event />
            <SectionProduct />
            <MuiBox numberBlocks={5}>
                {products.slice(0, 12).map((product) => (
                    <Link key={product.id} href={`/market/product/${product.id}`} style={{textDecoration: 'none'}}>
                        <Carts
                            type={product.type}
                            date={product.date} 
                            rating={product.rating} 
                            title={product.title} 
                            price={product.price} 
                            lastPrice={product.last_price} 
                            sellPrice={product.sell}
                        />        
                    </Link>
                ))} 
            </MuiBox >
            <Footer />
        </>
    );
};

export default MarketHome;