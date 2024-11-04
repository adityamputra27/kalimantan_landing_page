import Description from "./Description";
import Header from "./Header";
import Hero from "./Hero";

export default function About() {
    return (
        <>
            <Header isJumbotron={false} />
            <Hero
                title={"Tentang Kami"}
                subtitle={
                    "Deskripsi singkat penjelasan mengenai portal informasi atau website Kalimantan Indonesia"
                }
            />
            <Description />
        </>
    );
}
