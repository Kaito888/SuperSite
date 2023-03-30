class App extends Component {
    constructor(props) {
        super(props);
        this.menu = new Menu({ id: 'menu', parent: this.id, template: template.MenuTemplate, callbacks: { showMenuItem: (name) => this.showMenuItem(name) } });
        this.essay = new Essay({ id: 'essay', parent: this.id, template: template.EssayTemplate });
        this.oneShot = new OneShot({ id: 'oneShot', parent: this.id, template: template.OneShotTemplate });
        this.multyShot = new MultyShot({ id: 'multyShot', parent: this.id, template: template.MultyShotTemplate });
        this.roots = new Roots({ id: 'roots', parent: this.id, template: template.RootsTemplate });
        this.rpg = new RPG({ id: 'rpg', parent: this.id, template: template.RPGTemplate });
        this.humans = new Humans({ id: 'humans', parent: this.id, template: template.HumansTemplate });
        this.graph2D = new Graph2D({ id: 'graph', parent: this.id, template: template.Graph2DTemplate });
        this.graph3D = new Graph3D({ id: 'graph3D', parent: this.id, template: template.Graph3DTemplate });
        this.calculator = new UniCalculator({ id: 'calculator', parent: this.id, template: template.UniCalculatorTemplate });
        this.polyCalculator = new PolyCalculator({ id: 'polyCalculator', parent: this.id, template: template.PolyCalculatorTemplate });
        this.BGpopUp = new Background({ id: 'BGpopUp', parent: this.id, template: template.BackgroundTemplate });

        this.oneShot.hide();
        this.multyShot.hide();
        this.roots.hide();
        this.rpg.hide();
        this.humans.hide();
        this.graph2D.hide();
        this.graph3D.hide();
        this.calculator.hide();
        this.polyCalculator.hide();
        this.BGpopUp.hide();
    }

    showMenuItem(name) {
        if (name != 'BGpopUp') {
            this.essay.hide();
            this.oneShot.hide();
            this.multyShot.hide();
            this.roots.hide();
            this.rpg.hide();
            this.humans.hide();
            this.graph2D.hide();
            this.graph3D.hide();
            this.calculator.hide();
            this.polyCalculator.hide();
        }

        this[name].show();
    }
}