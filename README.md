# PF2e-Animal-Companions

Install this module by pasting this link: https://raw.githubusercontent.com/TikaelSol/PF2e-Animal-Companions/main/module.json

into the install module dialog on the Foundry Add-on Module tab.

Once enabled in a world it will add 3 compendiums:
- The first contains all the animal companions released as of March 2021 statted up as ancestries to enable Foundry automation, as well as an Animal Companion class.  Just drag the correct ones to the PC sheet you are using for your Animal Companion.
- The second contains feats to automate the Mature, Nimble, and Savage bonuses.  Drag these feats to the animal companion sheet when your PC takes the associated feat.
- The last contains the ancestry features linked to by the Ancestries.  You should not need to drag these to the sheet, they should automatically be added by the ancestries.

The name of the Animal Companion class and the ancestry can be edited once dragged to your sheet.

# Version 1.2 - Active effects Update
Active effects have been added to automate the ability scores, skills, saves, and martial proficiency of animal companions.  When you drag the Animal Companion class to a sheet it will set the base proficiency levels all Animal Companions get as well as set Int to 2.  When you add the specific animal companion ancestry the ability scores and skills will update to reflect that animal companion.  The Mature, Nimble, Savage, and Indomitable feats all make the proper adjustment to ability scores, saves, damage, and skills.  Specialized Animal Companion is split into 10 different types.  All of them work to automate features like scorpion's increased stinger poison damage as well as setting saves, skills, martial proficiency, and ability scores according to the chosen specialization.

This is a big change to this module and a legacy version has been set up that does not include the Active Effects for those that don't wish to use them, that legacy module is available here https://github.com/TikaelSol/PF2e-Animal-Companions-Legacy.  If you notice an issue with how something is calculated please submit an issue on this github.

# Known Issues
- Right now rule elements set the size of the animal companion, but this does not work to automate the size changes of the companions that can start at medium or large. I am looking into active effects that can handle this but since size is not stored in a numeric value in the data structure the few companions that start larger than small may have to have their size adjusted manually.
- Speed changes from feats are not automated.  Some feats allow for a choice to be made for increasing speed types, since this is a choice this effect is not automated.  See PF2e wiki or the PF2e channel on the Foundry Discord for help writing a rule element to increase the speed.
- Barding proficiency is not automated.  Barding is not currently in the system as an armor type, adding barding proficiency manually or through Active effects adds it as a weapon group instead of an armor type.  For barding use one of the armor proficiency groups and make custom armor items.
- The rules currently leave open the possibility of some Animal Companion types gaining more than one specialization.  The base ability improvements of Specialized currently do not account for this.  Since the Active effects panel is not accessible from non developement builds of the PF2e system this will need to be fixed manually.  If you take more than one specialization feat enter 8 as the dexterity score and 6 as the intelligence score (Despite the displayed number the actual value is 10, with the Active Effects providing behind the scenes increases).  This offsets the additional 2 and 4 that are added to those stats respectively.
