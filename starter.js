const fs = require('fs');
const path = require('path');

function createFileWithContent(pathToFile, content) {
    // Extract directory path from the file path
    const dir = path.dirname(pathToFile);

    // Ensure the directory exists, create it recursively if necessary
    fs.mkdir(dir, { recursive: true }, (err) => {
        if (err) {
            console.error(`Error creating directory: ${err.message}`);
            return;
        }

        // Write content to the file
        fs.writeFile(pathToFile, content, (err) => {
            if (err) {
                console.error(`Error writing to file: ${err.message}`);
            } else {
                console.log(`File created and content written to: ${pathToFile}`);
            }
        });
    });
}


createFileWithContent('./backend/data/studentDetails/info.json', '{}');
createFileWithContent('./backend/data/attendanceDetails/attendance.json', '{}');
createFileWithContent('./.env', `STUDENT_DETAILS_PATH='./backend/data/studentDetails/info.json'
ATTENDANCE_DETAILS_PATH='./backend/data/attendanceDetails/attendance.json'
PORT=
AUTH_SECRET_KEY=
DOMAIN=`
);


