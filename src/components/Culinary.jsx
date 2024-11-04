import { Link } from "react-router-dom";
import { culinaryLeftItems, culinaryRightItems } from "../utils";

export default function Culinary() {
    return (
        <section id="culinary">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 align-self-center">
                        <h1 className="title text-left mb-4">
                            Makanan Khas
                            <span className="font-gold">
                                {" "}
                                Tradisional{" "}
                            </span>{" "}
                            yang Unik dan{" "}
                            <span className="font-green"> Beragam</span>
                        </h1>
                        <p className="subtitle text-left mb-4 mb-md-5">
                            Salah satu keanekaragaman budaya adalah tidak luput
                            dengan adanya kuliner tradisional di setiap
                            daerahnya. Salah satunya adalah Bubur Punai dari
                            kota Pontianak, Kalimantan Barat.
                        </p>
                        <Link
                            className="btn btn-ikn-primary mb-4 mb-md-0"
                            to="/gallery"
                            role="button"
                        >
                            Lihat Selengkapnya
                        </Link>
                    </div>
                    <div className="col-md-3">
                        <div className="culinary-cards d-flex flex-column">
                            {culinaryLeftItems.map((culinary) => (
                                <div
                                    className="card w-100 mb-4"
                                    key={culinary.id}
                                >
                                    <img
                                        src={culinary.image}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-1">
                                            {culinary.name}
                                        </h5>
                                        <p className="card-text">
                                            {culinary.province}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <div className="culinary-cards">
                            {culinaryRightItems.map((culinary) => (
                                <div className="card w-100" key={culinary.id}>
                                    <img
                                        src={culinary.image}
                                        className="card-img-top"
                                    />
                                    <div className="card-body text-center">
                                        <h5 className="card-title mb-1">
                                            {culinary.name}
                                        </h5>
                                        <p className="card-text">
                                            {culinary.province}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
