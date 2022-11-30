// let caixaDeDialeg = {
  function obreCaixaDeDialeg(titol, missatge) {
    document.getElementById("titol-dialeg").innerHTML = titol;
    document.getElementById("text-dialeg").innerHTML = missatge;
    document.getElementById("embolcall-dialeg").style.display = "block";
  }

  function tancaCaixaDeDialeg() {
    document.getElementById("embolcall-dialeg").style.display = "none";
  }

// let caixaDeDialeg = {
//     obre : function (titol, missatge) {
//       document.getElementById("titol-dialeg").innerHTML = titol;
//       document.getElementById("text-dialeg").innerHTML = missatge;
//       document.getElementById("embolcall-dialeg").style.display = "block";
//     },
//     tanca : function () {
//       document.getElementById("embolcall-dialeg").style.display = "none";
//     }
//   };


  let barraDeMissatge = {
    afegir : function (message) {
      let barraDiv = document.createElement("div");
      barraDiv.classList.add("missatge-barra");
      barraDiv.innerHTML = message;
      barraDiv.addEventListener("click", barraDeMissatge.tancar);
      document.getElementById("embolcall-barra").appendChild(barraDiv);
    },
    tancar : function () {
      this.remove();
    }
  };

  function executaSubmit () {
    document.getElementById("missatge-formulari").innerHTML = "Missatge que cal que aparegui després de fer el submit!";
    return false;
  }

  let torrada = {
    temporitzador : null,
    
    mostra : function (message) {
      document.getElementById("caixa-torradora").innerHTML = message;
      document.getElementById("caixa-torradora").style.display = "block";

      // Atura el temporitzador si encara esta corrent
      if (torrada.temporitzador != null) {
        clearTimeout(torrada.temporitzador);
        torrada.temporitzador = null;
      }

      // Modifica el temps en que mostrarà la torrada
      torrada.temporitzador = setTimeout(torrada.amaga, 3000); 
    },
    
    amaga : function () {
      document.getElementById("caixa-torradora").style.display = "none";
      clearTimeout(torrada.temporitzador);
      torrada.temporitzador = null;
    }
  };