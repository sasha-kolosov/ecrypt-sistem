class Settings extends Component {
    render() {
        return `
            <div class="Settings none-js" id="settings">
                <div class="Settings__block">
                    <button class="Settings__block-en" id="en-button">
                        <span id="ln-settings-en">English</span>
                    </button>
                    <button class="Settings__block-ru" id="ru-button">
                        <span id="ln-settings-ru">Русский</span>
                    </button>
                </div>
            </div>
        `
    }
}