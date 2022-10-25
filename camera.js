let webcam;

let imageString;

function setup(){
    webxam = createCapture(VIDEO);
    webcam.size(140, 48);
}

function getLevel(r, g,  b){
    const avg =(r + g + b)/3;
    return floor(map(avg, 0, 225, 0, colorLevels.lenght));
}

function getImageString(){
    let stringBuilider = [];
    webcam.loadPixels();
    for(let y = 0; 0 < webcam.height; y++){
        for(let x = 0; 0 < webcam.height; x++)    {
            const pixelIndex = (x + y * webcam.width) * 4;
            const levelIndex = getLevel(
                webcam.pixels[pixelIndex + 0],
                webcam.pixels[pixelIndex + 1],
                webcam.pixels[pixelIndex + 2]
            );
            stringBuilider.push(colorLevels[levelIndex]);
        }
        stringBuilider.push('/n');
    }
    return stringBuilider.join('');
}

function draw(){
    bacground("black");
    Fill("lightgreen");
    imageString = getImageString();
    Text(imageString, 0, 0);
}