// contact-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  loading = false;
  submitted = false;

  pqrsOptions = [
    { value: 'peticion', label: 'Petición' },
    { value: 'queja', label: 'Queja' },
    { value: 'reclamo', label: 'Reclamo' },
    { value: 'sugerencia', label: 'Sugerencia' }
  ];

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.contactForm = this.fb.group({
      pqrsType: ['', Validators.required],
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
    emailjs.init("1UjUWRqdtFelpZmgy");
  }

  async onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      try {
        this.loading = true;
        
        const templateParams = {
          from_name: this.contactForm.get('fullName')?.value,
          from_email: this.contactForm.get('email')?.value,
          phone: this.contactForm.get('phone')?.value,
          pqrs_type: this.contactForm.get('pqrsType')?.value,
          subject: this.contactForm.get('subject')?.value,
          message: this.contactForm.get('message')?.value
        };

        await emailjs.send(
          'service_2gv0bug',
          'template_xxt4wcf',
          templateParams
        );

        this.toastr.success(
          'Nos pondremos en contacto pronto',
          '¡Mensaje enviado correctamente!',
          {
            timeOut: 3000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-top-right'
          }
        );

        this.contactForm.reset();
        this.submitted = false;
      } catch (error) {
        this.toastr.error(
          'Por favor, inténtelo de nuevo más tarde',
          'Error al enviar el mensaje',
          {
            timeOut: 4000,
            progressBar: true,
            closeButton: true,
            positionClass: 'toast-top-right'
          }
        );
      } finally {
        this.loading = false;
      }
    } else {
      this.toastr.warning(
        'Por favor, complete todos los campos requeridos correctamente',
        'Formulario incompleto',
        {
          timeOut: 4000,
          progressBar: true,
          closeButton: true,
          positionClass: 'toast-top-right'
        }
      );
    }
  }

  get f() { 
    return this.contactForm.controls; 
  }
}