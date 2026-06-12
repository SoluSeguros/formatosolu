pdfjsLib.GlobalWorkerOptions.workerSrc =
 "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js";

/* ============================================================
   1) DEFINICIÓN DEL FORMULARIO  (campos visibles al usuario)
   ============================================================ */
const SECTIONS = [
 {t:"Datos del siniestro", fields:[
   {id:"agencia",l:"Agencia",c:"c4"},
   {id:"noSiniestro",l:"No. de siniestro",c:"c4"},
   {id:"noPoliza",l:"No. de póliza",c:"c4"},
   {id:"orden",l:"Orden",c:"c4"},
   {id:"ciudadHeader",l:"Ciudad",c:"c8"},
   {sub:"Fecha del siniestro"},
   {id:"sinDD",l:"Día",c:"c4"},{id:"sinMM",l:"Mes",c:"c4"},{id:"sinAA",l:"Año",c:"c4"},
   {sub:"Fecha del aviso (hoy)"},
   {id:"aviDD",l:"Día",c:"c4"},{id:"aviMM",l:"Mes",c:"c4"},{id:"aviAA",l:"Año",c:"c4"},
 ]},
 {t:"Tomador", fields:[
   {id:"nombreTomador",l:"Nombre del tomador",c:"c8"},
   {id:"ccTomador",l:"C.C. o Nit.",c:"c4"},
 ]},
 {t:"Asegurado", fields:[
   {id:"nombreAsegurado",l:"Nombre del asegurado",c:"c8"},
   {id:"ccAsegurado",l:"C.C. o Nit.",c:"c4"},
   {id:"direccionAsegurado",l:"Dirección del asegurado",c:"c6"},
   {id:"ciudadAsegurado",l:"Ciudad",c:"c3"},
   {id:"telefonoAsegurado",l:"Teléfono",c:"c3"},
   {id:"celular",l:"Celular",c:"c6"},
   {id:"correo",l:"Correo electrónico",c:"c6"},
 ]},
 {t:"Vehículo asegurado", fields:[
   {id:"marca",l:"Marca",c:"c4"},
   {id:"tipo",l:"Tipo",c:"c4"},
   {id:"placa",l:"Placa",c:"c4"},
   {id:"modelo",l:"Modelo",c:"c4"},
   {id:"motor",l:"No. motor",c:"c4"},
   {id:"color",l:"Color",c:"c4"},
   {id:"nombreConductor",l:"Nombre del conductor",c:"c8"},
   {id:"ccConductor",l:"C.C. No.",c:"c4"},
   {id:"celularConductor",l:"Número celular",c:"c6"},
 ]},
 {t:"Relato de los hechos", fields:[
   {id:"declaranteNombre",l:"Yo (nombre del declarante)",c:"c8"},
   {id:"calidad",l:"En calidad de",c:"c4",type:"select",options:["CONDUCTOR","PROPIETARIO"]},
   {id:"placaJuramento",l:"Vehículo de placas",c:"c4"},
   {id:"dia",l:"Día",c:"c2"},
   {id:"mes",l:"Mes",c:"c3"},
   {id:"anio",l:"Año",c:"c3"},
   {id:"hora",l:"Hora aprox.",c:"c4"},
   {id:"municipio",l:"Municipio (ciudad)",c:"c6"},
   {id:"direccionHechos",l:"Dirección",c:"c6"},
   {id:"hechos",l:"Relato de los hechos (claro y detallado)",c:"c12",type:"textarea"},
 ]},
 {t:"Señale según el caso", fields:[
   {id:"lesionados",l:"¿Personas lesionadas?",c:"c4",type:"radio",options:["SI","NO"]},
   {id:"lesionadasCuantas",l:"¿Cuántas?",c:"c2"},
   {id:"fallecidos",l:"¿Personas fallecidas?",c:"c4",type:"radio",options:["SI","NO"]},
   {id:"fallecidasCuantas",l:"¿Cuántas?",c:"c2"},
   {id:"causa",l:"En mi concepto el accidente se presentó por",c:"c12",type:"radio",
     options:["A. Imprudencia de un tercero","B. Fallas mecánicas","C. Mal estado de la vía","D. Otra"]},
   {id:"otraEspecificar",l:"Otra ¿cuál? (especificar)",c:"c12"},
   {id:"gradoResp",l:"Grado de responsabilidad (escala 1 a 10)",c:"c6"},
   {id:"compartida",l:"¿Responsabilidad compartida con otros?",c:"c4",type:"radio",options:["SI","NO"]},
   {id:"compartidaPorque",l:"¿Por qué?",c:"c12"},
   {id:"informe",l:"¿Se elaboró informe por las autoridades?",c:"c4",type:"radio",options:["SI","NO"]},
   {id:"informeMotivos",l:"En caso negativo, señale los motivos",c:"c8"},
   {id:"danosVehiculo",l:"Daños del vehículo asegurado (detallado)",c:"c12",type:"textarea"},
 ]},
 {t:"Tercero – Vehículo 1", fields:[
   {id:"t1marca",l:"Marca",c:"c4"},{id:"t1modelo",l:"Modelo",c:"c4"},{id:"t1color",l:"Color",c:"c4"},
   {id:"t1placas",l:"Placas",c:"c4"},{id:"t1servicio",l:"Servicio",c:"c4"},{id:"t1aseguradoEn",l:"Asegurado en",c:"c4"},
   {id:"t1conductor",l:"Conductor",c:"c6"},{id:"t1licencia",l:"Lic. de conducción",c:"c3"},
   {id:"t1ccConductor",l:"C.C. No.",c:"c3"},{id:"t1propietario",l:"Propietario",c:"c6"},
   {id:"t1direccion",l:"Dirección",c:"c3"},{id:"t1ciudad",l:"Ciudad",c:"c3"},
   {id:"t1telefono",l:"Teléfono",c:"c3"},{id:"t1actualmente",l:"Actualmente se encuentra en",c:"c3"},
 ]},
 {t:"Tercero – Vehículo 2", fields:[
   {id:"t2marca",l:"Marca",c:"c4"},{id:"t2modelo",l:"Modelo",c:"c4"},{id:"t2color",l:"Color",c:"c4"},
   {id:"t2placas",l:"Placas",c:"c4"},{id:"t2servicio",l:"Servicio",c:"c4"},{id:"t2aseguradoEn",l:"Asegurado en",c:"c4"},
   {id:"t2conductor",l:"Conductor",c:"c6"},{id:"t2licencia",l:"Lic. de conducción",c:"c3"},
   {id:"t2ccConductor",l:"C.C. No.",c:"c3"},{id:"t2propietario",l:"Propietario",c:"c6"},
   {id:"t2direccion",l:"Dirección",c:"c3"},{id:"t2ciudad",l:"Ciudad",c:"c3"},
   {id:"t2telefono",l:"Teléfono",c:"c3"},{id:"t2actualmente",l:"Actualmente se encuentra en",c:"c3"},
   {id:"danosTercero",l:"Daños del vehículo tercero (detallado)",c:"c12",type:"textarea"},
 ]},
 {t:"Lesionados", fields:[
   {sub:"Lesionado 1"},
   {id:"l1nombre",l:"Nombre",c:"c6"},{id:"l1cc",l:"C.C. No.",c:"c2"},
   {id:"l1direccion",l:"Dirección",c:"c2"},{id:"l1telefono",l:"Teléfono",c:"c2"},
   {id:"l1sev",l:"Lesiones sufridas",c:"c8",type:"radio",options:["Leve","Moderada","Grave"]},
   {id:"l1remitido",l:"Remitido a",c:"c4"},
   {sub:"Lesionado 2"},
   {id:"l2nombre",l:"Nombre",c:"c6"},{id:"l2cc",l:"C.C. No.",c:"c2"},
   {id:"l2direccion",l:"Dirección",c:"c2"},{id:"l2telefono",l:"Teléfono",c:"c2"},
   {id:"l2sev",l:"Lesiones sufridas",c:"c8",type:"radio",options:["Leve","Moderada","Grave"]},
   {id:"l2remitido",l:"Remitido a",c:"c4"},
   {sub:"Lesionado 3"},
   {id:"l3nombre",l:"Nombre",c:"c6"},{id:"l3cc",l:"C.C. No.",c:"c2"},
   {id:"l3direccion",l:"Dirección",c:"c2"},{id:"l3telefono",l:"Teléfono",c:"c2"},
   {id:"l3sev",l:"Lesiones sufridas",c:"c8",type:"radio",options:["Leve","Moderada","Grave"]},
   {id:"l3remitido",l:"Remitido a",c:"c4"},
 ]},
 {t:"Fallecidos", fields:[
   {sub:"Fallecido 1"},
   {id:"f1nombre",l:"Nombre",c:"c6"},{id:"f1cc",l:"C.C. No.",c:"c2"},
   {id:"f1direccion",l:"Dirección",c:"c2"},{id:"f1telefono",l:"Teléfono",c:"c2"},
   {id:"f1ocupacion",l:"Ocupación",c:"c6"},{id:"f1ingresos",l:"Ingresos",c:"c3"},{id:"f1edad",l:"Edad",c:"c3"},
   {sub:"Fallecido 2"},
   {id:"f2nombre",l:"Nombre",c:"c6"},{id:"f2cc",l:"C.C. No.",c:"c2"},
   {id:"f2direccion",l:"Dirección",c:"c2"},{id:"f2telefono",l:"Teléfono",c:"c2"},
   {id:"f2ocupacion",l:"Ocupación",c:"c6"},{id:"f2ingresos",l:"Ingresos",c:"c3"},{id:"f2edad",l:"Edad",c:"c3"},
 ]},
 {t:"Cierre", fields:[
   {id:"declaranteCC",l:"C.C. No. del declarante",c:"c6"},
   {id:"nombreTecnico",l:"Nombre del técnico",c:"c6"},
   {id:"tecnicoCC",l:"C.C. No. del técnico",c:"c6"},
   {sub:"Fecha de elaboración"},
   {id:"elabDD",l:"Día",c:"c4"},{id:"elabMM",l:"Mes",c:"c4"},{id:"elabAA",l:"Año",c:"c4"},
 ]},
];

/* ============================================================
   2) COORDENADAS sobre la plantilla.pdf  (612 x 792 pts)
      [pagina, x, top, size, maxWidth(opcional)]
      'top' = distancia desde el borde superior (como pdfplumber)
   ============================================================ */
const H = 792;
const C = {
 // ---- PÁGINA 1 (índice 0) ----
 agencia:[0,46,110,8,48], noSiniestro:[0,100,110,8,63], noPoliza:[0,170,110,8,58], orden:[0,236,110,8,40],
 sinDD:[0,281,110,8,24], sinMM:[0,308,110,8,24], sinAA:[0,340,110,8,24],
 aviDD:[0,372,110,8,22], aviMM:[0,398,110,8,30], aviAA:[0,433,110,8,30],
 ciudadHeader:[0,500,110,8,88],
 ccTomador:[0,505,121,8,90], nombreTomador:[0,140,125,9,300],
 ccAsegurado:[0,505,138,8,90], nombreAsegurado:[0,150,142,9,300],
 direccionAsegurado:[0,140,159,8,200], ciudadAsegurado:[0,398,156,7,55], telefonoAsegurado:[0,505,156,7,90],
 celular:[0,500,173,8,95], correo:[0,140,178,8,300],
 marca:[0,45,209,8,100], tipo:[0,138,209,8,82], placa:[0,212,209,8,86], modelo:[0,292,209,8,96], motor:[0,388,209,8,128], color:[0,512,209,8,88],
 nombreConductor:[0,150,221,9,205], ccConductor:[0,405,221,9,185], celularConductor:[0,118,240,9,240],
 declaranteNombre:[0,338,296,8,135], calidad:[0,40,307,8,120], placaJuramento:[0,398,307,8,95],
 dia:[0,80,339,9,22], mes:[0,160,339,9,58], anio:[0,270,339,9,42], hora:[0,466,339,9,35],
 municipio:[0,140,356,8,80], direccionHechos:[0,295,356,8,130],
 hechos:[0,33,386,9,528,"multi",12.5],
 lesionadasCuantas:[0,248,479,9,35], fallecidasCuantas:[0,498,479,9,50],
 gradoResp:[0,180,558,9,45],
 compartidaPorque:[0,140,597,8,430], informeMotivos:[0,70,631,8,480],
 otraEspecificar:[0,150,528,8,290],
 danosVehiculo:[0,35,680,8,360,"multi",11],
 // marcas X (radios) página 1
 "lesionados.SI":[0,146,479,11,0,"X"], "lesionados.NO":[0,178,479,11,0,"X"],
 "fallecidos.SI":[0,396,479,11,0,"X"], "fallecidos.NO":[0,428,479,11,0,"X"],
 "causa.A. Imprudencia de un tercero":[0,190,516,11,0,"X"],
 "causa.B. Fallas mecánicas":[0,318,516,11,0,"X"],
 "causa.C. Mal estado de la vía":[0,462,516,11,0,"X"],
 "causa.D. Otra":[0,132,528,11,0,"X"],
 "compartida.SI":[0,546,585,11,0,"X"], "compartida.NO":[0,67,597,11,0,"X"],
 "informe.SI":[0,414,620,11,0,"X"], "informe.NO":[0,446,620,11,0,"X"],

 // ---- PÁGINA 2 (índice 1) ----
 // Tercero vehículo 1
 t1marca:[1,50,162,8,76], t1modelo:[1,128,162,8,78], t1color:[1,208,162,8,76],
 t1placas:[1,286,162,8,84], t1servicio:[1,372,162,8,98], t1aseguradoEn:[1,475,162,7,55],
 t1conductor:[1,95,176,8,160], t1licencia:[1,338,176,7,55], t1ccConductor:[1,382,176,7,60], t1propietario:[1,500,176,7,100],
 t1direccion:[1,35,208,8,140], t1ciudad:[1,185,208,8,75], t1telefono:[1,275,208,8,95], t1actualmente:[1,395,208,7,90],
 // Tercero vehículo 2
 t2marca:[1,50,237,8,76], t2modelo:[1,128,237,8,78], t2color:[1,208,237,8,76],
 t2placas:[1,286,237,8,84], t2servicio:[1,372,237,8,98], t2aseguradoEn:[1,475,237,7,55],
 t2conductor:[1,95,250,8,160], t2licencia:[1,338,250,7,55], t2ccConductor:[1,382,250,7,60], t2propietario:[1,500,250,7,100],
 t2direccion:[1,35,283,8,140], t2ciudad:[1,185,283,8,75], t2telefono:[1,275,283,8,95], t2actualmente:[1,395,283,7,90],
 danosTercero:[1,35,326,8,360,"multi",11],
 // Lesionados
 l1nombre:[1,35,426,8,215], l1cc:[1,256,426,8,90], l1direccion:[1,354,426,8,95], l1telefono:[1,457,426,8,140],
 l1remitido:[1,400,439,8,150],
 "l1sev.Leve":[1,250,439,11,0,"X"], "l1sev.Moderada":[1,282,439,11,0,"X"], "l1sev.Grave":[1,318,439,11,0,"X"],
 l2nombre:[1,35,474,8,215], l2cc:[1,256,474,8,90], l2direccion:[1,354,474,8,95], l2telefono:[1,457,474,8,140],
 l2remitido:[1,400,487,8,150],
 "l2sev.Leve":[1,250,487,11,0,"X"], "l2sev.Moderada":[1,282,487,11,0,"X"], "l2sev.Grave":[1,314,487,11,0,"X"],
 l3nombre:[1,35,523,8,215], l3cc:[1,256,523,8,90], l3direccion:[1,354,523,8,95], l3telefono:[1,457,523,8,140],
 l3remitido:[1,400,536,8,150],
 "l3sev.Leve":[1,250,536,11,0,"X"], "l3sev.Moderada":[1,282,536,11,0,"X"], "l3sev.Grave":[1,314,536,11,0,"X"],
 // Fallecidos
 f1nombre:[1,35,603,8,225], f1cc:[1,290,603,8,55], f1direccion:[1,346,603,8,105], f1telefono:[1,454,603,8,140],
 f1ocupacion:[1,35,623,8,300], f1ingresos:[1,346,623,8,100], f1edad:[1,454,623,8,140],
 f2nombre:[1,35,643,8,225], f2cc:[1,290,643,8,55], f2direccion:[1,346,643,8,105], f2telefono:[1,454,643,8,140],
 f2ocupacion:[1,35,664,8,300], f2ingresos:[1,346,664,8,100], f2edad:[1,454,664,8,140],
 // Cierre
 declaranteCC:[1,60,718,8,200], nombreTecnico:[1,365,681,8,240],
 tecnicoCC:[1,315,704,8,200], elabDD:[1,448,747,9,30], elabMM:[1,492,747,9,40], elabAA:[1,540,747,9,40],
};

/* ============================================================
   3) CONSTRUIR EL FORMULARIO EN HTML
   ============================================================ */
const form = document.getElementById("form");
SECTIONS.forEach((sec,i)=>{
  const card=document.createElement("section"); card.className="card";
  card.innerHTML=`<h2><span class="n">${i+1}</span>${sec.t}</h2>`;
  const grid=document.createElement("div"); grid.className="grid";
  sec.fields.forEach(f=>{
    if(f.sub){ const d=document.createElement("div"); d.className="subt"; d.textContent=f.sub; grid.appendChild(d); return; }
    const div=document.createElement("div"); div.className="field "+(f.c||"c6");
    let inner=`<label>${f.l}</label>`;
    if(f.type==="textarea"){
      inner+=`<textarea id="${f.id}" rows="3"></textarea>`;
    }else if(f.type==="select"){
      inner+=`<select id="${f.id}"><option value=""></option>`+
        f.options.map(o=>`<option value="${o}">${o}</option>`).join("")+`</select>`;
    }else if(f.type==="radio"){
      inner+=`<div class="radio-row" data-id="${f.id}">`+
        f.options.map(o=>`<label><input type="radio" name="${f.id}" value="${o}">${o}</label>`).join("")+`</div>`;
    }else{
      inner+=`<input type="text" id="${f.id}" autocomplete="off">`;
    }
    div.innerHTML=inner; grid.appendChild(div);
  });
  card.appendChild(grid); form.appendChild(card);
});

// estilo activo de los radios
form.addEventListener("change",e=>{
  if(e.target.type==="radio"){
    document.querySelectorAll(`.radio-row[data-id="${e.target.name}"] label`)
      .forEach(l=>l.classList.toggle("on", l.querySelector("input").checked));
  }
});

/* ---- valores por defecto: fecha de hoy ---- */
function setDefaultDates(){
  const d=new Date();
  const dd=String(d.getDate()).padStart(2,"0");
  const mm=String(d.getMonth()+1).padStart(2,"0");
  const aa=String(d.getFullYear()).slice(-2);
  ["aviDD","elabDD"].forEach(id=>{const e=document.getElementById(id); if(e)e.value=dd;});
  ["aviMM","elabMM"].forEach(id=>{const e=document.getElementById(id); if(e)e.value=mm;});
  ["aviAA","elabAA"].forEach(id=>{const e=document.getElementById(id); if(e)e.value=aa;});
}
setDefaultDates();

/* ---- conveniencias: copiar placa y conductor al relato ---- */
function copyIfEmpty(srcId,dstId){
  const s=document.getElementById(srcId), d=document.getElementById(dstId);
  s.addEventListener("blur",()=>{ if(!d.value) d.value=s.value; });
}
copyIfEmpty("placa","placaJuramento");
copyIfEmpty("nombreConductor","declaranteNombre");

/* ============================================================
   4) RECOGER VALORES
   ============================================================ */
function getValues(){
  const v={};
  SECTIONS.forEach(sec=>sec.fields.forEach(f=>{
    if(f.sub) return;
    if(f.type==="radio"){
      const sel=form.querySelector(`input[name="${f.id}"]:checked`);
      v[f.id]=sel?sel.value:"";
    }else{
      v[f.id]=document.getElementById(f.id).value.trim();
    }
  }));
  return v;
}

/* ============================================================
   5) GENERAR EL PDF RELLENADO
   ============================================================ */
let templateBytes=null;
async function loadTemplate(){
  if(templateBytes) return templateBytes;
  const r=await fetch("plantilla.pdf");
  if(!r.ok) throw new Error("No se pudo cargar plantilla.pdf");
  templateBytes=await r.arrayBuffer();
  return templateBytes;
}

// Evita que pdf-lib (fuente WinAnsi) se caiga con caracteres no soportados
// (comillas tipográficas, guiones largos, emojis pegados desde Word, etc.)
function safe(s){
  return String(s)
    .replace(/[‘’‚‛]/g,"'")
    .replace(/[“”„‟]/g,'"')
    .replace(/[–—―]/g,"-")
    .replace(/…/g,"...")
    .replace(/ /g," ")
    .replace(/[^\x09\x0A\x0D\x20-\xFF]/g,"");  // descarta lo que WinAnsi no puede codificar
}

// Ajusta un texto de una línea para que NO se desborde de su casilla:
// reduce el tamaño de fuente hasta que quepa; si aún no cabe, lo recorta.
function fitSingle(f,txt,size,maxW){
  if(!maxW) return {txt,size};
  let s=size;
  while(s>4 && f.widthOfTextAtSize(txt,s)>maxW) s-=0.5;
  if(f.widthOfTextAtSize(txt,s)<=maxW) return {txt,size:s};
  let t=txt;
  while(t.length>1 && f.widthOfTextAtSize(t,s)>maxW) t=t.slice(0,-1);
  return {txt:t,size:s};
}

function wrapLines(text,font,size,maxWidth){
  const out=[];
  text.split(/\r?\n/).forEach(par=>{
    let line="";
    par.split(/\s+/).forEach(word=>{
      const test=line?line+" "+word:word;
      if(font.widthOfTextAtSize(test,size)>maxWidth && line){ out.push(line); line=word; }
      else line=test;
    });
    out.push(line);
  });
  return out;
}

async function buildPdf(){
  const {PDFDocument,StandardFonts,rgb}=PDFLib;
  const bytes=await loadTemplate();
  const pdf=await PDFDocument.load(bytes);
  const pages=pdf.getPages();
  const font=await pdf.embedFont(StandardFonts.Helvetica);
  const bold=await pdf.embedFont(StandardFonts.HelveticaBold);
  const ink=rgb(0.04,0.10,0.45);
  const v=getValues();

  function draw(coord,text,isX){
    if(!coord||text===""||text==null) return;
    const [pg,x,top,size,maxW,mode,lh]=coord;
    const page=pages[pg];
    const txt=safe(text);
    if(mode==="multi"){
      const lines=wrapLines(txt,font,size,maxW||500);
      lines.forEach((ln,i)=>{
        page.drawText(ln,{x,y:H-top-size+1-(i*(lh||size+2)),size,font,color:ink});
      });
    }else{
      const f=isX?bold:font;
      const fit=fitSingle(f,txt,size,maxW);
      page.drawText(fit.txt,{x,y:H-top-fit.size+1,size:fit.size,font:f,color:ink});
    }
  }

  // campos de texto / textarea / select
  for(const key in v){
    if(C[key]) draw(C[key], v[key], false);
  }
  // marcas X (radios)
  ["lesionados","fallecidos","causa","compartida","informe","l1sev","l2sev","l3sev"].forEach(g=>{
    if(v[g]){ const k=g+"."+v[g]; if(C[k]) draw(C[k],"X",true); }
  });

  // croquis: trazos del daño sobre cada carro
  const red=rgb(0.84,0.04,0.04);
  CARS.forEach(car=>{
    const strokes=marks[car.key]; if(!strokes||!strokes.length) return;
    const page=pages[car.page];
    const [bx0,by0,bx1,by1]=car.box, bw=bx1-bx0, bh=by1-by0;
    const PX=(p)=>({x:bx0+p.x*bw, y:H-(by0+p.y*bh)});  // normalizado -> punto PDF
    strokes.forEach(stroke=>{
      if(stroke.length===1){
        const a=PX(stroke[0]); page.drawCircle({x:a.x,y:a.y,size:1.4,color:red});
        return;
      }
      for(let i=1;i<stroke.length;i++){
        page.drawLine({start:PX(stroke[i-1]),end:PX(stroke[i]),thickness:1.4,color:red});
      }
    });
  });

  return await pdf.save();
}

/* ============================================================
   6) DESCARGAR
   ============================================================ */
document.getElementById("btnSave").onclick=async()=>{
  try{
    const out=await buildPdf();
    const a=document.createElement("a");
    a.href=URL.createObjectURL(new Blob([out],{type:"application/pdf"}));
    const nom=(getValues().nombreAsegurado||"declaracion").replace(/[^\w\sñáéíóú]/gi,"").trim().replace(/\s+/g,"_");
    a.download="Declaracion_"+nom+".pdf";
    a.click();
  }catch(e){ alert("Error al generar el PDF: "+e.message); }
};

/* ============================================================
   7) VISTA PREVIA con pdf.js
   ============================================================ */
let prevDoc=null, prevPage=1, prevTotal=2;
const viewer=document.getElementById("viewer");

async function renderPreview(){
  try{
    const out=await buildPdf();
    prevDoc=await pdfjsLib.getDocument({data:out.slice(0)}).promise;
    prevTotal=prevDoc.numPages;
    if(prevPage>prevTotal) prevPage=1;
    await paintPage();
  }catch(e){ viewer.innerHTML=`<p class="hint">Error: ${e.message}</p>`; }
}
async function paintPage(){
  const page=await prevDoc.getPage(prevPage);
  const vp=page.getViewport({scale:1.3});
  const canvas=document.createElement("canvas");
  canvas.width=vp.width; canvas.height=vp.height;
  await page.render({canvasContext:canvas.getContext("2d"),viewport:vp}).promise;
  viewer.innerHTML=""; viewer.appendChild(canvas);
  document.getElementById("pgInfo").textContent=`Pág. ${prevPage} / ${prevTotal}`;
}
document.getElementById("btnPreview").onclick=renderPreview;
document.getElementById("btnRefresh").onclick=renderPreview;
document.getElementById("prevPg").onclick=()=>{ if(prevDoc&&prevPage>1){prevPage--;paintPage();} };
document.getElementById("nextPg").onclick=()=>{ if(prevDoc&&prevPage<prevTotal){prevPage++;paintPage();} };


/* ============================================================
   8) CROQUIS · señalar el daño sobre el carro
   ============================================================ */
const CARS=[
 {key:"asegurado", page:0, box:[524,662,572,734], img:"carro1.png", label:"Vehículo asegurado (pág. 1)"},
 {key:"tercero",   page:1, box:[512,309,557,378], img:"carro2.png", label:"Vehículo tercero (pág. 2)"},
];
const marks={asegurado:[], tercero:[]};   // por carro: lista de trazos; trazo = lista de {x,y} normalizados 0-1
const croquisRepaint=[];                    // funciones para repintar cada carro (usado al restaurar borrador)
const redrawCroquis=()=>croquisRepaint.forEach(fn=>fn());

(function buildCroquis(){
  const card=document.createElement("section"); card.className="card";
  card.innerHTML=`<h2><span class="n">✎</span>Croquis · Señale el daño sobre el carro</h2>
    <p class="hint" style="padding:10px 16px 0">Dibuje sobre el carro la zona afectada. Se marcará en rojo en el PDF.</p>`;
  const cw=document.createElement("div"); cw.className="croquis-wrap";

  CARS.forEach(car=>{
    const ratio=(car.box[2]-car.box[0])/(car.box[3]-car.box[1]);
    const W=170, Hp=Math.round(W/ratio);
    const wrap=document.createElement("div"); wrap.className="croquis";
    wrap.innerHTML=`
      <h4>${car.label}</h4>
      <div class="pad" style="width:${W}px;height:${Hp}px">
        <img src="${car.img}" alt="carro">
        <canvas width="${W}" height="${Hp}"></canvas>
      </div>
      <div class="tools">
        <button type="button" class="ghost" data-act="undo">↶ Deshacer</button>
        <button type="button" class="ghost" data-act="clear">🗑 Borrar</button>
      </div>`;
    cw.appendChild(wrap);

    const canvas=wrap.querySelector("canvas"), ctx=canvas.getContext("2d");
    let drawing=false, cur=null;

    const rpos=(e)=>{
      const r=canvas.getBoundingClientRect();
      const p=e.touches?e.touches[0]:e;
      return {x:Math.min(1,Math.max(0,(p.clientX-r.left)/r.width)),
              y:Math.min(1,Math.max(0,(p.clientY-r.top)/r.height))};
    };
    const repaint=()=>{
      ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.strokeStyle="#d40000"; ctx.fillStyle="#d40000";
      ctx.lineWidth=2.5; ctx.lineCap="round"; ctx.lineJoin="round";
      marks[car.key].forEach(stroke=>{
        if(stroke.length===1){
          ctx.beginPath();
          ctx.arc(stroke[0].x*canvas.width, stroke[0].y*canvas.height, 1.8, 0, 7); ctx.fill();
          return;
        }
        ctx.beginPath();
        stroke.forEach((pt,i)=>{
          const x=pt.x*canvas.width, y=pt.y*canvas.height;
          i?ctx.lineTo(x,y):ctx.moveTo(x,y);
        });
        ctx.stroke();
      });
    };
    const start=(e)=>{ e.preventDefault(); drawing=true; cur=[rpos(e)]; marks[car.key].push(cur); repaint(); };
    const move =(e)=>{ if(!drawing)return; e.preventDefault(); cur.push(rpos(e)); repaint(); };
    const end  =()=>{ if(drawing){ drawing=false; scheduleLive(); } };

    canvas.addEventListener("mousedown",start);
    canvas.addEventListener("mousemove",move);
    window.addEventListener("mouseup",end);
    canvas.addEventListener("touchstart",start,{passive:false});
    canvas.addEventListener("touchmove",move,{passive:false});
    canvas.addEventListener("touchend",end);

    wrap.querySelector('[data-act="clear"]').onclick=()=>{ marks[car.key]=[]; repaint(); scheduleLive(); };
    wrap.querySelector('[data-act="undo"]').onclick =()=>{ marks[car.key].pop(); repaint(); scheduleLive(); };
    croquisRepaint.push(repaint);   // permite redibujar al restaurar el borrador
  });

  card.appendChild(cw);
  // ubicar el croquis después de "Tercero – Vehículo 2" (9ª tarjeta)
  const ref=form.children[8];
  if(ref) form.insertBefore(card, ref); else form.appendChild(card);
})();

/* ============================================================
   9) BORRADORES MÚLTIPLES EN MEMORIA LOCAL (por siniestro)
   ============================================================ */
const STORE_KEY="siniestros_borradores_v1";   // varios borradores
const OLD_KEY="siniestros_borrador_v1";        // borrador único anterior (para migrar)
let store={drafts:{}, current:null};
let currentId=null;

const genId=()=>"b"+Date.now()+"_"+Math.floor(Math.random()*10000);
const persistStore=()=>{ try{ localStorage.setItem(STORE_KEY, JSON.stringify(store)); }catch(e){} };

function loadStore(){
  try{ const s=JSON.parse(localStorage.getItem(STORE_KEY)||"null"); if(s&&s.drafts) store=s; }catch(e){}
  // migrar el borrador único de la versión anterior, si existe
  try{
    const old=JSON.parse(localStorage.getItem(OLD_KEY)||"null");
    if(old && Object.keys(store.drafts).length===0){
      const id=genId();
      const of=old.fields||{};
      store.drafts[id]={id, noSiniestro:of.noSiniestro||"", asegurado:of.nombreAsegurado||"",
                        updatedAt:Date.now(), data:{fields:of,radios:old.radios||{},marks:old.marks||{asegurado:[],tercero:[]}}};
      store.current=id;
      persistStore();
      localStorage.removeItem(OLD_KEY);
    }
  }catch(e){}
}

function collectData(){
  const fields={}, radios={};
  SECTIONS.forEach(s=>s.fields.forEach(f=>{
    if(f.sub) return;
    if(f.type==="radio"){ const sel=form.querySelector(`input[name="${f.id}"]:checked`); if(sel)radios[f.id]=sel.value; }
    else{ const el=document.getElementById(f.id); if(el&&el.value)fields[f.id]=el.value; }
  }));
  return {fields, radios, marks:JSON.parse(JSON.stringify(marks))};
}

function isEmptyState(d){
  return Object.keys(d.fields).length===0 && Object.keys(d.radios).length===0
      && d.marks.asegurado.length===0 && d.marks.tercero.length===0;
}

function saveDraft(){
  const data=collectData();
  if(currentId===null){
    if(isEmptyState(data)) return;   // no crea borradores vacíos
    currentId=genId();
  }
  store.drafts[currentId]={
    id:currentId,
    noSiniestro:(document.getElementById("noSiniestro").value||"").trim(),
    asegurado:(document.getElementById("nombreAsegurado").value||"").trim(),
    updatedAt:Date.now(),
    data
  };
  store.current=currentId;
  persistStore();
  flashSaved();
}

function blankForm(){
  SECTIONS.forEach(s=>s.fields.forEach(f=>{
    if(f.sub||f.type==="radio") return;
    const el=document.getElementById(f.id); if(el) el.value="";
  }));
  document.querySelectorAll('.radio-row input[type="radio"]').forEach(r=>r.checked=false);
  document.querySelectorAll(".radio-row label").forEach(l=>l.classList.remove("on"));
  marks.asegurado=[]; marks.tercero=[];
  redrawCroquis();
  setDefaultDates();
}

function applyData(data){
  blankForm();
  if(!data) return;
  if(data.fields) for(const id in data.fields){ const el=document.getElementById(id); if(el)el.value=data.fields[id]; }
  if(data.radios) for(const name in data.radios){
    const val=data.radios[name];
    document.querySelectorAll(`.radio-row[data-id="${name}"] label`).forEach(l=>{
      const inp=l.querySelector("input"); inp.checked=(inp.value===val); l.classList.toggle("on",inp.checked);
    });
  }
  marks.asegurado=(data.marks&&Array.isArray(data.marks.asegurado))?data.marks.asegurado:[];
  marks.tercero  =(data.marks&&Array.isArray(data.marks.tercero))?data.marks.tercero:[];
  redrawCroquis();
}

function newDraft(){
  saveDraft();                 // conserva el actual antes de crear uno nuevo
  currentId=null;
  store.current=null;
  persistStore();
  blankForm();
  closeDraftsModal();
  renderPreview();
  flashMsg("➕ Nuevo borrador");
}

function openDraft(id){
  saveDraft();                 // guarda el actual antes de cambiar
  const d=store.drafts[id]; if(!d) return;
  currentId=id; store.current=id; persistStore();
  applyData(d.data);
  closeDraftsModal();
  renderPreview();
  flashMsg("↺ Borrador abierto");
}

function deleteDraft(id){
  if(!confirm("¿Eliminar este borrador? No se puede deshacer.")) return;
  delete store.drafts[id];
  if(store.current===id) store.current=null;
  if(currentId===id){ currentId=null; blankForm(); renderPreview(); }
  persistStore();
  renderDraftList();
}

/* ---- panel de borradores ---- */
function fmtDate(ts){
  try{ const d=new Date(ts);
    return d.toLocaleDateString("es-CO")+" "+d.toLocaleTimeString("es-CO",{hour:"2-digit",minute:"2-digit"});
  }catch(e){ return ""; }
}
function renderDraftList(){
  const cont=document.getElementById("draftList"); if(!cont) return;
  const ids=Object.keys(store.drafts).sort((a,b)=>(store.drafts[b].updatedAt||0)-(store.drafts[a].updatedAt||0));
  if(ids.length===0){ cont.innerHTML=`<p class="hint" style="padding:16px">No hay borradores guardados todavía.</p>`; return; }
  cont.innerHTML=ids.map(id=>{
    const d=store.drafts[id];
    const actual=(id===currentId)?`<span class="badge">actual</span>`:"";
    const titulo=d.noSiniestro?("Siniestro "+d.noSiniestro):"(sin No. de siniestro)";
    const aseg=d.asegurado?(" · "+d.asegurado):"";
    return `<div class="draft-row">
      <div class="draft-info">
        <div class="draft-title">${esc(titulo)} ${actual}</div>
        <div class="draft-sub">${esc(aseg)}  ·  ${fmtDate(d.updatedAt)}</div>
      </div>
      <div class="draft-actions">
        <button class="ghost" type="button" data-open="${id}">Abrir</button>
        <button class="ghost danger" type="button" data-del="${id}">🗑</button>
      </div>
    </div>`;
  }).join("");
  cont.querySelectorAll("[data-open]").forEach(b=>b.onclick=()=>openDraft(b.dataset.open));
  cont.querySelectorAll("[data-del]").forEach(b=>b.onclick=()=>deleteDraft(b.dataset.del));
}
function esc(s){ return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }

function openDraftsModal(){ saveDraft(); renderDraftList(); document.getElementById("draftsModal").classList.add("show"); }
function closeDraftsModal(){ document.getElementById("draftsModal").classList.remove("show"); }

/* ---- avisos visuales ---- */
let savedTimer=null;
function flashMsg(txt){
  const el=document.getElementById("saveStatus"); if(!el) return;
  el.textContent=txt; el.style.opacity="1";
  clearTimeout(savedTimer);
  savedTimer=setTimeout(()=>{ el.style.opacity="0"; }, 1800);
}
function flashSaved(){ flashMsg("✓ Borrador guardado"); }

// listeners del panel
document.getElementById("btnDrafts").onclick=openDraftsModal;
document.getElementById("btnNewDraft").onclick=newDraft;
document.getElementById("btnCloseDrafts").onclick=closeDraftsModal;
document.getElementById("draftsModal").addEventListener("click",e=>{ if(e.target.id==="draftsModal") closeDraftsModal(); });

/* ============================================================
   10) ACTUALIZACIÓN EN TIEMPO REAL (mientras se escribe)
   ============================================================ */
let liveTimer=null, rendering=false, pending=false;
async function liveRender(){
  if(rendering){ pending=true; return; }   // evita solapar renders
  rendering=true;
  await renderPreview();
  rendering=false;
  if(pending){ pending=false; liveRender(); }
}
function scheduleLive(){
  clearTimeout(liveTimer);
  liveTimer=setTimeout(()=>{ saveDraft(); liveRender(); }, 350);  // guarda y actualiza tras 350ms
}
form.addEventListener("input", scheduleLive);
form.addEventListener("change", scheduleLive);

// Carga los borradores guardados y restaura el último que se estaba editando
loadStore();
if(store.current && store.drafts[store.current]){
  currentId=store.current;
  applyData(store.drafts[currentId].data);
  setTimeout(()=>flashMsg("↺ Datos recuperados"), 300);
}
renderPreview();

/* ============================================================
   11) PWA · registrar service worker
   ============================================================ */
if("serviceWorker" in navigator){
  window.addEventListener("load",()=>{
    navigator.serviceWorker.register("sw.js").catch(err=>console.warn("SW no registrado:",err));
  });
}
