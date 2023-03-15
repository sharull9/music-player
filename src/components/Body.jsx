import React from "react";
import Hero from "./Hero";
import LatestRelease from "./LatestRelease";
import Queue from "./Queue";

function Body() {
  return (
    <>
      <main className="grid md:grid-cols-3 gap-4 px-4 md:px-16">
        <div className="md:col-span-2">
          <Hero />
          <LatestRelease />
        </div>
        <div>
          <Queue />
        </div>
      </main>
    </>
  );
}

export default Body;
