import logo from "/assets/images/logo.png";
export const logoImg = logo;

export const navLinks = [
    {
        id: 1,
        name: "Beranda",
        route: "/",
        is_active: true,
    },
    {
        id: 2,
        name: "Sejarah",
        route: "/history",
        is_active: false,
    },
    {
        id: 3,
        name: "Galeri Budaya",
        route: "/gallery",
        is_active: false,
    },
    {
        id: 4,
        name: "Tentang Kami",
        route: "/about-us",
        is_active: false,
    },
];

import cityIcon from "/assets/images/ciri-khas.png";
export const cityIconImg = cityIcon;

import history1 from "/assets/images/sejarah/01.png";
import history2 from "/assets/images/sejarah/02.png";
import history3 from "/assets/images/sejarah/03.png";

export const history1Img = history1;
export const history2Img = history2;
export const history3Img = history3;

import tuguKhatulistiwa from "/assets/images/icon-province/tugu-khatulistiwa.png";
import sungaiMahakam from "/assets/images/icon-province/sungai-mahakam.png";
import tuguBatangGaring from "/assets/images/icon-province/tugu-batang-garing.png";
import tuguPerdamaian from "/assets/images/icon-province/tugu-perdamaian.png";
import patungBekantan from "/assets/images/icon-province/patung-bekantan.png";

export const iconPerProvinceItems = [
    {
        id: 1,
        name: "Tugu Khatulistiwa",
        province: "Kalimantan Barat",
        image: tuguKhatulistiwa,
    },
    {
        id: 2,
        name: "Sungai Mahakam",
        province: "Kalimantan Timur",
        image: sungaiMahakam,
    },
    {
        id: 3,
        name: "Tugu Batang Garing",
        province: "Kalimantan Tengah",
        image: tuguBatangGaring,
    },
    {
        id: 4,
        name: "Tugu Perdamaian",
        province: "Kalimantan Utama",
        image: tuguPerdamaian,
    },
    {
        id: 5,
        name: "Patung Bekantan",
        province: "Kalimantan Selatan",
        image: patungBekantan,
    },
];

import anggrekHitam from "/assets/images/flora-dan-fauna/anggrek-hitam.jpg";
import durianAnggang from "/assets/images/flora-dan-fauna/durian-anggang.png";
import kantongSemar from "/assets/images/flora-dan-fauna/kantong-semar.png";
import manggaKasturi from "/assets/images/flora-dan-fauna/mangga-kasturi.jpg";
import orangUtanKalimantan from "/assets/images/flora-dan-fauna/orangutan-kalimantan.jpg";
import pasakBumi from "/assets/images/flora-dan-fauna/pasak-bumi.png";
import pohonBuilian from "/assets/images/flora-dan-fauna/pohon-builian.png";
import pohonKapul from "/assets/images/flora-dan-fauna/pohon-kapul.png";
import tengkawangTungkul from "/assets/images/flora-dan-fauna/tengkawang-tungkul.jpg";
import nasiSubut from "/assets/images/makanan-tradisional/nasi-sudut.png";
import gerejaGKE from "/assets/images/cagar-budaya/gereja.png";
import tariBurungEnggang from "/assets/images/seni-musik-dan-tari/tari-burung-enggang.jpg";
import agamaIslam from "/assets/images/agama/islam.jpg";

export const natureItems = [
    {
        id: 1,
        name: "Anggrek Hitam",
        image: anggrekHitam,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
        integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
        molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
        Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
         ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 2,
        name: "Durian Anggang",
        image: durianAnggang,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
      integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
      molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
      Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
       ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 3,
        name: "Kantong Semar",
        image: kantongSemar,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
    integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
    molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
    Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
     ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 4,
        name: "Mangga Kasturi",
        image: manggaKasturi,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 5,
        name: "Orang Utan Kalimantan",
        image: orangUtanKalimantan,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 6,
        name: "Pasak Bumi",
        image: pasakBumi,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 7,
        name: "Pohon Builian",
        image: pohonBuilian,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 8,
        name: "Pohon Kapul",
        image: pohonKapul,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 9,
        name: "Tengkawang Tungkul",
        image: tengkawangTungkul,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
  integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
  molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
  Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
   ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 3,
    },
    {
        id: 10,
        name: "Nasi Subut",
        image: nasiSubut,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 5,
    },
    {
        id: 11,
        name: "Bubur Punai",
        image: buburPunai,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 5,
    },
    {
        id: 12,
        name: "Hintalu Karuang",
        image: hintaluKaruang,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 5,
    },
    {
        id: 13,
        name: "Suku Dayak",
        image: sukuDayak,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 1,
    },
    {
        id: 14,
        name: "Suku Banjar",
        image: sukuBanjar,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 1,
    },
    {
        id: 15,
        name: "Gereja GKE Imanuel Mandoma",
        image: gerejaGKE,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 4,
    },
    {
        id: 16,
        name: "Tari Burung Enggang",
        image: tariBurungEnggang,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 6,
    },
    {
        id: 17,
        name: "Agama Islam",
        image: agamaIslam,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
 ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        category_id: 2,
    },
];

import sukuBanjar from "/assets/images/suku/banjar.png";
import sukuDayak from "/assets/images/suku/dayak.png";

export const etnicItems = [
    {
        id: 1,
        name: "Suku Banjar",
        image: sukuBanjar,
        description:
            "Suku Banjar merupakan penutur Bahasa Banjar, dan terikat dalam persamaan sejarah atau latar belakang serta kebudayaan.",
    },
    {
        id: 2,
        name: "Suku Dayak",
        image: sukuDayak,
        description: `"Kata "daya" serumpun dengan misalnya kata "raya" dalam nama "Toraya" yang berarti "orang atas, orang hulu"`,
    },
];

import buburPunai from "/assets/images/makanan-tradisional/bubur-punai.png";
import hintaluKaruang from "/assets/images/makanan-tradisional/hintalu-karuang.png";

export const culinaryLeftItems = [
    {
        id: 1,
        name: "Bubur Punai",
        image: buburPunai,
        province: "Kalimantan Barat",
    },
    {
        id: 2,
        name: "Hintalu Karuang",
        image: hintaluKaruang,
        province: "Kalimantan Tengah",
    },
];

export const culinaryRightItems = [
    {
        id: 1,
        name: "Nasi Subut",
        image: nasiSubut,
        province: "Kalimantan Utara",
    },
];

import berita01 from "/assets/images/berita/01.png";
import berita02 from "/assets/images/berita/02.png";
import berita03 from "/assets/images/berita/03.png";
import berita04 from "/assets/images/berita/04.png";

export const articleMainItems = [
    {
        id: 1,
        name: "Pendapatan Sampoerna Agro Merosot 19%, Ini Penyebabnya",
        image: berita01,
        description: `Lorem ipsum dolor sit amet consectetur. Eleifend velit augue viverra sed faucibus posuere 
      integer. Eu maecenas non dictumst nulla scelerisque quam. Erat ac sed arcu amet vulputate 
      molestie convallis. Porttitor volutpat pulvinar aliquam massa dolor quam adipiscing magna. 
      Ipsum dignissim id tempor diam aliquet sit. In aenean est in nibh feugiat. Cras quis duis fames
       ac etiam amet enim. Est arcu magna elit mi. Eget malesuada sit dictumst congue.`,
        date: "Mei 05, 2024",
    },
];

export const articleSecondaryItems = [
    {
        id: 1,
        name: "Bantuan Helikopter Water Bombing untuk Antisipasi Kebakaran Hutan di Pulau Kalimantan",
        image: berita02,
        date: "Mei 05, 2024",
    },
    {
        id: 2,
        name: "Komitmen Pertamina Disektor Pendidikan dan Penelitian",
        image: berita03,
        date: "Mei 05, 2024",
    },
    {
        id: 3,
        name: "Kemenkop UKM Meningkatan Kapasitas Startup",
        image: berita04,
        date: "Mei 05, 2024",
    },
];

export const cultureCategories = [
    {
        id: 1,
        name: "Suku dan Etnik",
        is_active: false,
    },
    {
        id: 2,
        name: "Agama",
        is_active: false,
    },
    {
        id: 3,
        name: "Flora dan Fauna",
        is_active: false,
    },
    {
        id: 4,
        name: "Cagar Budaya",
        is_active: false,
    },
    {
        id: 5,
        name: "Kuliner",
        is_active: false,
    },
    {
        id: 6,
        name: "Seni Musik dan Tari",
        is_active: false,
    },
];
