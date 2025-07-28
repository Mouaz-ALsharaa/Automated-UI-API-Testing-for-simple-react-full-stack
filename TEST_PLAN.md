# Test Plan / Test Strategy for Automated UI & API Testing


## 1. What is being tested

- **Frontend (React App):**
  - Login functionality (valid/invalid credentials)
  - Adding a new item
  - Editing an existing item
  - Deleting an item
  - Asserting data and UI feedback after actions

- **Backend (Node.js API):**
  - Authentication endpoint (`POST /api/login`)
  - CRUD operations for items (`GET/POST/PUT/DELETE /api/items`)
  - Handling valid and invalid requests

---

## 2. Test Coverage Areas

- **UI Automation:**
  - Positive and negative login scenarios
  - Item creation, editing, and deletion
  - Data validation and UI feedback

- **API Automation:**
  - All main endpoints tested for both success and failure cases
  - Data validation, error handling, and response structure

---

## 3. Tools Used and Why

- **WebdriverIO:**  
  Used for UI automation because it supports modern web apps, integrates easily with React, and provides robust selectors and assertions.

- **Supertest + Jest:**  
  Used for API testing due to their simplicity, speed, and seamless integration with Node.js/Express.

---

## 4. How to Run the Tests

- **Start the application:**
  ```
  npm run dev
  ```
- **Run UI tests:**
  ```
  npm run login
  npm run dashboard
  ```
- **Run API tests:**
  ```
  npm run test:api
  ```
- **Run coverage reporting:**
  ```
  npm run test:coverage     
  ```
---

## 5. Assumptions or Limitations

- The backend uses in-memory storage for items; data will reset on server restart.
- Authentication is hardcoded for demo purposes (`admin/admin1235`).
- No advanced validation or security implemented (for simplicity).
- Tests assume the app runs locally on default ports.
- UI tests require
- Screenshots have been added in ./screenshots/
