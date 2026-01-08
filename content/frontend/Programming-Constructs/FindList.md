---
title: FindList
---

`FindList["file","text"]` gives a list of lines in the file that contain the specified string. 

- `FindList["file",{"text1","text2",…}]` gives a list of all lines that contain any of the specified strings. 
- `FindList[{"file1",…},…]` gives a list of lines containing the specified strings in any of the filei. 
- `FindList[files,text,n]` includes only the first n lines found. 

## Examples

```wolfram
(* Find all lines containing "error" *)
FindList["log.txt", "error"]

(* Find lines with multiple patterns *)
FindList["data.txt", {"warning", "error", "critical"}]

(* Get only first 10 matches *)
FindList["bigfile.txt", "pattern", 10]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FindList.html) for more details.