function smoothScroll(target,duration){
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;
    console.log(target);
    console.log(targetPosition);
    console.log(distance);
    function animation(currentTime) {
        if(startTime === null ) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0,run);
        if(timeElapsed < duration) requestAnimationFrame(animation);
    }
    function ease(t, b, c, d){
	t /= d;
	return c*t*t*t*t*t + b;
    };
    requestAnimationFrame(animation);
}
var s1 = document.querySelector('.s1');
var s2 = document.querySelector('.s2');
var s3 = document.querySelector('.s3');
var s4 = document.querySelector('.s4');
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');

s1.addEventListener('click', function(){
    smoothScroll('.box3', 1000);
});

s2.addEventListener('click', function(){
    smoothScroll('.box2', 1000);
});

s3.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
});

s4.addEventListener('click', function(){
    smoothScroll('.box1', 1000);
});