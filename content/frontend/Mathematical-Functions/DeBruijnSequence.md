---
title: DeBruijnSequence
---

`DeBruijnSequence[list, n]` gives a de Bruijn sequence on the elements in list taken n at a time.

`DeBruijnSequence[k, n]` gives a de Bruijn sequence on the elements 0, …, k-1.

`DeBruijnSequence["string", n]` gives a de Bruijn sequence on the characters in "string".

## Examples

Generate a binary de Bruijn sequence:

```wolfram
DeBruijnSequence[2, 3]
(* {0, 0, 0, 1, 0, 1, 1, 1} *)
```

Generate a de Bruijn sequence on characters:

```wolfram
DeBruijnSequence["ab", 2]
(* {"a", "a", "b", "b"} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeBruijnSequence.html) for more details.