import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  fields: any = {};

  expressions: RegularExpressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    lastname: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
  }

  validateField(expresion: RegExp, input: any, field: string) {
    
    let formGroup = document.getElementById(`group__${field}`);
    let formIcon = document.querySelector(`#group__${field} i`);
    let formMessage = document.querySelector(`#form__error-${field} p`);
    let errorMessage = document.getElementById('form__message');

    if ((formGroup !== null) && (formIcon !== null) && (formMessage !== null) && (errorMessage !== null)) {
      
      if (expresion.test(input.value)) {

        formGroup.classList.remove('form__group-incorrect');
        formGroup.classList.add('form__group-correct');
        formIcon.classList.remove('fa-times-circle');
        formIcon.classList.add('fa-check-circle');
        formMessage.classList.remove('form__input-error-active');

        this.fields[field] = true;

        if (Object.values(this.fields).includes(false)) {
          errorMessage.style.display = 'block';
        } else {
          errorMessage.style.display = 'none';
        }
      } else {
        formGroup.classList.add('form__group-incorrect');
        formGroup.classList.remove('form__group-correct');
        formIcon.classList.add('fa-times-circle');
        formIcon.classList.remove('fa-check-circle');
        formMessage.classList.add('form__input-error-active');
        errorMessage.style.display = 'block';
        this.fields[field] = false;
      }
    }
  }

  validateFields = (e: any)=> {
    switch (e.target.id) {
      case 'name':
        this.validateField(this.expressions.name, e.target, 'name');
        break;
      case 'lastname':
        this.validateField(this.expressions.lastname, e.target, 'lastname');
        break;
      case 'email':
        this.validateField(this.expressions.email, e.target, 'email');
        break;
    }
  }

  validateForm(){
  
    var modalValidate = document.getElementById('modal-validate');

    if (Object.keys(this.fields).length == 3) {
      if(modalValidate !== null){
        if ((this.fields.name && this.fields.lastname) && this.fields.email) {
          modalValidate.style.display = 'block';
          setTimeout(()=>{window.location.reload();},1000)
          window.scrollTo(0, 0);
          return true;
        } else {
          alert("El mensaje no pudo ser enviado");
          return false;
        }
      }
    } else {
      alert("El mensaje no pudo ser enviado");
      return false;
    }
  }

  constructor() {}

  ngOnInit(): void {
    
    var inputs = document.querySelectorAll('.form__input');
    var modalValidate = document.getElementById('modal-validate');

    inputs.forEach(input => {
      input.addEventListener('keyup', this.validateFields);
      input.addEventListener('blur', this.validateFields);
    });
  }
}

interface RegularExpressions {
  name: RegExp,
  lastname: RegExp,
  email: RegExp
}
