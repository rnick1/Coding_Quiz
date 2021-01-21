# Coding_Quiz

# This repository is for my fourth homework assignment for the University of Washington Full-Stack Coding Bootcamp!

### The goal of this assignment is to utilize skills developed so far to create a coding quiz.

## The Assignment:

GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score

## What was done:

-The HTML layout and CSS style is based on a similar style I used in the second homework assignment.

-In the design phase I divided the quiz into four parts: Intro, quiz questions, conclusion, and score board. Each part is represented by a bootstrap card in my HTML. The quiz question card remains in place and it's content is changed based on which question the user is on. 

-It is a timed exam, so as the user progresses through the quiz the timer runs down from 75 seconds. Incorrect answers reduce time left by 10 seconds.

-The user's score is tracked at the top of the page. When the user comes to the end of the quiz he can initialize his score and on the next page they are displayed on a scoreboard.

-Some of the Web API features included are add and remove EventListeners, setItem and getItem, etc.

## Possible improvements:

NOTE: I had two false starts for this project which ate up a lot of the time that I usually use to refine the final product. There is a lot I would do differently if I had more time (especially since I learned jQuery halfway through the project). The major changes would be:

-Take steps to scale down the use of HTML.

-Reduce the number of EventListeners.

## Here is the Intro page:

![image](https://github.com/rnick1/Responsive_Portfolio/blob/main/Assets/Images/About-Home.png)

## Here is a Question page:

![image](https://github.com/rnick1/Responsive_Portfolio/blob/main/Assets/Images/Portfolio.png)

## Here is the Conclusion page:

![image](https://github.com/rnick1/Responsive_Portfolio/blob/main/Assets/Images/Contact.png)

## Here is the Score page:


## Overall, this was a very challenging assignment. In addition to learning to use Web API's, I learned through experience: 1. That there are multiple ways to get an app functioning as desired. 2. Thorough conceptualization and planning is essential before diving into code. 3. After conceptualizing the big picture, it is important to break the project into small, manageable, steps to avoid getting overwhelmed. 

### Note: This application is live! The URL is: 