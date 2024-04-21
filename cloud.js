class Cloud extends Domel {
  constructor(canvasId) {
    super(canvasId);

    this.width = this.el.width;
    this.height = this.el.height;
    this.y = this.height; // Initial y position
    this.speed = 2; // Speed of the plane
    this.direction = 1; // 1 for down, -1 for up
    console.log(this.width, this.height);
    this.x = this.width;
  }
  draw(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");

    this.x -= this.speed;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    ctx.reset();

    // ctx.translate(0, 100);
    ctx.save();

    // ctx.reset();

    const scaleFactor = 0.5;
    ctx.scale(scaleFactor, scaleFactor);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path2
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path3
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      76.449219 + this.x,
      360.082031,
      74.890625 + this.x,
      364.507812,
      74.066406 + this.x,
      369.277344
    );
    ctx.bezierCurveTo(
      48.414062 + this.x,
      369.355469,
      26.40625 + this.x,
      379.25,
      15.046875 + this.x,
      393.597656
    );
    ctx.bezierCurveTo(
      20.507812 + this.x,
      372.546875,
      46.628906 + this.x,
      356.230469,
      78.628906 + this.x,
      356.019531
    );
    ctx.fill();

    // #path4
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(415.988281 + this.x, 385.433594);
    ctx.bezierCurveTo(
      400.105469 + this.x,
      364.542969,
      365.785156 + this.x,
      354.945312,
      334.203125 + this.x,
      361.128906
    );
    ctx.bezierCurveTo(
      321.78125 + this.x,
      327.5625,
      272.269531 + this.x,
      312.90625,
      235.257812 + this.x,
      331.523438
    );
    ctx.bezierCurveTo(
      218.046875 + this.x,
      286.230469,
      166.617188 + this.x,
      288.019531,
      151.40625 + this.x,
      334.40625
    );
    ctx.bezierCurveTo(
      124.402344 + this.x,
      321.746094,
      91.96875 + this.x,
      332.199219,
      79.09375 + this.x,
      355.183594
    );
    ctx.bezierCurveTo(
      85.054688 + this.x,
      323.871094,
      122.953125 + this.x,
      307.085938,
      153.632812 + this.x,
      321.730469
    );
    ctx.bezierCurveTo(
      168.324219 + this.x,
      276.117188,
      217.984375 + this.x,
      274.363281,
      234.597656 + this.x,
      318.898438
    );
    ctx.bezierCurveTo(
      270.332031 + this.x,
      300.597656,
      318.140625 + this.x,
      315.015625,
      330.144531 + this.x,
      348.0
    );
    ctx.bezierCurveTo(
      366.703125 + this.x,
      340.734375,
      407.0625 + this.x,
      355.730469,
      415.988281 + this.x,
      385.433594
    );
    ctx.fill();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(79.09375 + this.x, 355.183594);
    ctx.bezierCurveTo(
      79.027344 + this.x,
      355.460938,
      78.980469 + this.x,
      355.730469,
      78.933594 + this.x,
      356.019531
    );
    ctx.lineTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      78.773438 + this.x,
      355.730469,
      78.933594 + this.x,
      355.460938,
      79.09375 + this.x,
      355.183594
    );
    ctx.fill();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(320.621094 + this.x, 445.507812);
    ctx.bezierCurveTo(
      309.519531 + this.x,
      480.683594,
      244.421875 + this.x,
      488.714844,
      217.402344 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      182.152344 + this.x,
      488.773438,
      108.484375 + this.x,
      480.792969,
      90.148438 + this.x,
      444.960938
    );
    ctx.bezierCurveTo(
      46.65625 + this.x,
      451.410156,
      6.242188 + this.x,
      424.996094,
      15.238281 + this.x,
      392.90625
    );
    ctx.bezierCurveTo(
      22.007812 + this.x,
      416.488281,
      55.355469 + this.x,
      432.402344,
      90.148438 + this.x,
      427.246094
    );
    ctx.bezierCurveTo(
      99.71875 + this.x,
      445.945312,
      126.980469 + this.x,
      459.425781,
      159.125 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      182.988281 + this.x,
      459.425781,
      204.5 + this.x,
      438.40625,
      217.742188 + this.x,
      426.941406
    );
    ctx.bezierCurveTo(
      227.8125 + this.x,
      438.292969,
      245.167969 + this.x,
      459.425781,
      265.324219 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      292.3125 + this.x,
      459.425781,
      314.902344 + this.x,
      445.910156,
      320.621094 + this.x,
      427.789062
    );
    ctx.bezierCurveTo(
      359.957031 + this.x,
      440.4375,
      409.703125 + this.x,
      424.40625,
      416.925781 + this.x,
      389.121094
    );
    ctx.bezierCurveTo(
      426.226562 + this.x,
      434.582031,
      367.640625 + this.x,
      460.628906,
      320.621094 + this.x,
      445.507812
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(381.421875 + this.x, 427.042969);
    ctx.bezierCurveTo(
      353.882812 + this.x,
      450.460938,
      316.480469 + this.x,
      441.039062,
      303.25 + this.x,
      407.570312
    );
    ctx.bezierCurveTo(
      323.871094 + this.x,
      427.429688,
      353.886719 + this.x,
      434.90625,
      381.421875 + this.x,
      427.042969
    );
    ctx.fill();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(117.867188 + this.x, 415.21875);
    ctx.bezierCurveTo(
      98.132812 + this.x,
      445.496094,
      59.59375 + this.x,
      447.09375,
      37.386719 + this.x,
      418.769531
    );
    ctx.bezierCurveTo(
      62.804688 + this.x,
      431.945312,
      93.710938 + this.x,
      430.585938,
      117.867188 + this.x,
      415.21875
    );
    ctx.fill();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(259.222656 + this.x, 411.886719);
    ctx.bezierCurveTo(
      239.484375 + this.x,
      442.171875,
      200.949219 + this.x,
      443.765625,
      178.738281 + this.x,
      415.445312
    );
    ctx.bezierCurveTo(
      204.15625 + this.x,
      428.621094,
      235.0625 + this.x,
      427.257812,
      259.222656 + this.x,
      411.886719
    );
    ctx.fill();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(128.253906 + this.x, 383.539062);
    ctx.bezierCurveTo(
      147.992188 + this.x,
      353.257812,
      186.53125 + this.x,
      351.660156,
      208.738281 + this.x,
      379.984375
    );
    ctx.bezierCurveTo(
      183.324219 + this.x,
      366.808594,
      152.417969 + this.x,
      368.171875,
      128.253906 + this.x,
      383.539062
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(315.699219 + this.x, 371.640625);
    ctx.bezierCurveTo(
      335.4375 + this.x,
      341.359375,
      373.976562 + this.x,
      339.761719,
      396.183594 + this.x,
      368.085938
    );
    ctx.bezierCurveTo(
      370.765625 + this.x,
      354.910156,
      339.859375 + this.x,
      356.273438,
      315.699219 + this.x,
      371.640625
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(226.257812 + this.x, 341.4375);
    ctx.bezierCurveTo(
      243.699219 + this.x,
      309.777344,
      282.011719 + this.x,
      305.335938,
      306.257812 + this.x,
      331.9375
    );
    ctx.bezierCurveTo(
      279.933594 + this.x,
      320.679688,
      249.214844 + this.x,
      324.324219,
      226.257812 + this.x,
      341.4375
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(83.132812 + this.x, 344.152344);
    ctx.bezierCurveTo(
      102.578125 + this.x,
      313.679688,
      141.097656 + this.x,
      311.707031,
      163.582031 + this.x,
      339.8125
    );
    ctx.bezierCurveTo(
      138.035156 + this.x,
      326.886719,
      107.144531 + this.x,
      328.550781,
      83.132812 + this.x,
      344.152344
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      298.113281 + this.x,
      315.480469,
      295.828125 + this.x,
      321.96875,
      294.628906 + this.x,
      328.957031
    );
    ctx.bezierCurveTo(
      257.113281 + this.x,
      329.070312,
      224.921875 + this.x,
      343.5625,
      208.308594 + this.x,
      364.585938
    );
    ctx.bezierCurveTo(
      216.296875 + this.x,
      333.746094,
      254.5 + this.x,
      309.84375,
      301.296875 + this.x,
      309.535156
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(794.691406 + this.x, 352.625);
    ctx.bezierCurveTo(
      771.457031 + this.x,
      322.015625,
      721.269531 + this.x,
      307.953125,
      675.078125 + this.x,
      317.015625
    );
    ctx.bezierCurveTo(
      656.910156 + this.x,
      267.839844,
      584.5 + this.x,
      246.367188,
      530.371094 + this.x,
      273.644531
    );
    ctx.bezierCurveTo(
      505.203125 + this.x,
      207.289062,
      429.984375 + this.x,
      209.910156,
      407.734375 + this.x,
      277.867188
    );
    ctx.bezierCurveTo(
      368.242188 + this.x,
      259.320312,
      320.808594 + this.x,
      274.632812,
      301.980469 + this.x,
      308.308594
    );
    ctx.bezierCurveTo(
      310.699219 + this.x,
      262.433594,
      366.121094 + this.x,
      237.84375,
      410.992188 + this.x,
      259.296875
    );
    ctx.bezierCurveTo(
      432.480469 + this.x,
      192.46875,
      505.109375 + this.x,
      189.902344,
      529.402344 + this.x,
      255.144531
    );
    ctx.bezierCurveTo(
      581.667969 + this.x,
      228.339844,
      651.585938 + this.x,
      249.457031,
      669.144531 + this.x,
      297.785156
    );
    ctx.bezierCurveTo(
      722.609375 + this.x,
      287.140625,
      781.636719 + this.x,
      309.109375,
      794.691406 + this.x,
      352.625
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(301.980469 + this.x, 308.308594);
    ctx.bezierCurveTo(
      301.882812 + this.x,
      308.710938,
      301.8125 + this.x,
      309.109375,
      301.742188 + this.x,
      309.535156
    );
    ctx.lineTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      301.507812 + this.x,
      309.109375,
      301.742188 + this.x,
      308.710938,
      301.980469 + this.x,
      308.308594
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(655.214844 + this.x, 440.636719);
    ctx.bezierCurveTo(
      638.976562 + this.x,
      492.167969,
      543.769531 + this.x,
      503.933594,
      504.253906 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      452.703125 + this.x,
      504.019531,
      344.964844 + this.x,
      492.324219,
      318.144531 + this.x,
      439.832031
    );
    ctx.bezierCurveTo(
      254.539062 + this.x,
      449.28125,
      195.433594 + this.x,
      410.585938,
      208.59375 + this.x,
      363.574219
    );
    ctx.bezierCurveTo(
      218.488281 + this.x,
      398.117188,
      267.261719 + this.x,
      421.433594,
      318.144531 + this.x,
      413.878906
    );
    ctx.bezierCurveTo(
      332.144531 + this.x,
      441.273438,
      372.011719 + this.x,
      461.023438,
      419.023438 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      453.925781 + this.x,
      461.023438,
      485.386719 + this.x,
      430.230469,
      504.753906 + this.x,
      413.433594
    );
    ctx.bezierCurveTo(
      519.484375 + this.x,
      430.0625,

      544.863281 + this.x,
      461.023438,
      574.339844 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      613.8125 + this.x,
      461.023438,
      646.851562 + this.x,
      441.226562,
      655.214844 + this.x,
      414.679688
    );
    ctx.bezierCurveTo(
      712.742188 + this.x,
      433.210938,
      785.496094 + this.x,
      409.722656,
      796.058594 + this.x,
      358.027344
    );
    ctx.bezierCurveTo(
      809.664062 + this.x,
      424.625,
      723.980469 + this.x,
      462.785156,
      655.214844 + this.x,
      440.636719
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(744.132812 + this.x, 413.585938);
    ctx.bezierCurveTo(
      703.859375 + this.x,
      447.890625,
      649.160156 + this.x,
      434.089844,
      629.808594 + this.x,
      385.058594
    );
    ctx.bezierCurveTo(
      659.964844 + this.x,
      414.152344,
      703.867188 + this.x,
      425.105469,
      744.132812 + this.x,
      413.585938
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(358.6875 + this.x, 396.257812);
    ctx.bezierCurveTo(
      329.824219 + this.x,
      440.617188,
      273.460938 + this.x,
      442.957031,
      240.984375 + this.x,
      401.460938
    );
    ctx.bezierCurveTo(
      278.15625 + this.x,
      420.761719,
      323.355469 + this.x,
      418.769531,
      358.6875 + this.x,
      396.257812
    );
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(565.417969 + this.x, 391.382812);
    ctx.bezierCurveTo(
      536.546875 + this.x,
      435.746094,
      480.191406 + this.x,
      438.085938,
      447.707031 + this.x,
      396.589844
    );
    ctx.bezierCurveTo(
      484.882812 + this.x,
      415.890625,
      530.082031 + this.x,
      413.894531,
      565.417969 + this.x,
      391.382812
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(373.878906 + this.x, 349.847656);
    ctx.bezierCurveTo(
      402.746094 + this.x,
      305.484375,
      459.109375 + this.x,
      303.144531,
      491.585938 + this.x,
      344.640625
    );
    ctx.bezierCurveTo(
      454.414062 + this.x,
      325.335938,
      409.214844 + this.x,
      327.335938,
      373.878906 + this.x,
      349.847656
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(648.015625 + this.x, 332.417969);
    ctx.bezierCurveTo(
      676.882812 + this.x,
      288.054688,
      733.246094 + this.x,
      285.714844,
      765.722656 + this.x,
      327.207031
    );
    ctx.bezierCurveTo(
      728.550781 + this.x,
      307.90625,
      683.351562 + this.x,
      309.902344,
      648.015625 + this.x,
      332.417969
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(517.207031 + this.x, 288.167969);
    ctx.bezierCurveTo(
      542.71875 + this.x,
      241.785156,
      598.75 + this.x,
      235.277344,
      634.203125 + this.x,
      274.253906
    );
    ctx.bezierCurveTo(
      595.710938 + this.x,
      257.757812,
      550.78125 + this.x,
      263.097656,
      517.207031 + this.x,
      288.167969
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(307.890625 + this.x, 292.144531);
    ctx.bezierCurveTo(
      336.324219 + this.x,
      247.503906,
      392.660156 + this.x,
      244.609375,
      425.546875 + this.x,
      285.789062
    );
    ctx.bezierCurveTo(
      388.183594 + this.x,
      266.851562,
      343.003906 + this.x,
      269.289062,
      307.890625 + this.x,
      292.144531
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,
      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,

      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path29
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      589.199219 + this.x,
      431.851562,
      591.484375 + this.x,
      438.339844,
      592.683594 + this.x,
      445.328125
    );
    ctx.bezierCurveTo(
      630.199219 + this.x,
      445.441406,
      662.390625 + this.x,
      459.933594,
      679.003906 + this.x,
      480.957031
    );
    ctx.bezierCurveTo(
      671.015625 + this.x,
      450.117188,
      632.8125 + this.x,
      426.214844,
      586.015625 + this.x,
      425.902344
    );
    ctx.fill();

    // #path30
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(92.621094 + this.x, 468.996094);
    ctx.bezierCurveTo(
      115.855469 + this.x,
      438.386719,
      166.042969 + this.x,
      424.324219,
      212.234375 + this.x,
      433.386719
    );
    ctx.bezierCurveTo(
      230.402344 + this.x,
      384.210938,
      302.8125 + this.x,
      362.738281,
      356.941406 + this.x,
      390.015625
    );
    ctx.bezierCurveTo(
      382.113281 + this.x,
      323.660156,
      457.328125 + this.x,
      326.28125,
      479.578125 + this.x,
      394.238281
    );
    ctx.bezierCurveTo(
      519.070312 + this.x,
      375.691406,
      566.503906 + this.x,
      391.003906,
      585.332031 + this.x,
      424.679688
    );
    ctx.bezierCurveTo(
      576.613281 + this.x,
      378.804688,
      521.191406 + this.x,
      354.214844,
      476.320312 + this.x,
      375.667969
    );
    ctx.bezierCurveTo(
      454.832031 + this.x,
      308.839844,
      382.203125 + this.x,
      306.273438,
      357.910156 + this.x,
      371.515625
    );
    ctx.bezierCurveTo(
      305.644531 + this.x,
      344.707031,
      235.726562 + this.x,
      365.828125,
      218.167969 + this.x,
      414.15625
    );
    ctx.bezierCurveTo(
      164.703125 + this.x,
      403.511719,
      105.675781 + this.x,
      425.480469,
      92.621094 + this.x,

      468.996094
    );
    ctx.fill();

    // #path31
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(585.332031 + this.x, 424.679688);
    ctx.bezierCurveTo(
      585.429688 + this.x,
      425.082031,
      585.5 + this.x,
      425.480469,
      585.570312 + this.x,
      425.902344
    );
    ctx.lineTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      585.804688 + this.x,
      425.480469,
      585.570312 + this.x,
      425.082031,
      585.332031 + this.x,
      424.679688
    );
    ctx.fill();

    // #path32
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(232.097656 + this.x, 557.007812);
    ctx.bezierCurveTo(
      248.335938 + this.x,
      608.539062,
      343.542969 + this.x,
      620.304688,
      383.058594 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      434.609375 + this.x,
      620.390625,
      542.347656 + this.x,
      608.695312,
      569.167969 + this.x,
      556.203125
    );
    ctx.bezierCurveTo(
      632.777344 + this.x,
      565.648438,
      691.878906 + this.x,
      526.957031,
      678.71875 + this.x,
      479.945312
    );
    ctx.bezierCurveTo(
      668.824219 + this.x,
      514.488281,
      620.054688 + this.x,
      537.804688,
      569.167969 + this.x,
      530.25
    );
    ctx.bezierCurveTo(
      555.167969 + this.x,
      557.644531,
      515.300781 + this.x,
      577.394531,
      468.289062 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      433.386719 + this.x,
      577.394531,
      401.925781 + this.x,
      546.601562,
      382.558594 + this.x,
      529.804688
    );
    ctx.bezierCurveTo(
      367.828125 + this.x,
      546.433594,
      342.449219 + this.x,
      577.394531,
      312.972656 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      273.5 + this.x,
      577.394531,
      240.460938 + this.x,
      557.597656,
      232.097656 + this.x,
      531.050781
    );
    ctx.bezierCurveTo(
      174.570312 + this.x,
      549.578125,
      101.816406 + this.x,
      526.09375,
      91.253906 + this.x,
      474.398438
    );
    ctx.bezierCurveTo(
      77.648438 + this.x,
      540.996094,
      163.332031 + this.x,
      579.15625,
      232.097656 + this.x,
      557.007812
    );
    ctx.fill();

    // #path33
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(143.179688 + this.x, 529.957031);
    ctx.bezierCurveTo(
      183.453125 + this.x,
      564.261719,
      238.152344 + this.x,
      550.460938,
      257.503906 + this.x,
      501.429688
    );
    ctx.bezierCurveTo(
      227.347656 + this.x,
      530.523438,
      183.445312 + this.x,
      541.476562,
      143.179688 + this.x,
      529.957031
    );
    ctx.fill();

    // #path34
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(528.625 + this.x, 512.628906);
    ctx.bezierCurveTo(
      557.488281 + this.x,
      556.988281,
      613.851562 + this.x,
      559.328125,
      646.328125 + this.x,
      517.832031
    );
    ctx.bezierCurveTo(
      609.15625 + this.x,
      537.132812,
      563.957031 + this.x,
      535.140625,
      528.625 + this.x,
      512.628906
    );
    ctx.fill();

    // #path35
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(321.894531 + this.x, 507.753906);
    ctx.bezierCurveTo(
      350.765625 + this.x,
      552.117188,

      407.121094 + this.x,
      554.457031,
      439.605469 + this.x,
      512.960938
    );
    ctx.bezierCurveTo(
      402.433594 + this.x,
      532.261719,
      357.230469 + this.x,
      530.265625,
      321.894531 + this.x,
      507.753906
    );
    ctx.fill();

    // #path36
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(513.433594 + this.x, 466.21875);
    ctx.bezierCurveTo(
      484.566406 + this.x,
      421.855469,
      428.203125 + this.x,
      419.515625,
      395.726562 + this.x,
      461.011719
    );
    ctx.bezierCurveTo(
      432.898438 + this.x,
      441.707031,
      478.097656 + this.x,
      443.703125,
      513.433594 + this.x,
      466.21875
    );
    ctx.fill();

    // #path37
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(239.296875 + this.x, 448.789062);
    ctx.bezierCurveTo(
      210.429688 + this.x,
      404.425781,
      154.066406 + this.x,
      402.085938,
      121.589844 + this.x,
      443.578125
    );
    ctx.bezierCurveTo(
      158.761719 + this.x,
      424.277344,
      203.960938 + this.x,
      426.273438,
      239.296875 + this.x,
      448.789062
    );
    ctx.fill();

    // #path38
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(370.105469 + this.x, 404.539062);
    ctx.bezierCurveTo(
      344.597656 + this.x,
      358.15625,
      288.5625 + this.x,
      351.648438,
      253.109375 + this.x,
      390.625
    );
    ctx.bezierCurveTo(
      291.601562 + this.x,
      374.128906,
      336.53125 + this.x,
      379.46875,
      370.105469 + this.x,
      404.539062
    );
    ctx.fill();

    // #path39
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(579.421875 + this.x, 408.515625);
    ctx.bezierCurveTo(
      550.988281 + this.x,
      363.875,
      494.652344 + this.x,
      360.980469,
      461.765625 + this.x,
      402.160156
    );
    ctx.bezierCurveTo(
      499.132812 + this.x,
      383.222656,
      544.308594 + this.x,
      385.660156,
      579.421875 + this.x,
      408.515625
    );
    ctx.fill();
  }

  draw2(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");

    this.x -= this.speed * 0.1;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    // ctx.reset();

    // ctx.translate(0, 100);
    ctx.save();
    ctx.translate(300, 500);

    // ctx.reset();

    // const scaleFactor = 0.5;
    // ctx.scale(scaleFactor, scaleFactor);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path2
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path3
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      76.449219 + this.x,
      360.082031,
      74.890625 + this.x,
      364.507812,
      74.066406 + this.x,
      369.277344
    );
    ctx.bezierCurveTo(
      48.414062 + this.x,
      369.355469,
      26.40625 + this.x,
      379.25,
      15.046875 + this.x,
      393.597656
    );
    ctx.bezierCurveTo(
      20.507812 + this.x,
      372.546875,
      46.628906 + this.x,
      356.230469,
      78.628906 + this.x,
      356.019531
    );
    ctx.fill();

    // #path4
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(415.988281 + this.x, 385.433594);
    ctx.bezierCurveTo(
      400.105469 + this.x,
      364.542969,
      365.785156 + this.x,
      354.945312,
      334.203125 + this.x,
      361.128906
    );
    ctx.bezierCurveTo(
      321.78125 + this.x,
      327.5625,
      272.269531 + this.x,
      312.90625,
      235.257812 + this.x,
      331.523438
    );
    ctx.bezierCurveTo(
      218.046875 + this.x,
      286.230469,
      166.617188 + this.x,
      288.019531,
      151.40625 + this.x,
      334.40625
    );
    ctx.bezierCurveTo(
      124.402344 + this.x,
      321.746094,
      91.96875 + this.x,
      332.199219,
      79.09375 + this.x,
      355.183594
    );
    ctx.bezierCurveTo(
      85.054688 + this.x,
      323.871094,
      122.953125 + this.x,
      307.085938,
      153.632812 + this.x,
      321.730469
    );
    ctx.bezierCurveTo(
      168.324219 + this.x,
      276.117188,
      217.984375 + this.x,
      274.363281,
      234.597656 + this.x,
      318.898438
    );
    ctx.bezierCurveTo(
      270.332031 + this.x,
      300.597656,
      318.140625 + this.x,
      315.015625,
      330.144531 + this.x,
      348.0
    );
    ctx.bezierCurveTo(
      366.703125 + this.x,
      340.734375,
      407.0625 + this.x,
      355.730469,
      415.988281 + this.x,
      385.433594
    );
    ctx.fill();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(79.09375 + this.x, 355.183594);
    ctx.bezierCurveTo(
      79.027344 + this.x,
      355.460938,
      78.980469 + this.x,
      355.730469,
      78.933594 + this.x,
      356.019531
    );
    ctx.lineTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      78.773438 + this.x,
      355.730469,
      78.933594 + this.x,
      355.460938,
      79.09375 + this.x,
      355.183594
    );
    ctx.fill();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(320.621094 + this.x, 445.507812);
    ctx.bezierCurveTo(
      309.519531 + this.x,
      480.683594,
      244.421875 + this.x,
      488.714844,
      217.402344 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      182.152344 + this.x,
      488.773438,
      108.484375 + this.x,
      480.792969,
      90.148438 + this.x,
      444.960938
    );
    ctx.bezierCurveTo(
      46.65625 + this.x,
      451.410156,
      6.242188 + this.x,
      424.996094,
      15.238281 + this.x,
      392.90625
    );
    ctx.bezierCurveTo(
      22.007812 + this.x,
      416.488281,
      55.355469 + this.x,
      432.402344,
      90.148438 + this.x,
      427.246094
    );
    ctx.bezierCurveTo(
      99.71875 + this.x,
      445.945312,
      126.980469 + this.x,
      459.425781,
      159.125 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      182.988281 + this.x,
      459.425781,
      204.5 + this.x,
      438.40625,
      217.742188 + this.x,
      426.941406
    );
    ctx.bezierCurveTo(
      227.8125 + this.x,
      438.292969,
      245.167969 + this.x,
      459.425781,
      265.324219 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      292.3125 + this.x,
      459.425781,
      314.902344 + this.x,
      445.910156,
      320.621094 + this.x,
      427.789062
    );
    ctx.bezierCurveTo(
      359.957031 + this.x,
      440.4375,
      409.703125 + this.x,
      424.40625,
      416.925781 + this.x,
      389.121094
    );
    ctx.bezierCurveTo(
      426.226562 + this.x,
      434.582031,
      367.640625 + this.x,
      460.628906,
      320.621094 + this.x,
      445.507812
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(381.421875 + this.x, 427.042969);
    ctx.bezierCurveTo(
      353.882812 + this.x,
      450.460938,
      316.480469 + this.x,
      441.039062,
      303.25 + this.x,
      407.570312
    );
    ctx.bezierCurveTo(
      323.871094 + this.x,
      427.429688,
      353.886719 + this.x,
      434.90625,
      381.421875 + this.x,
      427.042969
    );
    ctx.fill();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(117.867188 + this.x, 415.21875);
    ctx.bezierCurveTo(
      98.132812 + this.x,
      445.496094,
      59.59375 + this.x,
      447.09375,
      37.386719 + this.x,
      418.769531
    );
    ctx.bezierCurveTo(
      62.804688 + this.x,
      431.945312,
      93.710938 + this.x,
      430.585938,
      117.867188 + this.x,
      415.21875
    );
    ctx.fill();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(259.222656 + this.x, 411.886719);
    ctx.bezierCurveTo(
      239.484375 + this.x,
      442.171875,
      200.949219 + this.x,
      443.765625,
      178.738281 + this.x,
      415.445312
    );
    ctx.bezierCurveTo(
      204.15625 + this.x,
      428.621094,
      235.0625 + this.x,
      427.257812,
      259.222656 + this.x,
      411.886719
    );
    ctx.fill();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(128.253906 + this.x, 383.539062);
    ctx.bezierCurveTo(
      147.992188 + this.x,
      353.257812,
      186.53125 + this.x,
      351.660156,
      208.738281 + this.x,
      379.984375
    );
    ctx.bezierCurveTo(
      183.324219 + this.x,
      366.808594,
      152.417969 + this.x,
      368.171875,
      128.253906 + this.x,
      383.539062
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(315.699219 + this.x, 371.640625);
    ctx.bezierCurveTo(
      335.4375 + this.x,
      341.359375,
      373.976562 + this.x,
      339.761719,
      396.183594 + this.x,
      368.085938
    );
    ctx.bezierCurveTo(
      370.765625 + this.x,
      354.910156,
      339.859375 + this.x,
      356.273438,
      315.699219 + this.x,
      371.640625
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(226.257812 + this.x, 341.4375);
    ctx.bezierCurveTo(
      243.699219 + this.x,
      309.777344,
      282.011719 + this.x,
      305.335938,
      306.257812 + this.x,
      331.9375
    );
    ctx.bezierCurveTo(
      279.933594 + this.x,
      320.679688,
      249.214844 + this.x,
      324.324219,
      226.257812 + this.x,
      341.4375
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(83.132812 + this.x, 344.152344);
    ctx.bezierCurveTo(
      102.578125 + this.x,
      313.679688,
      141.097656 + this.x,
      311.707031,
      163.582031 + this.x,
      339.8125
    );
    ctx.bezierCurveTo(
      138.035156 + this.x,
      326.886719,
      107.144531 + this.x,
      328.550781,
      83.132812 + this.x,
      344.152344
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      298.113281 + this.x,
      315.480469,
      295.828125 + this.x,
      321.96875,
      294.628906 + this.x,
      328.957031
    );
    ctx.bezierCurveTo(
      257.113281 + this.x,
      329.070312,
      224.921875 + this.x,
      343.5625,
      208.308594 + this.x,
      364.585938
    );
    ctx.bezierCurveTo(
      216.296875 + this.x,
      333.746094,
      254.5 + this.x,
      309.84375,
      301.296875 + this.x,
      309.535156
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(794.691406 + this.x, 352.625);
    ctx.bezierCurveTo(
      771.457031 + this.x,
      322.015625,
      721.269531 + this.x,
      307.953125,
      675.078125 + this.x,
      317.015625
    );
    ctx.bezierCurveTo(
      656.910156 + this.x,
      267.839844,
      584.5 + this.x,
      246.367188,
      530.371094 + this.x,
      273.644531
    );
    ctx.bezierCurveTo(
      505.203125 + this.x,
      207.289062,
      429.984375 + this.x,
      209.910156,
      407.734375 + this.x,
      277.867188
    );
    ctx.bezierCurveTo(
      368.242188 + this.x,
      259.320312,
      320.808594 + this.x,
      274.632812,
      301.980469 + this.x,
      308.308594
    );
    ctx.bezierCurveTo(
      310.699219 + this.x,
      262.433594,
      366.121094 + this.x,
      237.84375,
      410.992188 + this.x,
      259.296875
    );
    ctx.bezierCurveTo(
      432.480469 + this.x,
      192.46875,
      505.109375 + this.x,
      189.902344,
      529.402344 + this.x,
      255.144531
    );
    ctx.bezierCurveTo(
      581.667969 + this.x,
      228.339844,
      651.585938 + this.x,
      249.457031,
      669.144531 + this.x,
      297.785156
    );
    ctx.bezierCurveTo(
      722.609375 + this.x,
      287.140625,
      781.636719 + this.x,
      309.109375,
      794.691406 + this.x,
      352.625
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(301.980469 + this.x, 308.308594);
    ctx.bezierCurveTo(
      301.882812 + this.x,
      308.710938,
      301.8125 + this.x,
      309.109375,
      301.742188 + this.x,
      309.535156
    );
    ctx.lineTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      301.507812 + this.x,
      309.109375,
      301.742188 + this.x,
      308.710938,
      301.980469 + this.x,
      308.308594
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(655.214844 + this.x, 440.636719);
    ctx.bezierCurveTo(
      638.976562 + this.x,
      492.167969,
      543.769531 + this.x,
      503.933594,
      504.253906 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      452.703125 + this.x,
      504.019531,
      344.964844 + this.x,
      492.324219,
      318.144531 + this.x,
      439.832031
    );
    ctx.bezierCurveTo(
      254.539062 + this.x,
      449.28125,
      195.433594 + this.x,
      410.585938,
      208.59375 + this.x,
      363.574219
    );
    ctx.bezierCurveTo(
      218.488281 + this.x,
      398.117188,
      267.261719 + this.x,
      421.433594,
      318.144531 + this.x,
      413.878906
    );
    ctx.bezierCurveTo(
      332.144531 + this.x,
      441.273438,
      372.011719 + this.x,
      461.023438,
      419.023438 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      453.925781 + this.x,
      461.023438,
      485.386719 + this.x,
      430.230469,
      504.753906 + this.x,
      413.433594
    );
    ctx.bezierCurveTo(
      519.484375 + this.x,
      430.0625,

      544.863281 + this.x,
      461.023438,
      574.339844 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      613.8125 + this.x,
      461.023438,
      646.851562 + this.x,
      441.226562,
      655.214844 + this.x,
      414.679688
    );
    ctx.bezierCurveTo(
      712.742188 + this.x,
      433.210938,
      785.496094 + this.x,
      409.722656,
      796.058594 + this.x,
      358.027344
    );
    ctx.bezierCurveTo(
      809.664062 + this.x,
      424.625,
      723.980469 + this.x,
      462.785156,
      655.214844 + this.x,
      440.636719
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(744.132812 + this.x, 413.585938);
    ctx.bezierCurveTo(
      703.859375 + this.x,
      447.890625,
      649.160156 + this.x,
      434.089844,
      629.808594 + this.x,
      385.058594
    );
    ctx.bezierCurveTo(
      659.964844 + this.x,
      414.152344,
      703.867188 + this.x,
      425.105469,
      744.132812 + this.x,
      413.585938
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(358.6875 + this.x, 396.257812);
    ctx.bezierCurveTo(
      329.824219 + this.x,
      440.617188,
      273.460938 + this.x,
      442.957031,
      240.984375 + this.x,
      401.460938
    );
    ctx.bezierCurveTo(
      278.15625 + this.x,
      420.761719,
      323.355469 + this.x,
      418.769531,
      358.6875 + this.x,
      396.257812
    );
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(565.417969 + this.x, 391.382812);
    ctx.bezierCurveTo(
      536.546875 + this.x,
      435.746094,
      480.191406 + this.x,
      438.085938,
      447.707031 + this.x,
      396.589844
    );
    ctx.bezierCurveTo(
      484.882812 + this.x,
      415.890625,
      530.082031 + this.x,
      413.894531,
      565.417969 + this.x,
      391.382812
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(373.878906 + this.x, 349.847656);
    ctx.bezierCurveTo(
      402.746094 + this.x,
      305.484375,
      459.109375 + this.x,
      303.144531,
      491.585938 + this.x,
      344.640625
    );
    ctx.bezierCurveTo(
      454.414062 + this.x,
      325.335938,
      409.214844 + this.x,
      327.335938,
      373.878906 + this.x,
      349.847656
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(648.015625 + this.x, 332.417969);
    ctx.bezierCurveTo(
      676.882812 + this.x,
      288.054688,
      733.246094 + this.x,
      285.714844,
      765.722656 + this.x,
      327.207031
    );
    ctx.bezierCurveTo(
      728.550781 + this.x,
      307.90625,
      683.351562 + this.x,
      309.902344,
      648.015625 + this.x,
      332.417969
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(517.207031 + this.x, 288.167969);
    ctx.bezierCurveTo(
      542.71875 + this.x,
      241.785156,
      598.75 + this.x,
      235.277344,
      634.203125 + this.x,
      274.253906
    );
    ctx.bezierCurveTo(
      595.710938 + this.x,
      257.757812,
      550.78125 + this.x,
      263.097656,
      517.207031 + this.x,
      288.167969
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(307.890625 + this.x, 292.144531);
    ctx.bezierCurveTo(
      336.324219 + this.x,
      247.503906,
      392.660156 + this.x,
      244.609375,
      425.546875 + this.x,
      285.789062
    );
    ctx.bezierCurveTo(
      388.183594 + this.x,
      266.851562,
      343.003906 + this.x,
      269.289062,
      307.890625 + this.x,
      292.144531
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,
      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,

      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path29
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      589.199219 + this.x,
      431.851562,
      591.484375 + this.x,
      438.339844,
      592.683594 + this.x,
      445.328125
    );
    ctx.bezierCurveTo(
      630.199219 + this.x,
      445.441406,
      662.390625 + this.x,
      459.933594,
      679.003906 + this.x,
      480.957031
    );
    ctx.bezierCurveTo(
      671.015625 + this.x,
      450.117188,
      632.8125 + this.x,
      426.214844,
      586.015625 + this.x,
      425.902344
    );
    ctx.fill();

    // #path30
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(92.621094 + this.x, 468.996094);
    ctx.bezierCurveTo(
      115.855469 + this.x,
      438.386719,
      166.042969 + this.x,
      424.324219,
      212.234375 + this.x,
      433.386719
    );
    ctx.bezierCurveTo(
      230.402344 + this.x,
      384.210938,
      302.8125 + this.x,
      362.738281,
      356.941406 + this.x,
      390.015625
    );
    ctx.bezierCurveTo(
      382.113281 + this.x,
      323.660156,
      457.328125 + this.x,
      326.28125,
      479.578125 + this.x,
      394.238281
    );
    ctx.bezierCurveTo(
      519.070312 + this.x,
      375.691406,
      566.503906 + this.x,
      391.003906,
      585.332031 + this.x,
      424.679688
    );
    ctx.bezierCurveTo(
      576.613281 + this.x,
      378.804688,
      521.191406 + this.x,
      354.214844,
      476.320312 + this.x,
      375.667969
    );
    ctx.bezierCurveTo(
      454.832031 + this.x,
      308.839844,
      382.203125 + this.x,
      306.273438,
      357.910156 + this.x,
      371.515625
    );
    ctx.bezierCurveTo(
      305.644531 + this.x,
      344.707031,
      235.726562 + this.x,
      365.828125,
      218.167969 + this.x,
      414.15625
    );
    ctx.bezierCurveTo(
      164.703125 + this.x,
      403.511719,
      105.675781 + this.x,
      425.480469,
      92.621094 + this.x,

      468.996094
    );
    ctx.fill();

    // #path31
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(585.332031 + this.x, 424.679688);
    ctx.bezierCurveTo(
      585.429688 + this.x,
      425.082031,
      585.5 + this.x,
      425.480469,
      585.570312 + this.x,
      425.902344
    );
    ctx.lineTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      585.804688 + this.x,
      425.480469,
      585.570312 + this.x,
      425.082031,
      585.332031 + this.x,
      424.679688
    );
    ctx.fill();

    // #path32
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(232.097656 + this.x, 557.007812);
    ctx.bezierCurveTo(
      248.335938 + this.x,
      608.539062,
      343.542969 + this.x,
      620.304688,
      383.058594 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      434.609375 + this.x,
      620.390625,
      542.347656 + this.x,
      608.695312,
      569.167969 + this.x,
      556.203125
    );
    ctx.bezierCurveTo(
      632.777344 + this.x,
      565.648438,
      691.878906 + this.x,
      526.957031,
      678.71875 + this.x,
      479.945312
    );
    ctx.bezierCurveTo(
      668.824219 + this.x,
      514.488281,
      620.054688 + this.x,
      537.804688,
      569.167969 + this.x,
      530.25
    );
    ctx.bezierCurveTo(
      555.167969 + this.x,
      557.644531,
      515.300781 + this.x,
      577.394531,
      468.289062 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      433.386719 + this.x,
      577.394531,
      401.925781 + this.x,
      546.601562,
      382.558594 + this.x,
      529.804688
    );
    ctx.bezierCurveTo(
      367.828125 + this.x,
      546.433594,
      342.449219 + this.x,
      577.394531,
      312.972656 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      273.5 + this.x,
      577.394531,
      240.460938 + this.x,
      557.597656,
      232.097656 + this.x,
      531.050781
    );
    ctx.bezierCurveTo(
      174.570312 + this.x,
      549.578125,
      101.816406 + this.x,
      526.09375,
      91.253906 + this.x,
      474.398438
    );
    ctx.bezierCurveTo(
      77.648438 + this.x,
      540.996094,
      163.332031 + this.x,
      579.15625,
      232.097656 + this.x,
      557.007812
    );
    ctx.fill();

    // #path33
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(143.179688 + this.x, 529.957031);
    ctx.bezierCurveTo(
      183.453125 + this.x,
      564.261719,
      238.152344 + this.x,
      550.460938,
      257.503906 + this.x,
      501.429688
    );
    ctx.bezierCurveTo(
      227.347656 + this.x,
      530.523438,
      183.445312 + this.x,
      541.476562,
      143.179688 + this.x,
      529.957031
    );
    ctx.fill();

    // #path34
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(528.625 + this.x, 512.628906);
    ctx.bezierCurveTo(
      557.488281 + this.x,
      556.988281,
      613.851562 + this.x,
      559.328125,
      646.328125 + this.x,
      517.832031
    );
    ctx.bezierCurveTo(
      609.15625 + this.x,
      537.132812,
      563.957031 + this.x,
      535.140625,
      528.625 + this.x,
      512.628906
    );
    ctx.fill();

    // #path35
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(321.894531 + this.x, 507.753906);
    ctx.bezierCurveTo(
      350.765625 + this.x,
      552.117188,

      407.121094 + this.x,
      554.457031,
      439.605469 + this.x,
      512.960938
    );
    ctx.bezierCurveTo(
      402.433594 + this.x,
      532.261719,
      357.230469 + this.x,
      530.265625,
      321.894531 + this.x,
      507.753906
    );
    ctx.fill();

    // #path36
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(513.433594 + this.x, 466.21875);
    ctx.bezierCurveTo(
      484.566406 + this.x,
      421.855469,
      428.203125 + this.x,
      419.515625,
      395.726562 + this.x,
      461.011719
    );
    ctx.bezierCurveTo(
      432.898438 + this.x,
      441.707031,
      478.097656 + this.x,
      443.703125,
      513.433594 + this.x,
      466.21875
    );
    ctx.fill();

    // #path37
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(239.296875 + this.x, 448.789062);
    ctx.bezierCurveTo(
      210.429688 + this.x,
      404.425781,
      154.066406 + this.x,
      402.085938,
      121.589844 + this.x,
      443.578125
    );
    ctx.bezierCurveTo(
      158.761719 + this.x,
      424.277344,
      203.960938 + this.x,
      426.273438,
      239.296875 + this.x,
      448.789062
    );
    ctx.fill();

    // #path38
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(370.105469 + this.x, 404.539062);
    ctx.bezierCurveTo(
      344.597656 + this.x,
      358.15625,
      288.5625 + this.x,
      351.648438,
      253.109375 + this.x,
      390.625
    );
    ctx.bezierCurveTo(
      291.601562 + this.x,
      374.128906,
      336.53125 + this.x,
      379.46875,
      370.105469 + this.x,
      404.539062
    );
    ctx.fill();

    // #path39
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(579.421875 + this.x, 408.515625);
    ctx.bezierCurveTo(
      550.988281 + this.x,
      363.875,
      494.652344 + this.x,
      360.980469,
      461.765625 + this.x,
      402.160156
    );
    ctx.bezierCurveTo(
      499.132812 + this.x,
      383.222656,
      544.308594 + this.x,
      385.660156,
      579.421875 + this.x,
      408.515625
    );
    ctx.fill();
    ctx.translate(-300, -500);
  }

  draw3(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");

    this.x -= this.speed * 0.1;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    // ctx.reset();

    // ctx.translate(0, 100);
    ctx.save();
    ctx.translate(1000, 900);

    // ctx.reset();

    // const scaleFactor = 0.5;
    // ctx.scale(scaleFactor, scaleFactor);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path2
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path3
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      76.449219 + this.x,
      360.082031,
      74.890625 + this.x,
      364.507812,
      74.066406 + this.x,
      369.277344
    );
    ctx.bezierCurveTo(
      48.414062 + this.x,
      369.355469,
      26.40625 + this.x,
      379.25,
      15.046875 + this.x,
      393.597656
    );
    ctx.bezierCurveTo(
      20.507812 + this.x,
      372.546875,
      46.628906 + this.x,
      356.230469,
      78.628906 + this.x,
      356.019531
    );
    ctx.fill();

    // #path4
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(415.988281 + this.x, 385.433594);
    ctx.bezierCurveTo(
      400.105469 + this.x,
      364.542969,
      365.785156 + this.x,
      354.945312,
      334.203125 + this.x,
      361.128906
    );
    ctx.bezierCurveTo(
      321.78125 + this.x,
      327.5625,
      272.269531 + this.x,
      312.90625,
      235.257812 + this.x,
      331.523438
    );
    ctx.bezierCurveTo(
      218.046875 + this.x,
      286.230469,
      166.617188 + this.x,
      288.019531,
      151.40625 + this.x,
      334.40625
    );
    ctx.bezierCurveTo(
      124.402344 + this.x,
      321.746094,
      91.96875 + this.x,
      332.199219,
      79.09375 + this.x,
      355.183594
    );
    ctx.bezierCurveTo(
      85.054688 + this.x,
      323.871094,
      122.953125 + this.x,
      307.085938,
      153.632812 + this.x,
      321.730469
    );
    ctx.bezierCurveTo(
      168.324219 + this.x,
      276.117188,
      217.984375 + this.x,
      274.363281,
      234.597656 + this.x,
      318.898438
    );
    ctx.bezierCurveTo(
      270.332031 + this.x,
      300.597656,
      318.140625 + this.x,
      315.015625,
      330.144531 + this.x,
      348.0
    );
    ctx.bezierCurveTo(
      366.703125 + this.x,
      340.734375,
      407.0625 + this.x,
      355.730469,
      415.988281 + this.x,
      385.433594
    );
    ctx.fill();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(79.09375 + this.x, 355.183594);
    ctx.bezierCurveTo(
      79.027344 + this.x,
      355.460938,
      78.980469 + this.x,
      355.730469,
      78.933594 + this.x,
      356.019531
    );
    ctx.lineTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      78.773438 + this.x,
      355.730469,
      78.933594 + this.x,
      355.460938,
      79.09375 + this.x,
      355.183594
    );
    ctx.fill();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(320.621094 + this.x, 445.507812);
    ctx.bezierCurveTo(
      309.519531 + this.x,
      480.683594,
      244.421875 + this.x,
      488.714844,
      217.402344 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      182.152344 + this.x,
      488.773438,
      108.484375 + this.x,
      480.792969,
      90.148438 + this.x,
      444.960938
    );
    ctx.bezierCurveTo(
      46.65625 + this.x,
      451.410156,
      6.242188 + this.x,
      424.996094,
      15.238281 + this.x,
      392.90625
    );
    ctx.bezierCurveTo(
      22.007812 + this.x,
      416.488281,
      55.355469 + this.x,
      432.402344,
      90.148438 + this.x,
      427.246094
    );
    ctx.bezierCurveTo(
      99.71875 + this.x,
      445.945312,
      126.980469 + this.x,
      459.425781,
      159.125 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      182.988281 + this.x,
      459.425781,
      204.5 + this.x,
      438.40625,
      217.742188 + this.x,
      426.941406
    );
    ctx.bezierCurveTo(
      227.8125 + this.x,
      438.292969,
      245.167969 + this.x,
      459.425781,
      265.324219 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      292.3125 + this.x,
      459.425781,
      314.902344 + this.x,
      445.910156,
      320.621094 + this.x,
      427.789062
    );
    ctx.bezierCurveTo(
      359.957031 + this.x,
      440.4375,
      409.703125 + this.x,
      424.40625,
      416.925781 + this.x,
      389.121094
    );
    ctx.bezierCurveTo(
      426.226562 + this.x,
      434.582031,
      367.640625 + this.x,
      460.628906,
      320.621094 + this.x,
      445.507812
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(381.421875 + this.x, 427.042969);
    ctx.bezierCurveTo(
      353.882812 + this.x,
      450.460938,
      316.480469 + this.x,
      441.039062,
      303.25 + this.x,
      407.570312
    );
    ctx.bezierCurveTo(
      323.871094 + this.x,
      427.429688,
      353.886719 + this.x,
      434.90625,
      381.421875 + this.x,
      427.042969
    );
    ctx.fill();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(117.867188 + this.x, 415.21875);
    ctx.bezierCurveTo(
      98.132812 + this.x,
      445.496094,
      59.59375 + this.x,
      447.09375,
      37.386719 + this.x,
      418.769531
    );
    ctx.bezierCurveTo(
      62.804688 + this.x,
      431.945312,
      93.710938 + this.x,
      430.585938,
      117.867188 + this.x,
      415.21875
    );
    ctx.fill();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(259.222656 + this.x, 411.886719);
    ctx.bezierCurveTo(
      239.484375 + this.x,
      442.171875,
      200.949219 + this.x,
      443.765625,
      178.738281 + this.x,
      415.445312
    );
    ctx.bezierCurveTo(
      204.15625 + this.x,
      428.621094,
      235.0625 + this.x,
      427.257812,
      259.222656 + this.x,
      411.886719
    );
    ctx.fill();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(128.253906 + this.x, 383.539062);
    ctx.bezierCurveTo(
      147.992188 + this.x,
      353.257812,
      186.53125 + this.x,
      351.660156,
      208.738281 + this.x,
      379.984375
    );
    ctx.bezierCurveTo(
      183.324219 + this.x,
      366.808594,
      152.417969 + this.x,
      368.171875,
      128.253906 + this.x,
      383.539062
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(315.699219 + this.x, 371.640625);
    ctx.bezierCurveTo(
      335.4375 + this.x,
      341.359375,
      373.976562 + this.x,
      339.761719,
      396.183594 + this.x,
      368.085938
    );
    ctx.bezierCurveTo(
      370.765625 + this.x,
      354.910156,
      339.859375 + this.x,
      356.273438,
      315.699219 + this.x,
      371.640625
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(226.257812 + this.x, 341.4375);
    ctx.bezierCurveTo(
      243.699219 + this.x,
      309.777344,
      282.011719 + this.x,
      305.335938,
      306.257812 + this.x,
      331.9375
    );
    ctx.bezierCurveTo(
      279.933594 + this.x,
      320.679688,
      249.214844 + this.x,
      324.324219,
      226.257812 + this.x,
      341.4375
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(83.132812 + this.x, 344.152344);
    ctx.bezierCurveTo(
      102.578125 + this.x,
      313.679688,
      141.097656 + this.x,
      311.707031,
      163.582031 + this.x,
      339.8125
    );
    ctx.bezierCurveTo(
      138.035156 + this.x,
      326.886719,
      107.144531 + this.x,
      328.550781,
      83.132812 + this.x,
      344.152344
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      298.113281 + this.x,
      315.480469,
      295.828125 + this.x,
      321.96875,
      294.628906 + this.x,
      328.957031
    );
    ctx.bezierCurveTo(
      257.113281 + this.x,
      329.070312,
      224.921875 + this.x,
      343.5625,
      208.308594 + this.x,
      364.585938
    );
    ctx.bezierCurveTo(
      216.296875 + this.x,
      333.746094,
      254.5 + this.x,
      309.84375,
      301.296875 + this.x,
      309.535156
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(794.691406 + this.x, 352.625);
    ctx.bezierCurveTo(
      771.457031 + this.x,
      322.015625,
      721.269531 + this.x,
      307.953125,
      675.078125 + this.x,
      317.015625
    );
    ctx.bezierCurveTo(
      656.910156 + this.x,
      267.839844,
      584.5 + this.x,
      246.367188,
      530.371094 + this.x,
      273.644531
    );
    ctx.bezierCurveTo(
      505.203125 + this.x,
      207.289062,
      429.984375 + this.x,
      209.910156,
      407.734375 + this.x,
      277.867188
    );
    ctx.bezierCurveTo(
      368.242188 + this.x,
      259.320312,
      320.808594 + this.x,
      274.632812,
      301.980469 + this.x,
      308.308594
    );
    ctx.bezierCurveTo(
      310.699219 + this.x,
      262.433594,
      366.121094 + this.x,
      237.84375,
      410.992188 + this.x,
      259.296875
    );
    ctx.bezierCurveTo(
      432.480469 + this.x,
      192.46875,
      505.109375 + this.x,
      189.902344,
      529.402344 + this.x,
      255.144531
    );
    ctx.bezierCurveTo(
      581.667969 + this.x,
      228.339844,
      651.585938 + this.x,
      249.457031,
      669.144531 + this.x,
      297.785156
    );
    ctx.bezierCurveTo(
      722.609375 + this.x,
      287.140625,
      781.636719 + this.x,
      309.109375,
      794.691406 + this.x,
      352.625
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(301.980469 + this.x, 308.308594);
    ctx.bezierCurveTo(
      301.882812 + this.x,
      308.710938,
      301.8125 + this.x,
      309.109375,
      301.742188 + this.x,
      309.535156
    );
    ctx.lineTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      301.507812 + this.x,
      309.109375,
      301.742188 + this.x,
      308.710938,
      301.980469 + this.x,
      308.308594
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(655.214844 + this.x, 440.636719);
    ctx.bezierCurveTo(
      638.976562 + this.x,
      492.167969,
      543.769531 + this.x,
      503.933594,
      504.253906 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      452.703125 + this.x,
      504.019531,
      344.964844 + this.x,
      492.324219,
      318.144531 + this.x,
      439.832031
    );
    ctx.bezierCurveTo(
      254.539062 + this.x,
      449.28125,
      195.433594 + this.x,
      410.585938,
      208.59375 + this.x,
      363.574219
    );
    ctx.bezierCurveTo(
      218.488281 + this.x,
      398.117188,
      267.261719 + this.x,
      421.433594,
      318.144531 + this.x,
      413.878906
    );
    ctx.bezierCurveTo(
      332.144531 + this.x,
      441.273438,
      372.011719 + this.x,
      461.023438,
      419.023438 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      453.925781 + this.x,
      461.023438,
      485.386719 + this.x,
      430.230469,
      504.753906 + this.x,
      413.433594
    );
    ctx.bezierCurveTo(
      519.484375 + this.x,
      430.0625,

      544.863281 + this.x,
      461.023438,
      574.339844 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      613.8125 + this.x,
      461.023438,
      646.851562 + this.x,
      441.226562,
      655.214844 + this.x,
      414.679688
    );
    ctx.bezierCurveTo(
      712.742188 + this.x,
      433.210938,
      785.496094 + this.x,
      409.722656,
      796.058594 + this.x,
      358.027344
    );
    ctx.bezierCurveTo(
      809.664062 + this.x,
      424.625,
      723.980469 + this.x,
      462.785156,
      655.214844 + this.x,
      440.636719
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(744.132812 + this.x, 413.585938);
    ctx.bezierCurveTo(
      703.859375 + this.x,
      447.890625,
      649.160156 + this.x,
      434.089844,
      629.808594 + this.x,
      385.058594
    );
    ctx.bezierCurveTo(
      659.964844 + this.x,
      414.152344,
      703.867188 + this.x,
      425.105469,
      744.132812 + this.x,
      413.585938
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(358.6875 + this.x, 396.257812);
    ctx.bezierCurveTo(
      329.824219 + this.x,
      440.617188,
      273.460938 + this.x,
      442.957031,
      240.984375 + this.x,
      401.460938
    );
    ctx.bezierCurveTo(
      278.15625 + this.x,
      420.761719,
      323.355469 + this.x,
      418.769531,
      358.6875 + this.x,
      396.257812
    );
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(565.417969 + this.x, 391.382812);
    ctx.bezierCurveTo(
      536.546875 + this.x,
      435.746094,
      480.191406 + this.x,
      438.085938,
      447.707031 + this.x,
      396.589844
    );
    ctx.bezierCurveTo(
      484.882812 + this.x,
      415.890625,
      530.082031 + this.x,
      413.894531,
      565.417969 + this.x,
      391.382812
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(373.878906 + this.x, 349.847656);
    ctx.bezierCurveTo(
      402.746094 + this.x,
      305.484375,
      459.109375 + this.x,
      303.144531,
      491.585938 + this.x,
      344.640625
    );
    ctx.bezierCurveTo(
      454.414062 + this.x,
      325.335938,
      409.214844 + this.x,
      327.335938,
      373.878906 + this.x,
      349.847656
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(648.015625 + this.x, 332.417969);
    ctx.bezierCurveTo(
      676.882812 + this.x,
      288.054688,
      733.246094 + this.x,
      285.714844,
      765.722656 + this.x,
      327.207031
    );
    ctx.bezierCurveTo(
      728.550781 + this.x,
      307.90625,
      683.351562 + this.x,
      309.902344,
      648.015625 + this.x,
      332.417969
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(517.207031 + this.x, 288.167969);
    ctx.bezierCurveTo(
      542.71875 + this.x,
      241.785156,
      598.75 + this.x,
      235.277344,
      634.203125 + this.x,
      274.253906
    );
    ctx.bezierCurveTo(
      595.710938 + this.x,
      257.757812,
      550.78125 + this.x,
      263.097656,
      517.207031 + this.x,
      288.167969
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(307.890625 + this.x, 292.144531);
    ctx.bezierCurveTo(
      336.324219 + this.x,
      247.503906,
      392.660156 + this.x,
      244.609375,
      425.546875 + this.x,
      285.789062
    );
    ctx.bezierCurveTo(
      388.183594 + this.x,
      266.851562,
      343.003906 + this.x,
      269.289062,
      307.890625 + this.x,
      292.144531
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,
      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,

      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path29
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      589.199219 + this.x,
      431.851562,
      591.484375 + this.x,
      438.339844,
      592.683594 + this.x,
      445.328125
    );
    ctx.bezierCurveTo(
      630.199219 + this.x,
      445.441406,
      662.390625 + this.x,
      459.933594,
      679.003906 + this.x,
      480.957031
    );
    ctx.bezierCurveTo(
      671.015625 + this.x,
      450.117188,
      632.8125 + this.x,
      426.214844,
      586.015625 + this.x,
      425.902344
    );
    ctx.fill();

    // #path30
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(92.621094 + this.x, 468.996094);
    ctx.bezierCurveTo(
      115.855469 + this.x,
      438.386719,
      166.042969 + this.x,
      424.324219,
      212.234375 + this.x,
      433.386719
    );
    ctx.bezierCurveTo(
      230.402344 + this.x,
      384.210938,
      302.8125 + this.x,
      362.738281,
      356.941406 + this.x,
      390.015625
    );
    ctx.bezierCurveTo(
      382.113281 + this.x,
      323.660156,
      457.328125 + this.x,
      326.28125,
      479.578125 + this.x,
      394.238281
    );
    ctx.bezierCurveTo(
      519.070312 + this.x,
      375.691406,
      566.503906 + this.x,
      391.003906,
      585.332031 + this.x,
      424.679688
    );
    ctx.bezierCurveTo(
      576.613281 + this.x,
      378.804688,
      521.191406 + this.x,
      354.214844,
      476.320312 + this.x,
      375.667969
    );
    ctx.bezierCurveTo(
      454.832031 + this.x,
      308.839844,
      382.203125 + this.x,
      306.273438,
      357.910156 + this.x,
      371.515625
    );
    ctx.bezierCurveTo(
      305.644531 + this.x,
      344.707031,
      235.726562 + this.x,
      365.828125,
      218.167969 + this.x,
      414.15625
    );
    ctx.bezierCurveTo(
      164.703125 + this.x,
      403.511719,
      105.675781 + this.x,
      425.480469,
      92.621094 + this.x,

      468.996094
    );
    ctx.fill();

    // #path31
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(585.332031 + this.x, 424.679688);
    ctx.bezierCurveTo(
      585.429688 + this.x,
      425.082031,
      585.5 + this.x,
      425.480469,
      585.570312 + this.x,
      425.902344
    );
    ctx.lineTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      585.804688 + this.x,
      425.480469,
      585.570312 + this.x,
      425.082031,
      585.332031 + this.x,
      424.679688
    );
    ctx.fill();

    // #path32
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(232.097656 + this.x, 557.007812);
    ctx.bezierCurveTo(
      248.335938 + this.x,
      608.539062,
      343.542969 + this.x,
      620.304688,
      383.058594 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      434.609375 + this.x,
      620.390625,
      542.347656 + this.x,
      608.695312,
      569.167969 + this.x,
      556.203125
    );
    ctx.bezierCurveTo(
      632.777344 + this.x,
      565.648438,
      691.878906 + this.x,
      526.957031,
      678.71875 + this.x,
      479.945312
    );
    ctx.bezierCurveTo(
      668.824219 + this.x,
      514.488281,
      620.054688 + this.x,
      537.804688,
      569.167969 + this.x,
      530.25
    );
    ctx.bezierCurveTo(
      555.167969 + this.x,
      557.644531,
      515.300781 + this.x,
      577.394531,
      468.289062 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      433.386719 + this.x,
      577.394531,
      401.925781 + this.x,
      546.601562,
      382.558594 + this.x,
      529.804688
    );
    ctx.bezierCurveTo(
      367.828125 + this.x,
      546.433594,
      342.449219 + this.x,
      577.394531,
      312.972656 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      273.5 + this.x,
      577.394531,
      240.460938 + this.x,
      557.597656,
      232.097656 + this.x,
      531.050781
    );
    ctx.bezierCurveTo(
      174.570312 + this.x,
      549.578125,
      101.816406 + this.x,
      526.09375,
      91.253906 + this.x,
      474.398438
    );
    ctx.bezierCurveTo(
      77.648438 + this.x,
      540.996094,
      163.332031 + this.x,
      579.15625,
      232.097656 + this.x,
      557.007812
    );
    ctx.fill();

    // #path33
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(143.179688 + this.x, 529.957031);
    ctx.bezierCurveTo(
      183.453125 + this.x,
      564.261719,
      238.152344 + this.x,
      550.460938,
      257.503906 + this.x,
      501.429688
    );
    ctx.bezierCurveTo(
      227.347656 + this.x,
      530.523438,
      183.445312 + this.x,
      541.476562,
      143.179688 + this.x,
      529.957031
    );
    ctx.fill();

    // #path34
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(528.625 + this.x, 512.628906);
    ctx.bezierCurveTo(
      557.488281 + this.x,
      556.988281,
      613.851562 + this.x,
      559.328125,
      646.328125 + this.x,
      517.832031
    );
    ctx.bezierCurveTo(
      609.15625 + this.x,
      537.132812,
      563.957031 + this.x,
      535.140625,
      528.625 + this.x,
      512.628906
    );
    ctx.fill();

    // #path35
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(321.894531 + this.x, 507.753906);
    ctx.bezierCurveTo(
      350.765625 + this.x,
      552.117188,

      407.121094 + this.x,
      554.457031,
      439.605469 + this.x,
      512.960938
    );
    ctx.bezierCurveTo(
      402.433594 + this.x,
      532.261719,
      357.230469 + this.x,
      530.265625,
      321.894531 + this.x,
      507.753906
    );
    ctx.fill();

    // #path36
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(513.433594 + this.x, 466.21875);
    ctx.bezierCurveTo(
      484.566406 + this.x,
      421.855469,
      428.203125 + this.x,
      419.515625,
      395.726562 + this.x,
      461.011719
    );
    ctx.bezierCurveTo(
      432.898438 + this.x,
      441.707031,
      478.097656 + this.x,
      443.703125,
      513.433594 + this.x,
      466.21875
    );
    ctx.fill();

    // #path37
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(239.296875 + this.x, 448.789062);
    ctx.bezierCurveTo(
      210.429688 + this.x,
      404.425781,
      154.066406 + this.x,
      402.085938,
      121.589844 + this.x,
      443.578125
    );
    ctx.bezierCurveTo(
      158.761719 + this.x,
      424.277344,
      203.960938 + this.x,
      426.273438,
      239.296875 + this.x,
      448.789062
    );
    ctx.fill();

    // #path38
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(370.105469 + this.x, 404.539062);
    ctx.bezierCurveTo(
      344.597656 + this.x,
      358.15625,
      288.5625 + this.x,
      351.648438,
      253.109375 + this.x,
      390.625
    );
    ctx.bezierCurveTo(
      291.601562 + this.x,
      374.128906,
      336.53125 + this.x,
      379.46875,
      370.105469 + this.x,
      404.539062
    );
    ctx.fill();

    // #path39
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(579.421875 + this.x, 408.515625);
    ctx.bezierCurveTo(
      550.988281 + this.x,
      363.875,
      494.652344 + this.x,
      360.980469,
      461.765625 + this.x,
      402.160156
    );
    ctx.bezierCurveTo(
      499.132812 + this.x,
      383.222656,
      544.308594 + this.x,
      385.660156,
      579.421875 + this.x,
      408.515625
    );
    ctx.fill();
    ctx.translate(-1000, -900);
  }

  draw4(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");

    this.x -= this.speed * 0.1;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    // ctx.reset();

    // ctx.translate(0, 100);
    ctx.save();
    ctx.translate(1500, 400);

    // ctx.reset();

    // const scaleFactor = 0.5;
    // ctx.scale(scaleFactor, scaleFactor);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path2
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path3
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      76.449219 + this.x,
      360.082031,
      74.890625 + this.x,
      364.507812,
      74.066406 + this.x,
      369.277344
    );
    ctx.bezierCurveTo(
      48.414062 + this.x,
      369.355469,
      26.40625 + this.x,
      379.25,
      15.046875 + this.x,
      393.597656
    );
    ctx.bezierCurveTo(
      20.507812 + this.x,
      372.546875,
      46.628906 + this.x,
      356.230469,
      78.628906 + this.x,
      356.019531
    );
    ctx.fill();

    // #path4
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(415.988281 + this.x, 385.433594);
    ctx.bezierCurveTo(
      400.105469 + this.x,
      364.542969,
      365.785156 + this.x,
      354.945312,
      334.203125 + this.x,
      361.128906
    );
    ctx.bezierCurveTo(
      321.78125 + this.x,
      327.5625,
      272.269531 + this.x,
      312.90625,
      235.257812 + this.x,
      331.523438
    );
    ctx.bezierCurveTo(
      218.046875 + this.x,
      286.230469,
      166.617188 + this.x,
      288.019531,
      151.40625 + this.x,
      334.40625
    );
    ctx.bezierCurveTo(
      124.402344 + this.x,
      321.746094,
      91.96875 + this.x,
      332.199219,
      79.09375 + this.x,
      355.183594
    );
    ctx.bezierCurveTo(
      85.054688 + this.x,
      323.871094,
      122.953125 + this.x,
      307.085938,
      153.632812 + this.x,
      321.730469
    );
    ctx.bezierCurveTo(
      168.324219 + this.x,
      276.117188,
      217.984375 + this.x,
      274.363281,
      234.597656 + this.x,
      318.898438
    );
    ctx.bezierCurveTo(
      270.332031 + this.x,
      300.597656,
      318.140625 + this.x,
      315.015625,
      330.144531 + this.x,
      348.0
    );
    ctx.bezierCurveTo(
      366.703125 + this.x,
      340.734375,
      407.0625 + this.x,
      355.730469,
      415.988281 + this.x,
      385.433594
    );
    ctx.fill();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(79.09375 + this.x, 355.183594);
    ctx.bezierCurveTo(
      79.027344 + this.x,
      355.460938,
      78.980469 + this.x,
      355.730469,
      78.933594 + this.x,
      356.019531
    );
    ctx.lineTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      78.773438 + this.x,
      355.730469,
      78.933594 + this.x,
      355.460938,
      79.09375 + this.x,
      355.183594
    );
    ctx.fill();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(320.621094 + this.x, 445.507812);
    ctx.bezierCurveTo(
      309.519531 + this.x,
      480.683594,
      244.421875 + this.x,
      488.714844,
      217.402344 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      182.152344 + this.x,
      488.773438,
      108.484375 + this.x,
      480.792969,
      90.148438 + this.x,
      444.960938
    );
    ctx.bezierCurveTo(
      46.65625 + this.x,
      451.410156,
      6.242188 + this.x,
      424.996094,
      15.238281 + this.x,
      392.90625
    );
    ctx.bezierCurveTo(
      22.007812 + this.x,
      416.488281,
      55.355469 + this.x,
      432.402344,
      90.148438 + this.x,
      427.246094
    );
    ctx.bezierCurveTo(
      99.71875 + this.x,
      445.945312,
      126.980469 + this.x,
      459.425781,
      159.125 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      182.988281 + this.x,
      459.425781,
      204.5 + this.x,
      438.40625,
      217.742188 + this.x,
      426.941406
    );
    ctx.bezierCurveTo(
      227.8125 + this.x,
      438.292969,
      245.167969 + this.x,
      459.425781,
      265.324219 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      292.3125 + this.x,
      459.425781,
      314.902344 + this.x,
      445.910156,
      320.621094 + this.x,
      427.789062
    );
    ctx.bezierCurveTo(
      359.957031 + this.x,
      440.4375,
      409.703125 + this.x,
      424.40625,
      416.925781 + this.x,
      389.121094
    );
    ctx.bezierCurveTo(
      426.226562 + this.x,
      434.582031,
      367.640625 + this.x,
      460.628906,
      320.621094 + this.x,
      445.507812
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(381.421875 + this.x, 427.042969);
    ctx.bezierCurveTo(
      353.882812 + this.x,
      450.460938,
      316.480469 + this.x,
      441.039062,
      303.25 + this.x,
      407.570312
    );
    ctx.bezierCurveTo(
      323.871094 + this.x,
      427.429688,
      353.886719 + this.x,
      434.90625,
      381.421875 + this.x,
      427.042969
    );
    ctx.fill();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(117.867188 + this.x, 415.21875);
    ctx.bezierCurveTo(
      98.132812 + this.x,
      445.496094,
      59.59375 + this.x,
      447.09375,
      37.386719 + this.x,
      418.769531
    );
    ctx.bezierCurveTo(
      62.804688 + this.x,
      431.945312,
      93.710938 + this.x,
      430.585938,
      117.867188 + this.x,
      415.21875
    );
    ctx.fill();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(259.222656 + this.x, 411.886719);
    ctx.bezierCurveTo(
      239.484375 + this.x,
      442.171875,
      200.949219 + this.x,
      443.765625,
      178.738281 + this.x,
      415.445312
    );
    ctx.bezierCurveTo(
      204.15625 + this.x,
      428.621094,
      235.0625 + this.x,
      427.257812,
      259.222656 + this.x,
      411.886719
    );
    ctx.fill();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(128.253906 + this.x, 383.539062);
    ctx.bezierCurveTo(
      147.992188 + this.x,
      353.257812,
      186.53125 + this.x,
      351.660156,
      208.738281 + this.x,
      379.984375
    );
    ctx.bezierCurveTo(
      183.324219 + this.x,
      366.808594,
      152.417969 + this.x,
      368.171875,
      128.253906 + this.x,
      383.539062
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(315.699219 + this.x, 371.640625);
    ctx.bezierCurveTo(
      335.4375 + this.x,
      341.359375,
      373.976562 + this.x,
      339.761719,
      396.183594 + this.x,
      368.085938
    );
    ctx.bezierCurveTo(
      370.765625 + this.x,
      354.910156,
      339.859375 + this.x,
      356.273438,
      315.699219 + this.x,
      371.640625
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(226.257812 + this.x, 341.4375);
    ctx.bezierCurveTo(
      243.699219 + this.x,
      309.777344,
      282.011719 + this.x,
      305.335938,
      306.257812 + this.x,
      331.9375
    );
    ctx.bezierCurveTo(
      279.933594 + this.x,
      320.679688,
      249.214844 + this.x,
      324.324219,
      226.257812 + this.x,
      341.4375
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(83.132812 + this.x, 344.152344);
    ctx.bezierCurveTo(
      102.578125 + this.x,
      313.679688,
      141.097656 + this.x,
      311.707031,
      163.582031 + this.x,
      339.8125
    );
    ctx.bezierCurveTo(
      138.035156 + this.x,
      326.886719,
      107.144531 + this.x,
      328.550781,
      83.132812 + this.x,
      344.152344
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      298.113281 + this.x,
      315.480469,
      295.828125 + this.x,
      321.96875,
      294.628906 + this.x,
      328.957031
    );
    ctx.bezierCurveTo(
      257.113281 + this.x,
      329.070312,
      224.921875 + this.x,
      343.5625,
      208.308594 + this.x,
      364.585938
    );
    ctx.bezierCurveTo(
      216.296875 + this.x,
      333.746094,
      254.5 + this.x,
      309.84375,
      301.296875 + this.x,
      309.535156
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(794.691406 + this.x, 352.625);
    ctx.bezierCurveTo(
      771.457031 + this.x,
      322.015625,
      721.269531 + this.x,
      307.953125,
      675.078125 + this.x,
      317.015625
    );
    ctx.bezierCurveTo(
      656.910156 + this.x,
      267.839844,
      584.5 + this.x,
      246.367188,
      530.371094 + this.x,
      273.644531
    );
    ctx.bezierCurveTo(
      505.203125 + this.x,
      207.289062,
      429.984375 + this.x,
      209.910156,
      407.734375 + this.x,
      277.867188
    );
    ctx.bezierCurveTo(
      368.242188 + this.x,
      259.320312,
      320.808594 + this.x,
      274.632812,
      301.980469 + this.x,
      308.308594
    );
    ctx.bezierCurveTo(
      310.699219 + this.x,
      262.433594,
      366.121094 + this.x,
      237.84375,
      410.992188 + this.x,
      259.296875
    );
    ctx.bezierCurveTo(
      432.480469 + this.x,
      192.46875,
      505.109375 + this.x,
      189.902344,
      529.402344 + this.x,
      255.144531
    );
    ctx.bezierCurveTo(
      581.667969 + this.x,
      228.339844,
      651.585938 + this.x,
      249.457031,
      669.144531 + this.x,
      297.785156
    );
    ctx.bezierCurveTo(
      722.609375 + this.x,
      287.140625,
      781.636719 + this.x,
      309.109375,
      794.691406 + this.x,
      352.625
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(301.980469 + this.x, 308.308594);
    ctx.bezierCurveTo(
      301.882812 + this.x,
      308.710938,
      301.8125 + this.x,
      309.109375,
      301.742188 + this.x,
      309.535156
    );
    ctx.lineTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      301.507812 + this.x,
      309.109375,
      301.742188 + this.x,
      308.710938,
      301.980469 + this.x,
      308.308594
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(655.214844 + this.x, 440.636719);
    ctx.bezierCurveTo(
      638.976562 + this.x,
      492.167969,
      543.769531 + this.x,
      503.933594,
      504.253906 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      452.703125 + this.x,
      504.019531,
      344.964844 + this.x,
      492.324219,
      318.144531 + this.x,
      439.832031
    );
    ctx.bezierCurveTo(
      254.539062 + this.x,
      449.28125,
      195.433594 + this.x,
      410.585938,
      208.59375 + this.x,
      363.574219
    );
    ctx.bezierCurveTo(
      218.488281 + this.x,
      398.117188,
      267.261719 + this.x,
      421.433594,
      318.144531 + this.x,
      413.878906
    );
    ctx.bezierCurveTo(
      332.144531 + this.x,
      441.273438,
      372.011719 + this.x,
      461.023438,
      419.023438 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      453.925781 + this.x,
      461.023438,
      485.386719 + this.x,
      430.230469,
      504.753906 + this.x,
      413.433594
    );
    ctx.bezierCurveTo(
      519.484375 + this.x,
      430.0625,

      544.863281 + this.x,
      461.023438,
      574.339844 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      613.8125 + this.x,
      461.023438,
      646.851562 + this.x,
      441.226562,
      655.214844 + this.x,
      414.679688
    );
    ctx.bezierCurveTo(
      712.742188 + this.x,
      433.210938,
      785.496094 + this.x,
      409.722656,
      796.058594 + this.x,
      358.027344
    );
    ctx.bezierCurveTo(
      809.664062 + this.x,
      424.625,
      723.980469 + this.x,
      462.785156,
      655.214844 + this.x,
      440.636719
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(744.132812 + this.x, 413.585938);
    ctx.bezierCurveTo(
      703.859375 + this.x,
      447.890625,
      649.160156 + this.x,
      434.089844,
      629.808594 + this.x,
      385.058594
    );
    ctx.bezierCurveTo(
      659.964844 + this.x,
      414.152344,
      703.867188 + this.x,
      425.105469,
      744.132812 + this.x,
      413.585938
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(358.6875 + this.x, 396.257812);
    ctx.bezierCurveTo(
      329.824219 + this.x,
      440.617188,
      273.460938 + this.x,
      442.957031,
      240.984375 + this.x,
      401.460938
    );
    ctx.bezierCurveTo(
      278.15625 + this.x,
      420.761719,
      323.355469 + this.x,
      418.769531,
      358.6875 + this.x,
      396.257812
    );
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(565.417969 + this.x, 391.382812);
    ctx.bezierCurveTo(
      536.546875 + this.x,
      435.746094,
      480.191406 + this.x,
      438.085938,
      447.707031 + this.x,
      396.589844
    );
    ctx.bezierCurveTo(
      484.882812 + this.x,
      415.890625,
      530.082031 + this.x,
      413.894531,
      565.417969 + this.x,
      391.382812
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(373.878906 + this.x, 349.847656);
    ctx.bezierCurveTo(
      402.746094 + this.x,
      305.484375,
      459.109375 + this.x,
      303.144531,
      491.585938 + this.x,
      344.640625
    );
    ctx.bezierCurveTo(
      454.414062 + this.x,
      325.335938,
      409.214844 + this.x,
      327.335938,
      373.878906 + this.x,
      349.847656
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(648.015625 + this.x, 332.417969);
    ctx.bezierCurveTo(
      676.882812 + this.x,
      288.054688,
      733.246094 + this.x,
      285.714844,
      765.722656 + this.x,
      327.207031
    );
    ctx.bezierCurveTo(
      728.550781 + this.x,
      307.90625,
      683.351562 + this.x,
      309.902344,
      648.015625 + this.x,
      332.417969
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(517.207031 + this.x, 288.167969);
    ctx.bezierCurveTo(
      542.71875 + this.x,
      241.785156,
      598.75 + this.x,
      235.277344,
      634.203125 + this.x,
      274.253906
    );
    ctx.bezierCurveTo(
      595.710938 + this.x,
      257.757812,
      550.78125 + this.x,
      263.097656,
      517.207031 + this.x,
      288.167969
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(307.890625 + this.x, 292.144531);
    ctx.bezierCurveTo(
      336.324219 + this.x,
      247.503906,
      392.660156 + this.x,
      244.609375,
      425.546875 + this.x,
      285.789062
    );
    ctx.bezierCurveTo(
      388.183594 + this.x,
      266.851562,
      343.003906 + this.x,
      269.289062,
      307.890625 + this.x,
      292.144531
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,
      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,

      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path29
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      589.199219 + this.x,
      431.851562,
      591.484375 + this.x,
      438.339844,
      592.683594 + this.x,
      445.328125
    );
    ctx.bezierCurveTo(
      630.199219 + this.x,
      445.441406,
      662.390625 + this.x,
      459.933594,
      679.003906 + this.x,
      480.957031
    );
    ctx.bezierCurveTo(
      671.015625 + this.x,
      450.117188,
      632.8125 + this.x,
      426.214844,
      586.015625 + this.x,
      425.902344
    );
    ctx.fill();

    // #path30
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(92.621094 + this.x, 468.996094);
    ctx.bezierCurveTo(
      115.855469 + this.x,
      438.386719,
      166.042969 + this.x,
      424.324219,
      212.234375 + this.x,
      433.386719
    );
    ctx.bezierCurveTo(
      230.402344 + this.x,
      384.210938,
      302.8125 + this.x,
      362.738281,
      356.941406 + this.x,
      390.015625
    );
    ctx.bezierCurveTo(
      382.113281 + this.x,
      323.660156,
      457.328125 + this.x,
      326.28125,
      479.578125 + this.x,
      394.238281
    );
    ctx.bezierCurveTo(
      519.070312 + this.x,
      375.691406,
      566.503906 + this.x,
      391.003906,
      585.332031 + this.x,
      424.679688
    );
    ctx.bezierCurveTo(
      576.613281 + this.x,
      378.804688,
      521.191406 + this.x,
      354.214844,
      476.320312 + this.x,
      375.667969
    );
    ctx.bezierCurveTo(
      454.832031 + this.x,
      308.839844,
      382.203125 + this.x,
      306.273438,
      357.910156 + this.x,
      371.515625
    );
    ctx.bezierCurveTo(
      305.644531 + this.x,
      344.707031,
      235.726562 + this.x,
      365.828125,
      218.167969 + this.x,
      414.15625
    );
    ctx.bezierCurveTo(
      164.703125 + this.x,
      403.511719,
      105.675781 + this.x,
      425.480469,
      92.621094 + this.x,

      468.996094
    );
    ctx.fill();

    // #path31
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(585.332031 + this.x, 424.679688);
    ctx.bezierCurveTo(
      585.429688 + this.x,
      425.082031,
      585.5 + this.x,
      425.480469,
      585.570312 + this.x,
      425.902344
    );
    ctx.lineTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      585.804688 + this.x,
      425.480469,
      585.570312 + this.x,
      425.082031,
      585.332031 + this.x,
      424.679688
    );
    ctx.fill();

    // #path32
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(232.097656 + this.x, 557.007812);
    ctx.bezierCurveTo(
      248.335938 + this.x,
      608.539062,
      343.542969 + this.x,
      620.304688,
      383.058594 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      434.609375 + this.x,
      620.390625,
      542.347656 + this.x,
      608.695312,
      569.167969 + this.x,
      556.203125
    );
    ctx.bezierCurveTo(
      632.777344 + this.x,
      565.648438,
      691.878906 + this.x,
      526.957031,
      678.71875 + this.x,
      479.945312
    );
    ctx.bezierCurveTo(
      668.824219 + this.x,
      514.488281,
      620.054688 + this.x,
      537.804688,
      569.167969 + this.x,
      530.25
    );
    ctx.bezierCurveTo(
      555.167969 + this.x,
      557.644531,
      515.300781 + this.x,
      577.394531,
      468.289062 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      433.386719 + this.x,
      577.394531,
      401.925781 + this.x,
      546.601562,
      382.558594 + this.x,
      529.804688
    );
    ctx.bezierCurveTo(
      367.828125 + this.x,
      546.433594,
      342.449219 + this.x,
      577.394531,
      312.972656 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      273.5 + this.x,
      577.394531,
      240.460938 + this.x,
      557.597656,
      232.097656 + this.x,
      531.050781
    );
    ctx.bezierCurveTo(
      174.570312 + this.x,
      549.578125,
      101.816406 + this.x,
      526.09375,
      91.253906 + this.x,
      474.398438
    );
    ctx.bezierCurveTo(
      77.648438 + this.x,
      540.996094,
      163.332031 + this.x,
      579.15625,
      232.097656 + this.x,
      557.007812
    );
    ctx.fill();

    // #path33
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(143.179688 + this.x, 529.957031);
    ctx.bezierCurveTo(
      183.453125 + this.x,
      564.261719,
      238.152344 + this.x,
      550.460938,
      257.503906 + this.x,
      501.429688
    );
    ctx.bezierCurveTo(
      227.347656 + this.x,
      530.523438,
      183.445312 + this.x,
      541.476562,
      143.179688 + this.x,
      529.957031
    );
    ctx.fill();

    // #path34
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(528.625 + this.x, 512.628906);
    ctx.bezierCurveTo(
      557.488281 + this.x,
      556.988281,
      613.851562 + this.x,
      559.328125,
      646.328125 + this.x,
      517.832031
    );
    ctx.bezierCurveTo(
      609.15625 + this.x,
      537.132812,
      563.957031 + this.x,
      535.140625,
      528.625 + this.x,
      512.628906
    );
    ctx.fill();

    // #path35
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(321.894531 + this.x, 507.753906);
    ctx.bezierCurveTo(
      350.765625 + this.x,
      552.117188,

      407.121094 + this.x,
      554.457031,
      439.605469 + this.x,
      512.960938
    );
    ctx.bezierCurveTo(
      402.433594 + this.x,
      532.261719,
      357.230469 + this.x,
      530.265625,
      321.894531 + this.x,
      507.753906
    );
    ctx.fill();

    // #path36
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(513.433594 + this.x, 466.21875);
    ctx.bezierCurveTo(
      484.566406 + this.x,
      421.855469,
      428.203125 + this.x,
      419.515625,
      395.726562 + this.x,
      461.011719
    );
    ctx.bezierCurveTo(
      432.898438 + this.x,
      441.707031,
      478.097656 + this.x,
      443.703125,
      513.433594 + this.x,
      466.21875
    );
    ctx.fill();

    // #path37
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(239.296875 + this.x, 448.789062);
    ctx.bezierCurveTo(
      210.429688 + this.x,
      404.425781,
      154.066406 + this.x,
      402.085938,
      121.589844 + this.x,
      443.578125
    );
    ctx.bezierCurveTo(
      158.761719 + this.x,
      424.277344,
      203.960938 + this.x,
      426.273438,
      239.296875 + this.x,
      448.789062
    );
    ctx.fill();

    // #path38
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(370.105469 + this.x, 404.539062);
    ctx.bezierCurveTo(
      344.597656 + this.x,
      358.15625,
      288.5625 + this.x,
      351.648438,
      253.109375 + this.x,
      390.625
    );
    ctx.bezierCurveTo(
      291.601562 + this.x,
      374.128906,
      336.53125 + this.x,
      379.46875,
      370.105469 + this.x,
      404.539062
    );
    ctx.fill();

    // #path39
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(579.421875 + this.x, 408.515625);
    ctx.bezierCurveTo(
      550.988281 + this.x,
      363.875,
      494.652344 + this.x,
      360.980469,
      461.765625 + this.x,
      402.160156
    );
    ctx.bezierCurveTo(
      499.132812 + this.x,
      383.222656,
      544.308594 + this.x,
      385.660156,
      579.421875 + this.x,
      408.515625
    );
    ctx.fill();
    ctx.translate(-1500, -400);
  }

  draw5(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");

    this.x -= this.speed * 0.1;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    // ctx.reset();

    // ctx.translate(0, 100);
    ctx.save();
    ctx.translate(2000, 0);

    // ctx.reset();

    // const scaleFactor = 0.5;
    // ctx.scale(scaleFactor, scaleFactor);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path2
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(330.140625 + this.x, 348.0);
    ctx.bezierCurveTo(
      318.148438 + this.x,
      315.007812,
      270.328125 + this.x,
      300.589844,
      234.589844 + this.x,
      318.894531
    );
    ctx.bezierCurveTo(
      217.980469 + this.x,
      274.367188,
      168.316406 + this.x,
      276.121094,
      153.625 + this.x,
      321.738281
    );
    ctx.bezierCurveTo(
      122.671875 + this.x,
      306.960938,
      84.375 + this.x,
      324.183594,
      78.9375 + this.x,
      356.011719
    );
    ctx.bezierCurveTo(
      42.675781 + this.x,
      356.140625,
      13.925781 + this.x,
      376.925781,
      13.992188 + this.x,
      401.917969
    );
    ctx.bezierCurveTo(
      14.066406 + this.x,
      429.910156,
      50.894531 + this.x,
      450.746094,
      90.148438 + this.x,
      444.964844
    );
    ctx.bezierCurveTo(
      108.539062 + this.x,
      480.855469,
      182.199219 + this.x,
      488.726562,
      217.410156 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      244.339844 + this.x,
      488.632812,
      309.460938 + this.x,
      480.78125,
      320.628906 + this.x,
      445.515625
    );
    ctx.bezierCurveTo(
      363.257812 + this.x,
      459.214844,
      417.8125 + this.x,
      439.222656,
      417.8125 + this.x,
      397.980469
    );
    ctx.bezierCurveTo(
      417.8125 + this.x,
      360.089844,
      371.53125 + this.x,
      339.761719,
      330.140625 + this.x,
      348.0
    );
    ctx.fill();

    // #path3
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      76.449219 + this.x,
      360.082031,
      74.890625 + this.x,
      364.507812,
      74.066406 + this.x,
      369.277344
    );
    ctx.bezierCurveTo(
      48.414062 + this.x,
      369.355469,
      26.40625 + this.x,
      379.25,
      15.046875 + this.x,
      393.597656
    );
    ctx.bezierCurveTo(
      20.507812 + this.x,
      372.546875,
      46.628906 + this.x,
      356.230469,
      78.628906 + this.x,
      356.019531
    );
    ctx.fill();

    // #path4
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(415.988281 + this.x, 385.433594);
    ctx.bezierCurveTo(
      400.105469 + this.x,
      364.542969,
      365.785156 + this.x,
      354.945312,
      334.203125 + this.x,
      361.128906
    );
    ctx.bezierCurveTo(
      321.78125 + this.x,
      327.5625,
      272.269531 + this.x,
      312.90625,
      235.257812 + this.x,
      331.523438
    );
    ctx.bezierCurveTo(
      218.046875 + this.x,
      286.230469,
      166.617188 + this.x,
      288.019531,
      151.40625 + this.x,
      334.40625
    );
    ctx.bezierCurveTo(
      124.402344 + this.x,
      321.746094,
      91.96875 + this.x,
      332.199219,
      79.09375 + this.x,
      355.183594
    );
    ctx.bezierCurveTo(
      85.054688 + this.x,
      323.871094,
      122.953125 + this.x,
      307.085938,
      153.632812 + this.x,
      321.730469
    );
    ctx.bezierCurveTo(
      168.324219 + this.x,
      276.117188,
      217.984375 + this.x,
      274.363281,
      234.597656 + this.x,
      318.898438
    );
    ctx.bezierCurveTo(
      270.332031 + this.x,
      300.597656,
      318.140625 + this.x,
      315.015625,
      330.144531 + this.x,
      348.0
    );
    ctx.bezierCurveTo(
      366.703125 + this.x,
      340.734375,
      407.0625 + this.x,
      355.730469,
      415.988281 + this.x,
      385.433594
    );
    ctx.fill();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(79.09375 + this.x, 355.183594);
    ctx.bezierCurveTo(
      79.027344 + this.x,
      355.460938,
      78.980469 + this.x,
      355.730469,
      78.933594 + this.x,
      356.019531
    );
    ctx.lineTo(78.628906 + this.x, 356.019531);
    ctx.bezierCurveTo(
      78.773438 + this.x,
      355.730469,
      78.933594 + this.x,
      355.460938,
      79.09375 + this.x,
      355.183594
    );
    ctx.fill();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(320.621094 + this.x, 445.507812);
    ctx.bezierCurveTo(
      309.519531 + this.x,
      480.683594,
      244.421875 + this.x,
      488.714844,
      217.402344 + this.x,
      458.25
    );
    ctx.bezierCurveTo(
      182.152344 + this.x,
      488.773438,
      108.484375 + this.x,
      480.792969,
      90.148438 + this.x,
      444.960938
    );
    ctx.bezierCurveTo(
      46.65625 + this.x,
      451.410156,
      6.242188 + this.x,
      424.996094,
      15.238281 + this.x,
      392.90625
    );
    ctx.bezierCurveTo(
      22.007812 + this.x,
      416.488281,
      55.355469 + this.x,
      432.402344,
      90.148438 + this.x,
      427.246094
    );
    ctx.bezierCurveTo(
      99.71875 + this.x,
      445.945312,
      126.980469 + this.x,
      459.425781,
      159.125 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      182.988281 + this.x,
      459.425781,
      204.5 + this.x,
      438.40625,
      217.742188 + this.x,
      426.941406
    );
    ctx.bezierCurveTo(
      227.8125 + this.x,
      438.292969,
      245.167969 + this.x,
      459.425781,
      265.324219 + this.x,
      459.425781
    );
    ctx.bezierCurveTo(
      292.3125 + this.x,
      459.425781,
      314.902344 + this.x,
      445.910156,
      320.621094 + this.x,
      427.789062
    );
    ctx.bezierCurveTo(
      359.957031 + this.x,
      440.4375,
      409.703125 + this.x,
      424.40625,
      416.925781 + this.x,
      389.121094
    );
    ctx.bezierCurveTo(
      426.226562 + this.x,
      434.582031,
      367.640625 + this.x,
      460.628906,
      320.621094 + this.x,
      445.507812
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(381.421875 + this.x, 427.042969);
    ctx.bezierCurveTo(
      353.882812 + this.x,
      450.460938,
      316.480469 + this.x,
      441.039062,
      303.25 + this.x,
      407.570312
    );
    ctx.bezierCurveTo(
      323.871094 + this.x,
      427.429688,
      353.886719 + this.x,
      434.90625,
      381.421875 + this.x,
      427.042969
    );
    ctx.fill();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(117.867188 + this.x, 415.21875);
    ctx.bezierCurveTo(
      98.132812 + this.x,
      445.496094,
      59.59375 + this.x,
      447.09375,
      37.386719 + this.x,
      418.769531
    );
    ctx.bezierCurveTo(
      62.804688 + this.x,
      431.945312,
      93.710938 + this.x,
      430.585938,
      117.867188 + this.x,
      415.21875
    );
    ctx.fill();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(259.222656 + this.x, 411.886719);
    ctx.bezierCurveTo(
      239.484375 + this.x,
      442.171875,
      200.949219 + this.x,
      443.765625,
      178.738281 + this.x,
      415.445312
    );
    ctx.bezierCurveTo(
      204.15625 + this.x,
      428.621094,
      235.0625 + this.x,
      427.257812,
      259.222656 + this.x,
      411.886719
    );
    ctx.fill();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(128.253906 + this.x, 383.539062);
    ctx.bezierCurveTo(
      147.992188 + this.x,
      353.257812,
      186.53125 + this.x,
      351.660156,
      208.738281 + this.x,
      379.984375
    );
    ctx.bezierCurveTo(
      183.324219 + this.x,
      366.808594,
      152.417969 + this.x,
      368.171875,
      128.253906 + this.x,
      383.539062
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(315.699219 + this.x, 371.640625);
    ctx.bezierCurveTo(
      335.4375 + this.x,
      341.359375,
      373.976562 + this.x,
      339.761719,
      396.183594 + this.x,
      368.085938
    );
    ctx.bezierCurveTo(
      370.765625 + this.x,
      354.910156,
      339.859375 + this.x,
      356.273438,
      315.699219 + this.x,
      371.640625
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(226.257812 + this.x, 341.4375);
    ctx.bezierCurveTo(
      243.699219 + this.x,
      309.777344,
      282.011719 + this.x,
      305.335938,
      306.257812 + this.x,
      331.9375
    );
    ctx.bezierCurveTo(
      279.933594 + this.x,
      320.679688,
      249.214844 + this.x,
      324.324219,
      226.257812 + this.x,
      341.4375
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(83.132812 + this.x, 344.152344);
    ctx.bezierCurveTo(
      102.578125 + this.x,
      313.679688,
      141.097656 + this.x,
      311.707031,
      163.582031 + this.x,
      339.8125
    );
    ctx.bezierCurveTo(
      138.035156 + this.x,
      326.886719,
      107.144531 + this.x,
      328.550781,
      83.132812 + this.x,
      344.152344
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(669.136719 + this.x, 297.785156);
    ctx.bezierCurveTo(
      651.59375 + this.x,
      249.449219,
      581.660156 + this.x,
      228.328125,
      529.390625 + this.x,
      255.140625
    );
    ctx.bezierCurveTo(
      505.101562 + this.x,
      189.90625,
      432.46875 + this.x,
      192.480469,
      410.980469 + this.x,
      259.308594
    );
    ctx.bezierCurveTo(
      365.714844 + this.x,
      237.660156,
      309.703125 + this.x,
      262.890625,
      301.753906 + this.x,
      309.523438
    );
    ctx.bezierCurveTo(
      248.714844 + this.x,
      309.707031,
      206.675781 + this.x,
      340.160156,
      206.765625 + this.x,
      376.773438
    );
    ctx.bezierCurveTo(
      206.875 + this.x,
      417.785156,
      260.738281 + this.x,
      448.3125,
      318.144531 + this.x,
      439.835938
    );
    ctx.bezierCurveTo(
      345.042969 + this.x,
      492.417969,
      452.773438 + this.x,
      503.949219,
      504.265625 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      543.652344 + this.x,
      503.8125,
      638.894531 + this.x,
      492.308594,
      655.226562 + this.x,
      440.648438
    );
    ctx.bezierCurveTo(
      717.566406 + this.x,
      460.71875,
      797.355469 + this.x,
      431.425781,
      797.355469 + this.x,
      371.007812
    );
    ctx.bezierCurveTo(
      797.355469 + this.x,
      315.492188,
      729.671875 + this.x,
      285.714844,
      669.136719 + this.x,
      297.785156
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      298.113281 + this.x,
      315.480469,
      295.828125 + this.x,
      321.96875,
      294.628906 + this.x,
      328.957031
    );
    ctx.bezierCurveTo(
      257.113281 + this.x,
      329.070312,
      224.921875 + this.x,
      343.5625,
      208.308594 + this.x,
      364.585938
    );
    ctx.bezierCurveTo(
      216.296875 + this.x,
      333.746094,
      254.5 + this.x,
      309.84375,
      301.296875 + this.x,
      309.535156
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(794.691406 + this.x, 352.625);
    ctx.bezierCurveTo(
      771.457031 + this.x,
      322.015625,
      721.269531 + this.x,
      307.953125,
      675.078125 + this.x,
      317.015625
    );
    ctx.bezierCurveTo(
      656.910156 + this.x,
      267.839844,
      584.5 + this.x,
      246.367188,
      530.371094 + this.x,
      273.644531
    );
    ctx.bezierCurveTo(
      505.203125 + this.x,
      207.289062,
      429.984375 + this.x,
      209.910156,
      407.734375 + this.x,
      277.867188
    );
    ctx.bezierCurveTo(
      368.242188 + this.x,
      259.320312,
      320.808594 + this.x,
      274.632812,
      301.980469 + this.x,
      308.308594
    );
    ctx.bezierCurveTo(
      310.699219 + this.x,
      262.433594,
      366.121094 + this.x,
      237.84375,
      410.992188 + this.x,
      259.296875
    );
    ctx.bezierCurveTo(
      432.480469 + this.x,
      192.46875,
      505.109375 + this.x,
      189.902344,
      529.402344 + this.x,
      255.144531
    );
    ctx.bezierCurveTo(
      581.667969 + this.x,
      228.339844,
      651.585938 + this.x,
      249.457031,
      669.144531 + this.x,
      297.785156
    );
    ctx.bezierCurveTo(
      722.609375 + this.x,
      287.140625,
      781.636719 + this.x,
      309.109375,
      794.691406 + this.x,
      352.625
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(301.980469 + this.x, 308.308594);
    ctx.bezierCurveTo(
      301.882812 + this.x,
      308.710938,
      301.8125 + this.x,
      309.109375,
      301.742188 + this.x,
      309.535156
    );
    ctx.lineTo(301.296875 + this.x, 309.535156);
    ctx.bezierCurveTo(
      301.507812 + this.x,
      309.109375,
      301.742188 + this.x,
      308.710938,
      301.980469 + this.x,
      308.308594
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(655.214844 + this.x, 440.636719);
    ctx.bezierCurveTo(
      638.976562 + this.x,
      492.167969,
      543.769531 + this.x,
      503.933594,
      504.253906 + this.x,
      459.304688
    );
    ctx.bezierCurveTo(
      452.703125 + this.x,
      504.019531,
      344.964844 + this.x,
      492.324219,
      318.144531 + this.x,
      439.832031
    );
    ctx.bezierCurveTo(
      254.539062 + this.x,
      449.28125,
      195.433594 + this.x,
      410.585938,
      208.59375 + this.x,
      363.574219
    );
    ctx.bezierCurveTo(
      218.488281 + this.x,
      398.117188,
      267.261719 + this.x,
      421.433594,
      318.144531 + this.x,
      413.878906
    );
    ctx.bezierCurveTo(
      332.144531 + this.x,
      441.273438,
      372.011719 + this.x,
      461.023438,
      419.023438 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      453.925781 + this.x,
      461.023438,
      485.386719 + this.x,
      430.230469,
      504.753906 + this.x,
      413.433594
    );
    ctx.bezierCurveTo(
      519.484375 + this.x,
      430.0625,

      544.863281 + this.x,
      461.023438,
      574.339844 + this.x,
      461.023438
    );
    ctx.bezierCurveTo(
      613.8125 + this.x,
      461.023438,
      646.851562 + this.x,
      441.226562,
      655.214844 + this.x,
      414.679688
    );
    ctx.bezierCurveTo(
      712.742188 + this.x,
      433.210938,
      785.496094 + this.x,
      409.722656,
      796.058594 + this.x,
      358.027344
    );
    ctx.bezierCurveTo(
      809.664062 + this.x,
      424.625,
      723.980469 + this.x,
      462.785156,
      655.214844 + this.x,
      440.636719
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(744.132812 + this.x, 413.585938);
    ctx.bezierCurveTo(
      703.859375 + this.x,
      447.890625,
      649.160156 + this.x,
      434.089844,
      629.808594 + this.x,
      385.058594
    );
    ctx.bezierCurveTo(
      659.964844 + this.x,
      414.152344,
      703.867188 + this.x,
      425.105469,
      744.132812 + this.x,
      413.585938
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(358.6875 + this.x, 396.257812);
    ctx.bezierCurveTo(
      329.824219 + this.x,
      440.617188,
      273.460938 + this.x,
      442.957031,
      240.984375 + this.x,
      401.460938
    );
    ctx.bezierCurveTo(
      278.15625 + this.x,
      420.761719,
      323.355469 + this.x,
      418.769531,
      358.6875 + this.x,
      396.257812
    );
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(565.417969 + this.x, 391.382812);
    ctx.bezierCurveTo(
      536.546875 + this.x,
      435.746094,
      480.191406 + this.x,
      438.085938,
      447.707031 + this.x,
      396.589844
    );
    ctx.bezierCurveTo(
      484.882812 + this.x,
      415.890625,
      530.082031 + this.x,
      413.894531,
      565.417969 + this.x,
      391.382812
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(373.878906 + this.x, 349.847656);
    ctx.bezierCurveTo(
      402.746094 + this.x,
      305.484375,
      459.109375 + this.x,
      303.144531,
      491.585938 + this.x,
      344.640625
    );
    ctx.bezierCurveTo(
      454.414062 + this.x,
      325.335938,
      409.214844 + this.x,
      327.335938,
      373.878906 + this.x,
      349.847656
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(648.015625 + this.x, 332.417969);
    ctx.bezierCurveTo(
      676.882812 + this.x,
      288.054688,
      733.246094 + this.x,
      285.714844,
      765.722656 + this.x,
      327.207031
    );
    ctx.bezierCurveTo(
      728.550781 + this.x,
      307.90625,
      683.351562 + this.x,
      309.902344,
      648.015625 + this.x,
      332.417969
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(517.207031 + this.x, 288.167969);
    ctx.bezierCurveTo(
      542.71875 + this.x,
      241.785156,
      598.75 + this.x,
      235.277344,
      634.203125 + this.x,
      274.253906
    );
    ctx.bezierCurveTo(
      595.710938 + this.x,
      257.757812,
      550.78125 + this.x,
      263.097656,
      517.207031 + this.x,
      288.167969
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(307.890625 + this.x, 292.144531);
    ctx.bezierCurveTo(
      336.324219 + this.x,
      247.503906,
      392.660156 + this.x,
      244.609375,
      425.546875 + this.x,
      285.789062
    );
    ctx.bezierCurveTo(
      388.183594 + this.x,
      266.851562,
      343.003906 + this.x,
      269.289062,
      307.890625 + this.x,
      292.144531
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,
      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(218.175781 + this.x, 414.15625);
    ctx.bezierCurveTo(
      235.71875 + this.x,
      365.820312,
      305.652344 + this.x,
      344.699219,
      357.921875 + this.x,
      371.511719
    );
    ctx.bezierCurveTo(
      382.210938 + this.x,
      306.277344,
      454.84375 + this.x,
      308.851562,
      476.332031 + this.x,
      375.679688
    );
    ctx.bezierCurveTo(
      521.597656 + this.x,
      354.03125,
      577.609375 + this.x,
      379.261719,
      585.558594 + this.x,
      425.894531
    );
    ctx.bezierCurveTo(
      638.597656 + this.x,
      426.078125,

      680.640625 + this.x,
      456.53125,
      680.546875 + this.x,
      493.144531
    );
    ctx.bezierCurveTo(
      680.4375 + this.x,
      534.15625,
      626.574219 + this.x,
      564.679688,
      569.167969 + this.x,
      556.207031
    );
    ctx.bezierCurveTo(
      542.273438 + this.x,
      608.789062,
      434.539062 + this.x,
      620.320312,
      383.046875 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      343.660156 + this.x,
      620.183594,
      248.417969 + this.x,
      608.679688,
      232.085938 + this.x,
      557.019531
    );
    ctx.bezierCurveTo(
      169.746094 + this.x,
      577.089844,
      89.957031 + this.x,
      547.792969,
      89.957031 + this.x,
      487.378906
    );
    ctx.bezierCurveTo(
      89.957031 + this.x,
      431.863281,
      157.640625 + this.x,
      402.085938,
      218.175781 + this.x,
      414.15625
    );
    ctx.fill();

    // #path29
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      589.199219 + this.x,
      431.851562,
      591.484375 + this.x,
      438.339844,
      592.683594 + this.x,
      445.328125
    );
    ctx.bezierCurveTo(
      630.199219 + this.x,
      445.441406,
      662.390625 + this.x,
      459.933594,
      679.003906 + this.x,
      480.957031
    );
    ctx.bezierCurveTo(
      671.015625 + this.x,
      450.117188,
      632.8125 + this.x,
      426.214844,
      586.015625 + this.x,
      425.902344
    );
    ctx.fill();

    // #path30
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(92.621094 + this.x, 468.996094);
    ctx.bezierCurveTo(
      115.855469 + this.x,
      438.386719,
      166.042969 + this.x,
      424.324219,
      212.234375 + this.x,
      433.386719
    );
    ctx.bezierCurveTo(
      230.402344 + this.x,
      384.210938,
      302.8125 + this.x,
      362.738281,
      356.941406 + this.x,
      390.015625
    );
    ctx.bezierCurveTo(
      382.113281 + this.x,
      323.660156,
      457.328125 + this.x,
      326.28125,
      479.578125 + this.x,
      394.238281
    );
    ctx.bezierCurveTo(
      519.070312 + this.x,
      375.691406,
      566.503906 + this.x,
      391.003906,
      585.332031 + this.x,
      424.679688
    );
    ctx.bezierCurveTo(
      576.613281 + this.x,
      378.804688,
      521.191406 + this.x,
      354.214844,
      476.320312 + this.x,
      375.667969
    );
    ctx.bezierCurveTo(
      454.832031 + this.x,
      308.839844,
      382.203125 + this.x,
      306.273438,
      357.910156 + this.x,
      371.515625
    );
    ctx.bezierCurveTo(
      305.644531 + this.x,
      344.707031,
      235.726562 + this.x,
      365.828125,
      218.167969 + this.x,
      414.15625
    );
    ctx.bezierCurveTo(
      164.703125 + this.x,
      403.511719,
      105.675781 + this.x,
      425.480469,
      92.621094 + this.x,

      468.996094
    );
    ctx.fill();

    // #path31
    ctx.beginPath();
    ctx.fillStyle = "rgb(227, 242, 255)";
    ctx.moveTo(585.332031 + this.x, 424.679688);
    ctx.bezierCurveTo(
      585.429688 + this.x,
      425.082031,
      585.5 + this.x,
      425.480469,
      585.570312 + this.x,
      425.902344
    );
    ctx.lineTo(586.015625 + this.x, 425.902344);
    ctx.bezierCurveTo(
      585.804688 + this.x,
      425.480469,
      585.570312 + this.x,
      425.082031,
      585.332031 + this.x,
      424.679688
    );
    ctx.fill();

    // #path32
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(232.097656 + this.x, 557.007812);
    ctx.bezierCurveTo(
      248.335938 + this.x,
      608.539062,
      343.542969 + this.x,
      620.304688,
      383.058594 + this.x,
      575.675781
    );
    ctx.bezierCurveTo(
      434.609375 + this.x,
      620.390625,
      542.347656 + this.x,
      608.695312,
      569.167969 + this.x,
      556.203125
    );
    ctx.bezierCurveTo(
      632.777344 + this.x,
      565.648438,
      691.878906 + this.x,
      526.957031,
      678.71875 + this.x,
      479.945312
    );
    ctx.bezierCurveTo(
      668.824219 + this.x,
      514.488281,
      620.054688 + this.x,
      537.804688,
      569.167969 + this.x,
      530.25
    );
    ctx.bezierCurveTo(
      555.167969 + this.x,
      557.644531,
      515.300781 + this.x,
      577.394531,
      468.289062 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      433.386719 + this.x,
      577.394531,
      401.925781 + this.x,
      546.601562,
      382.558594 + this.x,
      529.804688
    );
    ctx.bezierCurveTo(
      367.828125 + this.x,
      546.433594,
      342.449219 + this.x,
      577.394531,
      312.972656 + this.x,
      577.394531
    );
    ctx.bezierCurveTo(
      273.5 + this.x,
      577.394531,
      240.460938 + this.x,
      557.597656,
      232.097656 + this.x,
      531.050781
    );
    ctx.bezierCurveTo(
      174.570312 + this.x,
      549.578125,
      101.816406 + this.x,
      526.09375,
      91.253906 + this.x,
      474.398438
    );
    ctx.bezierCurveTo(
      77.648438 + this.x,
      540.996094,
      163.332031 + this.x,
      579.15625,
      232.097656 + this.x,
      557.007812
    );
    ctx.fill();

    // #path33
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(143.179688 + this.x, 529.957031);
    ctx.bezierCurveTo(
      183.453125 + this.x,
      564.261719,
      238.152344 + this.x,
      550.460938,
      257.503906 + this.x,
      501.429688
    );
    ctx.bezierCurveTo(
      227.347656 + this.x,
      530.523438,
      183.445312 + this.x,
      541.476562,
      143.179688 + this.x,
      529.957031
    );
    ctx.fill();

    // #path34
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(528.625 + this.x, 512.628906);
    ctx.bezierCurveTo(
      557.488281 + this.x,
      556.988281,
      613.851562 + this.x,
      559.328125,
      646.328125 + this.x,
      517.832031
    );
    ctx.bezierCurveTo(
      609.15625 + this.x,
      537.132812,
      563.957031 + this.x,
      535.140625,
      528.625 + this.x,
      512.628906
    );
    ctx.fill();

    // #path35
    ctx.beginPath();
    ctx.fillStyle = "rgb(182, 213, 240)";
    ctx.moveTo(321.894531 + this.x, 507.753906);
    ctx.bezierCurveTo(
      350.765625 + this.x,
      552.117188,

      407.121094 + this.x,
      554.457031,
      439.605469 + this.x,
      512.960938
    );
    ctx.bezierCurveTo(
      402.433594 + this.x,
      532.261719,
      357.230469 + this.x,
      530.265625,
      321.894531 + this.x,
      507.753906
    );
    ctx.fill();

    // #path36
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(513.433594 + this.x, 466.21875);
    ctx.bezierCurveTo(
      484.566406 + this.x,
      421.855469,
      428.203125 + this.x,
      419.515625,
      395.726562 + this.x,
      461.011719
    );
    ctx.bezierCurveTo(
      432.898438 + this.x,
      441.707031,
      478.097656 + this.x,
      443.703125,
      513.433594 + this.x,
      466.21875
    );
    ctx.fill();

    // #path37
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(239.296875 + this.x, 448.789062);
    ctx.bezierCurveTo(
      210.429688 + this.x,
      404.425781,
      154.066406 + this.x,
      402.085938,
      121.589844 + this.x,
      443.578125
    );
    ctx.bezierCurveTo(
      158.761719 + this.x,
      424.277344,
      203.960938 + this.x,
      426.273438,
      239.296875 + this.x,
      448.789062
    );
    ctx.fill();

    // #path38
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(370.105469 + this.x, 404.539062);
    ctx.bezierCurveTo(
      344.597656 + this.x,
      358.15625,
      288.5625 + this.x,
      351.648438,
      253.109375 + this.x,
      390.625
    );
    ctx.bezierCurveTo(
      291.601562 + this.x,
      374.128906,
      336.53125 + this.x,
      379.46875,
      370.105469 + this.x,
      404.539062
    );
    ctx.fill();

    // #path39
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.moveTo(579.421875 + this.x, 408.515625);
    ctx.bezierCurveTo(
      550.988281 + this.x,
      363.875,
      494.652344 + this.x,
      360.980469,
      461.765625 + this.x,
      402.160156
    );
    ctx.bezierCurveTo(
      499.132812 + this.x,
      383.222656,
      544.308594 + this.x,
      385.660156,
      579.421875 + this.x,
      408.515625
    );
    ctx.fill();
    ctx.translate(-2000, 0);
  }



  hot(ms, ctx) {
    // console.log(ms * 0.0001);
    const canvas = this.el;
    const { width: W, height: H } = canvas;
    // const ctx = canvas.getContext("2d");
    let speed = 2;
    this.x -= speed;

    if (this.x < -this.el.width) {
      this.x = this.el.width;
    }
    // ctx.reset();

    ctx.save();
    ctx.translate(1800, 100);

    // // #path1
    ctx.beginPath();
    ctx.fillStyle = "rgb(228, 178, 35)";
    ctx.moveTo(456.363281, 700.632812);
    ctx.bezierCurveTo(
      450.542969,
      728.300781,
      448.988281,
      761.726562,
      443.957031,
      776.367188
    );
    ctx.bezierCurveTo(
      441.304688,
      784.132812,
      422.417969,
      784.671875,
      399.074219,
      784.835938
    );
    ctx.bezierCurveTo(
      378.40625,
      784.980469,
      353.035156,
      785.808594,
      349.886719,
      776.367188
    );
    ctx.bezierCurveTo(
      343.195312,
      756.257812,
      343.113281,
      729.566406,
      337.730469,
      699.351562
    );
    ctx.bezierCurveTo(
      335.058594,
      684.398438,
      340.917969,
      680.878906,
      345.351562,
      680.878906
    );
    ctx.lineTo(364.425781, 680.878906);
    ctx.lineTo(362.394531, 600.074219);
    ctx.lineTo(363.578125, 599.121094);
    ctx.lineTo(366.351562, 680.878906);
    ctx.lineTo(379.378906, 680.878906);
    ctx.lineTo(379.171875, 599.742188);
    ctx.lineTo(380.558594, 599.453125);
    ctx.lineTo(381.304688, 680.878906);
    ctx.lineTo(394.042969, 680.878906);
    ctx.lineTo(394.871094, 599.597656);
    ctx.lineTo(396.28125, 599.597656);
    ctx.lineTo(395.96875, 680.878906);
    ctx.lineTo(413.488281, 680.878906);
    ctx.lineTo(413.71875, 599.453125);
    ctx.lineTo(415.105469, 599.742188);
    ctx.lineTo(415.417969, 680.878906);
    ctx.lineTo(426.515625, 680.878906);
    ctx.lineTo(428.546875, 599.121094);
    ctx.lineTo(429.726562, 600.074219);
    ctx.lineTo(428.445312, 680.878906);
    ctx.lineTo(448.511719, 680.878906);
    ctx.bezierCurveTo(
      452.386719,
      680.878906,
      460.566406,
      680.652344,
      456.363281,
      700.632812
    );
    ctx.fill();

    // #g5
    ctx.save();

    // #path5
    ctx.beginPath();
    ctx.fillStyle = "rgb(239, 53, 67)";
    ctx.moveTo(151.289062, 138.992188);
    ctx.bezierCurveTo(
      180.410156,
      74.523438,
      249.730469,
      46.195312,
      307.347656,
      33.769531
    );
    ctx.bezierCurveTo(
      305.585938,
      34.347656,
      303.804688,
      34.949219,
      302.023438,
      35.550781
    );
    ctx.bezierCurveTo(
      270.769531,
      46.382812,
      244.695312,
      60.402344,
      224.480469,
      77.300781
    );
    ctx.bezierCurveTo(
      199.214844,
      98.382812,
      183.121094,
      124.019531,
      176.679688,
      153.382812
    );
    ctx.bezierCurveTo(
      168.542969,
      190.453125,
      167.835938,
      229.507812,
      174.570312,
      269.519531
    );
    ctx.bezierCurveTo(
      180.367188,
      303.8125,
      191.839844,
      339.886719,
      208.660156,
      376.6875
    );
    ctx.bezierCurveTo(
      239.496094,
      444.113281,
      282.617188,
      502.472656,
      314.117188,
      545.089844
    );
    ctx.bezierCurveTo(
      331.890625,
      569.113281,
      346.160156,
      588.453125,
      352.351562,
      601.480469
    );
    ctx.lineTo(345.371094, 600.714844);
    ctx.bezierCurveTo(
      345.371094,
      600.714844,
      218.992188,
      484.664062,
      159.324219,
      363.019531
    );
    ctx.bezierCurveTo(
      117.386719,
      277.554688,
      129.003906,
      188.296875,
      151.289062,
      138.992188
    );
    ctx.moveTo(375.214844, 36.9375);
    ctx.bezierCurveTo(
      366.125,
      49.257812,
      358.253906,
      65.039062,
      351.832031,
      83.824219
    );
    ctx.bezierCurveTo(
      343.820312,
      107.285156,
      338.0625,
      135.554688,
      334.707031,
      167.839844
    );
    ctx.bezierCurveTo(
      323.644531,
      274.425781,
      356.453125,
      438.523438,
      376.042969,
      536.558594
    );
    ctx.bezierCurveTo(
      382.007812,
      566.441406,
      386.835938,
      590.546875,
      388.886719,
      605.332031
    );
    ctx.lineTo(372.089844, 603.46875);
    ctx.bezierCurveTo(
      367.347656,
      588.578125,
      355.3125,
      563.726562,
      340.296875,
      532.726562
    );
    ctx.bezierCurveTo(
      317.203125,
      485.035156,
      285.578125,
      419.738281,
      263.605469,
      354.652344
    );
    ctx.bezierCurveTo(
      237.53125,
      277.347656,
      230.324219,
      217.289062,
      241.589844,
      171.089844
    );
    ctx.bezierCurveTo(
      259.277344,
      98.589844,
      302.726562,
      60.503906,
      336.074219,
      41.308594
    );
    ctx.bezierCurveTo(
      349.636719,
      33.5,
      365.480469,
      26.273438,
      373.0,
      24.078125
    );
    ctx.bezierCurveTo(
      376.726562,
      23.0,
      383.417969,
      22.046875,
      386.691406,
      23.871094
    );
    ctx.bezierCurveTo(
      383.128906,
      27.226562,
      379.214844,
      31.492188,
      375.214844,
      36.9375
    );
    ctx.moveTo(638.929688, 138.761719);
    ctx.bezierCurveTo(
      609.789062,
      74.277344,
      540.46875,
      45.945312,
      482.851562,
      33.542969
    );
    ctx.bezierCurveTo(
      484.632812,
      34.121094,
      486.394531,
      34.722656,
      488.195312,
      35.324219
    );
    ctx.bezierCurveTo(
      519.425781,
      46.152344,
      545.523438,
      60.171875,
      565.714844,
      77.070312
    );
    ctx.bezierCurveTo(
      591.003906,
      98.152344,
      607.074219,
      123.769531,
      613.539062,
      153.15625
    );
    ctx.bezierCurveTo(
      621.675781,
      190.222656,
      622.378906,
      229.28125,
      615.628906,
      269.289062
    );
    ctx.bezierCurveTo(
      609.828125,
      303.585938,
      598.375,
      339.660156,
      581.539062,
      376.457031
    );
    ctx.bezierCurveTo(
      550.699219,
      443.886719,
      507.578125,
      502.242188,
      476.078125,
      544.863281
    );
    ctx.bezierCurveTo(
      458.308594,
      568.90625,
      444.039062,
      588.226562,
      437.847656,
      601.253906
    );
    ctx.lineTo(444.847656, 600.488281);
    ctx.bezierCurveTo(
      444.847656,
      600.488281,
      571.203125,
      484.433594,
      630.894531,
      362.789062
    );
    ctx.bezierCurveTo(
      672.832031,
      277.324219,
      661.191406,
      188.050781,
      638.929688,
      138.761719
    );
    ctx.moveTo(403.671875, 23.871094);
    ctx.bezierCurveTo(
      406.945312,
      22.046875,
      413.613281,
      23.0,
      417.363281,
      24.078125
    );
    ctx.bezierCurveTo(
      424.882812,
      26.273438,
      440.726562,
      33.5,
      454.289062,
      41.308594
    );
    ctx.bezierCurveTo(
      487.636719,
      60.503906,
      531.085938,
      98.589844,
      548.773438,
      171.089844
    );
    ctx.bezierCurveTo(
      560.039062,
      217.289062,
      552.832031,
      277.347656,
      526.757812,
      354.652344
    );
    ctx.bezierCurveTo(
      504.785156,
      419.738281,
      473.160156,
      485.035156,
      450.066406,
      532.726562
    );
    ctx.bezierCurveTo(
      435.050781,
      563.726562,
      423.015625,
      588.578125,
      418.273438,
      603.46875
    );
    ctx.lineTo(401.476562, 605.332031);
    ctx.bezierCurveTo(
      403.527344,
      590.546875,
      408.355469,
      566.441406,
      414.320312,
      536.558594
    );
    ctx.bezierCurveTo(
      433.910156,
      438.523438,
      466.695312,
      274.425781,
      455.65625,
      167.839844
    );
    ctx.bezierCurveTo(
      452.300781,
      135.554688,
      446.542969,
      107.285156,
      438.53125,
      83.824219
    );
    ctx.bezierCurveTo(
      432.109375,
      65.039062,
      424.238281,
      49.257812,
      415.125,
      36.9375
    );
    ctx.bezierCurveTo(
      411.128906,
      31.492188,
      407.234375,
      27.226562,
      403.671875,
      23.871094
    );
    ctx.fill();
    ctx.restore();

    // #path6
    ctx.beginPath();
    ctx.fillStyle = "rgb(240, 239, 214)";
    ctx.moveTo(455.78125, 167.878906);
    ctx.bezierCurveTo(
      448.222656,
      94.902344,
      429.625,
      56.507812,
      415.375,
      37.1875
    );
    ctx.bezierCurveTo(
      411.273438,
      31.636719,
      406.429688,
      26.644531,
      403.609375,
      23.871094
    );
    ctx.bezierCurveTo(
      400.792969,
      21.074219,
      395.824219,
      21.550781,
      395.203125,
      21.550781
    );
    ctx.bezierCurveTo(
      394.582031,
      21.550781,
      389.609375,
      21.074219,
      386.792969,
      23.871094
    );
    ctx.bezierCurveTo(
      383.976562,
      26.644531,
      379.152344,
      31.636719,
      375.03125,
      37.1875
    );
    ctx.bezierCurveTo(
      360.761719,
      56.507812,
      342.183594,
      94.902344,
      334.621094,
      167.878906
    );
    ctx.bezierCurveTo(
      323.582031,
      274.40625,
      356.371094,
      438.460938,
      375.941406,
      536.496094
    );
    ctx.bezierCurveTo(
      381.925781,
      566.441406,
      386.753906,
      590.585938,
      388.800781,
      605.375
    );
    ctx.lineTo(395.203125, 606.078125);
    ctx.lineTo(401.601562, 605.375);
    ctx.bezierCurveTo(
      403.652344,
      590.585938,
      408.476562,
      566.441406,
      414.464844,
      536.496094
    );
    ctx.bezierCurveTo(
      434.054688,
      438.460938,
      466.839844,
      274.40625,
      455.78125,
      167.878906
    );
    ctx.moveTo(263.542969, 355.085938);
    ctx.bezierCurveTo(
      251.59375,
      319.613281,
      243.496094,
      287.121094,
      239.496094,
      258.5
    );
    ctx.bezierCurveTo(
      234.835938,
      225.222656,
      235.519531,
      195.898438,
      241.527344,
      171.296875
    );
    ctx.bezierCurveTo(
      249.355469,
      139.238281,
      262.816406,
      111.136719,
      281.5625,
      87.820312
    );
    ctx.bezierCurveTo(
      296.554688,
      69.160156,
      314.925781,
      53.527344,
      336.195312,
      41.285156
    );
    ctx.bezierCurveTo(
      349.246094,
      33.769531,
      361.816406,
      28.488281,
      372.566406,
      24.800781
    );
    ctx.bezierCurveTo(
      357.113281,
      23.167969,
      349.761719,
      24.347656,
      335.824219,
      26.191406
    );
    ctx.bezierCurveTo(
      322.671875,
      27.867188,
      304.136719,
      34.910156,
      301.214844,
      35.921875
    );
    ctx.bezierCurveTo(
      252.195312,
      52.90625,
      190.703125,
      87.054688,
      176.121094,
      153.488281
    );
    ctx.bezierCurveTo(
      141.328125,
      311.910156,
      249.085938,
      457.71875,
      313.496094,
      544.863281
    );
    ctx.bezierCurveTo(
      331.371094,
      569.050781,
      345.722656,
      588.453125,
      351.855469,
      601.523438
    );
    ctx.lineTo(372.007812, 603.757812);
    ctx.bezierCurveTo(
      367.222656,
      588.867188,
      355.210938,
      564.082031,
      340.257812,
      533.203125
    );
    ctx.bezierCurveTo(
      317.164062,
      485.511719,
      285.515625,
      420.214844,
      263.542969,
      355.085938
    );
    ctx.moveTo(476.472656, 544.550781);
    ctx.bezierCurveTo(
      458.597656,
      568.738281,
      444.246094,
      588.144531,
      438.117188,
      601.210938
    );
    ctx.lineTo(417.984375, 603.449219);
    ctx.bezierCurveTo(
      422.746094,
      588.558594,
      434.761719,
      563.769531,
      449.714844,
      532.894531
    );
    ctx.bezierCurveTo(
      472.804688,
      485.199219,
      504.433594,
      419.90625,
      526.425781,
      354.777344
    );
    ctx.bezierCurveTo(
      538.378906,
      319.300781,
      546.476562,
      286.808594,
      550.472656,
      258.191406
    );
    ctx.bezierCurveTo(
      555.132812,
      224.910156,
      554.449219,
      195.589844,
      548.441406,
      170.984375
    );
    ctx.bezierCurveTo(
      540.613281,
      138.929688,
      527.152344,
      110.828125,
      508.410156,
      87.507812
    );
    ctx.bezierCurveTo(
      493.414062,
      68.871094,
      475.042969,
      53.214844,
      453.773438,
      40.976562
    );
    ctx.bezierCurveTo(
      440.726562,
      33.457031,
      428.152344,
      28.179688,
      417.40625,
      24.492188
    );
    ctx.bezierCurveTo(
      432.855469,
      22.855469,
      440.207031,
      24.058594,
      454.144531,
      25.878906
    );
    ctx.bezierCurveTo(
      467.296875,
      27.578125,
      485.832031,
      34.597656,
      488.753906,
      35.613281
    );
    ctx.bezierCurveTo(
      537.777344,
      52.574219,
      599.265625,
      86.742188,
      613.847656,
      153.175781
    );
    ctx.bezierCurveTo(
      648.664062,
      311.597656,
      540.882812,
      457.410156,
      476.472656,
      544.550781
    );
    ctx.fill();

    // #path7
    ctx.beginPath();
    ctx.fillStyle = "rgb(213, 47, 60)";
    ctx.moveTo(466.261719, 580.109375);
    ctx.lineTo(432.566406, 641.117188);
    ctx.bezierCurveTo(
      432.566406,
      641.117188,
      424.757812,
      641.738281,
      395.203125,
      641.738281
    );
    ctx.bezierCurveTo(
      365.648438,
      641.738281,
      360.761719,
      641.035156,
      360.761719,
      641.035156
    );
    ctx.lineTo(324.246094, 580.109375);
    ctx.closePath();
    ctx.fill();

    // #g8
    ctx.save();

    // #path8
    ctx.beginPath();
    ctx.fillStyle = "rgb(247, 234, 184)";
    ctx.moveTo(466.304688, 580.046875);
    ctx.lineTo(465.910156, 580.046875);
    ctx.bezierCurveTo(
      504.410156,
      541.507812,
      586.28125,
      453.722656,
      630.894531,
      362.789062
    );
    ctx.bezierCurveTo(
      672.832031,
      277.324219,
      661.191406,
      188.050781,
      638.929688,
      138.761719
    );
    ctx.bezierCurveTo(
      635.53125,
      131.265625,
      631.597656,
      124.246094,
      627.1875,
      117.679688
    );
    ctx.bezierCurveTo(
      631.660156,
      124.308594,
      635.65625,
      131.410156,
      639.074219,
      138.992188
    );
    ctx.bezierCurveTo(
      661.359375,
      188.296875,
      672.976562,
      277.554688,
      631.039062,
      363.019531
    );
    ctx.bezierCurveTo(
      586.507812,
      453.785156,
      504.867188,
      541.40625,
      466.304688,
      580.046875
    );
    ctx.moveTo(515.242188, 46.089844);
    ctx.bezierCurveTo(
      515.015625,
      46.007812,
      514.789062,
      45.925781,
      514.558594,
      45.84375
    );
    ctx.bezierCurveTo(
      505.796875,
      41.886719,
      497.101562,
      38.511719,
      488.753906,
      35.613281
    );
    ctx.bezierCurveTo(
      488.070312,
      35.382812,
      486.558594,
      34.824219,
      484.445312,
      34.078125
    );
    ctx.bezierCurveTo(
      484.507812,
      34.078125,
      484.550781,
      34.101562,
      484.613281,
      34.121094
    );
    ctx.bezierCurveTo(
      485.8125,
      34.515625,
      486.992188,
      34.929688,
      488.195312,
      35.324219
    );
    ctx.bezierCurveTo(
      497.679688,
      38.617188,
      506.710938,
      42.21875,
      515.242188,
      46.089844
    );
    ctx.fill();
    ctx.restore();

    // #g9
    ctx.save();

    // #path9
    ctx.beginPath();
    ctx.fillStyle = "rgb(234, 49, 51)";
    ctx.moveTo(465.910156, 580.046875);
    ctx.lineTo(453.917969, 580.046875);
    ctx.bezierCurveTo(
      492.378906,
      541.550781,
      574.269531,
      453.765625,
      618.902344,
      362.789062
    );
    ctx.bezierCurveTo(
      660.839844,
      277.324219,
      649.222656,
      188.050781,
      626.9375,
      138.761719
    );
    ctx.bezierCurveTo(
      605.046875,
      90.324219,
      560.496094,
      62.304688,
      515.242188,
      46.089844
    );
    ctx.bezierCurveTo(
      506.710938,
      42.21875,
      497.679688,
      38.617188,
      488.195312,
      35.324219
    );
    ctx.bezierCurveTo(
      486.992188,
      34.929688,
      485.8125,
      34.515625,
      484.613281,
      34.121094
    );
    ctx.bezierCurveTo(
      535.085938,
      45.222656,
      594.109375,
      68.582031,
      627.1875,
      117.679688
    );
    ctx.bezierCurveTo(
      631.597656,
      124.246094,
      635.53125,
      131.265625,
      638.929688,
      138.761719
    );
    ctx.bezierCurveTo(
      661.191406,
      188.050781,
      672.832031,
      277.324219,
      630.894531,
      362.789062
    );
    ctx.bezierCurveTo(
      586.28125,
      453.722656,
      504.410156,
      541.507812,
      465.910156,
      580.046875
    );
    ctx.fill();
    ctx.restore();

    // #path10
    ctx.beginPath();
    ctx.fillStyle = "rgb(230, 215, 152)";
    ctx.moveTo(514.558594, 45.84375);
    ctx.bezierCurveTo(
      514.0625,
      45.675781,
      513.566406,
      45.492188,
      513.070312,
      45.324219
    );
    ctx.bezierCurveTo(
      505.21875,
      41.847656,
      496.996094,
      38.574219,
      488.339844,
      35.550781
    );
    ctx.bezierCurveTo(
      486.558594,
      34.949219,
      484.777344,
      34.347656,
      483.015625,
      33.769531
    );
    ctx.bezierCurveTo(
      483.492188,
      33.871094,
      483.96875,
      33.976562,
      484.445312,
      34.078125
    );
    ctx.bezierCurveTo(
      486.558594,
      34.824219,
      488.070312,
      35.382812,
      488.753906,
      35.613281
    );
    ctx.bezierCurveTo(
      497.101562,
      38.511719,
      505.796875,
      41.886719,
      514.558594,
      45.84375
    );
    ctx.fill();

    // #path11
    ctx.beginPath();
    ctx.fillStyle = "rgb(247, 234, 184)";
    ctx.moveTo(469.78125, 51.226562);
    ctx.bezierCurveTo(
      464.460938,
      47.457031,
      459.261719,
      44.164062,
      454.289062,
      41.308594
    );
    ctx.bezierCurveTo(
      450.707031,
      39.238281,
      446.960938,
      37.207031,
      443.230469,
      35.300781
    );
    ctx.lineTo(443.25, 35.324219);
    ctx.bezierCurveTo(
      446.960938,
      37.226562,
      450.707031,
      39.238281,
      454.289062,
      41.308594
    );
    ctx.bezierCurveTo(
      459.199219,
      44.144531,
      464.335938,
      47.375,
      469.574219,
      51.0625
    );
    ctx.bezierCurveTo(
      469.636719,
      51.125,
      469.699219,
      51.164062,
      469.78125,
      51.226562
    );
    ctx.moveTo(418.355469, 24.386719);
    ctx.bezierCurveTo(
      418.003906,
      24.285156,
      417.671875,
      24.179688,
      417.363281,
      24.078125
    );
    ctx.bezierCurveTo(
      415.148438,
      23.4375,
      411.917969,
      22.855469,
      408.953125,
      22.855469
    );
    ctx.bezierCurveTo(
      411.917969,
      22.855469,
      415.148438,
      23.4375,
      417.363281,
      24.078125
    );
    ctx.bezierCurveTo(
      417.671875,
      24.179688,
      418.027344,
      24.285156,
      418.355469,
      24.386719
    );
    ctx.fill();

    // #path12
    ctx.beginPath();
    ctx.fillStyle = "rgb(234, 49, 51)";
    ctx.moveTo(427.367188, 580.046875);
    ctx.lineTo(405.910156, 580.046875);
    ctx.bezierCurveTo(
      407.027344,
      574.125,
      408.269531,
      567.640625,
      409.660156,
      560.703125
    );
    ctx.bezierCurveTo(
      413.324219,
      553.023438,
      417.300781,
      544.78125,
      421.546875,
      536.019531
    );
    ctx.bezierCurveTo(
      444.617188,
      488.328125,
      476.265625,
      423.03125,
      498.21875,
      357.945312
    );
    ctx.bezierCurveTo(
      524.3125,
      280.640625,
      531.5,
      220.582031,
      520.234375,
      174.382812
    );
    ctx.bezierCurveTo(
      502.546875,
      101.878906,
      459.09375,
      63.796875,
      425.75,
      44.601562
    );
    ctx.bezierCurveTo(
      423.039062,
      43.046875,
      420.242188,
      41.515625,
      417.425781,
      40.042969
    );
    ctx.bezierCurveTo(
      416.722656,
      39.050781,
      416.039062,
      38.097656,
      415.375,
      37.1875
    );
    ctx.bezierCurveTo(
      414.566406,
      36.089844,
      413.738281,
      35.03125,
      412.910156,
      33.996094
    );
    ctx.bezierCurveTo(
      409.699219,
      29.9375,
      406.574219,
      26.605469,
      403.671875,
      23.871094
    );
    ctx.bezierCurveTo(
      405.0,
      23.125,
      406.925781,
      22.855469,
      408.953125,
      22.855469
    );
    ctx.bezierCurveTo(
      411.917969,
      22.855469,
      415.148438,
      23.4375,
      417.363281,
      24.078125
    );
    ctx.bezierCurveTo(
      417.671875,
      24.179688,
      418.003906,
      24.285156,
      418.355469,
      24.386719
    );
    ctx.bezierCurveTo(
      418.046875,
      24.429688,
      417.734375,
      24.449219,
      417.40625,
      24.492188
    );
    ctx.bezierCurveTo(
      425.234375,
      27.164062,
      434.015625,
      30.703125,
      443.230469,
      35.300781
    );
    ctx.bezierCurveTo(
      446.960938,
      37.207031,
      450.707031,
      39.238281,
      454.289062,
      41.308594
    );
    ctx.bezierCurveTo(
      459.261719,
      44.164062,
      464.460938,
      47.457031,
      469.78125,
      51.226562
    );
    ctx.bezierCurveTo(
      484.363281,
      61.5625,
      497.308594,
      73.714844,
      508.410156,
      87.507812
    );
    ctx.bezierCurveTo(
      527.152344,
      110.828125,
      540.613281,
      138.929688,
      548.441406,
      170.984375
    );
    ctx.bezierCurveTo(
      554.449219,
      195.589844,
      555.132812,
      224.910156,
      550.472656,
      258.191406
    );
    ctx.bezierCurveTo(
      546.476562,
      286.808594,
      538.378906,
      319.300781,
      526.425781,
      354.777344
    );
    ctx.bezierCurveTo(
      504.433594,
      419.90625,
      472.804688,
      485.199219,
      449.714844,
      532.894531
    );
    ctx.bezierCurveTo(
      440.972656,
      550.949219,
      433.226562,
      566.9375,
      427.367188,
      580.046875
    );
    ctx.fill();

    // #path13
    ctx.beginPath();
    ctx.fillStyle = "rgb(230, 215, 152)";
    ctx.moveTo(427.636719, 580.046875);
    ctx.lineTo(427.367188, 580.046875);
    ctx.bezierCurveTo(
      433.226562,
      566.9375,
      440.972656,
      550.949219,
      449.714844,
      532.894531
    );
    ctx.bezierCurveTo(
      472.804688,
      485.199219,
      504.433594,
      419.90625,
      526.425781,
      354.777344
    );
    ctx.bezierCurveTo(
      538.378906,
      319.300781,
      546.476562,
      286.808594,
      550.472656,
      258.191406
    );
    ctx.bezierCurveTo(
      555.132812,
      224.910156,
      554.449219,
      195.589844,
      548.441406,
      170.984375
    );
    ctx.bezierCurveTo(
      540.613281,
      138.929688,
      527.152344,
      110.828125,
      508.410156,
      87.507812
    );
    ctx.bezierCurveTo(
      497.308594,
      73.714844,
      484.363281,
      61.5625,
      469.78125,
      51.226562
    );
    ctx.bezierCurveTo(
      469.699219,
      51.164062,
      469.636719,
      51.125,
      469.574219,
      51.0625
    );
    ctx.bezierCurveTo(
      499.875,
      72.453125,
      533.695312,
      109.253906,
      548.773438,
      171.089844
    );
    ctx.bezierCurveTo(
      560.039062,
      217.289062,
      552.832031,
      277.347656,
      526.757812,
      354.652344
    );
    ctx.bezierCurveTo(
      504.785156,
      419.738281,
      473.160156,
      485.035156,
      450.066406,
      532.726562
    );
    ctx.bezierCurveTo(
      441.285156,
      550.867188,
      433.539062,
      566.875,
      427.636719,
      580.046875
    );
    ctx.moveTo(443.25, 35.324219);
    ctx.lineTo(443.230469, 35.300781);
    ctx.bezierCurveTo(
      434.015625,
      30.703125,
      425.234375,
      27.164062,
      417.40625,
      24.492188
    );
    ctx.bezierCurveTo(
      417.734375,
      24.449219,
      418.046875,
      24.429688,
      418.355469,
      24.386719
    );
    ctx.bezierCurveTo(
      424.074219,
      26.210938,
      433.539062,
      30.332031,
      443.25,
      35.324219
    );
    ctx.fill();

    // #path14
    ctx.beginPath();
    ctx.fillStyle = "rgb(247, 234, 184)";
    ctx.moveTo(362.726562, 580.046875);
    ctx.lineTo(362.707031, 580.046875);
    ctx.bezierCurveTo(
      357.34375,
      568.035156,
      350.40625,
      553.621094,
      342.535156,
      537.386719
    );
    ctx.bezierCurveTo(
      350.40625,
      553.621094,
      357.34375,
      568.035156,
      362.726562,
      580.046875
    );
    ctx.moveTo(323.128906, 497.027344);
    ctx.bezierCurveTo(
      304.179688,
      457.160156,
      282.96875,
      410.171875,
      266.441406,
      362.914062
    );
    ctx.bezierCurveTo(
      282.96875,
      410.171875,
      304.179688,
      457.160156,
      323.128906,
      497.027344
    );
    ctx.moveTo(253.601562, 134.808594);
    ctx.bezierCurveTo(
      268.304688,
      100.429688,
      289.222656,
      76.265625,
      309.769531,
      59.449219
    );
    ctx.lineTo(309.789062, 59.449219);
    ctx.bezierCurveTo(
      289.246094,
      76.265625,
      268.304688,
      100.429688,
      253.601562,
      134.808594
    );
    ctx.moveTo(375.777344, 36.191406);
    ctx.bezierCurveTo(
      379.585938,
      31.097656,
      383.292969,
      27.082031,
      386.691406,
      23.871094
    );
    ctx.bezierCurveTo(
      385.34375,
      23.125,
      383.4375,
      22.855469,
      381.410156,
      22.855469
    );
    ctx.bezierCurveTo(
      383.4375,
      22.855469,
      385.34375,
      23.125,
      386.691406,
      23.871094
    );
    ctx.bezierCurveTo(
      383.292969,
      27.082031,
      379.585938,
      31.097656,
      375.777344,
      36.191406
    );
    ctx.moveTo(371.175781, 24.65625);
    ctx.bezierCurveTo(
      371.839844,
      24.429688,
      372.441406,
      24.242188,
      373.0,
      24.078125
    );
    ctx.bezierCurveTo(
      374.863281,
      23.539062,
      377.453125,
      23.023438,
      380.0,
      22.898438
    );
    ctx.bezierCurveTo(
      377.453125,
      23.023438,
      374.863281,
      23.539062,
      373.0,
      24.078125
    );
    ctx.bezierCurveTo(
      372.441406,
      24.242188,
      371.839844,
      24.429688,
      371.175781,
      24.65625
    );
    ctx.fill();

    // #path15
    ctx.beginPath();
    ctx.fillStyle = "rgb(234, 49, 51)";
    ctx.moveTo(384.496094, 580.046875);
    ctx.lineTo(362.726562, 580.046875);
    ctx.bezierCurveTo(
      357.34375,
      568.035156,
      350.40625,
      553.621094,
      342.535156,
      537.386719
    );
    ctx.bezierCurveTo(
      341.789062,
      535.855469,
      341.042969,
      534.300781,
      340.296875,
      532.726562
    );
    ctx.bezierCurveTo(
      334.953125,
      521.691406,
      329.15625,
      509.71875,
      323.128906,
      497.027344
    );
    ctx.bezierCurveTo(
      304.179688,
      457.160156,
      282.96875,
      410.171875,
      266.441406,
      362.914062
    );
    ctx.bezierCurveTo(
      265.863281,
      361.238281,
      265.28125,
      359.582031,
      264.703125,
      357.902344
    );
    ctx.bezierCurveTo(
      264.328125,
      356.804688,
      263.957031,
      355.730469,
      263.605469,
      354.652344
    );
    ctx.bezierCurveTo(
      246.910156,
      305.160156,
      237.945312,
      262.726562,
      236.617188,
      226.484375
    );
    ctx.bezierCurveTo(
      236.183594,
      214.082031,
      236.617188,
      202.359375,
      237.945312,
      191.40625
    );
    ctx.bezierCurveTo(
      238.792969,
      184.34375,
      240.015625,
      177.570312,
      241.589844,
      171.089844
    );
    ctx.bezierCurveTo(
      242.046875,
      169.246094,
      242.5,
      167.445312,
      242.976562,
      165.644531
    );
    ctx.bezierCurveTo(
      245.378906,
      156.757812,
      248.21875,
      148.1875,
      251.488281,
      139.945312
    );
    ctx.bezierCurveTo(
      252.171875,
      138.203125,
      252.875,
      136.484375,
      253.601562,
      134.808594
    );
    ctx.bezierCurveTo(
      268.304688,
      100.429688,
      289.246094,
      76.265625,
      309.789062,
      59.449219
    );
    ctx.bezierCurveTo(
      317.992188,
      52.757812,
      326.816406,
      46.691406,
      336.195312,
      41.285156
    );
    ctx.bezierCurveTo(
      349.246094,
      33.769531,
      361.816406,
      28.488281,
      372.566406,
      24.800781
    );
    ctx.bezierCurveTo(
      372.089844,
      24.742188,
      371.632812,
      24.699219,
      371.175781,
      24.65625
    );
    ctx.bezierCurveTo(
      371.839844,
      24.429688,
      372.441406,
      24.242188,
      373.0,
      24.078125
    );
    ctx.bezierCurveTo(
      374.863281,
      23.539062,
      377.453125,
      23.023438,
      380.0,
      22.898438
    );
    ctx.bezierCurveTo(
      380.476562,
      22.855469,
      380.933594,
      22.855469,
      381.410156,
      22.855469
    );
    ctx.bezierCurveTo(
      383.4375,
      22.855469,
      385.34375,
      23.125,
      386.691406,
      23.871094
    );
    ctx.bezierCurveTo(
      383.292969,
      27.082031,
      379.585938,
      31.097656,
      375.777344,
      36.191406
    );
    ctx.bezierCurveTo(
      375.527344,
      36.523438,
      375.277344,
      36.855469,
      375.03125,
      37.1875
    );
    ctx.bezierCurveTo(
      374.367188,
      38.078125,
      373.703125,
      39.007812,
      373.019531,
      40.003906
    );
    ctx.bezierCurveTo(
      370.183594,
      41.492188,
      367.347656,
      43.027344,
      364.589844,
      44.601562
    );
    ctx.bezierCurveTo(
      331.269531,
      63.796875,
      287.816406,
      101.878906,
      270.128906,
      174.382812
    );
    ctx.bezierCurveTo(
      258.863281,
      220.582031,
      266.050781,
      280.640625,
      292.144531,
      357.945312
    );
    ctx.bezierCurveTo(
      314.097656,
      423.03125,
      345.722656,
      488.328125,
      368.816406,
      536.019531
    );
    ctx.bezierCurveTo(
      373.082031,
      544.84375,
      377.121094,
      553.144531,
      380.808594,
      560.871094
    );
    ctx.bezierCurveTo(
      382.15625,
      567.746094,
      383.398438,
      574.164062,
      384.496094,
      580.046875
    );
    ctx.fill();

    // #path16
    ctx.beginPath();
    ctx.fillStyle = "rgb(230, 215, 152)";
    ctx.moveTo(236.617188, 226.484375);
    ctx.bezierCurveTo(
      236.164062,
      214.082031,
      236.597656,
      202.402344,
      237.945312,
      191.40625
    );
    ctx.bezierCurveTo(
      236.617188,
      202.359375,
      236.183594,
      214.082031,
      236.617188,
      226.484375
    );
    ctx.moveTo(242.976562, 165.644531);
    ctx.bezierCurveTo(
      245.421875,
      156.53125,
      248.277344,
      147.976562,
      251.488281,
      139.945312
    );
    ctx.bezierCurveTo(
      248.21875,
      148.1875,
      245.378906,
      156.757812,
      242.976562,
      165.644531
    );
    ctx.moveTo(309.769531, 59.449219);
    ctx.bezierCurveTo(
      318.800781,
      52.074219,
      327.746094,
      46.113281,
      336.074219,
      41.308594
    );
    ctx.bezierCurveTo(
      348.625,
      34.078125,
      363.121094,
      27.371094,
      371.175781,
      24.65625
    );
    ctx.bezierCurveTo(
      371.632812,
      24.699219,
      372.089844,
      24.742188,
      372.566406,
      24.800781
    );
    ctx.bezierCurveTo(
      361.816406,
      28.488281,
      349.246094,
      33.769531,
      336.195312,
      41.285156
    );
    ctx.bezierCurveTo(
      326.816406,
      46.691406,
      317.992188,
      52.757812,
      309.789062,
      59.449219
    );
    ctx.closePath();
    ctx.moveTo(373.019531, 40.003906);
    ctx.bezierCurveTo(
      373.703125,
      39.007812,
      374.367188,
      38.078125,
      375.03125,
      37.1875
    );
    ctx.bezierCurveTo(
      375.277344,
      36.855469,
      375.527344,
      36.523438,
      375.777344,
      36.191406
    );
    ctx.bezierCurveTo(
      375.527344,
      36.523438,
      375.277344,
      36.855469,
      375.03125,
      37.1875
    );
    ctx.bezierCurveTo(
      374.367188,
      38.078125,
      373.703125,
      39.007812,
      373.019531,
      40.003906
    );
    ctx.fill();

    // #path17
    ctx.beginPath();
    ctx.fillStyle = "rgb(247, 234, 184)";
    ctx.moveTo(267.871094, 519.640625);
    ctx.bezierCurveTo(
      267.871094,
      519.640625,
      267.851562,
      519.640625,
      267.851562,
      519.617188
    );
    ctx.closePath();
    ctx.moveTo(267.789062, 519.554688);
    ctx.bezierCurveTo(
      231.027344,
      477.144531,
      189.109375,
      422.496094,
      161.003906,
      366.414062
    );
    ctx.bezierCurveTo(
      189.109375,
      422.496094,
      231.007812,
      477.144531,
      267.789062,
      519.554688
    );
    ctx.moveTo(160.980469, 366.394531);
    ctx.bezierCurveTo(
      160.941406,
      366.269531,
      160.878906,
      366.167969,
      160.816406,
      366.042969
    );
    ctx.bezierCurveTo(
      160.878906,
      366.167969,
      160.941406,
      366.269531,
      160.980469,
      366.394531
    );
    ctx.moveTo(160.816406, 366.042969);
    ctx.bezierCurveTo(
      160.773438,
      365.980469,
      160.753906,
      365.9375,
      160.734375,
      365.875
    );
    ctx.bezierCurveTo(
      160.753906,
      365.9375,
      160.773438,
      365.980469,
      160.816406,
      366.042969
    );
    ctx.moveTo(160.734375, 365.855469);
    ctx.bezierCurveTo(
      160.671875,
      365.730469,
      160.609375,
      365.628906,
      160.546875,
      365.523438
    );
    ctx.bezierCurveTo(
      160.609375,
      365.628906,
      160.671875,
      365.730469,
      160.734375,
      365.855469
    );
    ctx.moveTo(160.546875, 365.503906);
    ctx.bezierCurveTo(
      160.527344,
      365.441406,
      160.484375,
      365.398438,
      160.464844,
      365.339844
    );
    ctx.bezierCurveTo(
      160.484375,
      365.398438,
      160.527344,
      365.460938,
      160.546875,
      365.503906
    );
    ctx.moveTo(160.464844, 365.316406);
    ctx.bezierCurveTo(
      160.402344,
      365.214844,
      160.339844,
      365.089844,
      160.277344,
      364.984375
    );
    ctx.bezierCurveTo(
      160.339844,
      365.109375,
      160.402344,
      365.214844,
      160.464844,
      365.316406
    );
    ctx.moveTo(160.277344, 364.964844);
    ctx.bezierCurveTo(
      160.257812,
      364.925781,
      160.238281,
      364.863281,
      160.195312,
      364.820312
    );
    ctx.bezierCurveTo(
      160.238281,
      364.863281,
      160.257812,
      364.925781,
      160.277344,
      364.964844
    );
    ctx.moveTo(160.195312, 364.777344);
    ctx.bezierCurveTo(
      160.132812,
      364.675781,
      160.070312,
      364.570312,
      160.03125,
      364.449219
    );
    ctx.bezierCurveTo(
      160.070312,
      364.570312,
      160.132812,
      364.675781,
      160.195312,
      364.777344
    );
    ctx.moveTo(160.007812, 364.425781);
    ctx.bezierCurveTo(
      159.988281,
      364.363281,
      159.96875,
      364.34375,
      159.945312,
      364.28125
    );
    ctx.bezierCurveTo(
      159.96875,
      364.324219,
      159.988281,
      364.386719,
      160.007812,
      364.425781
    );
    ctx.moveTo(159.925781, 364.242188);
    ctx.bezierCurveTo(
      159.90625,
      364.199219,
      159.863281,
      364.15625,
      159.84375,
      364.09375
    );
    ctx.bezierCurveTo(
      159.863281,
      364.15625,
      159.90625,
      364.199219,
      159.925781,
      364.242188
    );
    ctx.moveTo(159.84375, 364.074219);
    ctx.bezierCurveTo(
      159.824219,
      364.035156,
      159.78125,
      363.972656,
      159.761719,
      363.929688
    );
    ctx.bezierCurveTo(
      159.78125,
      363.972656,
      159.824219,
      364.035156,
      159.84375,
      364.074219
    );
    ctx.moveTo(159.738281, 363.886719);
    ctx.bezierCurveTo(
      159.71875,
      363.847656,
      159.699219,
      363.804688,
      159.675781,
      363.742188
    );
    ctx.bezierCurveTo(
      159.699219,
      363.804688,
      159.71875,
      363.847656,
      159.738281,
      363.886719
    );
    ctx.moveTo(159.65625, 363.722656);
    ctx.bezierCurveTo(
      159.59375,
      363.597656,
      159.554688,
      363.496094,
      159.492188,
      363.390625
    );
    ctx.bezierCurveTo(
      159.554688,
      363.496094,
      159.617188,
      363.621094,
      159.65625,
      363.722656
    );
    ctx.moveTo(159.46875, 363.351562);
    ctx.bezierCurveTo(
      159.449219,
      363.308594,
      159.429688,
      363.265625,
      159.429688,
      363.226562
    );
    ctx.bezierCurveTo(
      159.449219,
      363.265625,
      159.449219,
      363.289062,
      159.46875,
      363.351562
    );
    ctx.moveTo(159.386719, 363.183594);
    ctx.bezierCurveTo(
      159.367188,
      363.121094,
      159.347656,
      363.082031,
      159.324219,
      363.019531
    );
    ctx.bezierCurveTo(
      159.304688,
      362.976562,
      159.285156,
      362.9375,
      159.261719,
      362.894531
    );
    ctx.bezierCurveTo(
      159.285156,
      362.9375,
      159.304688,
      362.976562,
      159.324219,
      363.019531
    );
    ctx.bezierCurveTo(
      159.347656,
      363.058594,
      159.367188,
      363.121094,
      159.386719,
      363.183594
    );
    ctx.moveTo(191.324219, 86.308594);
    ctx.bezierCurveTo(
      209.859375,
      70.425781,
      231.542969,
      58.578125,
      253.765625,
      49.777344
    );
    ctx.bezierCurveTo(
      231.542969,
      58.578125,
      209.859375,
      70.425781,
      191.324219,
      86.308594
    );
    ctx.moveTo(253.765625, 49.777344);
    ctx.bezierCurveTo(
      254.058594,
      49.652344,
      254.347656,
      49.550781,
      254.636719,
      49.425781
    );
    ctx.bezierCurveTo(
      254.347656,
      49.550781,
      254.058594,
      49.652344,
      253.765625,
      49.777344
    );
    ctx.moveTo(254.925781, 49.320312);
    ctx.bezierCurveTo(
      254.949219,
      49.300781,
      254.988281,
      49.300781,
      255.011719,
      49.28125
    );
    ctx.bezierCurveTo(
      254.988281,
      49.300781,
      254.949219,
      49.300781,
      254.925781,
      49.320312
    );
    ctx.moveTo(276.820312, 45.46875);
    ctx.bezierCurveTo(
      284.792969,
      41.929688,
      293.199219,
      38.617188,
      302.023438,
      35.550781
    );
    ctx.bezierCurveTo(
      293.945312,
      38.367188,
      286.261719,
      41.390625,
      278.890625,
      44.601562
    );
    ctx.bezierCurveTo(
      278.351562,
      44.847656,
      277.792969,
      45.097656,
      277.253906,
      45.324219
    );
    ctx.bezierCurveTo(
      277.109375,
      45.386719,
      276.964844,
      45.429688,
      276.820312,
      45.46875
    );
    ctx.fill();

    // #path18
    ctx.beginPath();
    ctx.fillStyle = "rgb(234, 49, 51)";
    ctx.moveTo(336.445312, 580.046875);
    ctx.lineTo(324.082031, 580.046875);
    ctx.bezierCurveTo(
      309.851562,
      565.800781,
      289.761719,
      544.902344,
      267.871094,
      519.640625
    );
    ctx.lineTo(267.851562, 519.617188);
    ctx.bezierCurveTo(
      267.832031,
      519.597656,
      267.808594,
      519.578125,
      267.789062,
      519.554688
    );
    ctx.bezierCurveTo(
      231.007812,
      477.144531,
      189.109375,
      422.496094,
      161.003906,
      366.414062
    );
    ctx.lineTo(160.980469, 366.394531);
    ctx.bezierCurveTo(
      160.941406,
      366.269531,
      160.878906,
      366.167969,
      160.816406,
      366.042969
    );
    ctx.bezierCurveTo(
      160.773438,
      365.980469,
      160.753906,
      365.9375,
      160.734375,
      365.875
    );
    ctx.lineTo(160.734375, 365.855469);
    ctx.bezierCurveTo(
      160.671875,
      365.730469,
      160.609375,
      365.628906,
      160.546875,
      365.523438
    );
    ctx.lineTo(160.546875, 365.503906);
    ctx.bezierCurveTo(
      160.527344,
      365.460938,
      160.484375,
      365.398438,
      160.464844,
      365.339844
    );
    ctx.lineTo(160.464844, 365.316406);
    ctx.bezierCurveTo(
      160.402344,
      365.214844,
      160.339844,
      365.109375,
      160.277344,
      364.984375
    );
    ctx.lineTo(160.277344, 364.964844);
    ctx.bezierCurveTo(
      160.257812,
      364.925781,
      160.238281,
      364.863281,
      160.195312,
      364.820312
    );
    ctx.lineTo(160.195312, 364.777344);
    ctx.bezierCurveTo(
      160.132812,
      364.675781,
      160.070312,
      364.570312,
      160.03125,
      364.449219
    );
    ctx.lineTo(160.007812, 364.425781);
    ctx.bezierCurveTo(
      159.988281,
      364.386719,
      159.96875,
      364.324219,
      159.945312,
      364.28125
    );
    ctx.bezierCurveTo(
      159.925781,
      364.28125,
      159.925781,
      364.261719,
      159.925781,
      364.242188
    );
    ctx.bezierCurveTo(
      159.90625,
      364.199219,
      159.863281,
      364.15625,
      159.84375,
      364.09375
    );
    ctx.lineTo(159.84375, 364.074219);
    ctx.bezierCurveTo(
      159.824219,
      364.035156,
      159.78125,
      363.972656,
      159.761719,
      363.929688
    );
    ctx.bezierCurveTo(
      159.761719,
      363.910156,
      159.738281,
      363.886719,
      159.738281,
      363.886719
    );
    ctx.bezierCurveTo(
      159.71875,
      363.847656,
      159.699219,
      363.804688,
      159.675781,
      363.742188
    );
    ctx.lineTo(159.65625, 363.722656);
    ctx.bezierCurveTo(
      159.617188,
      363.621094,
      159.554688,
      363.496094,
      159.492188,
      363.390625
    );
    ctx.bezierCurveTo(
      159.492188,
      363.371094,
      159.492188,
      363.351562,
      159.46875,
      363.351562
    );
    ctx.bezierCurveTo(
      159.449219,
      363.289062,
      159.449219,
      363.265625,
      159.429688,
      363.226562
    );
    ctx.lineTo(159.386719, 363.183594);
    ctx.bezierCurveTo(
      159.367188,
      363.121094,
      159.347656,
      363.058594,
      159.324219,
      363.019531
    );
    ctx.bezierCurveTo(
      159.304688,
      362.976562,
      159.285156,
      362.9375,
      159.261719,
      362.894531
    );
    ctx.bezierCurveTo(
      117.386719,
      277.46875,
      129.027344,
      188.257812,
      151.289062,
      138.992188
    );
    ctx.bezierCurveTo(
      160.878906,
      117.742188,
      174.859375,
      100.429688,
      191.324219,
      86.308594
    );
    ctx.bezierCurveTo(
      209.859375,
      70.425781,
      231.542969,
      58.578125,
      253.765625,
      49.777344
    );
    ctx.bezierCurveTo(
      254.058594,
      49.652344,
      254.347656,
      49.550781,
      254.636719,
      49.425781
    );
    ctx.bezierCurveTo(
      254.742188,
      49.40625,
      254.824219,
      49.363281,
      254.925781,
      49.320312
    );
    ctx.bezierCurveTo(
      254.949219,
      49.300781,
      254.988281,
      49.300781,
      255.011719,
      49.28125
    );
    ctx.bezierCurveTo(
      272.550781,
      42.425781,
      290.382812,
      37.433594,
      307.222656,
      33.789062
    );
    ctx.bezierCurveTo(
      306.996094,
      33.871094,
      306.789062,
      33.957031,
      306.558594,
      34.019531
    );
    ctx.bezierCurveTo(
      305.046875,
      34.515625,
      303.535156,
      35.03125,
      302.023438,
      35.550781
    );
    ctx.bezierCurveTo(
      293.199219,
      38.617188,
      284.792969,
      41.929688,
      276.820312,
      45.46875
    );
    ctx.bezierCurveTo(
      231.007812,
      61.601562,
      185.585938,
      89.722656,
      163.425781,
      138.761719
    );
    ctx.bezierCurveTo(
      141.140625,
      188.050781,
      129.523438,
      277.324219,
      171.460938,
      362.789062
    );
    ctx.bezierCurveTo(
      216.09375,
      453.765625,
      297.984375,
      541.550781,
      336.445312,
      580.046875
    );
    ctx.fill();

    // #path19
    ctx.beginPath();
    ctx.fillStyle = "rgb(230, 215, 152)";
    ctx.moveTo(277.253906, 45.324219);
    ctx.bezierCurveTo(
      277.792969,
      45.097656,
      278.351562,
      44.847656,
      278.890625,
      44.601562
    );
    ctx.bezierCurveTo(
      278.351562,
      44.847656,
      277.8125,
      45.078125,
      277.296875,
      45.324219
    );
    ctx.closePath();
    ctx.moveTo(306.558594, 34.019531);
    ctx.bezierCurveTo(
      306.789062,
      33.957031,
      306.996094,
      33.871094,
      307.222656,
      33.789062
    );
    ctx.bezierCurveTo(
      307.265625,
      33.789062,
      307.304688,
      33.769531,
      307.347656,
      33.769531
    );
    ctx.bezierCurveTo(
      307.097656,
      33.851562,
      306.828125,
      33.933594,
      306.558594,
      34.019531
    );
    ctx.fill();

    // #path20
    ctx.beginPath();
    ctx.fillStyle = "rgb(247, 247, 230)";
    ctx.moveTo(412.785156, 33.851562);
    ctx.bezierCurveTo(
      409.453125,
      29.792969,
      406.011719,
      26.273438,
      403.777344,
      24.035156
    );
    ctx.bezierCurveTo(
      406.011719,
      26.253906,
      409.429688,
      29.773438,
      412.765625,
      33.832031
    );
    ctx.bezierCurveTo(
      412.765625,
      33.832031,
      412.765625,
      33.851562,
      412.785156,
      33.851562
    );
    ctx.moveTo(403.570312, 23.828125);
    ctx.bezierCurveTo(
      401.457031,
      21.777344,
      398.183594,
      21.511719,
      396.402344,
      21.511719
    );
    ctx.bezierCurveTo(
      395.78125,
      21.511719,
      395.367188,
      21.550781,
      395.203125,
      21.550781
    );
    ctx.bezierCurveTo(
      395.058594,
      21.550781,
      394.621094,
      21.511719,
      394.023438,
      21.511719
    );
    ctx.bezierCurveTo(
      392.363281,
      21.511719,
      389.402344,
      21.738281,
      387.3125,
      23.414062
    );
    ctx.bezierCurveTo(
      389.402344,
      21.738281,
      392.34375,
      21.511719,
      394.0,
      21.511719
    );
    ctx.bezierCurveTo(
      394.558594,
      21.511719,
      394.972656,
      21.53125,
      395.160156,
      21.53125
    );
    ctx.lineTo(395.203125, 21.550781);
    ctx.lineTo(395.265625, 21.53125);
    ctx.bezierCurveTo(
      395.429688,
      21.53125,
      395.84375,
      21.511719,
      396.425781,
      21.511719
    );
    ctx.bezierCurveTo(
      398.183594,
      21.511719,
      401.457031,
      21.777344,
      403.570312,
      23.828125
    );
    ctx.fill();

    // #path21
    ctx.beginPath();
    ctx.fillStyle = "rgb(231, 51, 60)";
    ctx.moveTo(380.808594, 560.871094);
    ctx.bezierCurveTo(
      379.296875,
      553.292969,
      377.679688,
      545.132812,
      375.941406,
      536.496094
    );
    ctx.bezierCurveTo(
      361.070312,
      462.027344,
      338.578125,
      349.433594,
      333.464844,
      252.929688
    );
    ctx.bezierCurveTo(
      338.578125,
      349.433594,
      361.070312,
      462.027344,
      375.941406,
      536.496094
    );
    ctx.bezierCurveTo(
      377.679688,
      545.132812,
      379.296875,
      553.292969,
      380.808594,
      560.871094
    );
    ctx.moveTo(409.636719, 560.703125);
    ctx.bezierCurveTo(
      411.128906,
      553.167969,
      412.746094,
      545.070312,
      414.464844,
      536.496094
    );
    ctx.bezierCurveTo(
      434.054688,
      438.460938,
      466.839844,
      274.40625,
      455.78125,
      167.878906
    );
    ctx.bezierCurveTo(
      466.839844,
      274.40625,
      434.054688,
      438.460938,
      414.464844,
      536.496094
    );
    ctx.bezierCurveTo(
      412.746094,
      545.070312,
      411.128906,
      553.167969,
      409.660156,
      560.703125
    );
    ctx.closePath();
    ctx.moveTo(455.636719, 166.492188);
    ctx.bezierCurveTo(
      448.347656,
      97.820312,
      431.261719,
      60.050781,
      417.40625,
      40.023438
    );
    ctx.lineTo(417.425781, 40.042969);
    ctx.bezierCurveTo(
      431.28125,
      60.070312,
      448.347656,
      97.820312,
      455.636719,
      166.492188
    );
    ctx.moveTo(412.929688, 34.039062);
    ctx.bezierCurveTo(
      412.867188,
      33.976562,
      412.828125,
      33.914062,
      412.785156,
      33.851562
    );
    ctx.bezierCurveTo(
      412.765625,
      33.851562,
      412.765625,
      33.832031,
      412.765625,
      33.832031
    );
    ctx.bezierCurveTo(
      412.808594,
      33.894531,
      412.847656,
      33.957031,
      412.910156,
      33.996094
    );
    ctx.closePath();
    ctx.fill();

    // #path22
    ctx.beginPath();
    ctx.fillStyle = "rgb(228, 227, 189)";
    ctx.moveTo(405.910156, 580.046875);
    ctx.lineTo(384.496094, 580.046875);
    ctx.lineTo(384.578125, 580.046875);
    ctx.bezierCurveTo(
      383.5,
      574.25,
      382.277344,
      567.933594,
      380.933594,
      561.160156
    );
    ctx.bezierCurveTo(
      380.890625,
      561.078125,
      380.851562,
      560.972656,
      380.808594,
      560.871094
    );
    ctx.bezierCurveTo(
      379.296875,
      553.292969,
      377.679688,
      545.132812,
      375.941406,
      536.496094
    );
    ctx.bezierCurveTo(
      361.070312,
      462.027344,
      338.578125,
      349.433594,
      333.464844,
      252.929688
    );
    ctx.bezierCurveTo(
      331.847656,
      222.40625,
      331.972656,
      193.476562,
      334.621094,
      167.878906
    );
    ctx.bezierCurveTo(
      341.832031,
      98.277344,
      359.0625,
      60.132812,
      373.019531,
      40.003906
    );
    ctx.bezierCurveTo(
      373.042969,
      39.980469,
      373.082031,
      39.960938,
      373.125,
      39.941406
    );
    ctx.bezierCurveTo(
      373.808594,
      38.925781,
      374.511719,
      37.910156,
      375.214844,
      36.9375
    );
    ctx.bezierCurveTo(
      375.402344,
      36.6875,
      375.589844,
      36.441406,
      375.777344,
      36.191406
    );
    ctx.bezierCurveTo(
      379.710938,
      31.054688,
      384.164062,
      26.480469,
      386.792969,
      23.871094
    );
    ctx.bezierCurveTo(
      386.960938,
      23.703125,
      387.125,
      23.558594,
      387.3125,
      23.414062
    );
    ctx.bezierCurveTo(
      389.402344,
      21.738281,
      392.363281,
      21.511719,
      394.023438,
      21.511719
    );
    ctx.bezierCurveTo(
      394.621094,
      21.511719,
      395.058594,
      21.550781,
      395.203125,
      21.550781
    );
    ctx.bezierCurveTo(
      395.367188,
      21.550781,
      395.78125,
      21.511719,
      396.402344,
      21.511719
    );
    ctx.bezierCurveTo(
      398.183594,
      21.511719,
      401.457031,
      21.777344,
      403.570312,
      23.828125
    );
    ctx.bezierCurveTo(
      403.589844,
      23.851562,
      403.589844,
      23.871094,
      403.609375,
      23.871094
    );
    ctx.bezierCurveTo(
      403.671875,
      23.933594,
      403.734375,
      23.996094,
      403.777344,
      24.035156
    );
    ctx.bezierCurveTo(
      406.011719,
      26.273438,
      409.453125,
      29.792969,
      412.785156,
      33.851562
    );
    ctx.bezierCurveTo(
      412.828125,
      33.914062,
      412.867188,
      33.976562,
      412.929688,
      34.039062
    );
    ctx.bezierCurveTo(
      413.65625,
      34.949219,
      414.402344,
      35.921875,
      415.148438,
      36.9375
    );
    ctx.bezierCurveTo(
      415.851562,
      37.910156,
      416.554688,
      38.925781,
      417.238281,
      39.941406
    );
    ctx.bezierCurveTo(
      417.300781,
      39.980469,
      417.363281,
      40.003906,
      417.40625,
      40.023438
    );
    ctx.bezierCurveTo(
      431.261719,
      60.050781,
      448.347656,
      97.820312,
      455.636719,
      166.492188
    );
    ctx.bezierCurveTo(
      455.699219,
      166.949219,
      455.742188,
      167.402344,
      455.78125,
      167.878906
    );
    ctx.bezierCurveTo(
      466.839844,
      274.40625,
      434.054688,
      438.460938,
      414.464844,
      536.496094
    );
    ctx.bezierCurveTo(
      412.746094,
      545.070312,
      411.128906,
      553.167969,
      409.636719,
      560.703125
    );
    ctx.bezierCurveTo(
      409.574219,
      560.851562,
      409.492188,
      561.015625,
      409.429688,
      561.160156
    );
    ctx.bezierCurveTo(
      408.085938,
      567.933594,
      406.863281,
      574.25,
      405.785156,
      580.046875
    );
    ctx.closePath();
    ctx.moveTo(395.203125, 28.714844);
    ctx.bezierCurveTo(
      392.988281,
      31.140625,
      390.5625,
      33.957031,
      388.328125,
      36.957031
    );
    ctx.bezierCurveTo(
      374.054688,
      56.300781,
      355.480469,
      94.675781,
      347.917969,
      167.652344
    );
    ctx.bezierCurveTo(
      336.878906,
      274.179688,
      369.664062,
      438.253906,
      389.238281,
      536.269531
    );
    ctx.bezierCurveTo(
      391.414062,
      547.121094,
      393.421875,
      557.183594,
      395.203125,
      566.316406
    );
    ctx.bezierCurveTo(
      396.984375,
      557.183594,
      398.992188,
      547.121094,
      401.167969,
      536.269531
    );
    ctx.bezierCurveTo(
      420.757812,
      438.253906,
      453.546875,
      274.179688,
      442.484375,
      167.652344
    );
    ctx.bezierCurveTo(
      434.925781,
      94.675781,
      416.347656,
      56.300781,
      402.078125,
      36.957031
    );
    ctx.bezierCurveTo(
      399.863281,
      33.957031,
      397.417969,
      31.140625,
      395.203125,
      28.714844
    );
    ctx.fill();

    // #path23
    ctx.beginPath();
    ctx.fillStyle = "rgb(226, 50, 46)";
    ctx.moveTo(405.910156, 580.046875);
    ctx.bezierCurveTo(
      407.027344,
      574.125,
      408.269531,
      567.640625,
      409.636719,
      560.703125
    );
    ctx.lineTo(409.660156, 560.703125);
    ctx.bezierCurveTo(
      408.269531,
      567.640625,
      407.027344,
      574.125,
      405.910156,
      580.046875
    );
    ctx.fill();

    // #path24
    ctx.beginPath();
    ctx.fillStyle = "rgb(221, 205, 134)";
    ctx.moveTo(405.910156, 580.046875);
    ctx.lineTo(405.785156, 580.046875);
    ctx.bezierCurveTo(
      406.863281,
      574.25,
      408.085938,
      567.933594,
      409.429688,
      561.160156
    );
    ctx.bezierCurveTo(
      409.492188,
      561.015625,
      409.574219,
      560.851562,
      409.636719,
      560.703125
    );
    ctx.bezierCurveTo(
      408.269531,
      567.640625,
      407.027344,
      574.125,
      405.910156,
      580.046875
    );
    ctx.fill();

    // #path25
    ctx.beginPath();
    ctx.fillStyle = "rgb(226, 50, 46)";
    ctx.moveTo(384.496094, 580.046875);
    ctx.bezierCurveTo(
      383.398438,
      574.164062,
      382.15625,
      567.746094,
      380.808594,
      560.871094
    );
    ctx.bezierCurveTo(
      382.15625,
      567.765625,
      383.398438,
      574.164062,
      384.496094,
      580.046875
    );
    ctx.fill();

    // #path26
    ctx.beginPath();
    ctx.fillStyle = "rgb(221, 205, 134)";
    ctx.moveTo(384.578125, 580.046875);
    ctx.lineTo(384.496094, 580.046875);
    ctx.bezierCurveTo(
      383.398438,
      574.164062,
      382.15625,
      567.765625,
      380.808594,
      560.871094
    );
    ctx.bezierCurveTo(
      380.851562,
      560.972656,
      380.890625,
      561.078125,
      380.933594,
      561.160156
    );
    ctx.bezierCurveTo(
      382.277344,
      567.933594,
      383.5,
      574.25,
      384.578125,
      580.046875
    );
    ctx.fill();

    // #path27
    ctx.beginPath();
    ctx.fillStyle = "rgb(226, 50, 46)";
    ctx.moveTo(417.425781, 40.042969);
    ctx.lineTo(417.40625, 40.023438);
    ctx.bezierCurveTo(
      416.722656,
      39.050781,
      416.039062,
      38.097656,
      415.375,
      37.1875
    );
    ctx.bezierCurveTo(
      416.039062,
      38.097656,
      416.722656,
      39.050781,
      417.425781,
      40.042969
    );
    ctx.moveTo(415.375, 37.1875);
    ctx.bezierCurveTo(
      414.585938,
      36.109375,
      413.757812,
      35.054688,
      412.929688,
      34.039062
    );
    ctx.lineTo(412.910156, 33.996094);
    ctx.bezierCurveTo(
      413.738281,
      35.03125,
      414.566406,
      36.089844,
      415.375,
      37.1875
    );
    ctx.fill();

    // #path28
    ctx.beginPath();
    ctx.fillStyle = "rgb(221, 205, 134)";
    ctx.moveTo(417.40625, 40.023438);
    ctx.bezierCurveTo(
      417.363281,
      40.003906,
      417.300781,
      39.980469,
      417.238281,
      39.941406
    );
    ctx.bezierCurveTo(
      416.554688,
      38.925781,
      415.851562,
      37.910156,
      415.148438,
      36.9375
    );
    ctx.bezierCurveTo(
      414.402344,
      35.921875,
      413.65625,
      34.949219,
      412.929688,
      34.039062
    );
    ctx.bezierCurveTo(
      413.757812,
      35.054688,
      414.585938,
      36.109375,
      415.375,
      37.1875
    );
    ctx.bezierCurveTo(
      416.039062,
      38.097656,
      416.722656,
      39.050781,
      417.40625,
      40.023438
    );
    ctx.moveTo(373.019531, 40.003906);
    ctx.bezierCurveTo(
      373.703125,
      39.007812,
      374.367188,
      38.078125,
      375.03125,
      37.1875
    );
    ctx.bezierCurveTo(
      375.277344,
      36.855469,
      375.527344,
      36.523438,
      375.777344,
      36.191406
    );
    ctx.bezierCurveTo(
      375.589844,
      36.441406,
      375.402344,
      36.6875,
      375.214844,
      36.9375
    );
    ctx.bezierCurveTo(
      374.511719,
      37.910156,
      373.808594,
      38.925781,
      373.125,
      39.941406
    );
    ctx.bezierCurveTo(
      373.082031,
      39.960938,
      373.042969,
      39.980469,
      373.019531,
      40.003906
    );
    ctx.fill();
    ctx.translate(-1700, -100);
  }

  update() {
    // this.y += this.speed * this.direction;
    // // If plane reaches the top or bottom, change direction
    // if (this.y <= 0 || this.y >= this.height) {
    //   this.direction *= -1;
    // }

    if (this.direction === 1) {
      this.y -= this.speed * 0.4;
      if (this.y < 0) {
        this.direction = -1;
      }
    } else {
      this.y += this.speed * 0.4;
      if (this.y > this.height - this.height - 0) {
        this.direction = 1;
      }
    }
  }
}
