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
- Right now rule elements set the size of the animal companion, but this does not work to automate the size changes of the companions that can start at medium or large. I am looking into active effects that can handle this but since size is not stored in a numeric value in the data structure the few companions that start larger than small may have to have their size adjusted manually.
- - Currently the token size rule elements do not change the displayed size on the sheet, and active effects cannot be used to seamlessly automate this change.  To manually fix this click the edit button on the ancestry line after dragging the ancestry to the sheet, then on the details tab you can change the size of the animal companion to change the display on the sheet.
- Speed changes from feats are not automated.  Some feats allow for a choice to be made for increasing speed types, since this is a choice this effect is not automated.  See PF2e wiki or the PF2e channel on the Foundry Discord for help writing a rule element to increase the speed.
- Barding proficiency is not automated.  Barding is not currently in the system as an armor type, adding barding proficiency manually or through Active effects adds it as a weapon group instead of an armor type.  For barding use one of the armor proficiency groups and make custom armor items.
- The rules currently leave open the possibility of some Animal Companion types gaining more than one specialization.  The base ability improvements of Specialized currently do not account for this.  Since the Active effects panel is not accessible from non developement builds of the PF2e system this will need to be fixed manually.  If you take more than one specialization feat enter 8 as the dexterity score and 6 as the intelligence score (Despite the displayed number the actual value is 10, with the Active Effects providing behind the scenes increases).  This offsets the additional 2 and 4 that are added to those stats respectively.
- The fist attack on the PC sheet is hard coded in, the fix is ignoring it until there is an animal companion sheet that lacks this feature or some way to override it.  The only animal companion this should really impact is ape, since their attack is also called fist.  You can rename the ape's fist attack to anything you want by editing the rule element "label":"fist" line
