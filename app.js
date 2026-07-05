/* ===== Ícones SVG embutidos (sem dependência de CDN/fonte externa) ===== */
const ICONS={
'ti-book-2':'<path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12z"/><path d="M19 16h-12a2 2 0 0 0 -2 2"/><path d="M9 8h6"/>',
'ti-moon':'<path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>',
'ti-sun':'<path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>',
'ti-cpu':'<path d="M5 5m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M9 9h6v6h-6z"/><path d="M3 10h2M3 14h2M10 3v2M14 3v2M21 10h-2M21 14h-2M14 21v-2M10 21v-2"/>',
'ti-arrow-left':'<path d="M5 12l14 0"/><path d="M5 12l6 6"/><path d="M5 12l6 -6"/>',
'ti-edit':'<path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"/><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"/><path d="M16 5l3 3"/>',
'ti-pencil':'<path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4"/><path d="M13.5 6.5l4 4"/>',
'ti-plus':'<path d="M12 5l0 14"/><path d="M5 12l14 0"/>',
'ti-trash':'<path d="M4 7l16 0"/><path d="M10 11l0 6"/><path d="M14 11l0 6"/><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>',
'ti-clock':'<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 7v5l3 3"/>',
'ti-files':'<path d="M15 3v4a1 1 0 0 0 1 1h4"/><path d="M18 17h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h4l5 5v7a2 2 0 0 1 -2 2z"/><path d="M16 17v2a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h2"/>',
'ti-player-play':'<path d="M7 4v16l13 -8z"/>',
'ti-books':'<path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M5 8h4M9 16h4"/><path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219z"/>',
'ti-video-off':'<path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"/><path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"/>',
'ti-book':'<path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0"/><path d="M3 6l0 13"/><path d="M12 6l0 13"/><path d="M21 6l0 13"/>',
'ti-file-text':'<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/><path d="M9 9l1 0M9 13l6 0M9 17l6 0"/>',
'ti-download':'<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 11l5 5l5 -5"/><path d="M12 4l0 12"/>',
'ti-x':'<path d="M18 6l-12 12"/><path d="M6 6l12 12"/>',
'ti-chevron-down':'<path d="M6 9l6 6l6 -6"/>',
'ti-report':'<path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697"/><path d="M18 12v-5a2 2 0 0 0 -2 -2h-2"/><path d="M8 3m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"/><path d="M8 11h4"/><path d="M8 15h3"/><path d="M16.5 17.5m-2.5 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0 -5 0"/><path d="M18.5 19.5l2.5 2.5"/>',
'ti-alert-triangle':'<path d="M12 9v4"/><path d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/><path d="M12 16h.01"/>',
'ti-check':'<path d="M5 12l5 5l10 -10"/>',
'ti-search':'<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/><path d="M21 21l-6 -6"/>',
'ti-menu-2':'<path d="M4 6l16 0"/><path d="M4 12l16 0"/><path d="M4 18l16 0"/>',
'ti-archive':'<path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/><path d="M10 12l4 0"/>',
'ti-folder':'<path d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"/>',
'ti-help':'<path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 17l0 .01"/><path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4"/>',
'ti-info-circle':'<path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/>',
'ti-refresh':'<path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>',
'ti-upload':'<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/><path d="M7 9l5 -5l5 5"/><path d="M12 4l0 12"/>',
'ti-note':'<path d="M13 20l7 -7"/><path d="M13 20v-6a1 1 0 0 1 1 -1h6v-7a2 2 0 0 0 -2 -2h-12a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7"/>',
'ti-paperclip':'<path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5 -6.5a3 3 0 0 0 -6 -6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5 -6.5"/>',
'ti-photo':'<path d="M15 8h.01"/><path d="M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/><path d="M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5"/><path d="M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3"/>',
'ti-file':'<path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>',
'ti-eye':'<path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"/><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"/>',
'ti-device-tablet':'<path d="M5 3m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v16a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/><path d="M11 17a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"/>',
'ti-palette':'<path d="M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25"/><path d="M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/><path d="M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>',
'ti-shield':'<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"/>'
};
function paintIcons(){
  document.querySelectorAll('i.ti').forEach(el=>{
    const cls=[...el.classList].find(c=>c.startsWith('ti-'));
    if(!cls||el.getAttribute('data-ic')===cls)return;
    const inner=ICONS[cls];
    if(inner){el.innerHTML=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;el.setAttribute('data-ic',cls);}
  });
}
new MutationObserver(()=>paintIcons()).observe(document.documentElement,{childList:true,subtree:true});

const CPS=['CP1','CP2','CP3','CP4','CP5','CP6','CP7','CP8','CP9','CP10','CP11'];
let themeIdx=0,_mcb=null,vidTimer=null,curDiscId=null,curAulaId=null,curCapId=null,editVidId=null;
const THEMES=['L','D','P','P PR','P PB'];
const THEME_META={
  'L':{icon:'ti-sun',label:'Claro',bg:'#F0EDE8'},
  'D':{icon:'ti-moon',label:'Escuro',bg:'#000'},
  'P':{icon:'ti-cpu',label:'Prometeu',bg:'#050b13'},
  'P PR':{icon:'ti-cpu',label:'P. Vermelho',bg:'#120407'},
  'P PB':{icon:'ti-cpu',label:'P. Azul',bg:'#04060f'}
};
const SEED={"disciplinas":[{"id":101,"nome":"HISTÓRIA","turma":"1° ANO ENSINO MÉDIO","capitulo":"Currículo — Aulas 01 a 17","aulas":[{"id":101001,"numero":1,"titulo":"Introdução ao estudo da História","cps":[],"caps":[{"id":10100101,"num":"Cap. 01","nome":"O Que é História? Introdução aos Estudos Históricos","videos":[{"id":101001011,"nome":"O Que é História? Introdução aos Estudos Históricos","link":"","dur":"48:00","durSeg":2880,"resumo":"","materiais":[]}]},{"id":10100102,"num":"Cap. 02","nome":"Afinal, o que é História?","videos":[{"id":101001021,"nome":"Afinal, o que é História?","link":"","dur":"11:45","durSeg":705,"resumo":"","materiais":[]}]},{"id":10100103,"num":"Cap. 03","nome":"O Trabalho do Historiador / Fontes históricas","videos":[{"id":101001031,"nome":"2021 | 6° Ano | História | Aula 08 – O Trabalho do Historiador","link":"","dur":"25:03","durSeg":1503,"resumo":"","materiais":[]},{"id":101001032,"nome":"24/02/21 – 6° ano EF – História – Fontes históricas","link":"","dur":"26:24","durSeg":1584,"resumo":"","materiais":[]}]}]},{"id":101002,"numero":2,"titulo":"As Diferentes Correntes Historiográficas","cps":[],"caps":[{"id":10100201,"num":"Cap. 01","nome":"Historiografia","videos":[{"id":101002011,"nome":"Historiografia","link":"","dur":"20:18","durSeg":1218,"resumo":"","materiais":[]}]},{"id":10100202,"num":"Cap. 02","nome":"Historiografia: A Escola dos Annales","videos":[{"id":101002021,"nome":"Historiografia: A Escola dos Annales","link":"","dur":"22:50","durSeg":1370,"resumo":"","materiais":[]}]}]},{"id":101003,"numero":3,"titulo":"Revisão Geral da linha do tempo histórica","cps":[],"caps":[{"id":10100301,"num":"Cap. 01","nome":"Linha do tempo de História Geral","videos":[{"id":101003011,"nome":"HISTÓRIA – AULA 01: LINHA DO TEMPO DE HISTÓRIA GERAL","link":"","dur":"37:11","durSeg":2231,"resumo":"","materiais":[]}]},{"id":10100302,"num":"Cap. 02","nome":"Linha do tempo de História do Brasil","videos":[{"id":101003021,"nome":"HISTÓRIA – AULA 02: Linha do tempo de História do Brasil","link":"","dur":"24:58","durSeg":1498,"resumo":"","materiais":[]}]}]},{"id":101004,"numero":4,"titulo":"A escrita da História: verdades absolutas X versões históricas","cps":[],"caps":[{"id":10100401,"num":"Cap. 01","nome":"As controvérsias do revisionismo histórico","videos":[{"id":101004011,"nome":"AS CONTROVÉRSIAS DO REVISIONISMO HISTÓRICO | UNILA","link":"","dur":"22:47","durSeg":1367,"resumo":"","materiais":[]}]},{"id":10100402,"num":"Cap. 02","nome":"Negacionismo e interesses políticos","videos":[{"id":101004021,"nome":"NEGACIONISMO E INTERESSES POLÍTICOS | Cortes do História Pública","link":"","dur":"8:58","durSeg":538,"resumo":"","materiais":[]}]}]},{"id":101005,"numero":5,"titulo":"Sujeitos históricos no passado e no presente","cps":[],"caps":[{"id":10100501,"num":"Cap. 01","nome":"Sujeito histórico: mudanças e permanências no cotidiano","videos":[{"id":101005011,"nome":"22/06 – 4° ano EF – História – Sujeito histórico: mudanças e permanências no cotidiano","link":"","dur":"22:47","durSeg":1367,"resumo":"","materiais":[]}]},{"id":10100502,"num":"Cap. 02","nome":"Reflexão sobre o tempo: Benjamin, Koselleck e Hartog","videos":[{"id":101005021,"nome":"Reflexão sobre o tempo: Benjamin, Koselleck e Hartog","link":"","dur":"22:47","durSeg":1367,"resumo":"","materiais":[]}]}]},{"id":101006,"numero":6,"titulo":"A História e sua relação com as outras ciências","cps":[],"caps":[{"id":10100601,"num":"Cap. 01","nome":"A História buscando ajuda em outras ciências","videos":[{"id":101006011,"nome":"6° ANO – A História buscando ajuda na Geografia, Filosofia, Arqueologia e entre outras ciências","link":"","dur":"5:08","durSeg":308,"resumo":"","materiais":[]}]},{"id":10100602,"num":"Cap. 02","nome":"Ciências auxiliares da História","videos":[{"id":101006021,"nome":"Você conhece as Ciências auxiliares da História?","link":"","dur":"19:12","durSeg":1152,"resumo":"","materiais":[]}]}]},{"id":101007,"numero":7,"titulo":"O mundo antigo e suas sociedades","cps":[],"caps":[{"id":10100701,"num":"Cap. 01","nome":"Mundo Antigo – Brasil Escola","videos":[{"id":101007011,"nome":"Pré-Enem 2022 | Mundo Antigo – Brasil Escola","link":"","dur":"48:20","durSeg":2900,"resumo":"","materiais":[]}]}]},{"id":101008,"numero":8,"titulo":"O Egito antigo – economia e sociedade","cps":[],"caps":[{"id":10100801,"num":"Cap. 01","nome":"Os mistérios do Antigo Egito","videos":[{"id":101008011,"nome":"OS MISTÉRIOS DO ANTIGO EGITO – Nostalgia História","link":"","dur":"48:41","durSeg":2921,"resumo":"","materiais":[]}]}]},{"id":101009,"numero":9,"titulo":"O mundo antigo: economia e sociedade – Grécia e Roma","cps":[],"caps":[{"id":10100901,"num":"Cap. 01","nome":"A História completa da Grécia Antiga","videos":[{"id":101009011,"nome":"A História COMPLETA da Grécia Antiga | Documentário","link":"","dur":"2:41:28","durSeg":9688,"resumo":"","materiais":[]}]},{"id":10100902,"num":"Cap. 02","nome":"A História de Roma","videos":[{"id":101009021,"nome":"A História de Roma: Como se Tornou o Maior Império do Mundo? (Da Fundação ao Império)","link":"","dur":"46:56","durSeg":2816,"resumo":"","materiais":[]}]},{"id":10100903,"num":"Cap. 03","nome":"A queda de Roma","videos":[{"id":101009031,"nome":"A QUEDA DE ROMA: O DIA em Que o IMPÉRIO ROMANO caiu","link":"","dur":"14:15","durSeg":855,"resumo":"","materiais":[]}]}]},{"id":101010,"numero":10,"titulo":"O mundo grego: democracia e cultura","cps":[],"caps":[{"id":10101001,"num":"Cap. 01","nome":"Grécia Antiga: Democracia Ateniense","videos":[{"id":101010011,"nome":"Grécia Antiga: Democracia Ateniense","link":"","dur":"14:26","durSeg":866,"resumo":"","materiais":[]}]}]},{"id":101011,"numero":11,"titulo":"A África Antiga: civilizações africanas","cps":[],"caps":[{"id":10101101,"num":"Cap. 01","nome":"As Grandes Civilizações Africanas","videos":[{"id":101011011,"nome":"As Grandes Civilizações Africanas – História da África","link":"","dur":"40:05","durSeg":2405,"resumo":"","materiais":[]}]},{"id":10101102,"num":"Cap. 02","nome":"Povos Africanos","videos":[{"id":101011021,"nome":"Povos Africanos","link":"","dur":"19:21","durSeg":1161,"resumo":"","materiais":[]}]}]},{"id":101012,"numero":12,"titulo":"Grupos humanos de diferentes lugares e tempos históricos","cps":[],"caps":[{"id":10101201,"num":"Cap. 01","nome":"Pré-história e a dispersão da humanidade","videos":[{"id":101012011,"nome":"Pré-história e a dispersão da humanidade – História – Ensino Médio","link":"","dur":"12:21","durSeg":741,"resumo":"","materiais":[]}]}]},{"id":101013,"numero":13,"titulo":"Narrativas sobre as origens humanas","cps":[],"caps":[{"id":10101301,"num":"Cap. 01","nome":"As origens da humanidade","videos":[{"id":101013011,"nome":"História – 6° ano – As origens da humanidade","link":"","dur":"37:07","durSeg":2227,"resumo":"","materiais":[]}]},{"id":10101302,"num":"Cap. 02","nome":"A Trajetória do Homem na Terra","videos":[{"id":101013021,"nome":"A Trajetória do Homem na Terra – Documentário Completo","link":"","dur":"25:28","durSeg":1528,"resumo":"","materiais":[]}]}]},{"id":101014,"numero":14,"titulo":"Mito e história: mitos de origens nas culturas ocidentais, africanas e indígenas","cps":[],"caps":[{"id":10101401,"num":"Cap. 01","nome":"Criação do mundo segundo indígenas brasileiros","videos":[{"id":101014011,"nome":"CRIAÇÃO DO MUNDO SEGUNDO INDÍGENAS BRASILEIROS (TUPI-GUARANI)","link":"","dur":"9:09","durSeg":549,"resumo":"","materiais":[]}]},{"id":10101402,"num":"Cap. 02","nome":"Mitos de criação africanos e a história da ciência","videos":[{"id":101014021,"nome":"Ciência e mito: 4 mitos de criação africanos e a história da ciência","link":"","dur":"12:03","durSeg":723,"resumo":"","materiais":[]}]},{"id":10101403,"num":"Cap. 03","nome":"A origem do mundo segundo a mitologia grega","videos":[{"id":101014031,"nome":"A ORIGEM DO MUNDO SEGUNDO A MITOLOGIA GREGA","link":"","dur":"11:41","durSeg":701,"resumo":"","materiais":[]}]}]},{"id":101015,"numero":15,"titulo":"África: o berço da humanidade","cps":[],"caps":[{"id":10101501,"num":"Cap. 01","nome":"África: Berço da Humanidade","videos":[{"id":101015011,"nome":"ÁFRICA: Berço da Humanidade | Onde Tudo Começou | Documentário Completo em 4K","link":"","dur":"26:56","durSeg":1616,"resumo":"","materiais":[]}]}]},{"id":101016,"numero":16,"titulo":"A linguagem e o fogo","cps":[],"caps":[{"id":10101601,"num":"Cap. 01","nome":"A Guerra do Fogo analisada","videos":[{"id":101016011,"nome":"A GUERRA DO FOGO ANALISADA | Linguagem, Desejo e Subjetividade. O filme censurado!","link":"","dur":"32:00","durSeg":1920,"resumo":"","materiais":[]}]}]},{"id":101017,"numero":17,"titulo":"Cidades: ontem e hoje","cps":[],"caps":[{"id":10101701,"num":"Cap. 01","nome":"Cidades","videos":[{"id":101017011,"nome":"Cidades","link":"","dur":"8:40","durSeg":520,"resumo":"","materiais":[]}]},{"id":10101702,"num":"Cap. 02","nome":"Qual foi a primeira cidade?","videos":[{"id":101017021,"nome":"Qual foi a PRIMEIRA cidade? As provas da Aurora da Civilização!","link":"","dur":"15:17","durSeg":917,"resumo":"","materiais":[]}]},{"id":10101703,"num":"Cap. 03","nome":"Apocalipse Moderno | Nerdologia","videos":[{"id":101017031,"nome":"Apocalipse Moderno | Nerdologia","link":"","dur":"7:03","durSeg":423,"resumo":"","materiais":[]}]},{"id":10101704,"num":"Cap. 04","nome":"Cidades Conectadas (documentário)","videos":[{"id":101017041,"nome":"Documentário | CIDADES CONECTADAS | EP. 01 – 14/06/2025","link":"","dur":"12:52","durSeg":772,"resumo":"","materiais":[]},{"id":101017042,"nome":"Documentário | CIDADES CONECTADAS | EP. 02 – 15/06/2025","link":"","dur":"12:04","durSeg":724,"resumo":"","materiais":[]}]}]}]},{"id":102,"nome":"HISTÓRIA","turma":"2° ANO ENSINO MÉDIO","capitulo":"Currículo — Aulas 01 a 24","aulas":[{"id":102001,"numero":1,"titulo":"Os povos germânicos e as relações com o Império","cps":[],"caps":[{"id":10200101,"num":"Cap. 01","nome":"Queda do Império Romano, criação do Islamismo","videos":[{"id":102001011,"nome":"04 | Queda do Império Romano, Criação do Islamismo – Documentário History Channel Brasil","link":"","dur":"52:35","durSeg":3155,"resumo":"","materiais":[]}]},{"id":10200102,"num":"Cap. 02","nome":"Os Germânicos – Grandes Civilizações","videos":[{"id":102001021,"nome":"Os Germânicos: O Bravo Povo Guerreiro da Europa Central – Grandes Civilizações – Foca na História","link":"","dur":"17:27","durSeg":1047,"resumo":"","materiais":[]}]},{"id":10200103,"num":"Cap. 03","nome":"As invasões bárbaras e o fim do Império Romano do Ocidente","videos":[{"id":102001031,"nome":"AS INVASÕES BÁRBARAS E O FIM DO IMPÉRIO ROMANO DO OCIDENTE","link":"","dur":"22:52","durSeg":1372,"resumo":"","materiais":[]}]}]},{"id":102002,"numero":2,"titulo":"Germanização dos romanos e romanização dos germanos","cps":[],"caps":[{"id":10200201,"num":"Cap. 01","nome":"Cultura, arte e religião romana e o processo de romanização","videos":[{"id":102002011,"nome":"CULTURA, ARTE, RELIGIÃO ROMANA E O PROCESSO DE ROMANIZAÇÃO","link":"","dur":"28:52","durSeg":1732,"resumo":"","materiais":[]}]}]},{"id":102003,"numero":3,"titulo":"Religiosidade germânica e o cristianismo","cps":[],"caps":[{"id":10200301,"num":"Cap. 01","nome":"O Sacro Império Romano-Germânico","videos":[{"id":102003011,"nome":"O SACRO IMPÉRIO ROMANO-GERMÂNICO","link":"","dur":"21:55","durSeg":1315,"resumo":"","materiais":[]}]}]},{"id":102004,"numero":4,"titulo":"As cruzadas","cps":[],"caps":[{"id":10200401,"num":"Cap. 01","nome":"A História das Cruzadas","videos":[{"id":102004011,"nome":"A História das Cruzadas","link":"","dur":"37:54","durSeg":2274,"resumo":"","materiais":[]}]},{"id":10200402,"num":"Cap. 02","nome":"Cruzadas: consequências","videos":[{"id":102004021,"nome":"Cruzadas: consequências","link":"","dur":"10:00","durSeg":600,"resumo":"","materiais":[]}]}]},{"id":102005,"numero":5,"titulo":"O poder das religiões","cps":[],"caps":[{"id":10200501,"num":"Cap. 01","nome":"Religião, temor e tremor — Leandro Karnal","videos":[{"id":102005011,"nome":"Reexibição: religião, temor e tremor, com Leandro Karnal","link":"","dur":"1:43:00","durSeg":6180,"resumo":"","materiais":[]}]}]},{"id":102006,"numero":6,"titulo":"O nascimento da modernidade","cps":[],"caps":[{"id":10200601,"num":"Cap. 01","nome":"Renascimento: resumo de História","videos":[{"id":102006011,"nome":"RENASCIMENTO: RESUMO DE HISTÓRIA (Débora Aladim)","link":"","dur":"34:54","durSeg":2094,"resumo":"","materiais":[]}]},{"id":10200602,"num":"Cap. 02","nome":"Cosmos — Quando o Conhecimento Conquistou o Medo","videos":[{"id":102006021,"nome":"Série Cosmos – 2014 – 1ª Temp. Ep. 03 – Quando o Conhecimento Conquistou o Medo","link":"","dur":"45:00","durSeg":2700,"resumo":"","materiais":[]}]}]},{"id":102007,"numero":7,"titulo":"Contrarreforma","cps":[],"caps":[{"id":10200701,"num":"Cap. 01","nome":"A Contrarreforma Católica","videos":[{"id":102007011,"nome":"A Contrarreforma Católica","link":"","dur":"18:38","durSeg":1118,"resumo":"","materiais":[]}]},{"id":10200702,"num":"Cap. 02","nome":"A Inquisição","videos":[{"id":102007021,"nome":"A Inquisição","link":"","dur":"10:27","durSeg":627,"resumo":"","materiais":[]}]}]},{"id":102008,"numero":8,"titulo":"Colonizações: espanhóis e ingleses na América","cps":[],"caps":[{"id":10200801,"num":"Cap. 01","nome":"Espanhóis e ingleses na América","videos":[{"id":102008011,"nome":"Espanhóis e ingleses na América","link":"","dur":"37:52","durSeg":2272,"resumo":"","materiais":[]}]},{"id":10200802,"num":"Cap. 02","nome":"Brasil uno x América espanhola dividida","videos":[{"id":102008021,"nome":"Por que o Brasil continuou um só e a América espanhola se dividiu após a independência","link":"","dur":"12:38","durSeg":758,"resumo":"","materiais":[]}]},{"id":10200803,"num":"Cap. 03","nome":"Humanidade – Ep. 09 – Pioneiros","videos":[{"id":102008031,"nome":"Humanidade – Ep. 09 – Pioneiros","link":"","dur":"44:00","durSeg":2640,"resumo":"","materiais":[]}]}]},{"id":102009,"numero":9,"titulo":"Os desdobramentos políticos, econômicos e sociais no Brasil Colonial","cps":[],"caps":[{"id":10200901,"num":"Cap. 01","nome":"História do Brasil Colônia (1530–1822)","videos":[{"id":102009011,"nome":"Aula Enem: História do Brasil Colônia (1530–1822) | Política, Economia e Sociedade Colonial | HCD","link":"","dur":"28:00","durSeg":1680,"resumo":"","materiais":[]}]},{"id":10200902,"num":"Cap. 02","nome":"O destino da riqueza do Brasil Colônia","videos":[{"id":102009021,"nome":"'Devolve nosso ouro' – o destino da riqueza do Brasil Colônia","link":"","dur":"8:32","durSeg":512,"resumo":"","materiais":[]}]}]},{"id":102010,"numero":10,"titulo":"Sociedade na América espanhola, inglesa e portuguesa nos séculos XVII e XVIII","cps":[],"caps":[{"id":10201001,"num":"Cap. 01","nome":"Navio negreiro / Colonização da América Portuguesa I","videos":[{"id":102010011,"nome":"Amistad – Navio Negreiro","link":"","dur":"8:00","durSeg":480,"resumo":"","materiais":[]},{"id":102010012,"nome":"História – Semana 14 – Colonização da América Portuguesa – Parte 1 (séc. XVI e XVII)","link":"","dur":"18:40","durSeg":1120,"resumo":"","materiais":[]}]},{"id":10201002,"num":"Cap. 02","nome":"Riqueza colonial / Colonização da América Portuguesa II","videos":[{"id":102010021,"nome":"'Devolve nosso ouro': o destino da riqueza do Brasil Colônia","link":"","dur":"8:32","durSeg":512,"resumo":"","materiais":[]},{"id":102010022,"nome":"História – Semana 15 – Colonização da América Portuguesa – Parte 2 (séc. XVIII)","link":"","dur":"19:36","durSeg":1176,"resumo":"","materiais":[]}]},{"id":10201003,"num":"Cap. 03","nome":"América Espanhola","videos":[{"id":102010031,"nome":"HISTÓRIA GERAL #49 – AMÉRICA ESPANHOLA","link":"","dur":"24:52","durSeg":1492,"resumo":"","materiais":[]}]},{"id":10201004,"num":"Cap. 04","nome":"Colonização da América Inglesa","videos":[{"id":102010041,"nome":"COLONIZAÇÃO DA AMÉRICA INGLESA | Prof. Biro Torres","link":"","dur":"12:29","durSeg":749,"resumo":"","materiais":[]}]}]},{"id":102011,"numero":11,"titulo":"Formação dos povos europeus","cps":[],"caps":[{"id":10201101,"num":"Cap. 01","nome":"Como os países europeus surgiram?","videos":[{"id":102011011,"nome":"Como os Países Europeus Surgiram? | De Bárbaros a Impérios Enormes","link":"","dur":"16:22","durSeg":982,"resumo":"","materiais":[]}]},{"id":10201102,"num":"Cap. 02","nome":"Como surgiram os países europeus — Avesso da História","videos":[{"id":102011021,"nome":"COMO SURGIRAM OS PAÍSES EUROPEUS – Avesso da História","link":"","dur":"5:15","durSeg":315,"resumo":"","materiais":[]}]},{"id":10201103,"num":"Cap. 03","nome":"Visigodos, Ostrogodos e Godos","videos":[{"id":102011031,"nome":"Visigodos, Ostrogodos e Godos – Nerdologia","link":"","dur":"9:58","durSeg":598,"resumo":"","materiais":[]}]}]},{"id":102012,"numero":12,"titulo":"A Revolução Francesa","cps":[],"caps":[{"id":10201201,"num":"Cap. 01","nome":"Como a Revolução Francesa mudou o mundo","videos":[{"id":102012011,"nome":"COMO A REVOLUÇÃO FRANCESA MUDOU O MUNDO – Nostalgia História","link":"","dur":"1:19:19","durSeg":4759,"resumo":"","materiais":[]}]},{"id":10201202,"num":"Cap. 02","nome":"Do Absolutismo à Guilhotina","videos":[{"id":102012021,"nome":"REVOLUÇÃO FRANCESA: Do Absolutismo à Guilhotina | História","link":"","dur":"32:05","durSeg":1925,"resumo":"","materiais":[]}]},{"id":10201203,"num":"Cap. 03","nome":"A Era Napoleônica","videos":[{"id":102012031,"nome":"A ERA NAPOLEÔNICA || VOGALIZANDO A HISTÓRIA","link":"","dur":"25:17","durSeg":1517,"resumo":"","materiais":[]}]},{"id":10201204,"num":"Cap. 04","nome":"Revolução Francesa e seus desdobramentos (1789–1799)","videos":[{"id":102012041,"nome":"8° ANO – Revolução Francesa e seus desdobramentos (1789–1799) – REPRISE 30.05.22","link":"","dur":"18:25","durSeg":1105,"resumo":"","materiais":[]}]},{"id":10201205,"num":"Cap. 05","nome":"1808: a fuga da família real portuguesa","videos":[{"id":102012051,"nome":"1808: a fuga da família real portuguesa para o Brasil – Prof. Pedro Balthazar","link":"","dur":"11:24","durSeg":684,"resumo":"","materiais":[]}]}]},{"id":102013,"numero":13,"titulo":"As Revoluções Burguesas – transformações na sociedade","cps":[],"caps":[{"id":10201301,"num":"Cap. 01","nome":"Iluminismo | Aula completa","videos":[{"id":102013011,"nome":"Iluminismo | Aula Completa","link":"","dur":"1:17:30","durSeg":4650,"resumo":"","materiais":[]}]},{"id":10201302,"num":"Cap. 02","nome":"Revoluções Burguesas","videos":[{"id":102013021,"nome":"Revoluções Burguesas","link":"","dur":"12:20","durSeg":740,"resumo":"","materiais":[]}]}]},{"id":102014,"numero":14,"titulo":"O capitalismo","cps":[],"caps":[{"id":10201401,"num":"Cap. 01","nome":"Fases do capitalismo","videos":[{"id":102014011,"nome":"Fases do Capitalismo: Comercial, Industrial, Financeiro e Informacional","link":"","dur":"38:29","durSeg":2309,"resumo":"","materiais":[]}]},{"id":10201402,"num":"Cap. 02","nome":"O que é o capitalismo?","videos":[{"id":102014021,"nome":"O QUE É O CAPITALISMO? – Cortes do História Pública","link":"","dur":"15:40","durSeg":940,"resumo":"","materiais":[]}]}]},{"id":102015,"numero":15,"titulo":"A Revolução no mundo do trabalho e na indústria / O processo de industrialização e o movimento operário","cps":[],"caps":[{"id":10201501,"num":"Cap. 01","nome":"Primeira Revolução Industrial","videos":[{"id":102015011,"nome":"Primeira Revolução Industrial – Nerdologia","link":"","dur":"9:00","durSeg":540,"resumo":"","materiais":[]}]},{"id":10201502,"num":"Cap. 02","nome":"A Segunda Revolução Industrial","videos":[{"id":102015021,"nome":"A Segunda Revolução Industrial","link":"","dur":"10:20","durSeg":620,"resumo":"","materiais":[]}]},{"id":10201503,"num":"Cap. 03","nome":"Terceira Revolução Industrial e Indústria 4.0","videos":[{"id":102015031,"nome":"O QUE É A TERCEIRA REVOLUÇÃO INDUSTRIAL?","link":"","dur":"24:12","durSeg":1452,"resumo":"","materiais":[]},{"id":102015032,"nome":"Como a INDÚSTRIA 4.0 vai ROUBAR o seu Emprego? (E como se proteger dela)","link":"","dur":"18:35","durSeg":1115,"resumo":"","materiais":[]}]},{"id":10201504,"num":"Cap. 04","nome":"Série Cosmos – 1ª Temporada, Episódio 12","videos":[{"id":102015041,"nome":"Série Cosmos – 1ª Temporada, Episódio 12","link":"","dur":"46:00","durSeg":2760,"resumo":"","materiais":[]}]},{"id":10201505,"num":"Cap. 05","nome":"Série Cosmos – 1ª Temporada, Episódio 12","videos":[{"id":102015051,"nome":"Série Cosmos – 1ª Temporada, Episódio 12","link":"","dur":"50:12","durSeg":3012,"resumo":"","materiais":[]}]},{"id":10201506,"num":"Cap. 06","nome":"Movimento Operário","videos":[{"id":102015061,"nome":"Movimento Operário","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]}]}]},{"id":102016,"numero":16,"titulo":"Imperialismo e o Neocolonialismo","cps":[],"caps":[{"id":10201601,"num":"Cap. 01","nome":"Imperialismo e Neocolonialismo","videos":[{"id":102016011,"nome":"Imperialismo e Neocolonialismo","link":"","dur":"30:14","durSeg":1814,"resumo":"","materiais":[]}]},{"id":10201602,"num":"Cap. 02","nome":"Atrocidades do domínio belga no Congo","videos":[{"id":102016021,"nome":"A terrível história de atrocidades do domínio belga no Congo","link":"","dur":"7:38","durSeg":458,"resumo":"","materiais":[]}]},{"id":10201603,"num":"Cap. 03","nome":"O genocídio esquecido da Alemanha na Namíbia","videos":[{"id":102016031,"nome":"O genocídio 'esquecido' da Alemanha na Namíbia, reconhecido após mais de um século","link":"","dur":"9:53","durSeg":593,"resumo":"","materiais":[]}]}]},{"id":102017,"numero":17,"titulo":"A Primeira Grande Guerra (vídeos editados)","cps":[],"caps":[{"id":10201701,"num":"Cap. 01–04","nome":"Guerras mundiais","videos":[{"id":102017011,"nome":"Guerras mundiais","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]},{"id":102017012,"nome":"Primeira Guerra Mundial – Nostalgia História","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]}]},{"id":10201702,"num":"Cap. 05","nome":"Primeira Guerra — complementos","videos":[{"id":102017021,"nome":"Guerras mundiais","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]},{"id":102017022,"nome":"Primeira Guerra Mundial – Nostalgia História","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]},{"id":102017023,"nome":"Arquivo S – O Brasil na Primeira Guerra Mundial","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]},{"id":102017024,"nome":"A CONFERÊNCIA DE PAZ DE PARIS, DE 1919","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]}]}]},{"id":102018,"numero":18,"titulo":"A Revolução Russa","cps":[],"caps":[{"id":10201801,"num":"Cap. 01","nome":"Vladimir Lenin e a Revolução Russa","videos":[{"id":102018011,"nome":"Vladimir Lenin e a Revolução Russa – Documentário | Parte 1","link":"","dur":"42:39","durSeg":2559,"resumo":"","materiais":[]}]},{"id":10201802,"num":"Cap. 02","nome":"100 anos das Revoluções Russas","videos":[{"id":102018021,"nome":"100 anos das Revoluções Russas | Nerdologia","link":"","dur":"10:00","durSeg":600,"resumo":"","materiais":[]}]},{"id":10201803,"num":"Cap. 03","nome":"Stalin e o comunismo soviético","videos":[{"id":102018031,"nome":"STALIN e o COMUNISMO SOVIÉTICO | História","link":"","dur":"29:28","durSeg":1768,"resumo":"","materiais":[]}]},{"id":10201804,"num":"Cap. 04","nome":"A Rússia pós-União Soviética e a hegemonia de Putin","videos":[{"id":102018041,"nome":"O poder da Rússia pós-União Soviética. E a hegemonia de Putin","link":"","dur":"10:25","durSeg":625,"resumo":"","materiais":[]}]}]},{"id":102019,"numero":19,"titulo":"O fortalecimento das ideologias totalitárias","cps":[],"caps":[{"id":10201901,"num":"Cap. 01","nome":"O que é fascismo?","videos":[{"id":102019011,"nome":"O QUE É FASCISMO? Entenda de um jeito SIMPLES","link":"","dur":"20:43","durSeg":1243,"resumo":"","materiais":[]}]},{"id":10201902,"num":"Cap. 02","nome":"Hitler chegou ao poder de forma democrática?","videos":[{"id":102019021,"nome":"Hitler chegou ao poder de forma democrática? | Nerdologia","link":"","dur":"10:32","durSeg":632,"resumo":"","materiais":[]}]},{"id":10201903,"num":"Cap. 03","nome":"Fascismo à brasileira / A agressão nazista","videos":[{"id":102019031,"nome":"Fascismo à Brasileira | Pedro Doria e Leandro Karnal","link":"","dur":"44:45","durSeg":2685,"resumo":"","materiais":[]},{"id":102019032,"nome":"Doc. Série – Redescobrindo a Segunda Guerra – Ep. 1: A agressão nazista","link":"","dur":"52:00","durSeg":3120,"resumo":"","materiais":[]}]}]},{"id":102020,"numero":20,"titulo":"A conjuntura latino-americana na primeira metade do século XX","cps":[],"caps":[{"id":10202001,"num":"Cap. 01","nome":"América Latina no século XX","videos":[{"id":102020011,"nome":"América Latina no século XX: Ditadura, Populismo e Revolução","link":"","dur":"32:20","durSeg":1940,"resumo":"","materiais":[]}]}]},{"id":102021,"numero":21,"titulo":"O século XX: reflexões sobre um novo panorama mundial","cps":[],"caps":[{"id":10202101,"num":"Cap. 01","nome":"O Século XX: um novo panorama mundial","videos":[{"id":102021011,"nome":"O Século XX: Um Novo Panorama Mundial","link":"","dur":"8:40","durSeg":520,"resumo":"","materiais":[]}]},{"id":10202102,"num":"Cap. 02","nome":"Brasil no Século XX (1900–2000)","videos":[{"id":102021021,"nome":"Brasil no Século XX: Um Período de Profundas Transformações (1900–2000)","link":"","dur":"15:17","durSeg":917,"resumo":"","materiais":[]}]}]},{"id":102022,"numero":22,"titulo":"Civilização e Barbárie: conceitos do passado e do presente","cps":[],"caps":[{"id":10202201,"num":"Cap. 01","nome":"A Cultura Genocida da Europa – Parte 01","videos":[{"id":102022011,"nome":"A Cultura Genocida da Europa – Parte 01","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]}]},{"id":10202202,"num":"Cap. 02","nome":"A Cultura Genocida da Europa – Parte 02","videos":[{"id":102022021,"nome":"A Cultura Genocida da Europa – Parte 02","link":"","dur":"--:--","durSeg":0,"resumo":"","materiais":[]}]}]},{"id":102023,"numero":23,"titulo":"Invasão ou migração? Uma discussão sobre a crise migratória contemporânea","cps":[],"caps":[{"id":10202301,"num":"Cap. 01","nome":"Crise Migratória – Atualidades","videos":[{"id":102023011,"nome":"Crise Migratória – Atualidades para Concurso #27 – AEP","link":"","dur":"28:16","durSeg":1696,"resumo":"","materiais":[]}]},{"id":10202302,"num":"Cap. 02","nome":"Migração: o drama que comove e divide o mundo","videos":[{"id":102023021,"nome":"Migração, o drama que comove e divide o mundo | 21 notícias que marcaram o século 21","link":"","dur":"15:00","durSeg":900,"resumo":"","materiais":[]}]},{"id":10202303,"num":"Cap. 03","nome":"Crises migratórias no Brasil","videos":[{"id":102023031,"nome":"Crises migratórias no Brasil – Brasil Escola","link":"","dur":"10:14","durSeg":614,"resumo":"","materiais":[]}]}]},{"id":102024,"numero":24,"titulo":"Pré-história do Amazonas","cps":[],"caps":[{"id":10202401,"num":"Cap. 01","nome":"Pré-História do Amazonas","videos":[{"id":102024011,"nome":"HISTÓRIA SIS 2/MACRO – 2024 – AULA 1: PRÉ-HISTÓRIA DO AMAZONAS","link":"","dur":"13:15","durSeg":795,"resumo":"","materiais":[]}]}]}]},{"id":103,"nome":"HISTÓRIA","turma":"3° ANO ENSINO MÉDIO","capitulo":"Currículo — Aulas 01 a 13","aulas":[{"id":103001,"numero":1,"titulo":"A degradação ambiental no processo de ocupação portuguesa no território brasileiro","cps":[],"caps":[{"id":10300101,"num":"Cap. 01","nome":"Ciclo do Pau Brasil e Capitanias Hereditárias","videos":[{"id":103001011,"nome":"Aula – Ciclo do Pau Brasil e Capitanias Hereditárias","link":"","dur":"23:30","durSeg":1410,"resumo":"","materiais":[]}]}]},{"id":103002,"numero":2,"titulo":"Atividade agrícola no Brasil Colônia","cps":[],"caps":[{"id":10300201,"num":"Cap. 01","nome":"Questão agrícola e o período da cana-de-açúcar","videos":[{"id":103002011,"nome":"Agricultura – Questão agrícola – Período da cana de açúcar","link":"","dur":"18:12","durSeg":1092,"resumo":"","materiais":[]}]}]},{"id":103003,"numero":3,"titulo":"A propriedade da terra no Brasil Colônia (Séculos XVI–XVIII)","cps":[],"caps":[{"id":10300301,"num":"Cap. 01","nome":"Você sabe o que é uma sesmaria?","videos":[{"id":103003011,"nome":"VOCÊ SABE O QUE É UMA SESMARIA? | Origem e motivação para sua criação | Idade Média","link":"","dur":"10:09","durSeg":609,"resumo":"","materiais":[]}]}]},{"id":103004,"numero":4,"titulo":"A monocultura da cana-de-açúcar e suas especificidades (Séculos XVI–XVIII)","cps":[],"caps":[{"id":10300401,"num":"Cap. 01","nome":"O Brasil Colônia","videos":[{"id":103004011,"nome":"O BRASIL COLÔNIA","link":"","dur":"1:08:44","durSeg":4124,"resumo":"","materiais":[]}]}]},{"id":103005,"numero":5,"titulo":"A Sociedade Patriarcal: formação e características (Séculos XVI–XVIII)","cps":[],"caps":[{"id":10300501,"num":"Cap. 01","nome":"A Sociedade Patriarcal","videos":[{"id":103005011,"nome":"A SOCIEDADE PATRIARCAL","link":"","dur":"19:57","durSeg":1197,"resumo":"","materiais":[]}]}]},{"id":103006,"numero":6,"titulo":"A presença holandesa no Brasil e a crise açucareira","cps":[],"caps":[{"id":10300601,"num":"Cap. 01","nome":"Ciclo do Açúcar","videos":[{"id":103006011,"nome":"Ciclo Do Açúcar","link":"","dur":"33:42","durSeg":2022,"resumo":"","materiais":[]}]},{"id":10300602,"num":"Cap. 02","nome":"Crise do Açúcar e a invasão holandesa","videos":[{"id":103006021,"nome":"Crise do Açúcar e a invasão holandesa","link":"","dur":"35:45","durSeg":2145,"resumo":"","materiais":[]}]}]},{"id":103007,"numero":7,"titulo":"Revolução Industrial (Séculos XVIII–XIX)","cps":[],"caps":[{"id":10300701,"num":"Cap. 01","nome":"A Primeira Revolução Industrial","videos":[{"id":103007011,"nome":"A Primeira Revolução Industrial","link":"","dur":"9:00","durSeg":540,"resumo":"","materiais":[]}]},{"id":10300702,"num":"Cap. 02","nome":"A Segunda Revolução Industrial","videos":[{"id":103007021,"nome":"A Segunda Revolução Industrial","link":"","dur":"10:00","durSeg":600,"resumo":"","materiais":[]}]},{"id":10300703,"num":"Cap. 03","nome":"Terceira Revolução Industrial e Indústria 4.0","videos":[{"id":103007031,"nome":"O QUE É A TERCEIRA REVOLUÇÃO INDUSTRIAL?","link":"","dur":"24:12","durSeg":1452,"resumo":"","materiais":[]},{"id":103007032,"nome":"Como a INDÚSTRIA 4.0 vai ROUBAR o seu Emprego? (E como se proteger dela)","link":"","dur":"18:35","durSeg":1115,"resumo":"","materiais":[]},{"id":103007033,"nome":"A curiosa linha do tempo da evolução da Inteligência Artificial","link":"","dur":"13:17","durSeg":797,"resumo":"","materiais":[]}]},{"id":10300704,"num":"Cap. 04","nome":"Série Cosmos – 1ª Temporada, Episódio 12","videos":[{"id":103007041,"nome":"Série Cosmos – 1ª Temporada, Episódio 12","link":"","dur":"45:00","durSeg":2700,"resumo":"","materiais":[]}]},{"id":10300705,"num":"Cap. 05","nome":"Movimento operário e pensamento social","videos":[{"id":103007051,"nome":"História Geral – aula 35 – Movimento operário e pensamento social","link":"","dur":"50:12","durSeg":3012,"resumo":"","materiais":[]}]}]},{"id":103008,"numero":8,"titulo":"Transformações nas formas de produção","cps":[],"caps":[{"id":10300801,"num":"Cap. 01","nome":"A História de Henry Ford","videos":[{"id":103008011,"nome":"A História de Henry Ford – Histórias de Sucesso #4","link":"","dur":"18:58","durSeg":1138,"resumo":"","materiais":[]}]},{"id":10300802,"num":"Cap. 02","nome":"Taylorismo","videos":[{"id":103008021,"nome":"Taylorismo","link":"","dur":"6:18","durSeg":378,"resumo":"","materiais":[]}]},{"id":10300803,"num":"Cap. 03","nome":"O Toyotismo","videos":[{"id":103008031,"nome":"O Toyotismo","link":"","dur":"16:10","durSeg":970,"resumo":"","materiais":[]}]},{"id":10300804,"num":"Cap. 04","nome":"Resumo das mudanças nas formas de produção","videos":[{"id":103008041,"nome":"Resumo das Mudanças nas Formas de Produção","link":"","dur":"10:39","durSeg":639,"resumo":"","materiais":[]}]},{"id":10300805,"num":"Cap. 05","nome":"O futuro do trabalho — Nerdologia Tech","videos":[{"id":103008051,"nome":"O futuro do seu emprego | Nerdologia Tech","link":"","dur":"9:43","durSeg":583,"resumo":"","materiais":[]},{"id":103008052,"nome":"Robôs vão tomar o seu emprego? Automatização do trabalho | Nerdologia Tech","link":"","dur":"9:43","durSeg":583,"resumo":"","materiais":[]}]}]},{"id":103009,"numero":9,"titulo":"A exploração da mão-de-obra de homens, mulheres e crianças (Séculos XVIII–XIX)","cps":[],"caps":[{"id":10300901,"num":"Cap. 01","nome":"Trabalho análogo à escravidão no Brasil e no mundo","videos":[{"id":103009011,"nome":"TRABALHO ANÁLOGO À ESCRAVIDÃO NO BRASIL E NO MUNDO","link":"","dur":"29:05","durSeg":1745,"resumo":"","materiais":[]}]},{"id":10300902,"num":"Cap. 02","nome":"Trabalho feminino na sociedade de classes — Heleieth Saffioti","videos":[{"id":103009021,"nome":"Trabalho feminino na sociedade de classes: a contribuição de Heleieth Saffioti","link":"","dur":"34:26","durSeg":2066,"resumo":"","materiais":[]}]},{"id":10300903,"num":"Cap. 03","nome":"O trabalho infantil no Brasil e no mundo","videos":[{"id":103009031,"nome":"O TRABALHO INFANTIL NO BRASIL E NO MUNDO","link":"","dur":"12:23","durSeg":743,"resumo":"","materiais":[]}]}]},{"id":103010,"numero":10,"titulo":"Trabalho rural no Brasil (Séculos XVI–XXI)","cps":[],"caps":[{"id":10301001,"num":"Cap. 01","nome":"Economia colonial: cana-de-açúcar, pecuária e drogas do sertão","videos":[{"id":103010011,"nome":"ECONOMIA COLONIAL: CANA-DE-AÇÚCAR, PECUÁRIA E DROGAS DO SERTÃO","link":"","dur":"27:20","durSeg":1640,"resumo":"","materiais":[]}]},{"id":10301002,"num":"Cap. 02","nome":"Crise do Açúcar e a invasão holandesa","videos":[{"id":103010021,"nome":"Crise do Açúcar e a invasão holandesa","link":"","dur":"8:29","durSeg":509,"resumo":"","materiais":[]}]},{"id":10301003,"num":"Cap. 03","nome":"Reforma agrária – Brasil Escola","videos":[{"id":103010031,"nome":"Reforma agrária – Brasil Escola","link":"","dur":"5:56","durSeg":356,"resumo":"","materiais":[]}]}]},{"id":103011,"numero":11,"titulo":"O atual problema da terra no Brasil (Séculos XX–XXI)","cps":[],"caps":[{"id":10301101,"num":"Cap. 01","nome":"Questão agrária no Brasil","videos":[{"id":103011011,"nome":"QUESTÃO AGRÁRIA NO BRASIL (HELP PRA REDAÇÃO DO ENEM)","link":"","dur":"15:00","durSeg":900,"resumo":"","materiais":[]}]},{"id":10301102,"num":"Cap. 02","nome":"Fome num país que alimenta 1 bilhão","videos":[{"id":103011021,"nome":"Como o Brasil que alimenta 1 bilhão no mundo tem 10 milhões passando fome","link":"","dur":"14:56","durSeg":896,"resumo":"","materiais":[]}]},{"id":10301103,"num":"Cap. 03","nome":"Desigualdade no Brasil em 4 dados","videos":[{"id":103011031,"nome":"4 dados que mostram por que o Brasil é um dos países mais desiguais do mundo","link":"","dur":"7:34","durSeg":454,"resumo":"","materiais":[]}]},{"id":10301104,"num":"Cap. 04","nome":"Agronegócio e fome","videos":[{"id":103011041,"nome":"O agronegócio carrega o Brasil nas costas?","link":"","dur":"17:56","durSeg":1076,"resumo":"","materiais":[]},{"id":103011042,"nome":"Fome e capitalismo | 062","link":"","dur":"14:14","durSeg":854,"resumo":"","materiais":[]}]}]},{"id":103012,"numero":12,"titulo":"A luta pela terra – posse, propriedade e as artimanhas da exclusão (Séculos XX–XXI)","cps":[],"caps":[{"id":10301201,"num":"Cap. 01","nome":"Vídeo da aula","videos":[{"id":103012011,"nome":"A luta pela terra – vídeo da aula","link":"","dur":"15:22","durSeg":922,"resumo":"","materiais":[]}]}]},{"id":103013,"numero":13,"titulo":"História das políticas públicas ambientais e dos movimentos sociais de proteção do meio ambiente no Brasil (Séculos XX–XXI)","cps":[],"caps":[{"id":10301301,"num":"Cap. 01","nome":"Vídeo da aula","videos":[{"id":103013011,"nome":"Políticas públicas ambientais – vídeo da aula","link":"","dur":"20:09","durSeg":1209,"resumo":"","materiais":[]}]}]}]}]};

/* ===== Projetos (anos letivos) — cada projeto guarda um banco completo ===== */
const APP_VERSION='2.0', APP_DATE='julho de 2026';
const PROJ_KEY='prometeu.projects.v1';
let projReg=null;
function loadProjects(){
  try{
    const raw=localStorage.getItem(PROJ_KEY);
    if(raw){const p=JSON.parse(raw);if(p&&Array.isArray(p.projetos)&&p.projetos.length&&p.projetos.some(x=>x.id===p.ativo)){projReg=p;return;}}
  }catch(e){}
  // 1ª execução: cria o projeto padrão; o banco antigo (se existir) é migrado em loadDB()
  const id=nid();
  projReg={projetos:[{id,ano:String(new Date().getFullYear()),instituicao:'',criadoEm:Date.now()}],ativo:id};
  saveProjects();
}
function saveProjects(){try{localStorage.setItem(PROJ_KEY,JSON.stringify(projReg));}catch(e){}}
function projKey(id){return 'prometeu.db.p'+id;}
function dbKey(){return projKey(projReg.ativo);}
function curProj(){return projReg.projetos.find(p=>p.id===projReg.ativo);}
function projNome(p){return (p.ano||'—')+(p.instituicao?' · '+p.instituicao:'');}

/* ===== Persistência (localStorage) ===== */
const DB_KEY='prometeu.db.v2', OLD_DB_KEY='prometeu.db.v1', THEME_KEY='prometeu.theme.v1';
let db;
function loadDB(){
  try{
    const raw=localStorage.getItem(dbKey());
    if(raw){const parsed=JSON.parse(raw);if(parsed&&Array.isArray(parsed.disciplinas)){db=parsed;normalizeDB();return;}}
  }catch(e){}
  // Projeto sem banco próprio (1º uso): migra o banco antigo v2 para dentro do projeto.
  try{
    const raw2=localStorage.getItem(DB_KEY);
    if(raw2){const p2=JSON.parse(raw2);if(p2&&Array.isArray(p2.disciplinas)){db=p2;normalizeDB();saveDB();return;}}
  }catch(e){}
  // Migração da v1: preserva séries criadas pelo usuário (id de timestamp)
  // e substitui as amostras antigas pela base curricular completa.
  let userDiscs=[];
  try{
    const old=localStorage.getItem(OLD_DB_KEY);
    if(old){const p=JSON.parse(old);if(p&&Array.isArray(p.disciplinas))userDiscs=p.disciplinas.filter(d=>d.id>=1e11);}
  }catch(e){}
  db={disciplinas:[...JSON.parse(JSON.stringify(SEED)).disciplinas,...userDiscs]};
  normalizeDB();saveDB();
}
function normalizeDB(){
  db.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>{
    if(typeof c.apresentado!=='boolean')c.apresentado=false;
    if(typeof c.obs!=='string')c.obs='';
    c.videos.forEach(v=>{
      if(typeof v.resumo!=='string')v.resumo='';
      if(!Array.isArray(v.materiais))v.materiais=[];
      if(!Array.isArray(v.arquivos))v.arquivos=[];
    });
  })));
}
function capTem(c){return c.videos.length>0||c.videos.some(v=>(v.resumo||'').trim()||(v.materiais||[]).length);}
function aulaPend(a){return a.caps.filter(c=>capTem(c)&&!c.apresentado).length;}
function aulaMinistrados(a){return a.caps.filter(c=>capTem(c)&&c.apresentado).length;}
function saveDB(){
  try{localStorage.setItem(dbKey(),JSON.stringify(db));}catch(e){}
}
function loadTheme(){
  try{const t=parseInt(localStorage.getItem(THEME_KEY),10);if(!isNaN(t)&&t>=0&&t<THEMES.length)return t;}catch(e){}
  return 0;
}
function saveTheme(){try{localStorage.setItem(THEME_KEY,String(themeIdx));}catch(e){}}

function nid(){return Date.now()+(Math.random()*9999|0);}
function fmtS(s){if(!s||s<=0)return'--:--';const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),ss=s%60;return h>0?`${h}:${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`:`${m}:${String(ss).padStart(2,'0')}`;}
function parseDur(str){if(!str)return 0;const p=str.trim().split(':').map(Number);if(p.some(isNaN)||p.length<2)return 0;return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1];}
function capDurSeg(cap){return cap.videos.reduce((s,v)=>s+(v.durSeg||0),0);}
function aulaDurSeg(a){return a.caps.reduce((s,c)=>s+capDurSeg(c),0);}
function discDurSeg(d){return d.aulas.reduce((s,a)=>s+aulaDurSeg(a),0);}
function getDisc(id){return db.disciplinas.find(d=>d.id===id);}
function getAula(d,id){return d.aulas.find(a=>a.id===id);}
function getCap(a,id){return a.caps.find(c=>c.id===id);}
function vi(id){return(document.getElementById(id)||{}).value?.trim()||'';}
function scanBar(value,max,seg){
  seg=seg||20;if(!max||max<=0)max=1;
  const lit=value>0?Math.max(1,Math.round((value/max)*seg)):0;
  let h='<div class="scan-bar">';
  for(let i=0;i<seg;i++)h+=`<i class="${i<lit?'on':''}"></i>`;
  return h+'</div>';
}

function applyThemeUI(t){
  const m=THEME_META[t];
  document.getElementById('root').className=t;
  document.body.className=t;                     // fundo do body acompanha o tema (corrige fundo branco)
  document.documentElement.style.background=m.bg; // e o html também (overscroll/rotação)
  ['ti0','ti1','ti2','ti3','ti4','ti5','ti6'].forEach(id=>{const el=document.getElementById(id);if(el)el.className=`ti ${m.icon}`;});
  const tl=document.getElementById('tl0');if(tl)tl.textContent=m.label;
  paintIcons();
}
function toggleTheme(){
  themeIdx=(themeIdx+1)%THEMES.length;
  applyThemeUI(THEMES[themeIdx]);
  saveTheme();
}
function showScreen(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function goBack(to){closeModal();showScreen(to);if(to==='s-main')renderDiscs();else if(to==='s-series')renderSeries();else if(to==='s-disc')renderAulas();else if(to==='s-aula')renderCaps();}

let curMat=null,MATS=[];
function discPend(d){return d.aulas.reduce((s,a)=>s+aulaPend(a),0);}
function matKey(d){return (d.nome||'—').toUpperCase();}
function matDiscs(mat){return db.disciplinas.filter(d=>matKey(d)===mat);}

function renderDiscs(){ // TELA 1: apenas as matérias
  saveDB();
  const el=document.getElementById('list-discs');
  if(!db.disciplinas.length){el.innerHTML='<div class="empty"><i class="ti ti-books" aria-hidden="true"></i><p>Nenhuma matéria.<br>Toque em <b>Nova matéria</b>.</p></div>';return;}
  const groups={};
  db.disciplinas.forEach(d=>{(groups[matKey(d)]=groups[matKey(d)]||[]).push(d);});
  MATS=Object.keys(groups);
  const matDur=m=>groups[m].reduce((s,d)=>s+discDurSeg(d),0);
  const maxDur=Math.max(1,...MATS.map(matDur));
  el.innerHTML=MATS.map((m,i)=>{
    const ds=groups[m];
    const nAulas=ds.reduce((s,d)=>s+d.aulas.length,0);
    return `
    <div class="card"><div class="disc-row">
      <div class="disc-accent"></div>
      <div class="disc-body" onclick="openMat(${i})">
        <div class="disc-av">${m.slice(0,3)}</div>
        <div class="disc-info">
          <div class="dn">${m}</div>
          <div class="dc">${ds.length} série${ds.length!==1?'s':''}/ano${ds.length!==1?'s':''}</div>
          <div class="ds">${nAulas} aulas · ${fmtS(matDur(m))}${(()=>{const pp=ds.reduce((s,d)=>s+discPend(d),0);return pp>0?` · <span class="ta-pend">● ${pp} a ministrar</span>`:'';})()}</div>
          ${scanBar(matDur(m),maxDur)}
        </div>
      </div>
      <div class="side-btns">
        <button class="iBtn edt" onclick="renameMat(${i})" aria-label="Renomear matéria"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="removeMat(${i})" aria-label="Remover matéria"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`;
  }).join('');
}
function openMat(i){curMat=MATS[i];renderSeries();showScreen('s-series');}
function renameMat(i){
  const m=MATS[i];
  openModal('Renomear matéria',[{id:'mm-n',lbl:'Nome da matéria',val:m}],()=>{
    const novo=vi('mm-n');if(!novo){alert('Informe o nome.');return;}
    matDiscs(m).forEach(d=>d.nome=novo.toUpperCase());
    if(curMat===m)curMat=novo.toUpperCase();
    closeModal();renderDiscs();
  });
}
function removeMat(i){
  const m=MATS[i];const n=matDiscs(m).length;
  if(!confirm(`Remover a matéria "${m}" e sua${n!==1?'s':''} ${n} série${n!==1?'s':''}?`))return;
  db.disciplinas=db.disciplinas.filter(d=>matKey(d)!==m);renderDiscs();agendarLimpeza();
}

const openSeries=new Set(); // séries com a árvore de aulas expandida (estado da sessão)
function toggleTree(id){
  const wrap=document.getElementById('tw-'+id),btn=document.getElementById('tt-'+id);
  if(!wrap)return;
  const open=!openSeries.has(id);
  open?openSeries.add(id):openSeries.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
}
function renderSeries(){ // TELA 2: séries/anos da matéria; aulas recolhidas no botão
  saveDB();
  document.getElementById('mat-ttl').textContent=curMat||'';
  const el=document.getElementById('list-series');
  const ds=matDiscs(curMat);
  if(!ds.length){el.innerHTML='<div class="empty"><i class="ti ti-books" aria-hidden="true"></i><p>Nenhuma série/ano.<br>Toque em <b>Nova série/ano</b>.</p></div>';return;}
  const maxDur=Math.max(1,...ds.map(discDurSeg));
  el.innerHTML=ds.map(d=>{
    const aulasHtml=d.aulas.length?d.aulas.map(a=>`
      <div class="tree-aula" onclick="curDiscId=${d.id};openAula(${a.id})">
        <div class="ta-line"><b>Aula ${String(a.numero).padStart(2,'0')}</b><span>${a.titulo}</span>${aulaPend(a)>0?`<span class="ta-pend">● ${aulaPend(a)}</span>`:''}<span class="ta-dur">${fmtS(aulaDurSeg(a))}</span></div>
        ${a.caps.map(c=>`<div class="tree-cap">${c.num||'Cap.'} — ${c.nome}</div>`).join('')}
      </div>`).join(''):'<div class="tree-empty">Sem aulas ainda</div>';
    const isOpen=openSeries.has(d.id);
    return `
    <div class="card">
      <div class="disc-row">
        <div class="disc-accent"></div>
        <div class="disc-body" onclick="openDisc(${d.id})">
          <div class="disc-av">${(d.turma||'?').replace(/[^0-9A-Za-zÀ-ú]/g,'').slice(0,3)||'S/A'}</div>
          <div class="disc-info">
            <div class="dn">${d.turma||'Série/Ano não definido'}</div>
            <div class="dc">${d.capitulo||'Sem capítulo'}</div>
            <div class="ds">${d.aulas.length} aulas · ${fmtS(discDurSeg(d))}${discPend(d)>0?` · <span class="ta-pend">● ${discPend(d)} a ministrar</span>`:''}</div>
            ${scanBar(discDurSeg(d),maxDur)}
          </div>
        </div>
        <div class="side-btns">
          <button class="iBtn" onclick="openRelatorio(${d.id})" aria-label="Relatório da série"><i class="ti ti-report" aria-hidden="true"></i></button>
          <button class="iBtn edt" onclick="openEditDisc(${d.id})" aria-label="Editar"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="iBtn del" onclick="removeDisc(${d.id})" aria-label="Remover"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>
      <button class="tree-toggle${isOpen?' open':''}" id="tt-${d.id}" onclick="toggleTree(${d.id})" aria-expanded="${isOpen}">
        <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
        <span>${d.aulas.length} aula${d.aulas.length!==1?'s':''}</span>
      </button>
      <div class="tree-wrap${isOpen?' open':''}" id="tw-${d.id}"><div class="tree-inner"><div class="tree-aulas">${aulasHtml}</div></div></div>
    </div>`;
  }).join('');
}
function openAddSerie(){
  openModal('Nova série/ano — '+curMat,[{id:'md-t',lbl:'Série/Ano',ph:'Ex: 6° ANO'},{id:'md-c',lbl:'Capítulo / unidade',ph:'Ex: Cap. 01 — Brasil Colônia'}],()=>{
    const turma=vi('md-t');if(!turma){alert('Informe a série/ano.');return;}
    db.disciplinas.push({id:nid(),nome:curMat,turma,capitulo:vi('md-c'),aulas:[]});closeModal();renderSeries();
  });
}
function openDisc(id){curDiscId=id;renderAulas();showScreen('s-disc');}
function openAddDisc(){openModal('Nova matéria',[{id:'md-n',lbl:'Nome da matéria',ph:'Ex: HISTÓRIA'},{id:'md-t',lbl:'Série/Ano',ph:'Ex: 6° ANO'},{id:'md-c',lbl:'Capítulo / unidade',ph:'Ex: Cap. 01 — Brasil Colônia'}],()=>{
  const nome=vi('md-n');if(!nome){alert('Informe o nome.');return;}
  db.disciplinas.push({id:nid(),nome:nome.toUpperCase(),turma:vi('md-t'),capitulo:vi('md-c'),aulas:[]});closeModal();renderDiscs();
});}
function openEditDisc(id){const d=getDisc(id);openModal('Editar série/ano',[{id:'md-n',lbl:'Matéria',val:d.nome},{id:'md-t',lbl:'Série/Ano',val:d.turma},{id:'md-c',lbl:'Capítulo / unidade',val:d.capitulo}],()=>{
  d.nome=(vi('md-n')||d.nome).toUpperCase();d.turma=vi('md-t');d.capitulo=vi('md-c');closeModal();
  if(document.getElementById('s-series').classList.contains('active'))renderSeries();else renderDiscs();
  if(curDiscId===id)renderAulas();
});}
function editCurDisc(){openEditDisc(curDiscId);}
function removeDisc(id){if(!confirm('Remover esta série/ano e todas as suas aulas?'))return;db.disciplinas=db.disciplinas.filter(d=>d.id!==id);renderSeries();agendarLimpeza();}

function renderAulas(){
  saveDB();
  const disc=getDisc(curDiscId);if(!disc)return;
  document.getElementById('disc-ttl').textContent=`${disc.nome}${disc.turma?' — '+disc.turma:''}`;
  document.getElementById('disc-cap-lbl').textContent=disc.capitulo||'Toque para editar';
  const el=document.getElementById('list-aulas');
  if(!disc.aulas.length){el.innerHTML='<div class="empty"><i class="ti ti-video-off" aria-hidden="true"></i><p>Nenhuma aula.<br>Toque em <b>Nova aula</b>.</p></div>';return;}
  const maxDur=Math.max(1,...disc.aulas.map(aulaDurSeg));
  el.innerHTML=disc.aulas.map(a=>`
    <div class="card"><div class="aula-row">
      <div class="aula-nc"><div class="num-c">A${String(a.numero).padStart(2,'0')}</div></div>
      <div class="aula-body" onclick="openAula(${a.id})">
        <div class="at">${a.titulo}</div>
        <div class="as">${a.caps.length} cap. · ${a.caps.reduce((s,c)=>s+c.videos.length,0)} vídeos · ${fmtS(aulaDurSeg(a))}${aulaPend(a)>0?` · <span class="ta-pend">● ${aulaPend(a)} a ministrar</span>`:''}</div>
        ${scanBar(aulaDurSeg(a),maxDur,16)}
        <div class="ac">${(()=>{const cps=a.caps.map((c,i)=>c.videos.length?`CP${i+1}`:null).filter(Boolean);return cps.length?cps.join(' · '):'Sem conteúdo nos capítulos';})()}</div>
      </div>
      <div class="side-btns">
        <button class="iBtn edt" onclick="openEditAula(${a.id})" aria-label="Editar"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="removeAula(${a.id})" aria-label="Remover"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`).join('');
}
function openAula(id){curAulaId=id;selCP=null;renderCaps();showScreen('s-aula');}
function openAddAula(){
  const disc=getDisc(curDiscId);
  openModal('Nova aula',[{id:'ma-t',lbl:'Título da aula',ph:'Ex: A Sociedade Patriarcal'}],()=>{
    const titulo=vi('ma-t');if(!titulo){alert('Informe o título.');return;}
    const num=(disc.aulas.reduce((m,a)=>Math.max(m,a.numero),0))+1;
    disc.aulas.push({id:nid(),numero:num,titulo,cps:[],caps:[]});closeModal();renderAulas();
  });
}
function openEditAula(id){const disc=getDisc(curDiscId);const aula=getAula(disc,id);
  openModal('Editar aula',[{id:'ma-t',lbl:'Título da aula',val:aula.titulo}],()=>{
    aula.titulo=vi('ma-t')||aula.titulo;closeModal();renderAulas();if(curAulaId===id)renderCaps();
  });}
function editCurAula(){openEditAula(curAulaId);}
function removeAula(id){const disc=getDisc(curDiscId);if(!confirm('Remover esta aula?'))return;disc.aulas=disc.aulas.filter(a=>a.id!==id);disc.aulas.forEach((a,i)=>a.numero=i+1);renderAulas();agendarLimpeza();}

const openCaps=new Set(); // capítulos com a lista de vídeos expandida (estado da sessão)
function toggleCap(id){
  const wrap=document.getElementById('twc-'+id),btn=document.getElementById('ttc-'+id);
  if(!wrap)return;
  const open=!openCaps.has(id);
  open?openCaps.add(id):openCaps.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
}
/* ===== Observações do capítulo (janela recolhida por padrão) ===== */
const openObs=new Set();let obsTimer=null;
function toggleObs(id){
  const wrap=document.getElementById('two-'+id),btn=document.getElementById('tto-'+id);
  if(!wrap)return;
  const open=!openObs.has(id);
  open?openObs.add(id):openObs.delete(id);
  wrap.classList.toggle('open',open);
  if(btn)btn.classList.toggle('open',open);
  if(open){const ta=wrap.querySelector('textarea');if(ta)setTimeout(()=>ta.focus(),140);}
}
function setObs(id,val){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,id);
  if(!cap)return;
  cap.obs=val;
  clearTimeout(obsTimer);obsTimer=setTimeout(saveDB,400); // salva sem re-renderizar (não interrompe a digitação)
  const dot=document.getElementById('obsdot-'+id);if(dot)dot.style.display=val.trim()?'inline':'none';
}
function renderCaps(){
  saveDB();
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);if(!aula)return;
  document.getElementById('aula-num-ttl').textContent='Aula '+String(aula.numero).padStart(2,'0');
  document.getElementById('aula-titulo-lbl').textContent=aula.titulo;
  const totalVids=aula.caps.reduce((s,c)=>s+c.videos.length,0);
  const pend=aulaPend(aula),feitos=aulaMinistrados(aula),comConteudo=pend+feitos;
  const pendTxt=comConteudo>0?(pend>0?` · <span class="pend-badge" style="display:inline-flex">● ${pend} a ministrar</span>`:' · <span class="done-badge" style="display:inline-flex">✓ tudo ministrado</span>'):'';
  document.getElementById('aula-info-lbl').innerHTML=`${aula.caps.length} cap. · ${totalVids} vídeo${totalVids!==1?'s':''} · ${fmtS(aulaDurSeg(aula))}${pendTxt}`;
  paintIcons();
  const nCPs=Math.max(11,aula.caps.length);
  document.getElementById('chips-cp').innerHTML=Array.from({length:nCPs},(_,i)=>{
    const cap=aula.caps[i];
    const lit=!!(cap&&(cap.videos.length>0||cap.videos.some(v=>(v.resumo||'').trim()||(v.materiais||[]).length)));
    const sel=selCP===i+1;
    return `<span class="chip${lit?' on':''}${sel?' sel':''}" id="cp-${i+1}" ${lit?`onclick="selectCP(${i+1},${cap.id})"`:''} role="button" aria-pressed="${sel}">CP${i+1}</span>`;
  }).join('');
  const el=document.getElementById('list-caps');
  if(!aula.caps.length){el.innerHTML='<div class="empty"><i class="ti ti-player-play" aria-hidden="true"></i><p>Nenhum capítulo ainda.<br>Toque em <b>Novo capítulo</b>.</p></div>';return;}
  el.innerHTML=aula.caps.map(cap=>{
    const durSeg=capDurSeg(cap);
    const vidsHtml=cap.videos.map((vid,vi2)=>`
      <div class="vid-row">
        <div class="vid-badge"><div class="vid-num">V${vi2+1}</div></div>
        <div class="vid-info">
          <div class="vid-nome">${vid.nome||'Vídeo '+(vi2+1)}</div>
          <div class="vid-dur"><i class="ti ti-clock" style="font-size:10px" aria-hidden="true"></i> ${vid.dur||'--:--'}<span class="vid-badges">${vid.resumo?'<i class="ti ti-file-text" aria-hidden="true" title="Tem resumo"></i>':''}${vid.materiais&&vid.materiais.length?`<i class="ti ti-book" aria-hidden="true"></i>${vid.materiais.length}`:''}${vid.arquivos&&vid.arquivos.length?`<i class="ti ti-paperclip" aria-hidden="true" title="Documentos anexados"></i>${vid.arquivos.length}`:''}</span></div>
        </div>
        <div class="vid-btns">
          ${vid.link
            ?`<button class="iBtn-sm play" onclick="window.open('${vid.link.replace(/'/g,"\\'")}','_blank')" aria-label="Abrir vídeo"><i class="ti ti-player-play" aria-hidden="true"></i></button>`
            :`<button class="iBtn-sm play" onclick="ytSearch(${cap.id},${vid.id})" aria-label="Buscar este vídeo no YouTube" title="Sem link — buscar no YouTube"><i class="ti ti-search" aria-hidden="true"></i></button>`}
          <button class="iBtn-sm edt" onclick="goToFormVid(${cap.id},${vid.id})" aria-label="Editar vídeo"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="iBtn-sm del" onclick="removeVid(${cap.id},${vid.id})" aria-label="Remover vídeo"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>`).join('');
    const tem=capTem(cap);
    const pend=tem&&!cap.apresentado;
    return `
    <div class="cap-card${pend?' pend':''}" id="cc-${cap.id}">
      <div class="cap-header">
        <div class="cap-accent"></div>
        <div class="cap-hinfo">
          <div class="cap-num">${cap.num||'Cap.'}</div>
          <div class="cap-nome">${cap.nome}</div>
          <div class="cap-total">
            <i class="ti ti-files" style="font-size:11px" aria-hidden="true"></i>
            ${cap.videos.length} vídeo${cap.videos.length!==1?'s':''}
            &nbsp;·&nbsp;
            <i class="ti ti-clock" style="font-size:11px" aria-hidden="true"></i>
            <span class="cap-total-dur">${durSeg>0?fmtS(durSeg):'--:--'}</span>
            ${tem?(pend?'<span class="ta-pend" style="margin-left:6px">● A MINISTRAR</span>':'<span style="margin-left:6px;color:var(--txt3)">✓ ministrado</span>'):''}
          </div>
        </div>
        <div class="cap-hbtns">
          <button class="iBtn edt" onclick="openEditCap(${cap.id})" aria-label="Editar capítulo"><i class="ti ti-edit" aria-hidden="true"></i></button>
          <button class="cap-check${cap.apresentado?'':' checked'}${tem?'':' disabled'}" onclick="${tem?`toggleApresentado(${cap.id})`:''}" aria-label="${cap.apresentado?'Marcar como a ministrar':'Marcar como ministrado'}" role="checkbox" aria-checked="${!cap.apresentado&&tem}" title="Marcado = a ministrar; vazio = já ministrado"><span class="box"><i class="ti ti-check" aria-hidden="true"></i></span></button>
          <button class="iBtn del" onclick="removeCap(${cap.id})" aria-label="Remover capítulo"><i class="ti ti-trash" aria-hidden="true"></i></button>
        </div>
      </div>
      <button class="tree-toggle${openCaps.has(cap.id)?' open':''}" id="ttc-${cap.id}" onclick="toggleCap(${cap.id})" aria-expanded="${openCaps.has(cap.id)}">
        <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
        <span>${cap.videos.length} vídeo${cap.videos.length!==1?'s':''}</span>
      </button>
      <div class="tree-wrap${openCaps.has(cap.id)?' open':''}" id="twc-${cap.id}"><div class="tree-inner">
        <div class="vid-list">${vidsHtml}</div>
        <button class="add-vid-btn" onclick="goToFormVid(${cap.id},null)">
          <i class="ti ti-plus" aria-hidden="true"></i> Adicionar vídeo neste capítulo
        </button>
      </div></div>
      <button class="tree-toggle obs-toggle${openObs.has(cap.id)?' open':''}" id="tto-${cap.id}" onclick="toggleObs(${cap.id})" aria-expanded="${openObs.has(cap.id)}">
        <i class="ti ti-chevron-down chev" aria-hidden="true"></i>
        <i class="ti ti-note" aria-hidden="true"></i>
        <span>Observações</span>
        <span class="obs-dot" id="obsdot-${cap.id}" style="display:${(cap.obs||'').trim()?'inline':'none'}">●</span>
      </button>
      <div class="tree-wrap${openObs.has(cap.id)?' open':''}" id="two-${cap.id}"><div class="tree-inner">
        <div class="obs-box"><textarea class="finput obs-ta" placeholder="Anotações deste capítulo (lembretes, tarefas, páginas do livro…)" oninput="setObs(${cap.id},this.value)">${escH(cap.obs||'')}</textarea></div>
      </div></div>
    </div>`;
  }).join('')+`<button class="add-cap-btn" onclick="openAddCap()"><i class="ti ti-plus" aria-hidden="true"></i> Novo capítulo</button>`;
}

let selCP=null;
function selectCP(n,capId){
  selCP=(selCP===n)?null:n; // tocar de novo desmarca
  // atualiza só as classes dos chips (sem re-render, preservando animações)
  document.querySelectorAll('#chips-cp .chip').forEach((el,i)=>el.classList.toggle('sel',selCP===i+1));
  if(selCP===null)return;
  // expande o capítulo (se recolhido) e rola até ele
  if(!openCaps.has(capId))toggleCap(capId);
  const card=document.getElementById('cc-'+capId);
  if(card)setTimeout(()=>card.scrollIntoView({behavior:'smooth',block:'start'}),80);
}
function openAddCap(){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);
  openModal('Novo capítulo',[{id:'cf-num',lbl:'Número / identificador',ph:'Ex: Cap. 01',val:`Cap. ${String(aula.caps.length+1).padStart(2,'0')}`},{id:'cf-nome',lbl:'Nome do capítulo',ph:'Ex: Ciclo do Pau Brasil'}],()=>{
    const nome=vi('cf-nome');if(!nome){alert('Informe o nome.');return;}
    const capId=nid();
    aula.caps.push({id:capId,num:vi('cf-num'),nome,videos:[]});
    openCaps.add(capId); // capítulo novo abre expandido
    closeModal();renderCaps();
  });
}
function openEditCap(capId){const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  openModal('Editar capítulo',[{id:'cf-num',lbl:'Número / identificador',val:cap.num},{id:'cf-nome',lbl:'Nome do capítulo',val:cap.nome}],()=>{
    cap.num=vi('cf-num');cap.nome=vi('cf-nome')||cap.nome;closeModal();renderCaps();
  });}
function removeCap(capId){const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);if(!confirm('Remover este capítulo e todos os seus vídeos?'))return;aula.caps=aula.caps.filter(c=>c.id!==capId);renderCaps();agendarLimpeza();}
function toggleApresentado(capId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  if(!cap||!capTem(cap))return;
  cap.apresentado=!cap.apresentado; // marcado(checked)=a ministrar; vazio=ministrado
  renderCaps();
}
function ytSearch(capId,vidId){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  const v=cap&&cap.videos.find(x=>x.id===vidId);if(!v)return;
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(v.nome||''),'_blank');
}
function ytSearchForm(){
  const n=vi('vf-nome');
  if(!n){alert('Preencha o nome do vídeo primeiro.');return;}
  window.open('https://www.youtube.com/results?search_query='+encodeURIComponent(n),'_blank');
}
function removeVid(capId,vidId){const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);if(!confirm('Remover este vídeo?'))return;cap.videos=cap.videos.filter(v=>v.id!==vidId);renderCaps();agendarLimpeza();}

let formMats=[];
function goToFormVid(capId,vidId){
  curCapId=capId;editVidId=vidId;
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,capId);
  const vid=vidId?cap.videos.find(x=>x.id===vidId):null;
  const numVid=vid?cap.videos.indexOf(vid)+1:cap.videos.length+1;
  document.getElementById('vid-form-ttl').textContent=vid?`Editar V${numVid} — ${cap.num}`:`Novo vídeo — ${cap.num||cap.nome}`;
  document.getElementById('vf-nome').value=vid?.nome||'';
  document.getElementById('vf-link').value=vid?.link||'';
  document.getElementById('vf-dur').value=vid&&vid.dur&&vid.dur!=='--:--'?vid.dur:'';
  document.getElementById('vf-resumo').value=vid?.resumo||'';
  formMats=(vid?.materiais||[]).map(m=>({titulo:m.titulo||'',link:m.link||''}));
  formArqs=(vid?.arquivos||[]).map(a=>({fid:a.fid,titulo:a.titulo||'',autor:a.autor||'',nomeArq:a.nomeArq||'',tipo:a.tipo||'',tamanho:a.tamanho||0}));
  matsOpen=false; // seção de material começa recolhida
  const twm=document.getElementById('tw-mats'),ttm=document.getElementById('tt-mats');
  if(twm)twm.classList.remove('open');if(ttm)ttm.classList.remove('open');
  renderMats();renderArqs();updPg();
  document.getElementById('vf-hint').textContent=vid?.link?'Link cadastrado':'';
  document.getElementById('vf-dur-info').innerHTML=vid?.durSeg>0?`<i class="ti ti-clock" aria-hidden="true"></i> ${vid.dur}`:'';
  document.getElementById('vf-spin').style.display='none';
  showScreen('s-vid');
  setTimeout(()=>document.getElementById('vf-nome').focus(),80);
}

/* ===== Resumo: contador de páginas (≈3.000 caracteres/página A4) ===== */
function updPg(){
  const len=document.getElementById('vf-resumo').value.length;
  const pg=len===0?0:Math.max(1,Math.ceil(len/3000));
  const el=document.getElementById('vf-pg');
  el.textContent=`≈ ${pg} pág. (${len}/9000)`;
  el.classList.toggle('warn',pg>=3);
}

/* ===== Materiais didáticos (seção recolhível no formulário do vídeo) ===== */
let matsOpen=false;
function toggleMats(){
  matsOpen=!matsOpen;
  const w=document.getElementById('tw-mats'),t=document.getElementById('tt-mats');
  if(w)w.classList.toggle('open',matsOpen);
  if(t){t.classList.toggle('open',matsOpen);t.setAttribute('aria-expanded',matsOpen);}
}
function updMatCount(){
  const n=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim()).length+formArqs.length;
  const el=document.getElementById('mats-count');
  if(el)el.textContent=`Material didático e documentos${n?` (${n})`:''}`;
}
function renderMats(){
  const box=document.getElementById('vf-mats');
  box.innerHTML=formMats.map((m,i)=>`
    <div class="mat-row">
      <input class="finput mat-t" placeholder="Título (ex: Casa-Grande & Senzala)" value="${(m.titulo||'').replace(/"/g,'&quot;')}" oninput="formMats[${i}].titulo=this.value"/>
      <input class="finput mat-l" placeholder="Autor, editora ou link" value="${(m.link||'').replace(/"/g,'&quot;')}" oninput="formMats[${i}].link=this.value"/>
      <button class="mat-x" onclick="formMats.splice(${i},1);renderMats()" aria-label="Remover material"><i class="ti ti-x" aria-hidden="true"></i></button>
    </div>`).join('');
  updMatCount();
}
function addMat(){if(!matsOpen)toggleMats();formMats.push({titulo:'',link:''});renderMats();
  const rows=document.querySelectorAll('#vf-mats .mat-t');if(rows.length)rows[rows.length-1].focus();}

/* ===== Documentos anexados (PDF / imagem / Word) — blobs no IndexedDB ===== */
let formArqs=[];
const ARQ_MAX=10, ARQ_MB=15;
let _idb=null;
function idbOpen(){
  return new Promise((res,rej)=>{
    if(_idb)return res(_idb);
    if(!('indexedDB' in window))return rej(new Error('IndexedDB indisponível'));
    const q=indexedDB.open('prometeu-files',1);
    q.onupgradeneeded=e=>{const d=e.target.result;if(!d.objectStoreNames.contains('files'))d.createObjectStore('files',{keyPath:'fid'});};
    q.onsuccess=()=>{_idb=q.result;res(_idb);};
    q.onerror=()=>rej(q.error);
  });
}
function fPut(rec){return idbOpen().then(d=>new Promise((res,rej)=>{const t=d.transaction('files','readwrite');t.objectStore('files').put(rec);t.oncomplete=res;t.onerror=()=>rej(t.error);}));}
function fGet(fid){return idbOpen().then(d=>new Promise((res,rej)=>{const r=d.transaction('files').objectStore('files').get(fid);r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error);}));}
function fDel(fids){if(!fids.length)return Promise.resolve();return idbOpen().then(d=>new Promise((res,rej)=>{const t=d.transaction('files','readwrite');const s=t.objectStore('files');fids.forEach(f=>s.delete(f));t.oncomplete=res;t.onerror=()=>rej(t.error);}));}
function fKeys(){return idbOpen().then(d=>new Promise((res,rej)=>{const r=d.transaction('files').objectStore('files').getAllKeys();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error);}));}
async function sweepOrphans(){ // apaga do IndexedDB arquivos que nenhum projeto referencia mais
  const usados=new Set();
  const coleta=data=>{try{data.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>usados.add(x.fid))))));}catch(e){}};
  projReg.projetos.forEach(p=>{
    if(p.id===projReg.ativo)coleta(db);
    else{try{coleta(JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}'));}catch(e){}}
  });
  formArqs.forEach(a=>usados.add(a.fid)); // protege anexos de um formulário ainda aberto
  const keys=await fKeys();
  await fDel(keys.filter(k=>!usados.has(k)));
}
let _sweepT=null;
function agendarLimpeza(){clearTimeout(_sweepT);_sweepT=setTimeout(()=>sweepOrphans().catch(()=>{}),800);}
function pickArq(){
  if(formArqs.length>=ARQ_MAX){alert(`Limite de ${ARQ_MAX} documentos por vídeo.`);return;}
  document.getElementById('vf-file').click();
}
async function onArqPick(input){
  const files=[...(input.files||[])];input.value='';
  for(const f of files){
    if(formArqs.length>=ARQ_MAX){alert(`Limite de ${ARQ_MAX} documentos por vídeo — os demais não foram importados.`);break;}
    if(f.size>ARQ_MB*1024*1024){alert(`"${f.name}" passa de ${ARQ_MB} MB e não foi importado.`);continue;}
    const fid=nid();
    try{await fPut({fid,nome:f.name,tipo:f.type,blob:f});}
    catch(e){alert('Não foi possível guardar o arquivo neste navegador.');break;}
    formArqs.push({fid,titulo:f.name.replace(/\.[^.]+$/,''),autor:'',nomeArq:f.name,tipo:f.type,tamanho:f.size});
  }
  renderArqs();
}
function arqIcon(t){return /pdf/.test(t)?'ti-file-text':/^image\//.test(t)?'ti-photo':'ti-file';}
function fmtKB(n){return n>=1048576?(n/1048576).toFixed(1)+' MB':Math.max(1,Math.round(n/1024))+' KB';}
function renderArqs(){
  const box=document.getElementById('vf-arqs');if(!box)return;
  box.innerHTML=formArqs.map((a,i)=>`
    <div class="arq-row">
      <i class="ti ${arqIcon(a.tipo)} arq-ic" aria-hidden="true"></i>
      <div class="arq-campos">
        <input class="finput" placeholder="Título" value="${(a.titulo||'').replace(/"/g,'&quot;')}" oninput="formArqs[${i}].titulo=this.value"/>
        <input class="finput" placeholder="Autor" value="${(a.autor||'').replace(/"/g,'&quot;')}" oninput="formArqs[${i}].autor=this.value"/>
        <div class="arq-meta">${escH(a.nomeArq)} · ${fmtKB(a.tamanho)}</div>
      </div>
      <div class="arq-btns">
        <button class="iBtn-sm play" onclick="abrirArq(${a.fid})" aria-label="Abrir arquivo"><i class="ti ti-eye" aria-hidden="true"></i></button>
        <button class="iBtn-sm del" onclick="formArqs.splice(${i},1);renderArqs()" aria-label="Remover arquivo"><i class="ti ti-x" aria-hidden="true"></i></button>
      </div>
    </div>`).join('');
  const c=document.getElementById('arq-count');if(c)c.textContent=`${formArqs.length}/${ARQ_MAX}`;
  updMatCount();
  paintIcons();
}
async function abrirArq(fid){
  try{
    const r=await fGet(fid);
    if(!r||!r.blob){alert('Arquivo não encontrado no armazenamento deste navegador.');return;}
    const url=URL.createObjectURL(r.blob);
    const visual=/pdf/.test(r.tipo)||/^image\//.test(r.tipo);
    if(visual){const w=window.open(url,'_blank');if(!w)alert('Permita pop-ups para visualizar o arquivo.');}
    else{const a=document.createElement('a');a.href=url;a.download=r.nome||'arquivo';document.body.appendChild(a);a.click();a.remove();}
    setTimeout(()=>URL.revokeObjectURL(url),60000);
  }catch(e){alert('Não foi possível abrir o arquivo.');}
}

/* ===== Exportação do resumo (Word / PDF) — offline ===== */
function buildResumoHTML(){
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,curCapId);
  const nome=vi('vf-nome')||'Vídeo sem nome';
  const resumo=document.getElementById('vf-resumo').value.trim();
  const mats=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim());
  const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const link=vi('vf-link');
  const linkHtml=link?`<div class="vlink">Vídeo: <a href="${esc(link)}">${esc(link)}</a></div>`:'';
  const paras=resumo?resumo.split(/\n{2,}/).map(p=>`<p>${esc(p).replace(/\n/g,'<br>')}</p>`).join(''):'<p><i>(Sem resumo preenchido)</i></p>';
  const matsHtml=mats.length?`<h2>Material didático</h2><ul>${mats.map(m=>`<li><b>${esc(m.titulo||'—')}</b>${m.link?' — '+(/^https?:\/\//i.test(m.link)?`<a href="${esc(m.link)}">${esc(m.link)}</a>`:esc(m.link)):''}</li>`).join('')}</ul>`:'';
  const arqsHtml=formArqs.length?`<h2>Documentos anexados</h2><ul>${formArqs.map(a=>`<li><b>${esc(a.titulo||a.nomeArq)}</b>${a.autor?' — '+esc(a.autor):''} <span style="color:#777">(${esc(a.nomeArq)})</span></li>`).join('')}</ul>`:'';
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(nome)}</title>
<style>
@page{size:A4;margin:2.5cm}
body{font-family:Georgia,'Times New Roman',serif;font-size:12pt;line-height:1.5;color:#111;max-width:17cm;margin:auto}
h1{font-size:16pt;margin:0 0 2pt}
.meta{font-size:10pt;color:#555;border-bottom:1px solid #999;padding-bottom:8pt;margin-bottom:14pt}
.vlink{font-size:10pt;margin-bottom:12pt;word-break:break-all}
a{color:#1155cc}
h2{font-size:13pt;margin-top:18pt}
ul{padding-left:18pt}
</style></head><body>
<h1>${esc(nome)}</h1>
<div class="meta">${esc(disc.nome||'')} · ${esc(disc.turma||'')} · Aula ${String(aula.numero).padStart(2,'0')} — ${esc(aula.titulo)} · ${esc(cap.num||'')} ${esc(cap.nome||'')}</div>
${linkHtml}
${paras}
${matsHtml}
${arqsHtml}
</body></html>`;
}
function expWord(){
  const html=buildResumoHTML();
  const blob=new Blob(['\ufeff'+html],{type:'application/msword'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`resumo-${(vi('vf-nome')||'video').toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').slice(0,60)}.doc`;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
}
function expPDF(){
  const w=window.open('','_blank');
  if(!w){alert('Permita pop-ups para exportar em PDF.');return;}
  w.document.write(buildResumoHTML());
  w.document.close();
  w.focus();
  setTimeout(()=>w.print(),350); // na caixa de impressão, escolha "Salvar como PDF"
}

/* ===== Toast de notificação ===== */
function showToast(html,ms){
  const zone=document.getElementById('toast-zone');
  const t=document.createElement('div');
  t.className='toast';
  t.innerHTML=`<i class="ti ti-alert-triangle" aria-hidden="true"></i><div>${html}</div>`;
  t.onclick=()=>dismiss();
  zone.appendChild(t);paintIcons();
  let gone=false;
  function dismiss(){if(gone)return;gone=true;t.classList.add('out');setTimeout(()=>t.remove(),320);}
  setTimeout(dismiss,ms||6000);
}

/* ===== Relatório da série/ano (estrutura completa) ===== */
const escH=s=>String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
let relDiscId=null;
function openRelatorio(discId){
  relDiscId=discId;
  const d=getDisc(discId);if(!d)return;
  const nCaps=d.aulas.reduce((s,a)=>s+a.caps.length,0);
  const nVids=d.aulas.reduce((s,a)=>s+a.caps.reduce((x,c)=>x+c.videos.length,0),0);
  document.getElementById('rmodal-title').textContent=`Relatório — ${d.nome} · ${d.turma||'Série única'}`;
  document.getElementById('rmodal-sub').textContent=`${d.aulas.length} aulas · ${nCaps} capítulos · ${nVids} vídeos · ${fmtS(discDurSeg(d))}`;
  document.getElementById('rmodal').classList.add('open');paintIcons();
}
function closeRModal(){document.getElementById('rmodal').classList.remove('open');relDiscId=null;}
function buildRelatorioHTML(discId){
  const d=getDisc(discId);
  const nCaps=d.aulas.reduce((s,a)=>s+a.caps.length,0);
  const nVids=d.aulas.reduce((s,a)=>s+a.caps.reduce((x,c)=>x+c.videos.length,0),0);
  const hoje=new Date().toLocaleDateString('pt-BR');
  let corpo='';
  d.aulas.forEach(a=>{
    corpo+=`<h2>Aula ${String(a.numero).padStart(2,'0')} — ${escH(a.titulo)} <span class="dur">${fmtS(aulaDurSeg(a))}</span></h2>`;
    if(!a.caps.length){corpo+='<p class="vazio">Sem capítulos.</p>';return;}
    a.caps.forEach(c=>{
      const st=capTem(c)?(c.apresentado?' <span class="ok">✓ ministrado</span>':' <span class="pend">● a ministrar</span>'):'';
      corpo+=`<h3>${escH(c.num||'Cap.')} — ${escH(c.nome)}${st}</h3>`;
      if((c.obs||'').trim())corpo+=`<p class="obs">Obs.: ${escH(c.obs.trim()).replace(/\n/g,'<br>')}</p>`;
      if(!c.videos.length){corpo+='<p class="vazio">Sem vídeos.</p>';return;}
      corpo+='<ul>';
      c.videos.forEach((v,i)=>{
        corpo+=`<li><b>V${i+1}</b> · ${escH(v.nome)} — <span class="dur">${v.dur||'--:--'}</span>`;
        if(v.link)corpo+=`<br>Link: <a href="${escH(v.link)}">${escH(v.link)}</a>`;
        if((v.resumo||'').trim())corpo+=`<br><i>Resumo disponível (${v.resumo.trim().length} caracteres)</i>`;
        if((v.materiais||[]).length){
          corpo+='<br>Material didático:<ul>'+v.materiais.map(m=>`<li>${escH(m.titulo||'—')}${m.link?' — '+(/^https?:\/\//i.test(m.link)?`<a href="${escH(m.link)}">${escH(m.link)}</a>`:escH(m.link)):''}</li>`).join('')+'</ul>';
        }
        if((v.arquivos||[]).length){
          corpo+='<br>Documentos anexados:<ul>'+v.arquivos.map(x=>`<li>${escH(x.titulo||x.nomeArq)}${x.autor?' — '+escH(x.autor):''}</li>`).join('')+'</ul>';
        }
        corpo+='</li>';
      });
      corpo+='</ul>';
    });
  });
  return `<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>Relatório — ${escH(d.nome)} ${escH(d.turma||'')}</title>
<style>
@page{size:A4;margin:2.2cm}
body{font-family:Georgia,'Times New Roman',serif;font-size:11.5pt;line-height:1.45;color:#111;max-width:17cm;margin:auto}
h1{font-size:17pt;margin:0 0 2pt}
.meta{font-size:10pt;color:#555;border-bottom:1px solid #999;padding-bottom:8pt;margin-bottom:14pt}
h2{font-size:13pt;margin:16pt 0 4pt;border-bottom:1px solid #ccc;padding-bottom:2pt}
h3{font-size:11.5pt;margin:9pt 0 2pt}
ul{padding-left:16pt;margin:2pt 0 6pt}
li{margin-bottom:4pt}
.dur{font-family:monospace;color:#333}
.link{font-size:9.5pt;color:#444;word-break:break-all}
a{color:#1155cc;word-break:break-all}
.pend{color:#c0392b;font-size:9.5pt;font-weight:bold}
.ok{color:#2e7d32;font-size:9.5pt}
.vazio{color:#888;font-style:italic;margin:2pt 0}
.obs{color:#555;font-style:italic;margin:2pt 0;font-size:10pt}
</style></head><body>
<h1>${escH(d.nome)} — ${escH(d.turma||'Série única')}</h1>
<div class="meta">${escH(d.capitulo||'')} · ${d.aulas.length} aulas · ${nCaps} capítulos · ${nVids} vídeos · duração total ${fmtS(discDurSeg(d))} · gerado em ${hoje}</div>
${corpo}
</body></html>`;
}
function relWord(){
  if(relDiscId==null)return;
  const d=getDisc(relDiscId);
  const blob=new Blob(['\ufeff'+buildRelatorioHTML(relDiscId)],{type:'application/msword'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=`relatorio-${(d.nome+'-'+(d.turma||'')).toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').slice(0,60)}.doc`;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  closeRModal();
}
function relPDF(){
  if(relDiscId==null)return;
  const w=window.open('','_blank');
  if(!w){alert('Permita pop-ups para gerar o PDF.');return;}
  w.document.write(buildRelatorioHTML(relDiscId));
  w.document.close();w.focus();
  setTimeout(()=>w.print(),350);
  closeRModal();
}

/* ===== Detecção de vídeo duplicado na mesma série/ano ===== */
function findDuplicado(disc,nome,link,ignoreVidId){
  if(!link)return null; // sem link, não alarma (títulos repetidos legítimos existem)
  const n=nome.trim().toLowerCase(),l=link.trim();
  for(const a of disc.aulas)for(const c of a.caps)for(const v of c.videos){
    if(v.id!==ignoreVidId&&(v.link||'').trim()===l&&(v.nome||'').trim().toLowerCase()===n)
      return {aula:a,cap:c};
  }
  return null;
}
function ytId(url){const m=url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/);return m?m[1]:null;}
function onVidLink(){
  clearTimeout(vidTimer);
  const link=document.getElementById('vf-link').value.trim();const id=ytId(link);
  const hint=document.getElementById('vf-hint');
  if(id){hint.textContent='Link do YouTube reconhecido — buscando título…';document.getElementById('vf-spin').style.display='flex';vidTimer=setTimeout(()=>fetchYT(id),1400);}
  else{hint.textContent=link.startsWith('http')?'Link detectado.':'';document.getElementById('vf-spin').style.display='none';}
}
async function fetchYT(id){
  try{const r=await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`);if(r.ok){const j=await r.json();if(j.title&&!document.getElementById('vf-nome').value.trim())document.getElementById('vf-nome').value=j.title;}}catch(e){}
  document.getElementById('vf-spin').style.display='none';document.getElementById('vf-hint').textContent='Título obtido. Preencha a duração se necessário.';
}
function salvarVid(){
  const nome=document.getElementById('vf-nome').value.trim();
  const link=document.getElementById('vf-link').value.trim();
  const durStr=document.getElementById('vf-dur').value.trim();
  const resumo=document.getElementById('vf-resumo').value.trim();
  const materiais=formMats.filter(m=>(m.titulo||'').trim()||(m.link||'').trim())
    .map(m=>({titulo:(m.titulo||'').trim(),link:(m.link||'').trim()}));
  if(!nome){alert('Informe o nome do vídeo.');document.getElementById('vf-nome').focus();return;}
  const durSeg=parseDur(durStr);const dur=durSeg>0?fmtS(durSeg):(durStr||'--:--');
  const disc=getDisc(curDiscId);const aula=getAula(disc,curAulaId);const cap=getCap(aula,curCapId);
  const dup=findDuplicado(disc,nome,link,editVidId);
  const arquivos=formArqs.map(a=>({fid:a.fid,titulo:(a.titulo||'').trim()||a.nomeArq,autor:(a.autor||'').trim(),nomeArq:a.nomeArq,tipo:a.tipo,tamanho:a.tamanho}));
  if(editVidId){const v=cap.videos.find(x=>x.id===editVidId);v.nome=nome;v.link=link;v.dur=dur;v.durSeg=durSeg;v.resumo=resumo;v.materiais=materiais;v.arquivos=arquivos;}
  else cap.videos.push({id:nid(),nome,link,dur,durSeg,resumo,materiais,arquivos});
  openCaps.add(curCapId); // mostra o capítulo do vídeo salvo
  formArqs=[];agendarLimpeza(); // limpa anexos que foram removidos no formulário
  goBack('s-aula');
  if(dup)showToast(`<b>Vídeo duplicado nesta série:</b> mesmo nome e link já existem na <b>Aula ${String(dup.aula.numero).padStart(2,'0')}</b> · ${escH(dup.cap.num||'Cap.')} — ${escH(dup.cap.nome)}.`,7000);
}

function openModal(title,fields,cb){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-fields').innerHTML=fields.map(f=>`<div style="margin-bottom:12px"><label class="flbl">${f.lbl}</label><input class="finput" id="${f.id}" placeholder="${f.ph||''}" value="${f.val||''}"/></div>`).join('');
  _mcb=cb;document.getElementById('modal-ok').onclick=()=>_mcb&&_mcb();
  document.getElementById('modal').classList.add('open');
  setTimeout(()=>{const el=document.getElementById(fields[0].id);if(el){el.focus();if(fields[0].val)el.select();}},60);
}
function closeModal(){document.getElementById('modal').classList.remove('open');_mcb=null;}
function modalOverlayClick(e){if(e.target===document.getElementById('modal'))closeModal();}

/* ===== Tela de projetos (anos letivos) ===== */
function openProjetos(){closeMenu();renderProjetos();showScreen('s-proj');}
function renderProjetos(){
  saveDB();
  const el=document.getElementById('list-proj');
  el.innerHTML=projReg.projetos.map(p=>{
    const ativo=p.id===projReg.ativo;
    let nd=0,na=0;
    try{const d=ativo?db:JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}');nd=d.disciplinas.length;na=d.disciplinas.reduce((s,x)=>s+x.aulas.length,0);}catch(e){}
    return `<div class="card${ativo?' proj-ativo':''}"><div class="disc-row">
      <div class="disc-accent"></div>
      <div class="disc-body" onclick="ativarProjeto(${p.id})">
        <div class="disc-av"><i class="ti ti-archive" aria-hidden="true"></i></div>
        <div class="disc-info">
          <div class="dn">Ano letivo ${escH(p.ano||'—')}</div>
          <div class="dc">${escH(p.instituicao||'Instituição não informada')}</div>
          <div class="ds">${nd} matéria${nd!==1?'s':''}/série${nd!==1?'s':''} · ${na} aula${na!==1?'s':''}${ativo?' · <b>EM USO</b>':' · toque para abrir'}</div>
        </div>
      </div>
      <div class="side-btns">
        <button class="iBtn" onclick="exportBackup(${p.id})" aria-label="Exportar arquivo deste projeto"><i class="ti ti-download" aria-hidden="true"></i></button>
        <button class="iBtn edt" onclick="editProjeto(${p.id})" aria-label="Editar projeto"><i class="ti ti-edit" aria-hidden="true"></i></button>
        <button class="iBtn del" onclick="delProjeto(${p.id})" aria-label="Excluir projeto"><i class="ti ti-trash" aria-hidden="true"></i></button>
      </div>
    </div></div>`;
  }).join('');
  paintIcons();
}
function novoProjeto(){
  closeMenu();
  openModal('Criar novo projeto (ano letivo)',[
    {id:'pj-ano',lbl:'Ano',ph:'Ex: '+new Date().getFullYear(),val:String(new Date().getFullYear())},
    {id:'pj-inst',lbl:'Instituição',ph:'Ex: Escola Estadual …'}
  ],()=>{
    const ano=vi('pj-ano');if(!ano){alert('Informe o ano.');return;}
    saveDB(); // garante o projeto atual salvo antes de trocar
    const id=nid();
    try{localStorage.setItem(projKey(id),'{"disciplinas":[]}');}catch(e){alert('Sem espaço no navegador para criar o projeto.');return;}
    projReg.projetos.push({id,ano,instituicao:vi('pj-inst'),criadoEm:Date.now()});
    projReg.ativo=id;saveProjects();
    loadDB();closeModal();refreshProjUI();renderDiscs();showScreen('s-main');
    showToast(`<b>Projeto ${escH(ano)} criado e em uso.</b> O anterior ficou arquivado — troque quando quiser em ☰ → Gerenciar projetos.`,8000);
  });
}
function ativarProjeto(id){
  if(id===projReg.ativo){goBack('s-main');return;}
  saveDB();
  projReg.ativo=id;saveProjects();
  loadDB();refreshProjUI();renderDiscs();showScreen('s-main');
  const p=curProj();
  showToast(`<b>Projeto ativo:</b> ${escH(projNome(p))}.`,5000);
}
function editProjeto(id){
  const p=projReg.projetos.find(x=>x.id===id);if(!p)return;
  openModal('Editar projeto',[
    {id:'pj-ano',lbl:'Ano',val:p.ano},
    {id:'pj-inst',lbl:'Instituição',val:p.instituicao}
  ],()=>{
    p.ano=vi('pj-ano')||p.ano;p.instituicao=vi('pj-inst');
    saveProjects();closeModal();renderProjetos();refreshProjUI();
  });
}
function delProjeto(id){
  if(projReg.projetos.length<=1){alert('Este é o único projeto. Crie outro antes de excluir este.');return;}
  const p=projReg.projetos.find(x=>x.id===id);if(!p)return;
  if(!confirm(`Excluir o projeto "${projNome(p)}" com TODAS as matérias, aulas e documentos dele? Essa ação não pode ser desfeita.`))return;
  if(!confirm('Tem certeza? Se quiser guardar uma cópia, cancele e use antes o botão de exportar (seta para baixo).'))return;
  try{localStorage.removeItem(projKey(id));}catch(e){}
  projReg.projetos=projReg.projetos.filter(x=>x.id!==id);
  if(projReg.ativo===id){projReg.ativo=projReg.projetos[0].id;loadDB();refreshProjUI();}
  saveProjects();renderProjetos();agendarLimpeza();
}
function refreshProjUI(){
  const p=curProj();if(!p)return;
  const el=document.getElementById('proj-bar-lbl');
  if(el)el.textContent=`Ano letivo ${p.ano||'—'}${p.instituicao?' · '+p.instituicao:''}`;
  const a=document.getElementById('dw-proj');if(a)a.textContent=projNome(p);
}

/* ===== Backup em arquivo (.json) — inclui os documentos anexados ===== */
function blobB64(blob){return new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]||'');r.onerror=rej;r.readAsDataURL(blob);});}
function b64Blob(b64,tipo){const bin=atob(b64);const u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);return new Blob([u],{type:tipo||'application/octet-stream'});}
async function exportBackup(pid){
  closeMenu();
  const p=projReg.projetos.find(x=>x.id===(pid||projReg.ativo));if(!p)return;
  let data;
  if(p.id===projReg.ativo){saveDB();data=db;}
  else{try{data=JSON.parse(localStorage.getItem(projKey(p.id))||'{"disciplinas":[]}');}catch(e){data={disciplinas:[]};}}
  const fids=[];
  data.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>fids.push(x.fid))))));
  const arquivos=[];
  for(const fid of fids){
    try{const r=await fGet(fid);if(r&&r.blob)arquivos.push({fid,nome:r.nome,tipo:r.tipo,b64:await blobB64(r.blob)});}catch(e){}
  }
  const out={formato:'prometeu-backup',versao:2,exportadoEm:new Date().toISOString(),projeto:{ano:p.ano,instituicao:p.instituicao},db:data,arquivos};
  const blob=new Blob([JSON.stringify(out)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download=('prometeu-'+(p.ano||'projeto')+(p.instituicao?'-'+p.instituicao:'')).toLowerCase().replace(/[^a-z0-9à-ú]+/gi,'-').slice(0,60)+'.json';
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),4000);
  showToast('<b>Backup exportado.</b> Guarde o arquivo .json em local seguro (Drive, pen-drive…).',6000);
}
function importBackupPick(){closeMenu();document.getElementById('bk-file').click();}
async function importBackup(input){
  const f=input.files&&input.files[0];input.value='';if(!f)return;
  let j;try{j=JSON.parse(await f.text());}catch(e){alert('Arquivo inválido.');return;}
  if(!j||j.formato!=='prometeu-backup'||!j.db||!Array.isArray(j.db.disciplinas)){alert('Este arquivo não é um backup do Organizador de Aulas.');return;}
  // regrava anexos com ids novos (evita conflito com arquivos já existentes)
  const mapa={};
  for(const arq of (j.arquivos||[])){
    const nf=nid();mapa[arq.fid]=nf;
    try{await fPut({fid:nf,nome:arq.nome||'arquivo',tipo:arq.tipo||'',blob:b64Blob(arq.b64||'',arq.tipo)});}catch(e){}
  }
  j.db.disciplinas.forEach(d=>d.aulas.forEach(a=>a.caps.forEach(c=>c.videos.forEach(v=>(v.arquivos||[]).forEach(x=>{if(mapa[x.fid])x.fid=mapa[x.fid];})))));
  saveDB();
  const id=nid();
  try{localStorage.setItem(projKey(id),JSON.stringify(j.db));}catch(e){alert('Sem espaço no navegador para importar este projeto.');return;}
  projReg.projetos.push({id,ano:(j.projeto&&j.projeto.ano)||'?',instituicao:(j.projeto&&j.projeto.instituicao)||'',criadoEm:Date.now()});
  projReg.ativo=id;saveProjects();
  loadDB();refreshProjUI();renderDiscs();showScreen('s-main');
  showToast('<b>Projeto importado</b> e colocado em uso.',6000);
}

/* ===== Menu lateral (drawer) ===== */
function openMenu(){refreshProjUI();document.getElementById('drawer').classList.add('open');document.getElementById('drawer-ov').classList.add('open');}
function closeMenu(){document.getElementById('drawer').classList.remove('open');document.getElementById('drawer-ov').classList.remove('open');}

/* ===== Modal de informações (Ajuda) ===== */
function openInfo(title,html){closeMenu();document.getElementById('im-title').textContent=title;document.getElementById('im-body').innerHTML=html;document.getElementById('imodal').classList.add('open');paintIcons();}
function closeInfo(){document.getElementById('imodal').classList.remove('open');}
function showVersao(){
  openInfo('Versão',`
    <div><b>Organizador de Aulas — Prometeu</b></div>
    <div>Versão ${APP_VERSION} · ${APP_DATE}</div>
    <div>App 100% offline: os dados ficam guardados neste navegador/aparelho — nada é enviado para a internet.</div>
    <div>Projetos guardados: <b>${projReg.projetos.length}</b> · Matérias no projeto atual: <b>${db.disciplinas.length}</b></div>`);
}
function showAtualizacao(){
  openInfo('Atualização',`
    <div>O app funciona sem internet; uma atualização só chega quando você recebe uma <b>versão nova</b> do arquivo ou do site.</div>
    <div><b>Versão instalada como app (PWA):</b> toque em “Verificar atualização agora”. Se houver versão nova no site, ela é baixada e aplicada ao fechar e reabrir o app.</div>
    <div><b>Versão em arquivo único (prometeu.html):</b> basta substituir o arquivo antigo pelo novo. Os dados <b>não se perdem</b> — eles ficam no navegador, não dentro do arquivo.</div>
    <div><b>Dica:</b> antes de atualizar, exporte um backup (☰ → Arquivo → Exportar backup).</div>
    <button class="btn-pri" onclick="checarAtualizacao()"><i class="ti ti-refresh" aria-hidden="true"></i> Verificar atualização agora</button>`);
}
async function checarAtualizacao(){
  if(!('serviceWorker' in navigator)||!location.protocol.startsWith('http')){
    alert('Esta cópia roda como arquivo único: para atualizar, substitua o prometeu.html por uma versão mais nova. Seus dados não se perdem.');return;
  }
  try{
    const reg=await navigator.serviceWorker.getRegistration();
    if(reg){await reg.update();alert('Verificação concluída. Se houver versão nova, feche e reabra o app para aplicar.');}
    else alert('O app ainda não está instalado como PWA neste navegador.');
  }catch(e){alert('Não foi possível verificar agora (sem internet?).');}
}

/* ===== Tutorial ===== */
const TUT=[
{ic:'ti-book-2',t:'Visão geral',c:`
<p>O <b>Organizador de Aulas</b> organiza suas aulas em vídeo em 5 níveis, do geral para o específico:</p>
<div class="tut-fig"><svg width="200" height="214" viewBox="0 0 200 214" fill="none" stroke="currentColor" stroke-width="1.5" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="3" width="100" height="26" rx="5"/><text x="100" y="20" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">MATÉRIA</text><path d="M100 29v9"/><path d="M96 34l4 5 4-5"/><rect x="50" y="48" width="100" height="26" rx="5"/><text x="100" y="65" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">SÉRIE / ANO</text><path d="M100 74v9"/><path d="M96 79l4 5 4-5"/><rect x="50" y="93" width="100" height="26" rx="5"/><text x="100" y="110" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">AULA</text><path d="M100 119v9"/><path d="M96 124l4 5 4-5"/><rect x="50" y="138" width="100" height="26" rx="5"/><text x="100" y="155" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">CAPÍTULO</text><path d="M100 164v9"/><path d="M96 169l4 5 4-5"/><rect x="50" y="183" width="100" height="26" rx="5"/><text x="100" y="200" text-anchor="middle" fill="currentColor" stroke="none" font-size="10">VÍDEO</text></svg></div>
<p>Exemplo: <b>HISTÓRIA</b> → <b>2° ano EM</b> → <b>Aula 12 (Revolução Francesa)</b> → <b>Cap. 01</b> → <b>vídeo do YouTube</b>.</p>
<p>Tudo funciona <b>sem internet</b> e é salvo automaticamente no aparelho a cada alteração.</p>`},
{ic:'ti-archive',t:'Projetos — anos letivos',c:`
<p>Cada <b>projeto</b> guarda um ano letivo completo (Ano + Instituição), com todas as matérias, aulas e documentos.</p>
<div class="tut-fig"><svg width="250" height="92" viewBox="0 0 250 92" fill="none" stroke="currentColor" stroke-width="1.5"><g opacity="0.4"><rect x="6" y="16" width="108" height="62" rx="7"/><path d="M6 32h108"/><text x="60" y="56" text-anchor="middle" fill="currentColor" stroke="none" font-size="13">2025</text><text x="60" y="70" text-anchor="middle" fill="currentColor" stroke="none" font-size="7">ARQUIVADO</text></g><rect x="136" y="10" width="108" height="70" rx="7"/><path d="M136 27h108"/><text x="190" y="53" text-anchor="middle" fill="currentColor" stroke="none" font-size="13">2026</text><text x="190" y="68" text-anchor="middle" fill="currentColor" stroke="none" font-size="7">EM USO ●</text></svg></div>
<ul>
<li><b>Criar:</b> menu ☰ → <b>Criar novo projeto</b> → preencha <b>Ano</b> e <b>Instituição</b>. O projeto novo começa vazio e vira o projeto em uso.</li>
<li><b>Arquivar:</b> nada se perde — o ano anterior fica guardado na lista de projetos.</li>
<li><b>Trocar:</b> toque na barra do ano letivo (na tela inicial) ou em ☰ → <b>Gerenciar projetos</b> e escolha o projeto.</li>
<li><b>Guardar fora do aparelho:</b> use <b>Exportar backup</b> (seção Backup, mais abaixo).</li>
</ul>`},
{ic:'ti-books',t:'Matérias e séries',c:`
<p>A tela inicial lista as <b>matérias</b>. Dentro de uma matéria ficam as <b>séries/anos</b> (ex.: 1°, 2° e 3° ano).</p>
<ul>
<li><b>Nova matéria:</b> botão grande no rodapé da tela inicial.</li>
<li><b>Nova série:</b> abra a matéria e toque em <b>Nova série/ano</b>.</li>
<li>Na série, o botão com a <b>setinha (nº de aulas)</b> abre a árvore resumida das aulas.</li>
<li>O ícone de <b>relatório</b> na série gera um documento Word/PDF com toda a estrutura.</li>
<li>Os ícones de <b>lápis</b> e <b>lixeira</b> editam e removem cada item.</li>
</ul>`},
{ic:'ti-player-play',t:'Aulas e capítulos',c:`
<p>Dentro da série ficam as <b>aulas</b> (numeradas automaticamente) e, dentro de cada aula, os <b>capítulos</b>.</p>
<div class="tut-fig"><svg width="250" height="76" viewBox="0 0 250 76" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="242" height="28" rx="6"/><rect x="14" y="13" width="14" height="14" rx="3"/><path d="M17 20l3 3 6-6"/><text x="40" y="24" fill="currentColor" stroke="none" font-size="9">Cap. 01 — caixinha marcada = ● A MINISTRAR</text><g opacity="0.55"><rect x="4" y="42" width="242" height="28" rx="6"/><rect x="14" y="49" width="14" height="14" rx="3"/><text x="40" y="60" fill="currentColor" stroke="none" font-size="9">Cap. 02 — caixinha vazia = ✓ já ministrado</text></g></svg></div>
<ul>
<li>A <b>caixinha</b> do capítulo controla a pendência: marcada = ainda falta dar essa aula; vazia = já ministrada. Os contadores “● a ministrar” sobem para aula, série e matéria.</li>
<li>Os <b>chips CP1…CP11</b> acendem quando o capítulo tem conteúdo; tocar num chip aceso rola até o capítulo.</li>
<li><b>Observações:</b> cada capítulo tem uma janelinha “Observações” (recolhida por padrão) para anotações livres — lembretes, tarefas, páginas do livro. O ponto ● indica que há texto salvo.</li>
</ul>`},
{ic:'ti-video-off',t:'Vídeos',c:`
<p>Dentro do capítulo, toque em <b>Adicionar vídeo</b>. No formulário você pode:</p>
<ul>
<li><b>Nome</b> do vídeo (obrigatório).</li>
<li><b>Link do YouTube:</b> ao colar, o app tenta buscar o título sozinho (precisa de internet só nessa hora). Sem link, o botão de lupa procura o vídeo pelo nome no YouTube.</li>
<li><b>Duração</b> (MM:SS ou H:MM:SS) — alimenta os totais de aula, série e matéria.</li>
<li><b>Resumo</b> de até ≈3 páginas, com exportação em <b>Word (.doc)</b> ou <b>PDF</b>.</li>
</ul>
<p>Na lista, o <b>▶</b> abre o link do vídeo e os ícones ao lado do tempo mostram se há resumo, materiais ou documentos anexados.</p>`},
{ic:'ti-paperclip',t:'Material didático e documentos',c:`
<p>No formulário do vídeo, a seção <b>“Material didático e documentos”</b> fica recolhida — toque nela para expandir.</p>
<div class="tut-fig"><svg width="250" height="82" viewBox="0 0 250 82" fill="none" stroke="currentColor" stroke-width="1.5"><g transform="translate(10,16) scale(1.9)"><path d="M15 7l-6.5 6.5a1.5 1.5 0 0 0 3 3l6.5-6.5a3 3 0 0 0-6-6l-6.5 6.5a4.5 4.5 0 0 0 9 9l6.5-6.5"/></g><rect x="82" y="12" width="44" height="58" rx="5"/><text x="104" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">PDF</text><rect x="142" y="12" width="44" height="58" rx="5"/><circle cx="156" cy="30" r="5"/><path d="M144 62l12-14 8 8 6-6 14 12"/><rect x="202" y="12" width="44" height="58" rx="5"/><text x="224" y="45" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">DOC</text></svg></div>
<ul>
<li><b>Materiais citados:</b> lista simples de título + autor/editora/link (livros citados no vídeo).</li>
<li><b>Documentos anexados:</b> toque em <b>Importar PDF, imagem ou Word</b> para guardar até <b>10 arquivos por vídeo</b> (até 15 MB cada) dentro do próprio app.</li>
<li>Cada documento tem <b>Título</b> e <b>Autor</b> editáveis.</li>
<li>O <b>olhinho</b> abre PDFs e imagens na hora; arquivos Word são baixados para abrir no editor do aparelho.</li>
<li>Os anexos entram no backup do projeto e saem nos relatórios.</li>
</ul>`},
{ic:'ti-palette',t:'Temas',c:`
<p>O botão no canto superior direito alterna entre os 5 temas — a preferência fica salva:</p>
<ol>
<li><b>Claro</b> — fundo bege, vermelho terracota.</li>
<li><b>Escuro</b> — preto OLED com néon branco.</li>
<li><b>Prometeu</b> — HUD sci-fi ciano (assinatura do app).</li>
<li><b>P. Vermelho</b> e <b>P. Azul</b> — variações do Prometeu.</li>
</ol>`},
{ic:'ti-report',t:'Relatórios e exportações',c:`
<ul>
<li><b>Relatório da série:</b> ícone de relatório no cartão da série → Word ou PDF com aulas, capítulos, vídeos, links, observações, pendências e documentos.</li>
<li><b>Resumo do vídeo:</b> dentro do formulário do vídeo → Word ou PDF com o texto do resumo, material didático e anexos.</li>
<li>Para PDF, o navegador abre a tela de impressão: escolha <b>“Salvar como PDF”</b>.</li>
</ul>`},
{ic:'ti-shield',t:'Backup e segurança dos dados',c:`
<p>Os dados moram <b>no navegador deste aparelho</b>. Se o app for desinstalado ou os dados do navegador forem limpos, eles se vão — por isso exporte backups:</p>
<ul>
<li><b>Exportar:</b> ☰ → Arquivo → <b>Exportar backup (.json)</b> — gera um arquivo com o projeto inteiro, anexos incluídos. Guarde no Drive, e-mail ou pen-drive.</li>
<li><b>Importar:</b> ☰ → Arquivo → <b>Importar backup (.json)</b> — recria o projeto em qualquer aparelho.</li>
<li>Sugestão: exporte ao fim de cada bimestre e antes de atualizar o app.</li>
</ul>`},
{ic:'ti-device-tablet',t:'No tablet Samsung (Galaxy Tab S)',c:`
<p>O app foi ajustado para tablets — tela cheia, <b>tela dividida</b> e <b>exibição pop-up</b> do One UI:</p>
<div class="tut-fig"><svg width="260" height="100" viewBox="0 0 260 100" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="6" width="252" height="88" rx="10"/><path d="M130 6v88" stroke-dasharray="4 4"/><text x="67" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">ORGANIZADOR</text><text x="67" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">DE AULAS</text><text x="193" y="46" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">YOUTUBE /</text><text x="193" y="60" text-anchor="middle" fill="currentColor" stroke="none" font-size="9">ANOTAÇÕES</text><circle cx="130" cy="50" r="6" fill="currentColor" stroke="none" opacity="0.7"/></svg></div>
<ul>
<li><b>Instalar:</b> abra o site no Chrome → menu ⋮ → <b>“Instalar aplicativo”</b> (ou “Adicionar à tela inicial”). O app passa a abrir em janela própria, sem barra do navegador.</li>
<li><b>Tela dividida:</b> toque em <b>Recentes</b> (botão ▯|▯ ou gesto), toque no <b>ícone do app</b> no topo do cartão → <b>“Abrir em visualização em tela dividida”</b> → escolha o segundo app (ex.: YouTube). A divisória central ajusta o tamanho.</li>
<li><b>Exibição pop-up:</b> em Recentes, toque no ícone do app → <b>“Abrir em exibição pop-up”</b> — o app vira uma janelinha flutuante sobre outro app.</li>
<li>O layout se reorganiza sozinho em qualquer tamanho de janela; a caneta S Pen funciona em todos os campos.</li>
</ul>`},
{ic:'ti-help',t:'Atualização e versão',c:`
<ul>
<li><b>☰ → Ajuda → Atualização:</b> explica como atualizar cada versão (PWA ou arquivo único) e verifica se há versão nova.</li>
<li><b>☰ → Ajuda → Versão:</b> mostra a versão instalada e um resumo dos dados guardados.</li>
</ul>`}
];
const TUTORIAL_HTML=TUT.map((s,i)=>`
  <div class="tut-sec">
    <button class="tut-t${i===0?' open':''}" id="tut-t-${i}" onclick="toggleTut(${i})" aria-expanded="${i===0}">
      <i class="ti ${s.ic} tic" aria-hidden="true"></i><span>${i+1}. ${s.t}</span><i class="ti ti-chevron-down chev" aria-hidden="true"></i>
    </button>
    <div class="tree-wrap${i===0?' open':''}" id="tut-w-${i}"><div class="tree-inner"><div class="tut-c">${s.c}</div></div></div>
  </div>`).join('');
function openTutorial(){
  closeMenu();
  const b=document.getElementById('tut-body');
  if(!b.dataset.ok){b.innerHTML=TUTORIAL_HTML;b.dataset.ok='1';paintIcons();}
  showScreen('s-tut');
}
function toggleTut(i){
  const w=document.getElementById('tut-w-'+i),t=document.getElementById('tut-t-'+i);
  if(!w)return;
  const o=!w.classList.contains('open');
  w.classList.toggle('open',o);
  if(t){t.classList.toggle('open',o);t.setAttribute('aria-expanded',o);}
}

/* ===== Inicialização ===== */
loadProjects();
loadDB();
themeIdx=loadTheme();
renderDiscs();
applyThemeUI(THEMES[themeIdx]);
refreshProjUI();
const _dv=document.getElementById('dw-ver');if(_dv)_dv.textContent='Prometeu · v'+APP_VERSION;
paintIcons();
setTimeout(()=>sweepOrphans().catch(()=>{}),1600); // faxina de anexos órfãos, sem travar a abertura

/* ===== PWA: registra o service worker (só quando servido via http/https) ===== */
if('serviceWorker' in navigator && location.protocol.startsWith('http')){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('service-worker.js').catch(()=>{});
  });
}
