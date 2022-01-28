class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.answer = 0;
    this.rank = 0;
    this.fuel = 185;
    this.life = 185;
    this.score = 0;
  }

  addPlayer() {
    var playerIndex = "players/player" + this.index;


    database.ref(playerIndex).set({
      name: this.name,
      answer:this.answer,
      rank: this.rank,
      score: this.score
    });
  }

 

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      rank: this.rank,
      score: this.score,
      life: this.life
    });
  }

  static getPlayersInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", data => {
      allPlayers = data.val();
    });
  }

  getplayersAtEnd() {
    database.ref("playersAtEnd").on("value", data => {
      this.rank = data.val();
    });
  }

  static updateplayersAtEnd(rank) {
    database.ref("/").update({
      playersAtEnd: rank
    });
  }
}
