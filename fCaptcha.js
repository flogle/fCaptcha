
function textfCaptcha(elemSEL) {

    const width = 500;
    const height = 150;

    function drawText(g2d) {
        

        function randomColor() {
            
            let options = "abcdef0123456789";

            let newStr = "#";

            for (let i = 0; i < 6; i++) {

                newStr += options[Math.round(Math.random() * (options.length - 1))]

            }

            return newStr;

        }

        console.log(g2d)

        g2d.fillStyle = randomColor()
        
        g2d.fillRect(0, 0, 500, 150)
        
        for (let i = 0; i < 175; i++) {
            
            g2d.fillStyle = randomColor()

            let pos = {

                x: Math.round(Math.random() * width),
                y: Math.round(Math.random() * height),
                width: Math.floor(Math.random() * (100 + 20)),
                height: Math.floor(Math.random() * (30 + 20))

            }

            g2d.fillRect(pos.x, pos.y, pos.width, pos.height)
            

        }

    }
    
    let elem = $(elemSEL)

    for (let i = 0; i < elem.length; i++) {

        let curr = $(elem[i]);

        let canvas = $("<canvas></canvas>");

        canvas[0].width = 500
        canvas[0].height = 150

        drawText(canvas[0].getContext("2d"))
        

        curr.append(canvas);


    }

    

}

