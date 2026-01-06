---
title: FindHiddenMarkovStates
---

`FindHiddenMarkovStates[data,hmm]` finds the most likely hidden states of the HiddenMarkovProcess hmm corresponding to the emissions data.

`FindHiddenMarkovStates[data,hmm,crit]` uses the given criterion crit to find the hidden states.

## Examples

Find hidden states from emission data:

```wolfram
hmm = HiddenMarkovProcess[{0.5, 0.5}, {{0.7, 0.3}, {0.4, 0.6}}, {{0.9, 0.1}, {0.2, 0.8}}];
data = {1, 1, 2, 1, 2};
FindHiddenMarkovStates[data, hmm]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindHiddenMarkovStates.html) for more details.*