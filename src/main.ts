import { IRuntime } from "./construct/runtime/IRuntime";
import { ISpriteInstance } from "./construct/plugins/ISpriteInstance";
import { IObjectClass } from "./construct/objects/IObjectClass";
import { ITextInstance } from "./construct/plugins/ITextInstance";

const MAX_VALUE = 349
const CONTAINER_START_Y = 380
const INCREMENT_POINTS = 10
let pontuacao = 0
let blocos_container:ISpriteInstance
let label_pontuacao:ITextInstance
let centenas:number
let dezenas:number
let unidades:number
let num_sorteado:number
let label_centenas:ITextInstance
let label_dezenas:ITextInstance
let label_unidades:ITextInstance
let arr_sounds:string[]


function init(runtime:IRuntime){
  label_centenas = (<IObjectClass>runtime.objects.txt_numero).getAllInstances().find(el => el.instVars.type === 'centenas') as ITextInstance
  label_dezenas = (<IObjectClass>runtime.objects.txt_numero).getAllInstances().find(el => el.instVars.type === 'dezenas') as ITextInstance
  label_unidades = (<IObjectClass>runtime.objects.txt_numero).getAllInstances().find(el => el.instVars.type === 'unidades') as ITextInstance
  label_pontuacao = (<IObjectClass>runtime.objects.label_pontuacao).getFirstInstance() as ITextInstance

  label_pontuacao.text = `0 PONTOS`
}

function nova_fase(runtime:IRuntime){
  reset_fase(runtime)
  sorteia_numero()
  cria_blocos(runtime)
}

function reset_fase(runtime:IRuntime){
  blocos_container && blocos_container.destroy()
  let label_numeros = (<IObjectClass>runtime.objects.txt_numero).getAllInstances() as ITextInstance[]
  label_numeros.forEach(el => el.text = '0')
}

function cria_blocos(runtime:IRuntime){
  let total_width = 0;
  let gap = 16
  let extra_gap = 20
  blocos_container = (runtime.objects.blocos_container as IObjectClass).createInstance('blocos_container', total_width,CONTAINER_START_Y, false) as ISpriteInstance

  blocos_container.opacity = 0

  //create centenas bloco
  for(let i=0; i<centenas; i++){
    let centenas_bloco = (runtime.objects.blocos_centenas as IObjectClass).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance

    centenas_bloco.opacity = 0

    total_width += centenas_bloco.imageWidth + gap
    blocos_container.addChild(centenas_bloco, {transformX:true, transformY:true, destroyWithParent:true})
  }

  //create dezenas bloco
  if(dezenas){
    total_width+= extra_gap
    for(let i=0; i<dezenas; i++){
      let dezenas_bloco = (runtime.objects.blocos_dezenas as ISpriteInstance).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance
  
      dezenas_bloco.opacity = 0;
  
      total_width += dezenas_bloco.imageWidth + gap
      blocos_container.addChild(dezenas_bloco, {transformX:true, transformY:true, destroyWithParent:true})
  
    }
  }

  //create unidades bloco
  if(unidades){
    total_width+= extra_gap
    let unidades_bloco = (runtime.objects.blocos_unidades as ISpriteInstance).createInstance('blocos_container', total_width, CONTAINER_START_Y, false) as ISpriteInstance

    unidades_bloco.opacity = 0;

    setTimeout(()=>{
      unidades_bloco.animationFrame = unidades - 1
    }, 2)

    blocos_container.addChild(unidades_bloco, {transformX:true, transformY:true, destroyWithParent:true})
    total_width += unidades_bloco.imageWidth
  }  
 
  //centraliza container
  blocos_container.x = (1800 - total_width) * 0.5

  runtime.callFunction('show_blocos')


}

function sorteia_numero(){
  let rnd = Math.floor(Math.random() * MAX_VALUE + 1)
  //avoid same number to repeat next fase
  while(rnd === num_sorteado){
    rnd = Math.floor(Math.random() * MAX_VALUE + 1)
  }
  num_sorteado = rnd
  
  //centenas
  let resto_dezenas = num_sorteado % 100
  centenas = (num_sorteado - resto_dezenas) / 100

  //dezenas
  let resto_unidades = resto_dezenas % 10
  dezenas = (resto_dezenas - resto_unidades) / 10

  //unidades
  unidades = resto_unidades
}

function increment_decrement(action:string, type:string, runtime:IRuntime):void{
  const label = (<IObjectClass>runtime.objects.txt_numero).getAllInstances().find(el => el.instVars.type === type) as ITextInstance
  
  let cur_value = parseInt(label.text)
  if(action === 'increment'){
    cur_value = Math.min(++cur_value, 9)
  }else{
    cur_value = Math.max(--cur_value, 0)
  }

  label.text = String(cur_value)
}

function checa_resposta(runtime:IRuntime){
  const valor_centenas = parseInt(label_centenas.text)
  const valor_dezenas = parseInt(label_dezenas.text)
  const valor_unidades = parseInt(label_unidades.text)

  if(valor_centenas === centenas && valor_dezenas === dezenas && valor_unidades === unidades){
    pontuacao += INCREMENT_POINTS
    arr_sounds = []
    if(centenas) arr_sounds.push(`${centenas}_centena`)
    if(dezenas) arr_sounds.push(`${dezenas}_dezena`)
    if(unidades) arr_sounds.push(`${unidades}_unidade`)

    runtime.callFunction('show_acerto')
    update_placar()

  }
}

function play_audio_numero(runtime:IRuntime){
  
  const audio = arr_sounds.shift()
  if(audio) runtime.callFunction('play_audio_numero', audio)
}

function update_placar(){
  label_pontuacao.text = `${pontuacao} PONTOS`
}
