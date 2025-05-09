'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import Slider from "@/components/Slider/Slider";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Store/Carts";
import Header from "@/components/Header/Store/Header";
import Footer from "@/components/Footer/Footer";

const StoreHome = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/store/games')
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
    const onSale = getProductsOnSale(products).slice(0, 12);
    const regular = getProductsNotOnSale(products).slice(0, 12);

    return (
        <>
            <Header />
            <Search />
            <MultiBox />
            <Slider />
            <MuiBox numberBlocks={3}>
                {onSale.map(renderCart)}
            </MuiBox>
            <MuiBox numberBlocks={3}>
                {regular.map(renderCart)}
            </MuiBox>

            <Footer />
        </>
    );
};

const getProductsOnSale = (products: Product[]): Product[] =>
    products.filter(p => Boolean(p.price_regions?.[0]?.sell_price));

const getProductsNotOnSale = (products: Product[]): Product[] =>
    products.filter(p => !Boolean(p.price_regions?.[0]?.sell_price));

const renderCart = (product: Product) => {
    const priceRegion = product.price_regions?.[0] || {};
    const typeGame = product.type_game || {};

    return (
        <Link
            key={product.id}
            href={`/store/product/${product.id}`}
            passHref
            style={{ textDecoration: 'none', color: 'inherit' }}
        >
            <Carts
                name={product.name}
                date={product.release_date}
                rating={product.rating}
                price={priceRegion.base_price}
                lastPrice={priceRegion.last_price}
                genre={typeGame.type}
                sellPrice={priceRegion.sell_price}
            />
        </Link>
    );
};

export default StoreHome;
