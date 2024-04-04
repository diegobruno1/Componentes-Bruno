import { Component, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  childsDiv: HTMLElement[] = [];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

onclickfunction = (position:number)=>{
  const divElement: HTMLElement = this.elementRef.nativeElement.querySelector('#list-example');
    this.childsDiv = Array.from(divElement.children) as HTMLElement[];
    console.log('Array de hijos del div:', this.childsDiv);
    this.childsDiv.forEach((element , index)=>{
      if (position === index ) {
        // es igual, debe estar en activo
        this.renderer.addClass(element, 'active');
      }else{
        //  no es igual, se saca activo
        this.renderer.removeClass(element, 'active')
      }
    });

}

}
