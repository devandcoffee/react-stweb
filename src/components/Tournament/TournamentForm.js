import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  Input,
  DatePicker,
  InputNumber,
  Select,
} from 'antd';
import moment from 'moment';
import user from '../../libraries/user';
import DATE_TIME from '../../constants/locals';

const Option = Select.Option;
const FormItem = Form.Item;

const TITLE_NEW = 'New Tournament';
const TITLE_EDIT = 'Editing Tournament';

class TournamentForm extends Component {
  static propTypes = {
    id: PropTypes.string,
    getTournament: PropTypes.object,
    getTournamentsTypes: PropTypes.object,
    updateTournament: PropTypes.func.isRequired,
    createTournament: PropTypes.func.isRequired,
  }

  static defaultProps = {
    id: '',
    getTournament: {},
    getTournamentsTypes: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.id ? TITLE_EDIT : TITLE_NEW,
      activeRecord: null,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.getTournament.tourney &&
      nextProps.getTournament.tourney !== this.props.getTournament.tourney
    ) {
      const { tourney } = nextProps.getTournament;
      this.setState({
        title: `${TITLE_EDIT} ${tourney.name}`,
      });
      this.props.form.setFieldsValue({
        amount_teams: tourney.amount_teams,
        description: tourney.description,
        tournament_type_id: tourney.tournament_type_id,
        name: tourney.name,
        start_date: moment(new Date(tourney.start_date), DATE_TIME),
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // this.props.saveTournament(values, id);
        if (id) {
          const editTourney = {
            name: values.name,
            description: values.description,
            start_date: values.start_date,
            amount_teams: values.amount_teams,
          };
          this.props.updateTournament({
            variables: {
              id,
              tourney: editTourney,
            },
          })
            .then(({ data }) => {
              console.log('got data', data);
            }).catch((error) => {
              console.log('there was an error sending the query', error);
            });
        } else {
          const newTourney = {
            name: values.name,
            description: values.description,
            start_date: values.start_date,
            amount_teams: values.amount_teams,
            user_id: user.getUserId(),
            tourney_type_id: values.tourney_type_id,
          };
          this.props.createTournament({
            variables: {
              id,
              tourney: newTourney,
            },
          })
            .then(({ data }) => {
              console.log('got data', data);
            }).catch((error) => {
              console.log('there was an error sending the query', error);
            });
        }
      }
    });
  };

  renderSelectOptions = (data, placeholder, name = 'name') => {
    const options = [];
    options.push(<Option key={'0'} value={'0'} ><span style={{ color: '#ccc' }}>{placeholder}</span></Option>);
    if (data && (data.length > 0)) {
      options.push(data.map(option =>
        (<Option key={option.id} value={option.id} >
          {option[name]}
        </Option>),
      ));
    }
    return options;
  }

  render() {
    const { title } = this.state;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <h1> {title} </h1>
        <Row>
          <Card
            title="New Tournament"
            bordered={false}
            style={{ width: '100%', marginTop: '25px' }}
          >
            <Form layout="vertical" onSubmit={this.handleSubmit}>
              <Row gutter={25}>
                <Col md={12}>
                  <FormItem label="Name">
                    {getFieldDecorator('name')(
                      <Input
                        placeholder="Name"
                      />,
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Tournament Type">
                    {getFieldDecorator('tourney_type_id', {
                      rules: [
                        {
                          required: true,
                          message: 'Please select a tournament type.',
                        },
                      ],
                    })(
                      <Select placeholder="Please select a tournament type.">
                        {this.renderSelectOptions(this.props.getTournamentsTypes.tourneysTypes, 'Select Tournament Type')}
                      </Select>,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row gutter={25}>
                <Col md={12}>
                  <FormItem label="Start Date">
                    {getFieldDecorator('start_date')(
                      <DatePicker
                        format={DATE_TIME}
                        showTime
                        style={{ width: '100%' }}
                      />,
                    )}
                  </FormItem>
                </Col>
                <Col md={12}>
                  <FormItem label="Amount Teams">
                    {getFieldDecorator('amount_teams')(
                      <InputNumber
                        min={2}
                        max={50}
                        style={{ width: '100%' }}
                      />,
                    )}
                  </FormItem>
                </Col>
              </Row>
              <Row>
                <FormItem label="Description">
                  {getFieldDecorator('description')(
                    <Input
                      type="textarea"
                      rows={4}
                    />,
                  )}
                </FormItem>
              </Row>

              <Row>
                <FormItem>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    icon="save"
                  >
                    Save
                  </Button>
                </FormItem>
              </Row>
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}

const WrappedTournamentsForm = Form.create()(TournamentForm);

export default WrappedTournamentsForm;
