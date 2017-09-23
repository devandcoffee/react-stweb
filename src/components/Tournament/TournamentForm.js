import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TITLE_NEW = 'New Tournament';
const TITLE_EDIT = 'Editing Tournament';

export default class TournamentForm extends Component {
  static propTypes = {
    id: PropTypes.string,
    data: PropTypes.object,
  }

  static defaultProps = {
    id: '',
    data: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      title: props.id ? TITLE_EDIT : TITLE_NEW,
      activeRecord: null,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.data.tourney) {
      const { title } = this.state;
      this.setState({
        activeRecord: nextProps.data.tourney,
        title: `${title} ${nextProps.data.tourney.name}`,
      });
    }
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h1> {title} </h1>
      </div>
    )
  }
}
