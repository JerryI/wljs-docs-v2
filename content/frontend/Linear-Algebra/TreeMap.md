---
title: TreeMap
---

`TreeMap[f, tree]` applies f to the data of each subtree of tree.

- `TreeMap[f, tree, levelspec]` applies f to the data of subtrees on levels of tree specified by levelspec.
- `TreeMap[f, tree, levelspec -> elems]` applies f to the elements elems of subtrees on levels specified by levelspec.
- `TreeMap[f]` represents an operator form of TreeMap that can be applied to a tree.

## Examples

Apply function to all nodes:
```wolfram
TreeMap[f, Tree[a, {Tree[b, {}], Tree[c, {}]}]]
```

Map at specific level:
```wolfram
TreeMap[StringLength, tree, {2}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeMap.html) for more details.