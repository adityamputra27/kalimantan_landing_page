export default function Province() {
    return (
        <section id="province">
            <div className="container">
                <h1 className="title text-center mb-5">
                    Wilayah Provinsi di Pulau Kalimantan
                </h1>
                <div className="province-cards row">
                    <div className="col-md-4">
                        <div className="province-card active">
                            <p className="province-card__title">
                                1. Provinsi Kalimantan Barat
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="province-card">
                            <p className="province-card__title">
                                2. Provinsi Kalimantan Tengah
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="province-card">
                            <p className="province-card__title">
                                3. Provinsi Kalimantan Selatan
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 ml-auto">
                        <div className="province-card">
                            <p className="province-card__title">
                                4. Provinsi Kalimantan Timur
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mr-auto">
                        <div className="province-card">
                            <p className="province-card__title">
                                5. Provinsi Kalimantan Utara
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
