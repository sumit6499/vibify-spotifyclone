export interface RootObject {
    data:  Datum[];
    next:  string;
    total: number;
   }
   
   export interface Datum {
    album:                   Album;
    artist:                  Artist;
    duration:                number;
    explicit_content_cover:  number;
    explicit_content_lyrics: number;
    explicit_lyrics:         boolean;
    id:                      number;
    link:                    string;
    md5_image:               string;
    preview:                 string;
    rank:                    number;
    readable:                boolean;
    title:                   string;
    title_short:             string;
    title_version?:          TitleVersion;
    type:                    DatumType;
   }
   
   export interface Album {
    cover:        string;
    cover_big:    string;
    cover_medium: string;
    cover_small:  string;
    cover_xl:     string;
    id:           number;
    md5_image:    string;
    title:        string;
    tracklist:    string;
    type:         AlbumType;
   }
   
   export enum AlbumType {
    Album = "album",
   }
   
   export interface Artist {
    id:             number;
    link:           string;
    name:           string;
    picture:        string;
    picture_big:    string;
    picture_medium: string;
    picture_small:  string;
    picture_xl:     string;
    tracklist:      string;
    type:           ArtistType;
   }
   
   export enum ArtistType {
    Artist = "artist",
   }
   
   export enum TitleVersion {
    Empty = "",
    GestörtAberGeiLRemix = "(Gestört aber GeiL Remix)",
    Remix = "(Remix)",
   }
   
   export enum DatumType {
    Track = "track",
   }
   