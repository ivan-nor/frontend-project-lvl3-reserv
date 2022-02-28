// import { watch } from 'melanke-watchjs';

// const validation = () => {};

// export default () => {
// const state = {
//   inputValue: null,
//   isValid: {
//     input: true,
//     sumbit: false,
//   },
// };


// watch(state, 'inputValue', () => {
//   console.log('change form value');
// });

// watch(state.isValid, () => {
//   console.log('isValid changed');
// });

// const form = document.querySelector('[data-form="rss"]');
// console.log(form.elements);

// [...form.elements].forEach((element) => {
//   element.addEventListener('input', (event) => {
//     event.preventDefault();
//     state.inputValue = event.target.value;
//     state.isValid.input = validation(state.inputValue);
//     console.log('input');
//   });
// });

// };
export default () => {
  console.log('app/application.js is runned');

  
};
