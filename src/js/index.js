// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const RangeElement = document.getElementById('range');
const NumberElement = document.getElementById('password');
const LengthElement = document.getElementById('length_text');
const ButtonElement = document.getElementById('button_password');
const PasswordTypeElement = document.getElementById(`password_type`);

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

const GetValue = event => {
  let lengthPassword = event.target.value;
  let password = '';
  let randomNumber = '';

  const OnClick = () => {
    if (lengthPassword < 5) {
      //console.log('Ha entrado menor 4 ..' + lengthPassword);
    } else {
      //Recorrer bucle para ir obteniendo un acracter aleatorio y formar la contraseña
      for (let i = 0; i < lengthPassword; i++) {
        // Obtener número aleatorio
        randomNumber = Math.floor(Math.random() * letters.length);
        //console.log(randomNumber);

        //Obtener caracter de la posición del random aleatorio
        let character = letters.substring(randomNumber, randomNumber + 1);
        //console.log(character);

        password = password + character;
      }

      NumberElement.textContent = password;
      password = '';
    }

    if (lengthPassword <= 5) {
      PasswordTypeElement.textContent = 'TOO SHORT';
    }
    if (lengthPassword > 5 && lengthPassword < 10) {
      PasswordTypeElement.textContent = 'WEAK';
    }
    if (lengthPassword > 10 && lengthPassword < 15) {
      PasswordTypeElement.textContent = 'MEDIUM';
    }
    if (lengthPassword > 15) {
      PasswordTypeElement.textContent = 'STRENGTH';
    }

    lengthPassword = ''; // Resetear la variable longitud password
  };

  //Número de longuitud de la contraseña
  LengthElement.textContent = lengthPassword;

  ButtonElement.addEventListener('click', OnClick);
};

RangeElement.addEventListener(`change`, GetValue);
