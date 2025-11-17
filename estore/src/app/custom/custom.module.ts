import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IfDirective } from './customdirectiveif';
import { HiddenDirective } from './customdirectivehidden';
import { UnderlineDirective } from './customdirectiveunderline';
import { AppProductHighlightDirective } from './app-product-highlight.directive';

@NgModule({
  declarations: [
    IfDirective,
    HiddenDirective,
    UnderlineDirective,
    AppProductHighlightDirective,
  ],
  imports: [CommonModule],
  exports: [
    IfDirective,
    HiddenDirective,
    UnderlineDirective,
    AppProductHighlightDirective,
  ],
})
export class CustomModule {}
