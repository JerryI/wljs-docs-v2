---
title: FeedbackType
---

`FeedbackType` is an option for some control system functions that specifies the feedback type.

## Examples

```wolfram
(* Use positive feedback *)
SystemsModelFeedbackConnect[sys1, sys2, FeedbackType -> 1]

(* Use negative feedback (default) *)
SystemsModelFeedbackConnect[sys1, sys2, FeedbackType -> -1]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FeedbackType.html) for more details.*