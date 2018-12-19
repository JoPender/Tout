<select name="liste_numerique_annee">

<?php

for ($i = 2014; $i <= 2020; $i++)

{

echo '<option value="'.$i.'">'.$i.'</option>';

}
?>
<select/>
<select name="liste_numerique_jours">
<?php
for ($i = 1; $i <= 30; $i++)

{

echo '<option value="'.$i.'">'.$i.'</option>';

}
?>
<select/>
<select name="liste_numerique_mois">
<?php
for ($i = 1; $i <= 12; $i++)

{

echo '<option value="'.$i.'">'.$i.'</option>';

}

?>
<select/>
