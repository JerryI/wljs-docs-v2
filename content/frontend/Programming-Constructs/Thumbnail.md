---
title: Thumbnail
---

`Thumbnail[image]` gives a thumbnail version of an image.

- `Thumbnail[file]` gives a thumbnail of an image stored in a file.
- `Thumbnail[url]` gives a thumbnail of an image stored at a URL.
- `Thumbnail[spec, size]` gives a thumbnail with the specified maximum pixel size.

## Examples

Create thumbnail:

```wolfram
img = ExampleData[{"TestImage", "Lena"}];
Thumbnail[img]
```

Specify size:

```wolfram
Thumbnail[img, 50]
```

From URL:

```wolfram
Thumbnail["https://example.com/image.png", 100]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/Thumbnail.html) for more details.