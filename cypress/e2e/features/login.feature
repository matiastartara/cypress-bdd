Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the saucelabs login page
    Scenario: Success Login
        When A user enters the username from env "USER_NAME", the password from env "USER_PASSWORD", and clicks on the login button
        Then the url will contains the inventory subdirectory
   