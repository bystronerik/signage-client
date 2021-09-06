/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type usePlayerAutoSyncSubscriptionVariables = {};
export type usePlayerAutoSyncSubscriptionResponse = {
    readonly deployInfoSync: {
        readonly versionHash: string;
    } | null;
};
export type usePlayerAutoSyncSubscription = {
    readonly response: usePlayerAutoSyncSubscriptionResponse;
    readonly variables: usePlayerAutoSyncSubscriptionVariables;
};



/*
subscription usePlayerAutoSyncSubscription {
  deployInfoSync {
    versionHash
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "DeployData",
    "kind": "LinkedField",
    "name": "deployInfoSync",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "versionHash",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "usePlayerAutoSyncSubscription",
    "selections": (v0/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "usePlayerAutoSyncSubscription",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a8814b2716b95fcec31f6a5a8a9dc9cb",
    "id": null,
    "metadata": {},
    "name": "usePlayerAutoSyncSubscription",
    "operationKind": "subscription",
    "text": "subscription usePlayerAutoSyncSubscription {\n  deployInfoSync {\n    versionHash\n  }\n}\n"
  }
};
})();
(node as any).hash = '0a8f0b8312cf731726121d5dc1be96ab';
export default node;
