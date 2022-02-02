class Notify {

    static #timeOut(elem) {
        setTimeout(() => {
            elem.classList.remove("show");
            setTimeout(() => {
                elem.remove();
            }, 1000);
        }, 2000);
    }

    static success(message) {
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-success", "show");
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
        this.#timeOut(elem);
    }

    static error(message) {
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-error", "show");;
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
        this.#timeOut(elem);
    }
}


Notify.success("Login Successful");
Notify.error("Error Message");
