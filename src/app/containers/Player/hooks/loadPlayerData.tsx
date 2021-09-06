import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import { loadPlayerDataQuery } from './__generated__/loadPlayerDataQuery.graphql';
import { PlayerData } from '../types';

export function loadPlayerData(token: string): PlayerData {
    return Object.assign(
        new PlayerData(),
        useLazyLoadQuery<loadPlayerDataQuery>(
            graphql`
                query loadPlayerDataQuery($token: String!) {
                    syncPlayer(token: $token) {
                        assets {
                            id
                            path
                            type
                            showTime
                            animationIn
                            animationOut
                            validity {
                                enabled
                                from
                                to
                            }
                            alert {
                                id
                                value
                                position
                                validity {
                                    enabled
                                    from
                                    to
                                }
                                background
                                borders
                                height
                                textSize
                                textColor
                                textPosition
                            }
                        }
                        priorityAssets {
                            id
                            path
                            type
                            showTime
                            animationIn
                            animationOut
                            validity {
                                enabled
                                from
                                to
                            }
                            alert {
                                id
                                value
                                position
                                validity {
                                    enabled
                                    from
                                    to
                                }
                                background
                                borders
                                height
                                textSize
                                textColor
                                textPosition
                            }
                        }
                        alert {
                            id
                            value
                            position
                            validity {
                                enabled
                                from
                                to
                            }
                            background
                            borders
                            height
                            textSize
                            textColor
                            textPosition
                        }
                        styles
                    }
                }
            `,
            {
                token,
            },
            {
                fetchPolicy: 'network-only',
                /* eslint-disable-next-line @typescript-eslint/comma-dangle */
            }
        ).syncPlayer
    );
}
