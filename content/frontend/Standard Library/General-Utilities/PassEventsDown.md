---
title: PassEventsDown
---

`PassEventsDown` is an option to `EventHandler` which specifies whether events handled by a particular event handler should be passed down to event handlers nested inside.

## Examples

Allow events to pass through to nested handlers:

```wolfram
EventHandler[
  Graphics[{Blue, Disk[]}],
  {"MouseClicked" :> Print["Outer clicked"]},
  PassEventsDown -> True
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PassEventsDown.html) for more details.*