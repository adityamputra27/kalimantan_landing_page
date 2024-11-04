import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { natureItems } from "../utils";
import { Link } from "react-router-dom";

export default function Nature() {
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
                items: 1,
            },
            768: {
                items: 1,
            },
            991: {
                items: 3,
            },
        },
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        navContainer: ".nature-carousel__button",
    };
    return (
        <>
            <section id="nature">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h1 className="title text-left">
                                Flora <span className="font-gold">dan</span>{" "}
                                Fauna
                                <span className="font-gold">
                                    {" "}
                                    Endemik Pulau{" "}
                                </span>
                                Borneo.
                            </h1>
                            <p className="subtitle text-left mb-5">
                                Lihat beragam flora dan fauna endemik dan langka
                                di Pulau Borneo
                            </p>
                        </div>
                        <div className="col-md-9">
                            <div className="nature-carousel">
                                <div className="nature-carousel__nav">
                                    <div className="nature-carousel__button"></div>
                                    <Link to="/gallery">Lihat Semua</Link>
                                </div>
                                <OwlCarousel
                                    className="owl-carousel owl-nature owl-theme owl-nature nature-cards"
                                    {...options}
                                >
                                    {natureItems.slice(0, 4).map((nature) => (
                                        <div
                                            className="nature-card"
                                            key={nature.id}
                                        >
                                            <div className="card">
                                                <img
                                                    src={nature.image}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        {nature.name}
                                                    </h5>
                                                    <p className="card-text">
                                                        {nature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
