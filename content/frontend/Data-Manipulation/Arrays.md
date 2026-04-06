---
title: Arrays
---

`Arrays[{d1, ..., dr}]` represents the domain of arrays of rank r and dimensions di.

`Arrays[{d1, ..., dr}, dom]` represents the domain of arrays of dimensions di, with components in the domain dom.

`Arrays[{d1, ..., dr}, dom, sym]` represents the subdomain of arrays with dimensions di and symmetry sym.

## Examples

Define an array domain:

```wolfram
Arrays[{3, 3}]
```

Array domain with integer components:

```wolfram
Arrays[{2, 2}, Integers]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Arrays.html) for more details.