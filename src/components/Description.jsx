import { useEffect } from "react";

export default function Description() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section id="description">
            <div className="container">
                <h1 className="title text-center">
                    Portal Website{" "}
                    <span className="font-gold">Kalimantan Indonesia</span>{" "}
                    Wadah untuk
                    <span className="font-green"> Ekspresi</span> dan{" "}
                    <span className="font-green">Eksplorasi</span>
                </h1>
                <p className="mt-5">
                    Kalimantan Indonesia merupakan portal informasi budaya
                    Indonesia khususnya untuk Pulau Kalimantan atau Borneo .
                    Portal ini bertujuan memperkenalkan dan memberikan kekayaan
                    kebudayaan yang dimiliki oleh Pulau Borneo Indonesia. Dalam
                    portal ini, masyarakat bisa mendapatkan informasi tentang
                    kekayaan yang dimiliki Indonesia dalam bentuk artikel
                    tentang penjelasan sejarah singkat, dan galeri budaya
                    melalui menu yang ada di website Kalimantan Indonesia.
                    <br />
                    <br />
                    Portal Kalimantan Indonesia memiliki 4 menu utama, yaitu
                    berandan yang mengulas dan menyajikan berbagai informasi
                    seperti nama nama provinsi, ikon unik setiap kota, flora,
                    fauna sampai beberapa kuliner, sejarah yaitu mengulas dan
                    menjelaskan deskripsi singkat tentang terbentuknya Pulau
                    Borneo, selanjutnya adalah menu galeri budaya yang berisikan
                    tentang keanekaragaman budaya yang ada khususnya di Pulau
                    Borneo diantaranya seperti Suku dan Etnik, Agama, Flora dan
                    Fauna, Cagar Budaya, Kuliner hingga Seni Musik dan Tari
                </p>
            </div>
        </section>
    );
}
