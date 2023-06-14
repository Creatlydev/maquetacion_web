import { event_press, observer } from "./container-resize.js";
import { click_button_dropdown } from "./events.js";

// Observar el evento resize del elemento
/**
 * element: Elemento a observar
 */
observer(document.getElementById("nav"));

event_press(document.getElementById("nav"));

/**
 * Eventos 
 */
click_button_dropdown()