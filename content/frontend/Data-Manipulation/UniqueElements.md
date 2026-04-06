---
title: UniqueElements
---

`UniqueElements[{list1, list2, ...}]` gives the elements for each listi that are not in any other list.

- `UniqueElements[lists, test]` uses test to determine whether pairs of elements should be considered equivalent.

## Examples

Find unique elements:

```wolfram
UniqueElements[{{1, 2, 3}, {2, 3, 4}, {3, 4, 5}}]
(* {{1}, {}, {5}} *)
```

Multiple lists:

```wolfram
UniqueElements[{{a, b, c}, {b, c, d}}]
(* {{a}, {d}} *)
```

Custom equivalence:

```wolfram
UniqueElements[{{"A", "B"}, {"a", "c"}}, SameQ[ToLowerCase[#1], ToLowerCase[#2]] &]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/UniqueElements.html) for more details.