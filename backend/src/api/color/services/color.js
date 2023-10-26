'use strict';

/**
 * color service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::color.color');
