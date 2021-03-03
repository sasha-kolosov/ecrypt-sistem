class App extends Component {
    render() {
        return (`
            ${(new Header).render()}
            ${(new Home).render()}
            ${(new History).render()}
            ${(new Details).render()}
            ${(new Settings).render()}
        `)
    }
}