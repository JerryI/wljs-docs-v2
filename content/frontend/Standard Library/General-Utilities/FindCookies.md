---
title: FindCookies
---

`FindCookies[]` gives a list of all currently set cookies.

- `FindCookies[domain]` gives a list of cookies associated with the specified domain.
- `FindCookies[assoc]` gives a list of cookies whose attributes match the specification in the association assoc.

## Examples

```wolfram
(* List all cookies *)
FindCookies[]

(* Find cookies for a specific domain *)
FindCookies["example.com"]

(* Find cookies matching attributes *)
FindCookies[<|"Secure" -> True|>]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindCookies.html) for more details.*