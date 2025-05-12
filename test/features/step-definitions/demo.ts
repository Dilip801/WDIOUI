import { Given, When, Then } from "@cucumber/cucumber";
//import chai from "chai";
import { expect } from "chai";

Given(/^Open Google page$/, async function () {
  console.log("Before Opening browser...");
  await browser.url("https://www.google.com");
  //await browser.pause(20000);
  console.log("After Opening browser");
});

When(/^Search with (.*)$/, async function (searchItem) {
  console.log(">> searchItem: ${searchItem}");
  let ele = await $("[name=q]");
  await ele.setValue(searchItem);
  await browser.keys("Enter");
  await browser.pause(10000);
});

// await browser.execute(async (recaptchaCheckboxSelector) => {
    //let ele1 = await $("[id=recaptcha-anchor]")
   // await browser.keys("Click");
//    const recaptchaCheckbox = document.querySelector(recaptchaCheckboxSelector);
 //   if (recaptchaCheckbox) {
 //       recaptchaCheckbox.click();
 //   }
// }, '#recaptcha-anchor');  // Replace '#recaptcha-checkbox' with the actual selector


Then(/^Click on first search result$/, async function () {
  let ele = await $("<h3>");
  ele.click();
});

Then(/^URL should match (.*)$/, async function (expectedURL) {
  console.log(">> expectedURL: ${expectedURL}");
  let url = await browser.getUrl();
  //  chai.expect(url).to.equal(expectedURL)
  expect(url).to.equal(expectedURL);
});

// <span class="recaptcha-checkbox goog-inline-block recaptcha-checkbox-unchecked rc-anchor-checkbox" role="checkbox" aria-checked="false" id="recaptcha-anchor" tabindex="0" dir="ltr" aria-labelledby="recaptcha-anchor-label"><div class="recaptcha-checkbox-border" role="presentation"></div><div class="recaptcha-checkbox-borderAnimation" role="presentation"></div><div class="recaptcha-checkbox-spinner" role="presentation"><div class="recaptcha-checkbox-spinner-overlay"></div></div><div class="recaptcha-checkbox-checkmark" role="presentation"></div></span>
