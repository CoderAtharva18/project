let hero = document.getElementById('hero');
let images = 
[
    'images/1.avif',
    'images/4.jpg',
    'images/2.jpg',
    'images/1.jpg',
    'images/3.jpg'
];

let i = 0;
hero.style.backgroundImage = `url('${images[i]}')`;

let slideshow=setInterval(()=>
{
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url('${images[i]}')`;
}, 5000); 

document.getElementById('home').addEventListener('click', () => {
  location.reload();
});



document.getElementById('action').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <div class="content">
  <h2>Action Taken for Wildlife Conservation</h2>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>National Wildlife Action Plan (2017-2031)
India’s 3rd Wildlife Action Plan — a roadmap for wildlife conservation that covers climate change, habitat protection, recovery of threatened species, human-wildlife conflict, etc</p>
      <p><a href="https://v1.wii.gov.in/wap_2017?utm_source=chatgpt.com" target="_blank">https://v1.wii.gov.in/</a></p>
    </div>
    <div>
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p> Integrated Development of Wildlife Habitats (Centrally Sponsored Scheme, MoEFCC)
Supports Protected Areas (National Parks, Sanctuaries, etc.) and focuses on human-wildlife conflict, recovery of endangered species, and habitat management.</p>
      <p><a href="https://www.moef.gov.in/index.php/wildlife-wl?utm_source=chatgpt.com" target="_blank">https://www.moef.gov.in/index.php/wildlife</a></p>
    </div>
    <div>
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>Project Elephant
Protects elephants and their habitats. Works on reducing human-elephant conflict, preserving migration corridors, providing veterinary care, and preventing poaching</p>
      <p><a href="https://en.wikipedia.org/wiki/Project_Elephant?utm_source=chatgpt.com" target="_blank">https://en.wikipedia.org/wiki/Project_Elephant</a></p>
    </div>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>Project Tiger
Major program to conserve Bengal tigers by creating tiger reserves, preventing poaching, and conducting scientific research</p>
      <p><a href="https://en.wikipedia.org/wiki/Project_Tiger?utm_source=chatgpt.com" target="_blank">https://en.wikipedia.org/wiki/Project_Tiger</a></p>
    </div>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>Project Dolphin
Aims to conserve river and marine dolphins. Involves local communities, prevents poaching, and spreads awareness.</p>
      <p><a href="https://en.wikipedia.org/wiki/Project_Dolphin_%28India%29?utm_source=chatgpt.com" target="_blank">https://en.wikipedia.org/wiki/Project_Dolphin</a></p>
    </div>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>Action Plan for Introduction of Cheetah in India
Focuses on reintroducing cheetahs into Kuno National Park, including habitat preparation, monitoring, and tracking.</p>
      <p><a href="https://v1.wii.gov.in/cheeta_introduction?utm_source=chatgpt.com" target="_blank">https://v1.wii.gov.in/cheeta</a></p>
    </div>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>Action Plan for Vulture Conservation (2020-2025)
Works to protect vulture populations by regulating harmful drugs, creating rescue centers, and conservation breeding.</p>
      <p><a href="https://moef.gov.in/wildlife-wl?utm_source=chatgpt.com" target="_blank">https://moef.gov.in/wildlife</a></p>
    </div>
    <div >
    <img src="images/4.jpg" alt="Conservation Efforts" style="max-width: 100px; height: auto; margin-top: 10px;">
      <p>World Wide Fund for Nature – India (WWF-India)
One of the largest conservation organizations working in India since 1969. WWF-India focuses on protecting endangered species (like tigers, elephants, rhinos, river dolphins), restoring habitats, combating illegal wildlife trade, and promoting sustainable development.</p>
      <p><a href="http://www.wwfindia.org/?utm_source=chatgpt.com" target="_blank">http://www.wwfindia.org/</a></p>
    </div>
    <div>
  `;

  hero.style.backgroundImage = ' none';

});






document.getElementById('about').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <div class="content">
  <div>
  <h2>🦁 About Us – Wildlife Atlas</h2><br>
    <div >
      <p>At Wildlife Atlas, we are dedicated to exploring, documenting, and protecting the incredible diversity of life that shares our planet. Our mission is to create a comprehensive, accessible, and educational resource for anyone passionate about wildlife — from students and researchers to nature enthusiasts and conservationists.</p>
    </div><br><br><br>
    <div>
  <h2>🌍 Our Vision</h2>
  <br>
    <div >
      <p >To become a global platform that inspires awareness, understanding, and action for the preservation of the natural world. We envision a future where humans and wildlife coexist in balance and harmony, supported by knowledge, compassion, and sustainable practices.</p>
    </div><br><br><br>
    <div>
  <h2>🐾 Our Mission</h2><br>
      <ul>
      <li>To document and catalog wildlife species across the globe, from the most common to the most critically endangered.</li><br>
      <li>To educate and engage the public about the importance of biodiversity and ecosystems.</li><br>
      <li>To support conservation efforts through reliable data, research collaborations, and awareness campaigns.</li><br>
      <li>To bridge the gap between science and society by presenting wildlife information in a clear and engaging way.</li>
      </ul>
    </div>
    <div>
  `;

  hero.style.backgroundImage = 'none';

});

document.getElementById('home').addEventListener('click', () => {
  return slideshow;
});


document.getElementById('species3').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Critically Endangered Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/13.jpg">
        <DIV class="desc">
            <h3> Javan Rhino (Rhinoceros sondaicus)</h3>
            <p><b>Habitat:</b> Tropical rainforests and tropical moist lowland forests.<br>

<b>Lifespan :</b> Up to 30–40 years in the wild.<br>

<b>Conservation Actions :</b> Strict protection within Ujung Kulon National Park, Indonesia.

Monitoring and anti-poaching patrols.

Research on potential translocation to establish new populations.<br>


<b>Location :</b> Ujung Kulon National Park, Java, Indonesia.</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/14.jpg">
        <DIV class="desc">
            <h3>Vaquita (Phocoena sinus)</h3>
            <p><b>Habitat:</b>Northern part of the Gulf of California, Mexico. <br>

<b>Lifespan :Approximately 20 years.
<br>

<b>Conservation Actions :</b>Ban on gillnet fishing in the vaquita's habitat.

Use of acoustic monitoring to track population.

Efforts to remove illegal gillnets from the wild.
 <br>


<b>Location :</b>Northern Gulf of California, Mexico.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/11.jpg" >
        <DIV class="desc">
            <h3>Yangtze Giant Softshell Turtle (Rafetus swinhoei)
</h3>
            <p><b>Habitat:</b> Freshwater lakes and rivers with soft, sandy bottoms.
 <br>

<b>Lifespan :</b>Up to 100 years.
<br>

<b>Conservation Actions :</b> 
Captive breeding programs in China and Vietnam.

Efforts to protect remaining wild habitats.
<br>


<b>Location :</b>Dong Mo Lake, Vietnam; Suzhou Zoo, China.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/10.jpeg" >
        <DIV class="desc">
            <h3>Sumatran Orangutan (Pongo abelii)
</h3>
            <p><b>Habitat:</b>Tropical rainforests of Sumatra, Indonesia.
 <br>

<b>Lifespan :</b>Up to 50 years in the wild.
<br>

<b>Conservation Actions :</b>
Habitat restoration and protection.

Anti-poaching measures.

Community education programs. <br>


<b>Location :</b>Sumatra, Indonesia.</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/8.jpeg">
        <DIV class="desc">
            <h3>Amur Leopard (Panthera pardus orientalis)
</h3>
            <p><b>Habitat:</b>Temperate forests and woodlands.
 <br>

<b>Lifespan :</b>Up to 15 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of protected areas like the Land of the Leopard National Park.

Monitoring and anti-poaching patrols.

Prey species restoration.
 <br>


<b>Location :</b> Russian Far East and northeastern China.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/12.jpg" >
        <DIV class="desc">
            <h3>Kakapo (Strigops habroptilus)
</h3>
            <p><b>Habitat:</b>Mature forests and scrublands.
 <br>

<b>Lifespan :</b>Up to 60 years.
<br>

<b>Conservation Actions :</b>
Captive breeding and intensive management.

Predator-free islands for reintroduction.
 <br>


<b>Location :</b>Predator-free islands in New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/5.jpg">
        <DIV class="desc">
            <h3>Yangtze Finless Porpoise (Neophocaena asiaeorientalis)</h3>
            <p><b>Habitat:</b> Freshwater and brackish waters of the Yangtze River.<br>

<b>Lifespan : </b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Reduction of water pollution.

Monitoring and research programs.<br>


<b>Location :</b>Yangtze River, China.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/9.jpeg" >
        <DIV class="desc">
            <h3>Critically Endangered Species in India

</h3>
            <p><b>Habitat:</b>  Grasslands and freshwater wetlands.

<br>

<b>Lifespan :Lesser Florican: Up to 5 years.
<br>

<b>Conservation Actions :</b> 
Designation of conservation reserves.

Habitat restoration and protection.

Community engagement and awareness programs.
<br>


<b>Location :</b>Rajasthan grasslands; Polavaram forest range, Andhra Pradesh.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/7.jpeg" >
        <DIV class="desc">
            <h3>Yellow-Crested Cockatoo (Cacatua sulphurea)
</h3>
            <p><b>Habitat:</b>Lowland forests and forest edges.
 <br>

<b>Lifespan :</b> Up to 40 years<br>

<b>Conservation Actions :</b> Captive breeding programs.

Habitat protection and restoration.

Combating illegal trade.
<br>


<b>Location :</b> Indonesia and East Timor.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/6.jpeg" alt="">
        <DIV class="desc">
            <h3> Partula Snail (Partula tohiveana)
</h3>
            <p><b>Habitat:</b>  Tropical forests and shrublands.
<br>

<b>Lifespan : </b> Up to 5 years.
<br>

<b>Conservation Actions :</b> Captive breeding and reintroduction programs.

Habitat restoration.

Control of invasive species.
<br>


<b>Location :</b>French Polynesia.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});


document.getElementById('species4').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Endangered Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/6.jpeg" alt="">
        <DIV class="desc">
            <h3> Mountain Gorilla (Gorilla beringei beringei)
</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/42.jpg" alt="">
        <DIV class="desc">
            <h3>Asian Elephant (Elephas maximus)
</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/21.jpg" alt="">
        <DIV class="desc">
            <h3> Green Sea Turtle (Chelonia mydas)
</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/45.jpg" alt="">
        <DIV class="desc">
            <h3>Hector's Dolphin (Cephalorhynchus hectori)
</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/31.jpg" alt="">
        <DIV class="desc">
            <h3>Asian Wild Dog (Cuon alpinus)
</h3>
            <p><b>Habitat:</b>Forests, grasslands, and scrublands.
 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/4.jpg" alt="">
        <DIV class="desc">
            <h3>Olive Ridley Sea Turtle (Lepidochelys olivacea)
</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/21.jpg" alt="">
        <DIV class="desc">
            <h3>Pygmy Hippopotamus (Choeropsis liberiensis)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/4.jpg" alt="">
        <DIV class="desc">
            <h3>Sunda Pangolin (Manis javanica)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/54.jpg" alt="">
        <DIV class="desc">
            <h3>Yellow-eyed Penguin (Megadyptes antipodes)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/4.jpg" alt="">
        <DIV class="desc">
            <h3>West Indian Manatee (Trichechus manatus)
</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});

document.getElementById('species8').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Daata deficient Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/52.jpg" alt="">
        <DIV class="desc">
            <h3> Gansu Shrew (Sorex cansulus)

</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/16.jpg" alt="">
        <DIV class="desc">
            <h3>Silverstoneia gutturalis (a frog)

</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/27.jpg" alt="">
        <DIV class="desc">
            <h3> Brookesia lambertoni (Fito Leaf Chameleon)

</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/18.jpg" alt="">
        <DIV class="desc">
            <h3>Furcifer tuzetae

</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/39.jpg" alt="">
        <DIV class="desc">
            <h3>Eumops delticus (a free-tailed bat)

</h3>
            <p><b>Habitat:</b>Forests, grasslands, and scrublands.
 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/20.jpg" alt="">
        <DIV class="desc">
            <h3>Mauremys glyphistoma (a hybrid turtle)

</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/36.jpg" alt="">
        <DIV class="desc">
            <h3>Mauremys pritchardi

</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/42.jpg" alt="">
        <DIV class="desc">
            <h3>Vietnam Mouse-Deer (Tragulus versicolor)

</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/23.jpg" alt="">
        <DIV class="desc">
            <h3>Fito Leaf Chameleon (Brookesia lambertoni)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/24.jpg" alt="">
        <DIV class="desc">
            <h3>Khavalchor Catfish (Neotropius khavalchor)

</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});

document.getElementById('species9').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Not Evaluated Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/21.jpg" alt="">
        <DIV class="desc">
            <h3> Bengal Tiger (Panthera tigris tigris)

</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/24.jpg" alt="">
        <DIV class="desc">
            <h3>Asiatic Elephant (Elephas maximus)

</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/41.jpg" alt="">
        <DIV class="desc">
            <h3> Snow Leopard (Panthera uncia)

</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/34.jpg" alt="">
        <DIV class="desc">
            <h3>One‐Horned Rhinoceros (Rhinoceros unicornis)
</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/31.jpg" alt="">
        <DIV class="desc">
            <h3>Asian Wild Dog (Cuon alpinus)
</h3>
            <p><b>Habitat:</b>Sloth Bear (Melursus ursinus)

 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/24.jpg" alt="">
        <DIV class="desc">
            <h3>Red Panda (Ailurus fulgens)

</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/21.jpg" alt="">
        <DIV class="desc">
            <h3>Indian Leopard (Panthera pardus fusca)

</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/44.jpg" alt="">
        <DIV class="desc">
            <h3>Dhole (Cuon alpinus) (Indian wild dog)

</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/51.jpg" alt="">
        <DIV class="desc">
            <h3>Lion-tailed Macaque (Macaca silenus)

</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/24.jpg" alt="">
        <DIV class="desc">
            <h3>Gorilla (Gorilla spp.)

</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});

document.getElementById('species6').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Near threadened Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/35.jpg" alt="">
        <DIV class="desc">
            <h3>Jaguar (Panthera onca)
</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/36.jpg" alt="">
        <DIV class="desc">
            <h3>Asian Elephant (Elephas maximus)
</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/37.jpg" alt="">
        <DIV class="desc">
            <h3> Giraffe (Giraffa camelopardalis)
</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/38.jpg" alt="">
        <DIV class="desc">
            <h3>Snow Leopard (Panthera uncia)
</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/39.jpg" alt="">
        <DIV class="desc">
            <h3>Hippopotamus (Hippopotamus amphibius)
</h3>
            <p><b>Habitat:</b>Forests, grasslands, and scrublands.
 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/40.jpg" alt="">
        <DIV class="desc">
            <h3>King Cobra (Ophiophagus hannah)
</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/41.jpg" alt="">
        <DIV class="desc">
            <h3>Blue Whale (Balaenoptera musculus)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/42.jpg" alt="">
        <DIV class="desc">
            <h3>Sunda Pangolin (Manis javanica)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/43.jpg" alt="">
        <DIV class="desc">
            <h3>Giant Anteater (Myrmecophaga tridactyla)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/44.jpg" alt="">
        <DIV class="desc">
            <h3>Mandrill (Mandrillus sphinx)
</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});


document.getElementById('species7').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Least concern Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/45.jpg" alt="">
        <DIV class="desc">
            <h3> Red Fox (Vulpes vulpes)
</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/46.jpg" alt="">
        <DIV class="desc">
            <h3>Rock Pigeon (Columba livia)
</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/47.jpg" alt="">
        <DIV class="desc">
            <h3> House Sparrow (Passer domesticus)
</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/48.jpg" alt="">
        <DIV class="desc">
            <h3>Gray Squirrel (Sciurus carolinensis)
</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/49.jpg" alt="">
        <DIV class="desc">
            <h3>Brown Rat (Rattus norvegicus)
</h3>
            <p><b>Habitat:</b>Forests, grasslands, and scrublands.
 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/50.jpg" alt="">
        <DIV class="desc">
            <h3>European Rabbit (Oryctolagus cuniculus)
</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/51.jpg" alt="">
        <DIV class="desc">
            <h3>Mallard Duck (Anas platyrhynchos)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/52.jpg" alt="">
        <DIV class="desc">
            <h3>Meerkat (Suricata suricatta)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/53.jpg" alt="">
        <DIV class="desc">
            <h3>Brown Bear (Ursus arctos)
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/54.jpg" alt="">
        <DIV class="desc">
            <h3>Common Toad (Bufo bufo)
</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});


document.getElementById('species').addEventListener('click', () => {

  clearInterval(slideshow);

  hero.innerHTML = `
  <h1 >Extinct Species</h1>
   <div id="card">
     <div class="casd">
        <img src="images/25.jpg" alt="">
        <DIV class="desc">
            <h3> Kihansi Spray Toad — Nectophrynoides asperginis
</h3>
            <p><b>Habitat:</b>Montane forests in the Virunga Mountains and Bwindi Impenetrable Forest<br>

<b>Lifespan :</b> Up to 35–40 years in the wild.
<br>

<b>Conservation Actions :</b> Establishment of protected areas like Volcanoes National Park and Bwindi Impenetrable Forest.

Community-based conservation programs.

Ecotourism initiatives to generate revenue for conservation.
<br>


<b>Location :</b>Uganda, Rwanda, and the Democratic Republic of Congo </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/26.jpg" alt="">
        <DIV class="desc">
            <h3>Spix's Macaw — Cyanopsitta spixii
</h3>
            <p><b>Habitat:</b>Tropical and subtropical forests, grasslands, and savannas.
 <br>

<b>Lifespan :</b> Up to 60 years in the wild.
<br>

<b>Conservation Actions :</b>
Establishment of wildlife corridors to reduce human-elephant conflict.

Anti-poaching patrols and habitat restoration.

Community engagement and awareness programs.
 <br>


<b>Location :</b> India, Sri Lanka, Thailand, and Southeast Asia.
 </p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/27.jpg" alt="">
        <DIV class="desc">
            <h3> Père David's Deer (Milu) — Elaphurus davidianus
</h3>
            <p><b>Habitat:</b> Warm coastal waters, including coral reefs and seagrass beds.
<br>

<b>Lifespan :</b>Up to 80 years.
<br>

<b>Conservation Actions :</b> Protection of nesting sites and hatcheries.

Reduction of bycatch through the use of turtle excluder devices.

Public education and awareness campaigns.
<br>


<b>Location :</b>Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/28.jpg" alt="">
        <DIV class="desc">
            <h3>Christmas Island Blue-tailed Skink — Cryptoblepharus egeriae
</h3>
            <p><b>Habitat:</b> Coastal waters around New Zealand.
<br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of marine protected areas.

Monitoring of population and health.

Regulation of fishing activities to reduce bycatch.
<br>


<b>Location :</b>Coastal waters of New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/29.jpg" alt="">
        <DIV class="desc">
            <h3>Christmas Island Lister's Gecko — Lepidodactylus listeri
</h3>
            <p><b>Habitat:</b>Forests, grasslands, and scrublands.
 <br>

<b>Lifespan :</b>Up to 10 years in the wild.
<br>

<b>Conservation Actions :</b>Protection of habitats and prey species.

Anti-poaching measures and monitoring.

Community engagement and education programs.
 <br>


<b>Location :</b>Southeast Asia, including India, China, and Southeast Asia</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/30.jpg" alt="">
        <DIV class="desc">
            <h3>Hoan Kiem / Swinhoe's Softshell Turtle
</h3>
            <p><b>Habitat:</b> Warm coastal waters and beaches.
<br>

<b>Lifespan :</b>Up to 50 years.
<br>

<b>Conservation Actions :</b>
Protection of nesting sites and hatcheries.

Use of turtle excluder devices in fishing nets.

Public awareness and community involvement in conservation efforts.
 <br>


<b>Location :</b> Tropical and subtropical regions worldwide.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/31.jpg" alt="">
        <DIV class="desc">
            <h3>Dabry's Sturgeon / Yangtze Sturgeon
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b>Up to 55 years.
<br>

<b>Conservation Actions :</b>Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
 <br>


<b>Location :</b>Liberia and Sierra Leone.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/32.jpg" alt="">
        <DIV class="desc">
            <h3>Socorro Dove — Zenaida graysoni
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 20 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>Southeast Asia, including Indonesia and Malaysia.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/33.jpg" alt="">
        <DIV class="desc">
            <h3>Guam Kingfisher — Todiramphus cinnamominus
</h3>
            <p><b>Habitat:</b> Swamps and forests in West Africa.
 <br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b>New Zealand.
</p>
        </DIV>
    </div>
    <div class="casd">
        <img src="images/34.jpg" alt="">
        <DIV class="desc">
            <h3>Alagoas Curassow — Mitu mitu
</h3>
            <p><b>Habitat:</b>  Swamps and forests in West Africa.
<br>

<b>Lifespan :</b> Up to 55 years.
<br>

<b>Conservation Actions :</b> Establishment of protected areas.

Anti-poaching measures and habitat restoration.

Research and monitoring of populations.
<br>


<b>Location :</b> Southeastern United States, Caribbean, and Central America.</p>
        </DIV>
    </div>
    </div>
  `;

  hero.style.backgroundImage = 'none';

});