'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Search from "@/components/Search/Search";
import BlockDataGame from "@/components/BlockDataGame/BlockGame";
import Section from "@/components/Section/Section";
import MuiBox from "@/components/BlockProduct/MuiBox";
import Header from "@/components/Header/Store/Header";
import Footer from "@/components/Footer/Footer";


const StoreProduct = () => {
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

                const response = await fetch(`http://localhost:5000/api/store/game/${id}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch game data");
                }
                
                const gameData = await response.json();
                setProduct(gameData);
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

    const gameInfo = product.game_infos?.[0] || {};
    const systemRequirementsMin = product.system_requirements?.[0] || {};
    const systemRequirementsRec = product.system_requirements?.[1] || {};
    const priceRegionAmerika = product.price_regions?.[1] || {};
    const priceRegionEurope = product.price_regions?.[0] || {};
    const priceRegionCIS = product.price_regions?.[2] || {};
    const shops = product.shops || {}
    const comments = product.comments || {}

    return (
        <>
            <Header />
            <Search />

            <BlockDataGame
                key={product.id}
                name={product.name}
                release_date={product.release_date}
                developer={gameInfo.developer}
                description={gameInfo.description}
                publisher={gameInfo.publisher}
                minimum={systemRequirementsMin}
                recomended={systemRequirementsRec}
                priceRegionAmerika={priceRegionAmerika}
                priceRegionEurope={priceRegionEurope}
                priceRegionCIS={priceRegionCIS}
                shops={shops}
                comments={comments}
            />

            <Section />
            <MuiBox numberBlocks={4}>
                
            </MuiBox>
            <Footer />
        </>
    );
};

export default StoreProduct;
