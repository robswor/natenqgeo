Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "natenqgeo", name: "NATIONAL GEOGRAPHIC!!!"}, "default");
    console.log("pre-add-dice");
    dice3d.addDicePreset({
        type: "d20",
        labels: [
            "modules/diceposting/natenqgeo/nat_enq.png",
            "2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
            "modules/diceposting/natenqgeo/nat_geo.png"
        ],
        system: "natenqgeo"
    });
    console.log("post-add-dice");
});
