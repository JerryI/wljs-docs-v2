---
title: URLExecute
---

`URLExecute[url]` executes the specified URL, importing whatever result is generated.

`URLExecute[url, {param1 -> val1, param2 -> val2, …}]` executes the specified URL, adding elements with names parami and values vali.

`URLExecute[url, params, format]` imports the result using the specified format.


`URLExecute[HTTPRequest[…], …]` executes the specified HTTP request.

## Examples

```wolfram
URLExecute["https://httpbin.org/get"]
(* <|"args" -> <||>, "headers" -> ...| *)
```

```wolfram
URLExecute["https://httpbin.org/post", {"key" -> "value"}, "JSON"]
(* <|"data" -> ...|> *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLExecute.html) for more details.