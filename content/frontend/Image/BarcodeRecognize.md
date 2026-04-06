---
title: BarcodeRecognize
---

`BarcodeRecognize[image]` recognizes a barcode in image and returns it as a string.

`BarcodeRecognize[image, "prop"]` returns the specified property of the barcode.

`BarcodeRecognize[image, "prop", format]` recognizes barcodes of the specified format only.

## Examples

Recognize a barcode:

```wolfram
BarcodeRecognize[barcodeImage]
(* "1234567890" *)
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BarcodeRecognize.html) for more details.