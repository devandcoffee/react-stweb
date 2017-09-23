import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Table } from 'antd';

export const SHOW_RECORD = 'show';
export const EDIT_RECORD = 'edit';
export const REMOVE_RECORD = 'remove';

const ACTIONS_OBJ = emit => ({
  title: 'Action',
  dataIndex: '',
  key: 'x',
  render: (text, record, index) =>
    (<span>
      <Button
        icon="search"
        onClick={() => emit(text, record, index, SHOW_RECORD)}
      />
      <Button
        icon="edit"
        onClick={() => emit(text, record, index, EDIT_RECORD)}
      />
      <Button
        icon="delete"
        onClick={() => emit(text, record, index, REMOVE_RECORD)}
      />
    </span>),
});

class SmartTable extends Component {
  constructor(props) {
    super(props);
    const { columns, dataSource, emit, pagination, rowKey } = this.props;
    this.state = {
      columns: columns.concat(ACTIONS_OBJ(emit)),
      dataSource,
      rowKey,
      pagination,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource,
      pagination: nextProps.pagination,
    });
  }

  handleTableChange = (pagination, filters, sorter) => {
    this.props.handleTableChange(pagination, filters, sorter);
  };

  render() {
    const { columns, dataSource, pagination, rowKey } = this.state;
    return (
      <Table
        dataSource={dataSource}
        pagination={pagination}
        columns={columns}
        rowKey={rowKey}
        onChange={this.handleTableChange}
      />
    );
  }
}

SmartTable.defaultProps = {
  rowKey: '',
  pagination: {},
  handleTableChange: () => { },
  emit: () => { }
};

SmartTable.propTypes = {
  columns: PropTypes.array.isRequired,
  dataSource: PropTypes.array.isRequired,
  pagination: PropTypes.object,
  handleTableChange: PropTypes.func,
  emit: PropTypes.func,
  rowKey: PropTypes.string,
};

export default SmartTable;
