// const courses = [
//     {
//         subject: 'CSE',
//         number: 110,
//         title: 'Introduction to Programming',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
//         technology: [
//             'Python'
//         ],
//         completed: true
//     },
//     {
//         subject: 'WDD',
//         number: 130,
//         title: 'Web Fundamentals',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
//         technology: [
//             'HTML',
//             'CSS'
//         ],
//         completed: false
//     },
//     {
//         subject: 'CSE',
//         number: 111,
//         title: 'Programming with Functions',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
//         technology: [
//             'Python'
//         ],
//         completed: true
//     },
//     {
//         subject: 'CSE',
//         number: 210,
//         title: 'Programming with Classes',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
//         technology: [
//             'C#'
//         ],
//         completed: true
//     },
//     {
//         subject: 'WDD',
//         number: 131,
//         title: 'Dynamic Web Fundamentals',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
//         technology: [
//             'HTML',
//             'CSS',
//             'JavaScript'
//         ],
//         completed: true
//     },
//     {
//         subject: 'WDD',
//         number: 231,
//         title: 'Frontend Web Development I',
//         credits: 2,
//         certificate: 'Web and Computer Programming',
//         description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
//         technology: [
//             'HTML',
//             'CSS',
//             'JavaScript'
//         ],
//         completed: false
//     }
// ]

// Array of courses
const courses = [
    { code: 'CSE 110', name: 'Programming Basics', completed: true, credits: 3, category: 'CSE' },
    { code: 'CSE 111', name: 'Programming with Functions', completed: true, credits: 4, category: 'CSE' },
    { code: 'CSE 210', name: 'Object-Oriented Programming', completed: false, credits: 3, category: 'CSE' },
    { code: 'WDD 130', name: 'Web Fundamentals', completed: true, credits: 3, category: 'WDD' },
    { code: 'WDD 230', name: 'Advanced Web Development', completed: false, credits: 4, category: 'WDD' },
    { code: 'WDD 231', name: 'Software Design', completed: false, credits: 3, category: 'CSE' }
  ];
  
  // Function to display courses
  function displayCourses(courseList) {
      const container = document.getElementById('course-container');
      container.innerHTML = ''; // Clear previous content
  
      courseList.forEach(course => {
          const courseCard = document.createElement('div');
          
          // Apply completed or incomplete class based on course completion status
          courseCard.classList.add('course-card', course.completed ? 'completed' : 'incomplete');
          
          courseCard.innerHTML = `
              <h3>${course.code}</h3>
              <p>${course.name}</p>
              <p>Credits: ${course.credits}</p>
          `;
          container.appendChild(courseCard);
      });
  
      // Calculate total credits using reduce
      const totalCredits = courseList.reduce((acc, course) => acc + course.credits, 0);
      document.getElementById('totalCredits').textContent = totalCredits;
  }
  
  // Initial display of all courses
  displayCourses(courses);
  
  // Filter function
  function filterCourses(category) {
      let filteredCourses;
  
      if (category === 'all') {
          filteredCourses = courses;
      } else {
          filteredCourses = courses.filter(course => course.category === category);
      }
  
      displayCourses(filteredCourses);
  }
  