export interface GifInfo {
    id: string;
    title: string;
    url: string;
}

export interface GifResponse {
    data: GifDataResponse[];
}

export interface GifDataResponse {
    id: string;
    title: string;
    images: GifImages;
}

export interface GifImages {
    downsized_medium: DownsizedMedium
}

export interface DownsizedMedium {
    url: string;
}