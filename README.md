# Notify

This is a simple notification library called Notify used to create a notification messages in the browsers.
Currently supported methods are:

* success
* error

## Usage

Add `notify.css` to your `<head>` tag.
Add `notify.js` to your `<body>` tag.

```HTML
<!DOCTYPE html>
<html lang="en">

    <head>
        ....
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.css">
    </head>


    <body>
        
        ....
        <script src="https://cdn.jsdelivr.net/gh/suryaumapathy2812/notify__js/notify.js"> </script>
    </body>

</html>
```

Now that our script and style are ready, we can use it to create a notification

```JS
Notify.success("Success Message");
Notify.error("Error Message");
```
