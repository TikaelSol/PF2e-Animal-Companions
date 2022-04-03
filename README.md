# PF2e-Animal-Companions

Install this module by pasting this link: https://raw.githubusercontent.com/TikaelSol/PF2e-Animal-Companions/main/module.json

into the install module dialog on the Foundry Add-on Module tab.

Once enabled in a world it will add 7 compendiums:
- The first contains all the animal companions released as of March 2021 statted up as ancestries to enable Foundry automation, as well as an Animal Companion class.  Just drag the correct ones to the PC sheet you are using for your Animal Companion.
- The second contains feats to automate the Mature, Nimble, Indomitable, Savage, and Specialized bonuses.  Drag these feats to the animal companion sheet when your PC takes the associated feat.
- The third compendium contains actions for the Advanced Maneuvers. These are automatically added to the sheet when your companion gains access.
- The fourth contains support actions for your animal companion.  These are automatically added.
- The fifth contains a class, ancestry, and features for Inventor Construct Companions.
- The last contains the ancestry features linked to by the Ancestries.  You should not need to drag these to the sheet, they should automatically be added by the ancestries.

The name of the Animal Companion class and the ancestry can be edited once dragged to your sheet.

# Version 5.0 - ChoiceSet / GrantItem / Eidolon update
The entire module has been rebuilt from the ground up to automatically grant actions when needed, **this will require a complete rebuild of your companions on a fresh actor**. Additionally Eidolons have been added to the module, using PC sheet similar to the other companions.  Due to an interaction between GrantItem and automatically added class features you should add the specific eidolon ancestry before leveling the actor up. If you set the level before adding the ancestry change the level to 1 then back. This includes automatic calculation of ability scores with boosts for eidolons. No enforcement is made to prevent selecting the same boost twice, if you make a mistake you can decrease the actor's level then go back up to reset the boosts. Eidolons have their hit points locked at 0, if this conflicts with a module or setting you are using set the additional HP to 1 on the main tab of the actor.

# Version 1.2 - Active effects Update
Active effects have been added to automate the ability scores, skills, saves, and martial proficiency of animal companions.  When you drag the Animal Companion class to a sheet it will set the base proficiency levels all Animal Companions get as well as set Int to 2.  When you add the specific animal companion ancestry the ability scores and skills will update to reflect that animal companion.  The Mature, Nimble, Savage, and Indomitable feats all make the proper adjustment to ability scores, saves, damage, and skills.  Specialized Animal Companion is split into 10 different types.  All of them work to automate features like scorpion's increased stinger poison damage as well as setting saves, skills, martial proficiency, and ability scores according to the chosen specialization.

This is a big change to this module and a legacy version has been set up that does not include the Active Effects for those that don't wish to use them, that legacy module is available here https://github.com/TikaelSol/PF2e-Animal-Companions-Legacy.  If you notice an issue with how something is calculated please submit an issue on this github.

# Known Issues
- Barding proficiency is not automated.  Barding is not currently in the system as an armor type, adding barding proficiency manually or through Active effects adds it as a weapon group instead of an armor type.  For barding use one of the armor proficiency groups and make custom armor items.
