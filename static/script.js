document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("generateBtn");
    const player = document.getElementById("player");
    const status = document.getElementById("status");
    const progressBar = document.getElementById("progressBar");

    btn.addEventListener("click", function () {

        const selected =
        document.querySelector(
            'input[name="instrument"]:checked'
        );

        if (!selected) {

            alert(
                "Please select an instrument."
            );

            return;
        }

        const file = selected.value;

        btn.disabled = true;

        status.innerHTML =
        "Generating Music...";

        progressBar.style.width = "0%";

        let width = 0;

        const timer =
        setInterval(function () {

            width += 2;

            progressBar.style.width =
            width + "%";

            if (width >= 100) {

                clearInterval(timer);

                player.pause();

                player.currentTime = 0;

                player.src =
                "/static/music/" + file;

                player.load();

                player.play();

                status.innerHTML =
                "Now Playing: " +
                file.replace(".mp3", "");

                btn.disabled = false;

            }

        }, 20);

    });

});