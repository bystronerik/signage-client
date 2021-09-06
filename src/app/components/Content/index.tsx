import React from 'react';
import { ContentWrapper } from './styles';
import { ContentProps } from './types';
import { ContentImage } from './components';
import { ContentData } from '../../types/ContentData';

export function Content({ data }: ContentProps) {
    return (
        <ContentWrapper>
            {ContentData.isImage(data.type) && data.path ? (
                <ContentImage source={data.path} />
            ) : null}
        </ContentWrapper>
    );
}
