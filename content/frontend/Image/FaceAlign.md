---
title: FaceAlign
---

`FaceAlign[image]` attempts to find faces in image and align them.

- `FaceAlign[image,fref]` gives aligned faces according to the face reference fref. 
- `FaceAlign[image,fref,size]` gives aligned faces of the specified size.
- `FaceAlign[{image1,image2,…},…]` gives a list of aligned faces for all imagei.

## Examples

```wolfram
(* Align faces in an image *)
FaceAlign[photo]

(* Align to a specific size *)
FaceAlign[photo, Automatic, {100, 100}]

(* Align multiple images *)
FaceAlign[{photo1, photo2, photo3}]
```


Something isn't working? [Report](https://github.com/WLJSTeam/wljs-notebook/issues) an issue.

Please visit the official [Wolfram Language Reference](https://reference.wolfram.com/language/ref/FaceAlign.html) for more details.