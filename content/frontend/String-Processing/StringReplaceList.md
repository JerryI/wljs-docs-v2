---
title: StringReplaceList
---

`StringReplaceList["string", s -> sp]` gives a list of the strings obtained by replacing each individual occurrence of substrings in "string" matching the string expressions.

- `StringReplaceList["string", {s1 -> sp1, s2 -> sp2, ...}]` replaces multiple patterns.
- `StringReplaceList["string", srules, n]` gives a list of the first n results obtained.
- `StringReplaceList[{s1, s2, ...}, srules]` gives the list of results for each of the si.

## Examples

List all possible single replacements:
```wolfram
StringReplaceList["abab", "a" -> "X"]
```

Replace with multiple patterns:
```wolfram
StringReplaceList["abc", {"a" -> "1", "b" -> "2"}]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/StringReplaceList.html) for more details.