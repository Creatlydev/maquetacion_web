import { event_press, observer } from "./container-resize.js";
import { open_navbar } from "./events.js";
// Observar el evento resize del elemento
/**
 * element: Elemento a observar
 */
observer(document.getElementById("header"));

event_press(document.getElementById("header"));

// Events
open_navbar() 