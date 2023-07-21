import { Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.css'],
  encapsulation: ViewEncapsulation.None // Permite o estilo global para os blocos de tarefas
})
export class TodoBlockComponent {
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  criarNovaTarefa() {
    // Obtenha o elemento pai do componente atual usando ElementRef
    const container = this.elementRef.nativeElement.querySelector('.block__container');

    // Verifique se o elemento existe antes de prosseguir
    if (!container) {
      console.error("Elemento '.block__container' não encontrado.");
      return;
    }

    // Clone o elemento do componente atual
    const clone = container.cloneNode(true);

    // Limpe os campos de entrada (opcional)
    const inputs = clone.querySelectorAll('input');
    const textarea = clone.querySelector('textarea');
    inputs.forEach((input: HTMLInputElement) => input.value = '');
    textarea.value = '';

    // Crie um novo elemento para conter os blocos de tarefas clonados
    const blocksContainer = this.renderer.createElement('div');
    this.renderer.addClass(blocksContainer, 'blocks__container');

    // Insira o clone dentro do novo elemento
    this.renderer.appendChild(blocksContainer, clone);

    // Obtenha o elemento pai do componente atual
    const currentContainer = this.elementRef.nativeElement;

    // Insira o novo elemento após o elemento atual
    this.renderer.appendChild(currentContainer.parentNode, blocksContainer);
  }


}
