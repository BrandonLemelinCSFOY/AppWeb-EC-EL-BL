export default class Artist {
    id:number
    name:string
    desc:string

    constructor(artist:any) {
        this.id = parseInt(artist.id)
        this.name = artist.name
        this.desc = artist.desc
    }
}