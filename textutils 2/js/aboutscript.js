    window.alert = function (message, timeout = null) {
        const alertBox = document.createElement("div");
        alertBox.classList.add("alert");
        alertBox.style.position = "fixed";
        alertBox.style.top = "12%";
        alertBox.style.left = "35%";
        alertBox.style.width = "50%";
        alertBox.style.transform = "translate(-50%, -56%)";
        alertBox.style.padding = "20px 40px";
        alertBox.style.backgroundColor = "lightgray";
        alertBox.style.border = "1px solid black";
        alertBox.style.borderRadius = "5px";
        alertBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
        alertBox.style.zIndex = "9999";
        alertBox.innerHTML = message;

        // Append the alert element to the document body
        document.body.appendChild(alertBox);

        // Close the alert after a specified timeout (if provided)
        if (timeout !== null && !isNaN(timeout) && timeout > 0) {
            setTimeout(function () {
                alertBox.remove();
            }, timeout);
        }
    };

    // close alert 
    function darklightmode() {
        console.log("click me");
        let a = document.body.style.backgroundColor;
        let b = document.getElementById("darktolight");
        let textcolor = document.getElementById("text-dark");
        let element = document.getElementById("textrep");
        let colordarkwhite = document.getElementById("colordarkwhite");
        let acbgchange = document.getElementById("acbgchange");
        let acbgchangebody = document.getElementById("acbgchangebody");
        let acbgchange2 = document.getElementById("acbgchange2");
        let acbgchange3 = document.getElementById("acbgchange3");
        let acbgchange2body = document.getElementById("acbgchange2body");
        let acbgchange3body = document.getElementById("acbgchange3body");
        let fotcol = document.getElementById("fotcol");

        if (a != "black") {
            a = document.body.style.backgroundColor = "black";
            b = document.getElementById("darktolight").innerHTML = "Enable Light Mode";
            console.log(b);

            element.classList.remove("navbar-light");
            element.classList.remove("bg-light");
            textcolor.classList.remove("text-dark");
            textcolor.classList.add("text-light");
            element.classList.add("navbar-dark");
            element.classList.add("bg-dark");
            colordarkwhite.classList.remove("bg-white");
            colordarkwhite.classList.add("bg-dark");
            colordarkwhite.classList.remove("text-dark");
            colordarkwhite.classList.add("text-light");
            acbgchange.classList.remove("text-dark");
            acbgchange.classList.remove("bg-light");
            acbgchange.classList.add("bg-dark");
            acbgchange.classList.add("text-light");
            acbgchange2.classList.remove("text-dark");
            acbgchange2.classList.remove("bg-light");
            acbgchange2.classList.add("bg-dark");
            acbgchange2.classList.add("text-light");
            acbgchange3.classList.remove("text-dark");
            acbgchange3.classList.remove("bg-light");
            acbgchange3.classList.add("bg-dark");
            acbgchange3.classList.add("text-light");
            acbgchangebody.classList.remove("text-dark");
            acbgchangebody.classList.remove("bg-light");
            acbgchangebody.classList.add("bg-dark");
            acbgchangebody.classList.add("text-light");
            acbgchange2body.classList.remove("text-dark");
            acbgchange2body.classList.remove("bg-light");
            acbgchange2body.classList.add("bg-dark");
            acbgchange2body.classList.add("text-light");
            acbgchange3body.classList.remove("text-dark");
            acbgchange3body.classList.remove("bg-light");
            acbgchange3body.classList.add("bg-dark");
            acbgchange3body.classList.add("text-light");
            fotcol.classList.remove("text-dark");
            fotcol.classList.remove("bg-light");
            fotcol.classList.add("bg-dark");
            fotcol.classList.add("text-light");
            alert("Dark Mode Enabled", "1500");
        } else {
            a = document.body.style.backgroundColor = "white";
            b = document.getElementById("darktolight").innerHTML = "Enable Dark Mode";
            console.log(b);

            element.classList.remove("navbar-dark");
            element.classList.remove("bg-dark");
            element.classList.add("navbar-light");
            element.classList.add("bg-light");
            textcolor.classList.add("text-dark");
            textcolor.classList.remove("text-light");
            colordarkwhite.classList.remove("bg-dark");
            colordarkwhite.classList.add("bg-white");
            colordarkwhite.classList.remove("text-light");
            colordarkwhite.classList.add("text-dark");
            acbgchange.classList.remove("text-light"); // corrected typo here
            acbgchange.classList.remove("bg-dark");
            acbgchange.classList.add("bg-light");
            acbgchange.classList.add("text-dark"); // corrected typo here
            acbgchange2.classList.remove("text-light"); // corrected typo here
            acbgchange2.classList.remove("bg-dark");
            acbgchange2.classList.add("bg-light");
            acbgchange2.classList.add("text-dark"); // corrected typo here
            acbgchange3.classList.remove("text-light"); // corrected typo here
            acbgchange3.classList.remove("bg-dark");
            acbgchange3.classList.add("bg-light");
            acbgchange3.classList.add("text-dark"); // corrected typo here
            acbgchangebody.classList.remove("text-light"); // corrected typo here
            acbgchangebody.classList.remove("bg-dark");
            acbgchangebody.classList.add("bg-light");
            acbgchangebody.classList.add("text-dark"); // corrected typo here
            acbgchange2body.classList.remove("text-light"); // corrected typo here
            acbgchange2body.classList.remove("bg-dark");
            acbgchange2body.classList.add("bg-light");
            acbgchange2body.classList.add("text-dark"); // corrected typo here
            acbgchange3body.classList.remove("text-light"); // corrected typo here
            acbgchange3body.classList.remove("bg-dark");
            acbgchange3body.classList.add("bg-light");
            acbgchange3body.classList.add("text-dark"); // corrected typo here
            fotcol.classList.remove("text-light"); // corrected typo here
            fotcol.classList.remove("bg-dark");
            fotcol.classList.add("bg-light");
            fotcol.classList.add("text-dark"); // corrected typo here
            alert("Light Mode Enabled", "1500");
        };
    };
