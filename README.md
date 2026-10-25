# 🎓 East West University - Lab Room & Routine Finder (Fall-2026)

A modern, responsive, and interactive web application designed for students and faculty of East West University (EWU) to instantly find **free / unoccupied computer lab rooms**, check open **practice hours**, and browse complete **weekly class routines**.

---

## 🌟 Key Features

1. **⚡ Instant Free Lab Finder**:
   - Filter by **Day of the Week** (Sunday through Saturday).
   - Filter by **Time Window**:
     - *Right Now (Live Status)*: Shows which rooms are free at this exact minute and when the next class begins!
     - *All-Day Free Slots*: Comprehensive view of all free periods throughout the day.
     - *Specific Time Slots*: e.g., `08:00 AM - 10:00 AM`, `10:10 AM - 12:10 PM`, `01:30 PM - 03:30 PM`, `04:50 PM - 06:50 PM`, etc.
2. **🏢 Floor & Wing Filter**:
   - **2nd Floor**: Room 215 (General Purpose), Room 224 (Cloud Computing), Room 227 (Competitive Programming)
   - **4th Floor**: Room 431 (Cloud Computing), Room 434 (Big Data Analytics), Room 435 (General Purpose), Room 436 (Competitive Programming), Room 437 (Cyber Security)
   - **5th Floor (ICS Labs)**: Room 529 (ICS #1), Room 530 (ICS #2), Room 533 (ICS #3), Room 534 (ICS #4)
3. **📊 Room Occupancy Matrix (Heatmap View)**:
   - Visual grid table showing all 12 rooms across all daily time slots.
   - Color-coded:
     - 🟢 **Green**: Free / No class scheduled.
     - 🔵 **Cyan**: Practice Hour (open for student practice).
     - 🔴 **Red**: Occupied with scheduled class & faculty initials.
4. **📅 Full Weekly Routine Modal**:
   - Click "Weekly Routine" on any room or matrix cell to view its complete 7-day schedule with courses, sections, and faculty.
5. **🔍 Universal Search**:
   - Search by course code (e.g., `CSE475`, `CSE108`, `CSE246`), faculty initials (e.g., `SKL`, `TTB`, `NAFIS`, `DAKP`), or room number.
6. **🌓 Dark & Light Theme**:
   - Sleek glassmorphic dark theme and crisp high-contrast light theme with automatic local storage persistence.

---

## 🚀 How to Run the Webpage

Since the project is built with standard HTML5, CSS, and modern JavaScript, you can run it in two ways:

### Option 1: Direct File Opening
Double-click `index.html` inside `D:\Personal Projects\ewu-free-lab-finder` to open it directly in Google Chrome, Microsoft Edge, Brave, or Firefox.

### Option 2: Local Web Server (Recommended)
Open PowerShell or Terminal in this folder and run:
```powershell
python -m http.server 8089
```
Then visit:
👉 **[http://localhost:8089](http://localhost:8089)**

---

## 📁 File Structure

```
D:\Personal Projects\ewu-free-lab-finder/
├── index.html           # Main semantic web application markup
├── styles.css           # Glassmorphism UI, themes, responsive layout
├── schedule-data.js     # Full schedule dataset for all 12 EWU lab rooms
├── app.js               # Reactive state, filtering, live clock, modal logic
└── README.md            # Documentation and usage guide
```

---

*Routine schedules sourced from official East West University Department of Computer Science & Engineering Fall 2026 updates.*
