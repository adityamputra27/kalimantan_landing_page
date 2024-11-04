import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

export default function Header({ isJumbotron }) {
    return (
        <>
            <header>
                <Navbar />
                {isJumbotron && (
                    <div className="container">
                        <div className="jumbotron bg-transparent p-0 text-center">
                            <h3>SELAMAT DATANG</h3>
                            <h1 className="mb-4 mt-1">
                                Temukan Ragam Keindahan Budaya
                                <br />
                                dari{" "}
                                <span className="font-gold">
                                    Pulau Kalimantan
                                </span>{" "}
                                di Indonesia
                            </h1>
                            <p className="px-5 mb-5">
                                Kalimantan adalah sebuah wilayah di Pulau
                                Kalimantan di bawah administrasi Negara Kesatuan
                                Republik Indonesia. Wilayah Kalimantan
                                berbatasan dengan Sabah dan Sarawak di bagian
                                utara, sedangkan di bagian barat berbatasan
                                dengan Selat Karimata, di bagian selatan
                                berbatasan dengan Laut Jawa, dan di sebelah
                                timur berbatasan dengan Selat Makassar, dan Laut
                                Sulawesi.
                            </p>
                            <div className="d-flex flex-column flex-md-row">
                                <a
                                    className="btn btn-ikn-primary mr-md-5 mb-md-0 mb-4"
                                    href="#province"
                                    role="button"
                                >
                                    Mulai Eksplorasi
                                </a>
                                <Link
                                    className="btn btn-ikn-secondary"
                                    role="button"
                                    to="/gallery"
                                >
                                    Lihat Galeri Budaya
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}

Header.propTypes = {
    isJumbotron: PropTypes.bool,
};
