import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Button from '@material-ui/core/Button';

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = { currentColor: '', newColorName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      )
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      this.props.colors.every(({ color }) => color !== this.state.currentColor)
    );
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }
  handleSubmit() {
    const newColor = {
      color: this.state.currentColor,
      name: this.state.newColorName,
    };
    this.props.addNewColor(newColor);
    this.setState({});
  }
  render() {
    const { currentColor, newColorName } = this.state;
    const { paletteIsFull } = this.props;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newColorName}
            name='newColorName'
            onChange={this.handleChange}
            validators={['required', 'isColorUnique', 'isColorNameUnique']}
            errorMessages={[
              'Enter a color name',
              'Color already used!',
              'Color name should be Unique',
            ]}
          />
          <Button
            variant='contained'
            type='submit'
            color='primary'
            disabled={paletteIsFull}
            style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
          >
            {paletteIsFull ? 'Palette Full' : 'Add Color'}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default ColorPickerForm;
