# Documento 2: Casi d'Uso (Use Cases) UX-Driven - Gestore e Utenti

Il gestore dell'Ente e gli utenti (Prosumer/Consumer) beneficiano di flussi Frictionless. I use-cases si dividono tra chi amministra l'infrastruttura (Admin) e chi deve ottimizzare le bollette (Single User).

## Casi d'Uso (UC) per il GESTORE PA (Admin)

### UC-G00: Navigazione Multi-CER
**Descrizione:** Switch rapido e gestione delle diverse comunità amministrate.  
**UX Flow:** 
- Dal Global Header, click su "CER Attiva". Un dropdown stile glassmorphism elenca le comunità disponibili (CER Alpha, CER Beta). 
- *Risultato:* Cambio istantaneo del feed di dati della dashboard (senza white reload screen).

### UC-G01: Configurazione "Asset Allocation" Incentivi
**Descrizione:** Setup delle quote di ripartizione del cashback energetico.  
**UX Flow:** 
- Utilizzo di "Slider" interattivi per bilanciare i pesi tra Producer, Consumer, Prosumer e quota Ente. Gli slider si autocompensano matematicamente (se aumento il consumer, diminuisce in proporsione il producer) arrivando sempre al 100%.

### UC-G02: Emissione Push Notifications e Consumo Consapevole
**Descrizione:** Invio di alert educativi o di allarme alla comunità in base a stime meteo e consumo reale.  
**UX Flow:** 
- Interfaccia "Quick Action" con messaggi precompilati (es. "Abbiamo perso il sole, spegnete le pompe di calore").
- *Risultato:* Tutti gli utenti ricevono un alert ambra/rosso sulle proprie app con forte impatto UI che incentiva il cambio comportamento.

### UC-G03: Analisi Performance Individuali & Assegnazione Setup Gamification
**Descrizione:** Valuta le aziende/consumer e aggiorna le classifiche.  
**UX Flow:** 
- Classifica visiva dinamica (React Spring). L'Admin premia i virtuosissimi assegnando sconti manuali con un bottone animato ("Premia con Sconto in fattura").

### UC-G04: Validazione Finale GSE (Consuntivazione)
**Descrizione:** Rendicontazione e invio report.  
**UX Flow:** 
- Gesto protetto "Swipe to Confirm" per azzerare click per errore. Emozione visiva a fine procedura (Coriandoli digitali per la fatica burocratica evitata).

## Casi d'Uso (UC) per L'UTENTE (Consumer/Prosumer)

### UC-U01: Analisi dell'Energy Flow
**Descrizione:** L'utente accede per capire se sta consumando "bene".  
**UX Flow:** L'utente analizza a colpo d'occhio il diagramma a nodi. Se il ramo "Autoconsumata Virtualmente" si illumina di verde e pompa energia verso la sua casa, significa che ha beccato la finestra giusta e sta accumulando cashback.

### UC-U02: Pianificazione in base al Meteo
**Descrizione:** L'utente consulta l'app la sera prima per programmare il giorno seguente.  
**UX Flow:** Clicca sul tab Meteo. Un mini-grafico di previsione incrocia "Orari di Sole" e "Pattern di Consumo CER" mostrando fascie verdi (Ok per consumare) o rosse (evitare).

### UC-U03: Stima Real-Time Bolletta e Punti Sostenibilità
**Descrizione:** Consultazione attiva dell'incentivo accumulato e del ranking.  
**UX Flow:** I Big numbers ruotano numericamente da zero al valore finale (Counting UI). L'utente vede i propri Punti Sostenibilità spingendolo a battere il primato del mese passato sfruttando meglio le ore solari.