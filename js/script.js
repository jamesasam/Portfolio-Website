var typed = new Typed(".typed", {

    strings: ["Web Designer", "Web Developer", "Student"],
    typeSpeed: 70,
    loop: true,
    startDelay: 1000,
    showCursor: false
});
var element = document.querySelector('.chart1');
new EasyPieChart(element, {
    easing: 'easeInOut',
    barColor: 'white',
    trackColor: false,
    scaleColor: false,
    lineWidth: 4,
    size: 152,
});
var element = document.querySelector('.chart2');
new EasyPieChart(element, {
      easing: 'easeInOut',
      barColor: 'white',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
});

var element = document.querySelector('.chart3');
new EasyPieChart(element, {
      easing: 'easeInOut',
      barColor: 'white',
      trackColor: false,
      scaleColor: false,
      lineWidth: 4,
      size: 152,
});

var elem = document.querySelector('.items');
var iso = new Isotope( elem, {
  filter: '*',
  animationOptions: {
    duration: 1500,
    easing: 'linear',
    queue: false

  }
});
