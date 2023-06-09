Dentro de este directorio va todo lo relacionado al Stepper, algunas observaciones importantes:

1. Para agregar nuevos pasos al stepper se debe hacer con el siguiente formato:

        <mat-step>
          <componente-paso-x></componente-paso-x>
          <botones-siguiente-cancelar></botones-siguiente-cancelar>
        </mat-step>

  es importante que cada paso tenga un Output para comunicarle al padre que ese paso está terminado
