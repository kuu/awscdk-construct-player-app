export interface Endpoint {
    readonly id: string;
    readonly url: string;
    readonly type: 'hls' | 'dash';
    readonly name: string;
}

export interface Player {
    readonly id: string;
    readonly name: string;
}

const enspoints = JSON.parse(process.env.ENDPOINT_LIST as string);
const hlsPrefix = process.env.HLS_PLAYBACK_PREFIX as string;
const dashPrefix = process.env.DASH_PLAYBACK_PREFIX as string;
const players = {
    hls: [
        {
            id: "video-js",
            name: "Video.js",
        },
        {
            id: "hls-js",
            name: "HLS.js",
        },
    ],
    dash: [
        {
            id: "shaka-player",
            name: "SHAKA Player",
        },
        {
            id: "dash-js",
            name: "DASH-IF Player",
        },
    ],
};
  
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

export function getPlayers(type: 'hls' | 'dash'): Player[] {
    return players[type];
}

export function getPlaybackUrl(id: string, type: string): string {
    return type === "hls" ? `${hlsPrefix}${id}/index.m3u8` : `${dashPrefix}${id}/index.mpd`;
}
