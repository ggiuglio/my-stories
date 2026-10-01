<script lang="ts">
  import TranslationNote from '$lib/components/TranslationNote.svelte';
  const title = "Leopoldos Schwänzchen";
  // const image = "/img/leopoldo.png"; // Uncomment when image is available
</script>

<div class="max-w-4xl mx-auto">
  <div class="sketched-border px-8 pb-8 rule-inset">
    <h1 class="text-4xl font-bold handwritten ruled-title">
      {title} <TranslationNote lang="de" />
    </h1>
    
    <!-- Uncomment when image is available
    <div class="ruled-figure">
      <img 
        src={image} 
        alt={title}
        class="sketched-border"
      />
    </div>
    -->
    
    <div class="prose prose-lg max-w-none prose-ruled">
      <p class="text-lg leading-relaxed">
        Als Leopoldo klein war, hatte er kein Ringelschwänzchen wie die meisten Schweine, sondern ein hübsches Schwänzchen, gerade und glatt. Wenn er wach war, stand das Schwänzchen kerzengerade nach oben (und ab und zu zeigte es auf etwas besonders Leckeres zum Essen), doch sobald er einschlief, plumpste es schlaff auf den Boden wie ein Stück Bindfaden.
      </p>
      
      <p class="text-lg leading-relaxed">
        In Camillos Haus hatte Leopoldo viele geheime Verstecke für ein Nickerchen (wenn man unsichtbar ist, ist es keine gute Idee, auf dem Sofa zu schlafen: Man läuft Gefahr, dass sich mitten in einem Traum jemand auf einen draufsetzt), aber sein Lieblingsplatz war ohne jeden Zweifel der Wäschetrockner.
      </p>
      
      <p class="text-lg leading-relaxed">
        Der Wäschetrockner hat eine schöne runde Trommel, genau richtig gewölbt für den Rücken eines Ferkelchens; er ist immer warm und trocken und duftet oft so herrlich nach frischer Wäsche, dass man darin einschlummert wie in einem frisch bezogenen Bett.
      </p>
      
      <p class="text-lg leading-relaxed">
        Alles ging gut, bis Camillos Mama eines Tages beschloss, nach dem Mittagessen die Wäsche zu trocknen – genau als Leopoldo fröhlich in der Maschine schnarchte.
      </p>
      
      <p class="text-lg leading-relaxed">
        Es war nicht viel Wäsche, nur die Kleider von Camillos kleiner Schwester, und so merkte Mama nicht, dass der Trockner schon voll war. Und erst recht konnte sie nicht sehen, dass Leopoldos unsichtbares Schwänzchen aus der Tür heraushing!
      </p>
      
      <p class="text-lg leading-relaxed">
        Also belud Mama die Maschine, machte die Tür zu und schaltete sie ein.
      </p>
      
      <p class="text-lg leading-relaxed">
        Der arme Leopoldo schreckte aus dem Schlaf hoch: Die ganze Welt drehte sich um ihn herum, und sein Schwänzchen steckte in der Tür fest. Er versuchte zu rufen, damit man ihm aufmachte, aber Camillos Mama war ins andere Zimmer gegangen, um zu telefonieren.
      </p>
      
      <p class="text-lg leading-relaxed">
        Und so kam anderthalb Stunden später, als der Trockner fertig war, ein Schweinchen aus der Maschine, das nach frischer Wäsche duftete, aber schwankte wie ein Seemann und ein Schwänzchen hatte, das geringelt war wie eine Sprungfeder.
      </p>
    </div>
  </div>
</div>
