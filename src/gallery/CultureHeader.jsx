import PropTypes from "prop-types";

export default function CultureHeader({
    cultureData,
    handleSearchCultureData,
    search,
    setSearch,
}) {
    return (
        <>
            <div className="col-md-6 align-self-center">
                <h1 className="title">
                    Total data saat ini :
                    <span className="font-green">
                        {" "}
                        {cultureData.length} data
                    </span>
                </h1>
            </div>
            <div className="col-md-4 ml-auto">
                <div className="culture-form">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Search..."
                            aria-label="Search..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyUp={(e) => setSearch(e.target.value)}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-ikn-search-primary"
                                type="button"
                                onClick={() => handleSearchCultureData(search)}
                            >
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

CultureHeader.propTypes = {
    cultureData: PropTypes.any,
    handleSearchCultureData: PropTypes.func,
    search: PropTypes.string,
    setSearch: PropTypes.func,
};
