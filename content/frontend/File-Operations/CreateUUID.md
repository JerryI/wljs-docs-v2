---
title: CreateUUID
---

`CreateUUID[]` creates a random, universally unique UUID string.

`CreateUUID["base"]` appends a UUID string to the specified base string.

## Examples

Generate a random UUID:

```wolfram
CreateUUID[]
(* "550e8400-e29b-41d4-a716-446655440000" *)
```

With a base prefix:

```wolfram
CreateUUID["user-"]
(* "user-550e8400-e29b-41d4-a716-446655440000" *)
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/CreateUUID.html) for more details.