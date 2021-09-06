import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { loadDeployInfoQuery } from './__generated__/loadDeployInfoQuery.graphql';
import { DeployInfo } from '../types';

export function loadDeployInfo(): DeployInfo {
    return Object.assign(
        new DeployInfo(),
        useLazyLoadQuery<loadDeployInfoQuery>(
            graphql`
                query loadDeployInfoQuery {
                    deployInfo {
                        versionHash
                    }
                }
            `,
            {},
            {
                fetchPolicy: 'network-only',
                /* eslint-disable-next-line @typescript-eslint/comma-dangle */
            }
        ).deployInfo
    );
}
