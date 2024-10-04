// Sample member data (can also be fetched from an external file)
const members = [
    { name: "Tech Solutions", address: "123 Bart Way, Lake City", phone: "555-1234", website: "https://www.techsolutions.com", image: "tech_solutions_logo.png", membershipLevel: 3, description: "Leading provider of tech solutions and services." },
    { name: "Green Gardens", address: "456 Richard Lane, Jacksonville", phone: "555-5678", website: "https://www.greengardens.com", image: "green_gardens_logo.png", membershipLevel: 2, description: "Experts in sustainable gardening and landscaping." },
    { name: "Urban Eatery", address: "789 Walker Blvd, Nashville", phone: "555-9876", website: "https://www.urbaneatery.com", image: "urban_eatery_logo.png", membershipLevel: 1, description: "A trendy spot for urban dining and gourmet experiences." },
    { name: "Fitness First", address: "101 Halle Blvd, Douglas", phone: "555-4321", website: "https://www.fitnessfirst.com", image: "fitness_first_logo.png", membershipLevel: 3, description: "Your go-to fitness center for a healthy lifestyle." },
    { name: "Bright Minds Academy", address: "202 Dover Ave, Pinetop", phone: "555-2468", website: "https://www.brightminds.com", image: "bright_minds_logo.png", membershipLevel: 2, description: "Nurturing young minds for a brighter future." },
    { name: "Auto Experts", address: "303 Drury Lane, Kansas City", phone: "555-6543", website: "https://www.autoexperts.com", image: "auto_experts_logo.png", membershipLevel: 1, description: "Professional auto repair and maintenance services." },
    { name: "Style Avenue", address: "404 Taylor St, Lakeside", phone: "555-7777", website: "https://www.styleavenue.com", image: "style_avenue_logo.png", membershipLevel: 2, description: "Your favorite destination for the latest fashion trends." }
  ];
  
  // Filter members who are Silver (2) or Gold (3) level
  const qualifiedMembers = members.filter(member => member.membershipLevel === 2 || member.membershipLevel === 3);
  
  // Function to randomly select 2 or 3 members
  function getRandomMembers(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  // Function to display the spotlight members
  function displaySpotlightMembers() {
    const spotlightContainer = document.getElementById('spotlightContainer');
    const randomMembers = getRandomMembers(qualifiedMembers, 2 + Math.floor(Math.random() * 2)); // Randomly pick 2 or 3 members
  
    randomMembers.forEach(member => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('spotlight-member');
      memberDiv.innerHTML = `
        <img src="images/${member.image}" alt="${member.name} Logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>Phone: ${member.phone}</p>
        <p>Membership Level: ${member.membershipLevel === 3 ? 'Gold' : 'Silver'}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;
      spotlightContainer.appendChild(memberDiv);
    });
  }
  
  // Call the display function when the page loads
  document.addEventListener('DOMContentLoaded', displaySpotlightMembers);
  