---
title: RogersTanimotoDissimilarity
---

`RogersTanimotoDissimilarity[u,v]` gives the Rogers–Tanimoto dissimilarity between Boolean vectors u and v.

## Examples

Compute dissimilarity between two Boolean vectors:

```wolfram
RogersTanimotoDissimilarity[{1, 0, 1, 1}, {1, 1, 0, 1}]
(* 1/2 *)
```

Identical vectors have zero dissimilarity:

```wolfram
RogersTanimotoDissimilarity[{1, 0, 1}, {1, 0, 1}]
(* 0 *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RogersTanimotoDissimilarity.html) for more details.