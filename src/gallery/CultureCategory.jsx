import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CultureCategory({
    id,
    name,
    isActive,
    handleActiveCategory,
}) {
    return (
        <span
            className={`badge badge-ikn-default ${
                isActive == id ? "active" : ""
            }`}
            onClick={() => handleActiveCategory(id)}
        >
            <Link to="/gallery">{name}</Link>
        </span>
    );
}

CultureCategory.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    isActive: PropTypes.number,
    handleActiveCategory: PropTypes.func,
};
