# Přehled testovací sady Cypress
Tento dokument shrnuje strukturu a účel automatizovaných end-to-end testů napsaných v Cypressu pro web [obchod.24u.cz](https://obchod.24u.cz/). Testy jsou organizovány pomocí struktury Page Object Model (POM) a využívají opakovaně použitelné komponenty.

# Funkce: Ověření prvků na domovské stránce

  Scénář: Ověří přítomnost klíčových prvků na domovské stránce
    Za předpokladu, že jsem na domovské stránce, měl bych vidět všechny klíčové prvky domovské stránky a měl bych vidět tlačítko menu

  Scénář: Ověří zobrazení nabídky Category Menu a hlavních titles
    Za předpokladu, že jsem na domovské stránce klikl na tlačítko menu, měl bych vidět rozbalené menu a položky menu by měly mít správnou textaci

  Scénář: Ověří rozbalení vyhledávání, přítomnost vyhledávacího pole a tlačítka
    Za předpokladu, že jsem na domovské stánce klikl na tlačítko vyhledávání, měl bych vidět vyhledávací pole a tlačítko pro potvrzení vyhledávání.

  Scénář: Ověří zabalení vyhledávání a nepřítomnost vyhledávacího pole a tlačítka
    Za předpokladu, že jsem na domovské stránce klikl na tlačítko vyhledávání a následně na top samé tlačítko klikl znova, nemělo by vyhledávací pole a tlačítko pro potvrzení vyhledávání být zobrazené.

# Funkce: Testy na registrační stránce

  Scénář: Zkontroluje, že odkaz v menu směřuje na správný web
    Zkontroluje, že odkaz v menu na registraci vede na správnou URL stránku.

  Scénář: Po vyplnění nevalidního e-mailu by se měla objevit chybová hláška
    V registračním formuláři vyplní všechny povinné údaje. E-mail vyplní nevalidní. Po vyplnění nevalidního e-mailu se objeví chybová hláška.

  Scénář: Po vyplnění všech polí a a uložení by se mělo objevit antiSPAM okno
    V registračním formuláři vyplní všechny povinné údaje a formulář odešle. Po odeslání se objeví dialogové antiSPAM okno.

# Funkce: Testy na vyhledávací stránku

  Scénář: Ověří, že po zadání klíčového slova se web přesměruje na správný web a zobrazí relevantní výsledky
    Za předpokladu, že uživatel zadá do vyhledávacího pole hledaný výraz a výsledek odešle, zobrazí se stránka s vyhledanými kategoriemi a produkty, přičemž každá vyhledaná kategorie a každý vyhledaný produkt obsahuje hledaný výraz.

# Funkce: Testy na vytváření objednávek ze stránky kategorie
  Scénář: Zkontroluje, že je odkaz v menu na kategorii přesměrován na správný web
    Zkontroluje, že odkaz v menu na danou kategorii vede na správnou URL stránku.

  Scénář: Přidání produktu do košíku ze stránek kategorie a ověření přidání do košíku
    Jsem na stránce dané kategorie, přidám daný produkt do košíku, zkontroluji změnu badge u ikony košíku.

  Scénář: Přidání produktu do košíku ze stránek detailu a ověření přidání do košíku
    Jsem na stránce dané kategorie, rozkliknu si detail daného produktu, přidám daný produkt do košíku, zkontroluji změnu badge u ikony košíku.

  Scénář: Přidání produktu do košíku ze stránek kategorie a dokončení procesu nákupu
    Jsem na stránce dané kategorie, přidám daný produkt do košíku, přejdu do košíku, v košíku validně vyplňuji povinné údaje a dokončuji objednávku.

Inspirace: [Jana Hejt - Cypress grizzly project](https://github.com/JanaHejt/Cypress_grizly_project)