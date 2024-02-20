function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AElGsLxcOH":
        Script1();
        break;
      case "6N8anmifqHw":
        Script2();
        break;
      case "6O1qSvm1aiA":
        Script3();
        break;
      case "61GvW3i5ySM":
        Script4();
        break;
      case "6gDxB9wt3MR":
        Script5();
        break;
      case "6iJUxi60k3f":
        Script6();
        break;
      case "6BRAvIwQPu1":
        Script7();
        break;
      case "5W5EzzHgn9o":
        Script8();
        break;
      case "5oln9WSqdNM":
        Script9();
        break;
      case "678TmSRdk6t":
        Script10();
        break;
      case "6Rc5ZCPM8Uu":
        Script11();
        break;
      case "5wLvsn8ieao":
        Script12();
        break;
      case "6Zmz75YtjfB":
        Script13();
        break;
      case "6Oh8JlZ7jfK":
        Script14();
        break;
      case "69mcNlOB24d":
        Script15();
        break;
      case "67RjztF1gLR":
        Script16();
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
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script2 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script3 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script4 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script5 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script6 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script7 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script8 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script9 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script10 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script11 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script12 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script13 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script14 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

window.Script15 = function()
{
  // Функция для записи номера текущего слайда в localStorage
function saveCurrentSlide(slideNumber) {
  // Проверяем, доступно ли localStorage
  if (typeof(Storage) !== "undefined") {
    // Сохраняем номер слайда
    localStorage.setItem("currentSlide", slideNumber);
  } else {
    // Если localStorage недоступен, выводим ошибку
    console.error("Sorry, your browser does not support Web Storage...");
  }
}

// Подписываемся на событие xAPI, чтобы вызывать saveCurrentSlide при переходе на новый слайд
// Здесь нужно использовать функционал xAPI для отслеживания переходов по слайдам
// Это будет зависеть от вашей конкретной реализации xAPI

}

window.Script16 = function()
{
  // Функция для загрузки курса с последнего просмотренного слайда
function loadLastViewedSlide() {
  // Проверяем, есть ли сохраненный номер слайда в localStorage
  if (localStorage.getItem("currentSlide")) {
    // Получаем номер слайда
    var lastViewedSlide = localStorage.getItem("currentSlide");
    
    // Используем этот номер для перехода к нужному слайду
    // Здесь должна быть логика для перехода к слайду в Articulate
    // Это может быть вызов API Articulate или другой метод, который позволяет установить текущий слайд
  }
}

// Вызываем функцию при инициализации курса
loadLastViewedSlide();

}

};
