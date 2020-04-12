const bigInt = require("./BigInteger.min.js")

document.addEventListener("DOMContentLoaded", function(event) {
  years_per_universe      = bigInt("10e100");
  milliseconds_per_year   = bigInt("3.1536e10");
  plancks_per_millisecond = bigInt("1.855e40");

  milliseconds_per_universe = milliseconds_per_year.multiply(years_per_universe);

  setInterval(function() {
    now_ms       = bigInt(Date.now());
    remaining_ms = milliseconds_per_universe.minus(now_ms);
    remaining_p  = plancks_per_millisecond.multiply(remaining_ms);

    // last 38 chars are zeros, should be random
    remaining_p_fuzzy = remaining_p.toString().split('');
    for (i = 0; i < 38; i++) {
      remaining_p_fuzzy[151 - i] = Math.floor(Math.random() * 10);
    }
    remaining_p_fuzzy = bigInt(remaining_p_fuzzy.join(''));

    remaining_p_fuzzy_binary = remaining_p_fuzzy.toString(2);
    while (remaining_p_fuzzy_binary.length < 506) {
      remaining_p_fuzzy_binary = '0' + remaining_p_fuzzy_binary;
    }

    remaining_p_fuzzy_binary = remaining_p_fuzzy_binary.replace(/(.{23})/g, "$1\n")
    remaining_p_fuzzy_binary = remaining_p_fuzzy_binary.replace(/(.)/g, "$1 ")

    remaining_p_fuzzy_binary = remaining_p_fuzzy_binary.replace(/0/g, " ")
    remaining_p_fuzzy_binary = remaining_p_fuzzy_binary.replace(/1/g, "●")

    document.getElementById("time").innerHTML = remaining_p_fuzzy_binary;
  }, 16);
});
