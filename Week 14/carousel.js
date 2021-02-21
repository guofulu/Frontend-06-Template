import { Component } from "./framework";

export class Carousel extends Component {
    // 轮播图 旋转木马
    constructor() {
      super();
      this.attributes = Object.create(null);
    }
  
    setAttribute(name, value) {
      this.attributes[name] = value;
    }
    render() {
      this.root = document.createElement("div");
      this.root.classList.add("carousel");
      for (let record of this.attributes.src) {
        let child = document.createElement("div");
        child.style.backgroundImage = `url('${record}')`;
        this.root.appendChild(child);
      }
  
      let position = 0
  
      this.root.addEventListener("mousedown", downEvent => {
          let children = this.root.children;
          let startX = downEvent.clientX
          let move = moveEvent => {
              let x = moveEvent.clientX - startX
  
              let current = position - ((x - x % 500 )/ 500)
  
              for(let offect of [-1, 0, 1]){
                  let pos = current + offect
                  pos = (pos + children.length) % children.length
  
                  children[pos].style.transition = "none";
                  children[pos].style.transform = `translateX(${-pos * 500 + offect * 500 + x % 500}px)`
              }
              
          }
  
          let up = upEvent => {
              let x = upEvent.clientX - startX
              position = (position - Math.round(x / 500) + children.length) % children.length
   
              for(let offect of [ 0, - Math.sign(Math.round(x / 500) - x + 250 * Math.sign(x))]){
                  let pos = position + offect
                  pos = (pos + children.length) % children.length
  
                  children[pos].style.transition = "";
                  children[pos].style.transform = `translateX(${-pos * 500 + offect * 500}px)`
              }
  
              document.removeEventListener("mousemove", move)
              document.removeEventListener("mouseup", up)
          }
          document.addEventListener("mousemove", move)
      
          document.addEventListener("mouseup", up)
      })
  
  
      // let currentIndex = 0;
      // setInterval(() => {
      //   let children = this.root.children;
  
      //   let nextIndex = (currentIndex + 1) % children.length;
      //   let current = children[currentIndex];
      //   let next = children[nextIndex];
  
      //   next.style.transition = "none";
      //   next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
  
      //   setTimeout(() => {
      //     next.style.transition = "";
      //     current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
      //     next.style.transform = `translateX(${- nextIndex * 100}%)`;
      //     currentIndex = nextIndex;
      //   }, 16);
      // }, 3000);
  
      return this.root;
    }
    mountTo(parent) {
      parent.appendChild(this.render());
    }
  }