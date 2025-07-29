# Automated-UI-API-Testing-for-simple-react-full-stack

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <https://github.com/Mouaz-ALsharaa/Automated-UI-API-Testing-for-simple-react-full-stack.git>
   cd Automated-UI-API-Testing-for-simple-react-full-stack
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Start the application:**
   ```
   npm run dev
   ```
   > This will start both the backend and frontend locally.

4. **Run UI tests:**
   ```
   npm run login
   npm run dashboard
   ```

5. **Run API tests:**
   ```
   npm run test:api
   ```
 6. **Run coverage reporting:**
   ```
   npm run test:coverage 
   ```
## API Test Results

All API endpoint tests passed successfully.

| File      | % Statements | % Branches | % Functions | % Lines |
|-----------|-------------|------------|-------------|---------|
| index.js  |    93.02%   |   68.75%   |    80%      | 97.14%  |

- **Test Suites:** 1 passed, 1 total
- **Tests:** 9 passed, 9 total

> Code coverage was measured using Jest.
> All endpoints (login, items CRUD) are covered with positive and negative cases.

---

**Default credentials:**  
- Username: `admin`  
- Password: `admin1235`

**Notes:**  
- Chrome browser is required for UI tests.
- All tests and code are self-contained; no database setup needed.

---
## Test Plan

For details about the test strategy, coverage, tools, and instructions, please refer to the file [`TEST_PLAN.md`](./TEST_PLAN.md) included in the project.
