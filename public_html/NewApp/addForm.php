<?php
  function AddForm($formMethod, $formAction, $formClass, $formId, $TxtRowCount)
  {
    echo "<form method=$formMethod action=$formAction class=$formClass id=$formId>";
    echo "<span id=info></span>";
    echo "<span id=info></span>";
      for ($i=0; $i < $TxtRowCount ; $i++) {
        echo "<div class='form__row'>" ;
        echo "<label for='input-".($i+1)."'>input-". ($i+1) ."</label>";
        echo "<input type='text' name='input-".($i+1)."'>";
        echo"</div>";
      }
    echo "<div class='form__row'><input type='submit' class='button button_def form__button'></div>";
    echo "</form>";
  }
?>

