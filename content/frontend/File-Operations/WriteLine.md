---
title: WriteLine
---

`WriteLine[stream, "string"]` writes "string", followed by a newline, to the specified output stream.

- `WriteLine[proc, "string"]` writes "string" to an external process proc.

## Examples

```wolfram
stream = OpenWrite["test.txt"];
WriteLine[stream, "Hello World"];
Close[stream];
```

```wolfram
proc = StartProcess[$SystemShell];
WriteLine[proc, "echo hello"];
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/WriteLine.html) for more details.