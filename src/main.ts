import { IRuntime } from "./construct/runtime/IRuntime";
import { ISpriteInstance } from "./construct/plugins/ISpriteInstance";
import { IObjectClass } from "./construct/objects/IObjectClass";

const MAX_VALUE = 359
const CONTAINER_START_Y = 380
let centenas:number
let dezenas:number
let unidades:number
let num_sorteado:number

function add_to_group(runtime:IRuntime){
  
}

function nova_fase(runtime:IRuntime){
  sorteia_numero()
  cria_blocos(runtime)
}

function cria_blocos(runtime:IRuntime){
  let total_width = 0;
  let gap = 20
  const blocos_container = (runtime.objects.blocos_container as IObjectClass).createInstance('blocos_container', total_width,CONTAINER_START_Y, false) as ISpriteInstance

  blocos_container.opacity = 0

  //create centenas bloco
  for(let i=0; i<centenas; i++){
    let centenas_bloco = (runtime.objects.blocos_centenas as IObjectClass).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance

    centenas_bloco.opacity = 0

    total_width += centenas_bloco.imageWidth + gap
    blocos_container.addChild(centenas_bloco, {transformX:true, transformY:true, destroyWithParent:true})
  }

  //create dezenas bloco
  for(let i=0; i<dezenas; i++){
    let dezenas_bloco = (runtime.objects.blocos_dezenas as ISpriteInstance).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance

    dezenas_bloco.opacity = 0;

    total_width += dezenas_bloco.imageWidth + gap
    blocos_container.addChild(dezenas_bloco, {transformX:true, transformY:true, destroyWithParent:true})

  }

  //create unidades bloco
  let unidades_bloco = (runtime.objects.blocos_unidades as ISpriteInstance).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance

  unidades_bloco.opacity = 0;

  setTimeout(()=>{
    unidades_bloco.animationFrame = unidades - 1
  }, 2)

  blocos_container.addChild(unidades_bloco, {transformX:true, transformY:true, destroyWithParent:true})
 
  //centraliza container
  total_width += unidades_bloco.imageWidth
  blocos_container.x = (1800 - total_width) * 0.5

  runtime.callFunction('show_blocos')


}

function sorteia_numero(){
  num_sorteado = Math.floor(Math.random() * MAX_VALUE + 1)
  num_sorteado = 245
  console.log(`numero sorteado: ${num_sorteado}`)
  
  //centenas
  let resto_dezenas = num_sorteado % 100
  centenas = (num_sorteado - resto_dezenas) / 100
  console.log(`centenas: ${centenas}`)

  //dezenas
  let resto_unidades = resto_dezenas % 10
  dezenas = (resto_dezenas - resto_unidades) / 10
  console.log(`dezenas: ${dezenas}`)

  //unidades
  unidades = resto_unidades
  console.log(`unidades: ${unidades}`)
}
//nova_fase()

//const bt_jogar = (runtime.objects.bt_jogar as ISpriteInstance).getFirstInstance()