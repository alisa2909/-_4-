document.addEventListener("DOMContentLoaded", function() {
    let modal = document.querySelector(".modal_overlay");
    let openBtn = document.querySelector(".open_modal");
    let closeBtn = document.querySelector(".close_modal");
    let alertBtn = document.querySelectorAll(".show_alert");
    let addAlerts = document.getElementById("alert_container");

    openBtn.addEventListener("click", function(){
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", function(){
        modal.style.display = "none";
    });

    alertBtn.forEach( function(btn) {
        btn.addEventListener("click", function(){
            let type = btn.dataset.type;
            let box = document.createElement("div");
            box.className = `alert alert_${type}`;

            box.textContent = {
                error: "Произошла ошибка",
                success: "Успех",
                warning: "Предупреждение",
                info: "Информация"
            }[type]

            addAlerts.appendChild(box);

            setTimeout( function(){
                box.remove()
            }, 3000);
        });
    });
});