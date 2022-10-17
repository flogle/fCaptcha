

function textfCaptcha(elemSEL) {

    function uuid(len) {

        const chars = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890';
        let res = "";

        for (let i = 0; i < len; i++) {

            let indexChar = Math.floor(Math.random() * chars.length);
            res += chars[indexChar];

        }

        return res;

    }

    const width = 500;
    const height = 150;

    function drawText(g2d) {

        g2d.clearRect(0, 0, width, height);
        

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

        let text = uuid(8);

        g2d.font = "25px 'Times New Roman', Times, serif"

        g2d.fillStyle = "#ffffff"

        let sx = 35;
        let sy = 75;

        for (let i = 0; i < text.length; i++) {

            if (Math.random() > 0.5) {

                 g2d.fillStyle = "#ffffff"

            } else {

                g2d.fillStyle = "#000000"

            }

            g2d.fillText(text[i], sx, sy);

            sx += 50
            sy -= 3

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

