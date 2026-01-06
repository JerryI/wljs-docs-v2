---
title: GraphRadius
---

`GraphRadius[g]` gives the minimum eccentricity of the vertices in graph g (the eccentricity of the center).

## Examples

Radius of a path:

```wolfram
GraphRadius[PathGraph[Range[5]]]
(* 2 *)
```

Radius of a complete graph:

```wolfram
GraphRadius[CompleteGraph[10]]
(* 1 *)
```

Relation to diameter:

```wolfram
g = GridGraph[{3, 3}];
{GraphRadius[g], GraphDiameter[g]}
(* {2, 4} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/GraphRadius.html) for more details.*