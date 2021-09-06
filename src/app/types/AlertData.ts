import { Validity } from './Validity';

export class AlertData {
    constructor(
        public id?: string,
        public name?: string,
        public position?: AlertPosition,
        public value?: string,
        public validity?: Validity,
        public background?: string,
        public borders?: string,
        public height?: string,
        public textSize?: string,
        public textColor?: string,
        public textPosition?: string,
        public running?: boolean
    ) {}
}

export enum AlertPosition {
    TOP = 'TOP',
    BOTTOM = 'BOTTOM',
    MIDDLE = 'MIDDLE',
}
