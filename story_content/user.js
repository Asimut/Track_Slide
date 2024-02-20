function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6B9wLsPOPWZ":
        Script1();
        break;
      case "6Vn5DkMFiMn":
        Script2();
        break;
      case "6oqIYhGN3Xp":
        Script3();
        break;
      case "5uAARmyBXK9":
        Script4();
        break;
      case "5jakNCcpvoD":
        Script5();
        break;
      case "5jAJDUO0f7f":
        Script6();
        break;
      case "6cCFNIgwOKF":
        Script7();
        break;
      case "6LnOha3Zltp":
        Script8();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script2 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script3 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script4 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script5 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script6 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script7 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

window.Script8 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Записываем номер слайда в localStorage с ключом 'currentSlide'
    localStorage.setItem('currentSlide', slideNumber);
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Функция для загрузки курса с последнего посещенного слайда
function loadLastVisitedSlide() {
  // Проверяем, доступно ли локальное хранилище
  if (typeof(Storage) !== "undefined") {
    // Получаем номер слайда из localStorage
    var lastVisitedSlide = localStorage.getItem('currentSlide');
    if (lastVisitedSlide !== null) {
      // Если номер слайда найден, переходим на этот слайд
      // Здесь должен быть ваш код для перехода на слайд
      goToSlide(lastVisitedSlide); // Предполагаемая функция перехода на слайд
    }
  } else {
    // Если локальное хранилище не доступно, выводим сообщение об ошибке
    console.log('Local Storage is not supported by this browser.');
  }
}

// Вы должны вызвать эту функцию при инициализации курса
loadLastVisitedSlide();

}

};
