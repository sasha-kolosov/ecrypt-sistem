class Home extends Component {
    render() {
        return `
            <div class="Home block-js" id="home">
                <div class="Home__title">
                    <h1>
                        <span id="ln-home-make">Make a Encryption</span>
                    </h1>
                </div>
                <div class="Home__form">
                    <input type="text" placeholder="Text" id="input-text" /></br>
                    <button class="Home__button" id="button">
                        <span id="ln-home-ecrypt">Ecrypt</span>
                    </button>
                    <button class="Home__check" id="check">
                        <span id="ln-home-check">Check</span>
                    </button>
                </div>
            </div>
        `
    }   
}