import Article from "./Article";
import CityIcon from "./CityIcon";
import Culinary from "./Culinary";
import Etnic from "./Etnic";
import Header from "./Header";
import History from "./History";
import More from "./More";
import Nature from "./Nature";
import Province from "./Province";
import ProvinceIcon from "./ProvinceIcon";
import Statistic from "./Statistic";

export default function Home() {
    return (
        <>
            <Header isJumbotron={true} />
            <Province />
            <ProvinceIcon />
            <CityIcon />
            <Statistic />
            <History isTitle={true} isComplete={false} />
            <Nature />
            <Etnic />
            <Culinary />
            <Article />
            <More />
        </>
    );
}
