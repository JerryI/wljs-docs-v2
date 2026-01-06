# HTTPErrorResponse

`HTTPErrorResponse[code]` is an object that represents an error response to an HTTP request, with specified error code.

## Examples

404 Not Found:

```wolfram
HTTPErrorResponse[404]
```

500 Internal Server Error:

```wolfram
HTTPErrorResponse[500]
```

With message:

```wolfram
HTTPErrorResponse[403, "Access Denied"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/HTTPErrorResponse.html) for more details.*