import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Spin } from 'antd';

export default class TournamentsList extends Component {
  static propTypes = {
    loadMoreTournaments: PropTypes.func.isRequired,
    tourneysWithCursor: PropTypes.object,
    loading: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    tourneysWithCursor: null,
  }

  onScroll = (e) => {
    const { loading } = this.props;
    const { hasNextPage } = this.props.tourneysWithCursor.pageInfo;
    const elem = e.target;
    if (elem.clientHeight + elem.scrollTop + 100 >= elem.scrollHeight) {
      if (!loading && hasNextPage) this.props.loadMoreTournaments();
    }
  }

  render() {
    const { tourneysWithCursor } = this.props;
    const { loading } = this.props;
    let tournamentsList = [];
    if (tourneysWithCursor) {
      tournamentsList = tourneysWithCursor.edges.map((edge) => {
        return (
          <Card key={edge.node.id} title={edge.node.name} bordered={false} style={{ width: 300, marginTop: '5px', marginBottom: '5px' }}>
            {edge.node.description}
          </Card>
        )
      });
    }
    return (
      <Spin tip="Loading..." spinning={loading} size="large">
        <ul style={{ height: 500, overflowY: 'scroll' }} onScroll={e => this.onScroll(e)}>
          {tournamentsList}
        </ul>
      </Spin>
    );
  }
}
