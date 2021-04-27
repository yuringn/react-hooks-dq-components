import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  const albumCard = albums.map((album => <AlbumCard
    key={album.id}
    name={album.name}
    image={album.image}
    genre={album.genre}
  />))
  return (
    <section className="albums">
      {albumCard}
    </section>
  );
}

export default AlbumList;
