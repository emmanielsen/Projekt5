alert('I coop tager vi corona meget alvorligt og vi følger myndighedernes råd nøje. Du kan på denne side se råd omkring, hvordan du beskytter dig bedst mod corona.');

var collection = [" Undgå at rejse hvis du har feber eller hoste","Hvis du har feber, hoste eller vejrtrækningsproblemer, skal du tidligst muligt søge læge og dele din rejseoplysninger med din sundhedsudbyder","Undggå tæt kontakt med mennesker, der er syge med feber eller hoste"," Rengør hyppigt dine hænder med håndsprit eller vask dem med sæbe og vand","Undgå at røre ved øjne, næse eller mund"," Host altid i albuen i stedet for at bruge hånden og vask hænder efter du har pustet næse"," hvis du vælger at bære en ansigtsmaske, skal man være sikker på den dækker mund og næse","Smid maske ud efter brug og vask hænder efter berøring af masken","Spis kun gennemstegt kød, undgå råt kød","ikke spyt i det offenligte rum","undgå kontakt med syge dyr","Brug forskellige skærebrat og knive til råtkød og andet mad","Vask hænder før og efter berøring af råt kød","Syge dyr må ikke spises","Bliv indendøre og overhold reglerne regeringen har opsat","Hold mindst 2 m afstand til andre mennesker","Man må ikke samles mere end 10 menneske"];

function sentence(){
    var rand = Math.floor(Math.random()*17);
    document.getElementById('change').innerHTML=collection[rand] + ".";
};
