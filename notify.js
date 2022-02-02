class Notify {
    static #createParent() {
        const parent = document.createElement('div');
        parent.classList.add('notify');
        document.body.appendChild(parent);
        return parent;
    }

    static #timeOut(elem) {
        setTimeout(() => {
            elem.classList.remove("show");
            setTimeout(() => {
                elem.remove();
            }, 1000);
        }, 2000);
    }

    static success(message) {
        if (!document.querySelector('.notify')) {
            this.#createParent();
        }
        const body = document.querySelector('body');
        const elem = document.createElement("div");
        elem.innerText = message;
        elem.classList.add("notify-success", "show");
        const container = document.getElementsByClassName("notify").item(0);
        container.appendChild(elem);
        this.#timeOut(elem);
    }

    static error(message) {
        if (!document.querySelector('.notify')) {
            this.#createParent();
        }
        const body = document.querySelector('body');
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
