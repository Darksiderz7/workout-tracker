# Reflection: Workout Tracker

## 1. What did I ask Copilot to help me build, and how did I break down the problem?

I asked GitHub Copilot to help me build a beginner-friendly Workout Tracker. I wanted users to enter an exercise name, workout type, duration, and date, then see their workouts in a list. I also wanted users to mark workouts as completed, delete them, view simple statistics, and keep their data saved with `localStorage`.

I broke the project into four steps so it would be easier to understand. First, I requested the HTML structure. Then I asked for the CSS design, followed by the JavaScript functionality. Finally, I requested the README documentation. This order made sense because the HTML created the page structure, the CSS made it look better, the JavaScript made it interactive, and the README explained how to use the project.

## 2. How did my approach to asking questions change as I worked?

At the beginning, my request was fairly general. I asked Copilot to create the complete HTML for a workout tracker and described the main form fields I needed. As I continued, I became more specific about what I wanted. For the CSS, I mentioned that I wanted a modern, responsive design with a blue-and-green fitness theme.

My JavaScript request was even more detailed because I had a clearer idea of how the app should work. I listed the actions users needed, including adding, completing, deleting, and saving workouts. I learned that giving Copilot a clear list of requirements made it easier to get code that matched my project instead of having to describe everything again later.

## 3. What parts of developing with GitHub Copilot surprised me?

I was surprised by how quickly Copilot could create a complete starting point for each part of the project. Instead of writing every line from scratch, I could explain the result I wanted and receive code that was organized into sections. This helped me focus more on understanding the project and less on remembering every piece of syntax.

I was also surprised that Copilot added details such as messages after actions, a default date, responsive layouts, and confirmation before deleting a workout. Some of these details were not the main focus of my requests, but they made the application feel more complete. At the same time, I learned that I still need to read the generated code and make sure it matches what I actually want. Copilot can help create code, but I am still responsible for checking and testing it.

## 4. What did I learn about HTML, CSS, JavaScript, DOM manipulation, and localStorage?

From the HTML, I learned how important the basic page structure is. Labels, inputs, a select menu, and a submit button make the form easier to use. I also learned that attributes such as `required`, `min`, and `max` provide useful browser validation without needing to write all the validation myself.

The CSS showed me how Grid and Flexbox can create layouts that work on different screen sizes. Media queries allow the desktop layout to change for tablets and phones. In JavaScript, I learned how form events can collect user input and how the DOM can be updated to add workout items to the page. I also learned that arrays are useful for storing and changing the workouts. `localStorage` saves data as text, so the app uses `JSON.stringify()` when saving and `JSON.parse()` when loading. This allows the workouts to remain after refreshing the page in the same browser.

## 5. What would I do differently if I built this again?

If I built this again, I would test each part more carefully as soon as I created it. I would check the HTML in the browser before moving on, then test the CSS at several screen sizes, and finally test every JavaScript action. This would make it easier to find problems early instead of looking through the whole project at the end.

I would also start with a smaller version of the app and add features gradually. For example, I would first make sure adding and displaying a workout worked, then add completion, deletion, statistics, and localStorage. I would probably add an edit option and a way to filter workouts in a future version, but I would focus on the basic features first. Most importantly, I would continue asking clear, specific questions and review Copilot's code instead of assuming every generated part is perfect.

## Screenshot Evidence

### Screenshot 1: HTML Structure

[Placeholder: Add a screenshot of the Copilot request and response for creating `index.html`, including the workout form and empty workout list.]

### Screenshot 2: CSS Design

[Placeholder: Add a screenshot of the Copilot request and response for creating `styles.css`, including the responsive blue-and-green design.]

### Screenshot 3: JavaScript Functionality

[Placeholder: Add a screenshot of the Copilot request and response for creating `script.js`, including adding workouts, completion, deletion, statistics, and `localStorage`.]

## Final Reflection

This project helped me understand how a web page becomes an interactive application. I started with the structure, added the design, and then connected the user actions with JavaScript. GitHub Copilot made the process faster, but I still had to decide what I wanted, communicate it clearly, and look at how the pieces worked together. I now have a better understanding of the basic roles of HTML, CSS, JavaScript, the DOM, and localStorage in a small web application.
