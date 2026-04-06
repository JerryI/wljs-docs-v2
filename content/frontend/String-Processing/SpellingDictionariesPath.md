---
title: SpellingDictionariesPath
---

`SpellingDictionariesPath` is a global option that specifies which directories are searched for spelling dictionaries when the Edit ▶ Check Spelling menu item is used.

## Examples

Get current spelling dictionaries path:
```wolfram
$SpellingDictionariesPath
```

Add custom dictionary directory:
```wolfram
SetOptions[$FrontEnd, SpellingDictionariesPath -> {"path/to/dictionaries"}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SpellingDictionariesPath.html) for more details.