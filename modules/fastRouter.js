class FastRouter {
    constructor(options) {
        this.button = options.button
        this.index = options.index
        this.arr = options.arr
        this.hash = options.hash
    }

    rout() {
        this.button.addEventListener('click', () => {
            for(let i = 0; i < this.arr.length; i++) {
                this.arr[i].style.display = 'none'
            }
            this.arr[this.index].style.display = 'block'
            window.location.hash = this.hash
        })
    }
}