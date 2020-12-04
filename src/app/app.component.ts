import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zazzy';
  values = '';
  colorValue

  onInput(event: any) {
    this.values = event.target.value;
  }

  onColorInput(event: any) {
    var targets = ['a', 'an', 'the', 'he', 'she', 'they'];
    var input = event.target.value;
    var words = input.split(" ");
    var box = document.getElementById('colorText')
    box.innerHTML = "";
    for (var word of words) {
      if (word === 'the' || word === 'an' || word === 'a' || word === 'he' || word === 'she' || word === 'they') {
        var boldText = document.createElement('strong');
        boldText.innerHTML = word;
        box.appendChild(boldText);
      } else {
        box.appendChild(document.createTextNode(word + ' '));
      }
    }

  }
}
