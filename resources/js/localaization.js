const L9n = {
    translations : {
        "English" : [
            "Home",
            "Language",
            "Sign In",
            "Sign Up",
            "Today",
            "Tomorrow",
            "Yesterday",
            "Country",
            "League",
            "Match",
            "News",
            "Load More",
            "Email Address",
            "Enter Email Address",
            "Password",
            "Enter Passward",
            "Confirm Password",
            "News Section is under Development",
            "Full Name",
            "OTP Code Sent To This Email",
            "Enter OTP Code",
            "Under Development",
            'Search by Country, Team or League.'
        ],
        "Spanish" : [
            "Casa",
            "Idioma",
            "Iniciar sesión",
            "Inscribirse",
            "Hoy dia",
            "Mañana",
            "Ayer",
            "País",
            "Liga",
            "Partido",
            "Noticias",
            "Carga más",
            "Dirección de correo electrónico",
            "Introduzca la dirección de correo electrónico",
            "Clave",
            "Ingresar Contraseña",
            "Confirmar contraseña",
            "La sección de noticias está en desarrollo",
            "Nombre completo",
            "Código OTP enviado a este correo electrónico",
            "Ingrese el código OTP",
            "En desarrollo",
            'Busca por País, Equipo o Liga.'
        ],
        "French" : [
            "Maison",
            "Langue",
            "S'identifier",
            "S'inscrire",
            "Aujourd'hui",
            "Demain",
            "Hier",
            "De campagne",
            "Ligue",
            "Rencontre",
            "Nouvelles",
            "Charger plus",
            "Adresse e-mail",
            "Entrer l'adresse e-mail",
            "Mot de passe",
            "Entrez le mot de passe",
            "Confirmez le mot de passe",
            "La section Actualités est en cours de développement",
            "Nom et prénom",
            "Code OTP envoyé à cet e-mail",
            "Entrez le code OTP",
            "En cours de développement",
            'Recherche par pays, équipe ou ligue.'
        ]
    },
    translate(Text,Language){
        const index = this.translations.English.indexOf(Text)
        if(index>=0 && this.translations[Language] && this.translations[Language][index]){
            return this.translations[Language][index]
        }else{
            return Text
        }
    },
    languages(){
        return Object.keys(this.translations)
    }
}

export default L9n