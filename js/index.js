var teclas = {
    ENTER: 13,
    UP:38
};

// -----Variables-----

document.addEventListener("keydown", teclado);
function teclado(evento) {
    // console.log(evento);
    if (evento.keyCode == teclas.ENTER){
        document.getElementById("icon").style.display = "block";
    }
    if (evento.keyCode == teclas.ENTER) {
        switch (signo.value ) { 
            case "aries":
            case "Aries":
                document.getElementById("respuesta").innerHTML = nombre.value + ", la familia es parte de la vida, te lleves bien o mal con ellos, para una buena gracia es fundamental siempre estar agradecido sin importar la clase de familia con la que cuentas. Esa es la reflexión que la Luna creciente atrae para hoy, el mejorar la calidad de tiempo que brindas a quienes amas."
                document.getElementById("icon").src = "./media/icons/Signos/aries-64.png"
                break;
            case "virgo":
            case "Virgo":
                document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio no siempre tiene tan mala energía en su etapa retrógrada como parece. Estás mejor de lo que podrías haber estado antes, eso es una posibilidad amplia. Insiste en conseguir lo que quieres sin importar los obstáculos pues hoy podrías tener buenos resultados."
                document.getElementById("icon").src = "./media/icons/Signos/virgo-64.png"
                break;
            case "escorpio":
            case "Escorpio":
                document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio aparenta ser gris cuando se encuentra siendo retrógrado, pero no será tan incómodo hoy pues podrías contar con buenas noticias."
                document.getElementById("icon").src = "./media/icons/Signos/escorpio-64.png"
                break;
            case "cancer":
            case "Cancer":
                document.getElementById("respuesta").innerHTML = nombre.value + " , la regencia de Acuario está mucho más presente que nunca, para ello estarías haciendo todo lo posible por poner en claro y en orden, algunas dudas que tengan hacia ti."
                document.getElementById("icon").src = "./media/icons/Signos/cancer-64.png"
                break;
            case "tauro":
            case "Tauro":
                document.getElementById("respuesta").innerHTML = nombre.value + " , deja que la energía de Acuario con su regencia esté cada día más presente para que disipes dudas sobre las decisiones que tomarías a partir de este momento, es probable que en este momento sientas que no tienes tanta seguridad como antes, pero para ser más certero, confía en tu instinto."
                document.getElementById("icon").src = "./media/icons/Signos/tauro-64.png"
                break;
            case "leo":
            case "Leo":
                document.getElementById("respuesta").innerHTML = nombre.value + " , hoy Mercurio hace de las suyas para que tus pensamientos no sean precisamente equilibrados, encuentra en un buen amigo que se aparezca de pronto, la confianza para canalizar todo lo que no necesitas, quitarte cargas y sentir que todo vuelve a su curso de nuevo."
                document.getElementById("icon").src = "./media/icons/Signos/leo-64.png"
                break;
            case "piscis":
            case "Piscis":
                document.getElementById("respuesta").innerHTML = nombre.value + " , Acuario se encuentra de la mejor manera rigiendo tu energía y en plenitud te llenaría de positividad. Por ello el aire y el agua hoy, tanto en el signo de regencia como el propio, anuncian que todo sea mucho más llevadero hoy."
                document.getElementById("icon").src = "./media/icons/Signos/piscis-64.png"
                break;
            case "sagitario":
            case "Sagitario":
                document.getElementById("respuesta").innerHTML = nombre.value + " , estarías sorprendiendo a propios y extraños si de pronto haces que todo fluya de manera natural para ti."
                document.getElementById("icon").src = "./media/icons/Signos/sagitario-64.png"
                break;
            case "acuario":
            case "Acuario":
                document.getElementById("respuesta").innerHTML = nombre.value + " , la zona de confort no siempre es mala, es un lugar mental o físico que asemeja la calma para que tomes un respiro de pronto. Ayuda a quien consideres que está herido o en vulnerabilidad. Eso es de lo que hablan los signos en tránsito."
                document.getElementById("icon").src = "./media/icons/Signos/acuario-64.png"
                break;
            case "capricornio":
            case "Capricornio":
                document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio siempre presente en los días tan llenos de prosperidad, en los cuales podría ser que contrarreste la energía, pero no te sientas en bajas vibraciones, recuerda que todos somos luz y oscuridad a la vez, más bien encontrarás el equilibrio de una manera inesperada."
                document.getElementById("icon").src = "./media/icons/Signos/capricornio-64.png"
                break;
            case "geminis":
            case "Geminis":
            case "géminis":
            case "Géminis":
                document.getElementById("respuesta").innerHTML = nombre.value + " , puede que Mercurio te ponga de cabeza, pero ten la confianza que de pronto terminará esa sensación."
                document.getElementById("icon").src = "./media/icons/Signos/geminis-64.png"
                break;
            case "libra":
            case "Libra":
                document.getElementById("respuesta").innerHTML = nombre.value + " , algunas personas se mostrarían amables contigo en un día donde Mercurio retrógrado ejerce con fortaleza el desequilibrio mareo."
                document.getElementById("icon").src = "./media/icons/Signos/libra-64.png"
                break;
            default:
                console.log("Error")
                break
        }
    }
}


function Enviar(nombre,signo) {
    document.getElementById("icon").style.display = "block";
    switch (signo.value) { 
        case "aries":
        case "Aries":
            document.getElementById("respuesta").innerHTML = nombre.value + ", la familia es parte de la vida, te lleves bien o mal con ellos, para una buena gracia es fundamental siempre estar agradecido sin importar la clase de familia con la que cuentas. Esa es la reflexión que la Luna creciente atrae para hoy, el mejorar la calidad de tiempo que brindas a quienes amas."
            document.getElementById("icon").src = "./media/icons/Signos/aries-64.png"
            break;
        case "virgo":
        case "Virgo":
            document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio no siempre tiene tan mala energía en su etapa retrógrada como parece. Estás mejor de lo que podrías haber estado antes, eso es una posibilidad amplia. Insiste en conseguir lo que quieres sin importar los obstáculos pues hoy podrías tener buenos resultados."
            document.getElementById("icon").src = "./media/icons/Signos/virgo-64.png"
            break;
        case "escorpio":
        case "Escorpio":
            document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio aparenta ser gris cuando se encuentra siendo retrógrado, pero no será tan incómodo hoy pues podrías contar con buenas noticias."
            document.getElementById("icon").src = "./media/icons/Signos/escorpio-64.png"
            break;
        case "cancer":
        case "Cancer":
            document.getElementById("respuesta").innerHTML = nombre.value + " , la regencia de Acuario está mucho más presente que nunca, para ello estarías haciendo todo lo posible por poner en claro y en orden, algunas dudas que tengan hacia ti."
            document.getElementById("icon").src = "./media/icons/Signos/cancer-64.png"
            break;
        case "tauro":
        case "Tauro":
            document.getElementById("respuesta").innerHTML = nombre.value + " , deja que la energía de Acuario con su regencia esté cada día más presente para que disipes dudas sobre las decisiones que tomarías a partir de este momento, es probable que en este momento sientas que no tienes tanta seguridad como antes, pero para ser más certero, confía en tu instinto."
            document.getElementById("icon").src = "./media/icons/Signos/tauro-64.png"
            break;
        case "leo":
        case "Leo":
            document.getElementById("respuesta").innerHTML = nombre.value + " , hoy Mercurio hace de las suyas para que tus pensamientos no sean precisamente equilibrados, encuentra en un buen amigo que se aparezca de pronto, la confianza para canalizar todo lo que no necesitas, quitarte cargas y sentir que todo vuelve a su curso de nuevo."
            document.getElementById("icon").src = "./media/icons/Signos/leo-64.png"
            break;
        case "piscis":
        case "Piscis":
            document.getElementById("respuesta").innerHTML = nombre.value + " , Acuario se encuentra de la mejor manera rigiendo tu energía y en plenitud te llenaría de positividad. Por ello el aire y el agua hoy, tanto en el signo de regencia como el propio, anuncian que todo sea mucho más llevadero hoy."
            document.getElementById("icon").src = "./media/icons/Signos/piscis-64.png"
            break;
        case "sagitario":
        case "Sagitario":
            document.getElementById("respuesta").innerHTML = nombre.value + " , estarías sorprendiendo a propios y extraños si de pronto haces que todo fluya de manera natural para ti."
            document.getElementById("icon").src = "./media/icons/Signos/sagitario-64.png"
            break;
        case "acuario":
        case "Acuario":
            document.getElementById("respuesta").innerHTML = nombre.value + " , la zona de confort no siempre es mala, es un lugar mental o físico que asemeja la calma para que tomes un respiro de pronto. Ayuda a quien consideres que está herido o en vulnerabilidad. Eso es de lo que hablan los signos en tránsito."
            document.getElementById("icon").src = "./media/icons/Signos/acuario-64.png"
            break;
        case "capricornio":
        case "Capricornio":
            document.getElementById("respuesta").innerHTML = nombre.value + " , Mercurio siempre presente en los días tan llenos de prosperidad, en los cuales podría ser que contrarreste la energía, pero no te sientas en bajas vibraciones, recuerda que todos somos luz y oscuridad a la vez, más bien encontrarás el equilibrio de una manera inesperada."
            document.getElementById("icon").src = "./media/icons/Signos/capricornio-64.png"
            break;
        case "geminis":
        case "Geminis":
        case "géminis":
        case "Géminis":
            document.getElementById("respuesta").innerHTML = nombre.value + " , puede que Mercurio te ponga de cabeza, pero ten la confianza que de pronto terminará esa sensación."
            document.getElementById("icon").src = "./media/icons/Signos/geminis-64.png"
            break;
        case "libra":
        case "Libra":
            document.getElementById("respuesta").innerHTML = nombre.value + " , algunas personas se mostrarían amables contigo en un día donde Mercurio retrógrado ejerce con fortaleza el desequilibrio mareo."
            document.getElementById("icon").src = "./media/icons/Signos/libra-64.png"
            break;
        default:
            console.log("Error")
            break
    }
}