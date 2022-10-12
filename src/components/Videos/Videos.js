import YouTube from 'react-youtube';

function Videos({ data }) {
    const opts = {
        height: '240',
        width: '340',
        host: `${window.location.protocol}//www.youtube.com`,

        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            controls: 1,

            autoplay: 0,
            modestbranding: 1,
            loop: 1,
            rel: 0,
            autohide: 1,
            enablejsapi: 1,
            origin: `http://localhost:3000/`,
        },
    };

    const renderTrailer = (title) => {
        const trailers = data.filter((video) => video.type === title);

        return trailers.map((trailer) => (
            <YouTube className="ml-3 mb-3" key={trailer.id} videoId={trailer.key} opts={opts} />
        ));
    };

    return (
        <>
            <div className="">
                <h3 className="text-white text-[21px] my-[10px] font-bold">Trailer</h3>
                <div className="flex flex-wrap">{renderTrailer('Trailer')}</div>
            </div>
        </>
    );
}

export default Videos;
