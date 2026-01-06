# URLSave

`URLSave["url"]` saves the content of the URL to a file in $TemporaryDirectory.

- `URLSave["url", "file"]` saves the content of the URL to a file.
- `URLSave["url", "file", elements]` returns the specified elements from a URL.

## Examples

```wolfram
URLSave["https://www.wolfram.com"]
```

```wolfram
URLSave["https://www.wolfram.com", "page.html"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/URLSave.html) for more details.*