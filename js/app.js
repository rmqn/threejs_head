import Sketch from "./module"

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let titles = [...document.querySelectorAll('h2')];

titles.forEach(title=>{
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      scrub: 1,
      toggleActions: 'restart pause reverse pause'
    },
    duration: 0.5,
    stagger: 0.07,
    scale: 2,
    autoAlpha: 0,
    rotation: 90
  })
})

let sketch = new Sketch({
  dom: document.getElementById("container")
});
console.log(sketch);
let o = {a:0};
gsap.to(o,{
  a:1,
  scrollTrigger:{
    trigger:'.wrap',
    // markers: true,
    start: "top top",
    end: "bottom bottom",
    snap: 1/(titles.length -1),
    onUpdate: (self)=>{

      sketch.scene.rotation.y = 2. * 3.14 * self.progress
    }
  }
})