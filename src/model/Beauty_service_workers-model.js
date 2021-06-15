const { Model } = require('objection');

class Beauty_service_workers extends Model {
    static get tableName() {
        return 'beauty_service_workers';
    }

    static get idColumn() {
        return 'worker_id';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                worker_id: { type: ['integer', null] },
                owner_id: { type: ['integer', 'number', null] },
                beautician_id: { type: ['integer', 'number', null] },
                name: { type: ['string', null] },
                age: { type: ['integer', 'number', null] },
                experience: { type: ['integer', 'number', null] },
                services: { type: ['string', 'text', null] },
                rating: { type: ['integer', 'number', null] },
                status: { type: ['integer', 'number', null] },
                created_at: { type: 'datetime' },
                updated_at: { type: 'timestamp' }
            }
        }
    }
}

module.exports = Beauty_service_workers;