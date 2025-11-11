# Swag Labs Cypress Test Automation

A comprehensive Cypress test automation project for the Swag Labs demo e-commerce application, demonstrating professional test automation practices and end-to-end testing strategies.

## 📋 Overview

This project provides a complete test automation suite for the [Swag Labs](https://www.saucedemo.com/) demo site using Cypress. It covers the entire user journey from authentication through checkout, implementing best practices for maintainable and scalable test automation.

## 🎯 Key Features

- **End-to-End Testing**: Complete coverage of critical user workflows
- **Page Object Pattern**: Maintainable test structure with reusable components
- **CI/CD Ready**: GitHub Actions workflow for automated testing
- **Comprehensive Reporting**: Detailed test execution reports
- **Best Practices**: Following industry standards for test automation

## 🗂️ Project Structure

```
Swaglabs_Cypress/
├── .github/
│   └── workflows/           # CI/CD pipeline configurations
├── cypress/
│   ├── e2e/                 # Test specifications
│   ├── fixtures/            # Test data
│   ├── support/             # Custom commands and utilities
│   └── reports/             # Generated test reports
├── .gitignore
├── cypress.config.js        # Cypress configuration
├── package.json             # Project dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/33BI/Swaglabs_Cypress.git
cd Swaglabs_Cypress
```

2. Install dependencies:
```bash
npm install
```

## 🧪 Running Tests

### Interactive Mode
Open Cypress Test Runner for interactive testing and debugging:
```bash
npm run cypress:open
```

### Headless Mode
Run all tests in headless mode (ideal for CI/CD):
```bash
npm test
```
or
```bash
npm run cypress:run
```

### Run Specific Test Suite
```bash
npx cypress run --spec "cypress/e2e/login.cy.js"
```

## 📊 Test Coverage

The test suite covers the following critical functionalities:

### 1. **Authentication**
- ✅ Valid user login
- ✅ Invalid credentials handling
- ✅ Locked user scenarios
- ✅ Session management

### 2. **Product Catalog**
- ✅ Browse products
- ✅ View product details
- ✅ Sort functionality
- ✅ Product information validation

### 3. **Shopping Cart**
- ✅ Add items to cart
- ✅ Remove items from cart
- ✅ Update quantities
- ✅ Cart badge counter
- ✅ Cart persistence

### 4. **Checkout Process**
- ✅ Enter customer information
- ✅ Review order details
- ✅ Complete purchase
- ✅ Order confirmation
- ✅ Form validation

## 🔧 Configuration

### Cypress Configuration (`cypress.config.js`)
```javascript
module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true
  }
}
```

## 🤖 CI/CD Integration

This project includes GitHub Actions workflows for automated testing:

- **Continuous Integration**: Runs on every push and pull request
- **Automated Test Execution**: Tests run in headless mode
- **Test Reports**: Artifacts stored for review
- **Multi-browser Testing**: Chrome, Firefox, and Edge support

## 📝 Writing Tests

### Example Test Structure
```javascript
describe('Product Catalog', () => {
  beforeEach(() => {
    // Login before each test
    cy.visit('/');
    cy.login('standard_user', 'secret_sauce');
  });

  it('should display all products', () => {
    cy.get('.inventory_item').should('have.length.greaterThan', 0);
  });

  it('should add product to cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_badge').should('contain', '1');
  });
});
```

## 🛠️ Custom Commands

The project includes custom Cypress commands for common operations:

```javascript
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
  cy.get('[data-test="username"]').type(username);
  cy.get('[data-test="password"]').type(password);
  cy.get('[data-test="login-button"]').click();
});
```

## 📈 Best Practices Implemented

- ✅ Page Object Model for better maintainability
- ✅ Data-driven testing with fixtures
- ✅ Custom commands for reusability
- ✅ Clear and descriptive test names
- ✅ Proper assertion strategies
- ✅ CI/CD pipeline integration
- ✅ Screenshot and video capture on failures
- ✅ Organized test structure

## 🐛 Debugging

### View Test Videos
Videos are automatically recorded during headless runs:
```bash
open cypress/videos/
```

### View Screenshots
Screenshots are captured on test failures:
```bash
open cypress/screenshots/
```

## 📦 Dependencies

Key dependencies used in this project:

- **Cypress**: End-to-end testing framework
- **Mocha**: Test framework
- **Chai**: Assertion library

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available for educational and professional use.

## 👨‍💻 Author

**33BI** - [GitHub Profile](https://github.com/33BI)

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

---

**⭐ Star this repository if you find it helpful!**

*Built with ❤️ using Cypress*