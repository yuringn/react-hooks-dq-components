import React from "react";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";
import AlbumCard from "./AlbumCard"

function MainContent() {
  return (
    <main>
      <GenrePicker />
      <AlbumList />
      <AlbumCard />
    </main>
  );
}

export default MainContent;
