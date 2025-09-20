 const dhak = document.getElementById("dhakSound");
    const btn = document.querySelector("button");

    function toggleDhak() {
      if (dhak.paused) {
        dhak.play();
        btn.textContent = "⏸ Pause Dhak";
      } else {
        dhak.pause();
        btn.textContent = "🔊 Play Dhak";
      }
    }
    