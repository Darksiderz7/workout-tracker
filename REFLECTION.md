# Reflection: Workout Tracker

## 1. What did I ask Copilot to help me build? How did I break down the problem?

I asked GitHub Copilot to help me create a beginner-friendly workout tracker using HTML, CSS, and JavaScript. I wanted users to enter an exercise name, choose a workout type, enter the duration and date, and add the workout to a list. I also wanted users to mark workouts as completed, delete workouts, view statistics, and keep their information saved after refreshing the browser.

I broke the project into smaller parts instead of asking Copilot to create everything at once. I started with the HTML structure, then moved to the design and JavaScript functionality. After the application was working, I asked Copilot to create a professional README with a project description, features, installation instructions, and a usage guide.

## 2. How did my approach to asking questions change as I worked?

My first request was more general because I was still deciding how the application should work. As I continued, my prompts became more detailed. I started listing the exact features that I wanted Copilot to include instead of simply asking it to create a workout tracker.

For the JavaScript, I explained that users needed to add, complete, and delete workouts. I also requested form validation, statistics, and localStorage. For the README, I listed the exact sections it needed to contain. I learned that clear and specific prompts usually produce better results.

## 3. What surprised me about working with GitHub Copilot?

I was surprised by how quickly Copilot created a working starting point for each part of the project. For the HTML, it included the workout form, dropdown menu, date picker, empty workout message, statistics section, and connections to the CSS and JavaScript files.

Copilot also added useful JavaScript features such as form validation, confirmation before deleting a workout, completion status, automatic statistics, and localStorage. I was also surprised that it could examine the project and create detailed documentation for the README.

Although Copilot made the process faster, I learned that I still needed to review and test the code. AI can generate the code, but the developer is responsible for making sure it works correctly.

## 4. What did I learn about the technology I used?

I learned how HTML, CSS, and JavaScript work together in a web application. HTML creates the page structure, CSS controls its appearance, and JavaScript makes it interactive.

I learned how JavaScript can collect information from a form, update the DOM, and store workouts in an array. I also learned that localStorage saves information inside the browser. The application uses `JSON.stringify()` to save the workout data and `JSON.parse()` to load it again. This allows the workouts to remain available after the page is refreshed.

I also learned that a README is important because it explains what the application does, what technologies were used, how to install it, and how to use it.

## 5. What would I do differently next time?

If I built this project again, I would start with a smaller version and test every feature immediately after adding it. I would first test adding and displaying workouts before adding completion, deletion, statistics, and localStorage.

I would also spend more time testing the application on different screen sizes. In a future version, I would add an edit button, workout filters, and more detailed progress tracking. I would continue using specific prompts and carefully reviewing Copilot’s suggestions.

## Screenshot Evidence

### Screenshot 1: HTML Structure

This screenshot shows Copilot explaining the completed HTML structure. It includes the exercise-name field, workout-type dropdown, duration field, date picker, workout-list container, statistics section, and links to the CSS and JavaScript files.

![Copilot explaining the HTML structure](copilot-html.png)

### Screenshot 2: README Documentation

This screenshot shows my request for Copilot to update the README with a professional project description, features, technologies, installation instructions, and usage guide. It also shows Copilot preparing the README changes for confirmation.

![Copilot creating the README documentation](copilot-css.png)

### Screenshot 3: JavaScript Functionality

This screenshot shows Copilot explaining the completed JavaScript functionality. The features include adding workouts with validation, marking workouts as completed, deleting workouts with confirmation, saving data with localStorage, and automatically updating workout statistics.

![Copilot explaining the JavaScript functionality](copilot-javascript.png)

## Final Reflection

This project helped me understand how to collaborate with GitHub Copilot while building a functional web application. Copilot helped me create the project faster, but I still had to explain my ideas, review the generated code, test the features, and decide what belonged in the final application. I now have a better understanding of HTML, CSS, JavaScript, DOM manipulation, localStorage, and project documentation.
