# RemoteAuthorizationCaching

`RemoteAuthorizationCaching` is an option for `RemoteConnect` and related functions that determines whether caching of authorization information on remote hosts should be used.

## Examples

Disable authorization caching:
```wolfram
RemoteConnect[host, RemoteAuthorizationCaching -> False]
```

Enable caching for remote connections:
```wolfram
RemoteConnect[host, RemoteAuthorizationCaching -> True]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteAuthorizationCaching.html) for more details.*