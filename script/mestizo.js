  speed = 0.2
  const canvas = document.getElementById('hydra-canvas1');
  const hydra = new Hydra({
    canvas: canvas,
    width: canvas.width,
    height: canvas.height
  });
  
      shape(3).repeat(4, 4, 0.0, 0.0).scroll(0,1,0,-6)
      .mult(noise(6,0.4,()=>Math.sin(time)*4)).modulatePixelate(osc(100,6,10),50)
      .color([1,0,1],[0,1,1],[1,1,0])
      .colorama([0.725,0.555, 0.857],[0.125,0.700,0.500],[0.712,0.555,0.355])
      .hue(() => Math.sin(time)*3)
      .add(o0,0.08)
      //.scrollX(0.5,0.1)
      //.scrollY(0.2,0.5)
      .luma(0,1)
      .out()
      speed = 0.2

const canvas2 = document.getElementById('hydra-canvas2')
const hydra2 = new Hydra({
    canvas: canvas2,
    width: canvas2.width,
    height: canvas2.height
  });
        gradient(1)
      .diff(noise(1,0.1,()=>Math.sin(time)*3)).modulatePixelate(voronoi(60,4,10),50)
      .color([1,0,1],[0,1,1],[1,1,0])
      .colorama([0.725,0.555, 0.857],[0.125,0.700,0.500],[0.712,0.555,0.355])
      .hue(() => Math.sin(time)*3)
      .add(o0,0.08)
      //.scrollX(0.5,0.1)
      //.scrollY(0.2,0.5)
      //.luma(0,1)
      .out()
      speed = 0.2

const canvas3 = document.getElementById('hydra-canvas3')
const hydra3 = new Hydra({
    canvas: canvas3,
    width: canvas3.width,
    height: canvas3.height,
    detectAudio: true
  });

      speed = 0.2
      a.setBins(18)
      voronoi(10,1,50)
      .mult(noise(3,0.1,()=>a.fft[4]*2).saturate(3).kaleid(200).rotate(10,10))
      .color([1,0,1],[0,1,1],[1,1,0])
      .colorama([0.725,0.555, 0.857],[0.125,0.700,0.500],[0.712,0.555,0.355])
      .modulate(o0,0.8)
      .add(o0,0.6)
      .scrollX (0.003)
      .scale(0.99)
      .modulate(voronoi(8,1), 0.08)
      .luma (0.3)
      .out()
   
      speed = 0.6
const canvas4 = document.getElementById('hydra-canvas4')
const hydra4 = new Hydra({
    canvas: canvas4,
    width: canvas4.width,
    height: canvas4.height,
    detectAudio: true
  });
    shape(999). repeat(8,8)
    .scroll(2,2,0.1,0.1)
    .modulatePixelate(noise(200),()=>a.fft[0])
    .out(o0)

const canvas5 = document.getElementById('hydra-canvas5')
 const hydra5 = new Hydra({
    canvas: canvas5,
    width: canvas5.width,
    height: canvas5.height,
    detectAudio: true
  });
    shape(2)
    .mult(noise(5,1,()=> Math.sin(time)*3).saturate(3).modulateKaleid(voronoi(2,0.2,10),50).rotate(10,10))
    .color([1,0,1],[0,1,1],[1,1,0])
    .colorama([0.725,0.555, 0.857],[0.125,0.700,0.500],[0.712,0.555,0.355])
    .modulate(o0,0.08)
    .add(o0,0.4)
    .scrollY(-0.02)
    .scale(0.99)
    .modulate(voronoi(8,1), 0.08)
    .luma (0.4)
    .out();

const canvas6 = document.getElementById('hydra-canvas6')
  const hydra6 = new Hydra({
    canvas: canvas6,
    width: canvas6.width,
    height: canvas6.height,
    detectAudio: true
  });
    osc(20,0.2,20)
    .mult(voronoi(1,0.1,()=>Math.sin(time)*3)).modulatePixelate(noise(50,2,20),50)
    .color([1,0,1],[0,1,1],[1,1,0])
    .colorama([0.725,0.555, 0.857],[0.125,0.700,0.500],[0.712,0.555,0.355])
    .hue(() => Math.sin(time)*3)
    .add(o0,0.08)
    //.scrollX(0.5,0.1)
    //.scrollY(0.2,0.5)
    //.luma(0,1)
      .out();

const canvas7 = document.getElementById('hydra-canvas7')
const hydra7 = new Hydra({
  canvas: canvas7,
  width: canvas7.width,
  height: canvas7.height,
  detectAudio: true
});
  a.setBins(18)
  //bpm = 60
  shape(999,1)
  .mult(osc(10,0.1,()=>Math.cos(time)*6).saturate(3).kaleid(200))
  .modulate(o0,0.5)
  .add(o0,0.6)
  .scrollY (-0.1)
  .scale(0.99)
  .modulate(voronoi(8,1), 0.08)
  .luma (0.3)
  .out()     
  speed = 0.6;

const canvas8 = document.getElementById('hydra-canvas8')
const hydra8 = new Hydra({
  canvas: canvas8,
  width: canvas8.width,
  height: canvas8.height,
  detectAudio: true
});
  osc(10,0.5,20)
  .mult(osc(10,0.1,()=>Math.sin(time)*3).saturate(3).kaleid(200))
  .hue(() => Math.sin(time) * 5)
  .add(o0,0.8)
  .scrollX (-0.01)
  .scale(0.99)
  .modulate(shape(99), 0.008)
    .luma (0.4)
  .out();

const canvas10 = document.getElementById('hydra-canvas10')
  const hydra10 = new Hydra({
    canvas: canvas10,
    width: canvas10.width,
    height: canvas10.height,
    detectAudio: true
  });

  a.setBins(5)
voronoi(20,2,2).
color([1,0,0,1,0],[0,1,0,1,0],[0,0,1,1,0]).
colorama([0.5,0.3,0.66,1.0].fast(0.0125)).
hue(() => Math.sin(time)).
modulatePixelate(noise(500),()=>a.fft[2]*3).
modulateScale(voronoi(700,2,2)).
luma(0.5).
out();

const canvas11 = document.getElementById('hydra-canvas11')
  const hydra11 = new Hydra({
    canvas: canvas11,
    width: canvas11.width,
    height: canvas11.height,
    detectAudio: true
  });

  a.setBins(8)
  voronoi(10,2,2).
  hue(() => Math.sin(time)).
  modulatePixelate(noise(500),()=>a.fft[7]*3).
  out();

  speed = 0.2