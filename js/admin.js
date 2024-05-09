window.onload = function() {
        var currentUsername = localStorage.getItem("currentUsername");

        function capitalizeFirstLetter(string) {
            if (string && string.length > 0) {
                return string.charAt(0).toUpperCase() + string.slice(1);
            }
            return string;
        }
        
        if (currentUsername) {

            document.getElementById("usernameDisplay").textContent = capitalizeFirstLetter(currentUsername);
        }
    };