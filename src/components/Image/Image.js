import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import clsx from 'clsx';

import images from '~/assets/images';

const Image = forwardRef(({ className, src, alt, fallBack: customFallBack = images.noImage }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallBack);
    };

    const handleDragStart = (e) => e.preventDefault();

    return (
        <img
            ref={ref}
            className={clsx(className, 'overflow-hidden select-none cursor-pointer')}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
            onDragStart={handleDragStart}
        />
    );
});

Image.propTypes = {
    className: PropTypes.string,
    src: PropTypes.string,
    alt: PropTypes.string,
    customFallBack: PropTypes.string,
};

export default Image;
