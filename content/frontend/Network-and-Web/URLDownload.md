---
title: URLDownload
---

`URLDownload[url]` downloads the content of the specified URL to a local temporary file.

- `URLDownload[{url1, url2, ...}]` downloads the contents of the specified URLs to files in a local temporary directory.
- `URLDownload[url, file]` downloads to a specified file.
- `URLDownload[{url1, url2, ...}, dir]` downloads to a specified directory.
- `URLDownload[HTTPRequest[...], ...]` downloads the result of the specified HTTP request.
- `URLDownload[{req1, req2, ...}, ...]` downloads the results of the list of HTTP requests.
- `URLDownload[req, loc, "elem"]` returns only the element elem from the response.
- `URLDownload[req, loc, {elem1, elem2, ...}]` returns an association of the values of the elements elemi.

## Examples

```wolfram
URLDownload["https://www.wolfram.com/"]
```

```wolfram
URLDownload["https://example.com/file.txt", "local.txt"]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLDownload.html) for more details.