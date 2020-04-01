// import _ from 'lodash';

const jumbotronContentHTML = `
<h1 class="display-4">Привет, мир!</h1>
<p class="lead">Это простой пример блока с компонентом в стиле jumbotron для привлечения дополнительного внимания к содержанию или информации.</p>
<hr class="my-4">
<p>Использются служебные классы для типографики и расстояния содержимого в контейнере большего размера.</p>
<p class="lead">
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</p>`;

export default () => {
  const jumbotron = document.createElement('div');
  jumbotron.classList.add('jumbotron');
  jumbotron.innerHTML = jumbotronContentHTML;
  const point = document.getElementById('point');
  point.append(jumbotron);
  return jumbotronContentHTML;
};
