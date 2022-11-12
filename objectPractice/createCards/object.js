class Libro {
  constructor(portada, titulo, autor, editorial, publicado, estado) {
    this.portada = portada;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.publicado = publicado;
    this.estado = estado;
  }
  crearPortada() {
    const imagenDePortada = new Image(150, 200);
    imagenDePortada.src = this.portada;
    document.body.appendChild(imagenDePortada);
  }
  actualizarEstado(nuevoEstado) {
    if (nuevoEstado == "Sin iniciar") {
      return this.estado;
    } else if (nuevoEstado == "Iniciado") {
      this.estado = nuevoEstado;
      return this.estado;
    } else {
      return this.estado;
    }
  }
}

export default Libro;
