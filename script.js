$(document).ready(function() {
  Y_U = bigInt("10e100");
  M_Y = bigInt("31536000000");
  P_M = bigInt("1.855e40");

  M_U = M_Y.multiply(Y_U)

  setInterval(function() {
    time = document.getElementById("time");
    now  = bigInt(Date.now())
    down = M_U.minus(now)
    plan = down.multiply(P_M);
    ts   = plan.toString(2);

    ts = ts.slice(0, -37);
    for (i = 0; i < 37; i++) {
      r = Math.floor(Math.random() * 2);
      ts = ts + r;
    }
    ts = ts.replace(/(.)/g, "$1 ")
    ts = ts.replace(/0/g, "○")
    ts = ts.replace(/1/g, "●")

    time.innerHTML = ts;
  }, 16)
});
