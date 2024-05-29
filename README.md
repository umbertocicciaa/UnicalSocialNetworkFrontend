# Social Network Angular Frontend

## Descrizione del Progetto

Questo progetto è un social network sviluppato utilizzando Angular che combina le funzionalità di Twitter e Instagram. Gli utenti possono postare foto e immagini, commentare i post, mettere "like" ai post, seguire altri utenti, visualizzare i profili degli amici e molte altre funzioni tipiche dei social network. In futuro, verrà implementata anche la funzionalità di messaggistica.

## Funzionalità Principali

- **Postare Foto e Immagini:** Gli utenti possono caricare e condividere foto e immagini.
- **Commentare i Post:** Gli utenti possono commentare i post degli altri utenti.
- **Mettere Like ai Post:** Gli utenti possono mettere "like" ai post per esprimere apprezzamento.
- **Seguire gli Utenti:** Gli utenti possono seguire altri utenti per vedere i loro post nel feed.
- **Visualizzare i Profili degli Amici:** Gli utenti possono visitare i profili degli amici per vedere i loro post e attività.

## Funzionalità Future

- **Messaggistica:** Sarà implementata una funzionalità di messaggistica per permettere agli utenti di inviare messaggi diretti.

## Requisiti

- Node.js
- Angular CLI

## Installazione

1. **Clonare il repository:**
   ```bash
   git clone <URL del repository>
   ```
2. **Navigare nella directory del progetto:**
   ```bash
   cd nome-del-progetto
   ```
3. **Installare le dipendenze:**
   ```bash
   npm install
   ```
4. **Avviare il server di sviluppo:**
   ```bash
   ng serve
   ```
5. **Aprire il progetto nel browser:**
   Visita `http://localhost:4200/` nel tuo browser per vedere il progetto in azione.

## Struttura del Progetto

- **src/app:** Contiene i componenti Angular, i servizi e i moduli.

## Componenti Principali

- **HomeComponent:** La pagina principale dove gli utenti possono vedere i post degli utenti che seguono.
- **ProfileComponent:** La pagina del profilo utente dove è possibile vedere i post di un singolo utente.
- **PostComponent:** Il componente che gestisce i singoli post, inclusi i commenti e i like.
- **FollowComponent:** Il componente che gestisce il follow e unfollow degli utenti.

## Servizi Principali

- **PostService:** Gestisce le operazioni relative ai post, come creare, recuperare e commentare i post.
- **UserService:** Gestisce le operazioni relative agli utenti, come il login, la registrazione e il follow/unfollow.
- **AuthService:** Gestisce l'autenticazione degli utenti.

## Contribuire

Le contribuzioni sono benvenute! Per favore, segui questi passaggi:

1. **Fork del repository**
2. **Crea un nuovo branch:**
   ```bash
   git checkout -b feature/nome-della-feature
   ```
3. **Fai le modifiche necessarie e commit:**
   ```bash
   git commit -m 'Aggiunta una nuova funzionalità'
   ```
4. **Push al branch:**
   ```bash
   git push origin feature/nome-della-feature
   ```
5. **Crea una Pull Request**

## Contatti

Per qualsiasi domanda o suggerimento, sentiti libero di contattarmi all'indirizzo email: umbertociccia@icloud.com.
