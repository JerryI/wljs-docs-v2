# Path

`Path` is an option for `Get` and related functions which gives a list of directories to search in attempting to find an external file.

## Examples

Get a file with custom search path:
```wolfram
Get["myfile.m", Path -> {"/custom/path", $UserBaseDirectory}]
```

Check the default path:
```wolfram
Options[Get, Path]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Path.html) for more details.*