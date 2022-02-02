# Notify

This is a simple notification library called Notify used to create a notification messages in the browsers.
Currently supported methods are:

* success
* error

## Usage

Create a new notify.css file and Copy the below css to that file

```CSS
body {
    position: relative;
}

#notify,
.notify {
    position: absolute;
    top: 16px;
    right: 16px;
    max-width: 400px;
    font-weight: normal;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana,
        sans-serif;
    animation-name: fadeOutRight;
    animation-delay: 1s;
    animation-duration: 2s;
}

.notify-success {
    width: fit-content;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #03a003;
    color: white;
    margin-bottom: 0.5em;
}

.notify-error {
    width: fit-content;
    padding: 16px 12px;
    border-radius: 4px;
    background-color: #ff4141;
    color: white;
    margin-bottom: 0.5em;
}

@keyframes fadeOutRight {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
    }
}
```

Then create a notify.js file a copy the below code to that file

```JS
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

```

Connect the `notify.css` and `notify.js` file to you html file

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        ....
        <link rel="stylesheet" href="notify.css">
    </head>


    <body>
        
        ....
        <script src="notify.js"> </script>
    </body>

</html>
```

Now that our script and style are ready, we can use it to create a notification

```JS
Notify.success("Success Message");
Notify.error("Error Message");
```
