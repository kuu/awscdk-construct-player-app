export interface Endpoint {
    readonly id: string;
    readonly url: string;
    readonly type: string;
    readonly name: string;
}

export interface Player {
    readonly id: string;
    readonly name: string;
}

const enspoints = JSON.parse(process.env.ENDPOINT_LIST as string);
const players = JSON.parse(process.env.PLAYER_LIST as string);
const hlsPrefix = process.env.HLS_PLAYBACK_PREFIX as string;
const dashPrefix = process.env.DASH_PLAYBACK_PREFIX as string;
  
export function getEndpoints(): Endpoint[] {
    return enspoints;
}

export function getEndpoint(id: string): Endpoint | null {
    for (const endpoint of enspoints) {
        if (endpoint.id === id) {
            return endpoint;
        }
    }
    return null;
}

export function getPlayers(type: string): Player[] {
    return players[type];
}

export function getPlaybackUrl(id: string, type: string): string {
    return type === "hls" ? `${hlsPrefix}${id}/index.m3u8` : `${dashPrefix}${id}/index.mpd`;
}
