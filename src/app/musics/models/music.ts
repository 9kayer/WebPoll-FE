import { Artist } from './artist';
import { Genre } from './genre';

export class Music {
    id: number;
    name: string;
    artist: Artist;
    genre: Genre;

    constructor(id: number, name: string, artist: Artist, genre: Genre){
        this.id = id;
        this.name = name;
        this.artist = artist;
        this.genre = genre; 
    }
}