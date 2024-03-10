function registerSettings() {
  game.settings.register("pf2e-psychic-amps", "retirementAnnouncement", {
    name: "Module Retired",
    scope: "client",
    config: false,
    type: Boolean,
    default: false
  })
};

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once('ready', async function() {
  if (game.user.isGM) {
    if (game.settings.get("pf2e-psychic-amps", "retirementAnnouncement") == false) {
      ChatMessage.create({content: "<h2>PF2e Psychic Amps retiring</h2><p>As of PF2e system version 5.14 all of the cantrip modification and amp functionality for psychics has been automated in the PF2e system itself. As such, this module is now retired and will receive no more updates.</p><p>To use the new system automation update the PF2e system, uninstall this module, delete copies of the spells from this module from your actors, then for psychics level them down to 0 and back up and use the system copies of the spells. For psychic dedication, replace any copies of the Psychic Dedication and Psi Development feats you have.</p><p>To use an amp you will see a new checkbox on your spellcasting tab which will apply the amp to the cantrip when checked and consume a focus point (even if the spell is not in the focus spell entry).</p>"})
      game.settings.set("pf2e-psychic-amps", "retirementAnnouncement", true)
    }
  }
})