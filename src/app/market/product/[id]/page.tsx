'use client';

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import Search from "@/components/Search/Search";
import MultiBox from "@/components/MultiBox/MultiBox";
import BlockProductUser from "@/components/BlockProductUser/BlockProductUser";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Carts from "@/components/Carts/Market/Carts";
import Header from "@/components/Header/Market/Header";
import Footer from "@/components/Footer/Footer";

const MarketProduct = () => {
    const params = useParams();
    const id = params?.id;

    const [product, setProduct] = useState<any>(null);
    const [products, setProducts] = useState<any[]>([]);
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

        if (id) fetchData();
    }, [id]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch('http://localhost:5000/api/market/products');
                if (!response.ok) {
                    throw new Error("Failed to fetch products data");
                }

                const productsData = await response.json();
                setProducts(productsData);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!product) return <p>No product found</p>;

    return (
        <>
            <Header />
            <Search />
            <MultiBox />
            <BlockProductUser />
            <MuiBox numberBlocks={4}>
                {products.slice(0, 12).map((prod) => (
                    <Link key={prod.id} href={`/market/product/${prod.id}`} style={{ textDecoration: 'none' }}>
                        <Carts
                            type={prod.type}
                            date={prod.date}
                            rating={prod.rating}
                            title={prod.title}
                            price={prod.price}
                            lastPrice={prod.last_price}
                            sellPrice={prod.sell}
                        />
                    </Link>
                ))}
            </MuiBox>
            <Footer />
        </>
    );
};

export default MarketProduct;