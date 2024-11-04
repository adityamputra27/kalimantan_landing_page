import { useCallback, useEffect, useState } from "react";
import { cultureCategories, natureItems } from "../utils";
import CultureCard from "./CultureCard";
import CultureCategory from "./CultureCategory";
import CultureHeader from "./CultureHeader";
import CultureModal from "./CultureModal";

export default function Culture() {
    const [cultureData, setCultureData] = useState([]);
    const [activeCategory, setActiveCategory] = useState(3);
    const [loading, isLoading] = useState(true);
    const [search, setSearch] = useState("");

    const getCultures = useCallback((id) => {
        setCultureData(() =>
            natureItems.filter((culture) => culture.category_id === id)
        );
    }, []);

    const handleActiveCategory = (id) => {
        setActiveCategory(id);
        isLoading(true);
        setTimeout(() => {
            getCultures(id);
            isLoading(false);
        }, 500);
        setSearch("");
    };

    const handleSearchCultureData = (search) => {
        isLoading(true);
        setTimeout(() => {
            if (search == "") {
                getCultures(activeCategory);
            } else {
                setCultureData(() =>
                    natureItems.filter(
                        (culture) =>
                            culture.name
                                .toLowerCase()
                                .includes(search.toLowerCase()) &&
                            culture.category_id === activeCategory
                    )
                );
            }
            isLoading(false);
        }, 500);
    };

    useEffect(() => {
        isLoading(true);
        setTimeout(() => {
            getCultures(activeCategory);
            isLoading(false);
        }, 500);
        setSearch("");
    }, [activeCategory, getCultures]);

    return (
        <>
            <div id="culture">
                <div className="container">
                    <div className="culture-categories">
                        {cultureCategories.map((category) => (
                            <CultureCategory
                                key={category.id}
                                id={category.id}
                                name={category.name}
                                isActive={activeCategory}
                                handleActiveCategory={handleActiveCategory}
                            />
                        ))}
                    </div>
                    <div className="row culture-header">
                        <CultureHeader
                            cultureData={cultureData}
                            handleSearchCultureData={handleSearchCultureData}
                            search={search}
                            setSearch={setSearch}
                        />
                    </div>

                    <div className="row culture-cards">
                        {loading ? (
                            <div className="mx-auto">
                                <div
                                    className="spinner-border text-ikn-success"
                                    style={{ width: "3em", height: "3em" }}
                                    role="status"
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : cultureData.length ? (
                            cultureData.map((nature) => (
                                <CultureCard
                                    key={nature.id}
                                    id={nature.id}
                                    name={nature.name}
                                    image={nature.image}
                                    description={nature.description}
                                />
                            ))
                        ) : (
                            <span className="mx-auto">Tidak ada data</span>
                        )}
                    </div>
                </div>
            </div>
            {cultureData.map((nature) => (
                <CultureModal
                    key={nature.id}
                    id={nature.id}
                    name={nature.name}
                    image={nature.image}
                    description={nature.description}
                />
            ))}
        </>
    );
}
