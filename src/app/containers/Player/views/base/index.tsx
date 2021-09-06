import React, { useEffect } from 'react';
import { Content } from '../../../../components/Content';
import { Alert } from '../../../../components/Alert';
import { usePlayerTicker } from '../../hooks';
import { PlayerBaseViewProps } from './types/PlayerBaseViewProps';

export function PlayerBaseView({ data }: PlayerBaseViewProps) {
    const [alert, content] = usePlayerTicker(data);

    useEffect(() => {
        console.log(new Date());
        console.log(content);
    }, [content]);

    return (
        <div>
            <style>{data.styles}</style>
            {alert ? <Alert data={alert} /> : null}
            {content ? <Content data={content} /> : null}
        </div>
    );
}
