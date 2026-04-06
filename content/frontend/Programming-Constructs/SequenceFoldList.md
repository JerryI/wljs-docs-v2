---
title: SequenceFoldList
---

`SequenceFoldList[f, {x1, ..., xn}, {a1, a2, ...}]` gives {x1, ..., xn, f[x1, ..., xn, a1], f[x2, ..., xn, f[x1, ..., xn, a1], a2], ...}.

- `SequenceFoldList[f, {x1, ..., xn}, {a1, a2, ...}, k]` applies f to k arguments at each step, with the first n coming from the xi or previous results, and the last k-n coming from the ai.

## Examples

Basic sequence folding:

```wolfram
SequenceFoldList[Plus, {1, 2}, {3, 4, 5}]
```

With custom function:

```wolfram
SequenceFoldList[#1 + #2 + #3 &, {0, 1}, {1, 1, 1, 1}]
```

Fibonacci-like sequence:

```wolfram
SequenceFoldList[#1 + #2 &, {1, 1}, {0, 0, 0, 0, 0}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SequenceFoldList.html) for more details.