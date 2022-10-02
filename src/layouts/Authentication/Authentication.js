import PropTypes from 'prop-types';

function Authentication({ children }) {
    return (
        <div className="wrapper">
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

Authentication.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Authentication;
