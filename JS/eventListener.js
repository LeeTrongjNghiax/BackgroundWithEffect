document.querySelector("#toggleBg").addEventListener("click", () => {
  currentvalue = document.querySelector("#toggleBg").value;
  if (currentvalue == "off"){
    document.querySelector("#toggleBg").value="on";
    changeBg();
    document.querySelector("#backgroundSettings").style.display = "block";
  } else {
    document.querySelector("#toggleBg").value="off";
    clearTimeout(cbTimeout);
    document.querySelector("#backgroundSettings").style.display = "none";
    document.querySelector("body").style.backgroundImage = "";
  }
})

document.querySelector("#btnImportBackground").addEventListener("click", () => {
  if (!bgImages.includes(document.querySelector("#inpBackground").value)) {
    bgImages.push(`url("${document.querySelector("#inpBackground").value}")`);
    document.querySelector("#inpBackground").value = "";
  }
})

document.querySelector("#inpTime").addEventListener("change", () => {
  console.log(`background-image ${document.querySelector("#inpTime").value}s;`);
  document.querySelector("body").style.transition = `background-image ${document.querySelector("#inpTime").value}s;`;
})

document.querySelector("#inpAnimation").addEventListener("click", () => {
  if (document.querySelector("#inpAnimation").value == "stop") {
    document.querySelector("#inpAnimation").value = "start";
    cancelAnimationFrame(rafid);
  } else {
    document.querySelector("#inpAnimation").value = "stop";
    loop();
  }
})

document.querySelectorAll("input[name=effect]")[0].addEventListener("change", () => {
  if (document.querySelectorAll("input[name=effect]")[0].checked) {
    spawnBoKeh();
    document.querySelector("#bokehSetting").style.display = "block";
  } else {
    bokehs = [];
    clearTimeout(sbTimeout);
    document.querySelector("#bokehSetting").style.display = "none";
  }
})

document.querySelectorAll("input[name=effect]")[1].addEventListener("change", () => {
  if (document.querySelectorAll("input[name=effect]")[1].checked) {
    spawnRain();
    document.querySelector("#rainSetting").style.display = "block";
  } else {
    rains = [];
    clearTimeout(srTimeout);
    document.querySelector("#rainSetting").style.display = "none";
  }
})

document.querySelectorAll("input[name=effect]")[2].addEventListener("change", () => {
  if (document.querySelectorAll("input[name=effect]")[2].checked) {
    spawnSnow();
    document.querySelector("#snowSetting").style.display = "block";
  } else {
    snows = [];
    clearTimeout(snTimeout);
    document.querySelector("#snowSetting").style.display = "none";
  }
})

document.querySelector("#clearBokehs").addEventListener("click", () => bokehs = []);
document.querySelector("#clearRains").addEventListener("click", () => rains = []);
document.querySelector("#clearSnows").addEventListener("click", () => snows = []);

document.querySelector("#btnUpdateSnowP").addEventListener("click", () => {
  snows.forEach((snow, i) => {
    snow.position.x += parseFloat(document.querySelector("#inpUpdateAllSnowPX").value);
    snow.position.y += parseFloat(document.querySelector("#inpUpdateAllSnowPY").value);
  })
})