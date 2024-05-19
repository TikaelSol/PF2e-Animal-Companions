async function registerUserFlags() {
    await setIfAbsent("eidolon-changes-to-be-read", true)
};

async function setIfAbsent(flag, value) {
    if (game.user.getFlag("world", flag) === undefined) {
        await game.user.setFlag("world", flag, value);
    }
}

Hooks.once("ready", async () => {
    await registerUserFlags();

    // Does the user have an eidolon?
    if (game.actors.filter(x => x.isOwner).filter(x => x.class?.name === "Eidolon").length) {
        // Has the user read the changes?
        if (game.user.getFlag("world", "eidolon-changes-to-be-read")) {
            new Dialog({
                title: "Eidolon Changes",
                content: "<p>With the release of version 6.2, in order to support Summoners+ and other third party eidolons, we had to change how <b>Eidolon Abilities</b> are granted.</p><p>You need to update your Eidolon's ancestries. Simply drag and drop the same ancestry again onto your Eidolon sheet in order to update.</p>",
                buttons: {
                    one: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "I Understand",
                        callback: async () => {
                            await game.user.setFlag("world", "eidolon-changes-to-be-read", false);
                        }
                    }
                }
            }).render(true);
        }
    } else {
        // No eidolons, no problem.
        await game.user.setFlag("world", "eidolon-changes-to-be-read", false);
    }
});