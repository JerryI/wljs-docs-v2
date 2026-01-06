# SemanticImportString

`SemanticImportString["string"]` attempts to import a string semantically to give a Dataset object.

- `SemanticImportString["string", type]` attempts to interpret all elements in the string as being of the specified type.
- `SemanticImportString["string", {type1, type2, ...}]` attempts to interpret elements in successive columns as being of the specified types.
- `SemanticImportString["string", <|col1 -> type1, col2 -> type2, ...|>]` attempts to interpret elements in the named columns as being of the specified types.
- `SemanticImportString["string", typespec, form]` puts the result in the specified form.

## Examples

Import CSV data from a string:

```wolfram
SemanticImportString["name,age\nAlice,30\nBob,25"]
```

Specify column types:

```wolfram
SemanticImportString["Alice,30\nBob,25", {"String", "Number"}]
```

Get as a list:

```wolfram
SemanticImportString["1,2,3\n4,5,6", Automatic, "Data"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/SemanticImportString.html) for more details.*