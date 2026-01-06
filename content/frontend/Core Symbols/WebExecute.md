# WebExecute

`WebExecute[cmd]` executes the command cmd in a web browser.

- `WebExecute[{cmd1, cmd2, ...}]` executes a list of commands in sequence.
- `WebExecute[session, cmds]` executes cmds in the specified web session.

## Examples

Open a webpage in a browser session:
```wolfram
session = StartWebSession[];
WebExecute[session, "OpenPage" -> "https://www.wolfram.com"]
```

Click an element and take a screenshot:
```wolfram
WebExecute[session, {"ClickElement" -> "button", "CapturePageImage"}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WebExecute.html) for more details.*