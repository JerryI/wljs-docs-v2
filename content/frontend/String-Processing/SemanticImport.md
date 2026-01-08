---
title: SemanticImport
---

`SemanticImport[file]` attempts to import a file semantically to give a Dataset object.

- `SemanticImport[file, type]` attempts to interpret all elements in the file as being of the specified type.
- `SemanticImport[file, {type1, type2, ...}]` attempts to interpret elements in successive columns as being of the specified types.
- `SemanticImport[file, <|col1 -> type1, col2 -> type2, ...|>]` keeps only the columns specified by their positions or names.
- `SemanticImport[file, typespec, form]` puts the result in the specified form.

## Examples

Import a CSV file semantically:

```wolfram
SemanticImport["data.csv"]
```

Specify column types:

```wolfram
SemanticImport["data.csv", {"String", "Number", "Date"}]
```

Select specific columns:

```wolfram
SemanticImport["data.csv", <|"Name" -> "String", "Age" -> "Number"|>]
```

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SemanticImport.html) for more details.