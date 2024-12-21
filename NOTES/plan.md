# common for all
- Home button 

# Landing Page
1. Registration
2. Login

# HOST Registration Page
1. name
2. email
3. password
4. department
- redirect to HOST configuration page

# Host configuration
1. semester
1. branch
2. section
3. couse id
- add btn
- table format with delete
- submit -> bulk request to backend to add course and section to host
- redirect to HOME page

# HOST home page
1. settings button
    1. edit cofiguration btn
    2. logout btn
    3. set time interval for attendance/registration
    4. edit host registration 
2. Take attendance 
    - REDIRECT to  `options to select section` page  with QUERY PARAMETER.
3. view enrolled students
    - REDIRECT to  `options to select section` page with  QUERY PARAMETER.  
4. view attendance histrory
    - REDIRECT to  `options to select section` page with QUERY PARAMETER. 
5. start registration
     - REDIRECT to  `options to select section` page with QUERY PARAMETER.
6. Edit registration
     - REDIRECT to  `options to select section` page with QUERY PARAMETER.
7. Allow Login
    - REDIRECT to  `options to select section` page with QUERY PARAMETER.

# Selection Page
     -show different boxes of each class the host has registered
     -Tap on any box 
        -redirect to previous states destination from QUERY PARMETER with the info of selected section


- Take attendance
    - Stop attenance -> REDIRECT TO `view attendance page/recent`
- view attendance page
    - search by student name/usn
    - sorting button
    - table format
    -  EDIT (FUTURE PLAN)
    - download pdf,excel
- view Enrolled students
    - basic
    - download report ( FUtURE)
- attendance histroy 
    - show recent attendance page by default 
    - calender button to select the page -> fetch corresponding attendance data
    - search by student name/usn
    - sorting button
    - edit attendance ( in FUTURE)
- start registration
    - Stop registration -> REDIRECT TO `view enrolled students page`
    - edit registration
- Allow Login 
    - show timer
    - link
    - qr as previous
    - stop login -> REDIRECT TO `view logged in students page`

- view recently logged in students page
# Student Pages
- Student registration
    -  timer
    - INPUTS 
        1. name
        2. usn
        3. password
        3. email
        5. academic year ( 2023 if registred ot college on 2023-24)
        6. Selecting the configuration process
            1. semester
            1. department
            2. section
            3. couse id
        7. submit button
        8. pop up message about registration
        9. if Time up pop up about the same

- Student Login ( only if teacher allows)
    1. time bar
    2. usn/email
    3. password
    4. submit button
    5. if wrong usn or password pop up about the same
    6. if time up pop up about the same
    7. if submitted succesfully,pop up about the same

- Student Attendance
    1. timer
    2. attendance status
    3. name and usn