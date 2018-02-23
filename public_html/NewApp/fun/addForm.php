<?php
  function AddForm($formMethod, $formAction, $formClass, $TxtRowCount)
  {
    echo "<form method=$formMethod action=$formAction class=$formClass>";
      for ($i=0; $i < $TxtRowCount ; $i++) {
        echo "<div class='form__row'>" ;
        echo "<label for='input-".($i+1)."'> input-". ($i+1) ."</label>";
        echo "<input type='text name='input-".($i+1)."'>";
        echo"</div>";
      }
    echo "<div class='form__row'><input type='submit'></div>";
    echo "</form>";
  }
?>

