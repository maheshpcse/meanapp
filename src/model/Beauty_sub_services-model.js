const { Model } = require('objection');

class Beauty_sub_services extends Model {
    static get tableName() {
        return 'beauty_sub_services';
    }

    static get idColumn() {
        return 'sub_service_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                sub_service_id: { type: ['integer', null] },
                main_service_id: { type: ['integer', 'number', null] },
                sub_service_name: { type: ['string', null] },
                service_amount: { type: ['string', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Beauty_sub_services;