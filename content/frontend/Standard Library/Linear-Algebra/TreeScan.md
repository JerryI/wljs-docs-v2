# TreeScan

`TreeScan[f, tree]` evaluates f applied to the data of each subtree of tree in turn.

- `TreeScan[f, tree, levelspec]` applies f to the data of subtrees on levels of tree specified by levelspec.
- `TreeScan[f, tree, levelspec -> elems]` applies f to the elements elems of subtrees on levels specified by levelspec.
- `TreeScan[f]` represents an operator form of `TreeScan` that can be applied to a tree.

## Examples

```wolfram
TreeScan[Print, Tree[1, {Tree[2], Tree[3]}]]
```

```wolfram
TreeScan[Print, tree, 2]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeScan.html) for more details.*