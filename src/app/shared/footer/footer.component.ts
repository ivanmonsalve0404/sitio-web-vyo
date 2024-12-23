import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(private toastr: ToastrService) {}

  copyEmail(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement;
    const email = button.textContent?.trim();

    if (email) {
      this.copyToClipboard(email);
      this.toastr.success('¡Correo copiado al portapapeles!', 'Éxito');
    } else {
      this.toastr.error('No se pudo copiar el correo.', 'Error');
    }
  }

  private copyToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  }
}
