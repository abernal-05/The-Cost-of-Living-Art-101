function toggleImage() {
    $("#myImage").toggle();
  }
  function toggleImage2() {
    $("#darkness").toggle();
  }
  function toggleImage3() {
    $("#starlight").toggle();
  }

//laptop toggle image
  $(document).ready(function() {
    var images = ['img/laptopclosed.png', 'img/laptopopen.png'];
    var currentIndex = 0;

    $('#laptopImage').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        $(this).attr('src', images[currentIndex]);
    });
});

// To do list 

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const STORAGE_KEY = 'todoListState';
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

    // Initialize checkbox state
    checkboxes.forEach(checkbox => {
      const id = checkbox.dataset.id;
      if (saved[id]) checkbox.checked = true;

      checkbox.addEventListener('change', () => {
        saved[id] = checkbox.checked;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      });
    });

    // Function to programmatically mark a task as done
    function markTaskAsDone(id) {
      // Find the checkbox by matching its data-id
      const checkbox = document.querySelector(`input[data-id="${id}"]`);

      if (checkbox) {
        checkbox.checked = true;         // Check it visually
        saved[id] = true;                // Update saved state
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));  // Save it
        $('#readyImage').show();
      }
    }
    $('#outfit').on('click', function () {
        markTaskAsDone(0);   // Mark the checkbox as done
        $(this).hide();      // Hide the button that was clicked
      });