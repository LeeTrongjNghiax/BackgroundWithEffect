let bgImages = [
  // 'url("https://i.pinimg.com/originals/27/e7/5e/27e75ed5183f76133dfc78e49af68eb4.jpg")',
  // 'url("https://wallpaper.dog/large/11026305.jpg")',
  // 'url("https://www.discoverlosangeles.com/sites/default/files/images/2019-04/Ascot%20Hills%20Park%20sunset.jpg?width=2600&fit=bound&quality=72&auto=webp")',
  // 'url("https://wallpaperaccess.com/full/2334798.jpg")',
  // 'url("https://wallpaperaccess.com/full/1217264.jpg")',
  // 'url("https://wallpaperaccess.com/full/2334797.jpg")',
  // 'url("https://wallpaperaccess.com/full/811038.jpg")',
  // 'url("https://wallpaperaccess.com/full/1217231.jpg")',
  // 'url("https://wallpaperaccess.com/full/1217368.jpg")',
  // 'url("https://wallpaperaccess.com/full/1217181.jpg")',
  // 'url("https://wallpaperaccess.com/full/2334800.jpg")',
  // 'url("https://wallpaperaccess.com/full/2334799.jpg")',
  // 'url("https://wallpaperaccess.com/full/3314510.jpg")',
  // 'url("https://preview.redd.it/ytkkbowirm061.jpg?width=640&crop=smart&auto=webp&s=e340d282d6866b4020185ab7e7db295ddecde16d")',
  // 'url("https://preview.redd.it/7288ennxkpf61.png?width=640&crop=smart&auto=webp&s=bc1e38382b1b6ff09acec737c3443bcf5c8298b1")',
  // 'url("https://images2.alphacoders.com/120/1209425.png")',
  // 'url("https://preview.redd.it/m23bwh4n0x151.png?width=640&crop=smart&auto=webp&s=bb46c7e120ffea715127547e156abd54a3d11457")',
  // 'url("https://images.wallpapersden.com/image/download/4k-beautiful-landscape-digital-art_bGhuZm6UmZqaraWkpJRobWllrWdma2U.jpg",)',
  // 'url("https://i.pinimg.com/originals/ca/54/62/ca5462afe308041935434a7b654fa364.jpg")',
  // 'url("https://c.wallhere.com/photos/f4/a5/Minecraft_shaders-1842045.jpg!d")',
  // 'url("https://hdwallpaperim.com/wp-content/uploads/2017/08/23/460202-Minecraft-shaders.jpg")',
  // 'url("https://wallpaperaccess.com/full/349967.jpg")',
  // 'url("https://images7.alphacoders.com/602/thumb-1920-602229.jpg")',
  'url("https://images.hdqwalls.com/wallpapers/beautiful-beach-sunset-4k-5r.jpg")'
];

let cbTimeout;

let changeBg = function() {
  document.querySelector("body").style.backgroundImage = bgImages[ randomRangeInt(0, bgImages.length - 1) ];
  cbTimeout = setTimeout(changeBg, parseInt(document.querySelector("#inpDelay").value) * 1000);
}