# FileNameForms

`FileNameForms` is an option that specifies the pattern for file names to be selected by a function.

## Examples

```wolfram
(* Find only .txt files *)
FileNames[FileNameForms -> "*.txt"]

(* Find multiple file types *)
FileNames[FileNameForms -> {"*.jpg", "*.png"}]

(* Use with FileSystemWatch *)
FileSystemWatch[dir, FileNameForms -> "*.log"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FileNameForms.html) for more details.*