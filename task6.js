// Функция для полной очистки калькулятора
function clearCalculator() {
  currentInput = ''; // Очищаем текущее введенное число
  previousInput = ''; // Сбрасываем сохраненное ранее число
  operator = ''; // Удаляем сохраненный оператор
  display.value = ''; // Очищаем экран калькулятора
}

// Функция для обработки ввода числа
function handleNumber(number) {
  currentInput += number; // Добавляем введенную цифру к текущему числу
  display.value = currentInput; // Показываем новое значение на экране
}

// Функция для обработки выбранного оператора
function handleOperator(op) {
  if (currentInput === '') return; // Если ничего не введено, игнорируем оператор
  if (previousInput !== '') {
    calculateResult(); // Если уже есть сохраненное число, сначала вычисляем результат
  }
  operator = op; // Сохраняем выбранный оператор
  previousInput = currentInput; // Переносим текущее число в сохраненное
  currentInput = ''; // Очищаем ввод для нового числа
}

// Функция для выполнения математической операции
function calculateResult() {
  const prev = parseFloat(previousInput); // Преобразуем сохраненное число из строки в число
  const curr = parseFloat(currentInput); // Преобразуем текущее число из строки в число
  let result; // Создаем переменную для результата

  // Выполняем вычисление в зависимости от оператора
  switch (operator) {
    case '+': result = prev + curr; break; // Сложение
    case '-': result = prev - curr; break; // Вычитание
    case '*': result = prev * curr; break; // Умножение
    case '/': result = curr !== 0 ? prev / curr : 'Ошибка'; break; // Деление (проверяем деление на 0)
    default: return; // Если оператор не выбран, ничего не делаем
  }

  currentInput = result; // Сохраняем результат как текущее число
  operator = ''; // Сбрасываем оператор
  previousInput = ''; // Очищаем сохраненное число
  display.value = result; // Показываем результат на экране
}

// Главный обработчик для всех кнопок
buttons.addEventListener('click', (e) => {
  const target = e.target; // Получаем кнопку, на которую нажал пользователь

  // Проверяем, какая кнопка была нажата
  if (target.classList.contains('number')) {
    handleNumber(target.textContent); // Если это цифра, обрабатываем её
  } else if (target.classList.contains('operator')) {
    handleOperator(target.textContent); // Если это оператор, обрабатываем его
  } else if (target.id === 'equals') {
    calculateResult(); // Если это "=", выполняем вычисление
  } else if (target.id === 'clear') {
    clearCalculator(); // Если это "C", очищаем калькулятор
  }
});
