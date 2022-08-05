class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

class RadialGradient {
  constructor(
    postition1,
    radius1,
    postition2,
    radius2,
    colorPositions,
    colors,
    velocity
  ) {
    this.postition1 = postition1;
    this.radius1 = radius1;
    this.postition2 = postition2;
    this.radius2 = radius2;
    this.colorPositions = colorPositions;
    this.colors = colors;
    this.velocity = velocity;
  }
  create() {
    let g = ctx.createRadialGradient(
      this.postition1.x,
      this.postition1.y,
      this.radius1,
      this.postition2.x,
      this.postition2.y,
      this.radius2
    );
    for (let i = 0; i < this.colors.length; i++) {
      g.addColorStop(this.colorPositions[i], this.colors[i]);
    }
    return g;
  }
  update() {
    this.create();
    this.postition1.x += this.velocity.x;
    this.postition2.x += this.velocity.x;
    this.postition1.y += this.velocity.y;
    this.postition2.y += this.velocity.y;
  }
}

class Circle {
  constructor(
    postition,
    radiusMax,
    color,
    isCircle,
    lineWidth,
    velocity,
    radiusGrowthRate
  ) {
    this.postition = postition;
    this.radiusMax = radiusMax;
    this.color = color;
    this.isCircle = isCircle;
    this.lineWidth = lineWidth;
    this.velocity = velocity;
    this.radiusGrowthRate = radiusGrowthRate;

    this.radius = 0;
  }
  draw() {
    ctx.beginPath();
    ctx.arc(
      this.postition.x,
      this.postition.y,
      this.radius,
      0,
      Math.PI * 2,
      true
    );
    if (this.isCircle) {
      if (this.color instanceof RadialGradient)
        ctx.fillStyle = this.color.create();
      else ctx.fillStyle = this.color;
      ctx.fill();
    } else {
      ctx.lineWidth = this.lineWidth;
      if (this.color instanceof RadialGradient)
        ctx.strokeStyle = this.color.create();
      else ctx.strokeStyle = this.color;
      ctx.stroke();
    }
  }
  update(timePassed = 1) {
    if (this.color instanceof RadialGradient) {
      this.color.update();
      this.postition.x += this.color.velocity.x * timePassed;
      this.postition.y += this.color.velocity.y * timePassed;
    } else {
      this.postition.x += this.velocity.x * timePassed;
      this.postition.y += this.velocity.y * timePassed;
    }
    if (this.radius < this.radiusMax) {
      this.radius += this.radiusGrowthRate;
    }
    this.draw();
  }
}

let bokehs = [];

let bokehPXMin;
let bokehPXMax;

let bokehPYMin;
let bokehPYMax;

let bokehRMin = parseFloat(document.querySelector("#inpBokehRadiusMin").value);
let bokehRMax = parseFloat(document.querySelector("#inpBokehRadiusMax").value);

// let bokehLineW = document.querySelector("#").value;

let bokehVXMin = parseFloat(document.querySelector("#inpBokehVXMin").value);
let bokehVXMax = parseFloat(document.querySelector("#inpBokehVXMax").value);

let bokehVYMin = parseFloat(document.querySelector("#inpBokehVYMin").value);
let bokehVYMax = parseFloat(document.querySelector("#inpBokehVYMax").value);

let bokehRGrowthRateMin = parseFloat(document.querySelector("#inpBokehGrowthRateMin").value);
let bokehRGrowthRateMax = parseFloat(document.querySelector("#inpBokehGrowthRateMax").value);

let bokehAlphaMin = parseFloat(document.querySelector("#inpBokehOpacityMin").value);
let bokehAlphaMax = parseFloat(document.querySelector("#inpBokehOpacityMax").value);

let bokehSpawnRate = parseInt(document.querySelector("#inpBokehSpawnRate").value);

let maxBokehs = parseInt(document.querySelector("#inpMaxBokeh").value);

const lineWidths = 5;

const colors = {
  r: {
    min: 0,
    max: 255
  },
  g: {
    min: 0,
    max: 255
  },
  b: {
    min: 0,
    max: 255
  },
  a: {
    min: 0,
    max: 0.5
  }
};

let colorPallete1 = [
  new Color(243, 180, 216),
  new Color(185, 161, 195),
  new Color(238, 240, 248),
  new Color(239, 240, 246),
  new Color(80, 174, 216),
  new Color(168, 203, 205),
  new Color(184, 160, 196),
  new Color(247, 231, 224)
];

//----Spawn Bokehs on the screen

let sbTimeout;

let spawnBoKeh = function() {
  bokehPXMin = 0;
  bokehPXMax = c.width;

  bokehPYMin = 0;
  bokehPYMax = c.height;

  bokehRMin = parseFloat(document.querySelector("#inpBokehRadiusMin").value);
  bokehRMax = parseFloat(document.querySelector("#inpBokehRadiusMax").value);

  // bokehLineW = document.querySelector("#").value;

  bokehVXMin = parseFloat(document.querySelector("#inpBokehVXMin").value);
  bokehVXMax = parseFloat(document.querySelector("#inpBokehVXMax").value);

  bokehVYMin = parseFloat(document.querySelector("#inpBokehVYMin").value);
  bokehVYMax = parseFloat(document.querySelector("#inpBokehVYMax").value);

  bokehRGrowthRateMin = parseFloat(document.querySelector("#inpBokehGrowthRateMin").value);
  bokehRGrowthRateMax = parseFloat(document.querySelector("#inpBokehGrowthRateMax").value);

  bokehAlphaMin = parseFloat(document.querySelector("#inpBokehOpacityMin").value);
  bokehAlphaMax = parseFloat(document.querySelector("#inpBokehOpacityMax").value);

  bokehSpawnRate = parseInt(document.querySelector("#inpBokehSpawnRate").value);

  maxBokehs = parseInt(document.querySelector("#inpMaxBokeh").value);

  //----Check if total bokeh on the screen is not reach full
    
  if (bokehs.length < maxBokehs) {
    // let pX = randomRangeFloat(positions.x.min, positions.x.max);
    // let pY = randomRangeFloat(positions.y.min, positions.y.max);
    let pX = randomRangeFloat(bokehPXMin, bokehPXMax);
    let pY = randomRangeFloat(bokehPYMin, bokehPYMax);

    let r = Math.abs(randomRangeFloat(bokehRMin, bokehRMax));

    let c = `rgba(${randomRangeInt(
      colors.r.min,
      colors.r.max
    )}, ${randomRangeInt(
      colors.g.min, 
      colors.g.max
    )}, ${randomRangeInt(
      colors.b.min,
      colors.b.max
    )}, ${randomRangeFloat(
      colors.a.min, 
      colors.a.max
    )})`;

    let vX = randomRangeFloat(bokehVXMin, bokehVXMax);
    let vY = randomRangeFloat(bokehVYMin, bokehVYMax);

    let rgr = randomRangeFloat(bokehRGrowthRateMin, bokehRGrowthRateMin);

    let c1 = colorPallete1[randomRangeInt(0, colorPallete1.length - 1)];

    let rg = new RadialGradient(
      {
        x: pX,
        y: pY
      },
      0.1,
      {
        x: pX,
        y: pY
      },
      r,
      [0, 1],
      [
        `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${randomRangeFloat(0.1, 1)})`,
        `rgba(${c1.r}, ${c1.g}, ${c1.b}, ${randomRangeFloat(0.1, 1)})`
      ],
      {
        x: vX,
        y: vY
      }
    );
    
    bokehs.push(
      new Circle(
        {
          x: pX,
          y: pY
        },
        r,
        rg,
        true,
        lineWidths,
        {
          x: vX,
          y: vY
        },
        rgr
      )
    );
  }
  sbTimeout = setTimeout(spawnBoKeh, bokehSpawnRate);
};

// let l = ctx.createLinearGradient(0, 0, 0, cv.height);
// l.addColorStop(0, `rgba(59, 165, 187)`);
// l.addColorStop(1, `rgba(213, 181, 194)`);