---
title: DocumentGenerator
---

`DocumentGenerator[template, timespec]` represents a document generator with template template to be evaluated on the schedule defined by timespec.

`DocumentGenerator[template, driver, timespec]` takes parameters for filling the template from driver.

## Examples

Create a document generator:

```wolfram
DocumentGenerator[File["template.nb"], "Weekly"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/DocumentGenerator.html) for more details.*