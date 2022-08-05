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

document.querySelector("#dropEffectValue > a:nth-child(1)").addEventListener("click", () => {
  clearTimeout(sbTimeout);
  clearTimeout(srTimeout);
  clearTimeout(snTimeout);
  bokehs = [];
  rains = [];
  snows = [];
  document.querySelector("#bokehSetting").style.display = "none";
  document.querySelector("#rainSetting").style.display = "none";
  document.querySelector("#snowSetting").style.display = "none";
})

document.querySelector("#dropEffectValue > a:nth-child(2)").addEventListener("click", () => {
  spawnBoKeh();
  document.querySelector("#bokehSetting").style.display = "block";
  clearTimeout(srTimeout);
  clearTimeout(snTimeout);
  rains = [];
  snows = [];
  document.querySelector("#rainSetting").style.display = "none";
  document.querySelector("#snowSetting").style.display = "none";
})

document.querySelector("#dropEffectValue > a:nth-child(3)").addEventListener("click", () => {
  spawnRain();
  document.querySelector("#rainSetting").style.display = "block";

  clearTimeout(sbTimeout);
  clearTimeout(snTimeout);
  bokehs = [];
  snows = [];
  document.querySelector("#bokehSetting").style.display = "none";
  document.querySelector("#snowSetting").style.display = "none";
})

document.querySelector("#dropEffectValue > a:nth-child(4)").addEventListener("click", () => {
  spawnSnow();
  document.querySelector("#snowSetting").style.display = "block";

  clearTimeout(sbTimeout);
  clearTimeout(srTimeout);
  bokehs = [];
  rains = [];
  document.querySelector("#bokehSetting").style.display = "none";
  document.querySelector("#rainSetting").style.display = "none";
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