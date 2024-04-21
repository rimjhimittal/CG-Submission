class Experiment {
  // Group Details
  static rollNos = "102103430, 102103443";
  static names = "The Tutors(Rimjhim Mittal, Hrsh Dhingra)";

  canvasSel = "#myCanvas";

  run() {
    canvasSetup(this.canvasSel);

    const plane = new Plane(this.canvasSel);
    const cloud = new Cloud(this.canvasSel);
    // const baloon = new Baloon(this.canvasSel);
    // const cloud2 = new Cloud2(this.canvasSel);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // ctx.reset();
    // plane.draw();
    const planeRafFn = (ts) => {
      plane.draw(ts, ctx);
      // cloud.draw(ts);
      // cloud.update(ts);
      // window.requestAnimationFrame(cloudRafFn);
      window.requestAnimationFrame(planeRafFn);
    };

    // const baloonRafFn = (ts) => {
    //   baloon.draw(ts, ctx);
    //   // cloud.draw(ts);
    //   // cloud.update(ts);
    //   // window.requestAnimationFrame(cloudRafFn);
    //   window.requestAnimationFrame(baloonRafFn);
    // };

    const cloudRafFn = (ts) => {
      // plane.draw(ts);
      cloud.draw(ts, ctx);
      cloud.draw2(ts, ctx);
      cloud.draw3(ts, ctx);
      cloud.draw4(ts, ctx);
      cloud.draw5(ts, ctx);
      cloud.hot(ts, ctx);

      // cloud.update(ts);

      window.requestAnimationFrame(cloudRafFn);
    };

    // const cloud2RafFn = (ts) => {
    //   // plane.draw(ts);
    //   cloud2.draw(ts, ctx);

    //   // cloud.update(ts);

    //   window.requestAnimationFrame(cloud2RafFn);
    // };

    const cloudRaf = window.requestAnimationFrame(cloudRafFn);
    // const cloud2Raf = window.requestAnimationFrame(cloud2RafFn);
    // const baloonRaf = window.requestAnimationFrame(baloonRafFn);
    const planeRaf = window.requestAnimationFrame(planeRafFn);
  }
}
