import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Row,
  Col,
  Form,
  Input,
  Modal,
} from 'antd';
import * as FORM_MODES from '../../constants/form';
import * as NOTIFICATIONS from '../../services/notifications';

const FormItem = Form.Item;
const confirm = Modal.confirm;

const TITLE_NEW = 'New Team';
const TITLE_EDIT = 'Editing Team';
const TITLE_DELETE = 'Deleting Team';
const TITLE_VIEW = 'Viewing Team';

class TeamForm extends Component {
  static contextTypes = {
    router: PropTypes.object,
  };

  static propTypes = {
    form: PropTypes.object.isRequired,
    id: PropTypes.string,
    mode: PropTypes.number.isRequired,
    updateTeam: PropTypes.func.isRequired,
    createTeam: PropTypes.func.isRequired,
    deleteTeam: PropTypes.func.isRequired,
  }

  static defaultProps = {
    id: '',
    getTeam: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: this.getTitle(props),
      activeRecord: null,
    };
  }

  getTitle = ({ mode, id }) => {
    if (mode === FORM_MODES.MODE_EDITION) {
      return id ? TITLE_EDIT : TITLE_NEW;
    }

    if (mode === FORM_MODES.MODE_PRESENTATION) {
      return TITLE_VIEW;
    }

    return TITLE_DELETE;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if (id) {
          const editTeam = {
            name: values.name,
            description: values.description,
          };
          this.props.updateTeam({
            variables: {
              id,
              team: editTeam,
            },
          })
            .then(({ data }) => {
              NOTIFICATIONS.showNotification(
                NOTIFICATIONS.NOTIFY_SUCCESS,
                'Teams',
                `Team ${data.updateTeam.name} updated.`,
              );
              this.context.router.history.push('/teams');
            }).catch(() => {
              NOTIFICATIONS.showNotification(
                NOTIFICATIONS.NOTIFY_ERROR,
                'Teams',
                'There was an error updating the team.',
              );
            });
        } else {
          const newTeam = {
            name: values.name,
            description: values.description,
          };
          this.props.createTeam({
            variables: {
              id,
              team: newTeam,
            },
          })
            .then(({ data }) => {
              NOTIFICATIONS.showNotification(
                NOTIFICATIONS.NOTIFY_SUCCESS,
                'Teams',
                `Team ${data.createTeam.name} created.`,
              );
              this.context.router.history.push('/teams');
            }).catch(() => {
              NOTIFICATIONS.showNotification(
                NOTIFICATIONS.NOTIFY_ERROR,
                'Teams',
                'There was an error creating the team.',
              );
            });
        }
      }
    });
  };

  deleteTeam = () => {
    const { deleteTeam, id } = this.props;
    const { router } = this.context;
    confirm({
      title: 'Do you want to delete this item?',
      content: 'When clicked the OK button, the team will be deleted.',
      onOk() {
        deleteTeam(id)
          .then(({ data }) => {
            NOTIFICATIONS.showNotification(
              NOTIFICATIONS.NOTIFY_SUCCESS,
              'Teams',
              `Team ${data.deleteTeam.name} deleted.`,
            );
            router.history.push('/teams');
          }).catch(() => {
            NOTIFICATIONS.showNotification(
              NOTIFICATIONS.NOTIFY_ERROR,
              'Teams',
              'There was an error deleting the team.',
            );
          });
      },
      onCancel() { },
    });
  };

  render() {
    const { title } = this.state;
    const { getFieldDecorator } = this.props.form;
    const { mode } = this.props;
    return (
      <div>
        <Row>
          <Card
            title={title}
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
              {
                mode === FORM_MODES.MODE_EDITION &&
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
              }
              {
                mode === FORM_MODES.MODE_DELETION &&
                <Row>
                  <FormItem>
                    <Button
                      type="danger"
                      size="large"
                      icon="delete"
                      onClick={this.deleteTeam}
                    >
                      Delete
                    </Button>
                  </FormItem>
                </Row>
              }
              {
                mode === FORM_MODES.MODE_PRESENTATION &&
                <Row>
                  <FormItem>
                    <Button
                      type="primary"
                      size="large"
                      icon="arrow-left"
                      onClick={() => this.context.router.history.push('/teams')}
                    >
                      Back
                    </Button>
                  </FormItem>
                </Row>
              }
            </Form>
          </Card>
        </Row>
      </div>
    );
  }
}

const WrappedTeamForm = Form.create({
  mapPropsToFields(props) {
    const { team } = props.getTeam;
    if (team) {
      return {
        description: { value: team.description },
        name: { value: team.name },
      };
    }
    return {};
  },
})(TeamForm);

export default WrappedTeamForm;
