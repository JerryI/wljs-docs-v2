---
title: EventHandler
---

`EventHandler[expr, {event1 :> action1, event2 :> action2, ...}]` displays as expr, evaluating action_i whenever event_i occurs in connection with expr.

## Examples

Handle a mouse click:

```wolfram
EventHandler[
  Graphics[Disk[]],
  {"MouseClicked" :> Print["Clicked!"]}
]
```

Track mouse position:

```wolfram
EventHandler[
  Graphics[Rectangle[]],
  {"MouseMoved" :> Print[MousePosition[]]}
]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EventHandler.html) for more details.*