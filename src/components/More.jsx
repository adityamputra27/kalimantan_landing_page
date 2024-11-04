import { Link } from "react-router-dom";

export default function More() {
    return (
        <section id="report">
            <div className="container">
                <div className="d-flex flex-column justify-content-md-center align-items-center">
                    <div className="report-title">
                        <p className="text-center px-5">
                            Eksplor lebih lanjut budaya yang ada di Pulau
                            Kalimantan Indonesia dari Flora, Fauna hingga Seni
                            Musik dan Tari
                        </p>
                    </div>
                    <div className="report-button mt-4">
                        <Link
                            className="btn btn-ikn-white"
                            to="/gallery"
                            role="button"
                        >
                            Lihat Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
