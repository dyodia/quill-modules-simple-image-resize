import type { RangeStatic } from 'quill';
import type Quill from 'quill';
import './QuillSimpleImageResize.css';
const MODULE_ID = 'simple-image-resize';

export default class QuillSimpleImageResize {
  quill: Quill;
  options: any;
  img: HTMLImageElement;
  range: RangeStatic;
  constructor(quill: Quill, options = {}){
    this.quill = quill;
    this.options = options;
    this.quill.root.addEventListener('click', (evt) => this.handleClick(evt), false);
    this.patchTooltipSave();
  }
  patchTooltipSave(){
    const tooltip = this.quill['theme'].tooltip;
    if(!tooltip){ return };
    const originalSave = tooltip.save;
    tooltip.save = () => {
      if(tooltip.root.getAttribute('data-mode') == MODULE_ID){
        let value = tooltip.textbox.value;
        const blob = this.find(this.img);
        const index = this.quill.getIndex(blob);
        this.quill.setSelection(index, 1);
        value = this.sanitizeValue(value);
        if(!value){ return; }
        this.quill.format('width', value);
        tooltip.textbox.value = '';
        tooltip.hide();
      } else {
        originalSave.call(tooltip);
      }
    }
  }
  sanitizeValue(value: string):string|boolean{
    const pattern: RegExp = /^[\d０-９]+(px|%|PX|％|)$/giu;
    if(value.match(pattern)){
      return this.zenkaku2hankaku(value)
    }else {
      return false;
    }
  }
  zenkaku2hankaku(str: string): string {
    return str.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function(s) {
        return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });
  }
  handleClick(evt: MouseEvent): void {
    const target = evt.target as HTMLElement;
    if(!target){ return; }
    if(!target.tagName){ return; }
    if (target.tagName.toUpperCase() !== 'IMG') { return; }
    this.img = target as HTMLImageElement;
    if(!this.quill['theme']){ return; }
    if(!this.quill['theme'].tooltip){ return; }
    let width = target.getAttribute('width');
    if(!width || width === ''){ width = target.clientWidth + 'px'}
    this.quill['theme'].tooltip.edit(MODULE_ID, width)
    }
    find(node: Node){
      return this.Quill.find(node)
    }
    get Quill() {
      return window['Quill'];
    }
  }
  if (window['Quill']) {
      window['Quill'].register('modules/simpleImageResize', QuillSimpleImageResize);
  }
