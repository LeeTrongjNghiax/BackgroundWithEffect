class Rain {
  constructor (position, length, speedMultiplier, angle, color) {
    this.position = position;
    this.length = length;      
    this.speedMultiplier = speedMultiplier;
    this.angle = angle;
    this.color = color;
  }
  draw() {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.position.x, this.position.y);
    ctx.lineTo(
      this.position.x + Math.cos(this.angle) * this.length, 
      this.position.y + Math.sin(this.angle) * this.length
    );
    ctx.stroke();
  }
  update(timePassed = 1) {
    this.draw();
    // this.angle += randomRangeFloat(-0.5, 0.5)
    this.position.x += -Math.cos(this.angle) * this.speedMultiplier * timePassed;
    this.position.y += -Math.sin(this.angle) * this.speedMultiplier * timePassed;
  }
}

let rains = [];

let rainLengthMin = parseInt(document.querySelector("#inpLengthMin").value);
let rainLengthMax = parseInt(document.querySelector("#inpLengthMax").value);

let rainSpeedMin = parseInt(document.querySelector("#inpSpeedMin").value);
let rainSpeedMax = parseInt(document.querySelector("#inpSpeedMax").value);

let rainAngleMin = parseInt(document.querySelector("#inpAngleMin").value);
let rainAngleMax = parseInt(document.querySelector("#inpAngleMax").value);

let rainAlphaMin = parseFloat(document.querySelector("#inpOpacityMin").value);
let rainAlphaMax = parseFloat(document.querySelector("#inpOpacityMax").value);

let rainColor = document.querySelector("#inpColor").value;

let rainSpawnRate = parseInt(document.querySelector("#inpSpawnRate").value);

let rainXMin;
let rainXMax;

let rainYMin;
let rainYMax;

let srTimeout;

let spawnRain = function() {
  rainXMin = 0;
  rainXMax = c.width;

  rainYMin = 0;
  rainYMax = c.height;

  rainLengthMin = parseInt(document.querySelector("#inpLengthMin").value);
  rainLengthMax = parseInt(document.querySelector("#inpLengthMax").value);

  rainSpeedMin = parseInt(document.querySelector("#inpSpeedMin").value);
  rainSpeedMax = parseInt(document.querySelector("#inpSpeedMax").value);

  rainAngleMin = parseInt(document.querySelector("#inpAngleMin").value);
  rainAngleMax = parseInt(document.querySelector("#inpAngleMax").value);  

  rainAlphaMin = parseFloat(document.querySelector("#inpOpacityMin").value);
  rainAlphaMax = parseFloat(document.querySelector("#inpOpacityMax").value);

  rainColor = document.querySelector("#inpColor").value;

  rainSpawnRate = parseInt(document.querySelector("#inpSpawnRate").value);

  //Reset rain X

  rainXMax = c.width;

  rains.push(
    //Spawn rain top

    new Rain(
      {
        x: randomRangeFloat(rainXMin, rainXMax),
        y: 0,
      },
      randomRangeFloat(rainLengthMin, rainLengthMax),
      randomRangeFloat(rainSpeedMin, rainSpeedMax),
      randomRangeFloat(degrees_to_radians(rainAngleMin), degrees_to_radians(rainAngleMax)),
      rainColor.replace(')', `, ${randomRangeFloat(rainAlphaMin, rainAlphaMax)})`)
    ),

    //Spawn rain left

    // new Rain(
    //   {
    //     x: 0,
    //     y: Math.random() * (rainYMax - rainYMin) + rainYMin,
    //   },
    //   Math.random() * (rainLengthMax - rainLengthMin) + rainLengthMin,
    //   Math.random() * (rainSpeedMax - rainSpeedMin) + rainSpeedMin,
    //   degrees_to_radians(rainAngle),
    //   rainColor
    // ),

    //Spawn rain right

    // new Rain(
    //   {
    //     x: c.width,
    //     y: randomRangeFloat(0, innerHeight),
    //   },
    //   randomRangeFloat(rainLengthMin, rainLengthMax),
    //   randomRangeFloat(rainSpeedMin, rainSpeedMax),
    //   degrees_to_radians(rainAngle),
    //   rainColor.replace(')', `, ${randomRangeFloat(rainAlphaMin, rainAlphaMax)})`)
    // )
  )
  srTimeout = setTimeout(spawnRain, rainSpawnRate);
}