import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import QuillSimpleImageResize from './QuillSimpleImageResize';
window['Quill'] = Quill;
function component() {
  const element: HTMLDivElement        = document.createElement('div');
  const toolbarElement: HTMLDivElement = document.createElement('div');
  const editorElement: HTMLDivElement  = document.createElement('div');
  toolbarElement.setAttribute('id', 'toolbar');
  editorElement.setAttribute('id', 'editor');
  toolbarElement.innerHTML = '<span class="ql-formats"><button class="ql-image"></span>'
  element.appendChild(toolbarElement);
  element.appendChild(editorElement);

  return element;
}

document.body.appendChild(component());
Quill.register('modules/simpleImageResize', QuillSimpleImageResize)
const quill = new Quill('#editor', {
  modules: {
    toolbar: {
      container: '#toolbar',
    },
    simpleImageResize: true
  },
  theme: 'snow'
});
