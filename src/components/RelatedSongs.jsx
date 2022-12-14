import React from "react";
import SongBar from "./SongBar";

const RelatedSongs = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Related Songs:</h1>
      <div>
        {data?.map((song, i) => (
          <>
            (
            <SongBar
              key={`${artistId}-${song.key}-${i}`}
              song={song}
              artistId={artistId}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={handlePlayClick}
            />
            )
          </>
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;
