document.addEventListener( "DOMContentLoaded", function () {
    updatingDOM()
  } );
  
  function updatingDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }