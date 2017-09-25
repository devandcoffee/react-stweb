import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { SmartTable } from '../../shared';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Start Date',
    dataIndex: 'start_date',
    key: 'start_date',
  },
  {
    title: 'Amount Teams',
    dataIndex: 'amount_teams',
    key: 'amount_teams',
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
];


class TournamentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pagination: null,
    };
  }

  componentWillReceiveProps = (nextProps) => {
    const { pagination } = this.state;
    if (nextProps.tourneysWithOffset && !pagination && nextProps.tourneysWithOffset.metaInfo) {
      const { metaInfo } = nextProps.tourneysWithOffset;
      this.setState({
        pagination: {
          total: metaInfo.totalCount,
        },
      });
    }
  }

  handleTableChange = (pagination) => {
    const { loadPage } = this.props;
    loadPage(pagination.current);
  };

  render() {
    const { tourneysWithOffset, emit } = this.props;
    const { tourneys } = tourneysWithOffset;
    return (
      <SmartTable
        dataSource={tourneys}
        columns={columns}
        emit={emit}
        pagination={this.state.pagination}
        handleTableChange={this.handleTableChange}
        rowKey="id"
      />
    )
  }
}

TournamentList.defaultProps = {
  tourneysWithOffset: {},
}

TournamentList.propTypes = {
  tourneysWithOffset: PropTypes.object,
  emit: PropTypes.func.isRequired,
  loadPage: PropTypes.func.isRequired,
}

export default TournamentList;
