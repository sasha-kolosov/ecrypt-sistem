class Header extends Component {
    render() {
        return `
            <div class="Header">
                <div class="Header__menu">
                    <div class="title-js hash-js router-js">
                        <span id="ln-header-home">Home</span>
                    </div>
                    <div class="title-js hash-js router-js">
                        <span id="ln-header-history">History</span>
                    </div>
                    <div class="title-js hash-js router-js">
                        <span id="ln-header-details">Details</span>
                    </div>
                    <div class="title-js hash-js router-js">
                        <span id="ln-header-settings">Settings</span>
                    </div>
                </div>
            </div>
        `
    }
}