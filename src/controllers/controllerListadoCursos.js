
 import { listarCursos } from "../models/modelCursos";

 
     let repetir = true;

     while (repetir) {
        
         let opcion = prompt ("Seleccione la opcion: \n 1. Listar el curso \n 2. Limpiar la consola \n 3. Finalizar")  

     switch (opcion) {

      

          case "1": 
           
         listarCursos();
            
         break;

         case "2":
           
               console.clear();

         case "3":
             
              repetir = false;

         break;

              default:

            break;
     }

     }
    