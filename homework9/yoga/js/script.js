window.addEventListener('DOMContentLoaded', function () {
    'use_strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    let deadLine = "2020-05-12";

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        // let hours2 = Math.floor((t / 1000 / 60 / 60) % 24),
        //     days = Math.floor((t / (1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours >= 0) {
                if (t.hours < 10) {
                    hours.textContent = "0" + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
            } else {
                hours.textContent = "00";
            }
            if (t.minutes >= 0) {
                if (t.minutes < 10) {
                    minutes.textContent = "0" + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }

            } else {
                minutes.textContent = "00";
            }
            if (t.seconds >= 0) {
                seconds.textContent = t.seconds;
                if (t.seconds < 10) {
                    seconds.textContent = "0" + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }
            } else {
                seconds.textContent = "00";
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('timer', deadLine);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        this.classList.add('more-splash');
        showPopup();
    });

    close.addEventListener('click', function () {
        hidePopup();
    });

    function showPopup() {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function hidePopup() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    }

    let moreForTabs = document.querySelector('.info');

    moreForTabs.addEventListener('click', function (event) {
        if (event && event.target.className == 'description-btn') {
            this.classList.add('more-splash');
            showPopup();
        }
    });
});