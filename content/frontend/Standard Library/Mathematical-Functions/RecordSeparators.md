---
title: RecordSeparators
---

`RecordSeparators` is an option for `Read`, `Find`, and related functions that specifies the list of strings to be taken as delimiters for records.

## Examples

```wolfram
ImportString["a;b;c", "Table", RecordSeparators -> {";"}]
(* {{"a"}, {"b"}, {"c"}} *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecordSeparators.html) for more details.*