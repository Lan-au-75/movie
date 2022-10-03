import PropTypes from 'prop-types';
import clsx from 'clsx';

function PopPerWrapper({ children, className, def = 'popper-wrapper' }) {
    return <div className={clsx(className, def)}>{children}</div>;
}

PopPerWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    def: PropTypes.string,
};

export default PopPerWrapper;
