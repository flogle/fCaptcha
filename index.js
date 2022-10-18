
$(window).on("load", function () {

    textfCaptcha(".fCaptcha", () => {

        location.href = "test.html"

    }, null, null, null, false, "Enter the text you see to go to the test page", "center")

})
