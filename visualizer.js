function main() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  class Bar {
    constructor(x, y, width, height, color, index) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.color = color;
      this.index = index;
    }

    update(micInut) {
      const sound = micInut * 1000 * 3;
      if (sound > this.height) {
        this.height = sound;
      } else {
        this.height -= this.height * 0.05;
      }
    }

    draw(context) {
      /* context.fillStyle = this.color;
      context.fillRect(this.x, this.y, this.width, this.height); */

      context.strokeStyle = this.color;
      context.save();

      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(this.index * 0.05);

      context.beginPath();
      context.moveTo(0, 0);
      context.lineTo(0, this.height);
      context.stroke();

      context.strokeRect(
        10 + this.index * 0.5,
        this.height,
        this.height / 3,
        this.height
      );

      context.restore();
    }
  }

  const microphone = new Microphone();
  let bars = [];
  let barWidth = canvas.width / 256;

  function createBars() {
    for (let i = 0; i < 256; i++) {
      let color = `hsl(${i * 2},100% , 50%)`;
      bars.push(new Bar(i * barWidth, canvas.height / 2, 1, 100, color, i));
    }
  }

  createBars();

  function animate() {
    if (microphone.initialized) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const samples = microphone.getSamples();
      bars.forEach(function (bar, i) {
        bar.update(samples[i]);
        bar.draw(ctx);
      });
    }

    requestAnimationFrame(animate);
  }
  animate();
}
