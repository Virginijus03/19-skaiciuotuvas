
class Skaiciuotuvas {
    constructor(selector) {
        this.selector = selector;

        this.DOM = document.querySelector(selector);
        this.buttonsData = [
            { title: 'C', color: 'grey' },
            { title: '+/-', color: 'grey' },
            { title: '%', color: 'grey' },
            { title: '/', color: 'dark' },
            { title: '1', color: 'white' },
            { title: '2', color: 'white' },
            { title: '3', color: 'white' },
            { title: '*', color: 'dark' },
            { title: '4', color: 'white' },
            { title: '5', color: 'white' },
            { title: '6', color: 'white' },
            { title: '-', color: 'dark' },
            { title: '7', color: 'white' },
            { title: '8', color: 'white' },
            { title: '9', color: 'white' },
            { title: '+', color: 'dark' },
            { title: '0', color: 'white' },
            { title: '.', color: 'white' },
            { title: '<', color: 'white' },
            { title: '=', color: 'red' },
        ];

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return false;
        }

        this.render();
    }

    isValidSelector() {
        return true;
    }

    findElementBySelector() {
        this.DOM = document.querySelector(this.selector);
        return !!this.DOM;
    }

    render() {
        let HTML = ` <div class="skaiciuotuvas">
        <div class="screen">100</div>
        <div class="answer">500</div>
        <div class="keybord">
            <div class="button pilkas">c</div>
            <div class="button pilkas">+/-</div>
            <div class="button pilkas">%</div>
            <div class="button tamsiai">/</div>
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
            <div class="button tamsiai">x</div>
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
            <div class="button tamsiai">-</div>
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">9</div>
            <div class="button tamsiai">+</div>
            <div class="button">0</div>
            <div class="button">.</div>
            <div class="button">[x]</div>
            <div class="button raudonas">=</div>
        </div>
    </div>`;

        this.DOM.innerHTML = HTML;
    }
}


export { Skaiciuotuvas }