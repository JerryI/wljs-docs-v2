---
title: URLFetchAsynchronous
---

`URLFetchAsynchronous[url, func]` performs a connection in the background, calling func when an event is raised.

## Examples

Fetch URL asynchronously:
```wolfram
URLFetchAsynchronous["https://example.com", Print]
```

Handle response events:
```wolfram
URLFetchAsynchronous[url, Function[{ev, data}, If[ev == "data", process[data]]]]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLFetchAsynchronous.html) for more details.