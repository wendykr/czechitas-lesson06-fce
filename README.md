# Vlastní funkce - Lekce 6

Cvičení do breakrooms pro kurz JavaScript 1 od Czechitas.

## 1. Obsah elipsy

Zlovolní zahrádkáři nám chtějí stížit výměru pozemků a proto si pořídíli pozemek ve tvaru elipsy.

![ukázka výsledku](https://kodim.cz/cms/assets/kurzy/javascript-vyuka/js-1/knihovny-vlastni-funkce/cv-vlastni-funkce/cvlekce%3Eobsah-elipsy/ellipse.png)

Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.

Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci `ellipseArea`, která spočítá (**vrátí**) plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné `Math.PI`.

Funkci `ellipseArea` otestujte.

- Pro šířku `1` a výšku `2` by mělo vyjít `1.5707963267948966`.
- Pro `2` a `2` pak `3.141592653589793`.


## 2. Maximum ze dvou čísel

Napište funkci `max2`, která **vrátí větší ze dvou zadaných čísel**. V JavaScriptu už na toto funkce existuje, jmenuje se `Math.max`. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.


## 3. Kontrola DIČ

Všimněte si, že knihovna `validator.js` v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

- CZ123456789
- CZ1234567890

Postupujte dle následujících kroků.

- Vytvořte prázdnou stránku s JavaScriptem a knihovnou `validator.js`.
- Vytvořte funkci `isDIC` s jedním parametrem `inputStr`, což bude řetězec, který chceme zkontrolovat.
- Jako první ve funkci zkontrolujte, jestli je vstupní řetězec kratší než 11 znaků. V takovém případě nemá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce `false`. Tím naše funkce končí. Všimněte si, že takto používáme vzor "časný návrat".
- Dále ve funkci zkontrolujte, jestli je vstupní řetězec delší než 12 znaků. V takovém případě opět vraťte `false`.
- Dále ve funkci si do proměnné `prefix` uložte první dva znaky vstupního řetězce.
- Pomocí podmínky zkontrolujte, že proměnná `prefix` obsahuje přesně znaky `CZ`. Pokud ne, ihned vraťte `false`.
- Do proměnné `digits` si uložte část vstupního řetězce od třetího znaku dále.
- Použijte metodu `validator.isInt`, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí `false`, ihned také vraťte `false`.
- Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit `true`.
- Vyzkoušejte svoji funkci v konzoli na různých vstupech a ověřte, že funguje.