# WebWindowObject

`WebWindowObject[...]` represents an open window or tab in a web browser.

## Examples

Get the current browser window:
```wolfram
session = StartWebSession[];
WebWindowObject[session]
```

Switch to a window:
```wolfram
WebExecute[session, "SwitchToWindow" -> windowObj]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WebWindowObject.html) for more details.*