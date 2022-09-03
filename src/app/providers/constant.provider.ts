import { Injectable } from '@angular/core';
import { Mensaje } from '../models/Mensaje';

@Injectable({
    providedIn: 'root',
})
export class ConstantProvider {

    public TEXTOS = new Array<Mensaje>();

    constructor() {
        this.TEXTOS.push(new Mensaje(
            'D1',
            1,
            'Pensamientos negativos:',
            'No es de ayuda adelantarse a sucesos futuros. Racionalizar los pensamientos evita situarse en un panorama negativo.'));

        this.TEXTOS.push(new Mensaje(
            'D2',
            2,
            'Círculo social:',
            'No se puede vivir aislado, es imprescindible darse tiempo de conocer, apreciar y valorar las buenas amistades.'));

        this.TEXTOS.push(new Mensaje(
            'D3-1-1',
            1,
            'Consumo de alcohol:',
            'Beber es muy perjudicial cuando se convierte en un hábito y se usa para sobrellevar problemas emocionales. Además, es un depresor del sistema nervioso.'));

        this.TEXTOS.push(new Mensaje(
            'D3-3-1',
            3,
            'Síntomas de la depresión:',
            'Este trastorno del estado de ánimo se manifiesta con la dificultad para concentrarse en una tarea, alteraciones en el sueño, ansiedad, entre otros.'));

        this.TEXTOS.push(new Mensaje(
            'D3-1-2',
            1,
            'La comparación:',
            'Genera sentimientos de inferioridad, culpa, baja autoestima, ansiedad y vergüenza de ser quien se es. Esto no favorece al desarrollo personal.'));

        this.TEXTOS.push(new Mensaje(
            'D3-2-1',
            2,
            'Autoconcepto:',
            'Saber quien es uno mismo es vital. Trabajar en conocerse, amarse tal como se es y perdonarse, ayuda a ser la mejor versión propia.'));

        this.TEXTOS.push(new Mensaje(
            'D3-1-3',
            1,
            'Aislamiento:',
            'El sentimiento de soledad y fragilidad aumenta cuando una persona se aísla de quienes se preocupan y lo quieren.'));

        this.TEXTOS.push(new Mensaje(
            'D4-2-1',
            2,
            'Tiempo personal:',
            'Al menos 20 minutos al día hay que dedicar tiempo para uno. Escribir las emociones y pensamientos logra conciencia interior y permite pedir ayuda en los momentos vulnerables.'));

        this.TEXTOS.push(new Mensaje(
            'D4-3-1',
            3,
            'Resiliencia:',
            'Es la capacidad para adaptarse a situaciones estresantes, pero no se logrará evadiendo o negando aquello que causa malestar.'));

        this.TEXTOS.push(new Mensaje(
            'D4-1-1',
            1,
            'Desorden:',
            'El caos del interior se refleja en el exterior. Adquirir el hábito de ordenar el entorno evita pasar momentos de estrés o desesperación.'));

        this.TEXTOS.push(new Mensaje(
            'D5-1-1',
            1,
            'Procrastinar:',
            'Desperdiciar el tiempo en actividades que suplantan las propias responsabilidades genera sentimientos de culpa, rechazo o angustia.'));

        this.TEXTOS.push(new Mensaje(
            'D5-1-2',
            1,
            'Sobreestimulación:',
            'Los largos periodos de insomnio más las bebidas energizantes sobreestimulan el sistema nervioso y desgastan el cerebro.'));

        this.TEXTOS.push(new Mensaje(
            'D5-3-1',
            3,
            'Causas de la depresión:',
            'Cualquier exceso lleva a la depresión. El estrés, la sobreexigencia y la presión académica, pueden volverse perjudiciales para la salud mental.'));

        this.TEXTOS.push(new Mensaje(
            'D6-3-1',
            3,
            'Química cerebral:',
            'La Noradrenalina genera estrés para alertar al organismo y estimula la ausencia de sueño. El estrés crónico genera depresión.'));

        this.TEXTOS.push(new Mensaje(
            'D6-1-1',
            1,
            'Los alimentos:',
            'Comer nutre el cuerpo al igual que el cerebro, no alimentarse bien y en un horario fijo pueden causar depresión.'));

        this.TEXTOS.push(new Mensaje(
            'D6-2-1',
            2,
            'Hablar:',
            'Ante momentos angustiantes hay que buscar con quien hablar y saber que te puede guiar o aconsejar para hallar una solución. No hay que guardar silencio.'));
        this.TEXTOS.push(new Mensaje(
            'D7-1-1',
            1,
            'Uso de redes:',
            'El 70% de los jóvenes entre 16 y 24 años aumentan el uso de redes sociales en casos de depresión. Las personas que pasan en redes más de 2 horas al día son más propensas a sufrir un tipo de trastorno mental.'));
        this.TEXTOS.push(new Mensaje(
            'D7-3-1',
            3,
            'Síntomas de la depresión:',
            'El sentimiento de vacío, la falta de motivación interna, incluso la carencia de emociones (dolor, alegría, tristeza) son señales de alerta de la depresión.'));
        this.TEXTOS.push(new Mensaje(
            'D7-2-1',
            2,
            'Actividad recreativa:',
            'Hacer ejercicio o practicar un hobbie liberan la tensión. El ejercicio físico ayuda a segregar serotonina y dopamina, hormonas que ayudan a regular el estado de ánimo.'));

        // D8 amigo
        this.TEXTOS.push(new Mensaje(
            'D8A-3-1',
            1,
            'Estigma social:',
            'La depresión no se puede vencer con fuerza de voluntad, esto sirve únicamente para pedir ayuda. Presionar a una persona para que cambie su estado de ánimo agravia el sentimiento de culpa y vergüenza, evitando que quien necesite, pida verdadera ayuda.'));

        // D8 psicologo
        this.TEXTOS.push(new Mensaje(
            'D8P-2-1',
            2,
            'Terapia:',
            'No se es débil ni loco por buscar mejorar la salud mental, es un derecho y un deber para mejorar la calidad de vida. Ir a terapia brinda las herramientas necesarias.'));
        this.TEXTOS.push(new Mensaje(
            'D8P-2-2',
            2,
            'Actividad física:',
            'Es vital tener tiempos de ocio, de reposo y recreatividad. Equilibrar estos momentos practicando un deporte del agrado personal, mejora la salud mental.'));
        this.TEXTOS.push(new Mensaje(
            'D8P-2-3',
            2,
            'Vida social:',
            'Buscar pasar buenos momentos con amistades haciendo actividades al aire libre, o aquellas que generen paz y estabilidad, es importante.'));
        this.TEXTOS.push(new Mensaje(
            'D8P-3-1',
            3,
            'Estabilidad emocional:',
            'Empezar un tratamiento para mejorar la salud mental brinda herramientas para atravesar y superar las dificultades en la vida, pero no las evita. Perseverar permite ver grandes resultados.'));
        this.TEXTOS.push(new Mensaje(
            'D8P-3-2',
            3,
            'Alimentación saludable:',
            'Aumentar el consumo de frutas, verduras, legumbres, cereales enteros, frutos secos y semillas, evitar procesados y comida rápida, así como el exceso de azúcares elaboradas, ayuda a cuidar el cuerpo y también la mente.'));
        //D8 internet

        this.TEXTOS.push(new Mensaje(
            'D8I-3-1',
            3,
            'Síntomas de la depresión:',
            'La presencia de migrañas, dolores físicos, tensión en los hombros y espalda, irritabilidad, agresividad y reducción de la energía, son señales de alerta de la depresión.'));
        this.TEXTOS.push(new Mensaje(
            'D8I-2-1',
            1,
            'Horas de sueño:',
            'No dormir las horas necesarias afecta el estado de ánimo, aumenta la irritabilidad, la capacidad de atención se reduce facilitando la distracción y se vuelve difícil concentrarse en las tareas.'));
        this.TEXTOS.push(new Mensaje(
            'D8I-1-1',
            3,
            'El suicidio:',
            'La depresión es la primera causa de suicidio en jóvenes de 18 a 24 años. Cada año se suicidan cerca de 800 000 personas. Es un problema real e importante. Si se necesita ayuda, se debe hablar.'));





        //D#-Type-NumeroSecuencial
        // 1 factor de riesgo
        // 2 factor de protección
        // 3 clave para la salud mental
    }
}

// D8 – Hablo con un amigo

// Clave para la salud mental
// 
// 

// Factor de riesgo para la salud mental
// Horas de sueño:
// No dormir las horas necesarias afecta el estado de ánimo, aumenta la irritabilidad, la capacidad de atención se reduce facilitando la distracción y se vuelve difícil concentrarse en las tareas.

// Clave para la salud mental
// 
// 







