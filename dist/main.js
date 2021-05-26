"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MAX_VALUE = 359;
var CONTAINER_START_Y = 380;
var centenas;
var dezenas;
var unidades;
var num_sorteado;
function add_to_group(runtime) {
}
function nova_fase(runtime) {
    sorteia_numero();
    cria_blocos(runtime);
}
function cria_blocos(runtime) {
    var total_width = 0;
    var gap = 20;
    var blocos_container = runtime.objects.blocos_container.createInstance('blocos_container', total_width, CONTAINER_START_Y, false);
    blocos_container.opacity = 0;
    //create centenas bloco
    for (var i = 0; i < centenas; i++) {
        var centenas_bloco = runtime.objects.blocos_centenas.createInstance('blocos_container', total_width, CONTAINER_START_Y, false);
        centenas_bloco.opacity = 0;
        total_width += centenas_bloco.imageWidth + gap;
        blocos_container.addChild(centenas_bloco, { transformX: true, transformY: true, destroyWithParent: true });
    }
    //create dezenas bloco
    for (var i = 0; i < dezenas; i++) {
        var dezenas_bloco = runtime.objects.blocos_dezenas.createInstance('blocos_container', total_width, CONTAINER_START_Y, false);
        dezenas_bloco.opacity = 0;
        total_width += dezenas_bloco.imageWidth + gap;
        blocos_container.addChild(dezenas_bloco, { transformX: true, transformY: true, destroyWithParent: true });
    }
    //create unidades bloco
    var unidades_bloco = runtime.objects.blocos_unidades.createInstance('blocos_container', total_width, CONTAINER_START_Y, false);
    unidades_bloco.opacity = 0;
    setTimeout(function () {
        unidades_bloco.animationFrame = unidades - 1;
    }, 2);
    blocos_container.addChild(unidades_bloco, { transformX: true, transformY: true, destroyWithParent: true });
    //centraliza container
    total_width += unidades_bloco.imageWidth;
    blocos_container.x = (1800 - total_width) * 0.5;
    runtime.callFunction('show_blocos');
}
function sorteia_numero() {
    num_sorteado = Math.floor(Math.random() * MAX_VALUE + 1);
    num_sorteado = 245;
    console.log("numero sorteado: " + num_sorteado);
    //centenas
    var resto_dezenas = num_sorteado % 100;
    centenas = (num_sorteado - resto_dezenas) / 100;
    console.log("centenas: " + centenas);
    //dezenas
    var resto_unidades = resto_dezenas % 10;
    dezenas = (resto_dezenas - resto_unidades) / 10;
    console.log("dezenas: " + dezenas);
    //unidades
    unidades = resto_unidades;
    console.log("unidades: " + unidades);
}
//nova_fase()
//const bt_jogar = (runtime.objects.bt_jogar as ISpriteInstance).getFirstInstance()
