import { cityIconImg } from "../utils";

export default function CityIcon() {
    return (
        <section id="function">
            <div className="container">
                <h1 className="title text-left">
                    <span className="font-gold">Keanekaragaman </span>
                    dan Ciri Khas di setiap
                    <span className="font-gold"> Ibu Kota</span>
                </h1>
                <p className="text-left mb-5">
                    Lihat beberapa keanekaragaman dan Ciri Khas di setiap Ibu
                    Kota Pulau Kalimantan Indonesia
                </p>
                <div className="row">
                    <div className="col-md-6 align-self-center order-2 order-md-1">
                        <div className="function-card active">
                            <div className="function-card__title">
                                <p>Pontianak</p>
                            </div>
                            <div className="function-card__description">
                                <p>
                                    Kota ini terletak di garis khatulistiwa,
                                    yang menjadikannya sebagai salah satu kota
                                    yang terletak paling dekat dengan titik nol
                                    lintang.
                                </p>
                            </div>
                        </div>
                        <div className="function-card">
                            <div className="function-card__title">
                                <p>BanjarBaru</p>
                            </div>
                            <div className="function-card__description">
                                <p>
                                    Intan yang banyak dijual di Kota
                                    Intan-Martapura berasal dari tanah intan
                                    yang sebenarnya, yaitu Desa Pumpung di
                                    Banjarbaru.
                                </p>
                            </div>
                        </div>
                        <div className="function-card">
                            <div className="function-card__title">
                                <p>Samarinda</p>
                            </div>
                            <div className="function-card__description">
                                <p>
                                    Ada 27 sungai alam yang mengalir di dalam
                                    Kota Samarinda dan tersebar di beberapa
                                    kecamatan dan kelurahan.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-self-center mb-4 mb-md-0 order-md-1">
                        <img
                            src={cityIconImg}
                            className="w-100 text-right"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
