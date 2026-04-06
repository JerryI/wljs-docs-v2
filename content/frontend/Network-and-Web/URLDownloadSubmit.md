---
title: URLDownloadSubmit
---

`URLDownloadSubmit[url, file]` submits the specified URL to be downloaded asynchronously to the file given.

- `URLDownloadSubmit[url, file, {param1 -> val1, param2 -> val2, …}]` submits the specified URL, adding elements with names parami and values vali.
- `URLDownloadSubmit[obj, …]` submits the cloud object obj.
- `URLDownloadSubmit[HTTPRequest[…], …]` submits the specified HTTP request.

## Examples

```wolfram
URLDownloadSubmit["https://example.com/file.zip", "/tmp/file.zip"]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLDownloadSubmit.html) for more details.