import Image from "next/image";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function QueueCard({ song, artist, index, src, alt }) {
    const [isLiked, setIsLiked] = useState(false);
    const addToLiked = () => {
        setIsLiked(!isLiked);
    };
    return (
        <div className="grid grid-cols-8 h-[50px]">
            <div className="flex justify-center items-center">{index}</div>
            <div className="relative h-full">
                <Image className="absolute w-full h-full" src={src} alt={alt} />
            </div>
            <div className="col-span-5 px-2 flex flex-col">
                <h4>{song}</h4>
                <p className="text-xs">{artist}</p>
            </div>
            <div>
                <button onClick={addToLiked}>
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </button>
            </div>
        </div>
    );
}

export default QueueCard;
