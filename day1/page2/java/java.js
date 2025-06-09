function toggleImage() {
    $("#myImage").toggle();
    saveToggleStatus()
  }
  function toggleImage2() {
    $("#darkness").toggle();
    saveToggleStatus()
  }
  function toggleImage3() {
    $("#starlight").toggle();
    saveToggleStatus()
  }

//laptop toggle image
  $(document).ready(function() {
    var images = ['img/laptopclosed.png', 'img/laptopopen.png'];
    var currentIndex = 0;

    $('#laptopImage').click(function() {
        currentIndex = (currentIndex + 1) % images.length;
        $(this).attr('src', images[currentIndex]);
        saveToggleStatus()
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
    function markTaskAsDone(id, outfitVersion) {
      //  Update checkbox state
      const checkbox = document.querySelector(`input[data-id="${id}"]`);
      if (checkbox) {
        checkbox.checked = true;
        saved[id] = true;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      }
    
      // Hide sleep image
      $('#sleepReady').hide();
    
      // Hide both outfit buttons
      $('#outfit1').hide();
      $('#outfit2').hide();
    
      //  Show correct ready image
      if (outfitVersion === 1) {
        $('#classready1').show();
      } else if (outfitVersion === 2) {
        $('#classready2').show();
      }
    }

    $('#outfit1').on('click', function () {
      markTaskAsDone(0, 1);
    });
    $('#outfit2').on('click', function () {
      markTaskAsDone(0, 2);
    });


    function saveToggleStatus() {
      const status = {
        myImage: $("#myImage").is(":visible"),
        darkness: $("#darkness").is(":visible"),
        starlight: $("#starlight").is(":visible"),
        laptopImage: $("#laptopImage").is(":visible")
      };
      localStorage.setItem("imageStatus", JSON.stringify(status));
    }