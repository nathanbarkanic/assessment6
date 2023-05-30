const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

test("should display the div with id 'choices' when the Draw button is clicked", async () => {
  // Test code for displaying 'choices' div
});

test("should display the div with id 'player-duo' when an 'Add to Duo' button is clicked", async () => {
  // Test code for displaying 'player-duo' div
});

test("should move a bot back to 'choices' when 'Removed from Duo' is clicked", async () => {
  // Test code for moving a bot back to 'choices'
});

