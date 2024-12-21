
├── attendance
│   └── info.json
├── backend
│   ├── config
│   │   └── env.js
│   ├── controllers
│   │   ├── attendanceController.js
│   │   ├── deleteCookieController.js
│   │   ├── hostController.js
│   │   └── registerController.js
│   ├── data
│   │   ├── attendanceDetails
│   │   │   └── attendance.json
│   │   └── studentDetails
│   │       └── info.json
│   ├── middlewares
│   ├── models
│   │   ├── attendanceDetails.js
│   │   └── studentDetails.js
│   ├── routes
│   │   ├── attendanceRoutes.js
│   │   ├── deleteCookieRoutes.js
│   │   ├── hostRoutes.js
│   │   └── registerRoutes.js
│   ├── server.js
│   ├── services
│   │   ├── excelService.js
│   │   └── pdfService.js
│   ├── states
│   │   ├── attendanceState.js
│   │   ├── general.js
│   │   └── registerState.js
│   ├── utils
│   │   ├── helpers.js
│   │   └── logger.js
│   └── views
│       ├── attendance.ejs
│       ├── error.ejs
│       ├── hostAttendanceHistory.ejs
│       ├── hostAttendanceReport.ejs
│       ├── hostAttendanceSection.ejs
│       ├── hostEditRegistered.ejs
│       ├── hostHomepage.ejs
│       ├── hostLogin.ejs
│       ├── hostRegistrationReport.ejs
│       ├── hostRegistrationSection.ejs
│       ├── hostViewEnrolled.ejs
│       ├── index.ejs
│       └── register.ejs
├── logs
│   └── app.log
├── package-lock.json
├── package.json
└── public
    └── static
        ├── css
        │   ├── attendance.css
        │   ├── hostAttendanceHistory.css
        │   ├── hostAttendanceReport.css
        │   ├── hostEditRegistered.css
        │   ├── hostHomepage.css
        │   ├── hostSection.css
        │   ├── hostViewEnrolled.css
        │   ├── login.css
        │   └── register.css
        ├── images
        │   └── svg
        │       ├── attendance.svg
        │       ├── back.svg
        │       ├── delete.svg
        │       ├── home.svg
        │       ├── logout.svg
        │       ├── pen.svg
        │       ├── register.svg
        │       └── settings.svg
        └── js
            ├── attendance.js
            ├── hostAttendanceReport.js
            ├── hostEditRegistered.js
            ├── hostSection.js
            ├── hostViewEnrolled.js
            ├── login.js
            ├── qrcode.min.js
            ├── register.js
            └── utils.js