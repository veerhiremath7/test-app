import { Component } from '@angular/core';

interface Data {
  label: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  checked = true;

  data: Data[] = [
    { label: 'Input Layer Dimension', value: '200' },
    { label: 'Validation to Train Ratio (%)', value: '48' },
    { label: 'Miscellaneous Ratio (%)', value: '12' },
    { label: 'Learning Rate', value: '36' },
    { label: 'Activation Function', value: 'OWC' },
    { label: 'Model Type', value: 'Data Format' },
    { label: 'Epochs', value: 'Details Row' },
    { label: 'Embedding Dimension', value: '36' },
    { label: 'Filter Size', value: 'John.Doe' },
    { label: 'Number of Filters', value: 'John.Doe' },
    { label: 'Batch Size', value: 'John.Doe' },
    { label: 'Drop (optional)', value: 'John.Doe' },
  ]
}
