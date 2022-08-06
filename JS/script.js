let t = Date.now();
let rafid;

loop = () => {
  rafid = requestAnimationFrame(loop);

  c.width = innerWidth * 2;
  c.height = innerHeight;

  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
  ctx.fillRect(0, 0, c.width, c.height);

  let timePassed = (Date.now() - t) / 1000;
  t = Date.now();

  //Delete rains when out of screen

  rains.forEach((rain, i) => {
    rain.update(timePassed);

    if (rain.position.x + Math.cos(rain.angle) * rain.length <= 0 ||
        rain.position.x + Math.cos(rain.angle) * rain.length <= 0 >= c.width ||
        rain.position.y + Math.sin(rain.angle) * rain.length >= c.height) {
      rains.splice(i, 1);
    }
  });

  snows.forEach((snow, i) => {
    snow.update(timePassed);

    if (snow.position.x >= c.width ||
        snow.position.x <= 0 ||
        snow.position.y + snow.radius >= c.height) {
      snows.splice(i, 1);
    }
  })

  bokehs.forEach((bokeh, i) => {
    bokeh.update();
    if (
      bokeh.postition.x + bokeh.radius < -c.width ||
      bokeh.postition.x - bokeh.radius > c.width * 2 ||
      bokeh.postition.y + bokeh.radius < -c.height ||
      bokeh.postition.y - bokeh.radius > c.height * 2
    ) {
      bokehs.splice(i, 1);
    }
  });
  
  document.querySelector("#fps").innerHTML = Math.round(1 / timePassed);
}

loop();