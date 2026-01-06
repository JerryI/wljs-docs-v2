# VideoInsert

`VideoInsert[video, t -> new]` inserts the video new at time t.

- `VideoInsert[video, {t1, t2, ...} -> new]` inserts the same video at multiple positions.
- `VideoInsert[video, {t1 -> new1, ...}]` inserts multiple videos at different positions.

## Examples

Insert at time t:

```wolfram
VideoInsert[video1, Quantity[5, "Seconds"] -> video2]
```

Multiple insertions:

```wolfram
VideoInsert[mainVideo, {
  Quantity[2, "Seconds"] -> clip1,
  Quantity[8, "Seconds"] -> clip2
}]
```

*Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoInsert.html) for more details.*