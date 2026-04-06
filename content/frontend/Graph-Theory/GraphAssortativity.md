---
title: GraphAssortativity
---

`GraphAssortativity[g]` gives the assortativity coefficient of a graph g using vertex degrees.

`GraphAssortativity[g,"prop"]` gives the assortativity coefficient of the graph g using vertex property "prop".

`GraphAssortativity[g,{{vi1,vi2,…},…}]` gives the assortativity coefficient of the graph g with respect to the vertex partition {{vi1,vi2,…},…}.

`GraphAssortativity[g,{v1,v2,…}->{x1,x2,…}]` gives the assortativity coefficient of the graph g using data {x1,x2,…} for vertices {v1,v2,…}.

`GraphAssortativity[{v->w,…},…]` uses rules v->w to specify the graph g.

## Examples

Compute the assortativity of a random graph:

```wolfram
GraphAssortativity[RandomGraph[{20, 50}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphAssortativity.html) for more details.