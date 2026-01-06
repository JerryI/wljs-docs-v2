---
title: LinkWriteHeld
---

`LinkWriteHeld[link, Hold[expr]]` writes expr (without the Hold) via WSTP to link.

`LinkWriteHeld[link, Hold[expr], flush]` synchronizes unless flush is `False`.

## Examples

```wolfram
link = LinkLaunch[First[$CommandLine] <> " -mathlink"];
LinkWriteHeld[link, Hold[1 + 1]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkWriteHeld.html) for more details.*