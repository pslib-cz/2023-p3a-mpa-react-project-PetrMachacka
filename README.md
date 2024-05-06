# Dots and Boxes

https://pslib-cz.github.io/2023-p3a-mpa-react-project-PetrMachacka/

## Téma

Pravidla jsou následující:

- Hráči se střídají a spojují dva vodorovně nebo svisle sousedící body čárou.
- Každý hráč, který uzavře čtvrtou stranu čtverce o velikosti 1x1 bod, získá jeden bod a smí táhnout znovu.
- Hra končí, když jsou všechny čáry nakresleny a čtverce jsou obsazeny.
- Hráč s nejvíce body vyhrává.
  
[komplexnější vysvětlení hry](https://en.wikipedia.org/wiki/Dots_and_boxes)

## Odkazy pro vývoj

Zde budou živé linky na:
- figma návrh stránek aplikace
- odkaz na gh-pages projektu
- odkaz do repozitáře projektu, pokud pracuji v teamu a zde vývoj neprobíhá

### Z čeho čerpat

- interaktivní hra (předělávka "deskovky")
- mohlo by být použitelné jako solitaire
- nebo "AI" protihráč
- inspirovat se můžete na [zatrolených hrách](https://www.zatrolene-hry.cz/katalog-her/?fType=cat&keyword=&theme=-1&category=-1&minlength=-1&maxlength=-1&localization=6%2C+7%2C+8&min_players=1&max_players=1&age=-1)...
- karetní hry méně typické - např. [Kabo](https://www.zatrolene-hry.cz/spolecenska-hra/kabo-8341/)
- učitelem oblíbená [Cartagena](https://www.zatrolene-hry.cz/spolecenska-hra/cartagena-422/) stále čeká na remake

### Techniky

- využití localStorage / sessionStorage
- čtení dat z externího RestAPI (fetch)
- operace DnD
- využití react-routeru
- funkčnost na mobilu (výjimka je předělávka komplexních deskových her)

### Co není obsahem 

- databáze
- bez vlastních backend service
- trapné věci: *klasické karetní hry*, *člověče nezlob se*, ...
