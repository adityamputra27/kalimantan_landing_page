import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Culture from "./Culture";

export default function Gallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header isJumbotron={false} />
            <Hero
                title={"Galeri Budaya"}
                subtitle={
                    "Berikut galeri budaya yang tersaji dari Pulau Kalimantan Indonesia, mulai dari suku hingga seni musik dan tari tradisional."
                }
            />
            <Culture />
        </>
    );
}
