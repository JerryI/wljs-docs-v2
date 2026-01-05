# BarcodeImage

`BarcodeImage["string"]` generates a barcode image of "string" in the "QR" format.

`BarcodeImage["string",format]` generates a barcode image of "string" in the specified format.

`BarcodeImage["string",format,size]` attempts to generate a barcode image of the specified size.

## Examples

Generate a QR code:

```wolfram
BarcodeImage["Hello World"]
```

Generate a barcode in a specific format:

```wolfram
BarcodeImage["12345", "EAN13"]
```

Specify size:

```wolfram
BarcodeImage["Test", "QR", 200]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/BarcodeImage.html) for more details.*