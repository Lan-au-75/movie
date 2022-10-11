import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as detailMovieServices from '~/services/detailMovieServices';
import Detail from './index';

function DetailAPI() {
    const [detail, setDetail] = useState([]);

    let { id } = useParams();

    useEffect(() => {
        const fetchApi = async () => {
            const data = await detailMovieServices.detailMovie(id);

            setDetail(data);
        };

        fetchApi();
    }, [id]);

    const data = {
        detail,
        detailID: id,
    };

    return <Detail data={data}></Detail>;
}

export default DetailAPI;
