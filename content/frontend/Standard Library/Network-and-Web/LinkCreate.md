---
title: LinkCreate
---

`LinkCreate["name"]` creates a WSTP link with the specified name for another program to connect to.

`LinkCreate[]` creates a WSTP link and picks an unused name for the link.

## Examples

Create a named link:

```wolfram
link = LinkCreate["mylink"]
(* LinkObject["mylink", ...] *)
```

Create a link with auto-generated name:

```wolfram
link = LinkCreate[]
(* LinkObject[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkCreate.html) for more details.*