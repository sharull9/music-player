import React, { useState } from "react";
import QueueCard from "./QueueCard";
import { data } from "../data/data";

function Queue() {
    return (
        <div className="hidden md:block">
            <div>
                <h3>Queue</h3>
            </div>
            <div className="flex flex-col gap-3">
                {data.map((item, i) => (
                    <QueueCard key={i} index={i + 1} song={item.name} src={item.src} artist={item.artist} />
                ))}
            </div>
        </div>
    );
}

export default Queue;
