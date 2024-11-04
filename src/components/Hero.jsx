import Proptypes from "prop-types";

export default function Hero({ title, subtitle }) {
    return (
        <section id="hero">
            <div className="container">
                <h1 className="title text-center">{title}</h1>
                <p className="subtitle text-center">{subtitle}</p>
            </div>
        </section>
    );
}

Hero.propTypes = {
    title: Proptypes.string,
    subtitle: Proptypes.string,
};
