import { afterNextRender, Directive, ElementRef, inject } from "@angular/core";
import hljs from "highlight.js";

@Directive({
  selector: "code[ngxMatHighlight]",
})
export class NgxMatHighlightDirective {
  private readonly eltRef = inject(ElementRef)

  constructor() {
    afterNextRender(() => hljs.highlightElement(this.eltRef.nativeElement));
  }
}
