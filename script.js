// JavaScript to add/remove navbar-scrolled class based on scroll position
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-custom");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

  // Function to animate counting
    const counters = document.querySelectorAll('.count');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target'); // Get target number
            const count = +counter.innerText; // Get current count
            const increment = target / speed; // Calculate increment

            if (count < target) {
                counter.innerText = Math.ceil(count + increment); // Update the count
                setTimeout(updateCount, 1); // Call updateCount again
            } else {
                counter.innerText = target; // Ensure it ends at target
            }
        };

        // Start counting when the element is in view
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                updateCount(); // Call function to start counting
                observer.disconnect(); // Stop observing after counting
            }
        });
        
        observer.observe(counter); // Start observing the counter element
    });

      // Array of words to type
    const words = ["Photographer", "Freelancer", "Developer", "Designer"];
    const typingElement = document.getElementById('typing-effect');
    let wordIndex = 0; // Current word index
    let letterIndex = 0; // Current letter index

    function typeWord() {
        if (letterIndex < words[wordIndex].length) {
            typingElement.textContent += words[wordIndex][letterIndex]; // Add letter
            letterIndex++;
            setTimeout(typeWord, 150); // Speed of typing
        } else {
            setTimeout(deleteWord, 200); // Wait before deleting
        }
    }

    function deleteWord() {
        if (letterIndex > 0) {
            typingElement.textContent = words[wordIndex].substring(0, letterIndex - 1); // Remove letter
            letterIndex--;
            setTimeout(deleteWord, 100); // Speed of deleting
        } else {
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
            setTimeout(typeWord, 500); // Wait before typing next word
        }
    }

    // Start the typing effect
    typeWord();
