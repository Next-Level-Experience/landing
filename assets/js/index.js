const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let count = 0

window.onload = () => {

    () => setTimer()

    setTimeout(() => {
        document.querySelector('html').addEventListener('mouseleave', () => {
            clearTimeout()
            if (count < 1) createPopUp()
        })
    }, 10000);

}

const setTimer = setInterval(() => {

    const eventDate = new Date('Nov 26 2020 20:00').getTime()
    const postEvent = new Date('Nov 26 2020 21:00').getTime()
    let now = new Date().getTime()

    const difference = (eventDate - now)

    if (difference >= 0) {
        days.innerText = fixNum(Math.floor(difference / (1000 * 60 * 60 * 24)))
        hours.innerText = fixNum(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
        minutes.innerText = fixNum(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)))
        seconds.innerText = fixNum(Math.floor((difference % (1000 * 60)) / 1000))
    } else {
        const headerText = document.querySelector('header p')
        const clockArea = document.querySelector('#relogio')
        if (postEvent - now <= 0) {
            clearInterval(setTimer)
            headerText.innerText = 'A live já terminou!'
        } else {
            headerText.innerText = 'A live já começou!'
        }
        clockArea.innerHTML = `<a href="https://youtu.be/fEu-9BVdGd0" target="_blank" rel="noopener">Clique aqui para assistir</a>`
    }

}, 1000);

const fixNum = num => {
    if (num < 10) {
        return String('0' + num)
    } else {
        return num
    }
}

document.getElementById('goToTop').addEventListener('click', () => {
    zenscroll.toY(0)
})

// Popup

const createPopUp = () => {
    const body = document.querySelector('body')
    const wrapper = document.createElement('div')
    wrapper.classList.add('wrapper')
    const popup = document.createElement('div')
    popup.classList.add('popup')
    const h2 = document.createElement('h2')
    h2.innerText = 'Você não vai ficar de fora dessa né? Inscreva-se gratuitamente!'
    popup.appendChild(h2)
    const inner = document.createElement('div')
    inner.classList.add('popup-inner')
    const popupImg = document.createElement('img')
    popupImg.src = './assets/images/popup.svg'
    inner.appendChild(popupImg)
    const popupForm = document.createElement('div')
    popupForm.classList.add('formulario')
    popupForm.innerHTML = `
                    <form method="POST" action="https://nextlevelxp1.activehosted.com/proc.php" id="_form_1_" class="_form _form_1 _inline-form  _dark">
                    <input type="hidden" name="u" value="1" />
                    <input type="hidden" name="f" value="1" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />
                    <div class="_form-content">
                    <div class="_form_element _x53025867 _full_width " >
                        <label class="_form-label">
                        Nome completo
                        </label>
                        <div class="_field-wrapper">
                        <input type="text" name="fullname" placeholder="Digite seu nome" />
                        </div>
                    </div>
                    <div class="_form_element _x68867163 _full_width " >
                        <label class="_form-label">
                        E-mail
                        </label>
                        <div class="_field-wrapper">
                        <input type="text" name="email" placeholder="Digite seu e-mail" required/>
                        </div>
                    </div>
                    <div class="_button-wrapper _full_width">
                        <button id="_form_1_submit" class="_submit botao" type="submit">
                        INSCREVER-SE GRATUITAMENTE
                        </button>
                    </div>
                    <div class="_clear-element">
                    </div>
                    </div>
                    <div class="_form-thank-you" style="display:none;">
                    </div>
                    </form>`
    inner.appendChild(popupForm)
    popup.appendChild(inner)
    const closeButton = document.createElement('button')
    closeButton.classList.add('popup-close')
    closeButton.innerHTML = '<img src="./assets/images/close.svg" />'
    popup.appendChild(closeButton)
    wrapper.appendChild(popup)
    body.appendChild(wrapper)

    count++

    const wrapperTag = document.querySelector('.wrapper')
    const closeButtonTag = document.querySelector('.popup-close')

    const removeOnButtonClick = () => {
        body.removeChild(wrapperTag)
        closeButtonTag.removeEventListener('click', removeOnButtonClick)
    }

    const removeOnOutsideClick = e => {
        if (e.target.className !== 'wrapper') return
        body.removeChild(wrapperTag)
        wrapperTag.removeEventListener('click', removeOnOutsideClick)
    }

    closeButtonTag.addEventListener('click', () => removeOnButtonClick())

    wrapperTag.addEventListener('click', e => removeOnOutsideClick(e))
}

// Active campaign

window.cfields = [];
window._show_thank_you = function(id, message, trackcmp_url, email) {
    location.href = '/agradecimento-live.html'
};
window._show_error = function(id, message, html) {
    var form = document.getElementById('_form_' + id + '_'), err = document.createElement('div'), button = form.querySelector('button'), old_error = form.querySelector('._form_error');
    if (old_error) old_error.parentNode.removeChild(old_error);
    err.innerHTML = message;
    err.className = '_error-inner _form_error _no_arrow';
    var wrapper = document.createElement('div');
    wrapper.className = '_form-inner';
    wrapper.appendChild(err);
    button.parentNode.insertBefore(wrapper, button);
    document.querySelector('[id^="_form"][id$="_submit"]').disabled = false;
    if (html) {
    var div = document.createElement('div');
    div.className = '_error-html';
    div.innerHTML = html;
    err.appendChild(div);
    }
};
window._load_script = function(url, callback) {
    var head = document.querySelector('head'), script = document.createElement('script'), r = false;
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.src = url;
    if (callback) {
    script.onload = script.onreadystatechange = function() {
        if (!r && (!this.readyState || this.readyState == 'complete')) {
        r = true;
        callback();
        }
    };
    }
    head.appendChild(script);
};
(function() {
    if (window.location.search.search("excludeform") !== -1) return false;
    var getCookie = function(name) {
    var match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]+)'));
    return match ? match[2] : null;
    }
    var setCookie = function(name, value) {
    var now = new Date();
    var time = now.getTime();
    var expireTime = time + 1000 * 60 * 60 * 24 * 365;
    now.setTime(expireTime);
    document.cookie = name + '=' + value + '; expires=' + now + ';path=/';
    }
        var addEvent = function(element, event, func) {
    if (element.addEventListener) {
        element.addEventListener(event, func);
    } else {
        var oldFunc = element['on' + event];
        element['on' + event] = function() {
        oldFunc.apply(this, arguments);
        func.apply(this, arguments);
        };
    }
    }
    var _removed = false;
    var form_to_submit = document.getElementById('_form_1_');
    var allInputs = form_to_submit.querySelectorAll('input, select, textarea'), tooltips = [], submitted = false;

    var getUrlParam = function(name) {
    var regexStr = '[\?&]' + name + '=([^&#]*)';
    var results = new RegExp(regexStr, 'i').exec(window.location.href);
    return results != undefined ? decodeURIComponent(results[1]) : false;
    };

    for (var i = 0; i < allInputs.length; i++) {
    var regexStr = "field\\[(\\d+)\\]";
    var results = new RegExp(regexStr).exec(allInputs[i].name);
    if (results != undefined) {
        allInputs[i].dataset.name = window.cfields[results[1]];
    } else {
        allInputs[i].dataset.name = allInputs[i].name;
    }
    var fieldVal = getUrlParam(allInputs[i].dataset.name);

    if (fieldVal) {
        if (allInputs[i].dataset.autofill === "false") {
        continue;
        }
        if (allInputs[i].type == "radio" || allInputs[i].type == "checkbox") {
        if (allInputs[i].value == fieldVal) {
            allInputs[i].checked = true;
        }
        } else {
        allInputs[i].value = fieldVal;
        }
    }
    }

    var remove_tooltips = function() {
    for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
    }
    tooltips = [];
    };
    var remove_tooltip = function(elem) {
    for (var i = 0; i < tooltips.length; i++) {
        if (tooltips[i].elem === elem) {
        tooltips[i].tip.parentNode.removeChild(tooltips[i].tip);
        tooltips.splice(i, 1);
        return;
        }
    }
    };
    var create_tooltip = function(elem, text) {
    var tooltip = document.createElement('div'), arrow = document.createElement('div'), inner = document.createElement('div'), new_tooltip = {};
    if (elem.type != 'radio' && elem.type != 'checkbox') {
        tooltip.className = '_error';
        arrow.className = '_error-arrow';
        inner.className = '_error-inner';
        inner.innerHTML = text;
        tooltip.appendChild(arrow);
        tooltip.appendChild(inner);
        elem.parentNode.appendChild(tooltip);
    } else {
        tooltip.className = '_error-inner _no_arrow';
        tooltip.innerHTML = text;
        elem.parentNode.insertBefore(tooltip, elem);
        new_tooltip.no_arrow = true;
    }
    new_tooltip.tip = tooltip;
    new_tooltip.elem = elem;
    tooltips.push(new_tooltip);
    return new_tooltip;
    };
    var resize_tooltip = function(tooltip) {
    var rect = tooltip.elem.getBoundingClientRect();
    var doc = document.documentElement, scrollPosition = rect.top - ((window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0));
    if (scrollPosition < 40) {
        tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _below';
    } else {
        tooltip.tip.className = tooltip.tip.className.replace(/ ?(_above|_below) ?/g, '') + ' _above';
    }
    };
    var resize_tooltips = function() {
    if (_removed) return;
    for (var i = 0; i < tooltips.length; i++) {
        if (!tooltips[i].no_arrow) resize_tooltip(tooltips[i]);
    }
    };
    var validate_field = function(elem, remove) {
    var tooltip = null, value = elem.value, no_error = true;
    remove ? remove_tooltip(elem) : false;
    if (elem.type != 'checkbox') elem.className = elem.className.replace(/ ?_has_error ?/g, '');
    if (elem.getAttribute('required') !== null) {
        if (elem.type == 'radio' || (elem.type == 'checkbox' && /any/.test(elem.className))) {
        var elems = form_to_submit.elements[elem.name];
        if (!(elems instanceof NodeList || elems instanceof HTMLCollection) || elems.length <= 1) {
            no_error = elem.checked;
        }
        else {
            no_error = false;
            for (var i = 0; i < elems.length; i++) {
            if (elems[i].checked) no_error = true;
            }
        }
        if (!no_error) {
            tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
        }
        } else if (elem.type =='checkbox') {
        var elems = form_to_submit.elements[elem.name], found = false, err = [];
        no_error = true;
        for (var i = 0; i < elems.length; i++) {
            if (elems[i].getAttribute('required') === null) continue;
            if (!found && elems[i] !== elem) return true;
            found = true;
            elems[i].className = elems[i].className.replace(/ ?_has_error ?/g, '');
            if (!elems[i].checked) {
            no_error = false;
            elems[i].className = elems[i].className + ' _has_error';
            err.push("Marcar %s é necessário".replace("%s", elems[i].value));
            }
        }
        if (!no_error) {
            tooltip = create_tooltip(elem, err.join('<br/>'));
        }
        } else if (elem.tagName == 'SELECT') {
        var selected = true;
        if (elem.multiple) {
            selected = false;
            for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected) {
                selected = true;
                break;
            }
            }
        } else {
            for (var i = 0; i < elem.options.length; i++) {
            if (elem.options[i].selected && !elem.options[i].value) {
                selected = false;
            }
            }
        }
        if (!selected) {
            elem.className = elem.className + ' _has_error';
            no_error = false;
            tooltip = create_tooltip(elem, "Por favor, selecione uma opção.");
        }
        } else if (value === undefined || value === null || value === '') {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Este campo é necessário.");
        }
    }
    if (no_error && elem.name == 'email') {
        if (!value.match(/^[\+_a-z0-9-'&=]+(\.[\+_a-z0-9-']+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/i)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Digite um e-mail válido");
        }
    }
    if (no_error && /date_field/.test(elem.className)) {
        if (!value.match(/^\d\d\d\d-\d\d-\d\d$/)) {
        elem.className = elem.className + ' _has_error';
        no_error = false;
        tooltip = create_tooltip(elem, "Digite uma data válida.");
        }
    }
    tooltip ? resize_tooltip(tooltip) : false;
    return no_error;
    };
    var needs_validate = function(el) {
        if(el.getAttribute('required') !== null){
            return true
        }
        if(el.name === 'email' && el.value !== ""){
            return true
        }
        return false
    };
    var validate_form = function(e) {
    var err = form_to_submit.querySelector('._form_error'), no_error = true;
    if (!submitted) {
        submitted = true;
        for (var i = 0, len = allInputs.length; i < len; i++) {
        var input = allInputs[i];
        if (needs_validate(input)) {
            if (input.type == 'text') {
            addEvent(input, 'blur', function() {
                this.value = this.value.trim();
                validate_field(this, true);
            });
            addEvent(input, 'input', function() {
                validate_field(this, true);
            });
            } else if (input.type == 'radio' || input.type == 'checkbox') {
            (function(el) {
                var radios = form_to_submit.elements[el.name];
                for (var i = 0; i < radios.length; i++) {
                addEvent(radios[i], 'click', function() {
                    validate_field(el, true);
                });
                }
            })(input);
            } else if (input.tagName == 'SELECT') {
            addEvent(input, 'change', function() {
                validate_field(this, true);
            });
            } else if (input.type == 'textarea'){
            addEvent(input, 'input', function() {
                validate_field(this, true);
            });
            }
        }
        }
    }
    remove_tooltips();
    for (var i = 0, len = allInputs.length; i < len; i++) {
        var elem = allInputs[i];
        if (needs_validate(elem)) {
        if (elem.tagName.toLowerCase() !== "select") {
            elem.value = elem.value.trim();
        }
        validate_field(elem) ? true : no_error = false;
        }
    }
    if (!no_error && e) {
        e.preventDefault();
    }
    resize_tooltips();
    return no_error;
    };
    addEvent(window, 'resize', resize_tooltips);
    addEvent(window, 'scroll', resize_tooltips);
    window._old_serialize = null;
    if (typeof serialize !== 'undefined') window._old_serialize = window.serialize;
    _load_script("//d3rxaij56vjege.cloudfront.net/form-serialize/0.3/serialize.min.js", function() {
    window._form_serialize = window.serialize;
    if (window._old_serialize) window.serialize = window._old_serialize;
    });
    var form_submit = function(e) {
    e.preventDefault();
    if (validate_form()) {
        // use this trick to get the submit button & disable it using plain javascript
        document.querySelector('#_form_1_submit').disabled = true;
            var serialized = _form_serialize(document.getElementById('_form_1_'));
        var err = form_to_submit.querySelector('._form_error');
        err ? err.parentNode.removeChild(err) : false;
        _load_script('https://nextlevelxp1.activehosted.com/proc.php?' + serialized + '&jsonp=true');
    }
    return false;
    };
    addEvent(form_to_submit, 'submit', form_submit);
})();