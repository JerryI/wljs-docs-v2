---
title: VideoDelete
---

`VideoDelete[video, t]` deletes the first t seconds of video.

- `VideoDelete[video, -t]` deletes the last t seconds of video.
- `VideoDelete[video, {t1, t2}]` deletes from time t1 to time t2, returning the remaining video as a single `Video` object.
- `VideoDelete[video, {{t11, t12}, …}]` deletes multiple time intervals.

## Examples

```wolfram
VideoDelete[video, 5]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/VideoDelete.html) for more details.