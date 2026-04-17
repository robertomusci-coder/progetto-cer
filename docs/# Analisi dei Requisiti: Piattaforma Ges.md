# Analisi dei Requisiti: Piattaforma Brilla (Multi-CER)

La piattaforma Brilla è un portale "SaaS-like" di altissimo profilo. Oltre a essere il centro nevralgico degli Enti Pubblici, offre un accesso differenziato per i singoli utenti (produttori e consumatori).

## 1. Architettura degli Attori e Ripartizione Incentivi
La piattaforma gestisce tre tipologie di utenti finali, differenziati sostanzialmente dalla modalità con cui contribuiscono alla CER e ricevono gli incentivi:
*   **Gestore PA / Admin:** Ha visibilità unificata sui dati di *tutti* gli utenti. Ha permessi "God Mode" per configurare le quote di ripartizione e può **gestire più CER contemporaneamente** dal medesimo account.
*   **Producer (Produttore Puro):** Utente che immette energia in rete senza consumarla direttamente. L'incentivo è ripartito calcolando la sola energia immessa e virtualmente condivisa.
*   **Consumer (Consumatore Puro):** Utente che preleva energia. La sua agevolazione in bolletta e il riparto degli incentivi si basano unicamente sul suo "sincronismo" (quanto ottimizza i consumi nelle ore in cui la CER produce energia). 
*   **Prosumer:** Produce, consuma e accumula. L'incentivo deriva primariamente dal risparmio diretto in bolletta (autoconsumo fisico) e, secondariamente, dall'energia condivisa in rete. 

## 2. Requisiti Funzionali Core
**Visualizzazione a Tenuta Stagna (Singolo Utente):**
> [!NOTE] 
> *UX Guideline*: Il singolo membro (Consumer/Prosumer) deve avere visibilità esclusiva sui **propri consumi** e sull'andamento *generico* (anonimizzato) della CER nel suo complesso, senza poter leggere i dati dei vicini.

**Configurabilità Totale Incentivi:**
> [!NOTE] 
> *UX Guideline*: Il Gestore avrà un modulo (wizard) basato su *sliders* per stabilire i pesi percentuali del cashback (es. 40% a chi produce, 60% a chi consuma e si sincronizza).

**Gamification e Sostenibilità:**
> [!NOTE] 
> *UX Guideline*: Implementazione di "Punti Sostenibilità" per la cittadinanza. Gamification con classifiche interne tra i membri (Consumer e Prosumer) per promuovere la competizione virtuosa verso sconti extra per chi consuma nelle ore di picco. 

## 3. Requisiti Tecnologici & Esperienza Utente
**Energy Graph e CO2:** Un nodo visivo interattivo in Dashboard misurerà sia il flusso energetico che la metrica ambientale "kg di CO2 evitata".
**Sicurezza PA-Grade:** Dati criptati e autenticazione a due fattori.
**Multi-Tenant Engine:** Capacità tecnologica di separare i database tra molteplici Comunità Energetiche (CER 1, CER 2) garantendo all'Amministratore un menù a tendina globale per passare da una all'altra.