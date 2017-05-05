import LocalizedStrings from 'react-native-localization';

// Main resource objects
var strings = new LocalizedStrings({
    en: {
        currentGameVersion: 'Current game version: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Servers',
        routeMeetupsTitle: 'Meetups',
        routeSettingsTitle: 'Settings',
        routeAboutTitle: 'About this app',
        routeRulesTitle: 'TruckersMP Rules',
        supportedETSVersion: 'Supported ETS version: ',
        supportedATSVersion: 'Supported ATS version: ',
        lastReleaseDate: 'Last Release date: ',
        playersOnline: 'players online',
        currentGameTime: 'Current game time: ',
        servers: 'Servers',
        about: 'About',
        meetups: 'Meetups',
        searchPlayer: 'Search Player',
        rules: 'Rules',
        settings: 'Settings',
        playersInQueue: 'players in queue',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Speed limiter enabled',
        speedLimiterDisabled: 'Speed limiter disabled',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Add to calendar',
        language: 'Language: ',
        enableAutoRefresh: 'Enable auto refresh',
        autoRefreshGameTime: 'Auto refresh game time',
        autoRefreshServersList: 'Auto refresh servers list',
        refreshServersListEvery: 'Refresh servers list every',
        seconds10: '10 seconds',
        seconds30: '30 seconds',
        minute: '1 minute',
        minutes2: '2 minutes',
        minutes5: '5 minutes',
        minutes10: '10 minutes',
        minutes20: '20 minutes',
        customizations: 'Customizations',
        settingsHeaderLanguage: 'Language',
        settingsHeaderTheme: 'Theme',
        english: 'English',
        italian: 'Italiano',
        eventAddedToCalendar: 'Event added to calendar',
        eventTitle: 'TruckersMP Event - Meetup',
        eventNotes: 'Organized by {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Website',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam Group',
        readMore: 'Read More',
        newsAndEvents: 'News and events',
        gameStatus: 'Game Status',
        newTruckersMPGameVersionReleaseNotificationText: 'New TruckersMP version released',
        french: 'French',
        bulgarian: 'Bulgarian',
        finnish: 'Finnish',
        spanish: 'Spanish',
        dutch: 'Dutch',
        polish: 'Polish',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'By Steam Username',
        searchBySteamID: 'By Steam ID',
        searchByTruckersMPID: 'By TruckersMP ID',
        searchButton: 'Search',
        searchFieldPlaceholder: 'Specifiy search term',
        steamProfile: 'Steam profile',
        truckersMPProfile: 'TruckersMP profile',
        viewSteamProfile: 'View Steam profile',
        viewTruckersMPProfile: 'View TruckersMP profile',
        bans: 'Bans History',
        noBans: 'No bans',
        nickName: 'Nickname:',
        onTruckersMPfrom: 'On TruckersMP from', // On TruckersMP from DATE
        onSteamFrom: 'On Steam from', // On Steam from DATE
        role: 'Role:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Real Name:',
        steamUsername: 'Steam Username:',
        steamID: 'Steam ID:',
        issuedBy: 'Issued by {0} on {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Expires:', // Expires: DATE,
        german: 'German',
        /* LABELS ADDED IN VERSION 1.0.4 */
        liveMapRouteTitle: 'Live Map',
        checkingOnlineState: 'Checking online state..',
        viewOnMap: 'View on map',
        hideHeatMap: 'Hide heatmap',
        showDirection: 'Show direction',
        showTrucks: 'Show Trucks',
        showName: 'Show name',
        showID: 'Show ID',
        places: 'Places'
    },
    it: {
        currentGameVersion: 'Versione corrente: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Stato servers TruckersMP',
        routeMeetupsTitle: 'Eventi e Convogli',
        routeSettingsTitle: 'Impostazioni',
        routeAboutTitle: 'Informazioni',
        routeRulesTitle: 'Regole TruckersMP',
        supportedETSVersion: 'Versione ETS supportata: ',
        supportedATSVersion: 'Versione ATS supportata: ',
        lastReleaseDate: 'Ultima data di rilascio: ',
        playersOnline: 'giocatori online',
        currentGameTime: 'Attuale orario in gioco: ',
        servers: 'Servers',
        about: 'Informazioni',
        meetups: 'Eventi e convogli',
        searchPlayer: 'Cerca giocatore',
        rules: 'Regole',
        settings: 'Impostazioni',
        playersInQueue: 'giocatori in coda',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Limitatore di velocità abilitato',
        speedLimiterDisabled: 'Limitatore di velocità non abilitato',
        status: 'Stato',
        info: 'Info',
        addToCalendar: 'Aggiungi al calendario',
        language: 'Lingua: ',
        enableAutoRefresh: 'Abilitato aggiornamento automatico',
        autoRefreshGameTime: 'Aggiorna orario in gioco',
        autoRefreshServersList: 'Aggiorna lista stato servers',
        refreshServersListEvery: 'Aggiorna la lista servers ogni',
        seconds10: '10 secondi',
        seconds30: '30 secondo',
        minute: '1 minuto',
        minutes2: '2 minuti',
        minutes5: '5 minuti',
        minutes10: '10 minuti',
        minutes20: '20 minuti',
        customizations: 'Personalizzazione',
        english: 'Inglese',
        italian: 'Italiano',
        settingsHeaderLanguage: 'Lingua',
        settingsHeaderTheme: 'Tema',
        eventAddedToCalendar: 'Evento aggiunto al calendario',
        truckersMPWebSite: 'Sito TruckersMP ',
        truckersMPForum: 'Forum TruckersMP',
        truckersMPSteamGroup: 'TruckersMP su Steam',
        readMore: 'Leggi tutto',
        newsAndEvents: 'News e eventi',
        gameStatus: 'Stato del gioco',
        newTruckersMPGameVersionReleaseNotificationText: 'Nuova versione di TruckersMP rilasciata',
        french: 'Francese',
        bulgarian: 'Bulgaro',
        finnish: 'Finlandese',
        spanish: 'Spagnolo',
        dutch: 'Olandese',
        polish: 'Polacco',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'Per username Steam',
        searchBySteamID: 'Per ID Steam',
        searchByTruckersMPID: 'Per ID TruckersMP',
        searchButton: 'Cerca',
        searchFieldPlaceholder: 'Inserisci un termine di ricerca',
        steamProfile: 'Profilo Steam',
        truckersMPProfile: 'Profilo TruckersMP',
        viewSteamProfile: 'Guarda il profilo su Steam',
        viewTruckersMPProfile: 'Guarda il profilo su TruckersMP',
        bans: 'Storico restrizioni',
        noBans: 'Nessuna restrizione',
        nickName: 'Nickname:',
        onTruckersMPfrom: 'Su TruckersMP dal', // On TruckersMP from DATE
        onSteamFrom: 'Su Steam dal', // On Steam from DATE
        role: 'Ruolo:',
        truckersMPID: 'ID TruckersMP:',
        realName: 'Nome reale:',
        steamUsername: 'Username Steam:',
        steamID: 'ID Steam:',
        issuedBy: 'Emato da {0} il {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Scadenza:', // Expires: DATE
        german: 'Tedesco',
        liveMapRouteTitle: 'Live Map',
        checkingOnlineState: 'Controllo stato..',
        viewOnMap: 'Segui sulla mappa',
        hideHeatMap: 'Nascondi mappa densità',
        showDirection: 'Mostra direzione',
        showTrucks: 'Mostra camion',
        showName: 'Mostra i nomi',
        showID: 'Mostra gli ID',
        places: 'Luoghi'
    },
    // credits: Hristo Spasov
    bg: {
        currentGameVersion: 'Текуща версия на играта: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Сървъри',
        routeMeetupsTitle: 'Заглавие на срещата',
        routeSettingsTitle: 'Настройки',
        routeAboutTitle: 'За маршрута',
        routeRulesTitle: 'Правила в играта',
        supportedETSVersion: 'Подържана ETS версия: ',
        supportedATSVersion: 'Подържана ATS версия: ',
        lastReleaseDate: 'Последен ъпдейт: ',
        playersOnline: 'Играчи на линия',
        currentGameTime: 'Реално време в играта: ',
        servers: 'Сървъри',
        about: 'Относно',
        meetups: 'Срещи',
        searchPlayer: 'Търсене на играч',
        rules: 'Правила',
        settings: 'Настройки',
        playersInQueue: 'Чакащи играчи в лоби',
        online: 'На линия',
        offline: 'Извън линия',
        speedLimiterEnabled: 'Ограничител на скоростта - активиран',
        speedLimiterDisabled: 'Ограничител на скоростта - деактивиран',
        status: 'Статус',
        info: 'Информация',
        addToCalendar: 'Добави в календара',
        lan2guage: 'Език: ',
        enableAutoRefresh: 'Активира автоматично обновление',
        autoRefreshGameTime: 'Автоматично обновление на времето в играта',
        autoRefreshServersList: 'Автоматично обновление на сървър листа',
        refreshServersListEvery: 'Обновление на сървъра листа всеки',
        seconds10: '10 секунди',
        seconds30: '30 секунди',
        minute: '1 минута',
        minutes2: '2 минути',
        minutes5: '5 минути',
        minutes10: '10 минути',
        minutes20: '20 минути',
        customizations: 'Персонализиране',
        settingsHeaderLanguage: 'Заглавие',
        settingsHeaderTheme: 'Тема',
        english: 'Английски',
        italian: 'Италиански',
        bulgarian: 'Български',
        eventAddedToCalendar: 'Добавено събитие към календара',
        eventTitle: 'TruckersMP Събитие - Среща',
        eventNotes: 'Организирато от {0} - Сървър: {1}',
        truckersMPWebSite: 'TruckersMP Уебсайт',
        truckersMPForum: 'TruckersMP Форум',
        truckersMPSteamGroup: 'TruckersMP Steam група',
        readMore: 'Прочети повече',
        newsAndEvents: 'Новини и събития',
        gameStatus: 'Статус на играта',
        newTruckersMPGameVersionReleaseNotificationText: 'Нова TruckersMP версия',
        french: 'French',
        finnish: 'Finnish',
        spanish: 'Spanish',
        dutch: 'Dutch',
        polish: 'Polish',
        searchBySteamUsername: 'Стийм прякор',
        searchBySteamID: 'По Steam ID',
        searchByTruckersMPID: 'По TruckersMP ID',
        searchButton: 'Търси',
        searchFieldPlaceholder: 'Напишете името на играча...',
        steamProfile: 'Steam профил',
        truckersMPProfile: 'TruckersMP Профил',
        viewSteamProfile: 'Виж Steam профил',
        viewTruckersMPProfile: 'Виж TruckersMP профил',
        bans: 'Бан история',
        noBans: 'Няма банове',
        nickName: 'прякор:',
        onTruckersMPfrom: 'В TruckersMP от', // On TruckersMP from DATE
        onSteamFrom: 'В Steam от', // On Steam from DATE
        role: 'Роля:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Истинско име:',
        steamUsername: 'Steam прякор:',
        steamID: 'Steam ID:',
        issuedBy: 'Издаден от {0} на {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Изтича:' // Expires: DATE
    },
    // credits: Kevin Monteil
    fr: {
        currentGameVersion: 'Version actuelle du jeu: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Serveurs TruckersMP',
        routeMeetupsTitle: 'Rencontres ',
        routeSettingsTitle: 'Paramètres',
        routeAboutTitle: 'À propos de l’application',
        routeRulesTitle: 'Règlement de TruckersMP',
        supportedETSVersion: 'Version d’ETS supportée: ',
        supportedATSVersion: 'Version d’ATS supportée: ',
        lastReleaseDate: 'Dernière mise à jour: ',
        playersOnline: 'Joueurs en ligne',
        currentGameTime: 'Heure actuelle du jeu: ',
        servers: 'Serveurs',
        about: 'À propos',
        meetups: 'Rencontres',
        searchPlayer: 'Rechercher un joueur',
        rules: 'Règlement',
        settings: 'Paramètres',
        playersInQueue: 'Joueurs en attente',
        online: 'En ligne',
        offline: 'Hors ligne',
        speedLimiterEnabled: 'Limiteur de vitesse activé',
        speedLimiterDisabled: 'Limiteur de vitesse désactivé',
        status: 'États',
        info: 'Info',
        addToCalendar: 'Ajouter au calendrier',
        language: 'Langue: ',
        enableAutoRefresh: 'Activer le rafraîchissement auto',
        autoRefreshGameTime: 'Rafraîchir automatiquement l’heure du jeu',
        autoRefreshServersList: 'Rafraîchir automatiquement la liste des serveurs',
        refreshServersListEvery: 'Fréquence de rafraîchissement',
        seconds10: '10 secondes',
        seconds30: '30 secondes',
        minute: '1 minute',
        minutes2: '2 minutes',
        minutes5: '5 minutes',
        minutes10: '10 minutes',
        minutes20: '20 minutes',
        customizations: 'Personnalisation',
        settingsHeaderLanguage: 'Langue',
        settingsHeaderTheme: 'Thème',
        english: 'Anglais',
        italian: 'Italien',
        eventAddedToCalendar: 'Événement ajouté au calendrier',
        eventTitle: 'Événement TruckersMP - Rencontre',
        eventNotes: 'Organisé par {0} - Serveur: {1}',
        truckersMPWebSite: 'Site internet de TruckersMP',
        truckersMPForum: 'Forum de TruckersMP',
        truckersMPSteamGroup: 'Groupe Steam de TruckersMP',
        readMore: 'Lire plus',
        newsAndEvents: 'Nouveautés et Événements',
        gameStatus: 'État du jeu',
        newTruckersMPGameVersionReleaseNotificationText: 'Nouvelle version de TruckersMP disponible',
        french: 'Francais',
        bulgarian: 'Bulgare',
        finnish: 'Finlandais',
        spanish: 'Espanol',
        dutch: 'Néerlandais',
        polish: 'Polish',
        german: 'Allemande'
    },
    // Credits Jiri Innanen
    fi: {
        currentGameVersion: 'Nykyinen peliversio ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP palvelimet',
        routeMeetupsTitle: 'Kokoontumiset',
        routeSettingsTitle: 'Asetukset',
        routeAboutTitle: 'Tietoja tästä sovelluksesta',
        routeRulesTitle: 'TruckersMP Säännöt',
        supportedETSVersion: 'Tuetut ETS versiot: ',
        supportedATSVersion: 'Tuetut ATS versiot: ',
        lastReleaseDate: 'Viimeinen julkaisupäivä: ',
        playersOnline: 'Pelaajia Paikalla',
        currentGameTime: 'Nykyinen peliaika: ',
        servers: 'Palvelimet',
        about: 'Tietoja',
        meetups: 'Kokoontumiset',
        searchPlayer: 'Etsi pelaajia',
        rules: 'Säännöt',
        settings: 'Asetukset',
        playersInQueue: 'Pelaajaa Jonossa',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Nopeusrajoitin käytössä',
        speedLimiterDisabled: 'Ei nopeusrajoitinta',
        status: 'Tila',
        info: 'Info',
        addToCalendar: 'Lisää kalenteriin',
        language: 'Kieli: ',
        enableAutoRefresh: 'Salli automaattinen päivitys',
        autoRefreshGameTime: 'Automaattinen peliajan päivitys',
        autoRefreshServersList: 'Automaattinen palvelimien päivitys',
        refreshServersListEvery: 'Päivitä palvelinlista',
        seconds10: '10 sekuntia',
        seconds30: '30 sekuntia',
        minute: '1 minuutti',
        minutes2: '2 minuuttia',
        minutes5: '5 minuuttia',
        minutes10: '10 minuuttia',
        minutes20: '20 minuuttia',
        customizations: 'Kustomointi',
        settingsHeaderLanguage: 'Kielet',
        settingsHeaderTheme: 'Teema',
        english: 'Englanti',
        italian: 'Italia',
        eventAddedToCalendar: 'Tapahtuma lisätty kalenteriin',
        eventTitle: 'TruckersMP tapahtumat',
        eventNotes: 'Organized by {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP verkkosivu',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam ryhmä',
        readMore: 'Lue lisää',
        newsAndEvents: 'Uutiset & tapahtumat',
        gameStatus: 'Pelin tila',
        newTruckersMPGameVersionReleaseNotificationText: 'Uusi TruckersMP versio julkaistu',
        french: 'Raska',
        bulgarian: 'Bulgaria',
        finnish: 'Suomi',
        spanish: 'Espanja',
        dutch: 'Dutch',
        polish: 'Polish',
        searchBySteamUsername: 'Hae Steam nimellä',
        searchBySteamID: 'Hae Steam ID:llä',
        searchByTruckersMPID: 'Hake TruckersMP ID:llä',
        searchButton: 'Haku',
        searchFieldPlaceholder: 'Specifiy search term',
        steamProfile: 'Steam profiili',
        truckersMPProfile: 'TruckersMP profiili',
        viewSteamProfile: 'Näytä Steam profiili',
        viewTruckersMPProfile: 'Näytä TruckersMP profiili',
        bans: 'Banni historia',
        noBans: 'Ei banneja',
        nickName: 'Nimimerkki:',
        onTruckersMPfrom: 'TruckersMP profiili luotu', // On TruckersMP from DATE
        onSteamFrom: 'Steam profiili luotu', // On Steam from DATE
        role: 'Rooli:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Oikea nimi:',
        steamUsername: 'Steam käyttäjänimi:',
        steamID: 'Steam ID:',
        issuedBy: 'Myöntänyt {0} on {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Vanhenee:' // Expires: DATE
    },
    // credits Francisco Ramirez
    es: {
        currentGameVersion: 'Versión Actual del Juego: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Servidores TruckersMP',
        routeMeetupsTitle: 'Reuniones',
        routeSettingsTitle: 'Ajustes',
        routeAboutTitle: 'Acerca de esta app',
        routeRulesTitle: 'Reglas de TruckersMP',
        supportedETSVersion: 'Versión ETS soportada: ',
        supportedATSVersion: 'Versión ATS soportada: ',
        lastReleaseDate: 'Fecha de Última Versión: ',
        playersOnline: 'Jugadores Conectados',
        currentGameTime: 'Hora actual del juego: ',
        servers: 'Servidores',
        about: 'Acerca',
        meetups: 'Reuniones',
        searchPlayer: 'Buscar Jugador',
        rules: 'Reglas',
        settings: 'Ajustes',
        playersInQueue: 'jugadores en cola',
        online: 'En linea',
        offline: 'Desconectado',
        speedLimiterEnabled: 'Limitador de velocidad activado',
        speedLimiterDisabled: 'Limitador de velocidad desactivado',
        status: 'Estado',
        info: 'Info',
        addToCalendar: 'Agregar al calendario',
        language: 'Idioma: ',
        enableAutoRefresh: 'Activar auto refrescar',
        autoRefreshGameTime: 'Auto refrescar hora del juego',
        autoRefreshServersList: 'Auto refrescar lista de servidores',
        refreshServersListEvery: 'Refrescar lista de servidores cada',
        seconds10: '10 segundos',
        seconds30: '30 segundos',
        minute: '1 minuto',
        minutes2: '2 minutos',
        minutes5: '5 minutos',
        minutes10: '10 minutos',
        minutes20: '20 minutos',
        customizations: 'Modificaciones',
        settingsHeaderLanguage: 'Idioma',
        settingsHeaderTheme: 'Tema',
        english: 'Inglés',
        italian: 'Italiano',
        eventAddedToCalendar: 'Evento agregado al calendario',
        eventTitle: 'Evento TruckersMP - Reunión',
        eventNotes: 'Organizado por {0} - Servidor: {1}',
        truckersMPWebSite: 'Sitio web TruckersMP',
        truckersMPForum: 'Foros TruckersMP',
        truckersMPSteamGroup: 'Grupo de steam TruckersMP',
        readMore: 'Leer más',
        newsAndEvents: 'Noticias y eventos',
        gameStatus: 'Estado del Juego',
        newTruckersMPGameVersionReleaseNotificationText: 'Nueva versión de TruckersMP disponible',
        french: 'Francés',
        bulgarian: 'Búlgaro',
        finnish: 'Finlandés',
        spanish: 'Español',
        dutch: 'Holandés',
        polish: 'Polish',
        searchBySteamUsername: 'Por nombre de Steam',
        searchBySteamID: 'Por Steam ID',
        searchByTruckersMPID: 'Por TruckersMP ID',
        searchButton: 'Buscar',
        searchFieldPlaceholder: 'Especificar termino de búsqueda',
        steamProfile: 'Perfil de Steam',
        truckersMPProfile: 'Perfil TruckersMP',
        viewSteamProfile: 'Ver perfil de Steam',
        viewTruckersMPProfile: 'Ver perfil TruckersMP',
        bans: 'Historial de Baneos',
        noBans: 'Sin baneos',
        nickName: 'Apodo:',
        onTruckersMPfrom: 'En TruckersMP desde', // On TruckersMP from DATE
        onSteamFrom: 'En Steam desde', // On Steam from DATE
        role: 'Rol:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Nombre Real:',
        steamUsername: 'Nombre en Steam:',
        steamID: 'Steam ID:',
        issuedBy: 'Emitido por {0} el {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Expira:', // Expires: DATE
        liveMapRouteTitle: 'Mapa en Vivo',
        checkingOnlineState: 'Revisando estado en linea..',
        viewOnMap: 'Ver en mapa',
        hideHeatMap: 'Ocultar mapa de calor',
        showDirection: 'Mostrar dirección​,
        showTrucks: 'Mostrar Camiones',
        showName: 'Mostrar nombre',
        showID: 'Mostrar ID',
        places: 'Lugares'
    },
    // credits Derk Nomden
    nl: {
        currentGameVersion: 'Huidige game versie: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Servers',
        routeMeetupsTitle: 'Meetings',
        routeSettingsTitle: 'Instellingen',
        routeAboutTitle: 'Over deze app',
        routeRulesTitle: 'TruckersMP regels',
        supportedETSVersion: 'Ondersteunende ETS versie: ',
        supportedATSVersion: 'Ondersteunende ATS versie: ',
        lastReleaseDate: 'Laatste release datum: ',
        playersOnline: 'Spelers online',
        currentGameTime: 'Huidige spel tijd: ',
        servers: 'Servers',
        about: 'Over',
        meetups: 'Meetings',
        searchPlayer: 'Zoek speler',
        rules: 'Regels',
        settings: 'Instellingen',
        playersInQueue: 'Spelers in wachtrij',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Snelheids limiet aan',
        speedLimiterDisabled: 'Snelheids limiet uit',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Voeg toe aan kalender',
        language: 'Taal: ',
        enableAutoRefresh: 'Activeer auto vernieuwen',
        autoRefreshGameTime: 'Automatische spel tijd vernieuwen',
        autoRefreshServersList: 'Automatische serverlijst vernieuwen',
        refreshServersListEvery: 'Vernieuw serverlijst elke',
        seconds10: '10 seconden',
        seconds30: '30 seconden',
        minute: '1 minuten',
        minutes2: '2 minuten',
        minutes5: '5 minuten',
        minutes10: '10 minuten',
        minutes20: '20 minuten',
        customizations: 'Aanpassingen',
        settingsHeaderLanguage: 'Taal',
        settingsHeaderTheme: 'Thema',
        english: 'Engels',
        italian: 'Italiaans',
        eventAddedToCalendar: 'Event toegevoegd aan kalender',
        eventTitle: 'TruckersMP Event - Meetings',
        eventNotes: 'Georganiseerd bij {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Website',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam Groep',
        readMore: 'Lees meer',
        newsAndEvents: 'Nieuws en events',
        gameStatus: 'Game Status',
        newTruckersMPGameVersionReleaseNotificationText: 'Nieuwe TruckersMP versie gelanceerd',
        french: 'Frans',
        bulgarian: 'Bulgaars',
        finnish: 'Fins',
        dutch: 'Dutch',
        searchBySteamUsername: 'Bij Steam gebruikersnaam',
        searchBySteamID: 'Bij Steam ID',
        searchByTruckersMPID: 'Bij TruckersMP ID',
        searchButton: 'Zoek',
        searchFieldPlaceholder: 'Specifieke zoekterm',
        steamProfile: 'Steam profiel',
        truckersMPProfile: 'TruckersMP profiel',
        viewSteamProfile: 'Bekijk Steam profiel',
        viewTruckersMPProfile: 'Bekijk TruckersMP profiel',
        bans: 'Ban geschiedenis',
        noBans: 'Geen bans',
        nickName: 'Gebruikersnaam:',
        onTruckersMPfrom: 'Op TruckersMP sinds', // On TruckersMP from DATE
        onSteamFrom: 'Op Steam sinds', // On Steam from DATE
        role: 'Rol:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Echte Name:',
        steamUsername: 'Steam Gebruikersnaam:',
        steamID: 'Steam ID:',
        issuedBy: 'Probleem bij {0} op {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Verlopen:', // Expires: DATE
        polish: 'Polish'
    },
    // credits Piotrek Ślusarz 
    pl: {
        currentGameVersion: 'Bieżąca wersja gry: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Serwery TruckersMP',
        routeMeetupsTitle: 'Konwoje',
        routeSettingsTitle: 'Ustawienia',
        routeAboutTitle: 'O aplikacji',
        routeRulesTitle: 'Zasady TruckersMP ',
        supportedETSVersion: 'Wspierana wersja ETS: ',
        supportedATSVersion: 'Wspierana wersja ATS: ',
        lastReleaseDate: 'Data ostatniej aktualizacji: ',
        playersOnline: 'graczy online',
        currentGameTime: 'Aktualny czas gry: ',
        servers: 'Serwery',
        about: 'O aplikacji',
        meetups: 'Konwoje',
        searchPlayer: 'Szukaj gracza',
        rules: 'Zasady',
        settings: 'Ustawienia',
        playersInQueue: 'Graczy w kolejce',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Ogranicznik prędkości jest włączony',
        speedLimiterDisabled: 'Ogranicznik prędkości jest wyłączony',
        status: 'Status',
        info: 'Informacje',
        addToCalendar: 'Dodaj do kalendarza',
        language: 'Język: ',
        enableAutoRefresh: 'Włącz automatyczne odświeżanie',
        autoRefreshGameTime: 'Automatycznie odśwież czas gry',
        autoRefreshServersList: 'Automatycznie odśwież listę serwerów',
        refreshServersListEvery: 'Odświeżaj listę serwerów co',
        seconds10: '10 sekund',
        seconds30: '30 sekund',
        minute: '1 minutę',
        minutes2: '2 minuty',
        minutes5: '5 minut',
        minutes10: '10 minut',
        minutes20: '20 minut',
        customizations: 'Modyfikacje',
        settingsHeaderLanguage: 'Język',
        settingsHeaderTheme: 'Motyw',
        english: 'Angielski',
        italian: 'Włoski',
        eventAddedToCalendar: 'Zdarzenie dodane do kalendarza',
        eventTitle: 'Wydarzenie TruckersMP - Konwój',
        eventNotes: 'Organizowane przez {0} - Serwer: {1}',
        truckersMPWebSite: 'Strona TruckersMP',
        truckersMPForum: 'Forum TruckersMP',
        truckersMPSteamGroup: 'Grupa Steam TruckersMP',
        readMore: 'Dowiedz się więcej',
        newsAndEvents: 'Wiadomości i wydarzenia',
        gameStatus: 'Stan gry',
        newTruckersMPGameVersionReleaseNotificationText: 'Została wydana nowa wersja TruckersMP',
        french: 'Francuski',
        bulgarian: 'Bułgarski',
        finnish: 'Fiński',
        spanish: 'Hiszpański',
        dutch: 'Holenderski',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'Wg nazwy użytkownika Steam',
        searchBySteamID: 'Wg Steam ID',
        searchByTruckersMPID: 'Wg TruckersMP ID',
        searchButton: 'Szukaj',
        searchFieldPlaceholder: 'Specyficzny termin wyszukiwania',
        steamProfile: 'Profil Steam',
        truckersMPProfile: 'Profil TruckersMP',
        viewSteamProfile: 'Zobacz profil Steam',
        viewTruckersMPProfile: 'Zobacz profil TruckersMP',
        bans: 'Historia banów',
        noBans: 'Brak banów',
        nickName: 'Nazwa:',
        onTruckersMPfrom: 'Na TruckersMP od', //Na TruckersMP od dnia
        onSteamFrom: 'Na Steam od', // Na Steam od dnia
        role: 'Rola:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Prawdziwe imię:',
        steamUsername: 'Nazwa użytkownika Steam:',
        steamID: 'Steam ID:',
        issuedBy: 'Wydane przez {0} na {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Wygasa:', // Wygasa: Dnia
        polish: 'Polski'
    },
    // Credits Tobias Groß 
    de: {
        currentGameVersion: 'Derzeitige Spiel Version: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Server',
        routeMeetupsTitle: 'Treffen',
        routeSettingsTitle: 'Einstellungen',
        routeAboutTitle: 'Über diese App',
        routeRulesTitle: 'TruckersMP Regeln',
        supportedETSVersion: 'Unterstützte ETS2-Version: ',
        supportedATSVersion: 'Unterstützte ATS-Version: ',
        lastReleaseDate: 'Letztes Update: ',
        playersOnline: 'Spieler online',
        currentGameTime: 'Zeit im Spiel: ',
        servers: 'Server',
        about: 'Über',
        meetups: 'Treffen',
        searchPlayer: 'Spieler suchen',
        rules: 'Regeln',
        settings: 'Einstellungen',
        playersInQueue: 'Spieler in Warteschlange',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Geschwindigkeitsbegrenzer ein',
        speedLimiterDisabled: 'Geschwindigkeitsbegrenzer aus',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Zu Kalendar hinzufügen',
        language: 'Sprache: ',
        enableAutoRefresh: 'Auto-aktualisieren ein',
        autoRefreshGameTime: 'Auto-aktualisieren der Zeit im Spiel',
        autoRefreshServersList: 'Auto-aktualisieren der Server-Liste',
        refreshServersListEvery: 'Auto-aktualisieren der Server alle',
        seconds10: '10 Sekunden',
        seconds30: '30 Sekunden',
        minute: '1 Minute',
        minutes2: '2 Minuten',
        minutes5: '5 Minuten',
        minutes10: '10 Minuten',
        minutes20: '20 Minuten',
        customizations: 'Anpassungen',
        settingsHeaderLanguage: 'Sprache',
        settingsHeaderTheme: 'Thema',
        english: 'Englisch',
        italian: 'Italienisch',
        eventAddedToCalendar: 'Ereignis zum Kalendar hinzugefügt',
        eventTitle: 'TruckersMP Ereignis - Treffen',
        eventNotes: 'Organisiert von {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Webseite',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steamgruppe',
        readMore: 'Mehr lesen',
        newsAndEvents: 'News und Ereignisse',
        gameStatus: 'Spiel Status',
        newTruckersMPGameVersionReleaseNotificationText: 'Neue TruckersMP Version wurde veröffentlicht',
        french: 'Französich',
        bulgarian: 'Bulgarisch',
        finnish: 'Finnisch',
        spanish: 'Spanisch',
        dutch: 'Niederländisch',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'Mit Steamnamen',
        searchBySteamID: 'Mit Steam-ID',
        searchByTruckersMPID: 'Mit TruckersMP-ID',
        searchButton: 'Suche',
        searchFieldPlaceholder: 'Spezifischer Suchbegriff',
        steamProfile: 'Steamprofil',
        truckersMPProfile: 'TruckersMP-Profil',
        viewSteamProfile: 'Siehe Steamprofil an',
        viewTruckersMPProfile: 'Siehe TruckersMP-Profil an',
        bans: 'Bann-Geschichte',
        noBans: 'Keine Banns',
        nickName: 'Spitzname:',
        onTruckersMPfrom: 'Auf TruckersMP seit', // On TruckersMP from DATE
        onSteamFrom: 'Auf Steam seit', // On Steam from DATE
        role: 'Rolle:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Real Name:',
        steamUsername: 'Steamname:',
        steamID: 'Steam-ID:',
        issuedBy: 'Ausgestellt durch {0} on {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Läuft aus:', // Expires: DATE
        liveMapRouteTitle: 'Live-Karte',
        checkingOnlineState: 'Online-Status überprüfen...',
        viewOnMap: 'Auf Karte anzeigen',
        hideHeatMap: 'Heatmap verstecken',
        showDirection: 'Richtung anzeigen',
        showTrucks: 'LKWs anzeigen',
        showName: 'Namen anzeigen',
        showID: 'ID anzeigen',
        places: 'Orte'
    },
    // Credits ActiV3Drifter (https://forum.truckersmp.com/index.php?/profile/93979-activ3drifter/)
    cs: {
        currentGameVersion: 'Aktuální verze hry: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'TruckersMP Servery',
        routeMeetupsTitle: 'Srazy',
        routeSettingsTitle: 'Nastavení',
        routeAboutTitle: 'O Aplikaci',
        routeRulesTitle: 'TruckersMP Pravidla',
        supportedETSVersion: 'Podporována ETS verze: ',
        supportedATSVersion: 'Podporována ATS verze: ',
        lastReleaseDate: 'Poslední datum vydání: ',
        playersOnline: 'hráči online',
        currentGameTime: 'Aktuální herní čas: ',
        servers: 'Servery',
        about: 'O aplikaci',
        meetups: 'Srazy',
        searchPlayer: 'Vyhledat hráče',
        rules: 'Pravidla',
        settings: 'Nastavení',
        playersInQueue: 'hráči ve frontě',
        online: 'Online',
        offline: 'Offline',
        speedLimiterEnabled: 'Omezovač rychlosti zapnut',
        speedLimiterDisabled: 'Omezovač rychlosti vypnut',
        status: 'Status',
        info: 'Info',
        addToCalendar: 'Přidat do kalendáře',
        language: 'Jazyk: ',
        enableAutoRefresh: 'Zapnout automatické obnovování',
        autoRefreshGameTime: 'Automatické obnovování času',
        autoRefreshServersList: 'Automatické obnovování serverů',
        refreshServersListEvery: 'Obnovování serverů každých',
        seconds10: '10 sekund',
        seconds30: '30 sekund',
        minute: '1 minuta',
        minutes2: '2 minuty',
        minutes5: '5 minuty',
        minutes10: '10 minut',
        minutes20: '20 minut',
        customizations: 'Přizpůsobení',
        settingsHeaderLanguage: 'Jazyk',
        settingsHeaderTheme: 'Téma',
        english: 'Angličtina',
        italian: 'Italština',
        eventAddedToCalendar: 'Event přidán do kalendáře',
        eventTitle: 'TruckersMP Event - Sraz',
        eventNotes: 'Organizován {0} - Server: {1}',
        truckersMPWebSite: 'TruckersMP Stránka',
        truckersMPForum: 'TruckersMP Forum',
        truckersMPSteamGroup: 'TruckersMP Steam Skupina',
        readMore: 'Přečtěte si více',
        newsAndEvents: 'Novinky a eventy',
        gameStatus: 'Herní status',
        newTruckersMPGameVersionReleaseNotificationText: 'Nová verze TruckersMP',
        french: 'Francouština',
        bulgarian: 'Bulharština',
        finnish: 'Finština',
        spanish: 'Španělština',
        dutch: 'Holandština',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'Pomocí Steam Jména',
        searchBySteamID: 'Pomocí Steam ID',
        searchByTruckersMPID: 'Pomocí TruckersMP ID',
        searchButton: 'Vyhledat',
        searchFieldPlaceholder: 'Upřesni vyhledávání',
        steamProfile: 'Steam profil',
        truckersMPProfile: 'TruckersMP profil',
        viewSteamProfile: 'Ukázat Steam profil',
        viewTruckersMPProfile: 'Ukázat TruckersMP profil',
        bans: 'Historie Banů', 
        noBans: 'Žádné bany',
        nickName: 'Přezdívka:',
        onTruckersMPfrom: 'Na TruckersMP od', // On TruckersMP from DATE
        onSteamFrom: 'Na Steamu od', // On Steam from DATE
        role: 'Role:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Pravé jméno:',
        steamUsername: 'Steam Přezdívka:',
        steamID: 'Steam ID:',
        issuedBy: 'Zabanován {0} v {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Vypršení:' // Expires: DATE
    },
     // Credits CJMAXiK (https://truckersmp.com/user/3861)
    ru: {
        currentGameVersion: 'Текущая версия игры: ',
        routeHomeTitle: 'Trucky Companion App',
        routeServersTitle: 'Сервера TruckersMP',
        routeMeetupsTitle: 'Конвои',
        routeSettingsTitle: 'Настройки',
        routeAboutTitle: 'О приложении',
        routeRulesTitle: 'Правила TruckersMP',
        supportedETSVersion: 'Поддерживаемая версия ETS: ',
        supportedATSVersion: 'Поддерживаемая версия ATS: ',
        lastReleaseDate: 'Дата релиза: ',
        playersOnline: 'игрок(ов) в сети',
        currentGameTime: 'Время в игре: ',
        servers: 'Сервера',
        about: 'О приложении',
        meetups: 'Конвои',
        searchPlayer: 'Поиск игрока',
        rules: 'Правила',
        settings: 'Настройки',
        playersInQueue: 'игрок(ов) в очереди',
        online: 'В сети',
        offline: 'Не в сети',
        speedLimiterEnabled: 'Ограничение скорости включено',
        speedLimiterDisabled: 'Ограничение скорости отключено',
        status: 'Статус',
        info: 'Информация',
        addToCalendar: 'Добавить в календарь',
        language: 'Язык: ',
        enableAutoRefresh: 'Включить авто-обновление',
        autoRefreshGameTime: 'Автообновление времени в игре',
        autoRefreshServersList: 'Автообновление списка серверов',
        refreshServersListEvery: 'Обновлять список серверов каждые',
        seconds10: '10 секунд',
        seconds30: '30 секунд',
        minute: '1 минуту',
        minutes2: '2 минуты',
        minutes5: '5 минут',
        minutes10: '10 минут',
        minutes20: '20 минут',
        customizations: 'Настройки',
        settingsHeaderLanguage: 'Язык',
        settingsHeaderTheme: 'Тема',
        english: 'Английский',
        italian: 'Итальянский',
        eventAddedToCalendar: 'Событие добавлено в календарь',
        eventTitle: 'Событие TruckersMP - Конвой',
        eventNotes: 'Огранизатор: {0} - Сервер: {1}',
        truckersMPWebSite: 'Веб-сайт TruckersMP',
        truckersMPForum: 'Форум TruckersMP',
        truckersMPSteamGroup: 'Группа Steam TruckersMP',
        readMore: 'Читать далее',
        newsAndEvents: 'Новости и события',
        gameStatus: 'Статус игры',
        newTruckersMPGameVersionReleaseNotificationText: 'Выпущена новая версия TruckersMP',
        french: 'Французский',
        bulgarian: 'Болгарский',
        finnish: 'Финский',
        spanish: 'Испанский',
        dutch: 'Голландский',
        polish: 'Польский',
        russian: 'Русский',
        // LABELS FOR SEARCH PLAYER SCREEN
        searchBySteamUsername: 'По никнейму Steam',
        searchBySteamID: 'По Steam ID',
        searchByTruckersMPID: 'По TruckersMP ID',
        searchButton: 'Поиск',
        searchFieldPlaceholder: 'Введите запрос',
        steamProfile: 'Профиль Steam',
        truckersMPProfile: 'Профиль TruckersMP',
        viewSteamProfile: 'Посмотреть профиль Steam',
        viewTruckersMPProfile: 'Посмотреть профиль TruckersMP',
        bans: 'История банов',
        noBans: 'Нет банов',
        nickName: 'Никнейм:',
        onTruckersMPfrom: 'В TruckersMP с', // On TruckersMP from DATE
        onSteamFrom: 'В Steam с', // On Steam from DATE
        role: 'Роль:',
        truckersMPID: 'TruckersMP ID:',
        realName: 'Настоящее имя:',
        steamUsername: 'Никнейм Steam:',
        steamID: 'Steam ID:',
        issuedBy: 'Выдан {0} {1}', // complete phrase is: Issued by NICKNAME on DATE
        expires: 'Истекает:' // Expires: DATE
    }
});

//strings.setLanguage(settings.language);

module.exports = strings;