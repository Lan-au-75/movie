import { useEffect, useState, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLoaderCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

import { useDebounce } from '~/hooks';

import Image from '~/components/Image';
import images from '~/assets/images';
import Circle from '~/components/Circle';

import * as searchServices from '~/services/searchServices';
import { QUERY } from '~/requests';

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [query, setQuery] = useState(QUERY);

    const debounceValue = useDebounce(query, 800);
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();

    const handleClear = () => {
        setQuery('');
        inputRef.current.focus();
    };

    useEffect(() => {
        handleClear();
    }, []);

    useEffect(() => {
        if (!debounceValue.trim()) {
            return;
        }

        const fetchApi = async () => {
            const dataSearch = await searchServices.search({
                query: debounceValue,
            });

            setLoading(false);

            setSearchResult(dataSearch);
        };

        fetchApi();
    }, [debounceValue]);

    const handleChange = (e) => {
        if (e.target.value !== '') {
            setLoading(true);
        }

        setQuery(e.target.value);
    };

    return (
        <div className="flex justify-center">
            <div className="max-w-headerWidth w-full px-12 pb-5 mt-[var(--header-height)]">
                <div className="flex items-center pt-[20px] relative">
                    <input
                        ref={inputRef}
                        value={query}
                        type="text"
                        placeholder="Search Movie"
                        className=" w-[inherit] flex-1 h-[50px] px-[14px] pr-[56px]
                        py-[9px] text-xl text-yellow-50 bg-primary border-[#dbdbdb] rounded shadow-md"
                        onChange={handleChange}
                    />
                    {/* Clear */}
                    {!!query && !loading && (
                        <AiOutlineClose
                            className="absolute right-[1.6%] top-[44%] 
                        text-[rgba(1,180,228,1)] text-[26px] transition-all cursor-pointer"
                            onClick={handleClear}
                        ></AiOutlineClose>
                    )}

                    {/* Loading */}

                    {loading && (
                        <BiLoaderCircle
                            className="absolute right-[1.6%] top-[44%] animate-spin
                        text-[rgba(1,180,228,1)] text-[26px] transition-all cursor-pointer"
                            onClick={handleClear}
                        ></BiLoaderCircle>
                    )}
                </div>

                <div className="grid grid-cols-[repeat(6,180px)] gap-6 py-5 ">
                    {searchResult.map((data, id) => (
                        <div
                            key={data?.id || id}
                            className="min-w-[180px] w-[180px] border border-solid border-[#e3e3e3] rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.1)]"
                        >
                            <div className="relative w-[180px] h-[273px] rounded-lg shadow-[0 2px 8px rgb(0 0 0 / 10%)]">
                                <Link to={`/movie/${data?.id}`}>
                                    <Image
                                        className="w-full h-full object-cover object-center rounded-lg"
                                        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
                                        alt={data?.title}
                                        fallBack={images?.noPoster}
                                    />
                                </Link>
                                <Circle num={data.vote_average}></Circle>
                            </div>
                            <div className="pt-[26px] px-[10px] pb-[12px]">
                                <Link to={`/movie/${data?.id}`}>
                                    <h2 className="text-[#000] font-bold hover:text-[rgb(1,180,228)] line-clamp-2 text-ellipsis">
                                        {data?.title}
                                    </h2>
                                </Link>
                                <p className="text-[#00000099]"> {data?.release_date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Search;
