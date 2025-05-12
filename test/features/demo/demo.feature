
Feature: Demo Feature

    @demo

    Scenario Outline: Run first demo feature
    Given Open Google page
    When Search with <SearchItem>
    Then Click on first search result
    Then URL should match <ExpectedURL>

    Examples:
        | TestID | SearchItem | ExpectedURL |
        | Demo_TC001 | WDIO | https://webdriver.io/ |
        
        