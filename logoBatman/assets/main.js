function getRandomInt(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

tl = new TimelineMax();
tl2 = new TimelineMax({delay:27.5});
tl3 = new TimelineMax({repeat: 3, yoyo: true});

var $cloud1 = $("#cloud_1"),
    $cloud2 = $("#cloud_2"),
    $cloud3 = $("#cloud_3"),
    $cloud4 = $("#cloud_4"),
    $cloud5 = $("#cloud_5"),
    $cloud6 = $("#cloud_6"),
    $cloud7 = $("#cloud_7"),
    $moon = $("#moon"),
    $searchlight = $("#searchlight"),
    $logo = $("#logo"),
    starLights = $("polygon.star");


starLights.each(function(index, element) {
  tl3.fromTo(element, 0.75, {autoAlpha: 1}, {autoAlpha: 0}, index * 0.175);
})



tl.fromTo($logo, 5, {rotation: -17, scale: 0.8, x:-154, y: 108, skewX: -48, transformOrigin: "159px -18px"}, {rotation: 20, x:300, repeat: 3, yoyo:true, ease:Power1.easeInOut});

tl.fromTo($searchlight, 5, {rotation: -25, x:-220, y: -26, skewX: -4, transformOrigin: "280px 22px", scale: 0.8}, {rotation: 15, x:167, repeat: 3, yoyo:true, ease:Power1.easeInOut, }, "-=20");


tl.fromTo($logo, 5, {scale: 0.8, rotation: -17, scale: 0.8, x:-154, y: 108, skewX: -48, transformOrigin: "159px -18px", ease: Power1.easeIn}, {scale: 1, rotation: 0, x: 0, y: 22, skewX: 0, skewY: 0, ease: Power1.easeIn}, "-=5");

tl.fromTo($searchlight, 5, {rotation: -25, x:-220, y: -26, skewX: -4, transformOrigin: "280px 22px", scale: 0.8, ease: Power1.easeIn}, {scale: 1, rotation: 0, x: -2, y: -56, skewX: 0, skewY: 0, ease: Power1.easeIn}, "-=5");



tl2.fromTo($logo, 1, {scale: 1.5}, {scale: 1, ease: Back.easeOut});
tl2.fromTo($searchlight, 1, {scale: 1.16}, {scale: 0.95, ease: Back.easeOut}, "-=1");


// thanks Christie Taylor


