//=== State ===

/** user input a number into a number bank. */
let numberBank = [];

/** numbers sorted into odd category */
let oddCategory = [];

/** numbers sorted into even category */
let evenCategory = [];

/**
 * Adds a number to the number bank
 * @param {number} n - the number to add
 */
function addNumber(n) {
  numberBank.push(n);
  render();
}
// Sorts the first number in the number bank into odd or even category */
function sortOne() {
  if (numberBank.length === 0) return;

  const n = numberBank.shift();
  if (n % 2 === 0) {
    evenCategory.push(n);
  } else {
    oddCategory.push(n);
  }
  render();
}
/**
 * Sorts all numbers in the number bank into odd or even category
 */
function sortAll() {
  while (numberBank.length > 0) {
    const n = numberBank.shift();
    if (n % 2 === 0) {
      evenCategory.push(n);
    } else {
      oddCategory.push(n);
    }
  }
  render();
}

//=== Components ===

/** Form that allows user to add more numbers to the number bank */
function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
    <label>
      Add number to bank
      <input name="number" type="number" required />
    </label>
    <button>Add number</button>
  `;
  $form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData($form);
    const number = data.get("number");
    addNumber(Number(number));
    $form.reset();
  });
  return $form;
}

/** Button that sorts one number from the bank into odd or even category */
function SortOneButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort 1";
  $button.addEventListener("click", () => {
    sortOne();
  });
  return $button;
}

/** Button that sorts all numbers from the bank into odd or even category */
function SortAllButton() {
  const $button = document.createElement("button");
  $button.textContent = "Sort All";
  $button.addEventListener("click", () => {
    sortAll();
  });
  return $button;
}

/** Displays the current state of the number bank and categories */
function Display() {
  const $display = document.createElement("div");
  $display.innerHTML = `
    <h2>Number Bank</h2>
    <p>${numberBank.join(", ") || "Empty"}</p>
    <h2>Odd Category</h2>
    <p>${oddCategory.join(", ") || "Empty"}</p>
    <h2>Even Category</h2>
    <p>${evenCategory.join(", ") || "Empty"}</p>
  `;
  return $display;
}

/** Renders the entire application */
function render() {
  const $app = document.getElementById("app");
  $app.innerHTML = "";
  $app.appendChild(NumberForm());
  $app.appendChild(SortOneButton());
  $app.appendChild(SortAllButton());
  $app.appendChild(Display());
}

// Initial render
render();

//=== Application Requirements ===

//Create a form that allows users to input a number.

//When the user clicks the "Add number" button, the number they entered into the input field should be added to the number bank.

//Display all of the numbers that the user has entered in number bank.

//The first number in the number bank is removed and placed into either the odd or even category when the "Sort 1" button is clicked.

//All numbers in the number bank are moved into either the odd or even category when the "Sort All" button is clicked.

//Numbers are moved into the correct category based on whether they are odd or even.

//The numbers in the bank, odd category, and even category are stored as state variables.

//Functions are used to organize logic involving state changes.

//Render the application whenever state changes.

//Organize UI elements into component functions.

//Event listeners modify state, but they do not directly modify the document.
