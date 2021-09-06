import { useEffect, useMemo, useRef } from 'react';
import { GraphQLSubscriptionConfig, requestSubscription } from 'relay-runtime';
import { useRelayEnvironment } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import {
    usePlayerAutoSyncSubscription,
    usePlayerAutoSyncSubscriptionResponse,
} from './__generated__/usePlayerAutoSyncSubscription.graphql';
import { PlayerAutoSyncProps } from '../types';

export function usePlayerAutoSync({ callback }: PlayerAutoSyncProps) {
    const versionHash = useRef<string>('');
    const syncSubscriptionConfig = useMemo(
        function config(): GraphQLSubscriptionConfig<usePlayerAutoSyncSubscription> {
            return {
                variables: {},
                subscription: graphql`
                    subscription usePlayerAutoSyncSubscription {
                        deployInfoSync {
                            versionHash
                        }
                    }
                `,
                onNext: (response: usePlayerAutoSyncSubscriptionResponse | null | undefined) => {
                    if (!response || !response.deployInfoSync) {
                        return;
                    }

                    const data = response.deployInfoSync;
                    if (versionHash.current.length === 0) {
                        versionHash.current = data.versionHash;
                        return;
                    }

                    if (versionHash.current !== data.versionHash) {
                        versionHash.current = data.versionHash;
                        callback(response);
                    }
                },
            };
        },
        []
    );

    const subscription = requestSubscription(useRelayEnvironment(), syncSubscriptionConfig);

    useEffect(() => {
        return () => subscription.dispose();
    }, []);
}
