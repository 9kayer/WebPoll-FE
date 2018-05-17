import { Music } from '../models/music';
import { Artist } from '../models/artist';
import { Genre } from '../models/genre';

const  genreList : Genre[] = [
    new Genre(1, 'Rock'),
    new Genre(2, 'Pop')
];

const  artistList : Artist[] = [
    new Artist(1, 'Muse'),
    new Artist(2, 'Cher'),
    new Artist(3, 'Elton John')
];

const musicList : Music[] = [
    new Music(1, 'Supermassive Black Hole', artistList[0], genreList[0]),
    new Music(2, 'United States of Eurasia', artistList[0], genreList[0]),
    new Music(3, 'Believe', artistList[1], genreList[1]),
    new Music(4, 'Your Song', artistList[2], genreList[1])
]

export class MusicService{

    constructor(){  
    }

    getAll() : Music[] {
        return musicList;
    }
}