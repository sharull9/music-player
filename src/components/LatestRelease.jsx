import React from "react";
import Card from "./LatestReleaseCard";
import { data } from "../data/data"

function LatestRelease() {
  const LatestReleaseData = data;
  return (
    <div className="mt-8">
      <div>
        <h2>Latest Release</h2>
      </div>
      <div className="grid grid-rows-6 md:grid-cols-2 gap-4">
        {LatestReleaseData.slice(0, 6).map((data, i) => (
          <Card
            key={i}
            name={data.name}
            time={data.time}
            src={data.src}
            alt={data.alt}
            duration={data.duration}
          />
        ))}
      </div>
    </div>
  );
}

export default LatestRelease;
