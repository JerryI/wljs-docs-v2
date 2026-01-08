---
title: Dataset
---

`Dataset[data]` represents a structured dataset based on a hierarchy of lists and associations, enabling query operations and visualization.

## Examples

Create and query a dataset:

```wolfram
ds = Dataset[{
  <|"name" -> "Alice", "age" -> 30|>,
  <|"name" -> "Bob", "age" -> 25|>
}]

(* Select column *)
ds[All, "name"]
(* {"Alice", "Bob"} *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Dataset.html) for more details.