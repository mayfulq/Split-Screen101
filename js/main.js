document.addEventListener('DOMContentLoaded', function () {
    let wrapper = document.getElementById('wrapper');
    let topLayer = wrapper.querySelector('.top');
    let handle = wrapper.querySelector('.handle');
    let skew = 10000;
    let delta = 0;

    wrapper.addEventListener('mousemove', function (e) {
        delta = (e.clientX - window.innerWidth) / 2 * 0.5;
        handle.style.left = e.clientX + delta + 'px';
        topLayer.style.width = e.clientX + skew + delta + 'px';

    })

    wrapper.addEventListener('mouseout', function (e) {

        handle.style.left = '50%';
        topLayer.style.width = 'calc(50vw + 10000px)';
    })


});