# RemoteFile

`RemoteFile[URL["uri"]]` is a symbolic representation of a file on a remote machine.

## Examples

```wolfram
RemoteFile[URL["sftp://user@host/path/to/file"]]
```

```wolfram
CopyFile[RemoteFile[URL["sftp://host/file.txt"]], "local.txt"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RemoteFile.html) for more details.*