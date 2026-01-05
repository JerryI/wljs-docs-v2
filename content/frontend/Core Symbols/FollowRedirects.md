# FollowRedirects

`FollowRedirects` is an option for `URLRead` and related functions that specifies whether to follow HTTP redirects when retrieving a URL.

## Examples

Disable following redirects:

```wolfram
URLRead["https://example.com/redirect", FollowRedirects -> False]
(* HTTPResponse[...] *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FollowRedirects.html) for more details.*