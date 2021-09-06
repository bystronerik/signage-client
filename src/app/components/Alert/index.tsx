import React from 'react';
import { AlertProps } from './types';

export function Alert({ data }: AlertProps) {
    return <div>{data ? null : 'false'}</div>;
}
