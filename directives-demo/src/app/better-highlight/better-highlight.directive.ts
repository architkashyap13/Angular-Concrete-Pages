import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  //Custom Structural Directive
  
  @Input() defaultColor: string;
  @Input() highlightColor: string;
  
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'Green');
    this.backgroundColor = this.defaultColor
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'Green');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'Transparent');
    this.backgroundColor = this.defaultColor;
  }

}
