---
title: FindChannels
---

`FindChannels[]` gives a list of channels in your home area on the channel broker server.

- `FindChannels[None]` gives a list of your unnamed channels.
- `FindChannels[All]` gives a list of all channels owned by you.
- `FindChannels[form]` gives a list of channels in your home area whose names match the string pattern form.
- `FindChannels["/…"]` gives a list of channels whose names match the string pattern "/abspath".
- `FindChannels["mqtts://…"]` gives a list of channels whose names match the specified pattern representing a URL.

## Examples

```wolfram
(* List all your channels *)
FindChannels[]

(* Find channels matching a pattern *)
FindChannels["data*"]

(* List all unnamed channels *)
FindChannels[None]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindChannels.html) for more details.*