        // Function to populate the time options
        function populateTimeOptions() {
            var select = document.getElementById("timeSelect");

            for (var hour = 0; hour <= 23; hour++) {
                for (var minute = 0; minute < 60; minute += 15) {
                    var option = document.createElement("option");
                    option.value = hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0');
                    option.text = hour.toString().padStart(2, '0') + ":" + minute.toString().padStart(2, '0');
                    select.add(option);
                }
            }
        }

        // Call the function to populate options on page load
        populateTimeOptions();
