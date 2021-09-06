/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type loadDeployInfoQueryVariables = {};
export type loadDeployInfoQueryResponse = {
    readonly deployInfo: {
        readonly versionHash: string;
    } | null;
};
export type loadDeployInfoQuery = {
    readonly response: loadDeployInfoQueryResponse;
    readonly variables: loadDeployInfoQueryVariables;
};



/*
query loadDeployInfoQuery {
  deployInfo {
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
    "name": "deployInfo",
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
    "name": "loadDeployInfoQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "loadDeployInfoQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d3f00a954157188ab2dc0b097a7bf19e",
    "id": null,
    "metadata": {},
    "name": "loadDeployInfoQuery",
    "operationKind": "query",
    "text": "query loadDeployInfoQuery {\n  deployInfo {\n    versionHash\n  }\n}\n"
  }
};
})();
(node as any).hash = '27e9e9b8f7621c82a4a6a48848b7d9b8';
export default node;
