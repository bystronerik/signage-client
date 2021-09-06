import React, { useState } from 'react';
import { PlayerBaseView } from './views';
import { loadPlayerData, usePlayerAutoSync } from './hooks';
import { useQuery } from '../../hooks';
import { PlayerData } from './types';

export function Player() {
    const query = useQuery();
    const token = query.get('token') as string;

    const [data] = useState<PlayerData>(loadPlayerData(token));

    usePlayerAutoSync({
        callback: () => {
            window.location.reload();
        },
    });

    return <PlayerBaseView data={data} />;
}
