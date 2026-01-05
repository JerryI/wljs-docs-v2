# MorphologicalBinarize

```
MorphologicalBinarize[image,{t1,t2}] creates a binary image from image by replacing all values above the upper threshold t2 with 1, also including pixels with intensities above the lower threshold t1 that are connected to the foreground.

MorphologicalBinarize[image,t] uses t as the upper threshold, automatically choosing a suitable value for the lower threshold.

MorphologicalBinarize[image] chooses the lower and the upper threshold automatically.
```




*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/) for more details and examples on core symbols.*