import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

import { useVideoMovie } from '~/hooks';

function Watching() {
    let { id } = useParams();

    const videos = useVideoMovie(id);

    const data = videos.videoMovie;

    const opts = {
        height: '700',
        width: '100%',
        host: `${window.location.protocol}//www.youtube.com`,

        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            controls: 1,
            autoplay: 1,
            modestbranding: 1,
            loop: 1,
            rel: 0,
            autohide: 1,
            enablejsapi: 1,
            origin: `${window.location.host}`,
        },
    };

    const renderTrailer = () => {
        const trailer = data.find((video) => video.type === 'Trailer');

        if (trailer) {
            return (
                <>
                    <YouTube className="mb-3" key={trailer.id} videoId={trailer.key} opts={opts} />

                    <div className="px-[60px] py-[30px]">
                        <h1 className="text-[32px] text-white mb-[6px]">{trailer?.name}</h1>
                        <p className="text-[20px] text-gray-500">{trailer?.published_at}</p>
                    </div>
                </>
            );
        }
    };

    return (
        <>
            <div className="h-[150vh] bg-content">
                <div className=" mt-[var(--header-height)]"> {renderTrailer()}</div>
            </div>
        </>
    );
}

export default Watching;
