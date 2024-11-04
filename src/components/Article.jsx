import { articleMainItems, articleSecondaryItems } from "../utils";

export default function Article() {
    return (
        <section id="article">
            <div className="container">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-5">
                    <div className="article-title">
                        <h1 className="title text-left">
                            Artikel dan Berita
                            <span className="font-gold"> terbaru</span>
                        </h1>
                        <p className="subtitle">
                            Lihat beragam sajian artikel dan berita terbaru
                            seputar Pulau Kalimantan
                        </p>
                    </div>
                    {/* <div className="article-link">
                        <a href="#">Lihat Semua</a>
                    </div> */}
                </div>
                <div className="row">
                    {articleMainItems.map((article) => (
                        <div className="col-md-6" key={article.id}>
                            <div className="main-card card w-100">
                                <img
                                    src={article.image}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {article.name}
                                    </h5>
                                    <p className="card-text">
                                        {article.description}
                                    </p>
                                    <p className="card-datecreated mb-0">
                                        {article.date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-md-6">
                        {articleSecondaryItems.map((article) => (
                            <div
                                className="secondary-card card mb-4 w-100"
                                key={article.id}
                            >
                                <div className="row no-gutters">
                                    <div className="col-md-5 col-sm-12">
                                        <img src={article.image} alt="..." />
                                    </div>
                                    <div className="col-md-7 align-self-center">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                {article.name}
                                            </h5>
                                            <p className="card-text mb-0">
                                                {article.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
