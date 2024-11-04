import PropTypes from "prop-types";

export default function CultureCard({ id, name, image, description }) {
    return (
        <div className="col-md-3">
            <div
                className="card w-100 mb-4"
                data-toggle="modal"
                data-target={`#cultureModal${id}`}
            >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}

CultureCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};
