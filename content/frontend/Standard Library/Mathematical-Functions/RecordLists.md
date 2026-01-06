---
title: RecordLists
---

`RecordLists` is an option for `ReadList` that specifies whether objects from separate records should be returned in separate sublists.

## Examples

Read records as separate sublists:
```wolfram
ReadList["data.txt", Number, RecordLists -> True]
```

Read records as flat list:
```wolfram
ReadList["data.txt", Number, RecordLists -> False]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/RecordLists.html) for more details.*