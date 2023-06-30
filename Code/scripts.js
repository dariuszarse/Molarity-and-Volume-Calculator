//toggle rows to 0, making the invisible on load.
window.addEventListener('load', function() {
  toggleRows(0);
});

//implementing toggle functionality for rows from dropdown menu
function toggleRows(visibleRows) {
  rows = document.querySelectorAll("#big_container .row");

  rows.forEach((row, index) => {
    if (index < visibleRows) {
      row.style.display = "block";
    } else {
      row.style.display = "none";
    }
  });
}

window.addEventListener('load', function() {
  // Store the default values of input fields
  defaultValues = {};
  inputFields = document.querySelectorAll('input');

  inputFields.forEach((input) => {
    defaultValues[input.id] = input.value;

    input.addEventListener('focus', function() {
      // Clear the input field when focused
      if (input.value === defaultValues[input.id]) {
        input.value = '';
      }
    });

    input.addEventListener('blur', function() {
      // Restore the default value if the input field is empty
      if (input.value === '') {
        input.value = defaultValues[input.id];
      }
    });
  });

  // Make the refresh also happen on click of refresh button
  refresh_button = document.getElementById('refresh_button');
  refresh_button.addEventListener('click', function() {
    inputFields.forEach((input) => {
      input.value = defaultValues[input.id];
    });
  });
});

//convert available molarities to micromol and store in array
function get_available_solutions() {
        solution_converted = [];
  for (let i = 1; i <= 10; i++) {
    solution = document.getElementById(`solution${i}`).value;
    solution_unit = document.getElementById(`solution${i}_unit`).value;

    if (solution_unit == 1) {
      solution_converted[i] = solution * 1000000;
    } else if (solution_unit == 2) {
      solution_converted[i] = solution * 1000;
    } else {
      solution_converted[i] = solution;
    }
  }
}

//convert desired molarities to micromol and store in array
function get_desired_concentrations() {
        concentration_converted = [];
  for (let i = 1; i <= 10; i++) {
    concentration = document.getElementById(`concentration${i}`).value;
    concentration_unit = document.getElementById(`concentration${i}_unit`).value;

    if (concentration_unit == 1) {
      concentration_converted[i] = concentration * 1000000;
    } else if (concentration_unit == 2) {
      concentration_converted[i] = concentration * 1000;
    } else {
      concentration_converted[i] = concentration;
    }
  }
}

//convert total volume of target solution
function get_total_volume() {
        total_volume = document.getElementById("total_volume").value;
        total_volume_unit = document.getElementById("total_volume_unit").value;
        if (total_volume_unit==1) {
                total_volume_converted = total_volume*1000;
        } else {
                total_volume_converted = total_volume;
        }
}

//calculate volumns for each solution and store in array. calculate fill up volume
function calculate_volumes() {
        volumes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      
        for (let i = 1; i <= 10; i++) {
          if (solution_converted[i] !== 0 && concentration_converted[i] !== 0) {
            volumes[i - 1] = total_volume_converted / (solution_converted[i] / concentration_converted[i]);
          }
        }
        fill_up_volume = total_volume_converted - volumes.reduce((acc, cur) => acc + cur, 0);
}

//output 
function set_volumes() {
        for (let i = 1; i <= 10; i++) {
          volume_field = document.getElementById("required_volume" + i);
          volume_field.value = volumes[i - 1];
        }
        
        fill_up_volume_field = document.getElementById("fill_up_volume");
        fill_up_volume_field.value = fill_up_volume;
}
