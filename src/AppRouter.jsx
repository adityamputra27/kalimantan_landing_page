import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./gallery/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import History from "./components/History";
import About from "./components/About";

export default function AppRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/history"
                    element={
                        <>
                            <Header isJumbotron={false} />
                            <Hero
                                title={"Sejarah Terbentuknya Borneo"}
                                subtitle={
                                    "Berikut deskripsi singkat tentang sejarah terbentuknya pulau borneo"
                                }
                            />
                            <History isTitle={false} isComplete={true} />
                        </>
                    }
                />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about-us" element={<About />} />
                <Route path="*" element={<Home />} />
            </Routes>
        </HashRouter>
    );
}
