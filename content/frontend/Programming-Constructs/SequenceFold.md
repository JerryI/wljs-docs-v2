---
title: SequenceFold
---

`SequenceFold[f, {x1, ..., xn}, {a1, a2, ...}]` gives the last element of `SequenceFoldList[f, {x1, ..., xn}, {a1, a2, ...}]`.

- `SequenceFold[f, {x1, ..., xn}, {a1, a2, ...}, k]` applies f to k arguments at each step, with the first n coming from the xi or previous results, and the last k-n coming from the ai.

## Examples

```wolfram
SequenceFold[Plus, {0, 1}, {2, 3, 4, 5}]
```

```wolfram
SequenceFold[Times, {1, 2}, Range[3, 6]]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceFold.html) for more details.