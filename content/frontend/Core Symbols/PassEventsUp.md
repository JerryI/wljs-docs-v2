# PassEventsUp

`PassEventsUp` is an option to EventHandler that specifies whether events handled by a particular event handler should be passed up to event handlers in outer expressions.

## Examples

Allow events to propagate to outer handlers:

```wolfram
EventHandler[expr, {"MouseClicked" :> action}, PassEventsUp -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PassEventsUp.html) for more details.*