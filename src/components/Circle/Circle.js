import PropTypes from 'prop-types';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Circle({ num }) {
    let percentage = Math.floor(num * 10).toString();

    if (percentage <= 0) {
        percentage = 'NR';
        return (
            <CircularProgressbar
                className="absolute top-[90%] left-2  w-full h-full max-w-[38px] max-h-[38px]"
                value={percentage}
                text={`${percentage}`}
                background={true}
                styles={buildStyles({
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '26px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#666666`,
                    textColor: '#fff',
                    trailColor: 'rgba(102, 102, 102,0.3)',
                    backgroundColor: '#081c22',
                })}
            />
        );
    }

    if (percentage < 40) {
        return (
            <CircularProgressbar
                className="absolute top-[90%] left-2  w-full h-full max-w-[38px] max-h-[38px]"
                value={percentage}
                text={`${percentage}%`}
                background={true}
                styles={buildStyles({
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '26px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgb(239, 68, 68)`,
                    textColor: '#fff',
                    trailColor: 'rgba(239, 68, 68,0.3)',
                    backgroundColor: '#081c22',
                })}
            />
        );
    }

    if (percentage < 70) {
        return (
            <CircularProgressbar
                className="absolute top-[90%] left-2  w-full h-full max-w-[38px] max-h-[38px]"
                value={percentage}
                text={`${percentage}%`}
                background={true}
                styles={buildStyles({
                    rotation: 1,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '26px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `#f2ff00`,
                    textColor: '#fff',
                    trailColor: 'rgba(242, 255, 0,0.3)',
                    backgroundColor: '#081c22',
                })}
            />
        );
    }

    if (percentage < 100) {
        return (
            <>
                <CircularProgressbar
                    className="absolute top-[90%] left-2  w-full h-full max-w-[38px] max-h-[38px]"
                    value={percentage}
                    text={`${percentage}%`}
                    background={true}
                    styles={buildStyles({
                        rotation: 1,

                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',

                        // Text size
                        textSize: '26px',

                        // How long animation takes to go from one percentage to another, in seconds
                        pathTransitionDuration: 0.5,

                        // Can specify path transition in more detail, or remove it entirely
                        // pathTransition: 'none',

                        // Colors
                        pathColor: 'rgb(34, 197, 94)',
                        textColor: '#fff',
                        trailColor: 'rgba(34, 197, 94,0.3)',
                        backgroundColor: '#081c22',
                    })}
                />
            </>
        );
    }
}

Circle.propTypes = {
    num: PropTypes.number,
};

export default Circle;
