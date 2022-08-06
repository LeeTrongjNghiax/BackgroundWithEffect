class Snow {
  constructor(position, radius, color, velocity) {
    this.position = position;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, true);
    ctx.fill();
  }
  update(timePassed = 1) {
    this.draw();
    this.position.x += this.velocity.x * timePassed;
    this.position.y += this.velocity.y * timePassed;
  }
}

let snows = [];

let snowRMin = parseFloat(document.querySelector("#inpSnowRadiusMin").value);
let snowRMax = parseFloat(document.querySelector("#inpSnowRadiusMax").value);

let snowVXMin = parseFloat(document.querySelector("#inpSnowVXMin").value);
let snowVXMax = parseFloat(document.querySelector("#inpSnowVXMax").value);

let snowVYMin = parseFloat(document.querySelector("#inpSnowVYMin").value);
let snowVYMax = parseFloat(document.querySelector("#inpSnowVYMax").value);

let snowAlphaMin = parseFloat(document.querySelector("#inpSnowOpacityMin").value);
let snowAlphaMax = parseFloat(document.querySelector("#inpSnowOpacityMax").value);

let snowColor = document.querySelector("#inpSnowColor").value;

let snowSpawnRate = parseFloat(document.querySelector("#inpSnowSpawnRate").value);

let snowPXMin;
let snowPXMax;

let snowPYMin;
let snowPYMax;

let snTimeout;

let spawnSnow = function() {
  snowPXMin = 0;
  snowPXMax = c.width;

  snowPYMin = 0;
  snowPYMax = c.height;

  snowRMin = parseFloat(document.querySelector("#inpSnowRadiusMin").value);
  snowRMax = parseFloat(document.querySelector("#inpSnowRadiusMax").value);

  snowVXMin = parseFloat(document.querySelector("#inpSnowVXMin").value);
  snowVXMax = parseFloat(document.querySelector("#inpSnowVXMax").value);

  snowVYMin = parseFloat(document.querySelector("#inpSnowVYMin").value);
  snowVYMax = parseFloat(document.querySelector("#inpSnowVYMax").value);

  snowAlphaMin = parseFloat(document.querySelector("#inpSnowOpacityMin").value);
  snowAlphaMax = parseFloat(document.querySelector("#inpSnowOpacityMax").value);

  snowColor = document.querySelector("#inpSnowColor").value;

  snowSpawnRate = parseFloat(document.querySelector("#inpSnowSpawnRate").value);

  snows.push(
    new Snow(
      {
        x: randomRangeFloat(snowPXMin, snowPXMax),
        y: -snowRMax
      },
      randomRangeFloat(snowRMin, snowRMax),
      snowColor.replace(')', `, ${randomRangeFloat(snowAlphaMin, snowAlphaMax)})`),
      {
        x: randomRangeFloat(snowVXMin, snowVXMax),
        y: randomRangeFloat(snowVYMin, snowVYMax),
      },
    ),

    // new Snow(
    //   {
    //     x: -snowRMax,
    //     y: randomRangeFloat(snowPYMin, snowPYMax),
    //   },
    //   randomRangeFloat(snowRMin, snowRMax),
    //   `rgba(255, 255, 255, ${randomRangeFloat(0.2, 0.8)})`,
    //   {
    //     x: randomRangeFloat(snowVXMin, snowVXMax),
    //     y: randomRangeFloat(snowVYMin, snowVYMax),
    //   },
    // ),
  );
  snTimeout = setTimeout(spawnSnow, snowSpawnRate);
}