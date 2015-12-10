function erstelleStatistik(statistik, performance){
if (statistik) {
// Anzeige zur Kontrolle der Performance des Rendering erstellen, positionieren, anhaengen
    game.statistik = new THREEx.RendererStats();
    game.statistik.domElement.style.position = 'absolute';
    game.statistik.domElement.style.right = "0px";
    game.statistik.domElement.style.top = '40px';
    game.statistik.domElement.style.zIndex = 2000;
    $('#viewport').append(game.statistik.domElement);
}
;
if (performance) {
// Anzeige zur Kontrolle der Performance des Rendering erstellen, positionieren, anhaengen
    game.performance = new Stats();
    game.performance.domElement.style.position = 'absolute';
    game.performance.domElement.style.right = "0px";
    game.performance.domElement.style.top = '0px';
    game.performance.domElement.style.zIndex = 2000;
    $('#viewport').append(game.performance.domElement);
};
}

function updateStatistik(statistik, performance){
    game.statistik.update(game.renderer);
    game.performance.update(game.renderer);
}