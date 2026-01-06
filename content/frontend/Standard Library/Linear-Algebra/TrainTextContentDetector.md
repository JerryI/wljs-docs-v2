---
title: TrainTextContentDetector
---

`TrainTextContentDetector[{text1 -> {span1 -> class1, ...}, ...}]` trains a ContentDetectorFunction[...] based on the examples given.

## Examples

Train a content detector:
```wolfram
detector = TrainTextContentDetector[{
  "Hello John Smith" -> {{7, 16} -> "Name"},
  "Contact Jane Doe" -> {{9, 16} -> "Name"}
}]
```

Apply the detector:
```wolfram
detector["Meeting with Bob Jones"]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/TrainTextContentDetector.html) for more details.*