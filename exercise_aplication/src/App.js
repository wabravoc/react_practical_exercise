import './App.css';
import './static/css_file.css'
import React , {useState} from 'react';




function App() {

  // ACTIVIDAD UNO
  const [input_uno , set_num_uno] =useState(1);
  const [input_dos , set_num_dos] =useState(1);
  const [operacion_resultado , set_resultado] = useState(0);
  let operacion = ["SUMA","RESTA","MULTIPLICACION","DIVISION"];

  // ACTIVIDAD DOS
  const listaCiudades = ["Bogota","Cali","Bogota","Medellin",
                        "Bogota","Medellin","Bogota","Cali",
                        "Bogota","Neiva","Bogota","Cali","Bogota","Medellin"];

  const [result_lista,set_lista_result]=useState("CLICK BUTTON");  

  //ACTIVIDAD TRES
  const new_list=[];
  const arrayDeNumeros = [[1, 2], [3, 4], [5, 6]];
  const [resultado_lista_unificada, set_lista_unificada]= useState(0);
  let items_lista=0;

  const suma_numeros = () =>{
    set_resultado (parseFloat(input_uno) + parseFloat(input_dos));
  }

  const resta_numeros = () =>{
    set_resultado (parseFloat(input_uno) - parseFloat(input_dos));
  }
  const multiplicacion_numeros = () =>{
    set_resultado (parseFloat(input_uno) * parseFloat(input_dos));
  }
  const division_numeros = () =>{
    set_resultado (parseFloat(input_uno) / parseFloat(input_dos));
  }

  const add_value_to_num_uno = (n_uno) =>{
    set_num_uno(n_uno.target.value);
  }
  const add_value_to_num_dos = (n_dos) =>{
    set_num_dos(n_dos.target.value);
  }
 

  const calculo_ciudades = () =>{
    let duplicados=[];
    let cantidad=[];
    let ciudades_cantidad=[];
    let count=0;
    for(let i=0;i< listaCiudades.length;++i){

        if(i+1<listaCiudades.length && listaCiudades.slice(i+1).indexOf(listaCiudades[i])!=-1&& duplicados.indexOf(listaCiudades[i])==-1){
            duplicados.push(listaCiudades[i]);
        }
    }


    for(let f =0 ;f<duplicados.length ;++f){
      listaCiudades.forEach(function(element){
            if(duplicados[f]===element){
              count ++;
            }
        });
        cantidad.push(count);
        count =0;
    }

    for(let y=0; y<duplicados.length ; ++y){
        ciudades_cantidad.push("[" + cantidad[y] +  "  " + duplicados[y] + "]  ");

    }

    set_lista_result (ciudades_cantidad);

  }

  const lista_unificacion = () => {
    for(let z=0; z < arrayDeNumeros.length ; ++z){
      arrayDeNumeros[z].forEach(function(valor){
         new_list.push(valor); 
      });
      
    }

    new_list.forEach(function(elemento_lista){
      items_lista =items_lista +","+ elemento_lista 
    });

    console.log(items_lista)
    set_lista_unificada(items_lista);
  }




  return (
    <div className="fondo_de_pantalla read">
      <div className=" container navbar navbar-expand-lg navbar-dark bg-dark  align-items-center">
        <h3 className="col-sm col-7 navbar-brand align-items-center">OPERACION MATEMATICA</h3>
      </div>


      <div className="container text-center mt-2">
        <div className="col align-items-center">
          <div className="row">
            <div className="col-8">
            <input onChange={add_value_to_num_uno} value={input_uno} type="number"  class="form-control " placeholder="PRIMER NUMERO" />
            </div>
            <div className="col-8">
            <input onChange={add_value_to_num_dos} value={input_dos} type="number" class="form-control " placeholder="SEGUNDO NUMERO" />
            </div>
          </div>
        </div>
      </div>
      

      <div className="container text-center mt-2">
        <div className="col align-items-center">
          <div className="Content_Postss">
            <button onClick={suma_numeros} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">{operacion[0]}</button>
          </div>
          <div  className="Content_Postss">
            <button onClick={resta_numeros} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">{operacion[1]}</button>
          </div>
          <div  className="Content_Postss">
            <button onClick={multiplicacion_numeros} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">{operacion[2]}</button>
          </div>
          <div  className="Content_Postss">
            <button onClick={division_numeros} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">{operacion[3]}</button>
          </div>

        </div>
      </div>

      <div class = "read mt-2">
        <div className="Content_Postsm">
            <div  className="col-sm col-7"></div>
            <div  className="col-sm col-7 bg-light text-dark text-center"><h3> {operacion_resultado} </h3></div>
            <div  className="col-sm col-7"></div>
        </div>
      </div>

      <div className=" mt-2 container navbar navbar-expand-lg navbar-dark bg-dark  align-items-center">
        <h3 className="col-sm col-7 navbar-brand align-items-center">RETORNO DE LISTA</h3>
      </div>


      <div className="container text-center mt-2">
        <div className="col align-items-center">
          <div className="Content_Postss">
            <button onClick={calculo_ciudades} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">LISTA</button>
          </div>
        </div>
      </div>
      <div class = "read mt-2">
        <div className="Content_Postsm">
            <div  className="col-sm col-7"></div>
            <div  className="col-sm col-7 bg-light text-dark text-center"><h3>{result_lista} </h3></div>
            <div  className="col-sm col-7"></div>
        </div>
      </div>

      <div className=" container navbar navbar-expand-lg navbar-dark bg-dark  align-items-center">
        <h3 className="col-sm col-7 navbar-brand align-items-center">UNIFICAION DE LISTA</h3>
      </div>
      <div className="container text-center mt-2">
        <div className="col align-items-center">
          <div className="Content_Postss">
            <button onClick={lista_unificacion} className="col-sm col-7 btn btn-light btn-outline-dark butt" type="button">LISTA UNIFICACION</button>
          </div>
        </div>
      </div>
      <div class = "read mt-2">
        <div className="Content_Postsm">
            <div  className="col-sm col-7"></div>
            <div  className="col-sm col-7 bg-light text-dark text-center"><h3>{resultado_lista_unificada} </h3></div>
            <div  className="col-sm col-7"></div>
        </div>
      </div>

    </div>

  
  );
}

export default App;
