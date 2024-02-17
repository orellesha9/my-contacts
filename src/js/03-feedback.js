import throttle from 'lodash.throttle';

const refs = {
  formElement: document.querySelector('.feedback-form'),
};

const throttledOnFormInput = throttle(function (e) {
  const key = e.target.name;
  const value = e.target.value;
  formState[key] = value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}, 300); 


refs.formElement.addEventListener(`input`, throttledOnFormInput);


let formState;
try {
  formState = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
} catch (error) {
  formState = {};
}



// Додаємо обробку на кнопку
refs.formElement.addEventListener(`submit`, onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(formState);
  localStorage.clear();
}
// !!!  Функція при завантаженні сторінки
function onLoad() {
  const message = formState.message;
  const email = formState.email;
  //! Обробляємо значення undefined
  if (message !== undefined && message !== null) {
    refs.formElement.elements.message.value = message;
  } else {
    refs.formElement.elements.message.value = ''; 
  }

  if (email !== undefined) {
    refs.formElement.elements.email.value = email;
  } else {
    refs.formElement.elements.email.value = '';
  }
}

onLoad();