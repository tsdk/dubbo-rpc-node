'use strict';

const RegistryBase = require('../base');
const DataClient = require('./data_client');

class ZookeeperRegistry extends RegistryBase {
  get DataClient() {
    return DataClient;
  }

  get clusterOptions() {
    return {
      name: this.options.name || this.options.address,
      singleMode: true,
    };
  }

  get delegates() {
    return {
      register: 'publish',
    };
  }
}

module.exports = ZookeeperRegistry;
