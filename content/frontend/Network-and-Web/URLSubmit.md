---
title: URLSubmit
---

`URLSubmit[url]` submits the specified URL to be executed asynchronously.

`URLSubmit[url,{param1->val1,param2->val2,…}]` submits the specified URL, adding elements with names parami and values vali.

`URLSubmit[obj,…]` submits the cloud object obj.

`URLSubmit[HTTPRequest[…],…]` submits the specified HTTP request.

## Examples

```wolfram
URLSubmit["https://httpbin.org/get"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLSubmit.html) for more details.