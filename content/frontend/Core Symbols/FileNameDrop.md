# FileNameDrop

`FileNameDrop["name", n]` drops the first n path elements.

`FileNameDrop["name", -n]` drops the last n path elements.

`FileNameDrop["name"]` drops the last path element (filename).

## Examples

Drop last element:

```wolfram
FileNameDrop["/path/to/file.txt"]
(* "/path/to" *)
```

Drop first two elements:

```wolfram
FileNameDrop["/path/to/file.txt", 2]
(* "to/file.txt" *)
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameDrop.html) for more details.*