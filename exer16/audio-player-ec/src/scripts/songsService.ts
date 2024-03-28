import axios from 'axios' 
const SONGS_PATH = '/songs'
const ARTISTS_PATH = '/artists'

export default class SongsService {
    API_URL : String
  constructor () {
    this.API_URL = 'http://localhost:3000'
  }

  async getSongs () {
    const { data } = await axios.get(this.API_URL + SONGS_PATH)
    return data
  }

  async getSong (songId : number){
    const { data } = await axios.get(this.API_URL + SONGS_PATH + '/' + songId)
    return data
  }

  async getArtists () {
    const { data } = await axios.get(this.API_URL + ARTISTS_PATH)
    return data
  }

  async getArtist (artistId : number) {
    const { data } = await axios.get(this.API_URL + ARTISTS_PATH + '/' + artistId)
    return data
  }
}