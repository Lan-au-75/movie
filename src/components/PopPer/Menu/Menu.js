import PropTypes from 'prop-types';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { IoChevronBack } from 'react-icons/io5';

import Button from '~/components/Button';
import PopPerWrapper from '~/components/PopPer';
import MenuItem from './MenuItem';

function Menu({ children, items = [] }) {
    const [history, setHistory] = useState([{ data: items }]);

    const current = history[history.length - 1];

    const renderItem = () => {
        return current.data.map((item, i) => {
            const isParent = !!item.children;

            const handleChildren = () => {
                if (isParent) {
                    setHistory((prev) => [...prev, item.children]);
                }
            };

            return <MenuItem key={i} data={item} onClick={handleChildren}></MenuItem>;
        });
    };

    const handleBack = () =>
        setHistory((prev) => {
            let newState;
            newState = [...prev];
            newState.splice(-1, 1);

            return newState;
        });

    const renderResults = (props) => (
        <div className="menu-list" tabIndex="-1" {...props}>
            <PopPerWrapper className="pb-[10px]">
                {history.length > 1 ? (
                    <header className=" flex items-center justify-items-start text-[#00000099] pl-5 py-4">
                        <Button className="text-[20px]" onClick={handleBack}>
                            <IoChevronBack></IoChevronBack>
                        </Button>
                        <Button className="ml-2">{current?.title}</Button>
                    </header>
                ) : (
                    <header className=" flex flex-col text-[#00000099] pl-5 py-4">
                        <Button to="/profile">Riotgamelolgare@gmail.com</Button>
                        <Button to="/profile" className="text-left">
                            View profile
                        </Button>
                    </header>
                )}

                {renderItem()}
            </PopPerWrapper>
        </div>
    );

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                hideOnClick={false}
                delay={[0, 500]}
                placement="bottom"
                render={renderResults}
                onHide={() => setHistory((prev) => prev.slice(0, 1))}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
};

export default Menu;