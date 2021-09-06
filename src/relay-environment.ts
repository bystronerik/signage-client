import { Environment, Network, Observable, RecordSource, Store } from 'relay-runtime';
import { RequestParameters } from 'relay-runtime/lib/util/RelayConcreteNode';
import { Variables } from 'relay-runtime/lib/util/RelayRuntimeTypes';
import { SubscriptionClient } from 'subscriptions-transport-ws';

async function fetchGraphQL(params: RequestParameters, variables: Variables) {
    const response = await fetch('http://localhost:9090/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: params.text,
            variables,
        }),
    });

    return response.json();
}

const subscriptionClient = new SubscriptionClient('ws://localhost:9090/subscriptions', {
    reconnect: true,
});

// @ts-ignore
const subscribe = (request, variables) => {
    const subscribeObservable = subscriptionClient.request({
        query: request.text,
        operationName: request.name,
        variables,
    });
    // @ts-ignore
    return Observable.from(subscribeObservable);
};

// @ts-ignore
const network = Network.create(fetchGraphQL, subscribe);

export default new Environment({
    network,
    store: new Store(new RecordSource()),
});
