export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    website: string;
    posterUrl: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, website: string, posterUrl: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.website = website;
        this.posterUrl = posterUrl;
    }
}
