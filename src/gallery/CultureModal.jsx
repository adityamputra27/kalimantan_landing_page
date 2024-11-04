import PropTypes from "prop-types";

export default function CultureModal({ id, name, image, description }) {
    return (
        <div
            className="modal fade cultureModal"
            id={`cultureModal${id}`}
            aria-labelledby="cultureModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-body">
                        <img src={image} alt="" />
                        <div className="modal-description">
                            <h1 className="title mb-3">{name}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-ikn-secondary py-2 px-3"
                            data-dismiss="modal"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

CultureModal.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
};
