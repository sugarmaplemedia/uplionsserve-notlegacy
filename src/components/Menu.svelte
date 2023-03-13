<script>
import '@styles/index.css';

// MENU
var isClicked = false;
function openHamburger() {
    anime({
        targets: '#topBun',
        translateY: 70
    });
    anime({
        targets: '#bottomBun',
        translateY: -70
    });
    anime({
        targets: ".projectHeaderDropdownListMobile a",
        opacity: 1,
        duration: 200,
        easing: 'linear',
        begin: function () {
            $('a', '.projectHeaderDropdownListMobile').css('display', 'inline-block');
        }
    });
    isClicked = true;
}
function closeHamburger() {
    anime({
        targets: '#topBun',
        translateY: 0
    });
    anime({
        targets: '#bottomBun',
        translateY: 0
    });
    anime({
        targets: ".projectHeaderDropdownListMobile a",
        opacity: 0,
        duration: 200,
        easing: 'linear',
        complete: function () {
            $('a', '.projectHeaderDropdownListMobile').css('display', 'none');
        }
    });
    isClicked = false;
}

$('.hamburger').click(function () {
    if (!isClicked) {
        openHamburger();
        $('.headerBehind').addClass('headerBehindOpen');
        $("#projectHeaderArrow").addClass("projectHeaderArrowOpen");
        $("#projectHeaderDropdownList").addClass("projectHeaderDropdownListOpen");
        $("#cause").addClass("causeDropdownOpen");
    } else {
        $('.headerBehind').removeClass('headerBehindOpen');
        $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
        $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
        $("#cause").removeClass("causeDropdownOpen");
        closeHamburger();
    }
});

$("#projectHeaderDropdown").click(function () {
    $('.headerBehind').toggleClass('headerBehindOpen');
    $("#projectHeaderArrow").toggleClass("projectHeaderArrowOpen");
    $("#projectHeaderDropdownList").toggleClass("projectHeaderDropdownListOpen");
    $("#cause").toggleClass("causeDropdownOpen");
});

$("header a").click(function () {
    $('.headerBehind').removeClass('headerBehindOpen');
    $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
    $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
    $("#cause").removeClass("causeDropdownOpen");
    closeHamburger();
});

$(".headerBehind").click(function () {
    $('.headerBehind').removeClass('headerBehindOpen');
    $("#projectHeaderArrow").removeClass("projectHeaderArrowOpen");
    $("#projectHeaderDropdownList").removeClass("projectHeaderDropdownListOpen");
    $("#cause").removeClass("causeDropdownOpen");
    closeHamburger();
});

// HEADER CHANGE BASED ON SCROLL

$(function() {
    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
        if (scrolled >= 50) {
            $('header').addClass('onScroll');
        } else {
            $('header').removeClass('onScroll');
        }
    });
});
</script>

<nav>
    <div class="headerBehind"></div>
    <a href="https://www.district10lions.org/" target="_block"><img class="lionsIcon" src="media/brand/logo-lions-color.svg" alt="Lions Clubs International logo"/></a>
    <a href="#top"><img class="headerIcon" src="media/brand/Icon_UPLS-Color.svg" alt="UP Lions Serve Icon"></a>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.52 540.49" class="hamburger">
        <defs>
            <style>
                .cls-1{fill:#fff}
            </style>
        </defs>
        <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
                <rect id="bottomBun" class="cls-1" y="80" width="455.52" height="80.49" rx="40.24"/>
                <rect id="middle" class="cls-1" y ="230" width="455.52" height="80.49" rx="40.24"/>
                <rect id="topBun" class="cls-1" y="380" width="455.52" height="80.49" rx="40.24"/>
            </g>
        </g>
    </svg>
    <div id="projectHeaderDropdownList" class="projectHeaderDropdownList">
        <span id="projectHeaderDropdown" class="projectHeaderDropdown">
            SERVICE PROGRAMS <span id="projectHeaderArrow" class="projectDropdownArrow">&#8735;</span>
        </span>
        <a href="#cc">Childhood Cancer</a>
        <a href="#dad">Defense Against Diabetes</a>
        <a href="#pks" style="font-style: italic">Project KidSight (Coming Soon)</a>
        <a href="#hg" style="font-style: italic">D10 Hunger (Coming Soon)</a>
        <span style="width: 100px"></span>
    </div>
    <div class="socialBox">
        <a href="https://facebook.com/uplionsserve" target="_blank"><img src="media/menu/facebook.png" /></a>
        <span></span>
        <a href="https://instagram.com/uplionsserve" target="_blank"><img src="media/menu/instagram.png" /></a>
    </div>
    <div class="projectHeaderDropdownListMobile">
        <a href="#cc">Childhood Cancer</a>
        <a href="#dad">Defense Against Diabetes</a>
        <a href="#pks"><i>Project KidSight (Coming Soon)</i></a>
        <a href="#hg"><i>D10 Hunger (Coming Soon)</i></a>
        <div>
            <a href="https://facebook.com/uplionsserve" target="_blank"><img src="media/menu/facebook.png" /></a>
            <a href="https://instagram.com/uplionsserve" target="_blank"><img src="media/menu/instagram.png" /></a>
        </div>
    </div>
</nav>