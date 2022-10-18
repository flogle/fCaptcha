
$(window).on("load", function () {
    
    textfCaptcha(".fCaptcha", () => {

        $(".fCaptcha").remove()
        alert("You are not a bot!")
        $("body").append($("<h1></h1>").text("You are not a bot!"))

    })

})
