# API Health Checker

A simple and beautiful **API Health Checker** web app that allows you to monitor the status of multiple API endpoints.

## Features
- Enter one or more API URLs and check their health
- Displays:
  - Status Code (with color indicators)
  - Status (Up / Down)
  - Response Time
- Auto-refreshes every 5 minutes automatically
- Countdown timer shows next auto-check
- Last refreshed time display
- Responsive and mobile-friendly design

---

## How It Works
- Enter your API URLs in the textarea (one per line)
- Click **"Check APIs"** to manually check health
- The app sends a POST request to the backend (`http://localhost:5000/check-apis`) with the list of URLs
- Backend responds with status code, status, and response time for each API
- The frontend updates the table accordingly
- Auto-refresh runs every 5 minutes and updates the results automatically

---

## Technologies Used

**Frontend:**
- HTML5
- CSS3
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js

---

## Installation and Running Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Mehedi-bit/api-health-checker.git
```
```bash
cd api-health-checker
```

---

### 2. Set Up Backend

**Step 1:** Go to the `server` directory:
```bash
cd server
```

**Step 2:** Install dependencies:
```bash
npm install
```

**Step 3:** Start the server:
```bash
node index.js
```
The backend server will run at `http://localhost:5000`.

---

### 3. Set Up Frontend

**Step 1:** Go to the `client` directory:
```bash
cd ../client
```

**Step 2:** Open `index.html` in your browser.  
(You can simply double-click the `index.html` file, or use a live server extension if you're using VS Code.)

**Step 3:** Boom! Site is ready. Give api links in the frontend and hit "Check APIs" button.


---

## Backend API Endpoint Format

You must have a POST endpoint running at:

```
POST http://localhost:5000/check-apis
```

**Request Body Example:**
```json
{
  "urls": [
    "https://api.example.com",
    "https://anotherapi.com"
  ]
}
```

**Expected Response Example:**
```json
[
  {
    "url": "https://api.example.com",
    "statusCode": 200,
    "status": "Up",
    "responseTime": 123
  },
  {
    "url": "https://anotherapi.com",
    "statusCode": 500,
    "status": "Down",
    "responseTime": 456
  }
]
```

---

## Notes
- Make sure the backend server is running when you open the frontend page.
- You can modify the refresh interval and timer easily in the JavaScript file if needed.

---

## Contact

If you have any questions or suggestions, feel free to reach out:

**Email:** mh5640001@gmail.com

---

## License

This project is open-source and free to use.

