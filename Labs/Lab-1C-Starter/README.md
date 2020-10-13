# Unit 1C Lab

## Lab Overview

This lab will be an exercise in making network requests to other APIs using Node.js. 

You will be making network requests to the Star Wars API.

Your lab goal is to make chained network requests in order to get a List of all characters names that appear in each of the 6 films.

That list should end up looking like this:

```
The Empire Strikes Back

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Wedge Antilles
Yoda
Palpatine
Boba Fett
IG-88
Bossk
Lando Calrissian
Lobot
A New Hope

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Owen Lars
Beru Whitesun lars
R5-D4
Biggs Darklighter
Obi-Wan Kenobi
Wilhuff Tarkin
Chewbacca
Han Solo
Greedo
Jabba Desilijic Tiure
Wedge Antilles
Jek Tono Porkins
Raymus Antilles
Return of the Jedi

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Palpatine
Boba Fett
Lando Calrissian
Ackbar
Mon Mothma
Arvel Crynyd
Wicket Systri Warrick
Nien Nunb
Bib Fortuna
Revenge of the Sith

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Owen Lars
Beru Whitesun lars
Obi-Wan Kenobi
Anakin Skywalker
Wilhuff Tarkin
Chewbacca
Yoda
Palpatine
Nute Gunray
Padmé Amidala
Ayla Secura
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Eeth Koth
Adi Gallia
Saesee Tiin
Plo Koon
Poggle the Lesser
Luminara Unduli
Dooku
Bail Prestor Organa
R4-P17
Shaak Ti
Grievous
Tarfful
Raymus Antilles
Sly Moore
Tion Medon
The Phantom Menace

C-3PO
R2-D2
Obi-Wan Kenobi
Anakin Skywalker
Jabba Desilijic Tiure
Yoda
Palpatine
Qui-Gon Jinn
Nute Gunray
Finis Valorum
Padmé Amidala
Jar Jar Binks
Roos Tarpals
Rugor Nass
Ric Olié
Watto
Sebulba
Quarsh Panaka
Shmi Skywalker
Darth Maul
Ayla Secura
Ratts Tyerel
Dud Bolt
Gasgano
Ben Quadinaros
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Eeth Koth
Adi Gallia
Saesee Tiin
Yarael Poof
Plo Koon
Mas Amedda
Attack of the Clones

C-3PO
R2-D2
Owen Lars
Beru Whitesun lars
Obi-Wan Kenobi
Anakin Skywalker
Yoda
Palpatine
Boba Fett
Nute Gunray
Padmé Amidala
Jar Jar Binks
Watto
Shmi Skywalker
Ayla Secura
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Plo Koon
Mas Amedda
Gregar Typho
Cordé
Cliegg Lars
Poggle the Lesser
Luminara Unduli
Barriss Offee
Dormé
Dooku
Bail Prestor Organa
Jango Fett
Zam Wesell
Dexter Jettster
Lama Su
Taun We
Jocasta Nu
R4-P17
Wat Tambor
San Hill
Shaak Ti
Sly Moore
Benjamins-MacBook-Pro:Lab-1C-Solution blin$ node .
A New Hope

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Owen Lars
Beru Whitesun lars
R5-D4
Biggs Darklighter
Obi-Wan Kenobi
Wilhuff Tarkin
Chewbacca
Han Solo
Greedo
Jabba Desilijic Tiure
Wedge Antilles
Jek Tono Porkins
Raymus Antilles

Return of the Jedi

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Jabba Desilijic Tiure
Wedge Antilles
Yoda
Palpatine
Boba Fett
Lando Calrissian
Ackbar
Mon Mothma
Arvel Crynyd
Wicket Systri Warrick
Nien Nunb
Bib Fortuna

The Empire Strikes Back

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Obi-Wan Kenobi
Chewbacca
Han Solo
Wedge Antilles
Yoda
Palpatine
Boba Fett
IG-88
Bossk
Lando Calrissian
Lobot

The Phantom Menace

C-3PO
R2-D2
Obi-Wan Kenobi
Anakin Skywalker
Jabba Desilijic Tiure
Yoda
Palpatine
Qui-Gon Jinn
Nute Gunray
Finis Valorum
Padmé Amidala
Jar Jar Binks
Roos Tarpals
Rugor Nass
Ric Olié
Watto
Sebulba
Quarsh Panaka
Shmi Skywalker
Darth Maul
Ayla Secura
Ratts Tyerel
Dud Bolt
Gasgano
Ben Quadinaros
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Eeth Koth
Adi Gallia
Saesee Tiin
Yarael Poof
Plo Koon
Mas Amedda

Attack of the Clones

C-3PO
R2-D2
Owen Lars
Beru Whitesun lars
Obi-Wan Kenobi
Anakin Skywalker
Yoda
Palpatine
Boba Fett
Nute Gunray
Padmé Amidala
Jar Jar Binks
Watto
Shmi Skywalker
Ayla Secura
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Plo Koon
Mas Amedda
Gregar Typho
Cordé
Cliegg Lars
Poggle the Lesser
Luminara Unduli
Barriss Offee
Dormé
Dooku
Bail Prestor Organa
Jango Fett
Zam Wesell
Dexter Jettster
Lama Su
Taun We
Jocasta Nu
R4-P17
Wat Tambor
San Hill
Shaak Ti
Sly Moore

Revenge of the Sith

Luke Skywalker
C-3PO
R2-D2
Darth Vader
Leia Organa
Owen Lars
Beru Whitesun lars
Obi-Wan Kenobi
Anakin Skywalker
Wilhuff Tarkin
Chewbacca
Yoda
Palpatine
Nute Gunray
Padmé Amidala
Ayla Secura
Mace Windu
Ki-Adi-Mundi
Kit Fisto
Eeth Koth
Adi Gallia
Saesee Tiin
Plo Koon
Poggle the Lesser
Luminara Unduli
Dooku
Bail Prestor Organa
R4-P17
Shaak Ti
Grievous
Tarfful
Raymus Antilles
Sly Moore
Tion Medon
```

To complete the lab:

1. Create a Node.js project that prints the list shown above to the console.

## Lab Source Code
You will be given a starter node.js project that has `axios` and `node-fetch` installed. There will be some examples on how to fetch the Starwars API data, but you'll largely have to rearrange everything to produce the character list.

Here's a link to the Star Wars API documentation:
https://swapi.dev/documentation

## Lab Solution

You can view the lab solution here:
[LINK]
