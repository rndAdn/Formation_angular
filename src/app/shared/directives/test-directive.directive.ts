import {Directive, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: 'button[appTestDirective]'
})
export class TestDirectiveDirective implements OnInit{

  constructor() { }

  @HostListener('click',  ['$event.target']) onclick(btn){
    console.log("click");
  }

  ngOnInit(){
    console.log("onINIt");
  }

}
