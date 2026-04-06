---
title: TreeData
---

`TreeData[tree]` extracts the data in the root of the Tree object tree.

## Examples

Get root data:
```wolfram
TreeData[Tree[a, {Tree[b, {}], Tree[c, {}]}]]
```

Access nested tree data:
```wolfram
tree = Tree["root", {Tree["child1", {}]}];
TreeData[tree]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TreeData.html) for more details.