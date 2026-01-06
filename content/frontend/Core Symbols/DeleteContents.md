# DeleteContents

`DeleteContents` is an option for DeleteDirectory that specifies whether the contents of directories should automatically be deleted.

## Examples

Delete directory and contents:

```wolfram
DeleteDirectory["myFolder", DeleteContents -> True]
```

Default behavior (fails if not empty):

```wolfram
DeleteDirectory["nonEmptyFolder"]
(* Fails if directory contains files *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DeleteContents.html) for more details.*