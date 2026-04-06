---
title: EndOfBuffer
---

`EndOfBuffer` is a symbol that represents the end of currently available data in the buffer for a process or stream.

## Examples

Read until end of buffer:

```wolfram
ReadString[process, EndOfBuffer]
```

Check for end of buffer:

```wolfram
If[Read[stream] === EndOfBuffer, "waiting for more data"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/EndOfBuffer.html) for more details.