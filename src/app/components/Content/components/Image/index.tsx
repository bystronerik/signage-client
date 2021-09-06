import React from 'react';
import { ImageProps } from './types';

export function ContentImage({ source }: ImageProps) {
    return <img src={source} alt="" style={{ width: '100vw' }} />;
}
