/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type loadPlayerDataQueryVariables = {
    token: string;
};
export type loadPlayerDataQueryResponse = {
    readonly syncPlayer: {
        readonly assets: ReadonlyArray<{
            readonly id: string;
            readonly path: string;
            readonly type: unknown;
            readonly showTime: number | null;
            readonly animationIn: string | null;
            readonly animationOut: string | null;
            readonly validity: {
                readonly enabled: boolean;
                readonly from: unknown | null;
                readonly to: unknown | null;
            } | null;
            readonly alert: {
                readonly id: string;
                readonly value: string;
                readonly position: string;
                readonly validity: {
                    readonly enabled: boolean;
                    readonly from: unknown | null;
                    readonly to: unknown | null;
                } | null;
                readonly background: string | null;
                readonly borders: string | null;
                readonly height: string | null;
                readonly textSize: string | null;
                readonly textColor: string | null;
                readonly textPosition: string | null;
            } | null;
        } | null>;
        readonly priorityAssets: ReadonlyArray<{
            readonly id: string;
            readonly path: string;
            readonly type: unknown;
            readonly showTime: number | null;
            readonly animationIn: string | null;
            readonly animationOut: string | null;
            readonly validity: {
                readonly enabled: boolean;
                readonly from: unknown | null;
                readonly to: unknown | null;
            } | null;
            readonly alert: {
                readonly id: string;
                readonly value: string;
                readonly position: string;
                readonly validity: {
                    readonly enabled: boolean;
                    readonly from: unknown | null;
                    readonly to: unknown | null;
                } | null;
                readonly background: string | null;
                readonly borders: string | null;
                readonly height: string | null;
                readonly textSize: string | null;
                readonly textColor: string | null;
                readonly textPosition: string | null;
            } | null;
        } | null>;
        readonly alert: {
            readonly id: string;
            readonly value: string;
            readonly position: string;
            readonly validity: {
                readonly enabled: boolean;
                readonly from: unknown | null;
                readonly to: unknown | null;
            } | null;
            readonly background: string | null;
            readonly borders: string | null;
            readonly height: string | null;
            readonly textSize: string | null;
            readonly textColor: string | null;
            readonly textPosition: string | null;
        } | null;
        readonly styles: string;
    } | null;
};
export type loadPlayerDataQuery = {
    readonly response: loadPlayerDataQueryResponse;
    readonly variables: loadPlayerDataQueryVariables;
};



/*
query loadPlayerDataQuery(
  $token: String!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "token"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Validity",
  "kind": "LinkedField",
  "name": "validity",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabled",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "from",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "to",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "AlertData",
  "kind": "LinkedField",
  "name": "alert",
  "plural": false,
  "selections": [
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "value",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "position",
      "storageKey": null
    },
    (v2/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "background",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "borders",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "height",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "textSize",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "textColor",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "textPosition",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = [
  (v1/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "path",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "type",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "showTime",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "animationIn",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "animationOut",
    "storageKey": null
  },
  (v2/*: any*/),
  (v3/*: any*/)
],
v5 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "token",
        "variableName": "token"
      }
    ],
    "concreteType": "PlayerData",
    "kind": "LinkedField",
    "name": "syncPlayer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetData",
        "kind": "LinkedField",
        "name": "assets",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "AssetData",
        "kind": "LinkedField",
        "name": "priorityAssets",
        "plural": true,
        "selections": (v4/*: any*/),
        "storageKey": null
      },
      (v3/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "styles",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "loadPlayerDataQuery",
    "selections": (v5/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "loadPlayerDataQuery",
    "selections": (v5/*: any*/)
  },
  "params": {
    "cacheID": "cd85aa33e02a144fcfeb81a1654df840",
    "id": null,
    "metadata": {},
    "name": "loadPlayerDataQuery",
    "operationKind": "query",
    "text": "query loadPlayerDataQuery(\n  $token: String!\n) {\n  syncPlayer(token: $token) {\n    assets {\n      id\n      path\n      type\n      showTime\n      animationIn\n      animationOut\n      validity {\n        enabled\n        from\n        to\n      }\n      alert {\n        id\n        value\n        position\n        validity {\n          enabled\n          from\n          to\n        }\n        background\n        borders\n        height\n        textSize\n        textColor\n        textPosition\n      }\n    }\n    priorityAssets {\n      id\n      path\n      type\n      showTime\n      animationIn\n      animationOut\n      validity {\n        enabled\n        from\n        to\n      }\n      alert {\n        id\n        value\n        position\n        validity {\n          enabled\n          from\n          to\n        }\n        background\n        borders\n        height\n        textSize\n        textColor\n        textPosition\n      }\n    }\n    alert {\n      id\n      value\n      position\n      validity {\n        enabled\n        from\n        to\n      }\n      background\n      borders\n      height\n      textSize\n      textColor\n      textPosition\n    }\n    styles\n  }\n}\n"
  }
};
})();
(node as any).hash = 'de51eef9b88f1b019cf09b7b225469d8';
export default node;
