import moment from 'moment';
import DayPickerSingleDateController from 'react-dates/lib/components/DayPickerSingleDateController';
import onClickOutside from 'react-onclickoutside';

moment.locale();

class DayPicker extends DayPickerSingleDateController {
  handleClickOutside = (evt) => {
    if (this.props.onBlur) {
      this.props.onBlur(evt);
    }
  };

  render() {
    return super.render();
  }
}

export default onClickOutside(DayPicker);
