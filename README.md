# WalletWatch

**WalletWatch** is a simple personal expense tracker app built with React. It allows users to track their expenses, categorize them, and view the total spending. Users can filter their expenses by category, delete items, and have their data persist using local storage.

## Features

- **Add Expenses**: Add expenses with a name, amount, and category.
- **Delete Expenses**: Easily remove unwanted expenses from the list.
- **Filter by Category**: Filter your expenses by category to see where your money is going.
- **Total Expenses**: View the total amount spent.
- **Persistence**: Expenses are saved in local storage, so your data is retained across sessions.

## Project Structure

```bash
├── public/           # Static assets (e.g., index.html, favicon)
├── src/              # React components
│   ├── App.js        # Main application logic
│   ├── ExpenseList.js# Renders the list of expenses
│   ├── ExpenseForm.js# Form to add new expenses
│   ├── CategoryFilter.js # Dropdown for filtering expenses
│   ├── TotalExpenses.js  # Displays total of all expenses
│   └── index.js      # React entry point
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation (this file)

## 

Installation and Setup
    git clone git@github.com:ronniearistil/WalletWatch.git

Navigate to the project directory:
    cd WalletWatch

Install dependencies:
    npm install

Start the development server:
    npm start

How to Use:

Add an Expense: Enter a name, amount, and category in the form and click "Add Expense".
Delete an Expense: To remove an expense, click the "Delete" button next to it.
Filter by Category: Use the dropdown filter to view expenses by category.
View Total Expenses: The total amount spent will be displayed at the top of the page.
Persistent Data: Your expenses will be saved and reloaded even after you close the app (using local storage).
Future Features
Edit Expenses: Ability to modify existing expenses.
Sorting: Sort expenses by amount, date, etc.
User Accounts: User authentication to store data in the cloud.
Responsive Design: Mobile-friendly layout.
Technologies Used
React: Frontend framework.
CSS: Styling for the components.
Local Storage: Persistent data storage on the client side.
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you would like to improve the app.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

### Steps to add the `README.md` file:

1. Create a `README.md` file in the root directory of your project.
   
   ```bash
   touch README.md

   Open the file in your text editor and paste the content from the template above.

Save the file.

Add the file to your Git repository and push it to GitHub:
    git add README.md
    git commit -m "Added README file"
    git push origin main
