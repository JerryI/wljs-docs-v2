---
title: ConnectedGraphQ
---

`ConnectedGraphQ[g]` yields `True` if graph g is connected (every vertex can reach every other vertex), and `False` otherwise.

## Examples

Test connectivity:

```wolfram
ConnectedGraphQ[Graph[{1 <-> 2, 2 <-> 3}]]
(* True *)

ConnectedGraphQ[Graph[{1 <-> 2, 3 <-> 4}]]
(* False - two disconnected components *)
```

Complete graphs are connected:

```wolfram
ConnectedGraphQ[CompleteGraph[10]]
(* True *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ConnectedGraphQ.html) for more details.