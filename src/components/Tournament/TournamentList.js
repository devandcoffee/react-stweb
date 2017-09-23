import React from 'react';
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


const TournamentList = ({ data, emit }) => {
  return (
    <SmartTable
      dataSource={data.tourneys ? data.tourneys : []}
      columns={columns}
      emit={emit}
      rowKey="id"
    />
  )
}

TournamentList.defaultProps = {
  data: {},
}

TournamentList.propTypes = {
  data: PropTypes.object,
  emit: PropTypes.func.isRequired,
}

export default TournamentList;
