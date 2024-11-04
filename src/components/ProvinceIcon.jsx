import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { iconPerProvinceItems } from "../utils";

export default function ProvinceIcon() {
    const options = {
        nav: true,
        dots: false,
        loop: true,
        margin: 30,
        navText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>",
        ],
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 2,
            },
            991: {
                items: 5,
            },
        },
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
    };
    return (
        <>
            <section id="superhub">
                <div className="container">
                    <h1 className="title text-left">
                        Beragam Ikon Unik setiap Provinsi di
                        <span className="font-green"> Kalimantan</span>
                    </h1>
                    <p className="subtitle text-left mb-5">
                        Lihat beragam ikon unik setiap provinsi di Pulau
                        Kalimantan Indonesia
                    </p>
                </div>
                <div className="px-3">
                    <OwlCarousel
                        className="owl-superhub owl-carousel owl-theme superhub-cards"
                        {...options}
                    >
                        {iconPerProvinceItems.map((icon) => (
                            <div className="superhub-card" key={icon.id}>
                                <div
                                    className="superhub-card__img"
                                    style={{
                                        backgroundImage: `linear-gradient(
                                  359.32deg,
                                  rgba(0, 0, 0, 0.5) 10%,
                                  rgba(0, 0, 0, 0) 99.42%
                              ),
                              url(${icon.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        minWidth: "310px",
                                        height: "500px",
                                    }}
                                >
                                    <div className="superhub-card__text">
                                        <p>{icon.name}</p>
                                        <span>{icon.province}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                </div>
            </section>
        </>
    );
}
