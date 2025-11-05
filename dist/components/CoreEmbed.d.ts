import { default as React } from 'react';
import { CoreComponentModel, RoutedModel } from './ComponentProperties';
declare global {
    interface Window {
        PinUtils: {
            build?: Function;
        };
    }
}
export interface OEmbedResponse {
    processor?: string;
    options?: {
        pinId?: string;
        provider?: string;
        response?: {
            height?: string;
            html?: string;
            providerName?: string;
            providerUrl?: string;
            title?: string;
            type?: string;
            url?: string;
            width?: string;
        };
    };
}
export interface YouTubeProps {
    layout: string;
    youtubeAspectRatio: string;
    youtubeAutoPlay: boolean;
    youtubeHeight?: string;
    youtubeLoop: boolean;
    youtubeMute: boolean;
    youtubePlaysInline: boolean;
    youtubeRel: boolean;
    youtubeVideoId: string;
    youtubeWidth?: string;
}
export interface EmbedProps extends CoreComponentModel, RoutedModel {
    type: 'URL' | 'HTML' | 'EMBEDDABLE';
    result?: OEmbedResponse;
    url?: string;
    html?: string;
    youTubeProps?: YouTubeProps;
}
export declare const isEmpty: (props: EmbedProps) => boolean;
declare const CoreEmbed: (props: EmbedProps) => React.JSX.Element | null;
export default CoreEmbed;
