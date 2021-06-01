const { Model } = require('objection');

class Beauty_services extends Model {
    static get tableName() {
        return 'beauty_services';
    }

    static get idColumn() {
        return 'main_service_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                main_service_id: { type: ['integer', null] },
                service_name: { type: ['string', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Beauty_services;