# 💪 Workout Tracker

A modern, beginner-friendly web application for logging daily workouts, tracking progress, and staying motivated. Built with vanilla HTML, CSS, and JavaScript, the app provides a clean responsive interface without requiring a backend or build process.

## ✨ Features

- Add workouts with an exercise name, workout type, duration, and date
- Choose from Cardio, Strength Training, Flexibility, Sports, or Other
- Mark workouts as completed or return them to pending status
- Delete workouts with confirmation
- View workouts sorted by date, with completion indicators and type badges
- See real-time statistics for total workouts, total minutes, and average duration
- Save workouts automatically using browser `localStorage`
- Restore saved workouts after refreshing or reopening the browser
- Responsive blue-and-green fitness theme for desktop, tablet, and mobile screens
- Form validation, accessible focus states, notifications, and HTML-escaped workout names

## 🛠️ Technologies Used

- **HTML5** — Semantic structure and form controls
- **CSS3** — Responsive layouts with Grid and Flexbox, CSS variables, gradients, animations, and media queries
- **JavaScript (ES6+)** — DOM manipulation, event handling, classes, array methods, date formatting, and validation
- **Web Storage API** — `localStorage` for client-side workout persistence

## 📦 Installation

### Prerequisites

You only need a modern web browser. No package manager, framework, database, or server is required.

### Clone the repository

```bash
git clone https://github.com/Darksiderz7/workout-tracker.git
cd workout-tracker
```

### Run the application

You can open `index.html` directly in your browser, or use a local development server.

Using Python 3:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

The project contains three application files:

```text
workout-tracker/
├── index.html   # Application structure and form
├── styles.css   # Responsive visual design
├── script.js    # Workout logic and localStorage persistence
└── README.md    # Project documentation
```

## 📖 Usage Guide

### Add a workout

1. Enter an exercise name, such as `Morning Run` or `Yoga`.
2. Select a workout type.
3. Enter the duration in minutes.
4. Choose the workout date. The date defaults to today.
5. Click **Add Workout**.

The new workout appears in the list, and the statistics update immediately.

### Complete or undo a workout

Click **Complete** on a pending workout to mark it as finished. Completed workouts display a completion indicator and a strikethrough exercise name. Click **Undo** to return a workout to pending status.

### Delete a workout

Click **Delete** for the workout you want to remove, then confirm the prompt. The workout and its contribution to the statistics are removed immediately.

### View statistics

After at least one workout is added, the statistics panel displays:

- **Total Workouts** — Number of saved workouts
- **Total Minutes** — Combined duration of all workouts
- **Average Duration** — Average workout duration in minutes

## 💾 Data Storage

Workouts are saved automatically using the browser's `localStorage`. This means:

- Data remains available after refreshing the page or closing the browser.
- No account, backend, or internet connection is required after the files load.
- Data is stored locally in the current browser and device only.
- Clearing the site's browser storage will remove the saved workouts.

The application stores workout data under the `workoutTrackerData` localStorage key. Because the data is local to one browser, it will not automatically synchronize across devices or browsers.

## 🌐 Browser Support

The app is intended for current versions of Chrome, Firefox, Safari, Edge, and other browsers that support modern JavaScript, CSS, and `localStorage` APIs.

## 🚀 Future Improvements

Possible enhancements include workout search and filtering, charts, export/import, dark mode, cloud synchronization, reminders, goals, and progressive web app support.

## 📄 License

This project is available for personal and educational use. Add a license file if you plan to distribute or reuse it under specific open-source terms.

---

**Stay consistent, stay active, and keep progressing! 💪**
