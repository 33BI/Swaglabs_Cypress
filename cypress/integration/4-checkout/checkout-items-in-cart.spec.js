/// <reference types="cypress" />

import { LoginAction } from "../../actions/login-action";
import { CheckoutConfirmation } from "../../page-objects/checkout-confirmation";
import { CheckoutInformation } from "../../page-objects/checkout-information";
import { CheckoutOverview } from "../../page-objects/checkout-overview";
import { ProductCatalog } from "../../page-objects/product-catalog";
import { ShoppingCart } from "../../page-objects/shopping-cart";

describe("When placing items in the cart", () => {
  const login = new LoginAction();
  const productCatalog = new ProductCatalog();
  const shoppingCart = new ShoppingCart();
  const checkoutInformation = new CheckoutInformation();
  const checkoutOverview = new CheckoutOverview();
  const checkoutConfirmation = new CheckoutConfirmation();

  beforeEach(() => {
    // Log in before each test
    login.withCredentials("standard_user", "secret_sauce");

    // Add two products to cart
    productCatalog.addItemToCartCalled("Sauce Labs Backpack");
    productCatalog.addItemToCartCalled("Sauce Labs Bolt T-Shirt");

    // Open cart to verify items
    shoppingCart.open();
  });

  describe("When checking out items in the cart", () => {
    beforeEach(() => {
      // Start checkout process
      shoppingCart.initiateCheckout();
    });

    it("should require all customer information", () => {
      checkoutInformation.withPersonalDetails("", "", "");
      checkoutInformation.error().should("be.visible");
    });

    it("should show all items in the overview", () => {
      checkoutInformation.withPersonalDetails("Sally", "Shopper", "ABC123");
      checkoutOverview.items().should("have.length", 2);
    });

    it("should show the Thank You message after completing checkout", () => {
      checkoutInformation.withPersonalDetails("Sally", "Shopper", "ABC123");
      checkoutOverview.finishCheckout();

      // ✅ Updated assertion for correct text and better reliability
      checkoutConfirmation
        .message({ timeout: 10000 })
        .should("contain.text", "Thank you for your order!");
    });
  });
});
