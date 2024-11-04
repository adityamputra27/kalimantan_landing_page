import { useEffect } from "react";
import { history1Img, history2Img, history3Img } from "../utils";
import PropTypes from "prop-types";

export default function History({ isTitle, isComplete }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="showcase">
            <div className="container">
                {isTitle && (
                    <h1 className="title text-left mb-4 mb-md-5">
                        Sejarah Singkat
                        <span className="font-gold">
                            {" "}
                            Pulau Kalimantan
                        </span>{" "}
                        Indonesia
                    </h1>
                )}
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-md-6 align-self-center">
                            <p>
                                Menurut World Atlas, Pulau Kalimantan adalah
                                Pulau yang unik karena satu-satunya Pulau di
                                Dunia yang terdiri dari Tiga Negara yakni
                                Indonesia dengan luas 73% wilayah, Malaysia
                                dengan luas 26% wilayah, dan Brunei Darussalam
                                dengan luas 1% wilayah. Dikutip dari The Rakyat
                                Post, Kalimantan berasal dari Bahasa Sansekerta
                                &quot;Kalamantha&quot; yang berarti Pulau dengan
                                cuaca yang membakar, merujuk dari cuaca tropis
                                di Pulau ini.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={history1Img} width="500" alt="" />
                        </div>
                    </div>
                </div>
                <div className="showcase-container">
                    <div className="row">
                        <div className="col-md-6 order-md-2 align-self-center">
                            <p>
                                Dikenal Dunia dengan sebutan Borneo, hal ini
                                berdasarkan sejarah yang menyebutkan bahwa salah
                                satu Kerajaan pertama di Pulau ini adalah
                                Kerajaan Brunei yang berdiri sejak Abad ke-6
                                Masehi, daerah Pesisir kerajaan ini yang pada
                                saat itu bernama Tanjungpura sering digunakan
                                untuk mengirim hasil-hasil hutan ke Kerajaan
                                lain. Sampai pada akhir Abad ke-16 orang-orang
                                Portugis mulai berdatangan lewat pelabuhan
                                Kesultanan Brunei, dan dari sinilah nama
                                &quot;Borneo&quot; mulai muncul dan mendunia
                                karena penyebutan yang salah (typo) dari kata
                                &quot;Brunei&quot; oleh orang-orang Portugis.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img src={history2Img} width="500" alt="" />
                        </div>
                    </div>
                </div>
                {isComplete && (
                    <div className="showcase-container">
                        <div className="row">
                            <div className="col-md-6 align-self-center">
                                <p>
                                    Dalam perkembangannya, Pulau Kalimantan
                                    sempat dikuasai oleh dua kekuatan besar
                                    yakni Inggris di bagian utara (sekarang
                                    Malaysia dan Brunei Darussalam), serta
                                    Hindia-Belanda di bagian selatan (sekarang
                                    bagian Indonesia). Hingga pada tanggal 17
                                    Mei 1949 Kalimantan bagian selatan resmi
                                    menjadi bagian dari NKRI, pun demikian
                                    Kalimantan bagian utara yakni Serawak dan
                                    Sabah pada tahun 1963 bergabung dengan
                                    Federasi Malaya (sekarang Malaysia), dan
                                    Kesultanan Brunei (sekarang Brunei
                                    Darussalam) menjadi negara terakhir yang
                                    merdeka, yakni pada tahun 1984
                                </p>
                            </div>
                            <div className="col-md-6">
                                <img src={history3Img} width="500" alt="" />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

History.propTypes = {
    isTitle: PropTypes.bool,
    isComplete: PropTypes.bool,
};
