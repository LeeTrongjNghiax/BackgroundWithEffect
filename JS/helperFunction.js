degrees_to_radians = degrees => degrees * (Math.PI/180);

randomRangeInt = (start, stop) =>
  Math.round(Math.random() * (stop - start) + start);

randomRangeFloat = (start, stop) =>
  Math.random() * (stop - start) + start;