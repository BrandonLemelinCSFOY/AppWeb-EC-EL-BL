import Artist from "./artist"

export default class Song {

    id:number
    name:string
    desc:string
    fileName:string
    url:string
    artist:Artist
    

    constructor(song:any, artist:Artist) {
        this.id = parseInt(song.id)
        this.name = song.songName
        this.desc = song.desc
        this.fileName = song.fileName
        this.url = song.infosUrl
        this.artist = artist
    }
}