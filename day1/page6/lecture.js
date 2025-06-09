$(document).ready(function(){

    $("#next").click(function(){
        console.log("Going grocery shopping.")
           window.location.href = "../page4/index.html";
        })
        
    

})

const STORAGE_KEY = 'todoListState';
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    
    checkboxes.forEach(checkbox => {
      const id = checkbox.dataset.id;
      if (saved[id]) checkbox.checked = true;
    
      checkbox.addEventListener('change', () => {
        saved[id] = checkbox.checked;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        
      });
    });
    function markTaskAsDone(id) {
        const checkbox = document.querySelector(`input[data-id="${id}"]`);
        if (checkbox) {
          checkbox.checked = true;
          saved[id] = true;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
        }
      }
    markTaskAsDone(1); 