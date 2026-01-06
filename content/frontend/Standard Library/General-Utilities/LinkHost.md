---
title: LinkHost
---

`LinkHost` is an option for `LinkOpen` that specifies on what computer a program should be launched or on what computer a listening link will be found.

## Examples

Open link on specific host:
```wolfram
LinkOpen["program", LinkHost -> "hostname"]
```

Connect to remote machine:
```wolfram
LinkOpen["port@host", LinkHost -> "192.168.1.100"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/LinkHost.html) for more details.*