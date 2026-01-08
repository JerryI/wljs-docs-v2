---
title: Entropy
---

`Entropy[list]` gives the base E information entropy of the values in list.

`Entropy[k, list]` gives the base k information entropy.

## Examples

```wolfram
Entropy[{a, b, a, c, b, a}]
(* Log[6] - 2/3 Log[3] *)
```

```wolfram
Entropy[2, {1, 1, 0, 1, 0}]
(* Entropy in bits *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Entropy.html) for more details.