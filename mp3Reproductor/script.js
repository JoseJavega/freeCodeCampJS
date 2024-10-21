const playlistSongs = document.getElementById("playlist-songs");
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const previousButton = document.getElementById("previous");
const shuffleButton = document.getElementById("shuffle");

const allSongs = [
  {
    id: 0,
    title: "Scratching The Surface",
    artist: "Quincy Larson",
    duration: "4:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/scratching-the-surface.mp3",
  },
  {
    id: 1,
    title: "Can't Stay Down",
    artist: "Quincy Larson",
    duration: "4:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/can't-stay-down.mp3",
  },
  {
    id: 2,
    title: "Still Learning",
    artist: "Quincy Larson",
    duration: "3:51",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/still-learning.mp3",
  },
  {
    id: 3,
    title: "Cruising for a Musing",
    artist: "Quincy Larson",
    duration: "3:34",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cruising-for-a-musing.mp3",
  },
  {
    id: 4,
    title: "Never Not Favored",
    artist: "Quincy Larson",
    duration: "3:35",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/never-not-favored.mp3",
  },
  {
    id: 5,
    title: "From the Ground Up",
    artist: "Quincy Larson",
    duration: "3:12",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/from-the-ground-up.mp3",
  },
  {
    id: 6,
    title: "Walking on Air",
    artist: "Quincy Larson",
    duration: "3:25",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/walking-on-air.mp3",
  },
  {
    id: 7,
    title: "Can't Stop Me. Can't Even Slow Me Down.",
    artist: "Quincy Larson",
    duration: "3:52",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/cant-stop-me-cant-even-slow-me-down.mp3",
  },
  {
    id: 8,
    title: "The Surest Way Out is Through",
    artist: "Quincy Larson",
    duration: "3:10",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/the-surest-way-out-is-through.mp3",
  },
  {
    id: 9,
    title: "Chasing That Feeling",
    artist: "Quincy Larson",
    duration: "2:43",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/chasing-that-feeling.mp3",
  },
  {
    id: 10,
    title: "Hello World",
    artist: "Rafael",
    duration: "0:23",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/hello-world.mp3",
  },
  {
    id: 11,
    title: "In the Zone",
    artist: "Rafael",
    duration: "0:11",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/in-the-zone.mp3",
  },
  {
    id: 12,
    title: "Camper Cat",
    artist: "Rafael",
    duration: "0:21",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/camper-cat.mp3",
  },
  {
    id: 13,
    title: "Electronic",
    artist: "Rafael",
    duration: "0:15",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/electronic.mp3",
  },
  {
    id: 14,
    title: "Sailing Away",
    artist: "Rafael",
    duration: "0:22",
    src: "https://cdn.freecodecamp.org/curriculum/js-music-player/sailing-away.mp3",
  },
];

//para generar el elemento HTML que reproduce el sonido
const audio=new Audio();

//objeto con todas las canciones para su control por el usuario
let userData = {
    // el operador ... referencia la totalidad de un array
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
  };

  // funcion para reproducir una cancion por su id
  const playSong=(id)=>{
    //el metodo find() devuelve el primer valor de coincidencia en un array
    //según la expresion pasada en la funcion callback
    const song=userData?.songs.find((song)=> id === song.id);

    //le pasamos al obejto audio, el source de la cancion y el título
    audio.src=song.src;
    audio.title=song.title;

    //si no se está reproduciendo ninguna cancion o es distinta de la actual, ponemos el contador
    // de tiempo al principio de la cancion
    if(userData?.currentSong===null || userData?.currentSong.id !==song.id){
        audio.currentTime=0;
    }else {
        audio.currentTime=userData?.songCurrentTime;
    }

    //actualizamos la current song, añadimos la clase playing al boton y activamos el play del objeto audio
    userData.currentSong=song;
    playButton.classList.add("playing");
    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
    audio.play();
  }


  // funcion de pausa
  const pauseSong=()=>{
    userData.songCurrentTime=audio.currentTime;
    playButton.classList.remove("playing");
    audio.pause();
  }

  //funciones next y prev song
  const playNextSong=()=>{
    if (userData?.currentSong===null){
        playSong(userData?.songs[0].id);
    }else{
        const currentSongIndex=getCurrentSongIndex();
        const nextSong=userData?.songs[currentSongIndex + 1];
        playSong(nextSong.id);
    }
  }

  const playPreviousSong=()=>{
    if (userData?.currentSong===null){
       return
    }else {
        const currentSongIndex=getCurrentSongIndex();
        const previousSong=userData?.songs[currentSongIndex - 1];
        playSong(previousSong.id);
    }
  }

//funcion reproduccion aleatoria
const shuffle=()=>{
  //Sort ordena segun valores de 1 y -1
  //generamos un numero aleatorio entre 0 y 1 y restamos 0,5 para obtener valores positivos y negativos
  //que simulen la comparacion de sort y ordene de forma aleatoria
  userData?.songs.sort(()=>Math.random()-0.5);
  //despues de ordenar la lista "limpiamos" la reproduccion
  userData.currentSong=null;
  userData.songCurrentTime=0;
// volvemos a renderizar la lista de canciones
renderSongs(userData?.songs);
pauseSong();
setPlayerDisplay();
setPlayButtonAccessibleText();
}

//borrar canciones
const deleteSong=(id)=>{
  //si la cancion a borrar es la que se reproduce, la paramos
  if (userData?.currentSong?.id === id) {
    userData.currentSong=null;
    userData.songCurrentTime=0;
    pauseSong();
    setPlayerDisplay();
  }
  //filter devuelve en la callback las canciones con id distinto al que queremos borrar
  userData.songs=userData?.songs.filter( (song)=>song.id!==id);
  renderSongs(userData?.songs);
  highlightCurrentSong();
  setPlayButtonAccessibleText();
  //si hemos borrado todas las canciones, reseteamos el userData para recargarlas
  //y creamos un boton de reset
  if (userData?.songs.length===0){
    const resetButton = document.createElement('button');
    const resetText = document.createTextNode("Reset Playlist");
    resetButton.id="reset";
    resetButton.ariaLabel="Reset playlist";
    resetButton.appendChild(resetText);
    playlistSongs.appendChild(resetButton);
    resetButton.addEventListener("click",()=>{
      userData.songs=[...allSongs].join("");
      renderSongs(sortSongs());
      setPlayButtonAccessibleText();
      resetButton.remove();
    });
  }
};

//muestra titulo y artista en el reproductor
const setPlayerDisplay=()=>{
    const playingSong=document.getElementById("player-song-title");
    const songArtist=document.getElementById("player-song-artist");

    const currentTitle=userData?.currentSong?.title;
    const currentArtist=userData?.currentSong?.artist;

    playingSong.textContent = currentTitle ? currentTitle : '';
    songArtist.textContent = currentArtist ? currentArtist : '';    
}

  //resaltar cancion actual
const highlightCurrentSong=()=>{
    const playlistSongElements=document.querySelectorAll(".playlist-song");
    const songToHighlight=document.getElementById(`song-${userData?.currentSong?.id}`);
    // 
    playlistSongElements.forEach((songEl)=>{
        songEl.removeAttribute("aria-current");
    });

    if (songToHighlight){
        songToHighlight.setAttribute("aria-current","true")
    }
}

  const renderSongs = (array) => {
    // map() crea un array con el resultado de los argumentos pasados
    // en este caso creamos una funcion de flecha con el parametro "song"
    // que nos devuelve el HTML generado para cada cancion del array pasado
    const songsHTML = array.map((song)=>{
        return `<li id="song-${song.id}" class="playlist-song">
                    <button class="playlist-song-info" onclick="playSong(${song.id})">
                        <span class="playlist-song-title">${song.title}</span>
                        <span class="playlist-song-artist">${song.artist}</span>
                        <span class="playlist-song-duration">${song.duration}</span>
                    </button>

                    <button class="playlist-song-delete" onclick="deleteSong(${song.id})" aria-label="Delete ${song.title}">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
                    </button>
                </li>`
    // el método join() junta en un string los valores de un array y los separa por el parámetro pasado a join
    }).join("");

    playlistSongs.innerHTML=songsHTML;
};

// el boton play desxcribe la cancion
const setPlayButtonAccessibleText=()=>{
  //usando el operador OR verificamos que el valor de comparación no se NULL, undefined, 0 ni ""
  const song = userData?.currentSong || userData?.songs[0];
  //si el titulo de la cancion NO es accesible (no hay canciones) ponemos play
  playButton.setAttribute("aria-label",song?.title?`Play ${song.title}`:"Play")
}

const getCurrentSongIndex=()=>{
    //indexOf devuelve el indice de la primera coincidencia de un array o -1 si no se encuentra
    return userData?.songs.indexOf(userData?.currentSong)
};

playButton.addEventListener("click",()=>{
    if (!userData?.currentSong){
        playSong(userData?.songs[0].id);
    }else {
        playSong(userData?.currentSong.id);
    }
});

pauseButton.addEventListener("click",pauseSong);
nextButton.addEventListener("click",playNextSong);
previousButton.addEventListener("click",playPreviousSong);
shuffleButton.addEventListener("click",shuffle);
audio.addEventListener("ended",()=>{
  const currentSongIndex=getCurrentSongIndex();
  const nextSongExists=userData.songs.length - 1>currentSongIndex?true:false;
  if (nextSongExists){
    playNextSong()
  }else{
    userData.currentSong=null;
    userData.songCurrentTime=0;
    pauseSong();
    setPlayerDisplay();
    highlightCurrentSong();
    setPlayButtonAccessibleText();
  }
})

// para ordenar alfabeticamente, la martices tienen el metodo sort()
// al que le pasamos los criterios de comparacion en una funcion de callback
// Sort() devuelve un numero negativo si el primer valor es "menor" que el segundo
//  un numero positivo si el segundo valor es "menor" que el primero
//  y 0 si son iguales
const sortSongs=()=>{
    userData?.songs.sort((a,b)=>{
        if (a.title<b.title) return -1;
        if (a.title>b.title) return 1;
        return 0;
    });
    return userData?.songs;
}

// llamamos a la funcion para renderizar las canciones y pasamos el objeto UserData con el operador opcional ?
// usando ? si pedimos algun parametro que no existe nos devuelve undefined en vez de un error
renderSongs(sortSongs());

//step 72