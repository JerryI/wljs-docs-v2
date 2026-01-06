---
title: ResourceUpdate
---

`ResourceUpdate[resource]` updates to the latest version of the specified resource object.

- `ResourceUpdate["name"]` updates the resource with the specified name.

## Examples

Update a resource by name:

```wolfram
ResourceUpdate["Wolfram/GPT4"]
```

Update a resource object:

```wolfram
resource = ResourceObject["DataResource/Titanic"];
ResourceUpdate[resource]
```

Check if update is available before updating:

```wolfram
resource = ResourceObject["DataResource/Titanic"];
If[resource["UpdateAvailable"], ResourceUpdate[resource]]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/ResourceUpdate.html) for more details.*