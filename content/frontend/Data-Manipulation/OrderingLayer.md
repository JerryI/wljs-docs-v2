---
title: OrderingLayer
---

`OrderingLayer[]` represents a net layer that effectively applies `Ordering` to its input.

- `OrderingLayer[n]` gives the first n elements in the ordering of its input.
- `OrderingLayer[-n]` gives the last n elements in the ordering of its input.

## Examples

```wolfram
layer = OrderingLayer[3];
layer[{5, 2, 8, 1, 9}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/OrderingLayer.html) for more details.