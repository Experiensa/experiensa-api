<?php

/*
Title: Howto's Phone
Setting: experiensa_tutorials
Tab: Phone
Flow: Howto
*/

/* ****************************************************************************/
/* Email button ***************************************************************/
/* ****************************************************************************/

 ?>
 <style>
 table, th, td {
     border: 1px solid black;
     border-collapse: collapse;
 }
 th, td {
     padding: 15px;
 }
 th {
    text-align: left;
}
 </style>
 <table width="100%">
     <thead>
         <tr>
             <th>Ne dites pas</th>
             <th>Mais dites</th>
         </tr>
     </thead>
     <tbody>
         <tr>
             <td>Allo?</td>
             <td>Fiesta Travel Bonjour</td>
         </tr>
         <tr>
             <td>Allo? Allo? Allo?</td>
             <td>La ligne est mauvaise veuillez vous rappeler svp</td>
         </tr>
         <tr>
             <td>C'est de la part de qui?</td>
             <td>Qui le demande? ou C'est monsieur/madame</td>
         </tr>
         <tr>
             <td>C'est à quel sujet?</td>
             <td>Quel est le motif de votre appel?</td>
         </tr>
         <tr>
             <td>Un instant, je vous le passe</td>
             <td>Un instant je vous prie</td>
         </tr>
         <tr>
             <td>Laissez un message</td>
             <td>Puisse je transmettre un message ?</td>
         </tr>
         <tr>
             <td>Il vous connait déja ?</td>
             <td>Avez vous déjà été en rélation avec lui ?</td>
         </tr>
         <tr>
             <td>Ne quittez pas</td>
             <td>Un instant je vous prie / Veuillez rester en ligne</td>
         </tr>
         <tr>
             <td>Il ne sera pas là avant 15 jours</td>
             <td>Il est de retour le (date)</td>
         </tr>
         <tr>
             <td>Dans la journée</td>
             <td>Veuillez rappeler à ...</td>
         </tr>
         <tr>
             <td>Ca depends...</td>
             <td>Dans le cas <i>Option 1</i> (Solution 1), dans le cas <i>Option 2</i>(Solution 2), etc</td>
         </tr>
         <tr>
             <td>Il est absent</td>
             <td>Il est à l'exterieur</td>
         </tr>
         <tr>
             <td>Il viens juste de partir boire un café</td>
             <td>Il sera de retour dans un quart d'heure</td>
         </tr>
         <tr>
             <td>Je vais m'en occuper</td>
             <td>Je m'en occupe</td>
         </tr>
         <tr>
             <td>Faut encore que je le trouve</td>
             <td>Un instant je vous prie</td>
         </tr>
         <tr>
             <td>Je ne sais pas du tout</td>
             <td>Un instant je me renseigne</td>
         </tr>
         <tr>
             <td>Je ne suis pas au courant</td>
             <td>Un instant je me renseigne</td>
         </tr>
         <tr>
             <td>Problème</td>
             <td>Votre demande implique que... / Votre situation nous demande de</td>
         </tr>
         <tr>
             <td>Vous vous trompez</td>
             <td>Il y a un mal entendu</td>
         </tr>
     </tbody>

 </table>

<?php

piklist('field', array(
    'type' => 'group',
    'label' => 'Conseil',
    'add_more' => true,
    'columns' => 12,
    'attributes' => array('class' => 'text'),
    'fields' => array(
        array(
           'type'  => 'text',
           'field' => 'text1',
           'columns' => 6
       ),
       array(
          'type'  => 'text',
          'field' => 'text2',
          'columns' => 6
      )
    )
));
 ?>
