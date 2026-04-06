---
title: NetArray
---

`NetArray[]` represents an array in a net.

`NetArray["name"]` uses "name" as an identifier to share the array in more than one layer.

`NetArray[prop -> value]` specifies the property prop for the array.

`NetArray[<|"Name" -> name, "Array" -> array, …|>]` specifies several properties for the array.

## Examples

Create a named array to share weights:

```wolfram
NetArray["shared"]
```

Specify array initialization:

```wolfram
NetArray["Weights", "Array" -> RandomReal[{-1, 1}, {10, 5}]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/NetArray.html) for more details.