const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      frasesOriginales: [
        { frases: '"El software se come al mundo"', autor: 'Marc Andreessen' },
        { frases: '"Cualquier tecnología lo suficientemente avanzada es indistinguible de la magia."', autor: 'Arthur C. Clarke' },
        { frases: '"La programación hoy es una carrera entre los ingenieros de software que luchan por crear programas más grandes y mejores a prueba de tontos, y el Universo que trata de producir tontos más grandes y mejores. Hasta ahora, el Universo va ganando."', autor: 'Rick Cook' },
        { frases: '"Programar es como escribir un libro... excepto que si te equivocas en una sola palabra, todo el maldito castillo de naipes se derrumba."', autor: 'Damian Conway' },
        { frases: '"Los buenos programadores usan su cerebro, pero los mejores programadores lo evitan y lo mejoran."', autor: 'Bill Gates' },
        { frases: '"No te preocupes si no funciona bien. Si todo funcionara, no tendrías trabajo."', autor: 'Mosher\'s Law of Software Engineering' },
        { frases: '"La simplicidad es la máxima sofisticación."', autor: 'Leonardo da Vinci' },
        { frases: '"El código es como el humor. Cuando tienes que explicarlo, es malo."', autor: 'Cory House' },
        { frases: '"Primero resuelve el problema. Luego, escribe el código."', autor: 'John Johnson' },
        { frases: '"El único modo de hacer un buen trabajo es amar lo que haces."', autor: 'Steve Jobs' }
      ],
      fraseSeleccionada: null,
      editando: null,
      fraseEditada: { frases: '', autor: '' },
      nuevaFrase: { frases: '', autor: '' }, // Objeto para almacenar la nueva frase
      mensaje: '' // Variable para almacenar el mensaje de notificación
    };
  },
  
  methods: {
    eliminarFrase(index) {
      this.frasesOriginales.splice(index, 1);
      if (this.fraseSeleccionada === index) {
        this.fraseSeleccionada = null;
      }
      this.mensaje = 'Frase eliminada con éxito!';
      setTimeout(() => this.mensaje = '', 3000); // Oculta el mensaje después de 3 segundos
    },
    
    editarFrase(index) {
      this.editando = index;
      this.fraseEditada = { ...this.frasesOriginales[index] };
    },
    
    guardarEdicion(index) {
      this.frasesOriginales[index] = { ...this.fraseEditada };
      this.editando = null;
      this.mensaje = 'Frase editada con éxito!';
      setTimeout(() => this.mensaje = '', 3000); // Oculta el mensaje después de 3 segundos
    },
    
    agregarFrase() {
      if (this.nuevaFrase.frases && this.nuevaFrase.autor) {
        this.frasesOriginales.push({ ...this.nuevaFrase });
        this.nuevaFrase.frases = '';
        this.nuevaFrase.autor = '';
        this.mensaje = 'Frase agregada con éxito!';
        setTimeout(() => this.mensaje = '', 3000); // Oculta el mensaje después de 3 segundos
      } else {
        this.mensaje = 'Por favor, completa ambos campos antes de agregar una frase.';
        setTimeout(() => this.mensaje = '', 3000); // Oculta el mensaje después de 3 segundos
      }
    }
  }
});

app.mount('#app');
