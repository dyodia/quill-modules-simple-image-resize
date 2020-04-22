# QuillSimpleImageResize Module

A module for Quill to allow images to be resized.
QuillSimpleImageResize provide to resize width of image as a text.
QuillSimpleImageResize never provide bounding box to resize a image because the module keep to be simple.

## Usage

### Webpack/ES6

```javascript
import Quill from 'quill';
import QuillSimpleImageResize from 'quill-modules-simple-image-resize';

Quill.register('modules/simpleImageResize', QuillSimpleImageResize)
```

### Script Tag

```html
<script src="/node_modules/quill-modules-simple-image-resize/dist/quill-simple-image-resize.js"></script>
```


### Add modules simpleImageResize
```javascript
const quill = new Quill(editor, {
  modules: {
    simpleImageResize: true
  }
});
```

### Add css to change a label on tooltip.
```css
/* recommended */
.ql-snow .ql-tooltip[data-mode=simple-image-resize]::before {
  content: "image width:";
}
```
or include quill-simple-image-resize.css

```javascript
// es6
import 'quill-modules-simple-image-resize/dist/quill-modules-simple-image-resize.css';
```

```html
<!-- link tag -->
<link rel="/node_modules/quill-modules-simple-image-resize/dist/quill-simple-image-resize.css">
```
