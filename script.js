/* ============================================
   Workout Tracker - JavaScript
   Complete Functionality with localStorage
   ============================================ */

// ============================================
// DOM Elements
// ============================================

const workoutForm = document.getElementById('workoutForm');
const exerciseNameInput = document.getElementById('exerciseName');
const workoutTypeInput = document.getElementById('workoutType');
const durationInput = document.getElementById('duration');
const workoutDateInput = document.getElementById('workoutDate');
const workoutList = document.getElementById('workoutList');
const emptyState = document.getElementById('emptyState');
const statsSection = document.getElementById('statsSection');
const totalWorkoutsEl = document.getElementById('totalWorkouts');
const totalMinutesEl = document.getElementById('totalMinutes');
const avgDurationEl = document.getElementById('avgDuration');

// ============================================
// Workout Storage & Management
// ============================================

class WorkoutTracker {
    constructor() {
        this.workouts = this.loadFromLocalStorage();
        this.init();
    }

    // Initialize the app
    init() {
        this.setupEventListeners();
        this.renderWorkouts();
        this.updateStats();
        this.setDefaultDate();
    }

    // Setup Event Listeners
    setupEventListeners() {
        workoutForm.addEventListener('submit', (e) => this.handleAddWorkout(e));
    }

    // Set today's date as default in date input
    setDefaultDate() {
        const today = new Date().toISOString().split('T')[0];
        workoutDateInput.value = today;
    }

    // Add new workout
    handleAddWorkout(e) {
        e.preventDefault();

        const workout = {
            id: Date.now(),
            exerciseName: exerciseNameInput.value.trim(),
            workoutType: workoutTypeInput.value,
            duration: parseInt(durationInput.value),
            date: workoutDateInput.value,
            completed: false,
            createdAt: new Date().toISOString(),
        };

        this.workouts.push(workout);
        this.saveToLocalStorage();
        this.renderWorkouts();
        this.updateStats();
        this.resetForm();
        this.showNotification('Workout added successfully! 💪');
    }

    // Reset form fields
    resetForm() {
        workoutForm.reset();
        this.setDefaultDate();
    }

    // Delete workout by ID
    deleteWorkout(id) {
        if (confirm('Are you sure you want to delete this workout?')) {
            this.workouts = this.workouts.filter(workout => workout.id !== id);
            this.saveToLocalStorage();
            this.renderWorkouts();
            this.updateStats();
            this.showNotification('Workout deleted! ✓');
        }
    }

    // Toggle workout completion status
    toggleWorkoutCompletion(id) {
        const workout = this.workouts.find(w => w.id === id);
        if (workout) {
            workout.completed = !workout.completed;
            this.saveToLocalStorage();
            this.renderWorkouts();
            this.updateStats();
            const message = workout.completed ? 'Workout marked as completed! ✅' : 'Workout marked as pending!';
            this.showNotification(message);
        }
    }

    // Render all workouts to the DOM
    renderWorkouts() {
        workoutList.innerHTML = '';

        if (this.workouts.length === 0) {
            emptyState.style.display = 'block';
            workoutList.style.display = 'none';
            statsSection.style.display = 'none';
            return;
        }

        emptyState.style.display = 'none';
        workoutList.style.display = 'flex';
        statsSection.style.display = 'grid';

        // Sort workouts by date (newest first)
        const sortedWorkouts = [...this.workouts].sort((a, b) => 
            new Date(b.date) - new Date(a.date)
        );

        sortedWorkouts.forEach(workout => {
            const workoutEl = this.createWorkoutElement(workout);
            workoutList.appendChild(workoutEl);
        });
    }

    // Create individual workout element
    createWorkoutElement(workout) {
        const li = document.createElement('li');
        li.className = 'workout-item';
        if (workout.completed) {
            li.style.opacity = '0.7';
            li.style.borderLeftColor = '#28A745';
        }

        const formattedDate = this.formatDate(workout.date);
        const badgeClass = this.getWorkoutTypeBadgeClass(workout.workoutType);

        li.innerHTML = `
            <div class="workout-info">
                <h3 style="text-decoration: ${workout.completed ? 'line-through' : 'none'}; color: ${workout.completed ? '#999' : '#1A1A1A'}">
                    ${this.escapeHtml(workout.exerciseName)}
                </h3>
                <div class="workout-details">
                    <span class="workout-type-badge ${badgeClass}">${workout.workoutType}</span>
                    <div class="workout-detail">
                        <span>⏱️</span>
                        <span>${workout.duration} min</span>
                    </div>
                    <div class="workout-detail">
                        <span>📅</span>
                        <span>${formattedDate}</span>
                    </div>
                    <div class="workout-detail" style="color: ${workout.completed ? '#28A745' : '#FF9800'}; font-weight: 600;">
                        <span>${workout.completed ? '✅' : '⏳'}</span>
                        <span>${workout.completed ? 'Completed' : 'Pending'}</span>
                    </div>
                </div>
            </div>
            <div class="workout-actions">
                <button class="btn btn-secondary" onclick="tracker.toggleWorkoutCompletion(${workout.id})">
                    ${workout.completed ? 'Undo' : 'Complete'}
                </button>
                <button class="btn btn-danger" onclick="tracker.deleteWorkout(${workout.id})">
                    Delete
                </button>
            </div>
        `;

        return li;
    }

    // Get badge class based on workout type
    getWorkoutTypeBadgeClass(type) {
        const classMap = {
            'Cardio': 'cardio',
            'Strength': 'strength',
            'Flexibility': 'flexibility',
            'Sports': 'cardio',
            'Other': ''
        };
        return classMap[type] || '';
    }

    // Format date to readable format
    formatDate(dateStr) {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('en-US', options);
    }

    // Escape HTML to prevent XSS
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Update statistics
    updateStats() {
        const total = this.workouts.length;
        const totalMinutes = this.workouts.reduce((sum, w) => sum + w.duration, 0);
        const avgMinutes = total > 0 ? Math.round(totalMinutes / total) : 0;

        totalWorkoutsEl.textContent = total;
        totalMinutesEl.textContent = totalMinutes;
        avgDurationEl.textContent = `${avgMinutes} min`;
    }

    // Show notification message
    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(135deg, #34C759 0%, #00C85A 100%);
            color: white;
            padding: 16px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            font-weight: 600;
            z-index: 1000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Auto-remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // Save workouts to localStorage
    saveToLocalStorage() {
        try {
            localStorage.setItem('workoutTrackerData', JSON.stringify(this.workouts));
        } catch (error) {
            console.error('Error saving to localStorage:', error);
            alert('Could not save your workout. Please check your browser storage settings.');
        }
    }

    // Load workouts from localStorage
    loadFromLocalStorage() {
        try {
            const data = localStorage.getItem('workoutTrackerData');
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Error loading from localStorage:', error);
            return [];
        }
    }

    // Clear all workouts (optional)
    clearAllWorkouts() {
        if (confirm('Are you sure you want to delete all workouts? This cannot be undone!')) {
            this.workouts = [];
            this.saveToLocalStorage();
            this.renderWorkouts();
            this.updateStats();
            this.showNotification('All workouts cleared! 🗑️');
        }
    }

    // Export workouts as JSON
    exportWorkouts() {
        const dataStr = JSON.stringify(this.workouts, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `workouts-${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
        this.showNotification('Workouts exported successfully! 📥');
    }

    // Get workouts statistics by type
    getStatsByType() {
        const stats = {};
        this.workouts.forEach(workout => {
            if (!stats[workout.workoutType]) {
                stats[workout.workoutType] = { count: 0, totalMinutes: 0 };
            }
            stats[workout.workoutType].count++;
            stats[workout.workoutType].totalMinutes += workout.duration;
        });
        return stats;
    }

    // Get workouts for specific date range
    getWorkoutsByDateRange(startDate, endDate) {
        return this.workouts.filter(workout => {
            const workoutDate = new Date(workout.date);
            return workoutDate >= startDate && workoutDate <= endDate;
        });
    }

    // Get completed workouts count
    getCompletedCount() {
        return this.workouts.filter(w => w.completed).length;
    }

    // Get pending workouts count
    getPendingCount() {
        return this.workouts.filter(w => !w.completed).length;
    }
}

// ============================================
// Add Animations
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// Initialize App
// ============================================

let tracker;

document.addEventListener('DOMContentLoaded', () => {
    tracker = new WorkoutTracker();
    console.log('Workout Tracker initialized successfully! 💪');
});

// ============================================
// Keyboard Shortcuts (Optional)
// ============================================

document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + S to focus on Exercise Name input
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        exerciseNameInput.focus();
    }
});

// ============================================
// Service Worker Registration for PWA (Optional)
// ============================================

if ('serviceWorker' in navigator) {
    // Uncomment when service worker is created
    // navigator.serviceWorker.register('sw.js').catch(err => console.log('SW registration failed:', err));
}