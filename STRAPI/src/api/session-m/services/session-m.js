'use strict';

/**
 * session-m service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::session-m.session-m');
