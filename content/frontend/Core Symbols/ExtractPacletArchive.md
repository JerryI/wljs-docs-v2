# ExtractPacletArchive

`ExtractPacletArchive[file]` extracts the contents of the paclet archive file into the directory in which file resides.

`ExtractPacletArchive[file,destdir]` extracts the contents of the paclet archive file into destdir.

## Examples

```wolfram
(* Extract a paclet archive in place *)
ExtractPacletArchive["MyPaclet-1.0.0.paclet"]

(* Extract to a specific directory *)
ExtractPacletArchive["MyPaclet-1.0.0.paclet", "/tmp/paclets"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ExtractPacletArchive.html) for more details.*