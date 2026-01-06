---
title: ChannelObject
---

`ChannelObject[]` gives a new anonymous channel specification.

`ChannelObject["relpath"]` represents a channel for the currently authenticated user at a relative path.

`ChannelObject["id:path"]` represents a channel for the user with the specified Wolfram ID at the given path.

## Examples

Create an anonymous channel:

```wolfram
ch = ChannelObject[]
(* ChannelObject[...] *)
```

Create a named channel:

```wolfram
ch = ChannelObject["myChannel"]
(* ChannelObject["myChannel"] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ChannelObject.html) for more details.*