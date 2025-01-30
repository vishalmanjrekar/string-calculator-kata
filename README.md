# String Calculator - TDD Kata

This project is a **String Calculator** implemented using **Test-Driven Development (TDD)** in JavaScript.  
It follows the **Three Laws of TDD** and consists of incremental commits to demonstrate the TDD workflow.

## Features Implemented

- [x] **Returns 0 for an empty string** → `add("")` → `0`
- [x] **Returns the number itself for a single number** → `add("1")` → `1`
- [x] **Handles two comma-separated numbers** → `add("1,2")` → `3`
- [x] **Handles multiple numbers** → `add("1,2,3")` → `6`
- [x] **Supports new lines (`\n`) as delimiters** → `add("1\n2,3")` → `6`
- [x] **Supports custom delimiters (`//[delimiter]\n[numbers]`)** → `add("//;\n1;2")` → `3`
- [x] **Throws an error when negative numbers are provided**
  - Example: `add("1,-2,3,-4")` → x _Negative numbers not allowed: -2, -4_
- [x] **Ignores numbers greater than 1000** → `add("2,1001")` → `2`
- [x] **Supports multi-character custom delimiters** → `add("//[***]\n1***2***3")` → `6`
- [x] **Supports multiple custom delimiters**
  - Example: `add("//[*][%]\n1*2%3")` → `6`
  - Example: `add("//[***][%%]\n4***5%%6")` → `15`

## Setup, Installation & Running Tests

**1. Clone the Repository**

```sh
git clone https://github.com/vishalmanjrekar/string-calculator-kata
cd string-calculator-tdd
```

**2. Install Dependencies**

```sh
npm install
```

**3. Run Tests**

```sh
npm test
```

## TDD Workflow (Commit History)

This project follows the **Red-Green-Refactor** cycle of TDD:

1. **Write a failing test (Red)**
2. **Implement just enough code to pass the test (Green)**
3. **Refactor the code while keeping all tests green**

## Contribution

Want to improve this kata or add more test cases?
Feel free to **fork** the repo and submit a **pull request**! 🚀

---

### **Author**

_Vishal Manjrekar_

> [GitHub Profile](https://github.com/vishalmanjrekar)
