---
title: RenameDirectory
---

`RenameDirectory[dir1, dir2]` renames the directory dir1 to dir2.

This function moves or renames a directory on the file system.

## Examples

```wolfram
RenameDirectory["/path/to/oldname", "/path/to/newname"]
```

```wolfram
RenameDirectory["myFolder", "myNewFolder"]
```

```wolfram
(* Move directory to new location *)
RenameDirectory[FileNameJoin[{$TemporaryDirectory, "test"}], 
  FileNameJoin[{$HomeDirectory, "test"}]]
```

*See the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RenameDirectory.html) for more details.*