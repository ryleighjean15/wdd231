// JavaScript to toggle the visibility of the menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.querySelector('ul').classList.toggle('show');
});



function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
  courseDetails.showModal();
  
  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}


courseDiv.addEventListener('click', () => {
      displayCourseDetails(course);
    });
  
  
// function displayCourseDetails(course) {
//     const courseDetails = document.getElementById('courseDetails');
    
    
//     courseDetails.innerHTML = `
//         <button id="closeModal">X</button>
//         <h2>${course.subject} ${course.number}</h2>
//         <h3>${course.title}</h3>
//         <p><strong>Credits:</strong> ${course.credits}</p>
//         <p><strong>Certificate:</strong> ${course.certificate}</p>
//         <p>${course.description}</p>
//         <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
//     `;
    
   
//     courseDetails.showModal();

    
//     document.getElementById('closeModal').addEventListener('click', () => {
//         courseDetails.close();
//     });
// }


// document.querySelectorAll('.course-item').forEach(courseDiv => {
//     courseDiv.addEventListener('click', () => {
//         const course = {
//             subject: 'CSE',
//             number: '111',
//             title: 'Introduction to Programming',
//             credits: 3,
//             certificate: 'Web Development',
//             description: 'Learn programming basics...',
//             technology: ['HTML', 'CSS', 'JavaScript']
//         };
//         displayCourseDetails(course);
//     });
// });
