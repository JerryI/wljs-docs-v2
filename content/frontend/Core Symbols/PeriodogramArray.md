# PeriodogramArray

`PeriodogramArray[list]` returns the squared magnitude of the discrete Fourier transform (power spectrum) of list.

`PeriodogramArray[list,n]` averages the power spectra of non-overlapping partitions of length n.

`PeriodogramArray[list,n,d]` uses partitions with offset d.

`PeriodogramArray[list,n,d,wfun]` applies a smoothing window wfun to each partition.

`PeriodogramArray[list,n,d,wfun,m]` pads partitions with zeros to length m prior to the computation of the transform.

`PeriodogramArray[image,…]` returns the squared power spectrum of image.

`PeriodogramArray[audio,…]` returns the squared power spectrum of audio.

`PeriodogramArray[video,…]` returns the squared power spectrum of the first audio track in video.

## Examples

Compute the power spectrum of a simple signal:

```wolfram
PeriodogramArray[{1, 2, 3, 4, 5}]
(* {225., 6.88197, 1.11803, 1.11803, 6.88197} *)
```

Use partitions with averaging:

```wolfram
data = Table[Sin[2 Pi n/10], {n, 100}];
PeriodogramArray[data, 20]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/PeriodogramArray.html) for more details.*