import { ContentData } from '../../../types/ContentData';
import { AlertData } from '../../../types/AlertData';

export class PlayerData {
    constructor(
        public assets?: ContentData[],
        public priorityAssets?: ContentData[],
        public alert?: AlertData,
        public styles?: string
    ) {}
}
