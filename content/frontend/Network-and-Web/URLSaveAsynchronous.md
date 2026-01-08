---
title: URLSaveAsynchronous
---

`URLSaveAsynchronous["url", "file", func]` performs a download to "file" in the background, calling func when an event is raised.

## Examples

```wolfram
URLSaveAsynchronous["https://example.com/file.zip", "local.zip", 
  Print[#] &]
```

```wolfram
URLSaveAsynchronous[url, file, 
  Function[{status, data}, If[status === "done", Print["Complete"]]]]
```

```wolfram
task = URLSaveAsynchronous["https://example.com/data.csv", "data.csv", callback]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLSaveAsynchronous.html) for more details.