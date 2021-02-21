import { Component, STATE, ATTRIBUTE } from "./framework";
import { enableGesture, Dispatcher } from './gesture';
import { Timeline, Animation } from './animation';
import { ease } from './ease.js';

export { STATE, ATTRIBUTE } from "./framework";



export class Carousel extends Component {
    // 轮播图 旋转木马
    constructor() {
      super();
    }

    render() {
      this.root = document.createElement("div");
      this.root.classList.add("carousel");
      for (let record of this[ATTRIBUTE].src) {
        let child = document.createElement("div");
        child.style.backgroundImage = `url('${record.img}')`;
        this.root.appendChild(child);
      }

      enableGesture(this.root)

      let timeline = new Timeline;
      timeline.start()

      let handler = null;
  
      let children = this.root.children;
      this.triggerEvent("Change", { position: 0})
      this[STATE].position = 0

      let t = 0
      let ax = 0

      this.root.addEventListener('start', event => {
        timeline.pause();
        clearInterval(handler)
        let progress = (Date.now() - t) / 500;
        console.log('start-progress', progress)
        ax = ease(progress) * 500 - 500
        console.log('start-position',this[STATE].position)
      })

      this.root.addEventListener('tap', event => {
          this.triggerEvent("click", { position: this[STATE].position, data: this[ATTRIBUTE].src[this[STATE].position] })
      })

      this.root.addEventListener('pan', (event) => {
        let x = event.clientX - event.startX - ax
        let current = this[STATE].position - ((x - x % 500 )/ 500)

        for(let offect of [-1, 0, 1]){
          let pos = current + offect
          pos = (pos % children.length + children.length) % children.length

          children[pos].style.transition = "none";
          children[pos].style.transform = `translateX(${-pos * 500 + offect * 500 + x % 500}px)`
        }
      })

      this.root.addEventListener('end', event => {

        timeline.reset();
        timeline.start();
        handler = setInterval(nextPicture, 3000);

        let x = event.clientX - event.startX - ax
        let current = this[STATE].position - ((x - x % 500 )/ 500)

        let direction = Math.round((x % 500) / 500)

        if (event.isFlick){
          console.log(event.velocity)
          if (event.velocity < 0){
            direction = Math.ceil((x % 500) / 500)
          } else {
            direction = Math.floor((x % 500) / 500)
          }
        }

        for(let offect of [-1, 0, 1]){
          let pos = current + offect
          pos = (pos % children.length + children.length) % children.length

          children[pos].style.transition = "none";
          timeline.add(new Animation(children[pos].style, 'transform', 
              -pos * 500 + offect * 500 + x % 500,
              -pos * 500 + offect * 500 + direction * 500,
              500, 0, ease, v => `translateX(${v}px)`))
        }

        this[STATE].position = this[STATE].position - ((x - x % 500 )/ 500) - direction
        this[STATE].position = (this[STATE].position % children.length + children.length) % children.length
        this.triggerEvent("change", { position: this[STATE].position})
        
        console.log('end-position',this[STATE].position )
        console.log('end-ax',ax )
      })

      let nextPicture = () => {
        let children = this.root.children;

        t = Date.now()
        console.log('nextPicture-t', t)
  
        let nextIndex = (this[STATE].position + 1) % children.length;
        let current = children[this[STATE].position];
        let next = children[nextIndex];

        timeline.add(new Animation(current.style, 'transform', - this[STATE].position * 500, -500 - this[STATE].position * 500, 500, 0, ease, v => `translateX(${v}px)`))
        timeline.add(new Animation(next.style, 'transform', 500 - nextIndex * 500,  - nextIndex * 500, 500, 0, ease, v => `translateX(${v}px)`))
  
        this[STATE].position = nextIndex
        this.triggerEvent("change", { position: this[STATE].position})
      }

      handler = setInterval(nextPicture, 3000);
      /*
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
  
  
      let currentIndex = 0;
      setInterval(() => {
        let children = this.root.children;
  
        let nextIndex = (currentIndex + 1) % children.length;
        let current = children[currentIndex];
        let next = children[nextIndex];
  
        next.style.transition = "none";
        next.style.transform = `translateX(${100 - nextIndex * 100}%)`;
  
        setTimeout(() => {
          next.style.transition = "";
          current.style.transform = `translateX(${-100 - currentIndex * 100}%)`;
          next.style.transform = `translateX(${- nextIndex * 100}%)`;
          currentIndex = nextIndex;
        }, 16);
      }, 3000);
       */
  
      return this.root;
    }
  }