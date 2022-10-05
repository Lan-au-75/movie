import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Button({ children, className, to, href, leftIcon, rightIcon, onClick, ...passProps }) {
    let Components = 'button';

    const props = { onClick, ...passProps };

    if (to) {
        Components = Link;
        props.to = to;
    }

    if (href) {
        Components = 'a';
        props.href = href;
    }

    return (
        <Components className={className} {...props}>
            {leftIcon && <span className="icon">{leftIcon}</span>}
            <span className="title">{children}</span>
            {rightIcon && <span className="icon">{rightIcon}</span>}
        </Components>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};

export default Button;
