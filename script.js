const counters = document.querySelectorAll(".count");
const speed = 10000;

counters.forEach((number) => {
  const updateCount = function () {
    const target = number.getAttribute("data-target");
    const count = +number.innerText;
    const increment = target / speed;
    
    if (count < target) {
      number.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  };
  updateCount();
});






