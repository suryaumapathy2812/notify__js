class Notify {
    static success(message) {
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-success", "show");
        const container = document.getElementsByClassName("notify").item(0);
        console.log(container)
        container.appendChild(elem);
    }

    static error(message) {
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-error", "show");;
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
    }
}


Notify.success("Login Successful");
Notify.error("Error Message");
