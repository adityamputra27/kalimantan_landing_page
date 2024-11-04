import { logoImg, navLinks } from "../utils";

export default function Footer() {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-logo mb-3 mb-md-0 d-flex flex-column flex-md-row justify-content-center justify-content-md-between align-items-center align-items-md-start">
                            <div className="footer-logo__img">
                                <img src={logoImg} width="230" alt="" />
                            </div>
                            <p className="pr-4 footer-logo__text">
                                Kalimantan adalah sebuah wilayah di Pulau
                                Kalimantan di bawah administrasi Negara Kesatuan
                                Republik Indonesia.
                                <br />
                                <br />
                                ©2023 Copyright Kalimantan Indonesia
                            </p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-menu">
                            <p className="footer-menu__title">MENU</p>
                            <ul className="footer-menu__list">
                                {navLinks.map((nav) => (
                                    <li key={nav.id}>{nav.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-social-media">
                            <p className="footer-social-media__title">
                                SOSIAL MEDIA
                            </p>
                            <ul className="footer-social-media__list">
                                <li>Instagram</li>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-address">
                            <p className="footer-address__title">ALAMAT</p>
                            <p className="footer-address__text">
                                Jalan Mulawarman No. 99 Balikpapan, Kalimantan
                                Timur, 76116
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
