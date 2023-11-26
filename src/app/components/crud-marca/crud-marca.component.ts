import { Component, OnInit } from '@angular/core';
import { Marca } from 'src/app/models/marca';
import { Pais } from 'src/app/models/pais';
import { MarcaService } from 'src/app/services/marca.service';
import { PaisService } from 'src/app/services/pais.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crud-marca',
  templateUrl: './crud-marca.component.html',
  styleUrls: ['./crud-marca.component.css']
})
export class CrudMarcaComponent implements OnInit {

  marcas: Marca [] = [];
  filtro: string= "";

  listaPaises:Pais[] = []

  marca: Marca = {
    idMarca:0,
    nombre:"",
    fechaVigencia: new Date(),
    certificado:"",
    estado:1,
    pais:{
      idPais:0,
      nombre:"-1",
    }
  }

  submitted=false;

  constructor(private paisService:PaisService,
              private marcaService:MarcaService,
              ) {
    this.paisService.listasPais().subscribe(
         paises => {
          this.listaPaises = paises
         }
    );
  }

  ngOnInit(): void {
  }


  consultar() {
    this.marcaService.listaMarca(this.filtro==""?"todos":this.filtro).subscribe(
        (x) => this.marcas = x
    );
  }

  actualizarEstado(aux:Marca) {
    aux.estado = aux.estado == 0? 1 :0;
    this.marcaService.actualizarMarca(aux).subscribe(); 
  }

  registrar() {
    this.submitted = true;

    this.submitted = false;

    this.marcaService.registrarMarca(this.marca).subscribe(
      (x) => {
        document.getElementById("btn_reg_cerrar")?.click();
        Swal.fire('Mensaje', x.mensaje, 'success');
        this.marcaService.listaMarca(this.filtro==""?"todos":this.filtro).subscribe(
          (x) => this.marcas = x
        );
      }
    );

    this.marca = {
        idMarca:0,
        nombre:"",
        fechaVigencia: new Date(),
        certificado:"",
        estado:1,
        pais:{
          idPais:0,
          nombre:"-1",
        } 
    }

  }

  buscar(aux: Marca) {
    console.log("==> busca ==> idMarca ==>" + aux.idMarca);
     this.marca = aux;
  }

  actualizar() {
    this.submitted = true;

    this.submitted = false;

    this.marcaService.actualizarMarca(this.marca).subscribe(
      (x) => {
        document.getElementById("btn_act_cerrar")?.click();
        Swal.fire('Mensaje', x.mensaje, 'success');
        this.marcaService.listaMarca(this.filtro==""?"todos":this.filtro).subscribe(
          (x) => this.marcas = x
        );
      }
    );

    this.marca = {
        idMarca:0,
        nombre:"",
        fechaVigencia: new Date(),
        certificado:"",
        estado:1,
        pais:{
          idPais:0,
          nombre:"-1",
        } 
    }
  }

  eliminar(aux: Marca) {
       Swal.fire({
            title: '¿Estás Seguro?',
            text: "¡No se puede revertir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, Elimínalo'
       }).then((result) => {
          if(result.isConfirmed) {
               this.marcaService.eliminarMarca(aux.idMarca).subscribe(
                  (x) => {
                    Swal.fire('Mensaje', x.mensaje, 'success');
                    this.marcaService.listaMarca(this.filtro==""?"todos":this.filtro).subscribe(
                         (x) => this.marcas = x
                    );
                  }
              );
          }
       });
       

  }

}
