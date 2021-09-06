import { Validity } from './Validity';
import { AlertData } from './AlertData';

export class ContentData {
    constructor(
        public id?: string,
        public path?: string,
        public type?: string,
        public showTime?: number,
        public animationIn?: string,
        public animationOut?: string,
        public validity?: Validity,
        public alert?: AlertData
    ) {}

    static isImage(type: string | undefined): boolean {
        return type?.toLowerCase().includes('image') ?? false;
    }

    static isVideo(type: string | undefined): boolean {
        return type?.toLowerCase().includes('video') ?? false;
    }
}
