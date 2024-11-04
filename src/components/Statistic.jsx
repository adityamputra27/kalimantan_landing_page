import { useRef, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default function Statistic() {
    const [counterOn, setCounterOn] = useState(false);
    const scrollRef = useRef(null);

    return (
        <section id="statistic">
            <div className="container">
                <h1 className="title text-left">
                    Pulau Kalimantan Indonesia dalam Angka
                </h1>
                <p className="subtitle text-left mb-5">
                    Data statistik Pulau Kalimantan Indonesia dari luas area
                    sampai jumlah agama aktif
                </p>
                <ScrollTrigger
                    ref={scrollRef}
                    onEnter={() => setCounterOn(true)}
                    onExit={() => setCounterOn(false)}
                >
                    <div className="statistic-cards row">
                        <div className="col-md-4">
                            <div className="statistic-card active">
                                <p className="statistic-card__information">
                                    Luas Kalimantan Wilayah Indonesia
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp
                                            end={743330}
                                            duration={3}
                                            decimal="."
                                        />
                                    )}{" "}
                                    km²
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistic-card">
                                <p className="statistic-card__information">
                                    Jumlah Populasi
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp end={16} duration={3} />
                                    )}
                                    ++ juta jiwa
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistic-card">
                                <p className="statistic-card__information">
                                    Jumlah Suku Aktif
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp end={400} duration={3} />
                                    )}
                                    +
                                </p>
                                <p className="statistic-card__subtitle">
                                    *Menurut Joshua Project
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistic-card">
                                <p className="statistic-card__information">
                                    Keanekaragaman Flora
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp
                                            end={1200}
                                            duration={3}
                                            decimal="."
                                        />
                                    )}
                                    + jenis flora
                                </p>
                                <p className="statistic-card__subtitle">
                                    *Menurut Taman Nasional Betung Kerihun
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistic-card">
                                <p className="statistic-card__information">
                                    Keanekaragaman Fauna
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp
                                            end={1200}
                                            duration={3}
                                            decimal="."
                                        />
                                    )}
                                    + jenis flora
                                </p>
                                <p className="statistic-card__subtitle">
                                    *Menurut Taman Nasional Betung Kerihun
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="statistic-card">
                                <p className="statistic-card__information">
                                    Jumlah Agama Aktif
                                </p>
                                <p className="statistic-card__title">
                                    {counterOn && (
                                        <CountUp
                                            end={5}
                                            duration={3}
                                            decimal="."
                                        />
                                    )}{" "}
                                    agama aktif
                                </p>
                                <p className="statistic-card__subtitle">
                                    *Menurut misi.co/Kalimantan
                                </p>
                            </div>
                        </div>
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    );
}
