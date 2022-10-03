import PropTypes from 'prop-types';
import clsx from 'clsx';

import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
    const className = clsx('btn menu-item ml-i w-full font-normal', {
        separate: data?.separate,
    });

    return (
        <Button to={data?.to} href={data?.href} className={className} onClick={onClick}>
            {data?.title}
        </Button>
    );
}

Button.propTypes = {
    data: PropTypes.array,
    onClick: PropTypes.func,
};

export default MenuItem;
