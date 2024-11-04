import { etnicItems } from "../utils";

export default function Etnic() {
    return (
        <section id="etnic">
            <div className="container">
                <h1 className="title text-center">
                    Suku Dayak dan Suku Banjar adalah Etnik terbesar di
                    <span className="font-gold"> Borneo</span>
                </h1>
                <p className="subtitle text-center mb-4 mb-md-5">
                    Suku dayak dan suku banjar adalah suku terbesar dan
                    merupakan suku tertua di Pulau Kalimantan Indonesia
                </p>
                <div className="row">
                    {etnicItems.map((etnic) => (
                        <div className="col-md-6" key={etnic.id}>
                            <div className="etnic-card mb-5 mb-md-0">
                                <div
                                    className="etnic-card__img"
                                    style={{
                                        backgroundImage: `linear-gradient(
                          359.32deg,
                          rgba(0, 0, 0, 0.5) 10%,
                          rgba(0, 0, 0, 0) 99.42%
                      ),
                      url(${etnic.image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        width: "100%",
                                        height: "350px",
                                        borderRadius: "var(--ikn-16px)",
                                    }}
                                >
                                    <div className="etnic-card__text">
                                        <h1>{etnic.name}</h1>
                                        <p>{etnic.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
