import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { PlayerData } from '../types';
import { ContentData } from '../../../types/ContentData';
import { AlertData } from '../../../types/AlertData';
import { Validity } from '../../../types';

export function usePlayerTicker({
    assets,
    priorityAssets,
    alert,
}: PlayerData): [AlertData | undefined, ContentData | undefined] {
    const [alertData, setAlertData] = useState<AlertData | undefined>(undefined);
    const [contentData, setContentData] = useState<ContentData | undefined>(undefined);

    const lastIndex = useRef<number>(0);
    const lastPriorityIndex = useRef<number>(0);

    const nextItem = function nextItem(
        source: ContentData[],
        index: MutableRefObject<number>
    ): ContentData | null {
        if (source.length > index.current) {
            const item = source[index.current];
            index.current += 1; // eslint-disable-line no-param-reassign

            if (item.validity?.enabled) {
                if (Validity.isValid(item.validity.from, item.validity.to)) {
                    return item;
                }
            }

            return nextItem(source, index);
        }

        if (source.length !== 0) {
            index.current = 0; // eslint-disable-line no-param-reassign
            return nextItem(source, index);
        }

        return null;
    };

    const next = function next(): number | undefined {
        const now = new Date();

        let [source, index] = [assets, lastIndex];
        priorityAssets?.forEach(function each(item) {
            if (item.validity?.enabled) {
                if (Validity.isValid(item.validity.from, item.validity.to, now)) {
                    source = priorityAssets;
                    index = lastPriorityIndex;
                }
            }
        });

        const asset = source ? nextItem(source, index) : null;
        setAlertData(asset?.alert ?? alert);

        console.log(new Date());
        console.log(asset);

        if (asset) {
            setContentData(asset);
            return asset.showTime;
        }

        return undefined;
    };

    const tick = function tick(time?: number) {
        setTimeout(
            () => {
                tick(next());
            },
            time ? time * 1000 : 20000
        );
    };

    useEffect(() => {
        tick(0.001);
    }, []);

    return [alertData, contentData];
}
