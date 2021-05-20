import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  /* Formulario para inciar sesion */
  public formLogin: FormGroup;
  public username!: FormControl;
  public password!: FormControl;

  /* Formulario para crear cuenta */
  public formRegistro: FormGroup;
  public nameR!: FormControl;
  public lastName!: FormControl;
  public fechaNacimiento!: FormControl;
  public genero!: FormControl;
  public emailR!: FormControl;
  public mobile!: FormControl;
  public ciudad!: FormControl;
  public departamento!: FormControl;
  public direccion!: FormControl;
  public passwordR!: FormControl;
  public ConfirconfirmarPasswordRmarpasswordR!: FormControl;

  generos = [
    {value: 'M', viewValue: 'Masculino'},
    {value: 'F', viewValue: 'Femenino'},
    {value: 'O', viewValue: 'Otro'}
  ];

  ciudades = [
    {value: '1', viewValue: 'Armenia'},
    {value: '2', viewValue: 'Circasia'},
    {value: '3', viewValue: 'Calarca'}
  ];

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.formLogin = this.formBuilder.group({
      username: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      password: [{ value: '', disabled: false },
      Validators.compose([Validators.required])
      ]
    });

    this.formRegistro = this.formBuilder.group({
      nameR: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      lastName: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      fechaNacimiento: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      genero: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      emailR: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      mobile: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      ciudad: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      departamento: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      direccion: [
        { value: '', disabled: false },
        Validators.compose([Validators.required])
      ],
      passwordR: [{ value: '', disabled: false },
      Validators.compose([Validators.required])
      ],
      confirmarPasswordR: [{ value: '', disabled: false },
      Validators.compose([Validators.required])
      ]
    });
  }

  ngOnInit(): void {


  }

  /**
   * funcion para obtener el control de cada uno de los campos del formulario
   */
  get control() {
    return this.formLogin.controls;
  }

  /**
   * funcion para obtener el control de cada uno de los campos del formulario
   */
   get controlRegistro() {
    return this.formRegistro.controls;
  }

}
